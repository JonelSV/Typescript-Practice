"use strict";
// TS has a shortcut way of creating consturctors, defines properties and assigns them then with access
// modifier all together in one.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soldier = void 0;
// TS OOP only supports single inheritance but can support multiple interfaces
// tsc --build --clean   <========== removes old js code
class Soldier {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
}
exports.Soldier = Soldier;
let PrimusPilus = new Soldier("Lucius", "Vorenus");
console.log(PrimusPilus);
// TS supports modules to import/export classes, functions, variables
