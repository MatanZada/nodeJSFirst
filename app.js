// console.log('hello world!!!!');
const _ = require('lodash');
const validator = require('validator');
const fs = require('fs-extra');

// With async/await:
async function createJson() {
    try {
        await fs.writeJson('./users.json', {
            first_name: "matan",
            last_name: "zada",
            email: "matan.zada1@gmail.com",
            age: 22

        });
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
}

createJson()

//Checking Mail-
function validEmail(email) {
    let checkEmail = validator.isEmail(email);
    if (checkEmail) {
        throw TypeError('plese insert valid mail')
    } else {
        console.log('your mail is Valid');
    }
}
validEmail('matan.zada1gmail.com')