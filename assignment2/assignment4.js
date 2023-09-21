function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
const exampleString = "krishna";
const capitalizedString = capitalizeFirstLetter(exampleString);
console.log(capitalizedString);
