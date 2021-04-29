/**
    map com promise, ultil para quando precisamos fazer alguma request ou algo
    assincrono no meio de uma iteração
    @function
    @name map 
    * @author diego jimenes <contato.diegojimenes@gmail.com>
    * @arguments
    * @example
    *   algs.map(list,(item, index) => {
    *       return fetch(`https://jsonplaceholder.typicode.com/posts/${index + 1}`)
    *           .then(response => response.json())
    *           .then(json => {
    *               return [...acc, json]
    *           })
    *   }, [])
 */

const map = (list, call) => list.reduce((promise, item, index) => {
    return promise.then(() => call(item, index))
}, Promise.resolve())

module.exports = map