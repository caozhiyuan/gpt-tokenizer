// Test decode of token 45350
import { get_encoding } from 'tiktoken';

async function testDecode() {
  // Test with o200k_base
  const o200kEncoder = get_encoding('o200k_base');
  
  console.log("Token 45350 decodes to:", o200kEncoder.decode([45350]));
  console.log("Tokens 4827, 885 decode to:", o200kEncoder.decode([4827, 885]));
  
  o200kEncoder.free();
}

testDecode().catch(console.error);