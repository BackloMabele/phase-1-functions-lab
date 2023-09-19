function distanceFromHqInBlocks(someValue) {
    return (Math.abs(someValue - 42))
  }
  function distanceFromHqInFeet(someValue) {
    return (264 * distanceFromHqInBlocks(someValue));
  }
  function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet < 1) {
        return 'Distance cannot be zero or negative';
    } else if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

