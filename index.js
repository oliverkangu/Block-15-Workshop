let userInputString = prompt(
    "Please enter the list of froyo flavors you would like to order",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

function getFroyoObj(froyoOrder) {
    const froyoArray = froyoOrder.split(",");
    const froyoObj = {};

    for (let i = 0; i < froyoArray.length; i++) {
        const currentFlavor = froyoArray[i];
        if (!froyoObj[currentFlavor]) {
            froyoObj[currentFlavor] = 1;
        } else {
            froyoObj[currentFlavor] += 1;
        }
    }

    return froyoObj;
}

console.table(getFroyoObj(userInputString));