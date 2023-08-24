import { colord } from 'colord';
import { ColorApiData } from './types';
// 3 dimensional distance sorting
// 3D analog to the Pythagorean Theorem
export const colorDistance = (color1: string, color2: string) => {
  const rgb1 = colord(color1).toRgb();
  const rgb2 = colord(color2).toRgb();

  const x =
    Math.pow(rgb1.r - rgb2.r, 2) + Math.pow(rgb1.g - rgb2.g, 2) + Math.pow(rgb1.b - rgb2.b, 2);
  return Math.sqrt(x);
};

export const generateRGBHSL = (colorData: ColorApiData[]) => {
  return colorData.map((c) => {
    return {
      ...c,
      rgb: colord(c.hex).toRgbString(),
      hsl: colord(c.hex).toHslString()
    };
  });
};
