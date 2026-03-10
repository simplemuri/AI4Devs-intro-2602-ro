/**
 * script.js
 *
 * Handles user interaction and provides a utility function
 * to reverse a string only when the input length is greater than 3.
 *
 * The core logic is written as a pure function so it can be tested
 * independently from the DOM layer.
 */

/**
 * Reverse a string if it has more than 3 characters.
 * Otherwise return the original string unchanged.
 *
 * @param {string} input - The string to evaluate and potentially reverse
 * @returns {string} - The processed string
 */
function reverseIfLongerThanThree(input) {
  // Defensive programming: validate input
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Business rule: only reverse if length > 3
  if (input.length <= 3) {
    return input;
  }

  // Convert to array -> reverse -> join back to string
  return input.split("").reverse().join("");
}

/**
 * UI Handler
 * Connects the function to the DOM.
 */
function handleReverseClick() {
  const inputElement = document.getElementById("stringInput");
  const resultElement = document.getElementById("result");

  const userInput = inputElement.value;

  try {
    const processedString = reverseIfLongerThanThree(userInput);
    resultElement.textContent = processedString;
  } catch (error) {
    resultElement.textContent = error.message;
  }
}

/**
 * Initialize event listeners when DOM is ready.
 */
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("reverseBtn");

  if (button) {
    button.addEventListener("click", handleReverseClick);
  }
});

/**
 * -----------------------
 * Basic Unit Tests
 * -----------------------
 * These tests run in the browser console.
 * In production you would use Jest / Vitest.
 */

function runTests() {
  console.assert(
    reverseIfLongerThanThree("abcd") === "dcba",
    "Test 1 Failed: should reverse strings longer than 3"
  );

  console.assert(
    reverseIfLongerThanThree("abc") === "abc",
    "Test 2 Failed: should not reverse strings of length <= 3"
  );

  console.assert(
    reverseIfLongerThanThree("") === "",
    "Test 3 Failed: empty string should return empty"
  );

  console.assert(
    reverseIfLongerThanThree("a") === "a",
    "Test 4 Failed: single character should remain unchanged"
  );

  console.assert(
    reverseIfLongerThanThree("hello") === "olleh",
    "Test 5 Failed: typical reverse case"
  );

  console.log("All tests executed.");
}

// Run tests automatically when file loads
runTests();