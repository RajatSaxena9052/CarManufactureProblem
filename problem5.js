function problem(d,year){
    if((d == undefined || typeof d != "object" )|| (year == undefined || typeof year != "number")){
        return [];
    }
    else{
        let olderCars=[];
        
        if(d.length != 0 ){
        
            for(let i of d){
                    if(i["car_year"] < year ){
                            olderCars.push([i["car_make"]+" "+i["car_model"]]);
                    }
                }
              
            if(olderCars.length == 0){
                    return [];
            }
            else{ 
                    return [olderCars,olderCars.length] 
                }
            }
        else{
            return [];
            }
    }
}

module.exports = problem;