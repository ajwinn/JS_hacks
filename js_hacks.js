//*** JS Hacks ***//
//* by Adam Winn *//

// Capitalizes a single word
String.prototype.cap = function(){
  return this.charAt(0).toUpperCase() + this.slice(1)
}

// Capitalizes all words
String.prototype.capAll = function(){
  var words = this.toString().split(' ');
  var phrase = "";
  for (var i = 0; i < words.length; i++) {
      phrase += i === 0 ? words[i].cap() : " " + words[i].cap();
  };
  return phrase;
}

// The next 4 let you do .encode() or .decode() to strings and arrays
String.prototype.encode = function(){
  return encodeURIComponent(this);
}

Array.prototype.encode = function(){
  return encodeURIComponent(this);
}

String.prototype.decode = function(){
  return decodeURIComponent(this);
}

Array.prototype.decode = function(){
  return encodeURIComponent(this);
}

// Returns true if array contains at least one value
Array.prototype.contains = function(val) {
    var i = this.length;
    while (i--) {
        if (this[i] === val) {
            return true;
        }
    }
    return false;
}

// Returns true if array matches another array
Array.prototype.containsAll = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (this.contains(array[i]) === false){
            return false;
        };
    };
    return true;
}

// Returns a randomly selected array value
// eg [1,2,3,9,100].getRandom() -> 9
Array.prototype.getRandom = function(){
    var max = this.length-1;
    var min = 0;
    var item_number = Math.floor(Math.random() * (max - min + 1)) + min;
    return this[item_number];
}