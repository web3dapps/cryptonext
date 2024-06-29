"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { fetchAssets } from "./lib/api";
import Image from "next/image";

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
        console.error("Error fetching data:", error);
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
            <div className="flex items-center">
              <Image src="/image.png" width={193} height={25} alt="Logo" />
            </div>
            <nav className="hidden md:flex space-x-10 mx-auto">
              <a href="#" className="hover:text-gray-400">
                Exchange
              </a>
              <a href="#" className="hover:text-gray-400">
                Last Transactions
              </a>
              <a href="#" className="hover:text-gray-400">
                Invite Friend
              </a>
              <a href="#" className="hover:text-gray-400">
                Notifications
              </a>
            </nav>
            <div className="flex space-x-4">
              <button className="bg-black text-white border border-white px-4 py-2 rounded">
                LOG IN
              </button>
              <button
                className="bg-purple-500 px-4 py-2 rounded"
                style={{ backgroundColor: "#9945FF" }}
              >
                SIGN UP
              </button>
            </div>
          </div>
        </header>

        <main
          className="bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%", // Use percentage width for responsiveness
            height: "100%", // Adjust height based on your design
            marginLeft: "0", // Remove fixed margin
          }}
        >
          <div className="container mx-auto px-4 py-8 text-white">
            <section className="text-center mb-8 bg-opacity-50 p-8 rounded-lg">
              <h1 className="text-5xl md:text-6xl  mb-4">
                Easy send and Request <br className="md:hidden" />
                <span className="block">Crypto.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl">
                Bring blockchain to the people. Solana supports experiences
              </p>
              <br className="md:hidden" />
              <p className="text-gray-400 text-lg md:text-xl">
                for power users, new consumers, and everyone in between.
              </p>
            </section>

            {!loading && (
              <>
                <section className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8 overflow-x-auto border">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left  font-bolder">
                          <th className="p-2">Assets</th>
                          <th className="p-2">Last Trade</th>
                          <th className="p-2">24H %</th>
                          <th className="p-2">24H Change</th>
                          <th className="p-2">More</th>
                        </tr>
                      </thead>
                      <tbody>
                        {assets.map((asset) => (
                          <tr key={asset.id} >
                            <td className="p-2 flex items-center">
                              <img src='https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400' style={{ width: '24px', height: '24px', marginRight: '8px' }} alt={asset.name} />
                              <span>{asset.name}</span>
                            </td>
                            <td className="p-2">{asset.lastTrade}</td>
                            <td className={`p-2 ${asset.percent24h.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                              {asset.percent24h}
                            </td>
                            <td className={`p-2 ${asset.change24h.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                              {asset.change24h}
                            </td>
                            <td className="p-2">
                              <button className="bg-green-500 px-4 py-2 rounded">Trade</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>


                <section className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8 border">
                  <h2 className="text-xl font-bold mb-4 text-center">Swap Tokens</h2>
                  <div className="flex flex-wrap items-center mb-4 justify-center space-y-4 md:space-y-0">
                    <div className="flex items-center w-full md:w-auto space-x-2 mb-2 md:mb-0">
                      <label htmlFor="fromAmount" className="sr-only">From Amount</label>
                      <input
                        type="text"
                        id="fromAmount"
                        className="bg-gray-700 text-white p-2 rounded-l w-full md:w-24"
                        placeholder="0.00"
                      />
                      <label htmlFor="fromToken" className="sr-only">From Token</label>
                      <select
                        id="fromToken"
                        className="bg-gray-700 text-white p-2 rounded-r w-full md:w-24"
                      >
                        <option>BTC</option>
                        <option>ETH</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                    <span className="px-4">to</span>
                    <div className="flex items-center w-full md:w-auto space-x-2">
                      <label htmlFor="toAmount" className="sr-only">To Amount</label>
                      <input
                        type="text"
                        id="toAmount"
                        className="bg-gray-700 text-white p-2 rounded-l w-full md:w-24"
                        placeholder="0.00"
                      />
                      <label htmlFor="toToken" className="sr-only">To Token</label>
                      <select
                        id="toToken"
                        className="bg-gray-700 text-white p-2 rounded-r w-full md:w-24"
                      >
                        <option>BNB</option>
                        <option>USDT</option>
                        {/* Add more options here */}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="bg-purple-500 px-4 py-2 rounded w-full md:w-auto"
                      style={{ backgroundColor: "#9945FF" }}
                    >
                      SWAP TOKENS
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <a href="#" className="hover:text-gray-400">
                      1 BTC = 32.4039 ETH<br />
                      Free exchange
                    </a>
                    <a href="#" className="hover:text-gray-400 text-right">
                      Updates in 4s
                    </a>
                  </div>
                </section>


              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
