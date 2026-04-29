
const LIGHTS = {
    RED: "red",
    GREEN: "green",
    YELLOW: "yellow"
};

const MESSAGES = {
    red: "STOP",
    green: "GO",
    yellow: "SLOW"
};

const DURATIONS = {
    red: 3,
    green: 4,
    yellow: 1
};

let currentLight = LIGHTS.RED;
let ticksInCurrentLight = 0;

function resetTrafficLight() {
    currentLight = LIGHTS.RED;
    ticksInCurrentLight = 0;
}

function getNextLight(light) {
    if (light === LIGHTS.RED) {
        return LIGHTS.GREEN;
    } 
    if (light === LIGHTS.GREEN) {
        return LIGHTS.YELLOW;
    }
    if (light === LIGHTS.YELLOW) {
        return LIGHTS.RED;
    }
    return LIGHTS.RED;
}


function updateTrafficLight() {
    if(!MESSAGES[currentLight]) {
        console.log("BROKEN");
        resetTrafficLight();
        return;
    }
    
    console.log(MESSAGES[currentLight]);
    ticksInCurrentLight++;

    if(ticksInCurrentLight >= DURATIONS[currentLight]) {
        currentLight = getNextLight(currentLight);
        ticksInCurrentLight = 0;
    }
}

updateTrafficLight();
updateTrafficLight();
updateTrafficLight();
updateTrafficLight();
updateTrafficLight();
updateTrafficLight();
updateTrafficLight();
updateTrafficLight();