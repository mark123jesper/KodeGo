import React from 'react';

const SchoolBoard = (props) => {
    return (
        <div style={{border: '1px solid black', padding:'0.5rem', marginTop: '0.9rem'}}>
            <img src={props.image} alt="" style={{maxWidth: '300px'}}/>
            <h1 style={{textAlign: 'center'}}>{props.name}</h1>
            <h4>{props.number}</h4>
            <h4>{props.email}</h4>
            <h4>{props.url}</h4>
        </div>
    )
}

export default SchoolBoard;
