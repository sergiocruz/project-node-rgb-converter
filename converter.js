module.exports = {
  rgbToHex,
  hexToRgb
}

/**
 * Converts RGB color to its Hexadecimal representation
 * @param  {Array<Number>}  The RGB Array
 * @return {String}
 */
function rgbToHex(rgb) {

  const [red, green, blue] = rgb;

  const redHex   = red.toString(16);
  const greenHex = green.toString(16);
  const blueHex  = blue.toString(16);

  return padHex(redHex) + padHex(greenHex) + padHex(blueHex);
}

/**
 * Converts HEX strings to RGB Arrays
 * @param  {String} hex
 * @return {Array<Number>}
 */
function hexToRgb(hex) {

  const redHex   = hex[0] + hex[1];
  const greenHex = hex[2] + hex[3];
  const blueHex  = hex[4] + hex[5];

  return [
    parseInt(redHex, 16),
    parseInt(greenHex, 16),
    parseInt(blueHex, 16),
  ];
}


/**
 * Pads HEX Code
 * @param  {String} hex
 * @return {String}
 */
function padHex(hex) {
  return (hex.length === 1 ? '0' + hex : hex);
}
