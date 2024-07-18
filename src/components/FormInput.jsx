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
                
                    <label>
                        Broker Name   
                        <input {...register("broker",{required:true})}></input>
                    </label> 
                    <label>
                        Broker Account
                        <input {...register("brokerAccount",{required:true})}></input>
                    </label> 
                    <label>
                        Buy
                        <input
                            {...register("txnType")}    
                            type="radio"
                            value="buy"
                        />
                        Sell
                        <input
                            {...register("txnType")}    
                            type="radio"
                            value="sell"
                        />
                        {/* <select {...register("txnType",{required:true})}>
                            <option type="radio" value={"buy"}>Buy</option>
                            <option value={"sell"}>Sell</option>
                        </select>  */}
                    </label>
                    <input type="submit"/>
                    
                
                
                   
                
            </form>
        </>
    )
}

export default FormInput