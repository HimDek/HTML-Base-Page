converters = [
    {name: "Length", id: "lengthconverter"},
    {name: "Weight", id: "weightconverter"},
    {name: "Volume", id: "volumeconverter"},
    {name: "Temperature", id: "temperatureconverter"}
]

function convertlength(value, unit, targetunit) {
    value = parseFloat(value);
    switch (unit) {
        case "km":
            switch (targetunit) {
                case "m":
                    return value * 1000;
                case "cm":
                    return value * 100000;
                case "mm":
                    return value * 1000000;
                case "mi":
                    return value * 0.621371;
                case "yd":
                    return value * 1093.61;
                case "ft":
                    return value * 3280.84;
                case "in":
                    return value * 39370.1;
                default:
                    return value;
            }
        case "m":
            switch (targetunit) {
                case "km":
                    return value / 1000;
                case "cm":
                    return value * 100;
                case "mm":
                    return value * 1000;
                case "mi":
                    return value * 0.000621371;
                case "yd":
                    return value * 1.09361;
                case "ft":
                    return value * 3.28084;
                case "in":
                    return value * 39.3701;
                default:
                    return value;
            }
        case "cm":
            switch (targetunit) {
                case "km":
                    return value / 100000;
                case "m":
                    return value / 100;
                case "mm":
                    return value * 10;
                case "mi":
                    return value * 6.2137e-6;
                case "yd":
                    return value * 0.0109361;
                case "ft":
                    return value * 0.0328084;
                case "in":
                    return value * 0.393701;
                default:
                    return value;
            }
        case "mm":
            switch (targetunit) {
                case "km":
                    return value / 1000000;
                case "m":
                    return value / 1000;
                case "cm":
                    return value / 10;
                case "mi":
                    return value * 6.2137e-7;
                case "yd":
                    return value * 0.00109361;
                case "ft":
                    return value * 0.00328084;
                case "in":
                    return value * 0.0393701;
                default:
                    return value;
            }
        case "mi":
            switch (targetunit) {
                case "km":
                    return value * 1.60934;
                case "m":
                    return value * 1609.34;
                case "cm":
                    return value * 160934;
                case "mm":
                    return value * 1.60934e6;
                case "yd":
                    return value * 1760;
                case "ft":
                    return value * 5280;
                case "in":
                    return value * 63360;
                default:
                    return value;
            }
        case "yd":
            switch (targetunit) {
                case "km":
                    return value * 0.0009144;
                case "m":
                    return value * 0.9144;
                case "cm":
                    return value * 91.44;
                case "mm":
                    return value * 914.4;
                case "mi":
                    return value * 0.000568182;
                case "ft":
                    return value * 3;
                case "in":
                    return value * 36;
                default:
                    return value;
            }
        case "ft":
            switch (targetunit) {
                case "km":
                    return value * 0.0003048;
                case "m":
                    return value * 0.3048;
                case "cm":
                    return value * 30.48;
                case "mm":
                    return value * 304.8;
                case "mi":
                    return value * 0.000189394;
                case "yd":
                    return value * 0.333333;
                case "in":
                    return value * 12;
                default:
                    return value;
            }
        case "in":
            switch (targetunit) {
                case "km":
                    return value * 2.54e-5;
                case "m":
                    return value * 0.0254;
                case "cm":
                    return value * 2.54;
                case "mm":
                    return value * 25.4;
                case "mi":
                    return value * 1.5783e-5;
                case "yd":
                    return value * 0.0277778;
                case "ft":
                    return value * 0.0833333;
                default:
                    return value;
            }
        default:
            return value;
    }
}

