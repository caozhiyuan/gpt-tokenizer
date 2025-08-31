// Test just the problematic part
import { get_encoding } from 'tiktoken';

async function testPartialString() {
  const testString = "What's the";
  
  // Test with cl100k_base
  const cl100kEncoder = get_encoding('cl100k_base');
  const cl100kTokens = cl100kEncoder.encode(testString);
  console.log(`cl100k_base - tiktoken: ${cl100kTokens.length}, tokens:`, cl100kTokens);
  cl100kEncoder.free();
  
  // Test with o200k_base
  const o200kEncoder = get_encoding('o200k_base');
  const o200kTokens = o200kEncoder.encode(testString);
  console.log(`o200k_base - tiktoken: ${o200kTokens.length}, tokens:`, o200kTokens);
  o200kEncoder.free();
  
  // Now test with gpt-tokenizer
  const { encode: gptEncodeCl100k } = await import("./esm/encoding/cl100k_base.js");
  const gptTokensCl100k = gptEncodeCl100k(testString);
  console.log(`cl100k_base - gpt-tokenizer: ${gptTokensCl100k.length}, tokens:`, gptTokensCl100k);

  const { encode: gptEncodeO200k } = await import("./esm/encoding/o200k_base.js");
  const gptTokensO200k = gptEncodeO200k(testString);
  console.log(`o200k_base - gpt-tokenizer: ${gptTokensO200k.length}, tokens:`, gptTokensO200k);
}

testPartialString().catch(console.error);