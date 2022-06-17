const minMaxSum = (arr) => {
    let minSumTestOne = 0;
    let minSumTestTwo = 0;
    let minSumTestThree = 0;
    let minSumTestFour = 0;
    let minSumTestFive = 0;
    let minSum = []
    
    let maxSum = []
    let maxSumTestOne = 0;
    let maxSumTestTwo = 0;
    let maxSumTestThree = 0;
    let maxSumTestFour = 0;
    let maxSumTestFive = 0;
    // Write your code here
    for(let i=0; i<arr.length-1; i++){
        minSumTestOne += arr[i]
    }
    minSum.push(minSumTestOne)
    
    for(let i=1; i<arr.length; i++){
        minSumTestTwo += arr[i]
    }
    minSum.push(minSumTestTwo)
    
    for(let i=0; i<arr.length; i++){
        if (i == 1) continue
        minSumTestThree += arr[i]
    }
    minSum.push(minSumTestThree)
    
    for(let i=0; i<arr.length; i++){
        if (i == 2) continue
        minSumTestFour += arr[i]
    }
    minSum.push(minSumTestFour)
    
    for(let i=0; i<arr.length; i++){
        if (i == 3) continue
        minSumTestFive += arr[i]
    }
    minSum.push(minSumTestFive)
    
    for(let i=0; i<arr.length-1; i++){
        maxSumTestOne += arr[i]
    }
    maxSum.push(maxSumTestOne)
    
    for(let i=1; i<arr.length; i++){
        maxSumTestTwo += arr[i]
    }
    maxSum.push(maxSumTestTwo)
    
    for(let i=0; i<arr.length; i++){
        if (i == 1) continue
        maxSumTestThree += arr[i]
    }
    maxSum.push(maxSumTestThree)
    
    for(let i=0; i<arr.length; i++){
        if (i == 2) continue
        maxSumTestFour += arr[i]
    }
    maxSum.push(maxSumTestFour)
    
    for(let i=0; i<arr.length; i++){
        if (i == 3) continue
        maxSumTestFive += arr[i]
    }
    maxSum.push(maxSumTestFive)
    
    console.log(Math.min(...minSum), Math.max(...maxSum));
}

minMaxSum([1,3,4,5,6])