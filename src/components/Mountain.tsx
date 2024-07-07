import React from 'react';
import '@/assets/styles/Mountain.css'

const Mountain = () => {
    return (
        <div className='mountain __container'>
            <img src='/mountain.png' alt={'mt'} style={{width: '100vw', height: 'auto', objectFit: 'cover', position: 'absolute', left: '0', top: '-20px'}}/>
            <div className="mountain__info">
                <img src="/h-img.png" alt="h" style={{width: '120px', height: 'auto'}}/>
                <p className='mountain__text'>Hong Hao Travel is a travel company in Ha Giang, we specialize in organizing unforgettable tours to explore Ha Giang loop but still focus on the pristine nature of nature.</p>
                <div className="mountain__circle--list">
                    <div className="mountain__circle--item">
                        <div className="mountain__circle--rotate"></div>
                    </div>
                    <div className="mountain__circle--item">
                        <div className="mountain__circle--rotate"></div>
                        <div className="mountain__circle--show">
                            <p className='mountain__circle--text1'>personalization</p>
                            <p className='mountain__circle--text2'>personalization</p>
                        </div>
                    </div>
                    <div className="mountain__circle--item">
                        <div className="mountain__circle--rotate"></div>
                        <div className="mountain__circle--show mountain__circle--show-2line">
                            <p className='mountain__circle--text1'><span>Tour guide</span><span>with good English</span></p>
                            <p className='mountain__circle--text2'><span>Tour guide</span><span>with good English</span></p>
                        </div>
                    </div>
                    <div className="mountain__circle--item">
                        <div className="mountain__circle--rotate"></div>
                    </div>
                    <div className="mountain__circle--item">
                        <div className="mountain__circle--rotate"></div>
                        <div className="mountain__circle--show mountain__circle--show-2line">
                            <p className='mountain__circle--text1'><span>Unique</span><span>Experiences</span></p>
                            <p className='mountain__circle--text2'><span>Unique</span><span>Experiences</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="/vector-bg-mountain.png" alt="vector" className='mountain__vector'/>
        </div>
    );
};

export default Mountain;