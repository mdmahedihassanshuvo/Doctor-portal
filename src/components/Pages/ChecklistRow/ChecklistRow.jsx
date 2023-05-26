import React from 'react';

const ChecklistRow = ({ appointment, index }) => {

    const { _id, date, email, clientName, service, phone, time } = appointment

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{clientName}</td>
            <td>{service}</td>
            <td>{time}</td>
        </tr>
    );
};

export default ChecklistRow;