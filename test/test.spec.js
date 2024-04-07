const request = require("supertest");
const app = require("../src/app");
const entry1 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];
const entry2 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
const entry3 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 0]
];
const entry4 = [
  [1, 1],
  [1, 1, 1],
  [1, 1, 0]
];
const entry5 = [
  [1, 1, 2],
  [1, 1, 1],
  [1, 1, 0]
];
describe("Test", () => {
  test("It should response 14", async () => {
    const response = await request(app).post("/").send({ square: entry1 });
    const body = response.body;
    expect(response.statusCode).toBe(200);
    expect(body.result).toBe(14);
  });
  test("It should response 8", async () => {
    const response = await request(app).post("/").send({ square: entry2 });
    const body = response.body;
    expect(response.statusCode).toBe(200);
    expect(body.result).toBe(8);
  });
  test("It should response 11", async () => {
    const response = await request(app).post("/").send({ square: entry3 });
    const body = response.body;
    expect(response.statusCode).toBe(200);
    expect(body.result).toBe(11);
  });
  test("It should response 400 if has different sizes", async () => {
    const response = await request(app).post("/").send({ square: entry4 });
    expect(response.statusCode).toBe(400);
  });
  test("It should response 400 if has values different to 1 or 0", async () => {
    const response = await request(app).post("/").send({ square: entry5 });
    expect(response.statusCode).toBe(400);
  });
});