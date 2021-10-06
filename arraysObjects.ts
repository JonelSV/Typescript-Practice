let sports: string[] = ["Golf", "Basketball", "MMA", "Boxing", "Football"];

// FOR OF LOOP  

for( let displayElementOfArray of sports) {
    console.log(displayElementOfArray)

    if(displayElementOfArray == "MMA"){
        console.log(displayElementOfArray + " My favorite")
    }else {
        console.log(displayElementOfArray + " is alright")
    }
}

sports.push("Baseball");


