// Define the custom alphabet mapping (replace with your custom symbols)
const customAlphabet = {
    'A': 'A.svg',
    'B': 'B.svg',
    'C': 'C.svg',
    'D': 'D.svg',
    'E': 'E.svg',
    'F': 'F.svg',
    'G': 'G.svg',
    'H': 'H.svg',
    'I': 'I.svg',
    'J': 'J.svg',
    'K': 'K.svg',
    'L': 'L.svg',
    'M': 'M.svg',
    'N': 'N.svg',
    'O': 'O.svg',
    'P': 'P.svg',
    'Q': 'Q.svg',
    'R': 'R.svg',
    'S': 'S.svg',
    'T': 'T.svg',
    'U': 'U.svg',
    'V': 'V.svg',
    'W': 'W.svg',
    'X': 'X.svg',
    'Y': 'Y.svg',
    'Z': 'Z.svg',
    // Add mappings for other letters as needed
};

// Function to translate English text to custom symbols
function translate(input) {
    let translation = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i].toUpperCase(); // Convert the character to uppercase for case insensitivity
        if (customAlphabet[char]) {
            // If the character has a custom symbol, add it to the translation
            translation += `<img src="${customAlphabet[char]}" alt="${char}">`;
        } else {
            // If the character is not in the custom alphabet, keep it as it is
            translation += char;
        }
    }
    return translation;
}

// Function to handle the translation when the button is clicked
function translateText() {
    const englishInput = document.getElementById("englishInput").value;
    const translationResult = document.getElementById("translationResult");
    const translation = translate(englishInput);
    translationResult.innerHTML = translation;
    
}