function convertweight(value, unit, targetunit) {
    value = parseFloat(value);
    switch (unit) {
        case "kg":
            switch (targetunit) {
                case "g":
                    return value * 1000;
                case "mg":
                    return value * 1000000;
                case "lb":
                    return value * 2.20462;
                case "oz":
                    return value * 35.274;
                default:
                    return value;
            }
        case "g":
            switch (targetunit) {
                case "kg":
                    return value / 1000;
                case "mg":
                    return value * 1000;
                case "lb":
                    return value * 0.00220462;
                case "oz":
                    return value * 0.035274;
                default:
                    return value;
            }
        case "mg":
            switch (targetunit) {
                case "kg":
                    return value / 1000000;
                case "g":
                    return value / 1000;
                case "lb":
                    return value * 2.20462e-6;
                case "oz":
                    return value * 3.5274e-5;
                default:
                    return value;
            }
        case "lb":
            switch (targetunit) {
                case "kg":
                    return value * 0.453592;
                case "g":
                    return value * 453.592;
                case "mg":
                    return value * 453592;
                case "oz":
                    return value * 16;
                default:
                    return value;
            }
        case "oz":
            switch (targetunit) {
                case "kg":
                    return value * 0.0283495;
                case "g":
                    return value * 28.3495;
                case "mg":
                    return value * 28349.5;
                case "lb":
                    return value * 0.0625;
                default:
                    return value;
            }
        default:
            return value;
    }
}

function convertvolume(value, unit, targetunit) {
    value = parseFloat(value);
    switch (unit) {
        case "l":
            switch (targetunit) {
                case "ml":
                    return value * 1000;
                case "cm3":
                    return value * 1000;
                case "m3":
                    return value / 1000;
                case "ft3":
                    return value * 0.0353147;
                case "in3":
                    return value * 61.0237;
                case "gal":
                    return value * 0.264172;
                case "qt":
                    return value * 1.05669;
                case "pt":
                    return value * 2.11338;
                case "cup":
                    return value * 4.22675;
                case "fl oz":
                    return value * 33.814;
                default:
                    return value;
            }
        case "ml":
            switch (targetunit) {
                case "l":
                    return value / 1000;
                case "cm3":
                    return value;
                case "m3":
                    return value / 1000000;
                case "ft3":
                    return value * 3.53147e-5;
                case "in3":
                    return value * 0.0610237;
                case "gal":
                    return value * 0.000264172;
                case "qt":
                    return value * 0.00105669;
                case "pt":
                    return value * 0.00211338;
                case "cup":
                    return value * 0.00422675;
                case "fl oz":
                    return value * 0.033814;
                default:
                    return value;
            }
        case "cm3":
            switch (targetunit) {
                case "l":
                    return value / 1000;
                case "ml":
                    return value;
                case "m3":
                    return value / 1000000;
                case "ft3":
                    return value * 3.53147e-5;
                case "in3":
                    return value * 0.0610237;
                case "gal":
                    return value * 0.000264172;
                case "qt":
                    return value * 0.00105669;
                case "pt":
                    return value * 0.00211338;
                case "cup":
                    return value * 0.00422675;
                case "fl oz":
                    return value * 0.033814;
                default:
                    return value;
            }
        case "m3":
            switch (targetunit) {
                case "l":
                    return value * 1000;
                case "ml":
                    return value * 1000000;
                case "cm3":
                    return value * 1000000;
                case "ft3":
                    return value * 35.3147;
                case "in3":
                    return value * 61023.7;
                case "gal":
                    return value * 264.172;
                case "qt":
                    return value * 1056.69;
                case "pt":
                    return value * 2113.38;
                case "cup":
                    return value * 4226.75;
                case "fl oz":
                    return value * 33814;
                default:
                    return value;
            }
        case "ft3":
            switch (targetunit) {
                case "l":
                    return value * 28.3168;
                case "ml":
                    return value * 28316.8;
                case "cm3":
                    return value * 28316.8;
                case "m3":
                    return value * 0.0283168;
                case "in3":
                    return value * 1728;
                case "gal":
                    return value * 7.48052;
                case "qt":
                    return value * 29.9221;
                case "pt":
                    return value * 59.8442;
                case "cup":
                    return value * 119.688;
                case "fl oz":
                    return value * 957.506;
                default:
                    return value;
            }
        case "in3":
            switch (targetunit) {
                case "l":
                    return value * 0.0163871;
                case "ml":
                    return value * 16.3871;
                case "cm3":
                    return value * 16.3871;
                case "m3":
                    return value * 1.63871e-5;
                case "ft3":
                    return value * 0.000578704;
                case "gal":
                    return value * 0.004329;
                case "qt":
                    return value * 0.017316;
                case "pt":
                    return value * 0.034632;
                case "cup":
                    return value * 0.0692641;
                case "fl oz":
                    return value * 0.554113;
                default:
                    return value;
            }
        case "gal":
            switch (targetunit) {
                case "l":
                    return value * 3.78541;
                case "ml":
                    return value * 3785.41;
                case "cm3":
                    return value * 3785.41;
                case "m3":
                    return value * 0.00378541;
                case "ft3":
                    return value * 0.133681;
                case "in3":
                    return value * 231;
                case "qt":
                    return value * 4;
                case "pt":
                    return value * 8;
                case "cup":
                    return value * 16;
                case "fl oz":
                    return value * 128;
                default:
                    return value;
            }
        case "qt":
            switch (targetunit) {
                case "l":
                    return value * 0.946353;
                case "ml":
                    return value * 946.353;
                case "cm3":
                    return value * 946.353;
                case "m3":
                    return value * 0.000946353;
                case "ft3":
                    return value * 0.0334201;
                case "in3":
                    return value * 57.75;
                case "gal":
                    return value * 0.25;
                case "pt":
                    return value * 2;
                case "cup":
                    return value * 4;
                case "fl oz":
                    return value * 32;
                default:
                    return value;
            }
        case "pt":
            switch (targetunit) {
                case "l":
                    return value * 0.473176;
                case "ml":
                    return value * 473.176;
                case "cm3":
                    return value * 473.176;
                case "m3":
                    return value * 0.000473176;
                case "ft3":
                    return value * 0.0167101;
                case "in3":
                    return value * 28.875;
                case "gal":
                    return value * 0.125;
                case "qt":
                    return value * 0.5;
                case "cup":
                    return value * 2;
                case "fl oz":
                    return value * 16;
                default:
                    return value;
            }
        case "cup":
            switch (targetunit) {
                case "l":
                    return value * 0.236588;
                case "ml":
                    return value * 236.588;
                case "cm3":
                    return value * 236.588;
                case "m3":
                    return value * 0.000236588;
                case "ft3":
                    return value * 0.00835503;
                case "in3":
                    return value * 14.4375;
                case "gal":
                    return value * 0.0625;
                case "qt":
                    return value * 0.25;
                case "pt":
                    return value * 0.5;
                case "fl oz":
                    return value * 8;
                default:
                    return value;
            }
        case "fl oz":
            switch (targetunit) {
                case "l":
                    return value * 0.0295735;
                case "ml":
                    return value * 29.5735;
                case "cm3":
                    return value * 29.5735;
                case "m3":
                    return value * 2.95735e-5;
                case "ft3":
                    return value * 0.00104438;
                case "in3":
                    return value * 1.80469;
                case "gal":
                    return value * 0.0078125;
                case "qt":
                    return value * 0.03125;
                case "pt":
                    return value * 0.0625;
                case "cup":
                    return value * 0.125;
                default:
                    return value;
            }
        default:
            return value;
    }
}

