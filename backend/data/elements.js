const elements = [
	"Hydrogen H",
	"Helium He",
	"Lithium Li",
	"Beryllium Be",
	"Boron B",
	"Carbon C",
	"Nitrogen N",
	"Oxygen O",
	"Fluorine F",
	"Neon N",
	"Sodium Na",
	"Magnesium Mg",
	"Aluminium Al",
	"Silicon Si",
	"Phosphorous P",
	"Sulfur S",
	"Chlorine Cl",
	"Argon Ar",
	"Potassium K",
	"Calcium Ca",
	"Scandium Sc",
	"Titanium Ti",
	"Vanadium V",
	"Chromium Cr",
	"Manganese Mn",
	"Iron Fe",
	"CObalt Co",
	"Nickel Ni",
	"Copper Cu",
	"Zinc Zn",
	"Gallium Ga",
	"Germanium Ge",
	"Arsenic As",
	"Selenium Se",
	"Bromine Br",
	"Krypton Kr",
	"Rubidium Rb",
	"Storntium Sr",
	"Yttrium Y",
	"Zirconium Zr",
	"Niobium Nb",
	"Molybdenum Mo",
	"Technetium Tc",
	"Ruthenium Ru",
	"Rhodium Rh",
	"Palladium Pd",
	"Silver Ag",
	"Cadmium Cd",
	"Indium In",
	"Tin Sn",
	"Antimony Sb",
	"Tellurium Te",
	"Iodine I",
	"Xenon Xe",
	"Cesium Cs",
	"Barium Ba",
	"Lanthanum La",
	"Cerium Ce",
	"Praseodymium Pr",
	"Neodymium Nd",
	"Promethium Pm",
	"Samarium Sm",
	"Europium Eu",
	"Gadolinium Gd",
	"Terbium Tb",
	"Dysprosium Dy",
	"Holmium Ho",
	"Erbium Er",
	"Thulium Tm",
	"Ytterbium Yb",
	"Lutetium Lu",
	"Halnium Hf",
	"Tantalum Ta",
	"Tungsten W",
	"Rhenium R",
	"Osmium Os",
	"Iridium Ir",
	"Platinum Pt",
	"Gold Au",
	"Mercury Hg",
	"Thalium Tl",
	"Lead Pb",
	"Bismuth Bi",
	"Polonium Po",
	"Astatine At",
	"Radon Rn",
	"Francium Fr",
	"Radium Ra",
	"Actinium Ac",
	"Thorium Th",
	"Protactinium Pa",
	"Uranium U",
	"Neptunium Np",
	"Plutonium Pu",
	"Americium Am",
	"Curium Cm",
	"Berkelium Bk",
	"Californium Cf",
	"Ensteinium Es",
	"Fermium Fm",
	"Mendelvium Md",
	"Nobelium No",
	"Lawrencium Lr",
	"Rutherfordium Rf",
	"Dubium Db",
	"Seaborgium Sg",
	"Bohrium Bh",
	"Hassium Hs",
	"Meitnerium Mt",
	"Darmstadtium Ds",
	"Roentgenium Rg",
	"Copernicium Cn",
	"Nihonium Nh",
	"Flerovium Fl",
	"Moscovium Mc",
	"Livermorium Lv",
	"Tennsessine Ts",
	"Organesson Og",
];

