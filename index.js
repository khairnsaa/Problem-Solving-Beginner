const plusMinus = (arr) => {
    let positifValue = []
    let negatifValue = []
    let zeroValue = []
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            negatifValue.push(arr[i])
        } else if( arr[i] > 0 ){
            positifValue.push(arr[i])
        } else if(arr[i] === 0){
            zeroValue.push(arr[i])
        }
    }
    
    const positifValueRatio = positifValue.length/arr.length
    const negatifValueRatio = negatifValue.length/arr.length
    const zeroValueRatio = zeroValue.length/arr.length
    console.log(positifValueRatio)
    console.log(negatifValueRatio)
    console.log(zeroValueRatio)
}

plusMinus([5,4,-1,2,0,-4,-1,3,-5,120])