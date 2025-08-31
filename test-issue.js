// Test case to reproduce the issue described in the problem statement
async function testTokenizers() {
  const testString = "What's the weather like in San Francisco?"

  // Test with cl100k_base encoding
  const { encode: gptEncodeCl100k } = await import("./esm/encoding/cl100k_base.js")
  const gptTokensCl100k = gptEncodeCl100k(testString).length
  console.log(`cl100k_base - gpt-tokenizer: ${gptTokensCl100k}`)

  // Test with o200k_base encoding
  const { encode: gptEncodeO200k } = await import("./esm/encoding/o200k_base.js")
  const gptTokensO200k = gptEncodeO200k(testString).length
  console.log(`o200k_base - gpt-tokenizer: ${gptTokensO200k}`)

  // Show actual tokens for debugging
  console.log(`cl100k_base tokens:`, gptEncodeCl100k(testString))
  console.log(`o200k_base tokens:`, gptEncodeO200k(testString))
}

testTokenizers().catch(console.error)