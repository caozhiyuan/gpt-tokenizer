// Test other cases to see if this is a systematic issue
import { get_encoding } from 'tiktoken';

async function testOtherCases() {
  const testCases = [
    "Hello world",
    "The quick brown",
    "I'm happy",
    "don't",
    "won't", 
    "can't",
    "they're"
  ];
  
  const o200kEncoder = get_encoding('o200k_base');
  const { encode: gptEncode } = await import("./esm/encoding/o200k_base.js");
  
  for (const testCase of testCases) {
    const tiktokenTokens = o200kEncoder.encode(testCase);
    const gptTokens = gptEncode(testCase);
    
    const match = tiktokenTokens.length === gptTokens.length && 
      Array.from(tiktokenTokens).every((token, i) => token === gptTokens[i]);
    
    console.log(`"${testCase}": tiktoken=${tiktokenTokens.length}, gpt=${gptTokens.length}, match=${match}`);
    if (!match) {
      console.log(`  tiktoken: [${Array.from(tiktokenTokens).join(', ')}]`);
      console.log(`  gpt:      [${gptTokens.join(', ')}]`);
    }
  }
  
  o200kEncoder.free();
}

testOtherCases().catch(console.error);