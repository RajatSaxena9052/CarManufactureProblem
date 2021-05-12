function problem(d){
    var carYears = [];
    var olderCars=[];
    for(var i of d){
        carYears.push(i["car_year"]);
        }
    return carYears
}

module.exports = problem
