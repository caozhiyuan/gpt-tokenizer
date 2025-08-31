// Test cl100k_base with the same contractions
import { get_encoding } from 'tiktoken';

async function testCl100kContractions() {
  const testCases = [
    "What's",
    "don't",
    "can't",
    "I'm"
  ];
  
  const cl100kEncoder = get_encoding('cl100k_base');
  const { encode: gptEncode } = await import("./esm/encoding/cl100k_base.js");
  
  console.log("Testing cl100k_base:");
  for (const testCase of testCases) {
    const tiktokenTokens = cl100kEncoder.encode(testCase);
    const gptTokens = gptEncode(testCase);
    
    const match = tiktokenTokens.length === gptTokens.length && 
      Array.from(tiktokenTokens).every((token, i) => token === gptTokens[i]);
    
    console.log(`"${testCase}": tiktoken=${tiktokenTokens.length}, gpt=${gptTokens.length}, match=${match}`);
    if (!match) {
      console.log(`  tiktoken: [${Array.from(tiktokenTokens).join(', ')}]`);
      console.log(`  gpt:      [${gptTokens.join(', ')}]`);
    }
  }
  
  cl100kEncoder.free();
}

testCl100kContractions().catch(console.error);