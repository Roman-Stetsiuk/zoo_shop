import React from "react";

function fakerData(){
let faker = require('faker');
    console.log(faker.name);
console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
}

export default fakerData
