const {readFile} = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {

    })
}

readFile('./comtent/first.txt', 'utf8', (err, data) => {
    if (err) {
        return
    } else {
        console.log(data)
    }
})