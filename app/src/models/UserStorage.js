"use strict"


class UserStorage {
    static #users = {
        id: ["kms", "yjyj"],
        psword: ["123", "122"],
        name: ['민수', '윤정']
    }


    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field]
            }
            return newUsers;
        }, {})
        return newUsers;

    }

    static getUsersInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];

            return newUsers;
        }, {})
        return userInfo;
    }

}

module.exports = UserStorage;