// In JavaScript, plain objects can operate like dictionaries
myDictionary = {};

// Associate lego model descriptions against their codes
myDictionary[10260] = "Creator Expert - Diner";
myDictionary[10769] = "Extreme Adventure Truck";
myDictionary[31313] = "Mindstorms Home Kit";

console.log("Printing a specific value", myDictionary[10260]);

// Iterate all the entries in the object
Object.entries(myDictionary)
  .map(k => ({
    modelNumber: k[0],
    description: k[1]
  }))
  .forEach(({ modelNumber, description }) =>
    console.log(`Model Number: ${modelNumber} - ${description}`)
  );
