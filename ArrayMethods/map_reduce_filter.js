
const arr = [23, 2, 6, 8, 29, 0];
const double = arr.map((e) => {
    return e * 2;
})
console.log(double);

const element = arr.map((e) => (e))

console.log(element);
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

//reduce
const max = arr.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr;
    } else {
        acc;
    }
    return acc;
}, 0); //0 is acc initial value,curr iterate through each element
console.log(max);
// const max = arr.reduce((acc,curr)=>{
//     return acc<curr?curr:acc;
// })
// console.log(max)
// const max1 = arr.reduce((acc,curr)=>{
//     return acc>curr?acc:curr;
// })
// console.log(max1);
const min = arr.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
})
console.log(min);
const min1 = arr.reduce((acc, curr) => {
    return acc > curr ? curr : acc;
})
console.log(min1);

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah', last: 'E. Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd',
    'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick',
    'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul',
    'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter',
    'Berlin, Irving', 'Benn, Tony', 'Benson, Leana', 'Bent, Silas',
    'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn',
    'Bergman, Ingmar', 'Black, Elk', 'Berio, Berio', 'Berne, Eric',
    'Weber, Max', 'Stein, Gertrude', 'Sartre, Jean-Paul', 'Stoppard, Tom',
    'Shadows, Daniel', 'Spender, Stephen', 'Swenson, John', 'Stowe, Harriet',
    'Intel, Bill', 'Back, Brian'
];

//   const fullName = inventors.map((name)=>{
//     const {first,last} = name;
//     return `${first} ${last}` 
//   })
//   console.log(fullName);

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 }]

let firstname = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, [])

let firstname1 = users.filter((e) => e.age < 30).map((e) => e.firstName); //method chaining
console.log(firstname);
console.log(firstname1);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);
const ans = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})
console.log(ans);