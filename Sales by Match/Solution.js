function sockMerchant(n, ar) {
    let res = 0, auxArray = ar, auxLength = ar.length, flag = true;
    while(flag){
        auxArray.length == 0 ? flag = false : ''

        auxArray = auxArray.filter((value, index, arr)=>{
            return value !== arr[0]
        })

        res += Math.floor((auxLength - auxArray.length) / 2)

        auxLength = auxArray.length
    }
    return res
}