function countingValleys(steps, path) {
    // Write your code here
    let wholePath = 0,res = 0,aux = 0
    for(let count = 0; count < steps; count++ ){
        aux = path[count] == 'U' ? 1 : -1;
        wholePath == -1 && (wholePath + aux) == 0 ? res = res + 1 : ""
        wholePath = wholePath + aux;
    }
    return res
}