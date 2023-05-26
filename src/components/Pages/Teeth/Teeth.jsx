import React, { useEffect, useState } from 'react';
import ItemCard from '../../AllCards/itemCard';

const Teeth = () => {

    const [data, setData] = useState([])

    //for handleModal
    const [serviceData, setServiceData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleModal = (id) => {
        const matchData = data.find(item => item._id === id)
        setServiceData(matchData)
        console.log(matchData)
    }

    return (
        <div className='grid grid-cols-2 gap-2 lg:gap-5 md:grid-cols-3 lg:mx-12'>
            {
                data.map(item => <ItemCard
                    key={item._id}
                    item={item}
                    handleModal={handleModal}
                    serviceData={serviceData}
                ></ItemCard>)
            }
        </div>
    );
};

export default Teeth;