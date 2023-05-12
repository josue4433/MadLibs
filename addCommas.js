function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
console.log(addCommas(1000)); // Output: "1,000"
console.log(addCommas(1000000)); // Output: "1,000,000"
console.log(addCommas(1234567890)); // Output: "1,234,567,890"

module.exports = addCommas;