"use strict"

const output = {
    hello: (req, res) => {
        res.render("home/index")
    },

    login: (req, res) => {
        res.render("home/login")
    }
};

const users = {
    id: ["kms", "yjyj"],
    psword: ["123", "122"]
}


const precess = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] == psword) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인 실패"
        })
    }
}
module.exports = {
    output,
    precess
};

