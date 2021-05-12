function problem(d){

    if(d == undefined || typeof d != "object"){
        return [];
    }
    else{
            let bwCars= [];

        if(d.length != 0){

            for(let i of d){
                if(i["car_make"]== "Audi" || i["car_make"]== "BMW"){
                bwCars.push(i);
                }    
            }
            if(bwCars.length == 0){
                    return []
                    }
                    else{
                        return [JSON.stringify(bwCars)];
                    }
        }
        else{
            return [];
            }
        }
}

module.exports = problem