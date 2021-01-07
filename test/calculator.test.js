// IMPORT MODULES under test here:
import { addition, subtraction, multiply, divide } from '../calculatorUtils.js'

const test = QUnit.test;

test('test addition function returns the sum of two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 1;
    const num2 = 2;
    const expectedTotal = 3

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedTotal);
});

test('test subtract function returns num1 minus num2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 5;
    const num2 = 2;
    const expectedTotal = 3

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtraction(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedTotal);
});

test('test multiply function returns num1 times num2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 2;
    const num2 = 2;
    const expectedTotal = 4

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedTotal);
});

test('test divide function returns num1 divided by num2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 4;
    const num2 = 2;
    const expectedTotal = 2

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedTotal);
});
