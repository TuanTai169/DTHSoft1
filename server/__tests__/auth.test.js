const request = require("supertest")
const app = require("./../index")

beforeAll(() => {
  process.env.NODE_ENV = "test"
})

// Login success
describe("Login success", () => {
  it("POST /api/auth/login", async () => {
    const user = { email: "admin@gmail.com", password: "12345678" }

    await request(app)
      .post("/api/auth/login")
      .send(user)
      .expect(200)
      .then(async (response) => {
        // Check response
        expect(response.body.success).toBe(true)
        expect(response.body.message).toBe("User logged in successfully")
      })
  })
})
// Incorrect email
describe("Incorrect email", () => {
  test("POST /api/auth/login", async () => {
    const user = { email: "test@gmail.com", password: "12345678" }

    await request(app)
      .post("/api/auth/login")
      .send(user)
      .expect(400)
      .then(async (response) => {
        // Check response
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe("Incorrect email or password")
      })
  })
})

// Incorrect password
describe("Incorrect password", () => {
  test("POST /api/auth/login", async () => {
    const user = { email: "admin@gmail.com", password: "123456789" }

    await request(app)
      .post("/api/auth/login")
      .send(user)
      .expect(400)
      .then(async (response) => {
        // Check response
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe("Incorrect email or password")
      })
  })
})
