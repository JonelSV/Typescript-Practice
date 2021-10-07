"use strict";
// TS has a shortcut way of creating consturctors, defines properties and assigns them then with access
// modifier all together in one.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soldier = void 0;
// tsc --build --clean   <========== removes old js code
var Soldier = /** @class */ (function () {
    function Soldier(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    return Soldier;
}());
exports.Soldier = Soldier;
var PrimusPilus = new Soldier("Lucius", "Vorenus");
console.log(PrimusPilus);
// TS supports modules to import/export classes, functions, variables
