//14.1. JSON vs XML. Задание  2

const jsonString = `
  {
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`

const data = JSON.parse(jsonString, function(key, value) {
    if(typeof value == "string"){
        return value.toUpperCase();
    } else {
        return value;
    }
});

console.log(jsonString);


