/**
    Reduce com promise, ultil para quando precisamos fazer alguma request ou algo
    assincrono no meio de uma iteração
    @function
    @name reduce 
    * @author diego jimenes <jsmith@example.com>
    * @arguments
    * @example
    *   algs.reduce(list,(acc, item, index) => {
    *       return fetch(`https://jsonplaceholder.typicode.com/posts/${index + 1}`)
    *           .then(response => response.json())
    *           .then(json => {
    *               return [...acc, json]
    *           })
    *   }, [])
 */

const reduce = (list, call, acc) => list.reduce((promise, item, index) => {
    return promise.then((arr) => call(arr, item,index))
}, Promise.resolve(acc))  

module.exports = reduce