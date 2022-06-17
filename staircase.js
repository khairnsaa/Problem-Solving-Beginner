const staircase = (n) => {
    let string = ''
    for(let i=1; i<=n; i++){
        for(let j=n; j>i; j--){
            string+=" "
        }
        for(let k=0; k<i; k++){
            string+="#"
        }
        string+=`\n`
    }
    return string
}

console.log(staircase(6))