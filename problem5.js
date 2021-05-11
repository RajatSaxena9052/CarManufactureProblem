function p5(d){
    var carYears = [];
    var olderCars=[];
    for(var i of d){
        if(i["car_year"] < 2000 ){
        olderCars.push([i["car_make"]+" "+i["car_model"]]);
        }
    }
    return [olderCars,olderCars.length]

}

module.exports = {p5}