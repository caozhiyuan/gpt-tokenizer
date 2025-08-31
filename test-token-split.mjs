// Test the token split regex
async function testTokenSplit() {
  const testString = "What's the weather like in San Francisco?";
  
  // This is the same pattern from constants.ts
  const CL_AND_O_TOKEN_SPLIT_PATTERN = /(?:'s|'t|'re|'ve|'m|'ll|'d)|[^\r\n\p{L}\p{N}]?\p{L}+|\p{N}{1,3}| ?[^\s\p{L}\p{N}]+[\r\n]*|\s*[\r\n]+|\s+(?!\S)|\s+/giu;
  
  console.log("Input:", testString);
  console.log("Regex matches:");
  
  for (const [match] of testString.matchAll(CL_AND_O_TOKEN_SPLIT_PATTERN)) {
    console.log(`"${match}"`);
  }
}

testTokenSplit().catch(console.error);