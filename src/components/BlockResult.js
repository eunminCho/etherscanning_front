import React from 'react'

export default function BlockResult(props) {
  const hexToString = (hex) => {
    let str = '';
    for(let n = 0; n < hex.length; n += 2){
      str += String.fromCharCode(parseInt(hex.substr(n,2),16))
    }
    return str;
  }
  const timestampToDate = (timestamp) => {
    let date = new Date(timestamp*1000).toISOString();
    return date;
  }

  return (
    <div className='border border-1 rounded-xl py-2 px-5 shadow'>
      <div className='flex justify-end'>
        <button className='text-2xl text-gray-400' onClick={() => props.handleClose('block')}>x</button>
      </div>
      <ul className='list-inside'>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Block Height</span>
          <span>{props.number}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Timestamp</span>
          <span>{timestampToDate(props.timestamp)}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Miner</span>
          <span>{props.miner}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Gas Used</span>
          <span>{props.gasUsed}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Gas Limit</span>
          <span>{props.gasLimit}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Base Fee Per Gas</span>
          <span>{props.baseFeePerGas}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Difficulty</span>
          <span>{props.difficulty}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Total Difficulty</span>
          <span>{props.totalDifficulty}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Size</span>
          <span>{props.size} bytes</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Extra Data</span>
          <span>{hexToString(props.extraData)}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Transactions</span>
          <ul>
          {props.transactions.map((el, idx) => <li key={idx}>{el}</li>)}
          </ul>
        </li>
      </ul>
    </div>
  )
}
