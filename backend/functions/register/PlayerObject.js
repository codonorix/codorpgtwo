module.exports = {
    PlayerObject: class PlayerObject {
        constructor(classId, level, hp, maxHp, mana, maxMana, inventory, gold, gems, encyclopedia, achievements, helmet, chestplate, leggings, boots, weapon, abilitySet, potionsSack, ingredientsPouch, curXp, reqXp) {
            this._classId = classId !== undefined ? classId : 0;
            this._level = level !== undefined ? level : 1;
            this._hp = hp !== undefined ? hp : 10;
            this._maxHp = maxHp !== undefined ? maxHp : 10;
            this._mana = mana !== undefined ? mana : 10;
            this._maxMana = maxMana !== undefined ? maxMana : 1;
            this._inventory = inventory !== undefined ? inventory : [];
            this._gold = gold !== undefined ? gold : 100;
            this._gems = gems !== undefined ? gems : 0;
            this._encyclopedia = encyclopedia !== undefined ? encyclopedia : [];
            this._achievements = achievements !== undefined ? achievements : [];
            this._helmet = helmet !== undefined ? helmet : {};
            this._chestplate = chestplate !== undefined ? chestplate : {};
            this._leggings = leggings !== undefined ? leggings : {};
            this._boots = boots !== undefined ? boots : {};
            this._weapon = weapon !== undefined ? weapon : {};
            this._abilitySet = abilitySet !== undefined ? abilitySet : {};
            this._potionsSack = potionsSack !== undefined ? potionsSack : [];
            this._ingredientsPouch = ingredientsPouch !== undefined ? ingredientsPouch : [];
            this._curXp = curXp !== undefined ? curXp : 0;
            this._reqXp = reqXp !== undefined ? reqXp : 10;
        }

        get classId() {
            return this._classId;
        }

        set classId(value) {
            this._classId = value;
        }

        get level() {
            return this._level;
        }

        set level(value) {
            this._level = value;
        }

        get hp() {
            return this._hp;
        }

        set hp(value) {
            this._hp = value;
        }

        get maxHp() {
            return this._maxHp;
        }

        set maxHp(value) {
            this._maxHp = value;
        }

        get mana() {
            return this._mana;
        }

        set mana(value) {
            this._mana = value;
        }

        get maxMana() {
            return this._maxMana;
        }

        set maxMana(value) {
            this._maxMana = value;
        }

        get inventory() {
            return this._inventory;
        }

        set inventory(value) {
            this._inventory = value;
        }

        get gold() {
            return this._gold;
        }

        set gold(value) {
            this._gold = value;
        }

        get gems() {
            return this._gems;
        }

        set gems(value) {
            this._gems = value;
        }

        get encyclopedia() {
            return this._encyclopedia;
        }

        set encyclopedia(value) {
            this._encyclopedia = value;
        }

        get achievements() {
            return this._achievements;
        }

        set achievements(value) {
            this._achievements = value;
        }

        get helmet() {
            return this._helmet;
        }

        set helmet(value) {
            this._helmet = value;
        }

        get chestplate() {
            return this._chestplate;
        }

        set chestplate(value) {
            this._chestplate = value;
        }

        get leggings() {
            return this._leggings;
        }

        set leggings(value) {
            this._leggings = value;
        }

        get boots() {
            return this._boots;
        }

        set boots(value) {
            this._boots = value;
        }

        get weapon() {
            return this._weapon;
        }

        set weapon(value) {
            this._weapon = value;
        }

        get abilitySet() {
            return this._abilitySet;
        }

        set abilitySet(value) {
            this._abilitySet = value;
        }

        get potionsSack() {
            return this._potionsSack;
        }

        set potionsSack(value) {
            this._potionsSack = value;
        }

        get ingredientsPouch() {
            return this._ingredientsPouch;
        }

        set ingredientsPouch(value) {
            this._ingredientsPouch = value;
        }

        get curXp() {
            return this._curXp;
        }

        set curXp(value) {
            this._curXp = value;
        }

        get reqXp() {
            return this._reqXp;
        }

        set reqXp(value) {
            this._reqXp = value;
        }
    }
}