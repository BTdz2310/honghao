import React from 'react';
import '@/assets/styles/Description.css'
import Image from "next/image";
import Mountain from "@/components/Mountain";
import Journey from "@/components/Journey";

const Description = () => {
    return (
        <div className='description __container'>

            <Mountain />
            <Journey />
        </div>
    );
};

export default Description;