import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [broker, setBroker] = useState("");
  const [brokerAccount, setBrokerAccount] = useState("");
  const [txnType, setTxnType] = useState("");
  const [equityName, setEquityName] = useState("");
  const [txnDate, setTxnDate] = useState("");
  const [qunatity, setQunatity] = useState("");
  const [pricePerShare, setPricePerShare] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [targetPercentage, setTargetPercentage] = useState("");
  const [targetAmount, setTargetAmount] = useState("");

  return (
    <>
      <form style={{"display": "flex", "flex-direction": "column"}}>
      <label>Enter your Broker:
        <input type="text" 
          value={broker}
          onChange={(e) => setBroker(e.target.value)}
        />
      </label>
      <label>Enter your Broker Account:
        <input type="text"
          value={brokerAccount}
          onChange={(e) => setBrokerAccount(e.target.value)}
        />
      </label>
      <div>
        BUY:<input type="radio" name="txn_type" 
              value="buy"
              onChange={(e) => setTxnType(e.target.value)}
            />
        SELL:<input type="radio" name="txn_type" 
              value="sell"
              onChange={(e) => setTxnType(e.target.value)}
            />
      </div>
      
      <label>Enter equity name:
        <input type="text" 
          value={equityName}
          onChange={(e) => setEquityName(e.target.value)}
        />
      </label>
      <label>Enter Transaction Date:
        <input type="date" 
          value={txnDate}
          onChange={(e) => setTxnDate(e.target.value)}
        />
      </label>
      <label>Enter Quantity:
        <input type="text" 
          value={qunatity}
          onChange={(e) => {setQunatity(e.target.value)}}
        />
      </label>
      <label>Enter price per share:
        <input type="text"
          value={pricePerShare}
          onChange={(e) => setPricePerShare(e.target.value)}
        />
      </label>
      <label>Enter Total Price:
        <input type="text" 
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
        />
      </label>
      <label>Enter Target Percentage:
        <input type="text" defaultValue={6}
          value={targetPercentage}
          onChange={(e) => setTargetPercentage(e.target.value)}
        />
      </label>
      <label>Enter Target Amount:
        <input type="text"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
        />
      </label>
      </form>
      <button onClick={()=>processTxnData()}>SUBMIT</button>
    </>
  )

  async function processTxnData() {
    var formData = {
          "broker": broker,
          "broker_account": brokerAccount,
          "transaction_type": txnType,
          "equity_name": equityName,
          "transaction_date": txnDate+"T13:30:00.000Z",
          "quantity": parseInt(qunatity),
          "price_per_unit": pricePerShare,
          "total_price": totalPrice,
          "target_percentage": targetPercentage,
          "target_amount": targetAmount
    }
    
    var res = await axios.post("http://localhost:3000/transaction", formData)
    console.log(res.data)
    console.log(res.status)
  }
}



export default App
