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
}

module.exports = UserStorage;