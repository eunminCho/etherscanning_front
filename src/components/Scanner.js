import React, { useState } from 'react'
import BlockResult from './BlockResult'
import TransactionResult from './TransactionResult'
import axios from 'axios'
import AccountResult from './AccountResult'

export default function Scanner({handleLoading}) {
  const [inputs, setInputs] = useState({
    account: '',
    block: '',
    transaction: ''
  })
  const [result, setResult] = useState({
    account: '',
    block: '',
    transaction: ''
  })

  const handleInputs = (e) => {
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleClose = (name) => {
    setResult({
      ...result,
      [name]: ''
    })
  }

  const accountClick = () => {
    if(inputs.account.slice(0,2) !== '0x' || inputs.account.length !== 42) {
      alert("올바른 형식의 주소값을 입력해주세요(0x..이 아니거나 계정 주소가 아닙니다.)");
      return;
    }
    handleLoading(true);
    axios({
      method: 'get',
      url: `http://localhost:8080/getAccountInfo/${inputs.account}`,
    })
      .then((res) => {
        setResult({
          ...result, account: res.data
        })
        handleLoading(false);
      })
      .catch((e) => {
        console.log(e)
        alert("계정을 찾을 수 없습니다.")
        handleLoading(false)
      })
  }

  const blockClick = () => {
    handleLoading(true);
    axios({
      method: 'get',
      url: `http://localhost:8080/getblock/${inputs.block}`,
    })
      .then((res) => {
        setResult({
          ...result, block: res.data
        })
        handleLoading(false);
      })
      .catch((e) => {
        alert("블록을 찾을 수 없습니다.")
        handleLoading(false)
      })
  }

  const transactionClick = () => {
    if(inputs.transaction.slice(0,2) !== '0x' || inputs.transaction.length !== 66) {
      alert("올바른 형식의 주소값을 입력해주세요(0x..이 아니거나 트랜잭션 해시 주소가 아닙니다)");
      return;
    }
    handleLoading(true);
    axios({
      method: 'get',
      url: `http://localhost:8080/getTransaction/${inputs.transaction}`
    })
      .then((res) => {
        setResult({
          ...result, transaction: res.data
        })
        handleLoading(false);
      })
      .catch((e) => {
        alert("트랜잭션을 찾을 수 없습니다.")
        handleLoading(false)
      })
  }

  return (
    <div className='mb-10 mt-5 flex flex-col items-center '>
      <div className='my-4'>
        <h4 className='text-xl font-bold mb-1'>Account</h4>
        <input 
          type="text" 
          placeholder="address tx 0x..." 
          className='rounded border shadow border-gray-300 w-96 h-10 mr-3 pl-2'
          name="account" 
          value={inputs.account}
          onChange={handleInputs}
          />
        <button className='text-white font-bold bg-blue-700 px-4 py-2 rounded-lg' onClick={(e) => accountClick(e)}>Scan</button>
      </div>
      {result.account ? <AccountResult 
        account={result.account.account}
        balance= {result.account.balance}
        transactions = {result.account.transactions}
        handleClose = {handleClose}
      /> : ''}
      <div className='my-4'>
        <h4 className='text-xl font-bold mb-1'>Block</h4>
        <input 
          type="text" 
          placeholder="address tx 0x... or block num..." 
          className='rounded border shadow border-gray-300 w-96 h-10 mr-3 pl-2'
          onChange={handleInputs}
          name="block" 
          value={inputs.block}  
        />
        <button className='text-white font-bold bg-blue-700 px-4 py-2 rounded-lg' onClick={(e) => blockClick(e)}>Scan</button>
      </div>
      {result.block ? <BlockResult 
        number={result.block.number}
        timestamp={result.block.timestamp}
        transactions={result.block.transactions}
        miner={result.block.miner}
        gasUsed={result.block.gasUsed}
        gasLimit={result.block.gasLimit}
        baseFeePerGas={result.block.baseFeePerGas}
        difficulty={result.block.difficulty}
        totalDifficulty={result.block.totalDifficulty}
        extraData={result.block.extraData}
        size={result.block.size}
        handleClose={handleClose}
        /> : ''}
      <div className='my-4'>
        <h4 className='text-xl font-bold mb-1'>Transaction</h4>
        <input 
          type="text" 
          placeholder="address tx 0x..." 
          className='rounded border shadow border-gray-300 w-96 h-10 mr-3 pl-2' 
          name="transaction" 
          value={inputs.transaction}
          onChange={handleInputs}
        />
        <button className='text-white font-bold bg-blue-700 px-4 py-2 rounded-lg' onClick={(e) => transactionClick(e)}>Scan</button>
      </div>
      {result.transaction ? <TransactionResult 
        hash={result.transaction.hash}
        blockNumber={result.transaction.blockNumber}
        from={result.transaction.from}
        to={result.transaction.to}
        contractAddress={result.transaction.contractAddress}
        status={result.transaction.status}
        value={result.transaction.value}
        gasPrice={result.transaction.gasPrice}
        input={result.transaction.input}
        type={result.transaction.type}
        nonce={result.transaction.nonce}
        handleClose={handleClose}
        /> : ''}


    </div>
  )
}
