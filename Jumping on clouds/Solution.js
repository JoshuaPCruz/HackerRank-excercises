function jumpingOnClouds(c) {
    let res = 0
    for(let count = 0; count < c.length; count++){
        if(c[count + 2] == 0){
            count = count + 1
            res = res + 1
        }else if(c[count + 1] == 0){
            res = res + 1
        }
    }
    return res
}