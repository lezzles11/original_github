describe("Authentication Testing", () => {
  it("signup successfully, returns json object", () => {
    let input = {
      email: "test@test.com",
      password: "hellohello",
    };
    let output = {};
    // service class should return user object
    // router class should return user object
  });
  it("should return with 200 status code", () => {
    let input = {};
    let output = {};
  });
  it("should return with 404 status code", () => {});

  it("logins successfully, returns json object", () => {
    // service class should return user object
    // router class should return user object
  });

  it("after login, every request should have a login payload", () => {});
  it("that the user has the wrong password, the backend will always return an object with status code 404 {error: {string}, error_location: {string}}", (string, string) => {
    // service class should return {error: "doesn't seem to be the correc password..."}
    // router classs should return {error: "doesn't seem to be the correc password"}
    // TODO: implement step
  });

  it("that the user has not signed up yet, it will display a notification saying that the user has not signed up yet", () => {
    // service class should return {error: "user has not signed up yet"}
    // router classs should return {error: "user has not signed up yet"}
    // TODO: implement step
  });
});
