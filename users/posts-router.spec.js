const server = require("../api/server");
const request = require("supertest");
const Posts = require("../users/posts-model");

describe("POST to /api/auth/register", () => {
  it("should respond with status code 201 created", async () => {
    await request(server)
      .post("/api/auth/register")
      .send({ username: "newuser9", password: "secretpass" })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
  it("should respond with status 200 OK", async () => {
    await request(server)
      .post("/api/auth/login")
      .send({ username: "newuser9", password: "secretpass" })
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});

// it('get /', async () => {
//     const res = await request(server).get("/api/posts");
//     expect(res.status).toBe(200);
// })
