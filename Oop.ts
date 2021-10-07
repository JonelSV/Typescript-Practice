// TS has a shortcut way of creating consturctors, defines properties and assigns them then with access
// modifier all together in one.

class Soldier {
    constructor(private _firstName: string,
                private _lastName: string){
                
                    
                }

    
}

let PrimusPilus = new Soldier("Lucius", "Vorenus")

PrimusPilus._firstName = "Lucius Marcus"

console.log(PrimusPilus)