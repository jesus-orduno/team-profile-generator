const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should set the office number property', () => {
        const testValue = 100;
        const m = new Manager('name', 1, 'test@test.com', testValue);
        expect(m.officeNumber).toBe(testValue);
    });

    it('should get the office number property', () => {
        const testValue = 100;
        const m = new Manager('name', 1, 'test@test.com', testValue);
        expect(m.getOfficeNumber()).toBe(testValue);
    });

    it('should get the role property', () => {
        const testValue = 'Manager';
        const m = new Manager('name', 1, 'test@test.com', 100);
        expect(m.getRole()).toBe(testValue);
    });
});