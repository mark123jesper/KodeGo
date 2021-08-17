import React from 'react';

const InventoryList = ({ grandTotal }) => {

    return (
        <div>
            <div className='row'>
                <label className="col-6">Product Information:</label>
            </div>

            <div className='row'>
                <div className='col-6'>Product Name</div>
                <div className='col-6'>Amount</div>
            </div>

            
            {grandTotal.map(item => (    
                <div className='row'>
                    <div className='col-6'>{item.prodName}</div>
                    <div className='col-6'>Php {item.prodAmount}</div>
                </div>
            ))}
        </div> 
    )
}

export default InventoryList;