function converttemperature(value, unit, targetunit) {
    value = parseFloat(value);
    switch (unit) {
        case "C":
            switch (targetunit) {
                case "F":
                    return value * 9 / 5 + 32;
                case "K":
                    return value + 273.15;
                default:
                    return value;
            }
        case "F":
            switch (targetunit) {
                case "C":
                    return (value - 32) * 5 / 9;
                case "K":
                    return (value - 32) * 5 / 9 + 273.15;
                default:
                    return value;
            }
        case "K":
            switch (targetunit) {
                case "C":
                    return value - 273.15;
                case "F":
                    return (value - 273.15) * 9 / 5 + 32;
                default:
                    return value;
            }
        default:
            return value;
    }
}

lengthtargets = [
    {unit: "km", name: "Kilometer"},
    {unit: "m", name: "Meter"},
    {unit: "cm", name: "Centimeter"},
    {unit: "mm", name: "Millimeter"},
    {unit: "mi", name: "Mile"},
    {unit: "yd", name: "Yard"},
    {unit: "ft", name: "Foot"},
    {unit: "in", name: "Inch"}
]

weighttargets = [
    {unit: "kg", name: "Kilogram"},
    {unit: "g", name: "Gram"},
    {unit: "mg", name: "Milligram"},
    {unit: "lb", name: "Pound"},
    {unit: "oz", name: "Ounce"}
]

