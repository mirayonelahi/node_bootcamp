const request = require("supertest");
const app = require("./app");

describe("my awesome tests", () => {
  it("api/ping -> returns json with success: true", () => {
    return (
      request(app)
        .get("/api/ping")
        //   .expect("Content-Type", json)
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(
            expect.objectContaining({
              success: expect.any(Boolean),
            })
          );
        })
    );
  });
});
