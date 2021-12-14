// Code your solution in this file!
const returnFirstTwoDrivers = (x) => x.slice(0,2);
const returnLastTwoDrivers = (x) => x.slice(x.length - 2);

const drivers = ['Antonia', 'Nuru', 'Amari', 'Claudia'];

// console.log( returnFirstTwoDrivers(drivers));
// console.log( returnLastTwoDrivers(drivers));
// console.log('drivers: ', drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (x) => {
    return function(fare) { return x * fare }
};

const fareDoubler = createFareMultiplier(2);
// console.log( fareDoubler(1) );

const fareTripler = createFareMultiplier(3);
// console.log( fareTripler(1));

const selectDifferentDrivers = (drivers, fn) => {
    return fn(drivers);
}

// console.log(selectDifferentDrivers(['a','b','c','d'], 0))
// console.log(selectDifferentDrivers(['a','b','c','d'], 1))