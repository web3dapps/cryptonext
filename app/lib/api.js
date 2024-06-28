
export async function fetchAssets() {
    const apiKey = 'CG-HbqnLuQQAhgyX9MgxedP8UX1'; // Make sure to replace this with your actual API key
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`, {
      headers: {
        'Accepts': 'application/json',
        'X-Requested-With': 'CoinGecko'
      }
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch cryptocurrency data');
    }

    
    const data = await response.json();
    console.log(data);

    return data.map(coin => ({
      id: coin.id,
      name: coin.name,
      lastTrade: `${coin.current_price.toFixed(2)}`,
      percent24h: `${coin.price_change_percentage_24h.toFixed(2)}%`, // Updated line
      change24h: `${coin.price_change_24h.toFixed(2)}` // Updated line
    }));
  }