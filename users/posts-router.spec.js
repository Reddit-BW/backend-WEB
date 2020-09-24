const server = require("../api/server");
const request = require("supertest");
const Posts = require("../users/posts-model");
const db = require("../database/dbConfig");
const authenticate = require("../auth/authenticate-middleware");
jest.mock("../auth/authenticate-middleware");

describe("POST to /api/auth/register", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("should respond with status code 201 created", async () => {
    await request(server)
      .post("/api/auth/register")
      .send({ username: "newuser9", password: "secretpass" })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });
});

describe("Get /api/posts", () => {
  it("should respond with status code 200 created", async () => {
    await request(server)
      .post("/api/auth/login")
      .send({ username: "newuser9", password: "secretpass" })
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it("should respond with status code 200", async () => {
    await request(server)
      .get("/api/posts")
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});
