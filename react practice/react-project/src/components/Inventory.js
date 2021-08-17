import React from 'react'

const Inventory = ({prodName, prodAmount, nameHandler, amountHandler, submitHandler, deleteHandler}) => {
    
    
    
    return (
        <div className="row">
            <form  >
                <div className='row col-6 mt-2'>
                    <label className='form-label'>Product Name</label>
                    <input onChange={nameHandler} type="text" value={prodName} placeholder='Name'/>
                </div>

                <div className='row col-6 mt-2'>
                    <label className='form-label'>Amount</label>
                    <input onChange={amountHandler} type="text" value={prodAmount} placeholder='0.00'/>
                </div>

                <div className='row col-2 my-2'>
                    <input type="submit" value='Add Product'onClick={submitHandler}/>
                    <input type="submit" value='Checkout' onClick={deleteHandler} />
                </div>
            </form>
        </div>
    )
}

export default Inventory;