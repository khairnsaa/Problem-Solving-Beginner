const diagonalDifference = arr => {
    let ltrTotal = 0
    let rtlTotal = 0
    
    for(let i=0; i<arr.length; i++){
        for(let j=i; j <=i; j++){
            ltrTotal += arr[i][j]          
        }
    }
    
    for(let k=0; k<arr.length; k++ ){
        for(let l=arr.length-1-k; l<arr.length-k; l++){
            rtlTotal += arr[k][l]
            
        }
    }
    return Math.abs(ltrTotal - rtlTotal)
}