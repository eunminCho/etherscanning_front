import React from 'react'

export default function TransactionResult(props) {

  return (
    <div className='border border-1 rounded-xl py-2 px-5 shadow w-full'>
      <div className='flex justify-end'>
        <button className='text-2xl text-gray-400' onClick={() => props.handleClose('transaction')}>x</button>
      </div>
      <ul className='list-inside'>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Transaction Hash</span>
          <span>{props.hash}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Status</span>
          <span>{props.status? "true": "false"}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Block</span>
          <span>{props.blockNumber}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>From</span>
          <span>{props.from}</span>
        </li>
        {
        props.to === null ? 
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Contract Address</span>
          <span>{props.contractAddress} [Created]</span>
        </li>
        : 
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>To</span>
          <span>{props.to}</span>
        </li>
        }
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Value</span>
          <span>{props.value} ether</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Gas Price</span>
          <span>{props.gasPrice} ether</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Type</span>
          <span>{props.type}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Nonce</span>
          <span>{props.nonce}</span>
        </li>
      </ul>
    </div>
  )
}
