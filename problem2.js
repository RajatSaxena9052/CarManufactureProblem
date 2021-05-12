function problem(d){
    if(d == undefined ){
        return [];
    }
    else{

        let lastIndex = d.length - 1 ;

        if(d.length != 0 ){     
            return d[lastIndex]
        }
        else{
            return [];   
        }
    }
}

module.exports = problem