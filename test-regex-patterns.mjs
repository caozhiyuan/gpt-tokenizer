// Test different regex patterns
async function testRegexPatterns() {
  const testString = "What's the weather like in San Francisco?";
  
  // Current pattern (splits contractions)
  const currentPattern = /(?:'s|'t|'re|'ve|'m|'ll|'d)|[^\r\n\p{L}\p{N}]?\p{L}+|\p{N}{1,3}| ?[^\s\p{L}\p{N}]+[\r\n]*|\s*[\r\n]+|\s+(?!\S)|\s+/giu;
  
  // Modified pattern (keeps contractions with words)
  const modifiedPattern = /[^\r\n\p{L}\p{N}]?\p{L}+(?:'[a-z]+)*|\p{N}{1,3}| ?[^\s\p{L}\p{N}]+[\r\n]*|\s*[\r\n]+|\s+(?!\S)|\s+/giu;
  
  console.log("Input:", testString);
  console.log("\nCurrent pattern matches:");
  for (const [match] of testString.matchAll(currentPattern)) {
    console.log(`"${match}"`);
  }
  
  console.log("\nModified pattern matches:");
  for (const [match] of testString.matchAll(modifiedPattern)) {
    console.log(`"${match}"`);
  }
}

testRegexPatterns().catch(console.error);