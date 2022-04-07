"use strict"

const UserStorage = require("./UserStorage"
)

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body
        const { id, psword } = await UserStorage.getUsersInfo(client.id);
        // # Promise를 반환하기 때문에 .then()으로 접근항 데이터를 가져올 수 있습니다.
        // # await을 사용해준 이유는 "가독성" 입니다!
        // # fs(파일시스템)에서도 await으로 가져올 수 있습니다.
        // # await은 Promise를 반환하는 애한테 주는 옵션
        // # await은 async 함수 안에서만 사용가능

        if (id) {

            if (id === client.id && psword === client.psword) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." }
        }

        return { success: false, msg: "존재하지 않는 아이디 입니다." }

    }

    register() {
        const client = this.body
        const response = UserStorage.save(client);
        return response;

    }
}

module.exports = User;