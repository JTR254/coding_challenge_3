// Task 1 - Product Price Management

let prices = [50, 65, 70, 40, 45];
prices.push(75); // adds 75 to the end of the array
prices.splice(0,1,55); // replaces the first number in the array with 55

console.log("Prices:", prices)

// Task 2 - Modifying Customer Orders

let orders = [10, 12, 8, 5, 7];
orders[2] += 5; // adds 5 to the third number in the array
let totalOrders = orders.reduce((total, amount) => total + amount, 0); // calculates the total orders in the array

console.log(orders);
console.log("Total Orders:", (totalOrders))

// Task 3 - Employee Performance Tracking

let employee = {
    name: "Rudy Wood", // employee's name is Rudy Wood
    role: "Manager", // employee is a manager
    performanceScore: "3", // employee's performance score is a 3 out of 5
    isActive: true // employee is active
};

employee.performanceScore = 2; // updates the employees performance score to a 2 instead of a 3
employee.promotionEligible = false; // the employee is not elligible for a promotion

console.log(employee) // updates the employee object

// Task 4 - Customer Feedback Records

let feedback = [
    {
        customerName: "Joseph Willock", // customer's name is Joseph Willock
        feedbackText: "The product is fantastic quality!",
        rating: 4.5                    // customer rates the product 4.5 out of 5
    },
    {
        customerName: "Maggie Smith", // customer's name is Maggie Smith
        feedbackText: "It took forever to ship.", 
        rating: 2                    // customer rates the product 2 out of 5
    },
    {
        customerName: "Brittany Freeman", // customer's name is Brittany Freeman
        feedbackText: "Works great!", 
        rating: 5                        // customer rates the product 5 out of 5
    }
];

feedback.push ({
    customerName: "Jason Bates", // customer's name is Jason Bates
    feedbackText: "I love this! I wish it got here quicker though.",
    rating: 3                   // customer rates the product 3 out of 5
})  // an object is added to the array

console.log(feedback)