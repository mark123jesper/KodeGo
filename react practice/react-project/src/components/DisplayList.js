import { useState } from 'react';
import React from 'react'

const DisplayList = (props) => {
    const [Teachers] = useState(
        [
            {
                id: 1,
                fName: 'Ciel',
                lName: 'Palacio',
                email: 'example@example.com',
                subject: 'Programming'
            },

            {
                id: 2,
                fName: 'Ciel',
                lName: 'Palacio',
                email: 'example@example.com',
                subject: 'Programming'
            },

            {
                id: 3,
                fName: 'Ciel',
                lName: 'Palacio',
                email: 'example@example.com',
                subject: 'Programming'
            },

            {
                id: 4,
                fName: 'Ciel',
                lName: 'Palacio',
                email: 'example@example.com',
                subject: 'Programming'
            },

            {
                id: 5,
                fName: 'Ciel',
                lName: 'Palacio',
                email: 'example@example.com',
                subject: 'Programming'
            },
        ]
    )
    
    return (
        <div className="container">
            <table className="table table-striped text-center">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                </tr>
                {Teachers.map(teacher => (           
                    <tr>
                        <td>{teacher.fName}</td>
                        <td>{teacher.lName}</td>
                        <td>{teacher.email}</td>
                        <td>{teacher.subject}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
};

export default DisplayList
