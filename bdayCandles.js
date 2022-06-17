const birthdayCandles = candles => {
    let highestValue = Math.max(...candles)
    let highestValueArr = []
    for(let i=0; i<candles.length; i++){
        if(candles[i] == highestValue) {
            highestValueArr.push(candles[i])
        }
    }
    return highestValueArr.length
}

console.log(birthdayCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]))