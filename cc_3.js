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