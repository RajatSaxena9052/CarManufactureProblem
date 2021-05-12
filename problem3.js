function problem(d){
    var carModels = []
    for(var i of d){
        carModels.push(i["car_model"]);
    }
    return carModels.sort()

}

module.exports = {problem}
