const a ={
    name :"Bangladesh",
    districts: 64,

};
const s = "Bangladesh";
console.log(s.length);


const ab ={
    name :"Bangladesh",
    districts: 64,
    slice: function() { 
    },
    substring: function(){

    }
};
const ss = "Bangladesh";
console.log(ss.length);


//..........slice...

let str = "Apple, Bannana, kiwi";
// let bannana = str.slice(7, 13)
// console.log(bannana);
console.log(str.slice(7, 14));

//..........slice...

let strB = "Apple, Bannana, kiwi";
// let bannana = str.slice(7, 13)
// console.log(bannana);
console.log(str.slice(-13, -6));

//..........slice...

let strAll = "Apple, Bannana, kiwi";
// let bannana = str.slice(7, 13)
// console.log(bannana);
console.log(str.slice(-14));


//.....replace.............

let strG = "I love Sakina";
let Zarina = strG.replace("Sakina","Zarina");
console.log(strG);
console.log(Zarina);

//...........text............
let text = 'Hello World';
// console.log(typeof text.charAt(500));
// console.log(text.charAt(500));
// console.log(typeof text.charAt[500]); // dataTypeof
console.log(text.split());
console.log(text.split(""));
console.log(text.split(","));
console.log(text.split(" "));



