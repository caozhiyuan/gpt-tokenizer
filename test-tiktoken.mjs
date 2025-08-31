// Test script to compare with tiktoken directly
import { get_encoding } from 'tiktoken';

async function testWithTiktoken() {
  const testString = "What's the weather like in San Francisco?";
  
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
}

testWithTiktoken().catch(console.error);