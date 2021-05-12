function problem(d,n){
    if(d == undefined || n == undefined){
        return []
    }
    else{
    
    if(d.length != 0 ){     
        for(let i=0;i<d.length;i++){
            if(d[i]['id'] === n){return d[i]}
        }
        return [] ;
    }
    else{
         return [];    
    }
}
    
}
module.exports = problem;