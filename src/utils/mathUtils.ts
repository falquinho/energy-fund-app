

export const limitDecimals = (value: number): number => {
  return Math.trunc(value * 100) / 100;
}

/**
 * @param base Base of comparison
 * @param value Number to compare
 * @returns Percentage of variation, in 100%. 
 */
export const deltaPercentage = (base: number, value: number): number => {
  return limitDecimals((((value - base) / base) * 100));
}