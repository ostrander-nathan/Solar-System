var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
planets.forEach(function(a) {
    el.innerHTML += a + " ";
});

// Use the map method to create a new array where the first letter of each planet is capitalized
el.innerHTML += planets.map(function(a) {
    return a[0].toUpperCase() + a.slice(1);
});

// Use the filter method to create a new array that contains planets with the letter 'e'
el.innerHTML += planets.filter(function(a) {
    if (a.indexOf('a') > 0) {
        return a
    }
});

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
el.innerHTML += "<br><br>" + words.reduce(function(pre, a) {
    return pre + " " + a;
});
