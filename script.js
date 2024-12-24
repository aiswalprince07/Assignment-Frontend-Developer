// Event listener for the decrypt button
document.getElementById('decryptButton').addEventListener('click', () => {
    // Get the key and encrypted text input values
    const key = document.getElementById('key').value;
    const encryptedText = document.getElementById('encryptedText').value;
    let decryptedMessage = '';

    // Validate input and perform decryption
    if (key && encryptedText) {
        const shift = parseInt(key, 10);

        // Check if the key is a valid number
        if (isNaN(shift)) {
            decryptedMessage = 'Invalid key! Please enter a numeric key.';
        } else {
            // Decrypt the text using the key
            decryptedMessage = encryptedText
                .split('')
                .map(char => {
                    if (char.match(/[a-zA-Z]/)) {
                        const base = char.charCodeAt(0) >= 97 ? 97 : 65;
                        return String.fromCharCode(
                            ((char.charCodeAt(0) - base - shift + 26) % 26) + base
                        );
                    }
                    return char;
                })
                .join('');
        }
    } else {
        decryptedMessage = 'Please fill in both the key and the encrypted text.';
    }

    // Display the decrypted message
    document.getElementById('output').textContent = decryptedMessage;
});
