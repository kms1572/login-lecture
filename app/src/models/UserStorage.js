"use strict"

const { query } = require("express");
const { isatty } = require("tty");

const db = require("../config/db")

class UserStorage {

    static getUsers(isAll, ...fields) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;"
            db.query(
                query, [id], (err, data) => {
                    if (err) reject(`${err}`);
                    resolve(data[0]);
                }
            );
        });

    }

    static getUsersInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;"
            db.query(
                query, [id], (err, data) => {
                    if (err) reject(`${err}`);
                    resolve(data[0]);
                }
            );
        });


    }



    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(
                query, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                }
            );
        });
    }

}

module.exports = UserStorage;