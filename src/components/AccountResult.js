import React from 'react'

export default function AccountResult(props) {
  const timestampToDate = (timestamp) => {
    let date = new Date(timestamp*1000);
    let now = new Date();
    let diff = now - date;
    let days = parseInt(diff/1000/60/60/24)
    let hrs = parseInt(diff/1000/60/60-days*24)
    let min = parseInt(diff/1000/60 - hrs*60 - days*60*24)
    let age = days <= 0 ? `${hrs}hrs ${min}mins ago`:`${days}days ${hrs}hrs`
    return age;
  }
  return (
    <div className='border border-1 rounded-xl py-2 px-5 w-128 shadow'>
      <div className='flex justify-end'>
        <button className='text-2xl text-gray-400' onClick={() => props.handleClose('account')}>x</button>
      </div>
      <ul className='list-inside'>
      <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Account</span>
          <span>{props.account}</span>
        </li>
        <li className='flex my-2'>
          <span className='w-40 font-bold text-blue-500'>Balance</span>
          <span>{props.balance} ether</span>
        </li>
        <li className='my-2 mr-3 overflow-auto'>
          <table className='table-auto'>
            <thead>
              <tr className='border-b-2 border-gray-400'>
                <th className='p-1'>Txn Hash</th>
                <th className='p-1'>Block</th>
                <th className='p-1'>Age</th>
                <th className='p-1'>From</th>
                <th className='p-1'>{' '}</th>
                <th className='p-1'>To</th>
                <th className='p-1'>Value</th>
              </tr>
            </thead>
            <tbody>
              {props.transactions.map((el, idx) => {
                return <tr key={idx} className='hover:bg-gray-200'>
                  <td className='text-sm p-1'>{el.hash}</td>
                  <td className='text-sm p-1'>{el.blockNumber}</td>
                  <td className='text-sm p-1'>{timestampToDate(el.timeStamp)}</td>
                  <td className='text-sm p-1'>{el.from}</td>
                  <td className='text-sm p-1'>{el.from === props.account.toLowerCase() ? 'out': 'in'}</td>
                  <td className='text-sm p-1'>{el.to ? el.to : el.contractAddress + ' CREATED CONTRACT'}</td>
                  <td className='text-sm p-1'>{el.value}</td>
                </tr>
              })}
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  )
}
