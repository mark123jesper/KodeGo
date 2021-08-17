import React, { useState , useEffect } from 'react';
import Inventory from './Inventory';
import InventoryList from './InventoryList';

const retrieveData = localStorage.getItem('Product Name') ? JSON.parse(localStorage.getItem('Product Name')) : null;

const InventoryTrack = () => {

    const [prodName, setProdName] = useState('');
    const [prodAmount, setProdAmount] = useState('');
    const [grandTotal, setGrandTotal] = useState(retrieveData);

    const nameHandler = (event) => {
        setProdName(event.target.value);
    }

    const amountHandler = (event) => {
        setProdAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (prodName !== '' && prodAmount !== '') {

            const product = {prodName, prodAmount};
            setGrandTotal([...grandTotal, product]);
            setProdName('');
            setProdAmount('');

        } else {

            alert('Invalid Input. Please Try Again.');

        }

    }

    const deleteHandler = () => {
            setGrandTotal([]);
            setProdName('');
            setProdAmount('');
    }  

    useEffect(() => {
        
        localStorage.setItem('Product Name', JSON.stringify(grandTotal));
    
    }, [grandTotal])

    return (
        <div>
            <Inventory
                prodName={prodName}
                prodAmount={prodAmount}
                nameHandler={nameHandler}
                amountHandler={amountHandler}
                submitHandler={submitHandler}
                deleteHandler={deleteHandler} />

            <InventoryList grandTotal={grandTotal} />
        </div>
    )
};

export default InventoryTrack;
