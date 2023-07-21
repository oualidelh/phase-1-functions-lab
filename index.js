function distanceFromHqInBlocks(someValue) {
    let result = someValue - 42;
    if (result < 0) {
        return - (result);
    } else {
        return result;
    }
}
function distanceFromHqInFeet(someValue) {
    const feets = (distanceFromHqInBlocks(someValue)) * 264;
    return feets;
}
function distanceTravelledInFeet(start, dest) {
    let result = dest - start;
    if (result < 0) {
        return - (result * 264);
    } else {
        return result * 264;
    }
}
function calculatesFarePrice(start, destination) {
    const feets = distanceTravelledInFeet(start, destination);
    switch (true) {
        case (feets <= 400):
            return 0;
        case (feets > 400 && feets <= 2000):
            return 2.56;
        case (feets > 2000 && feets <= 2500):
            return 25;
        case (feets > 2500):
            return 'cannot travel that far';
    }
}
