function encodeMessage() {
    let message = document.getElementById("message").value;
    let encodedMessage = encode(message);
    document.getElementById("result").innerText = "Encoded message: " + encodedMessage;
}

function decodeMessage() {
    let encodedMessage = document.getElementById("message").value;
    let decodedMessage = decode(encodedMessage);
    document.getElementById("result").innerText = "Decoded message: " + decodedMessage;
}

function encode(message) {
    let encodedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let char = message.charCodeAt(i).toString(2); // Convert character to binary string
        char = "0".repeat(8 - char.length) + char; // Pad with zeros to ensure 8 digits
        encodedMessage += char;
    }
    return encodedMessage;
}

function decode(encodedMessage) {
    let decodedMessage = "";
    for (let i = 0; i < encodedMessage.length; i += 8) {
        let charBinary = encodedMessage.substr(i, 8); // Extract 8-digit binary string
        let charCode = parseInt(charBinary, 2); // Convert binary string to decimal
        decodedMessage += String.fromCharCode(charCode); // Convert decimal to character
    }
    return decodedMessage;
}
