
// ------ Lists of possible freelencers' names, occupations, and starting prices----------//
const frNames = ["Dr. Yassir", "Dr. Slice", "Dr. Pressure", "Prof. Prism", "Dr. Impulse",
                        "Dr. Wire", "Prof. Goose", "Prof. Wassim"]
const frOccupations = ["Programmer","Teacher","Gardener","Driver","Engineer"]
const frStrtPrices = [85, 94, 56, 78, 64, 83, 75]

// ----------------------------------- Main process --------------------------------------//
const freelancers = [
    { name: "Dr. Yassir", strtPrice: 95, occupation: "Programmer" },
    { name: "Prof. Wassim", strtPrice: 74, occupation: "Teacher" }
];      // Initial state: 2 first freelancers

const addFreelancerIntervalId = setInterval(addFreelancer, 3000);
render(); // Call the render() function once to render the initial state

// ----------------------------------- ------------ --------------------------------------//

/**
 * The addFreelancer function
 * Adds a freelancer to available freelancers array and calls the render() 
 * function until the list be equal to 10
 */
function addFreelancer(){
    freelancers.push({ 
        name: randomElement(frNames), 
        strtPrice: randomElement(frStrtPrices), 
        occupation: randomElement(frOccupations)
    }); 
    render();
    if(freelancers.length >= 10)
    clearInterval(addFreelancerIntervalId);
}
// ----------------------------------- ------------ --------------------------------------//
/**
 * The render() function
 * updates the data displayed on the html page reflect the current state.
 */
function render() {
    // Listing names
    const names = document.querySelector("#names");
    const listingNames = freelancers.map(freelancer => {
        const element = document.createElement("li")
        element.innerHTML = freelancer.name;
        return element;
    });
    names.replaceChildren(...listingNames)

    // Listing occupations 
    const occupations = document.querySelector("#occupations");
    const listingOccupations = freelancers.map(freelancer => {
        const element = document.createElement("li")
        element.innerHTML = freelancer.occupation;
        return element;
    });
    occupations.replaceChildren(...listingOccupations)

    /// Listing starting prices
    const strtPrices = document.querySelector("#strtPrices");
    const listingStrtPrices = freelancers.map(freelancer => {
        const element = document.createElement("li")
        element.innerHTML = `$${freelancer.strtPrice}`;
        return element;
    });
    strtPrices.replaceChildren(...listingStrtPrices);

    // Calculate the average starting price
    const avgStrtPrice = document.querySelector("#avgStrtPrice");
    const avgStrtPriceValue = freelancers.reduce((accum, currVal) => 
                            accum + currVal.strtPrice, 0) / (freelancers.length);
    avgStrtPrice.textContent = `The average starting price is $${avgStrtPriceValue.toFixed(2)}`;
}
// ----------------------------------- ------------ --------------------------------------//
/**
 * The randomElement() function
 * Takes an array of strings (names / occupations) or numbers (starting prices) 
 * and returns a random element of the array
 * @param {number[] or string[]} arr array of numbers or strings
 * @returns {number or string} a random element of the array
 */
function randomElement(arr){
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}