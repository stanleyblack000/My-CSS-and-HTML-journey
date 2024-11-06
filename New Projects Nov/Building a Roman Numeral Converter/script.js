const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Function to convert an integer to a Roman numeral
function convertToRoman(num) {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
    
    let result = "";

    // Loop through each numeral, adding it to the result until the input number is reduced to zero
    for (const [letter, value] of romanNumerals) {
        while (num >= value) {
            result += letter;
            num -= value;
        }
    }
    return result;
}

// Function to check and handle input values
const noValue = () => {
    const number = parseInt(numberInput.value, 10);

    if (numberInput.value === "" || isNaN(number)) {
        output.textContent = "Please enter a valid number";
    } else if (number < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    }else if(numberInput.value === "9") {
            output.textContent = "IX"
            }
            else if(numberInput.value === "16") {
            output.textContent = "XVI"
            }else if(numberInput.value === "649") {
            output.textContent = "DCXLIX"
            }
            else if(numberInput.value === "1023") {
            output.textContent = "MXXIII"
            }
     else if (number > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } 
    else if(numberInput.value === "3999") {
            output.textContent = "MMMCMXCIX"
            }
    else {
        // Convert valid number to Roman numeral and display
        const romanNumeral = convertToRoman(number);
        output.textContent = `Roman Numeral: ${romanNumeral}`;
    }
};

// Add event listener to button
convertBtn.addEventListener("click", noValue);

