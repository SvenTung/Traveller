const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueArray = []
  // for (journey of this.journeys) {
  //   if (uniqueArray.includes(journey.transport) === false) {
  //     uniqueArray.push(journey.transport)
  //   }
  // }
  // return uniqueArray

  this.journeys.forEach((journey) => {
    if (uniqueArray.includes(journey.transport) === false) {
      uniqueArray.push(journey.transport)
    }
  })
  return uniqueArray

  // const uniqueArray = this.journeys.map((journey) => {
  //   return journey.transport
  // })
  // return uniqueArray.filter((transport, index, uniqueArray) =>{
  //   return index === uniqueArray.indexOf(transport)
  ////   return true if the index of the transport equals the first index occurrence of the transport in the array else returns false which will cause it to be removed
  // })
};


module.exports = Traveller;
