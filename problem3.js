function problem(d){
    if(d == undefined  || typeof d != "object"){
        return [];
    }
    else{
    let carModels = []

    if(d.length != 0 ){   
        for(let i of d){
            carModels.push(i["car_model"]);
        }
        return carModels.sort()
    }else{
            return [];
        }
    }
}

module.exports = problem
