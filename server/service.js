const { cities, vehicles } = require('./appData');

// get criminal location city
function getFugitiveLocation() {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}

// has cop captured criminal
function isCaptured(copCity, copVehicle, fugitiveCity) {
    const copDistance = cities.find(city => city.name === copCity).distance;
    const vehicleRange = vehicles.find(vehicle => vehicle.type === copVehicle).range;
    const distanceToTravel = Math.abs(copDistance - fugitiveCity.distance);
    
    return distanceToTravel <= vehicleRange;
}

module.exports = { isCaptured, getFugitiveLocation };
