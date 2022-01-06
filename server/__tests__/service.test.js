const request = require("supertest")
const app = require("../index")

let token

beforeAll(() => {
  process.env.NODE_ENV = "test"
})
beforeEach(async () => {
  const user = { email: "admin@gmail.com", password: "TuanTai@412" }
  const response = await request(app).post("/api/auth/login").send(user)
  token = response.body.accessToken
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
      name: "A nice morninggggg",
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

//Test CREATE service with failing system
describe("Test CREATE service with failing system", () => {
  it("POST api/service/", async () => {
    const service = {
      name: 123,
      price: "abc",
    }

    await request(app)
      .post("/api/service")
      .set("Authorization", `Bearer ${token}`)
      .send(service)
      .then((response) => {
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe("Internal server error")
      })
  })
})

//Test CREATE service already taken
describe("Test CREATE service already taken", () => {
  it("POST api/service/", async () => {
    const service = {
      name: "A nice morning",
      price: 1000000,
    }

    await request(app)
      .post("/api/service")
      .set("Authorization", `Bearer ${token}`)
      .send(service)
      .then((response) => {
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe("Service already taken")
      })
  })
})

// Test Create a already existed service
describe("Test Create a already existed service", () => {
  it("POST api/service/", async () => {
    const service = {
      name: "A nice morninggggg",
      price: 1000000,
    }

    await request(app)
      .post("/api/service")
      .set("Authorization", `Bearer ${token}`)
      .send(service)
      .then((response) => {
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe("Service already taken")
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

// Test Update service without name
describe("Test Update service without name", () => {
  it("PUT api/service/:id", async () => {
    const service = {
      price: 1000000,
    }

    await request(app)
      .put("/api/service/update/6172347ff24904c216ca8086")
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

// Test Update service without price
describe("Test Update service without name", () => {
  it("PUT api/service/:id", async () => {
    const service = {
      name: "A morning updatee",
    }

    await request(app)
      .put("/api/service/update/6172347ff24904c216ca8086")
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

// Test UPDATE with error system
describe("Test Update service error system", () => {
  it("PUT api/service/:id", async () => {
    const service = {
      name: 123,
      price: "abc",
    }

    await request(app)
      .put("/api/service/update/6172347ff24904c216ca8086")
      .set("Authorization", `Bearer ${token}`)
      .send(service)
      .then((response) => {
        expect(response.body.success).toBe(false)
        expect(response.body.message).toBe("Internal server error")
      })
  })
})
