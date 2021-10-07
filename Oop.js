"use strict";
// TS has a shortcut way of creating consturctors, defines properties and assigns them then with access
// modifier all together in one.
var Soldier = /** @class */ (function () {
    function Soldier(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    return Soldier;
}());
var PrimusPilus = new Soldier("Lucius", "Vorenus");
console.log(PrimusPilus);
