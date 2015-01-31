//Code originally written by Jack Irvine
//28th January 2014


//All elements, 
//their chemical symbols, relative atomic masses and valences. 
//Sorted by relative atomic mass and/or valency.

var elements =
    '{"elements":[' +
    '{"name": "Hydrogen", "symbol": "H", "ram": 1.00794, "valency": 1},' +
    '{"name": "Helium", "symbol": "He", "ram": 4.002602, "valency": 1},' +
    '{"name": "Lithium", "symbol": "Li", "ram": 6.941, "valency": 2},' +
    '{"name": "Beryllium", "symbol": "Be", "ram": 9.012182, "valency": 2},' +
    '{"name": "Boron", "symbol": "B", "ram": 10.811, "valency": 2},' +
    '{"name": "Carbon", "symbol": "C", "ram": 12.0107, "valency": 2},' +
    '{"name": "Nitrogen", "symbol": "N", "ram": 14.0067, "valency": 2},' +
    '{"name": "Oxygen", "symbol": "O", "ram": 15.9994, "valency": 2},' +
    '{"name": "Fluorine", "symbol": "F", "ram": 18.9984032, "valency": 2},' +
    '{"name": "Neon", "symbol": "Ne", "ram": 20.1797, "valency": 2},' +
    '{"name": "Sodium", "symbol": "Na", "ram": 22.98976928, "valency": 3},' +
    '{"name": "Magnesium", "symbol": "Mg", "ram": 24.3050, "valency": 3},' +
    '{"name": "Aluminium", "symbol": "Al", "ram": 26.9815386, "valency": 3},' +
    '{"name": "Silicon", "symbol": "Si", "ram": 28.0855, "valency": 3},' +
    '{"name": "Phosphorus", "symbol": "P", "ram": 30.973762, "valency": 3},' +
    '{"name": "Sulfur", "symbol": "S", "ram": 32.065, "valency": 3},' +
    '{"name": "Chlorine", "symbol": "Cl", "ram": 35.453, "valency": 3},' +
    '{"name": "Argon", "symbol": "Ar", "ram": 39.948, "valency": 3},' +
    '{"name": "Potassium", "symbol": "K", "ram": 39.0983, "valency": 4},' +
    '{"name": "Calcium", "symbol": "Ca", "ram": 40.078, "valency": 4},' +
    '{"name": "Scandium", "symbol": "Sc", "ram": 44.955912, "valency": 4},' +
    '{"name": "Titanium", "symbol": "Ti", "ram": 47.867, "valency": 4},' +
    '{"name": "Vanadium", "symbol": "V", "ram": 50.9415, "valency": 4},' +
    '{"name": "Chromium", "symbol": "Cr", "ram": 51.9961, "valency": 4},' +
    '{"name": "Manganese", "symbol": "Mn", "ram": 54.938045, "valency": 4},' +
    '{"name": "Iron", "symbol": "Fe", "ram": 55.845, "valency": 4},' +
    '{"name": "Cobalt", "symbol": "Co", "ram": 58.933195, "valency": 4},' +
    '{"name": "Nickel", "symbol": "Ni", "ram": 58.6934, "valency": 4},' +
    '{"name": "Copper", "symbol": "Cu", "ram": 63.546, "valency": 4},' +
    '{"name": "Zinc", "symbol": "Zn", "ram": 65.39, "valency": 4},' +
    '{"name": "Gallium", "symbol": "Ga", "ram": 69.723, "valency": 4},' +
    '{"name": "Germanium", "symbol": "Ge", "ram": 72.64, "valency": 4},' +
    '{"name": "Arsenic", "symbol": "As", "ram": 74.92160, "valency": 4},' +
    '{"name": "Selenium", "symbol": "Se", "ram": 78.96, "valency": 4},' +
    '{"name": "Bromine", "symbol": "Br", "ram": 79.904, "valency": 4},' +
    '{"name": "Krypton", "symbol": "Kr", "ram": 83.798, "valency": 4},' +
    '{"name": "Rubidium", "symbol": "Rb", "ram": 85.4678, "valency": 5},' +
    '{"name": "Strontium", "symbol": "Sr", "ram": 87.62, "valency": 5},' +
    '{"name": "Yttrium", "symbol": "Y", "ram": 88.90585, "valency": 5},' +
    '{"name": "Zirconium", "symbol": "Zr", "ram": 91.224, "valency": 5},' +
    '{"name": "Niobium", "symbol": "Nb", "ram": 92.906 38, "valency": 5},' +
    '{"name": "Molybdenum", "symbol": "Mo", "ram": 95.94, "valency": 5},' +
    '{"name": "Technetium", "symbol": "Tc", "ram": 97.9072, "valency": 5},' +
    '{"name": "Ruthenium", "symbol": "Ru", "ram": 101.07, "valency": 5},' +
    '{"name": "Rhodium", "symbol": "Rh", "ram": 102.905 50, "valency": 5},' +
    '{"name": "Palladium", "symbol": "Pd", "ram": 106.42, "valency": 5},' +
    '{"name": "Silver", "symbol": "Ag", "ram": 107.8682, "valency": 5},' +
    '{"name": "Cadmium", "symbol": "Cd", "ram": 112.411, "valency": 5},' +
    '{"name": "Indium", "symbol": "In", "ram": 114.818, "valency": 5},' +
    '{"name": "Tin", "symbol": "Sn", "ram": 118.710, "valency": 5},' +
    '{"name": "Antimony", "symbol": "Sb", "ram": 121.760, "valency": 5},' +
    '{"name": "Tellurium", "symbol": "Te", "ram": 127.60, "valency": 5},' +
    '{"name": "Iodine", "symbol": "I", "ram": 126.904 47, "valency": 5},' +
    '{"name": "Xenon", "symbol": "Xe", "ram": 131.293, "valency": 5},' +
    '{"name": "Caesium", "symbol": "Cs", "ram": 132.9054519, "valency": 6},' +
    '{"name": "Barium", "symbol": "Ba", "ram": 137.327, "valency": 6},' +
    '{"name": "Lanthanum", "symbol": "La", "ram": 138.90547, "valency": 6},' +
    '{"name": "Cerium", "symbol": "Ce", "ram": 140.116, "valency": 6},' +
    '{"name": "Praseodymium", "symbol": "Pr", "ram": 140.90765, "valency": 6},' +
    '{"name": "Neodymium", "symbol": "Nd", "ram": 144.242, "valency": 6},' +
    '{"name": "Promethium", "symbol": "Pm", "ram": 144.9127, "valency": 6},' +
    '{"name": "Samarium", "symbol": "Sm", "ram": 150.36, "valency": 6},' +
    '{"name": "Europium", "symbol": "Eu", "ram": 151.964, "valency": 6},' +
    '{"name": "Gadolinium", "symbol": "Gd", "ram": 157.25, "valency": 6},' +
    '{"name": "Terbium", "symbol": "Tb", "ram": 158.92535, "valency": 6},' +
    '{"name": "Dysprosium", "symbol": "Dy", "ram": 162.500, "valency": 6},' +
    '{"name": "Holmium", "symbol": "Ho", "ram": 164.930 32, "valency": 6},' +
    '{"name": "Erbium", "symbol": "Er", "ram": 167.259, "valency": 6},' +
    '{"name": "Thulium", "symbol": "Tm", "ram": 168.93421, "valency": 6},' +
    '{"name": "Ytterbium", "symbol": "Yb", "ram": 173.04, "valency": 6},' +
    '{"name": "Lutetium", "symbol": "Lu", "ram": 174.967, "valency": 6},' +
    '{"name": "Hafnium", "symbol": "Hf", "ram": 178.49, "valency": 6},' +
    '{"name": "Tantalum", "symbol": "Ta", "ram": 180.94788, "valency": 6},' +
    '{"name": "Tungsten", "symbol": "W", "ram": 183.84, "valency": 6},' +
    '{"name": "Rhenium", "symbol": "Re", "ram": 186.207, "valency": 6},' +
    '{"name": "Osmium", "symbol": "Os", "ram": 190.23, "valency": 6},' +
    '{"name": "Iridium", "symbol": "Ir", "ram": 192.217, "valency": 6},' +
    '{"name": "Platinum", "symbol": "Pt", "ram": 195.084, "valency": 6},' +
    '{"name": "Gold", "symbol": "Au", "ram": 196.966569, "valency": 6},' +
    '{"name": "Mercury", "symbol": "Hg", "ram": 200.59, "valency": 6},' +
    '{"name": "Thallium", "symbol": "Tl", "ram": 204.3833, "valency": 6},' +
    '{"name": "Lead", "symbol": "Pb", "ram": 207.2, "valency": 6},' +
    '{"name": "Bismuth", "symbol": "Bi", "ram": 208.98040, "valency": 6},' +
    '{"name": "Polonium", "symbol": "Po", "ram": 208.9824, "valency": 6},' +
    '{"name": "Astatine", "symbol": "At", "ram": 209.9871, "valency": 6},' +
    '{"name": "Radon", "symbol": "Rn", "ram": 222.0176, "valency": 6},' +
    '{"name": "Francium", "symbol": "Fr", "ram": 223.0197, "valency": 7},' +
    '{"name": "Radium", "symbol": "Ra", "ram": 226.0254, "valency": 7},' +
    '{"name": "Actinium", "symbol": "Ac", "ram": 227.0277, "valency": 7},' +
    '{"name": "Thorium", "symbol": "Th", "ram": 232.03806, "valency": 7},' +
    '{"name": "Protactinium", "symbol": "Pa", "ram": 231.03588, "valency": 7},' +
    '{"name": "Uranium", "symbol": "U", "ram": 238.02891, "valency": 7},' +
    '{"name": "Neptunium", "symbol": "Np", "ram": 237.0482, "valency": 7},' +
    '{"name": "Plutonium", "symbol": "Pu", "ram": 244.0642, "valency": 7},' +
    '{"name": "Americium", "symbol": "Am", "ram": 243.0614, "valency": 7},' +
    '{"name": "Curium", "symbol": "Cm", "ram": 247.0704, "valency": 7},' +
    '{"name": "Berkelium", "symbol": "Bk", "ram": 247.0703, "valency": 7},' +
    '{"name": "Californium", "symbol": "Cf", "ram": 251.0796, "valency": 7},' +
    '{"name": "Einsteinium", "symbol": "Es", "ram": 252.0830, "valency": 7},' +
    '{"name": "Fermium", "symbol": "Fm", "ram": 257.0951, "valency": 7},' +
    '{"name": "Mendelevium", "symbol": "Md", "ram": 258.0984, "valency": 7},' +
    '{"name": "Nobelium", "symbol": "No", "ram": 259.1010, "valency": 7},' +
    '{"name": "Lawrencium", "symbol": "Lr", "ram": 262.1097, "valency": 7},' +
    '{"name": "Rutherfordium", "symbol": "Rf", "ram": 261.1088, "valency": 7},' +
    '{"name": "Dubnium", "symbol": "Db", "ram": 262, "valency": 7},' +
    '{"name": "Seaborgium", "symbol": "Sg", "ram": 266, "valency": 7},' +
    '{"name": "Bohrium", "symbol": "Bh", "ram": 264, "valency": 7},' +
    '{"name": "Hassium", "symbol": "Hs", "ram": 277, "valency": 7},' +
    '{"name": "Meitnerium", "symbol": "Mt", "ram": 268, "valency": 7},' +
    '{"name": "Darmstadtium", "symbol": "Ds", "ram": 271, "valency": 7},' +
    '{"name": "Roentgenium", "symbol": "Rg", "ram": 272, "valency": 7},' +
    '{"name": "Ununbium", "symbol": "Uub", "ram": 285, "valency": 7},' +
    '{"name": "Ununtrium", "symbol": "Uut", "ram": 284, "valency": 7},' +
    '{"name": "Ununquadium", "symbol": "Uuq", "ram": 289, "valency": 7},' +
    '{"name": "Ununpentium", "symbol": "Uup", "ram": 288, "valency": 7},' +
    '{"name": "Ununhexium", "symbol": "Uuh", "ram": 292, "valency": 7},' +
    '{"name": "Ununseptium", "symbol": "Uus", "ram": “Not Applicable”, "valency": 7},' +
    '{"name": "Ununoctium", "symbol": "Uuo", "ram": 294, "valency": 7}]}';

