const request = require("supertest")
const app = require("./../index")

let token

beforeAll(() => {
  process.env.NODE_ENV = "test"
})

beforeEach(async () => {
  const user = { email: "admin@gmail.com", password: "TuanTai@412" }
  const response = await request(app).post("/api/auth/login").send(user)
  token = response.body.accessToken
})

// READ ALL ROOM
describe("READ ALL ROOM ", () => {
  it("GET /api/room ", async () => {
    const response = await request(app)
      .get("/api/room")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
    // Check response
    expect(response.body.success).toBe(true)
  })
})

// READ 1 Room
describe("READ 1 ROOM ", () => {
  it("GET /api/room/:id ", async () => {
    const response = await request(app)
      .get("/api/room/615facd1b13b84515abed925")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
    // Check response
    expect(response.body.success).toBe(true)
    expect(response.body.room.roomNumber).toBe("203")
    expect(response.body.room.status).toBe("READY")
  })
})

// Change room's status to FIXING
describe("Change room's status to FIXING", () => {
  it("PUT /api/room/change-status/:status/:id ", async () => {
    const response = await request(app)
      .put("/api/room/change-status/fix/615facd1b13b84515abed925")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
    // Check response
    expect(response.body.success).toBe(true)
    expect(response.body.message).toBe("Room updated successfully")
    expect(response.body.updatedRoom.roomNumber).toBe("203")
    expect(response.body.updatedRoom.status).toBe("FIXING")
  })
})

// Change room's status to READY
describe("Change room's status to READY ", () => {
  it("PUT /api/room/change-status/:status/:id ", async () => {
    const response = await request(app)
      .put("/api/room/change-status/ready/615facd1b13b84515abed925")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
    // Check response
    expect(response.body.success).toBe(true)
    expect(response.body.message).toBe("Room updated successfully")
    expect(response.body.updatedRoom.roomNumber).toBe("203")
    expect(response.body.updatedRoom.status).toBe("READY")
  })
})
