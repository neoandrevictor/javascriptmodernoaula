console.log("===Expressões Regulares===");
//regex literal

var input="03802-020"
console.log(
    /^\d{5}\-?\d{3}$/.test(input)
)
console.log(
    input.match(/^\d{5}\-?\d{3}$/)
)