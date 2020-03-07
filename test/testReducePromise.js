const fetch = require('node-fetch');
const algs = require('../index')

const list = [1,2,3,4,5,6]

let r = algs.reduce(list,(acc, item, index) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${index + 1}`)
        .then(response => response.json())
        .then(json => {
            return [...acc, json]
        })
}, [])

r.then((e) => console.log(e)) 