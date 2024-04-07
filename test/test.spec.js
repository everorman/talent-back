const request = require("supertest");
const app = require("../src/app");
const entry1 = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];
describe("Test", () => {
  test("It should response the POST method", async () => {
    const response = await request(app).post("/").send({ array: entry1 });
    // console.log(response);
    expect(response.statusCode).toBe(200);
  });
});