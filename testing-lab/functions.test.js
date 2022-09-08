let myFunctions = require('./functions')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toEqual(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting("James")).toEqual("Hello, James.")
    expect(myFunctions.greeting("Jill")).toEqual("Hello, Jill.")
})

test("additionTest", () => {
    expect(myFunctions.add(1, 2)).toEqual(3)
    expect(myFunctions.add(5, 9)).toEqual(14)
})