volumetargets = [
    {unit: "l", name: "Liter"},
    {unit: "ml", name: "Milliliter"},
    {unit: "cm3", name: "Cubic Centimeter"},
    {unit: "m3", name: "Cubic Meter"},
    {unit: "ft3", name: "Cubic Foot"},
    {unit: "in3", name: "Cubic Inch"},
    {unit: "gal", name: "Gallon"},
    {unit: "qt", name: "Quart"},
    {unit: "pt", name: "Pint"},
    {unit: "cup", name: "Cup"},
    {unit: "fl oz", name: "Fluid Ounce"}
]

temperaturetargets = [
    {unit: "C", name: "Celsius"},
    {unit: "F", name: "Fahrenheit"},
    {unit: "K", name: "Kelvin"}
]

function lengthkeyup(element) {
    lengthtargets.forEach(target => {
        document.getElementById(target.unit).value = convertlength(element.value, element.id, target.unit);
    });
}

function weightkeyup(element) {
    weighttargets.forEach(target => {
        document.getElementById(target.unit).value = convertweight(element.value, element.id, target.unit);
    });
}

function volumekeyup(element) {
    volumetargets.forEach(target => {
        document.getElementById(target.unit).value = convertvolume(element.value, element.id, target.unit);
    });
}

function temperaturekeyup(element) {
    temperaturetargets.forEach(target => {
        document.getElementById(target.unit).value = converttemperature(element.value, element.id, target.unit);
    });
}

lengthtargets.forEach(target => {
    input = document.createElement("input");
    input.classList.add("input-box")
    input.id = target.unit;
    input.name = target.unit;
    input.setAttribute("type", "number");
    input.setAttribute("onkeyup", "lengthkeyup(this)");

    label = document.createElement("label");
    label.for = target.unit;
    label.innerHTML = target.name;

    container = document.createElement("div");
    container.classList.add("input-container");
    container.appendChild(label);
    container.appendChild(input); 
    
    document.getElementById("lengthconverter").appendChild(container);
});

weighttargets.forEach(target => {
    input = document.createElement("input");
    input.classList.add("input-box")
    input.id = target.unit;
    input.name = target.unit;
    input.setAttribute("type", "number");
    input.setAttribute("onkeyup", "weightkeyup(this)");

    label = document.createElement("label");
    label.for = target.unit;
    label.innerHTML = target.name;

    container = document.createElement("div");
    container.classList.add("input-container");
    container.appendChild(label);
    container.appendChild(input); 
    
    document.getElementById("weightconverter").appendChild(container);
});

volumetargets.forEach(target => {
    input = document.createElement("input");
    input.classList.add("input-box")
    input.id = target.unit;
    input.name = target.unit;
    input.setAttribute("type", "number");
    input.setAttribute("onkeyup", "volumekeyup(this)");

    label = document.createElement("label");
    label.for = target.unit;
    label.innerHTML = target.name;

    container = document.createElement("div");
    container.classList.add("input-container");
    container.appendChild(label);
    container.appendChild(input); 
    
    document.getElementById("volumeconverter").appendChild(container);
});

temperaturetargets.forEach(target => {
    input = document.createElement("input");
    input.classList.add("input-box")
    input.id = target.unit;
    input.name = target.unit;
    input.setAttribute("type", "number");
    input.setAttribute("onkeyup", "temperaturekeyup(this)");

    label = document.createElement("label");
    label.for = target.unit;
    label.innerHTML = target.name;

    container = document.createElement("div");
    container.classList.add("input-container");
    container.appendChild(label);
    container.appendChild(input); 
    
    document.getElementById("temperatureconverter").appendChild(container);
});

converters.forEach(converter => {
    option = document.createElement("option");
    option.value = converter.id;
    option.innerHTML = converter.name + " Converter";
    document.getElementById("converterselect").appendChild(option);
});

document.getElementById("converterselect").addEventListener("change", function() {
    converters.forEach(converter => {
        document.getElementById(converter.id).style.display = "none";
    });
    id = document.getElementById("converterselect").value;
    document.getElementById(id).style.display = "block";
});

document.getElementById("converterselect").dispatchEvent(new Event("change"));