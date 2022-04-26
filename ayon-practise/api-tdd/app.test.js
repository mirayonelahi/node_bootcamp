const request = require("supertest");
const app = require("./app");

describe("my awesome tests", () => {
  it("api/ping -> returns json with success: true", () => {
    return request(app)
      .get("/api/ping")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            success: expect.any(Boolean),
          })
        );
      });
  });

  it("api/posts -> returns error without getting tag", () => {
    return request(app)
      .get("/api/posts")
      .expect("Content-Type", /json/)
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            error: expect.any(String),
          })
        );
      });
  });

  it("/api/posts?tag=tech -> returns json with posts", () => {
    return request(app)
      .get("/api/posts?tag=tech")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            posts: expect.arrayContaining([
              expect.objectContaining({
                author: expect.any(String),
                authorId: expect.any(Number),
                id: expect.any(Number),
                likes: expect.any(Number),
                popularity: expect.any(Number),
                reads: expect.any(Number),
                tags: expect.arrayContaining([
                  // array of strings
                  expect.any(String),
                ]),
              }),
            ]),
          })
        );
      });
  });
});
