function addCommas(number) {
  // Convert the number to a string
  let numStr = number.toString();

  // Split the number into integer and decimal parts (if applicable)
  let parts = numStr.split('.');
  let integerPart = parts[0];
  let decimalPart = parts[1] || '';

  // Add commas to the integer part
  let formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine integer and decimal parts with optional decimal point
  let result = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;

  return result;
}

// Test cases
console.log(addCommas(1234));          // Output: "1,234"
console.log(addCommas(1000000));       // Output: "1,000,000"
console.log(addCommas(9876543210));    // Output: "9,876,543,210"
console.log(addCommas(6));             // Output: "6"
console.log(addCommas(-10));           // Output: "-10"
console.log(addCommas(-5678));         // Output: "-5,678"
