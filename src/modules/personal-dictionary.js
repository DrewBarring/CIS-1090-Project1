/**
 * This module defines a personal dictionary. It exports
 * a search function, and an addWord function that may be
 * used to add a word.
 * 
 * It is initially empty.
 * Search is case sensitive.
 */

//aray of words
let words = [];

//search function
//paramter and returns true if it is found, false
function search(word){
    return words.includes(word);
}
//addWord function
function addWord(word){
    words.push(word)

}
//export
export{search, addWord};