const cats=["Milo", "Otis", "Garfield"];
console.log(cats);

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const newCats = [
        ...cats.slice(0),
        "Broom",
    ];
        return newCats;
}

function prependCat() {
    const topCats = ["Arnold", ...cats];
        return topCats; 
}

function removeLastCat() {
    const bottomCats = [...cats.slice(0,2)];
    return bottomCats;
}

function removeFirstCat() {
    const sideCats = [...cats.slice(1,3)];
    return sideCats;
}