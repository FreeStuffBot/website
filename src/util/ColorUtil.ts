/* src https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors */
export function shadeColor(color: string, percent: number) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);
  R = ~~((R * (100 + percent)) / 100);
  G = ~~((G * (100 + percent)) / 100);
  B = ~~((B * (100 + percent)) / 100);
  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;
  const RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
  return "#" + RR + GG + BB;
}

export function makeColorMagic(H: string, am: number) {
  // Convert hex to RGB first
  let r = 0
    , g = 0
    , b = 0;
  if (H.length == 4) {
    r = parseInt("0x" + H[1] + H[1]);
    g = parseInt("0x" + H[2] + H[2]);
    b = parseInt("0x" + H[3] + H[3]);
  } else if (H.length == 7) {
    r = parseInt("0x" + H[1] + H[2]);
    g = parseInt("0x" + H[3] + H[4]);
    b = parseInt("0x" + H[5] + H[6]);
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b)
      , cmax = Math.max(r, g, b) 
      , delta = cmax - cmin;
  let h = 0
    , s = 0
    , l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  l -= am;
  h += am / 3;

  return "hsl(" + h + "," + s + "%," + l + "%)";
}