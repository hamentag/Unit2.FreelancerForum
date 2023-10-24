
// List of freelencers: names, occupations, and starting prices
const freelancers = [
    { name: "Dr. Slice", strtPrice: 25, occupation: "gardener" },
    { name: "Dr. Pressure", strtPrice: 51, occupation: "programmer" },
    { name: "Prof. Possibility", strtPrice: 43, occupation: "teacher" },
    { name: "Prof. Prism", strtPrice: 81, occupation: "teacher" },
    { name: "Dr. Impulse", strtPrice: 43, occupation: "teacher" },
    { name: "Prof. Spark", strtPrice: 76, occupation: "programmer" },
    { name: "Dr. Wire", strtPrice: 47, occupation: "teacher" },
    { name: "Prof. Goose", strtPrice: 72, occupation: "driver" },
  ];

// Listing names
const names = document.querySelector("#names");
const listingNames = freelancers.map(freelancer => {
    const element = document.createElement("li")
    console.log(element);
    element.innerHTML = freelancer.name;
    console.log(element);
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
avgStrtPrice.textContent = `The average starting price is $${avgStrtPriceValue}`;
