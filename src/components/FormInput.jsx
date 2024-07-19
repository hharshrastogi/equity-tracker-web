import React from "react";
import { useForm } from "react-hook-form";
import NavBar from "./NavBar";
import './homepage.css'
function FormInput(){

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <>
            <NavBar/>
            <form className="form-body"onSubmit={handleSubmit(onSubmit)} style={{"display": "flex", "flex-direction": "column"}}>
                
                    <label className="cmn-margin">
                        Broker Name:   
                        <input {...register("broker",{required:true})}></input>
                    </label> 
                    <label className="cmn-margin">
                        Broker Account:
                        <input {...register("brokerAccount",{required:true})}></input>
                    </label> 
                    <label className="cmn-margin">
                        Buy:
                        <input
                            className="cmn-margin"
                            {...register("txnType")}    
                            type="radio"
                            value="buy"
                        />
                        Sell:
                        <input
                            className="cmn-margin"
                            {...register("txnType")}    
                            type="radio"
                            value="sell"
                        />
                    </label>
                    <label className="cmn-margin">
                        Equity Name:  
                        <input {...register("equityName",{required:true})} />
                    </label>
                    <label className="cmn-margin">
                        Date:
                        <input
                            {...register("txnDate",{require:true})}
                            type="date"
                        />
                    </label>
                    <label className="cmn-margin">
                        Quantity:
                        <input
                        {...register("quantity",{require:true})}
                            type="number"
                            min="0"
                        />
                    </label>
                    <label className="cmn-margin">
                        Price:
                        <input {...register("pricePerShare",{required:true})} />
                    </label>
                    <label className="cmn-margin">
                        Target Percentage:
                        <input
                            {...register("targetPercentage",{required:true})}

                        />
                    </label>
                    <input className="submit-btn" type="submit"/>
                    
                
                
                   
                
            </form>
        </>
    )
}

export default FormInput