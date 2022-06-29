function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesPos = []
    let aInFrontHouse = []
    let orangesPos = []
    let bInFrontHouse = []
    
    // calculate apples positiom
    for(let i=0; i<apples.length; i++){
        applesPos.push(a + apples[i])
    }
    // checking if theres apple land in front of house
    for(let j=0; j<applesPos.length; j++){
        if(applesPos[j] >= s && applesPos[j] <= t)  aInFrontHouse.push(applesPos[j]) 
    }
    // calculate oranges positiom
    for(let i=0; i<oranges.length; i++){
        orangesPos.push(b + oranges[i])
    }
    // checking if theres oranges land in front of house
    for(let j=0; j<orangesPos.length; j++){
        if(orangesPos[j] >= s && orangesPos[j] <= t) bInFrontHouse.push(orangesPos[j])
    }
    console.log(aInFrontHouse.length)
    console.log(bInFrontHouse.length)
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])