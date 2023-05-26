import React, { useEffect, useState } from 'react';
import ItemCard from '../../AllCards/itemCard';

const Oral = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='grid grid-cols-2 gap-2 lg:gap-5 md:grid-cols-3 lg:mx-12'>
            {
                data.map(item => <ItemCard
                    key={item._id}
                    item={item}
                ></ItemCard>)
            }
        </div>
    );
};

export default Oral;