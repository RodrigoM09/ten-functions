"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(input) {
    return input === true;
}

function isFalse(value) {
    return value === false;
}

    function not(any) {
        return !any
    }

    function addOne(singleInput){
        return parseFloat(singleInput)+ 1;
    }

    function isEven(evenNumber){
        return parseFloat(evenNumber) % 2 === 0;
    }

    function isIdentical(inputOne, inputTwo){
        return inputOne === inputTwo;
    }

    function isEqual(input1, input2){
        return input1 == input2;
    }

    function or(argument1, argument2){
        return argument1 || argument2;
    }

    function and(argumentOne,argumentTwo){
        return argumentOne && argumentTwo;
    }

    function concat(string1, string2){
    return "" + string1 + string2;
    }
