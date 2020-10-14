function rotLeft(a, d) {
    const aux1 = a.slice(0,d)
    const aux2 = a.slice(d,a.length)
    return aux2.concat(...aux1)
}
