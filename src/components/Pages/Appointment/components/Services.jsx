import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tabs from '../../../reuseable/Tabs';
import tabsData from '../../../../utilitis/tabsData'

const Services = () => {

    const [showData, setShowData] = useState(false);

    return (
        <div className='lg:mb-24'>
            <div className='text-center space-y-2 lg:mb-14'>
                <p className='text-xl font-medium text-[#19D3AE]'>Available Services on April 30, 2022</p>
                <p className='text-[#939393]'>Please select a service.</p>
            </div>
            <div>
                <Tabs
                tabsData={tabsData}
                ></Tabs>
            </div>
            
        </div>
    );
};

export default Services;