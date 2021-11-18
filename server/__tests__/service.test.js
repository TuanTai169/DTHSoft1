const request = require("supertest")
const app = require("../index")

let token

beforeAll(() => {
  process.env.NODE_ENV = "test"
})
beforeEach(async () => {
  const user = { email: "admin@gmail.com", password: "12345678" }
  const response = await request(app).post("/api/auth/login").send(user)
  token = response.body.accessToken
})

// Test READ ALL services with success is true
describe("Test READ ALL services with success is true", () => {
  it("GET api/service/", async () => {
    const response = await request(app)
      .get("/api/service")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)

    expect(response.body.success).toBe(true)
  })
})

//Test READ ALL services have a Free & easy package
describe("Test READ ALL services have a Free & easy package", () => {
  it("GET api/service/", async () => {
    const response = await request(app)
      .get("/api/service")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)

    let names = response.body.services.map((service) => service.name)

    expect(names).toContain("Free & Easy package")
  })
})

//Test CREATE service without price
describe("Test CREATE service without price", () => {
  it("POST api/service/", async () => {
    const service = {
      name: "A nice morning",
    }
    await request(app)
      .post("/api/service")
      .send(service)
      .set("Authorization", `Bearer ${token}`)
      .expect(400)
      .then((response) => {
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe(
          "Name and price of service are required"
        )
      })
  })
})

//Test CREATE service without price
describe("Test CREATE service without name", () => {
  it("POST api/service/", async () => {
    const service = {
      price: 1000000,
    }

    await request(app)
      .post("/api/service")
      .set("Authorization", `Bearer ${token}`)
      .send(service)
      .then((response) => {
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe(
          "Name and price of service are required"
        )
      })
  })
})

//Test CREATE service with status success
describe("Test CREATE service with status success", () => {
  it("POST api/service/", async () => {
    const service = {
      name: "A nice morning test",
      price: 1000000,
    }

    await request(app)
      .post("/api/service")
      .set("Authorization", `Bearer ${token}`)
      .send(service)
      .then((response) => {
        expect(response.body.success).toBe(true)
        expect(response.body.message).toBe("Service created successfully")
      })
  })
})

// Test update service
describe("Test UPDATE service", () => {
  it("PUT api/service/:id", async () => {
    const service = {
      name: "A nice morningupdate",
      price: 1000000,
    }

    await request(app)
      .put("/api/service/update/6172347ff24904c216ca8086")
      .set("Authorization", `Bearer ${token}`)
      .send(service)
      .then((response) => {
        expect(response.body.success).toBe(true)
        expect(response.body.message).toBe("Service updated successfully")
      })
  })
})

//READ 1 Service
describe("Test READ one service", () => {
  it("GET api/service/:id", async () => {
    await request(app)
      .get("/api/service/6172347ff24904c216ca8086")
      .set("Authorization", `Bearer ${token}`)
      .then((response) => {
        expect(response.body.success).toBe(true)
        expect(response.body.service.name).toBe("A nice morningupdate")
      })
  })
})

// // Test DELETE service
// describe("Test DELETE one service", () => {
//   it("PUT api/service/delete/:id", async () => {
//     await request(app)
//       .put("/api/service/delete/6172347ff24904c216ca8086")
//       .set("Authorization", `Bearer ${token}`)
//       .then((response) => {
//         expect(response.body.success).toBe(true)
//         expect(response.body.message).toBe("Service deleted successfully")
//       })
//   })
// })
