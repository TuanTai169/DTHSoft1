const request = require("supertest")
const app = require("./../index")

let token

beforeAll(() => {
  process.env.NODE_ENV = "test"
})
beforeEach(async () => {
  const user = { email: "admin@gmail.com", password: "12345678" }
  const response = await request(app).post("/api/auth/login").send(user)
  token = response.body.accessToken
})

// Load user
describe("Load user without token", () => {
  it("GET /api/auth", async () => {
    const response = await request(app).get("/api/auth").expect(401)
    // Check response
    expect(response.body.success).toBe(false)
    expect(response.body.message).toBe("Access token not found")
  })
})

// Load user with invalid token
describe("Load user with invalid token", () => {
  it("GET /api/auth ", async () => {
    const response = await request(app)
      .get("/api/auth")
      .set(
        "Authorization",
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTcyY2YxYzIxODNlMmZiYmQ1YjFjY2QiLCJpYXQiOjE2MzU2NDg0MTYsImV4cCI6MTYzNjI1MzIxNn0.3YrVvDufjj0cXTYAA-hCLlwc7PgV4krNhKGjzbkld9`
      )
      .expect(403)
    // Check response
    expect(response.body.success).toBe(false)
    expect(response.body.message).toBe("Invalid token")
  })
})

// Load user with valid token
describe("Load user with valid token", () => {
  it("GET /api/auth ", async () => {
    const response = await request(app)
      .get("/api/auth")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
    // Check response
    expect(response.body.success).toBe(true)
  })
})

// READ ALL user
describe("READ ALL user ", () => {
  it("GET /api/user ", async () => {
    const response = await request(app)
      .get("/api/user")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
    // Check response
    expect(response.body.success).toBe(true)
  })
})
