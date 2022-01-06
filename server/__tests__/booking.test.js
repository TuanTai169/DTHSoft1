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

// Test READ ALL BOOKING
describe("Test READ ALL BOOKING with success is true", () => {
  it("GET api/booking/", async () => {
    const response = await request(app)
      .get("/api/booking")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)

    expect(response.body.success).toBe(true)
  })
})

// Test CREATE A BOOKING with room has booking or Occupied
describe("Test CREATE BOOKING with room has booking or Occupied", () => {
  it("POST api/booking/book", async () => {
    const booking = {
      rooms: ["615faccab13b84515abed91d"],
      customer: "619373cb95264a9b4c63f88e",
      checkInDate: "2021-12-17 12:00",
      checkOutDate: "2021-12-25 12:00",
      services: [],
      deposit: 0,
      discount: 0,
    }
    await request(app)
      .post("/api/booking/book")
      .set("Authorization", `Bearer ${token}`)
      .send(booking)
      .then((response) => {
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe("Room has been booked or occupied")
      })
  })
})

// Test CREATE A BOOKING successfully
describe("Test CREATE BOOKING successfully ", () => {
  it("POST api/booking/book", async () => {
    const booking = {
      rooms: ["615facccb13b84515abed921"],
      customer: "619373cb95264a9b4c63f88e",
      checkInDate: "2021-12-17 12:00",
      checkOutDate: "2021-12-25 12:00",
      services: [],
      deposit: 0,
      discount: 0,
    }
    await request(app)
      .post("/api/booking/book")
      .set("Authorization", `Bearer ${token}`)
      .send(booking)
      .then((response) => {
        expect(response.body.success).toBe(true)
        expect(response.body.message).toBe("BOOKING successfully")
      })
  })
})
