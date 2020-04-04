var data = [{
    principal: 2500,
    time: 1.8
}, {
    principal: 1000,
    time: 5
}, {
    principal: 3000,
    time: 1
}, {
    principal: 2000,
    time: 3
}];

// Write a function called "interestCalculator"
function interestCalculator(arr) {
    let rate;
    let interestData = [];

    arr.forEach((entry, index) => {
        // Using conditional statements, determine the rate applicable for each object
        if (entry.principal >= 2500 && entry.time > 1 && entry.time < 3) {
            rate = 3;
        } else if (entry.principal >= 2500 && entry.time >= 3) {
            rate = 4;
        } else if (entry.principal < 2500 || entry.time <= 1) {
            rate = 2;
        } else {
            rate = 1
        }

        // Calculating the interest of each objects using the formula: (principal * rate * time) / 100.
        let interest = (entry.principal * entry.time * rate) / 100;

        // In the new array, create an object for each index and input necessary information
        let obj = {
            principal: entry.principal,
            rate: rate,
            time: entry.time,
            interest: interest,
        };
        interestData.push(obj);
    })
    console.log(interestData);
    return interestData;
}

// Call/execute the function & pass the data array created
interestCalculator(data);