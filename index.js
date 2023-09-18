const returnFirstTwoDrivers = function(namesArray) {
    return namesArray.slice(0, 2);
};


const returnLastTwoDrivers = function(namesArray) {
    return namesArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// circle back
function createFareMultiplier(int) {
    const fareMultiplier = function(fare) {
        return fare * int;
    }
    return fareMultiplier
};

// const fareDoubler = function(fare) {
//     return fare * 2;
// };

// const fareTripler = function(fare) {
//     return fare * 3;
// };

const fareDoubler = createFareMultiplier(2)
fareDoubler(10)

const fareTripler = createFareMultiplier(3)
fareDoubler(10)


function selectDifferentDrivers(arrayOfDrivers, callback) {
    return callback(arrayOfDrivers);
};