var elementNumbers = {
    "Hydrogen": 1,
    "Helium": 2,
    "Lithium": 3,
    "Beryllium": 4,
    "Boron": 5,
    "Carbon": 6,
    "Nitrogen": 7,
    "Oxygen": 8,
    "Fluorine": 9,
    "Neon": 10,
    "Sodium": 11,
    "Magnesium": 12,
    "Aluminum": 13,
    "Silicon": 14,
    "Phosphorus": 15,
    "Sulfur": 16,
    "Chlorine": 17,
    "Argon": 18,
    "Potassium": 19,
    "Calcium": 20,
    "Scandium": 21,
    "Titanium": 22,
    "Vanadium": 23,
    "Chromium": 24,
    "Manganese": 25,
    "Iron": 26,
    "Cobalt": 27,
    "Nickel": 28,
    "Copper": 29,
    "Zinc": 30,
    "Gallium": 31,
    "Germanium": 32,
    "Arsenic": 33,
    "Selenium": 34,
    "Bromine": 35,
    "Krypton": 36,
    "Rubidium": 37,
    "Strontium": 38,
    "Yttrium": 39,
    "Zirconium": 40,
    "Niobium": 41,
    "Molybdenum": 42,
    "Technetium": 43,
    "Ruthenium": 44,
    "Rhodium": 45,
    "Palladium": 46,
    "Silver": 47,
    "Cadmium": 48,
    "Indium": 49,
    "Tin": 50,
    "Antimony": 51,
    "Tellurium": 52,
    "Iodine": 53,
    "Xenon": 54,
    "Cesium": 55,
    "Barium": 56,
    "Lanthanum": 57,
    "Cerium": 58,
    "Praseodymium": 59,
    "Neodymium": 60,
    "Promethium": 61,
    "Samarium": 62,
    "Europium": 63,
    "Gadolinium": 64,
    "Terbium": 65,
    "Dysprosium": 66,
    "Holmium": 67,
    "Erbium": 68,
    "Thulium": 69,
    "Ytterbium": 70,
    "Lutetium": 71,
    "Hafnium": 72,
    "Tantalum": 73,
    "Tungsten": 74,
    "Rhenium": 75,
    "Osmium": 76,
    "Iridium": 77,
    "Platinum": 78,
    "Gold": 79,
    "Mercury": 80,
    "Thallium": 81,
    "Lead": 82,
    "Bismuth": 83,
    "Polonium": 84,
    "Astatine": 85,
    "Radon": 86,
    "Francium": 87,
    "Radium": 88,
    "Actinium": 89,
    "Thorium": 90,
    "Protactinium": 91,
    "Uranium": 92,
    "Neptunium": 93,
    "Plutonium": 94,
    "Americium": 95,
    "Curium": 96,
    "Berkelium": 97,
    "Californium": 98,
    "Einsteinium": 99,
    "Fermium": 100,
    "Mendelevium": 101,
    "Nobelium": 102,
    "Lawrencium": 103,
    "Rutherfordium": 104,
    "Dubnium": 105,
    "Seaborgium": 106,
    "Bohrium": 107,
    "Hassium": 108,
    "Meitnerium": 109,
    "Darmstadtium": 110,
    "Roentgenium": 111,
    "Ununbium": 112,
    "Ununtrium": 113,
    "Ununquadium": 114,
    "Ununpentium": 115,
    "Ununhexium": 116,
    "Ununseptium": 117,
    "Ununoctium": 118
};