const objElements = [
	{
		name: "Hydrogen",
		shortName: "H",
		num: 1,
		type: "s",
	},
	{
		name: "Helium",
		shortName: "He",
		num: 2,
		type: "s",
	},
	{
		name: "Lithium",
		shortName: "Li",
		num: 3,
		type: "s",
	},
	{
		name: "Beryllium",
		shortName: "Be",
		num: 4,
		type: "s",
	},
	{
		name: "Boron",
		shortName: "B",
		num: 5,
		type: "p",
	},
	{
		name: "Carbon",
		shortName: "C",
		num: 6,
		type: "p",
	},
	{
		name: "Nitrogen",
		shortName: "N",
		num: 7,
		type: "p",
	},
	{
		name: "Oxygen",
		shortName: "O",
		num: 8,
		type: "p",
	},
	{
		name: "Fluorine",
		shortName: "F",
		num: 9,
		type: "p",
	},
	{
		name: "Neon",
		shortName: "Ne",
		num: 10,
		type: "p",
	},
	{
		name: "Sodium",
		shortName: "Na",
		num: 11,
		type: "s",
	},
	{
		name: "Magnesium",
		shortName: "Mg",
		num: 12,
		type: "s",
	},
	{
		name: "Aluminium",
		shortName: "Al",
		num: 13,
		type: "p",
	},
	{
		name: "Silicon",
		shortName: "Si",
		num: 14,
		type: "p",
	},
	{
		name: "Phosphorous",
		shortName: "P",
		num: 15,
		type: "p",
	},
	{
		name: "Sulfur",
		shortName: "S",
		num: 16,
		type: "p",
	},
	{
		name: "Chlorine",
		shortName: "Cl",
		num: 17,
		type: "p",
	},
	{
		name: "Argon",
		shortName: "Ar",
		num: 18,
		type: "p",
	},
	{
		name: "Potassium",
		shortName: "K",
		num: 19,
		type: "s",
	},
	{
		name: "Calcium",
		shortName: "Ca",
		num: 20,
		type: "s",
	},
	{
		name: "Scandium",
		shortName: "Sc",
		num: 21,
		type: "d",
	},
	{
		name: "Titanium",
		shortName: "Ti",
		num: 22,
		type: "d",
	},
	{
		name: "Vanadium",
		shortName: "V",
		num: 23,
		type: "d",
	},
	{
		name: "Chromium",
		shortName: "Cr",
		num: 24,
		type: "d",
	},
	{
		name: "Manganese",
		shortName: "Mn",
		num: 25,
		type: "d",
	},
	{
		name: "Iron",
		shortName: "Fe",
		num: 26,
		type: "d",
	},
	{
		name: "Cobalt",
		shortName: "Co",
		num: 27,
		type: "d",
	},
	{
		name: "Nickel",
		shortName: "Ni",
		num: 28,
		type: "d",
	},
	{
		name: "Copper",
		shortName: "Cu",
		num: 29,
		type: "d",
	},
	{
		name: "Zinc",
		shortName: "Zn",
		num: 30,
		type: "d",
	},
	{
		name: "Gallium",
		shortName: "Ga",
		num: 31,
		type: "p",
	},
	{
		name: "Germanium",
		shortName: "Ge",
		num: 32,
		type: "p",
	},
	{
		name: "Arsenic",
		shortName: "As",
		num: 33,
		type: "p",
	},
	{
		name: "Selenium",
		shortName: "Se",
		num: 34,
		type: "p",
	},
	{
		name: "Bromine",
		shortName: "Br",
		num: 35,
		type: "p",
	},
	{
		name: "Krypton",
		shortName: "Kr",
		num: 36,
		type: "p",
	},
	{
		name: "Rubidium",
		shortName: "Rb",
		num: 37,
		type: "s",
	},
	{
		name: "Storntium",
		shortName: "Sr",
		num: 38,
		type: "s",
	},
	{
		name: "Yttrium",
		shortName: "Y",
		num: 39,
		type: "d",
	},
	{
		name: "Zirconium",
		shortName: "Zr",
		num: 40,
		type: "d",
	},
	{
		name: "Niobium",
		shortName: "Nb",
		num: 41,
		type: "d",
	},
	{
		name: "Molybdenum",
		shortName: "Mo",
		num: 42,
		type: "d",
	},
	{
		name: "Technetium",
		shortName: "Tc",
		num: 43,
		type: "d",
	},
	{
		name: "Ruthenium",
		shortName: "Ru",
		num: 44,
		type: "d",
	},
	{
		name: "Rhodium",
		shortName: "Rh",
		num: 45,
		type: "d",
	},
	{
		name: "Palladium",
		shortName: "Pd",
		num: 46,
		type: "d",
	},
	{
		name: "Silver",
		shortName: "Ag",
		num: 47,
		type: "d",
	},
	{
		name: "Cadmium",
		shortName: "Cd",
		num: 48,
		type: "d",
	},
	{
		name: "Indium",
		shortName: "In",
		num: 49,
		type: "p",
	},
	{
		name: "Tin",
		shortName: "Sn",
		num: 50,
		type: "p",
	},
	{
		name: "Antimony",
		shortName: "Sb",
		num: 51,
		type: "p",
	},
	{
		name: "Tellurium",
		shortName: "Te",
		num: 52,
		type: "p",
	},
	{
		name: "Iodine",
		shortName: "I",
		num: 53,
		type: "p",
	},
	{
		name: "Xenon",
		shortName: "Xe",
		num: 54,
		type: "p",
	},
	{
		name: "Cesium",
		shortName: "Cs",
		num: 55,
		type: "s",
	},
	{
		name: "Barium",
		shortName: "Ba",
		num: 56,
		type: "s",
	},
	{
		name: "Lanthanum",
		shortName: "La",
		num: 57,
		type: "f",
	},
	{
		name: "Cerium",
		shortName: "Ce",
		num: 58,
		type: "f",
	},
	{
		name: "Praseodymium",
		shortName: "Pr",
		num: 59,
		type: "f",
	},
	{
		name: "Neodymium",
		shortName: "Nd",
		num: 60,
		type: "f",
	},
	{
		name: "Promethium",
		shortName: "Pm",
		num: 61,
		type: "f",
	},
	{
		name: "Samarium",
		shortName: "Sm",
		num: 62,
		type: "f",
	},
	{
		name: "Europium",
		shortName: "Eu",
		num: 63,
		type: "f",
	},
	{
		name: "Gadolinium",
		shortName: "Gd",
		num: 64,
		type: "f",
	},
	{
		name: "Terbium",
		shortName: "Tb",
		num: 65,
		type: "f",
	},
	{
		name: "Dysprosium",
		shortName: "Dy",
		num: 66,
		type: "f",
	},
	{
		name: "Holmium",
		shortName: "Ho",
		num: 67,
		type: "f",
	},
	{
		name: "Erbium",
		shortName: "Er",
		num: 68,
		type: "f",
	},
	{
		name: "Thulium",
		shortName: "Tm",
		num: 69,
		type: "f",
	},
	{
		name: "Ytterbium",
		shortName: "Yb",
		num: 70,
		type: "f",
	},
	{
		name: "Lutetium",
		shortName: "Lu",
		num: 71,
		type: "d",
	},
	{
		name: "Halnium",
		shortName: "Hf",
		num: 72,
		type: "d",
	},
	{
		name: "Tantalum",
		shortName: "Ta",
		num: 73,
		type: "d",
	},
	{
		name: "Tungsten",
		shortName: "W",
		num: 74,
		type: "d",
	},
	{
		name: "Rhenium",
		shortName: "Re",
		num: 75,
		type: "d",
	},
	{
		name: "Osmium",
		shortName: "Os",
		num: 76,
		type: "d",
	},
	{
		name: "Iridium",
		shortName: "Ir",
		num: 77,
		type: "d",
	},
	{
		name: "Platinum",
		shortName: "Pt",
		num: 78,
		type: "d",
	},
	{
		name: "Gold",
		shortName: "Au",
		num: 79,
		type: "d",
	},
	{
		name: "Mercury",
		shortName: "Hg",
		num: 80,
		type: "d",
	},
	{
		name: "Thalium",
		shortName: "Tl",
		num: 81,
		type: "p",
	},
	{
		name: "Lead",
		shortName: "Pb",
		num: 82,
		type: "p",
	},
	{
		name: "Bismuth",
		shortName: "Bi",
		num: 83,
		type: "p",
	},
	{
		name: "Polonium",
		shortName: "Po",
		num: 84,
		type: "p",
	},
	{
		name: "Astatine",
		shortName: "At",
		num: 85,
		type: "p",
	},
	{
		name: "Radon",
		shortName: "Rn",
		num: 86,
		type: "p",
	},
	{
		name: "Francium",
		shortName: "Fr",
		num: 87,
		type: "s",
	},
	{
		name: "Radium",
		shortName: "Ra",
		num: 88,
		type: "s",
	},
	{
		name: "Actinium",
		shortName: "Ac",
		num: 89,
		type: "f",
	},
	{
		name: "Thorium",
		shortName: "Th",
		num: 90,
		type: "f",
	},
	{
		name: "Protactinium",
		shortName: "Pa",
		num: 91,
		type: "f",
	},
	{
		name: "Uranium",
		shortName: "U",
		num: 92,
		type: "f",
	},
	{
		name: "Neptunium",
		shortName: "Np",
		num: 93,
		type: "f",
	},
	{
		name: "Plutonium",
		shortName: "Pu",
		num: 94,
		type: "f",
	},
	{
		name: "Americium",
		shortName: "Am",
		num: 95,
		type: "f",
	},
	{
		name: "Curium",
		shortName: "Cm",
		num: 96,
		type: "f",
	},
	{
		name: "Berkelium",
		shortName: "Bk",
		num: 97,
		type: "f",
	},
	{
		name: "Californium",
		shortName: "Cf",
		num: 98,
		type: "f",
	},
	{
		name: "Ensteinium",
		shortName: "Es",
		num: 99,
		type: "f",
	},
	{
		name: "Fermium",
		shortName: "Fm",
		num: 100,
		type: "f",
	},
	{
		name: "Mendelvium",
		shortName: "Md",
		num: 101,
		type: "f",
	},
	{
		name: "Nobelium",
		shortName: "No",
		num: 102,
		type: "f",
	},
	{
		name: "Lawrencium",
		shortName: "Lr",
		num: 103,
		type: "d",
	},
	{
		name: "Rutherfordium",
		shortName: "Rf",
		num: 104,
		type: "d",
	},
	{
		name: "Dubium",
		shortName: "Db",
		num: 105,
		type: "d",
	},
	{
		name: "Seaborgium",
		shortName: "Sg",
		num: 106,
		type: "d",
	},
	{
		name: "Bohrium",
		shortName: "Bh",
		num: 107,
		type: "d",
	},
	{
		name: "Hassium",
		shortName: "Hs",
		num: 108,
		type: "d",
	},
	{
		name: "Meitnerium",
		shortName: "Mt",
		num: 109,
		type: "d",
	},
	{
		name: "Darmstadtium",
		shortName: "Ds",
		num: 110,
		type: "d",
	},
	{
		name: "Roentgenium",
		shortName: "Rg",
		num: 111,
		type: "d",
	},
	{
		name: "Copernicium",
		shortName: "Cn",
		num: 112,
		type: "d",
	},
	{
		name: "Nihonium",
		shortName: "Nh",
		num: 113,
		type: "p",
	},
	{
		name: "Flerovium",
		shortName: "Fl",
		num: 114,
		type: "p",
	},
	{
		name: "Moscovium",
		shortName: "Mc",
		num: 115,
		type: "p",
	},
	{
		name: "Livermorium",
		shortName: "Lv",
		num: 116,
		type: "p",
	},
	{
		name: "Tennsessine",
		shortName: "Ts",
		num: 117,
		type: "p",
	},
	{
		name: "Organesson",
		shortName: "Og",
		num: 118,
		type: "p",
	},
];

module.exports = objElements;
