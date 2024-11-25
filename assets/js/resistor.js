const colorValues = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white"];
const multiplierValues = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white", "gold", "silver"];
const toleranceValues = ["brown", "red", "green", "blue", "violet", "gray", "gold", "silver"];

function getColorValue(color, array) {
    return array.indexOf(color.toLowerCase());
}

document.getElementById("calculateButton").addEventListener("click", ()=>{
    document.getElementById('res').setAttribute('class', 'screen')
    const band1 = document.getElementById("band1").value.toLowerCase();
    const band2 = document.getElementById("band2").value.toLowerCase();
    const band3 = document.getElementById("band3").value.toLowerCase();
    const band4 = document.getElementById("band4").value.toLowerCase();

    const digit1 = getColorValue(band1, colorValues);
    const digit2 = getColorValue(band2, colorValues);
    const multiplierIndex = getColorValue(band3, multiplierValues);
    const toleranceIndex = getColorValue(band4, toleranceValues);

    if (digit1 === -1 || digit2 === -1 || multiplierIndex === -1 || toleranceIndex === -1) {
        document.getElementById("res").innerHTML = "Resultado Inválido";
        return;
    }

    const multiplier = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 0.1, 0.01][multiplierIndex];
    const tolerance = ["±1%", "±2%", "±0.5%", "±0.25%", "±0.1%", "±0.05%", "±5%", "±10%"][toleranceIndex];

    const resistanceValue = (digit1 * 10 + digit2) * multiplier;
    document.getElementById("res").innerHTML = `Resultado: ${resistanceValue}Ω ${tolerance}`;
});
