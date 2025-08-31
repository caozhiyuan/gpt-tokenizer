// Debug the BPE ranking lookup
const fs = require('fs');

async function debugBpeRanks() {
  // Read the raw BPE data
  const bpeData = fs.readFileSync('data/o200k_base.tiktoken', 'utf8');
  const lines = bpeData.trim().split('\n');
  
  const rankMap = new Map();
  
  for (const line of lines) {
    const [base64Token, rankStr] = line.split(' ');
    const rank = parseInt(rankStr);
    const bytes = Buffer.from(base64Token, 'base64');
    rankMap.set(bytes.toString('base64'), rank);
  }
  
  // Test specific byte sequences
  const whatBytes = Buffer.from("What");
  const apostropheSBytes = Buffer.from("'s");
  const whatsBytes = Buffer.from("What's");
  
  console.log("Rank for 'What':", rankMap.get(whatBytes.toString('base64')));
  console.log("Rank for ''s':", rankMap.get(apostropheSBytes.toString('base64')));
  console.log("Rank for 'What's':", rankMap.get(whatsBytes.toString('base64')));
  
  // Check all possible substrings of "What's"
  const testString = "What's";
  const testBytes = Buffer.from(testString);
  
  console.log("\nAll possible substrings and their ranks:");
  for (let i = 0; i < testBytes.length; i++) {
    for (let j = i + 1; j <= testBytes.length; j++) {
      const substr = testBytes.subarray(i, j);
      const base64 = substr.toString('base64');
      const rank = rankMap.get(base64);
      if (rank !== undefined) {
        console.log(`Bytes [${i},${j}): "${substr.toString()}" -> rank ${rank}`);
      }
    }
  }
}

debugBpeRanks().catch(console.error);