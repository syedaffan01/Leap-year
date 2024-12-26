function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leap year.");
            } else {
                console.log("Not leap year.");
            }
        } else {
            console.log("Leap year.");
        }
    } else {
        console.log("Not leap year.");
    }
}


isLeapYear(2400); // Example input 1
isLeapYear(1989); // Example input 2
