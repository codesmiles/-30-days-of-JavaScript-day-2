console.log('Day 2\t3\t5')
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?')
console.log('This is a backslash  symbol (\\)')

//Template literals and backquotes
let a = 2
let b = 3
 console.log(`The sum of ${a} and ${b} is ${a + b}`)

 let firstName = '  Asabeneh  '
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`

console.log(personInfoThree)

//string length

let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter) 

//toUpperCase()
console.log(string.toUpperCase()) 

//toLowerCase()
console.log(string.toLowerCase()) 

//substr():
console.log(string.substr(4,6))

//substring():It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index

console.log(string.substring(0,4))

console.log(string.substring(4,10))

//split(): The split method splits a string at a specified place. (Ref to the first declared variable "firstName")

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split('')) // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

//trim(): Removes trailing space in the beginning or the end of a string.

console.log(firstName.trim()) 

//includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false

//replace():takes as a parameter the old substring and a new substring.(string.replace(oldsubstring, newsubstring))

console.log(country.replace('Fin', 'Noman')) //ref country variable assigned previously

// charAt(): Takes index and it returns the value at that index(ie string.charAt(index))

console.log(string.charAt(0))

//charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index[i.e string.charCodeAt(index)]

console.log(string.charCodeAt(3)) 

//indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1[string.indexOf(substring)]

console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('Java'))

let strings = '30 Days Of JavaScript'//new variable
console.log(strings.indexOf('Script')) 

//lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1 [i.e string.lastIndexOf(substring)]
//syntax
let ring = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(ring.lastIndexOf('love'))

//check concat() method later

// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).[i.e string.startsWith(substring)]
//syntax

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false

// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).[string.endsWith(substring)]
//syntax

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false

//search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.[string.search(substring)]

console.log(ring.search('love'))          // 2
console.log(ring.search(/javascript/gi))  // 7

/*match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive*/
// Match syntax
// string.match(substring)

console.log(ring.match('love'))

let pattern = /love/gi
console.log(ring.match(pattern))   // ["love", "love", "love"]

/*repeat(): it takes a number as argument and it returns the repeated version of the string.
string.repeat(n)*/
let l ="love"
console.log(l.repeat(10)) // lovelovelovelovelovelovelovelovelovelove