"use strict"

const { resolveInclude } = require("ejs");
const User = require("../../models/User");

const output = {
    hello: (req, res) => {
        res.render("home/index")
    },

    login: (req, res) => {
        res.render("home/login")
    }
};



const precess = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response)
    },
};
module.exports = {
    output,
    precess
};


/////////////
