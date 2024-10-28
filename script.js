// Anniversary Date: October 25, 2017
const anniversaryDate = new Date(2017, 9, 25); // Months are 0-based in JS (9 = October)
let years; // Declare a global variable to store years

// Function to calculate the correct ordinal suffix
function getOrdinalSuffix(number) {
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return "th";
    }
    
    switch (lastDigit) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

// Calculate date difference
function calculateDateDifference() {
    const today = new Date();
    years = today.getFullYear() - anniversaryDate.getFullYear();
    let months = today.getMonth() - anniversaryDate.getMonth();
    let days = today.getDate() - anniversaryDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const weeks = Math.floor(days / 7);
    days = days % 7;

    return `${years} years, ${months} months, ${weeks} weeks, and ${days} days.`;
}

// Update date difference in the DOM
document.getElementById('date-difference').textContent = calculateDateDifference() + "......";

// Calculate the appropriate ordinal suffix for the years
const ordinalSuffix = getOrdinalSuffix(years);

// Update the year with the suffix in the DOM (make sure there is an element with id 'year')
document.getElementById('year').textContent = `${years}${ordinalSuffix}`;
