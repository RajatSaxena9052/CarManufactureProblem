function problem(d){
    var bwCars= [];
    for(var i of d){
        if(i["car_make"]== "Audi" || i["car_make"]== "BMW"){
        bwCars.push(i);
        }
    }
    return JSON.stringify(bwCars);

}

module.exports = problem