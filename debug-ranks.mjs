// Debug script to understand the ranking issue
async function debugRanks() {
  const testString = "What's";
  
  // Test with tiktoken
  const { get_encoding } = await import('tiktoken');
  const o200kEncoder = get_encoding('o200k_base');
  const tiktokenTokens = o200kEncoder.encode(testString);
  console.log(`tiktoken o200k_base for "${testString}":`, tiktokenTokens);
  o200kEncoder.free();
  
  // Test with gpt-tokenizer
  const { encode, decode } = await import("./esm/encoding/o200k_base.js");
  const gptTokens = encode(testString);
  console.log(`gpt-tokenizer o200k_base for "${testString}":`, gptTokens);
  
  // Check what each token decodes to
  console.log(`Token 45350 decodes to: "${decode([45350])}"`);
  console.log(`Token 4827 decodes to: "${decode([4827])}"`);
  console.log(`Token 885 decodes to: "${decode([885])}"`);
  
  // Now let's check what happens when we encode just "What" and just "'s"
  console.log(`"What" encodes to:`, encode("What"));
  console.log(`"'s" encodes to:`, encode("'s"));
}

debugRanks().catch(console.error);