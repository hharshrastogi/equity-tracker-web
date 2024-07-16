import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react'

function FormData(){
    const [broker, setBroker] = useState("");
    const [brokerAccount, setBrokerAccount] = useState("");
    const [txnType, setTxnType] = useState("");
    const [equityName, setEquityName] = useState("");
    const [txnDate, setTxnDate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [pricePerShare, setPricePerShare] = useState("");
    // const [totalPrice, setTotalPrice] = useState("");
    const [targetPercentage, setTargetPercentage] = useState("");
    // const [targetAmount, setTargetAmount] = useState("");
        return(
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
          value={quantity}
          onChange={(e) => {setQuantity(e.target.value)}}
        />
      </label>
      <label>Enter price per share:
        <input type="text"
          value={pricePerShare}
          onChange={(e) => setPricePerShare(e.target.value)}
        />
      </label>

      <label>Enter Target Percentage:
        <input type="text" defaultValue={6}
          value={targetPercentage}
          onChange={(e) => setTargetPercentage(e.target.value)}
        />
      </label>
      
      </form>
      <button onClick={()=>processTxnData(quantity,pricePerShare,targetPercentage)}>SUBMIT</button>
            </>

    )
    async function processTxnData(quantity,pricePerShare,targetPercentage) {
        var formData = {
              "broker": broker,
              "broker_account": brokerAccount,
              "transaction_type": txnType,
              "equity_name": equityName,
              "transaction_date": txnDate+"T13:30:00.000Z",
              "quantity": parseInt(quantity),
              "price_per_unit": pricePerShare,
              "total_price": parseInt(quantity) * parseFloat(pricePerShare),
              "target_percentage": targetPercentage,
              "target_amount": parseInt(quantity) * (parseFloat(pricePerShare)* ((parseInt(targetPercentage) / 100) + 1))
        }
        
        var res = await axios.post("http://localhost:3000/transaction", formData) 
      }
}


export default FormData