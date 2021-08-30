"use strict";
/*
 Mixed Messages coding project 
 https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-portfolio-project/modules/fscp-mixed-messages/kanban_projects/mixed-messages 
 Generate a random weather message
 */
const dayMessage = () => {
    const chooseItem = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    };
    const precipitations = ["dry", "showery", "rainy", "snowy", "drizzly", "stormy"];
    const temperatures = ["freezing", "cold", "chilly", "mild", "hot", "scorching"];
    const windStrengths = ["strong", "blustery", "slight"];
    const windSources = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"];
    const precipitation = chooseItem(precipitations);
    const temperature = chooseItem(temperatures);
    const windStrength = chooseItem(windStrengths);
    const windSource = chooseItem(windSources);
    const message = `${precipitation} with ${temperature} temperatures and ${windStrength} winds from the ${windSource}`;
    return message;
};
const weatherMessages = () => {
    const today = dayMessage();
    const tomorrow = dayMessage();
    const weekend = dayMessage();
    const message = `The weather today will be ${today}. Tomorrow's weather will be ${tomorrow}. `
        + `The outlook for the weekend is ${weekend}. So do wrap up.`;
    return message;
};
console.log(weatherMessages());