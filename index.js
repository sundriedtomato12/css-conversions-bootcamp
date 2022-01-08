import {
  hexToRgb,
  rgbToHex,
  hslToHex,
  hslToRgb,
  rgbToHsl,
  hexToHsl,
} from './conversion-functions.js'

let conversionMethod = process.argv[2];
let output;

if (conversionMethod == "rgbtohsl") {
  //sample command: node index.js rgbtohsl 'rgb(255,255,255)'
  console.log('converting from RGB to HSL...');
  let rgbInput = process.argv[3];
  output = rgbToHsl(rgbInput);
}

if (conversionMethod == "rgbtohex") {
  //sample command: node index.js rgbtohex 'rgb(255,255,255)'
  console.log('converting from RGB to Hex...');
  let rgbInput = process.argv[3];
  output = rgbToHex(rgbInput);
}

if (conversionMethod == "hextorgb") {
  //sample command: node index.js hextorgb '#ffffff'
  console.log('converting from Hex to RGB...');
  let hexInput = process.argv[3];
  output = hexToRgb(hexInput);
}

if (conversionMethod == "hextohsl") {
  //sample command: node index.js hextohsl '#ffffff'
  console.log('converting from Hex to HSL...');
  let hexInput = process.argv[3];
  output = hexToHsl(hexInput);
}

if (conversionMethod == "hsltohex") {
  //sample command: node index.js hsltohex 'hsl(0,0,100)'
  console.log('converting from HSL to Hex...');
  let hslInput = process.argv[3];
  output = hslToHex(hslInput);
}

if (conversionMethod == "hsltorgb") {
  //sample command: node index.js hsltorgb 'hsl(0,0,100)'
  console.log('converting from HSL to RGB...');
  let hslInput = process.argv[3];
  output = hslToRgb(hslInput);
}

console.log(output);