// Test to check if token exists in gpt-tokenizer BPE data
async function testTokenExists() {
  const { encode, decode } = await import("./esm/encoding/o200k_base.js");
  
  // Try to decode token 45350 directly 
  try {
    const decoded = decode([45350]);
    console.log("Token 45350 exists in gpt-tokenizer, decodes to:", decoded);
  } catch (e) {
    console.log("Token 45350 does not exist in gpt-tokenizer:", e.message);
  }
  
  // Also try tokens 4827, 885
  try {
    const decoded4827 = decode([4827]);
    console.log("Token 4827 decodes to:", decoded4827);
    const decoded885 = decode([885]);
    console.log("Token 885 decodes to:", decoded885);
  } catch (e) {
    console.log("Error decoding tokens:", e.message);
  }
}

testTokenExists().catch(console.error);