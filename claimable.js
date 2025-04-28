const axios = require('axios');

const wallet = '0x07e67a80295F43251c956fe82fe3317a5c6E8266';

async function claimSepoliaETH() {
  try {
    const res = await axios.post('https://faucet-sepolia.alchemy.com/request-sepolia-eth', {
      address: wallet
    });
    console.log("✅ Faucet claim successful:", res.data);
  } catch (err) {
    console.error("❌ Faucet claim failed:", err.response?.data || err.message);
  }
}

claimSepoliaETH();