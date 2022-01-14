// Function to know if two string are anagrams
const anagram = (str1, str2) => {
  // Convert the strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  // Remove all non-alphanumeric characters
  str1 = str1.replace(/[^\w]/g, "");
  str2 = str2.replace(/[^\w]/g, "");
  // Sort the strings
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  // Return true if the strings are anagrams
  return str1 === str2;
};

console.log(anagram("Hello World", "Hello World"));
console.log(anagram("Hello World", "Hello World!"));
console.log(anagram("Hell Word", "Hello World!"));
