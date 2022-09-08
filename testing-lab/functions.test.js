let myFunctions = require('./functions')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toEqual(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting("James")).toEqual("Hello, James.")
    expect(myFunctions.greeting("Jill")).toEqual("Hello, Jill.")
})

test("Addition Test", () => {
    expect(myFunctions.add(1, 2)).toEqual(3)
    expect(myFunctions.add(5, 9)).toEqual(14)
})

//Challenge Section
describe("Math Functions", () => {
    test("add", () => {
        expect(myFunctions.add(24, 10)).toEqual(34)
        expect(myFunctions.add(7, 9)).toEqual(16)
    })
    test("multiply", () => {
        expect(myFunctions.multiply(5, 4)).toEqual(20)
        expect(myFunctions.multiply(10, 12)).toEqual(120)
    })
    test("divide", () => {
        expect(myFunctions.divide(16, 4)).toEqual(4)
        expect(myFunctions.divide(24, 8)).toEqual(3)
    })
    test("subtract",() => {
        expect(myFunctions.subtract(24, 12)).toEqual(12)
        expect(myFunctions.subtract(54, 23)).toEqual(31)
    })
})