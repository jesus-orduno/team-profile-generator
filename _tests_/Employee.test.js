const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee object", () => {
            const employee = new Employee();
            expect(typeof(employee)).toBe("object");
        });
    });

    it("should set the name property", () => {
        const name = "name";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("should set the id property", () => {
        const testValue = 100;
        const e = new Employee("name", testValue);
        expect(e.id).toBe(testValue);
    });

    it("should set the email property", () => {
        const testValue = "test@test.com";
        const e = new Employee("name", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    it("should get the name property", () => {
        const testValue = "name";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });

    it("should get the id property", () => {
        const testValue = 100;
        const e = new Employee("name", testValue);
        expect(e.getId()).toBe(testValue);
    });

    it("should get the email property", () => {
        const testValue = "test@test.com";
        const e = new Employee("name", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });

    it("should get the role property", () => {
        const testValue = "Employee";
        const e = new Employee("name", 1, "test@test.com");
        expect(e.getRole()).toBe(testValue);
    });
});