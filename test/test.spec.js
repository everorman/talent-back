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
describe("Test", () => {
  test("It should response 14", async () => {
    const response = await request(app).post("/").send({ array: entry1 });
    // console.log(response);
    const body = response.body;
    expect(response.statusCode).toBe(200);
    expect(body.result).toBe(14);
  });
  test("It should response 8", async () => {
    const response = await request(app).post("/").send({ array: entry2 });
    // console.log(response);
    const body = response.body;
    expect(response.statusCode).toBe(200);
    expect(body.result).toBe(8);
  });
  test("It should response 11", async () => {
    const response = await request(app).post("/").send({ array: entry2 });
    // console.log(response);
    const body = response.body;
    expect(response.statusCode).toBe(200);
    expect(body.result).toBe(8);
  });
});