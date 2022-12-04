const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should set the school property", () => {
    const testValue = "UofA";
    const i = new Intern("name", 1, "test@test.com", testValue);
    expect(i.school).toBe(testValue);
  });

  it("should get the school property", () => {
    const testValue = "UofA";
    const i = new Intern("name", 1, "test@test.com", testValue);
    expect(i.getSchool()).toBe(testValue);
  });

  it("should get the role property", () => {
    const testValue = "Intern";
    const i = new Intern("name", 1, "test@test.com", "UofA");
    expect(i.getRole()).toBe(testValue);
  });
});