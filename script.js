// Get the current date and add leading zeros to the month and day.
let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

if (month < 10) {
  month = "0" + month;
}

if (day < 10) {
  day = "0" + day;
}

let dateMessage = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").textContent = dateMessage;

// Convert four separate strings and check each result.
let bookCountText = "12";
let priceText = "8.75";
let campusText = "CSUN";
let scoreText = "90";

let bookCount = Number(bookCountText);
let price = Number(priceText);
let campusNumber = Number(campusText);
let score = Number(scoreText);

let bookCountResult = '<p>Original: "' + bookCountText + '" | Converted: ' + bookCount +
  " | isNaN: " + Number.isNaN(bookCount) + " | isInteger: " + Number.isInteger(bookCount) + "</p>";

let priceResult = '<p>Original: "' + priceText + '" | Converted: ' + price +
  " | isNaN: " + Number.isNaN(price) + " | isInteger: " + Number.isInteger(price) + "</p>";

let campusResult = '<p>Original: "' + campusText + '" | Converted: ' + campusNumber +
  " | isNaN: " + Number.isNaN(campusNumber) + " | isInteger: " + Number.isInteger(campusNumber) + "</p>";

let scoreResult = '<p>Original: "' + scoreText + '" | Converted: ' + score +
  " | isNaN: " + Number.isNaN(score) + " | isInteger: " + Number.isInteger(score) + "</p>";

let conversionResults = bookCountResult + priceResult + campusResult + scoreResult;
document.getElementById("numberConversionOutput").innerHTML = conversionResults;

// Add three scores, then divide to find the average.
let firstScore = 82;
let secondScore = 89;
let thirdScore = 94;
let totalScore = firstScore + secondScore + thirdScore;
let averageScore = totalScore / 3;

let mathResults = "<p>Scores: " + firstScore + ", " + secondScore + ", " + thirdScore + "</p>" +
  "<p>Total: " + totalScore + "</p>" +
  "<p>Average: " + averageScore.toFixed(2) + "</p>";

document.getElementById("mathOutput").innerHTML = mathResults;

// Display messages based on the conversion and the average score.
let validationMessage;

if (Number.isNaN(campusNumber)) {
  validationMessage = '"' + campusText + '" is not a valid number.';
} else {
  validationMessage = '"' + campusText + '" is a valid number.';
}

document.getElementById("validationMessage").textContent = validationMessage;

let gradeMessage;

if (averageScore >= 70) {
  gradeMessage = "Passing";
} else {
  gradeMessage = "Not passing";
}

document.getElementById("gradeMessage").textContent = gradeMessage;
