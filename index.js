// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = () => cats.push("Ralph");
const destructivelyPrependCat = () => cats.unshift("Bob");
const destructivelyRemoveLastCat = () => cats.pop ("Milo");
const destructivelyRemoveFirstCat = () => cats.shift("Otis");
const appendCat = () => [...cats, "Broom"];
const prependCat = () => ["Arnold",...cats];
const removeLastCat = () => cats.slice (0,2);
const removeFirstCat = () => cats.slice (1);


console.log(removeFirstCat());

