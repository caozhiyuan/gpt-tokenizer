// Test to understand the byte sequence processing
async function debugBytes() {
  const testString = "What's";
  
  console.log("String:", testString);
  console.log("Bytes:", [...new TextEncoder().encode(testString)]);
  
  // Get byte representations
  const whatBytes = [...new TextEncoder().encode("What")];
  const apostropheS = [...new TextEncoder().encode("'s")];
  const fullBytes = [...new TextEncoder().encode("What's")];
  
  console.log("'What' bytes:", whatBytes);
  console.log("''s' bytes:", apostropheS);
  console.log("'What's' bytes:", fullBytes);
}

debugBytes().catch(console.error);