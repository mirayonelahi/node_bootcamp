const request = require("supertest");
const app = require("../app");

describe("Api testing", () => {
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

  it("api/posts -> returns invalid sortBy parameter", () => {
    return request(app)
      .get("/api/posts?tags=*&sortBy=anyInvalidValue")
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

  it("api/posts -> returns invalid direction parameter", () => {
    return request(app)
      .get("/api/posts?tags=*&direction=anyInvalidValue")
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

  it("returns posts matching tech tags and sorted by id ascending by default", () => {
    return request(app)
      .get("/api/posts?tags=tech")
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

  it("returns list of posts with multiple tags and sort by reads and desc direction", () => {
    return request(app)
      .get("/api/posts?tags=history,tech,health&sortBy=reads&direction=desc")
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

  it("returns list of posts with multiple tags and sort by reads and asc direction", () => {
    return request(app)
      .get("/api/posts?tags=history,tech,health&sortBy=reads&direction=asc")
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

  it("returns list of posts with multiple tags and sort by likes and desc direction", () => {
    return request(app)
      .get("/api/posts?tags=history,tech,health&sortBy=likes&direction=desc")
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

  it("returns list of posts with multiple tags and sort by likes and asc direction", () => {
    return request(app)
      .get("/api/posts?tags=history,tech,health&sortBy=likes&direction=asc")
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

  it("returns list of posts with multiple tags and sort by popularity and desc direction", () => {
    return request(app)
      .get(
        "/api/posts?tags=history,tech,health&sortBy=popularity&direction=desc"
      )
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

  it("returns list of posts with multiple tags and sort by popularity and asc direction", () => {
    return request(app)
      .get(
        "/api/posts?tags=history,tech,health&sortBy=popularity&direction=asc"
      )
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

  it("returns list of posts with multiple tags and desc direction", () => {
    return request(app)
      .get("/api/posts?tags=history,tech,health&direction=desc")
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

  it("returns list of posts with multiple tags and by default asc by id", () => {
    return request(app)
      .get("/api/posts?tags=history,tech,health")
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

  it("returns list of posts with multiple tags and sort by id", () => {
    return request(app)
      .get("/api/posts?tags=history,tech,health&sortBy=id")
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

  it("returns list of posts with multiple tags and sort by id and direction asc", () => {
    return request(app)
      .get("/api/posts?tags=history,tech,health&sortBy=id&direction=asc")
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
