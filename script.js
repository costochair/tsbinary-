// Object mapping for TS Binary conversion including numbers, letters, and common characters
const tsBinaryMap = {
    'A': 'tsTststS', 'B': 'tsTstSst', 'C': 'tsTstSSt', 'D': 'tsTsTsst',
    'E': 'tsTsTstS', 'F': 'tsTsTsSt', 'G': 'tsTsTsSS', 'H': 'tsTSTsst',
    'I': 'tsTSTstS', 'J': 'tsTSTSst', 'K': 'tsTSTSSt', 'L': 'tsTSTSst',
    'M': 'tsTSTStS', 'N': 'tsTSTSSs', 'O': 'tsTSTSSS', 'P': 'TStstsst',
    'Q': 'TStststS', 'R': 'TStstSst', 'S': 'TStstSSt', 'T': 'TStsTsst',
    'U': 'TStsTstS', 'V': 'TStsTsSt', 'W': 'TStsTsSS', 'X': 'TSTstsst',
    'Y': 'TSTststS', 'Z': 'TSTstSst',
    'a': 'tsTSststS', 'b': 'tsTSstSst', 'c': 'tsTSstSSt', 'd': 'tsTSTsst',
    'e': 'tsTSTstS', 'f': 'tsTSTsSt', 'g': 'tsTSTsSS', 'h': 'tsTSSsst',
    'i': 'tsTSSstS', 'j': 'tsTSSSst', 'k': 'tsTSSSSt', 'l': 'tsTSSSst',
    'm': 'tsTSSStS', 'n': 'tsTSSSSs', 'o': 'tsTSSSSS', 'p': 'TSTsstst',
    'q': 'TSTsstStS', 'r': 'TSTsstSst', 's': 'TSTsstSSt', 't': 'TSTsTsst',
    'u': 'TSTsTstS', 'v': 'TSTsTsSt', 'w': 'TSTsTsSS', 'x': 'TSTSstst',
    'y': 'TSTSstStS', 'z': 'TSTSstSst',
    '0': 'tstststs', '1': 'Tstststs', '2': 'tsTststs', '3': 'TSTststs',
    '4': 'tstsTsts', '5': 'TstsTsts', '6': 'tsTsTsts', '7': 'TSTsTsts',
    '8': 'tststSTs', '9': 'TststSTs',
    ' ': '~'  // Use tilde (~) to represent space during translation
};

// Generate unique "ts binary" patterns for any character not in tsBinaryMap
function getTsBinaryForChar(char) {
    if (!tsBinaryMap[char]) {
        // If character is not in the map, generate a unique binary-like pattern
        let binaryPattern = '';
        for (let i = 0; i < char.charCodeAt(0) % 8; i++) {
            binaryPattern += (Math.random() > 0.5) ? 'T' : 'S';  // Randomly choose T or S
        }
        tsBinaryMap[char] = 'ts' + binaryPattern;
    }
    return tsBinaryMap[char];
}

// Reverse map for translating TS binary back to English
const reverseTsBinaryMap = Object.entries(tsBinaryMap).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

// Function to translate input text to TS Binary
function translateToTS() {
    const inputText = document.getElementById('inputText').value;
    let output = '';

    for (let char of inputText) {
        output += getTsBinaryForChar(char);  // Use dynamic generation for missing characters
    }

    document.getElementById('outputText').value = output;
}

// Function to translate TS Binary back to English
function translateToEnglish() {
    const inputText = document.getElementById('inputText').value;
    let output = '';
    let buffer = '';

    for (let char of inputText) {
        if (char === '~') {  // Check for tilde (~) used for spaces
            output += ' ';
            buffer = '';  // Reset buffer if space is found
        } else {
            buffer += char;
            if (reverseTsBinaryMap[buffer]) {
                output += reverseTsBinaryMap[buffer];
                buffer = '';  // Reset buffer after a match
            }
        }
    }

    document.getElementById('outputText').value = output;
}
