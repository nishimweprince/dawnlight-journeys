/**
 * CAPITALIZE STRING
 * @param string - The string to capitalize
 * @returns The capitalized string
 */
export const capitalizeString = (
  string: string | undefined | null | number
) => {
  if (!string || typeof string !== 'string') return '';
  const isCamelCase = /^[a-z]+([A-Z][a-z]*)*$/.test(string);
  if (isCamelCase) return capitalizeCamelCase(string);
  if (
    string.includes('@') ||
    string.includes('true') ||
    string.includes('false')
  )
    return string; // Avoid capitalizing email addresses and boolean values
  const words = string?.toLowerCase()?.split('_');
  const capitalizedWords =
    words && words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords && capitalizedWords.join(' ');
};

/**
 * CAPITALIZE CAMEL CASE
 * @param string - The string to capitalize
 * @returns The capitalized string
 */
export function capitalizeCamelCase(string: string) {
  return string
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (str) {
      return str.toUpperCase();
    })
    .trim();
}
