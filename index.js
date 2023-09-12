const returnFirstTwoDrivers = function(namesArray) {
    return namesArray.slice(0, 2);
};


const returnLastTwoDrivers = function(namesArray) {
    return namesArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// circle back
function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    }
};

const fareDoubler = function(fare) {
    return fare * 2;
};

const fareTripler = function(fare) {
    return fare * 3;
};

function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers);
};