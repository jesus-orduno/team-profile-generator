const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should set the github property", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("name", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
  });

  it("should get the github property", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("name", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });

  it("should get the role property", () => {
    const testValue = "Engineer";
    const e = new Engineer("name", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
  });
});