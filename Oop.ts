// TS has a shortcut way of creating consturctors, defines properties and assigns them then with access
// modifier all together in one.

// tsc --build --clean   <========== removes old js code

export class Soldier {
    constructor(private _firstName: string,
                private _lastName: string){
                
                }
            }

let PrimusPilus = new Soldier("Lucius", "Vorenus")
console.log(PrimusPilus)

// TS supports modules to import/export classes, functions, variables