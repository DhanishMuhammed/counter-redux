import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,incrementByAmount,reset} from './Redux/slice/Counterslice'

function Counter() {

        const count=useSelector((state)=>state.counterReducer.count)
        const dispatch = useDispatch()
        const [Amount,setAmount]=useState("");
        console.log(Amount);

        const handleINcrement=()=>{
            if(Amount==""){
                alert("please provide  values")

            }else{
                dispatch(incrementByAmount(Number(Amount)))
                setAmount("")
            }
        }
        

  return (
    <>
        <h1 className='text-center text-danger fw-bolder mt-5'>Counter-Application</h1>
      <div className='container border mt-3 p-3 w-50'>
        <h1 className='fw-bolder text-center mt-5' style={{fontSize:'50px'}}>{count}</h1>
          <div className="d-flex justify-content-evenly align-items-center mt-5">
            <button className='btn btn-success' onClick={()=>dispatch(increment())} >Increment</button>
            <button className='btn btn-danger' onClick={()=>dispatch(reset())} >Reset</button>
            <button className='btn btn-warning' onClick={()=>dispatch(decrement())} >Decrement</button>
          </div>
            <div className="d-flex mt-5">
               <input type="text" className='form-control' onChange={e=>setAmount(e.target.value)} placeholder='enter amount to be incremented' value={Amount|| ""}/>
               <button className='btn btn-primary ms-3' onClick={handleINcrement}>Increment Amount</button>
            </div>
      </div>
      
    </>
  )
}

export default Counter