function findNumber(elementName) {
    "use strict";
    var elementNumber = elementNumbers[elementName];
    return elementNumber;
}

//Runs when the user clicks Calculate
function calculate() {
    "use strict";
    
    var elements_obj = JSON.parse(elements),
        element1 = document.getElementById('first_Element').innerHTML,
        element2 = document.getElementById('second_Element').innerHTML,
        elementNumber = findNumber(element1),
        //Finds element's symbol abbreviation
        symbol = elements_obj.elements[elementNumber].symbol,
        //Finds the element's valency
        valency = elements_obj.elements[elementNumber].valency,
        //Creates variables for Relative Atomic Mass and Valences
        ram = elements_obj.elements[elementNumber].ram,
        subnum = valency,
        //Calculates number of moles
        moles = ram * valency;

    //When the first box has a value and the second does not
    if (element1 != "" && element2 == "") {
        
        //Displays symbol, valency and number of moles
        document.getElementById('symbol').innerHTML = symbol;
        document.getElementById('subnum').innerHTML = "<sub>" + subnum + "</sub>";
        document.getElementById('moles').innerHTML = moles;
    } else if (element1 != "" && element2 != "") {
        //To Be Added for when the first box has a value and so does the second box
    } else {
        //Displays error message when the user doesn't enter an element
        document.getElementById('error').innerHTML = 'ERROR: Please enter a value in at least the first box.';
    }
}