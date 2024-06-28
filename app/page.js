"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { fetchAssets } from './lib/api';
import Image from 'next/image';
export default function Page() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAssets();
        setAssets(data.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <div className="min-h-screen bg-purple-500 text-white">
        <header className="bg-gray-900 py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
          <Image src="/image.png" width={193} height={25} />
            <nav className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">Exchange</a>
              <a href="#" className="hover:text-gray-400">Last Transactions</a>
              <a href="#" className="hover:text-gray-400">Invite Friend</a>
              <a href="#" className="hover:text-gray-400">Notifications</a>
              <button className="bg-blue-500 px-4 py-2 rounded">LOG IN</button>
              <button className="bg-purple-500 px-4 py-2 rounded" style={{ backgroundColor: '#9945FF' }}>SIGN UP</button>
            </nav>
          </div>
        </header>
        <main className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "1600px",  // Adjust width based on your design
            height: "839px",  // Adjust height based on your design
            marginLeft: "-80px"  // Adjust left margin based on your design
          }}
        >
          <div className="container mx-auto px-4 py-8 text-white">
            <section className="text-center mb-8  bg-opacity-50 p-8 rounded-lg">
              <h1 className="text-4xl font-bold mb-4">
                Easy send and Request <br className="md:hidden" />
                <span className="block">Crypto.</span>
              </h1>
              <p className="text-gray-400">Bring blockchain to the people. Solana supports experiences</p> <br className="md:hidden"  /> 
              <p className="text-gray-400">for power users, new consumers, and everyone in between.</p>
            </section>
            {!loading && (
              <>
                <section className="bg-gray-800 p-6 rounded-lg mb-8">
                  <h2 className="text-xl font-bold mb-4">Assets</h2>
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-400">
                        <th className="p-2">Assets</th>
                        <th className="p-2">Last Trade</th>
                        <th className="p-2">24H %</th>
                        <th className="p-2">24H Change</th>
                        <th className="p-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {assets.map((asset) => (
                        <tr key={asset.id} className="border-t border-gray-700">
                          <td className="p-2">{asset.name}</td>
                          <td className="p-2">{asset.lastTrade}</td>
                          <td className={`p-2 ${asset.percent24h.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{asset.percent24h}</td>
                          <td className={`p-2 ${asset.change24h.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{asset.change24h}</td>
                          <td className="p-2"><button className="bg-green-500 px-4 py-2 rounded">Trade</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
                <section className="bg-gray-800 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">Swap Tokens</h2>
                  <div className="flex items-center mb-4">
                    <input type="text" className="bg-gray-700 text-white p-2 rounded-l w-full" placeholder="0.00" />
                    <select className="bg-gray-700 text-white p-2 rounded-r">
                      <option>BTC</option>
                      <option>ETH</option>
                      {/* Add more options here */}
                    </select>
                    <span className="px-4">to</span>
                    <input type="text" className="bg-gray-700 text-white p-2 rounded-l w-full" placeholder="0.00" />
                    <select className="bg-gray-700 text-white p-2 rounded-r">
                      <option>BNB</option>
                      <option>USDT</option>
                      {/* Add more options here */}
                    </select>
                  </div>
                  <button className="bg-purple-500 px-4 py-2 rounded w-full" style={{ backgroundColor: '#9945FF' }}>SWAP TOKENS</button>
                </section>
              </>
            )}
          </div>
        </main>
        <footer className="bg-gray-900 py-4 text-center">
          <p className="text-gray-400">1 BTC = 32.4039 ETH | Free exchange | Updates in 4s</p>
        </footer>
      </div>
    </>
  );
}
