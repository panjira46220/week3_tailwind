import React from "react";

const MarketDiffList = ( ) => {
  
  
  return (
    <div className="">
      <h3 className="text-left text-3xl font-bold ">List</h3>
      <div className=" flex justify-center border-sky-500 rounded relative ">
        <table className=" bg-white   border border-sky-500 rounded relative ">
          <thead>
            <tr className="border-b-2 border-gray">
              <th className="p-4 w-40 ">Token 1</th>
              <th className="p-4 w-40">Token 2</th>
              <th className="p-4 w-40">Binance</th>
              <th className="p-4 w-40">FTX</th>
              <th className="p-4 w-40">Diff</th>
              <th className="p-4 w-40">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="text-center">
              <td className="p-4 ">BTC</td>
              <td className="p-4">USDT</td>
              <td className="p-4">40,000</td>
              <td className="p-4">40,000</td>
              <td className="p-4">-0.049%</td>
              <td className="p-4">
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-4">BTC</td>
              <td className="p-4">USDT</td>
              <td className="p-4">40,000</td>
              <td className="p-4">40,000</td>
              <td className="p-4">-0.049%</td>
              <td className="p-4">
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr> */}
              {/* {data.map((contest, idx) => (
            <tr key={idx} className="text-center">
            <td className="p-4 ">{contest.token1}</td>
            <td className="p-4" >{contest.token2}</td>
            <td className="p-4" >{contest.priceFTX}</td>
            <td className="p-4 ">{contest.priceBinance}</td>
            <td className="p-4" >{contest.diff}%</td>
            <td className="p-4" ><input type="submit" value="Del" onClick={e =>delData(idx)}></input></td>
          </tr>
            ))}  */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketDiffList;