'use client'
import React, {useEffect, useState} from 'react';
import '@/assets/styles/Header.css'
import Image from "next/image";
import logo from '@/assets/images/img_1.png'
import { motion } from "framer-motion"

import mc1 from '../../public/menu-card-1.jpeg'
import mc2 from '../../public/menu-card-2.jpeg'
import mc3 from '../../public/menu-card-3.jpeg'
import mc4 from '../../public/menu-card-4.jpeg'
import mc5 from '../../public/menu-card-5.jpeg'

import menuBG from '../../public/img_menu.png'

// import logo from '@/assets/images/logo.png'

const Header = ({whenPause, whenPlay}: {whenPause: Function, whenPlay: Function}) => {

    const [open, setOpen] = useState(false);
    const [tour, setTour] = useState(false)

    useEffect(() => {
        window.addEventListener('click', () => {
            setOpen(false)
        });

        return () => {
            window.removeEventListener('click', () => {
                setOpen(false)
            });
        }
    }, []);

    useEffect(() => {
        if(open) {
            if (typeof window !== 'undefined') document.body.style.overflow = 'hidden'
            whenPause()
        }else {
            if (typeof window !== 'undefined') document.body.style.overflow = 'auto'
            setTour(false)
            whenPlay();
        }
    }, [open]);


    return (
        <header className='header __container'>
            <div className="__content">
                <div className="logo">
                    {/*<img src={logo.src} alt="logo"/>*/}
                    <Image src={logo} alt={'logo'} width={120} height={60} priority={true}/>
                </div>
                {open?(
                    <div className='header__close'>
                        <i className="fa-solid fa-x"></i>
                    </div>
                ):(
                    <div className="header__task" onClick={(e)=>{
                        e.stopPropagation()
                        setOpen(prev=>!prev)
                        console.log('test', open)
                    }}>
                        <i className="fa-solid fa-bars"></i>
                        <p>menu</p>
                    </div>
                )}
            </div>
            <div className="menu__background" style={{opacity: open ? '1' : '0'}}>

            </div>
            <div className="menu" onClick={(e)=>e.stopPropagation()} id={open ? 'menu--close':'menu--open'}>
                <div className="menu__bg">
                    <Image src={menuBG.src} alt={'bg'} fill={true} quality={75}/>
                </div>
                <div className="menu__background--left">

                </div>
                <div className="menu__background--right" style={{opacity: tour ? '1' : '0', transition: 'opacity 0.5s'}}>

                </div>
                <div className="__content">
                    <div className="menu__navbar" onWheel={(e)=>e.stopPropagation()}>
                        <div className="menu__link">
                            <div className="link__left"><i className="fa-solid fa-chevron-right"></i></div>
                            <p>Home</p></div>
                        <div className="menu__link">
                            <div className="link__left"><i className="fa-solid fa-chevron-right"></i></div>
                            <p>About Us</p></div>
                        <div className="menu__link" onClick={()=>setTour(prev=>!prev)}>
                            <div className='link__text'>
                                <div className="link__left">
                                    <i className="fa-solid fa-chevron-right" style={{opacity: tour ? '1' : '0'}}></i>
                                </div>
                                <p style={{transform: tour ? 'translateX(40px)' : 'unset'}}>Tours</p>
                            </div>
                            <div className="tour__menu" style={{height: tour ? 'fit-content' : '0', opacity: tour ? '1' : '0'}}>
                                <p className="tour__link" style={{color: 'white'}}>Best Budget</p>
                                <p className="tour__link">Standard</p>
                                <p className="tour__link">Premium</p>
                            </div>
                        </div>
                        <div className="menu__link">
                            <div className="link__left"><i className="fa-solid fa-chevron-right"></i></div>
                            <p>Activity</p></div>
                        <div className="menu__link">
                            <div className="link__left"><i className="fa-solid fa-chevron-right"></i></div>
                            <p>Destination</p></div>
                        <div className="menu__link">
                            <div className="link__left"><i className="fa-solid fa-chevron-right"></i></div>
                            <p>Blog</p></div>
                        <div className="menu__link">
                            <div className="link__left"><i className="fa-solid fa-chevron-right"></i></div>
                            <p>FAQ</p></div>
                        <div className="menu__link">
                            <div className="link__left"><i className="fa-solid fa-chevron-right"></i></div>
                            <p>Contact</p></div>
                    </div>
                    <div className="menu__find" style={{opacity: tour ? '1' : '0', visibility: tour ? 'visible' : 'hidden', transition: 'opacity 0.5s'}}>
                        <p className='menu__find--title'>Find your tour:</p>
                        <div className="menu__card--list">
                            <div className="menu__card--item">
                                <div className="menu__card--bg">
                                    <Image src={mc1.src} alt={'menu-card'} fill={true}  quality={20}/>
                                </div>
                                <div className="menu__card--info">
                                    <div className="menu__card--price">199</div>
                                    <div className="menu__card--text">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</div>
                                    <div className="menu__card--des">
                                        <i className="fa-solid fa-clock"></i>
                                        <p>Intermediate</p>
                                        <p>8 Days / 7 Night</p>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__card--item">
                                <div className="menu__card--bg">
                                    <Image src={mc2.src} alt={'menu-card'} fill={true}  quality={20}/>
                                </div>
                                <div className="menu__card--info">
                                    <div className="menu__card--price">199</div>
                                    <div className="menu__card--text">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</div>
                                    <div className="menu__card--des">
                                        <i className="fa-solid fa-clock"></i>
                                        <p>Intermediate</p>
                                        <p>8 Days / 7 Night</p>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__card--item">
                                <div className="menu__card--bg">
                                    <Image src={mc3.src} alt={'menu-card'} fill={true}  quality={20}/>
                                </div>
                                <div className="menu__card--info">
                                    <div className="menu__card--price">199</div>
                                    <div className="menu__card--text">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</div>
                                    <div className="menu__card--des">
                                        <i className="fa-solid fa-clock"></i>
                                        <p>Intermediate</p>
                                        <p>8 Days / 7 Night</p>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__card--item">
                                <div className="menu__card--bg">
                                    <Image src={mc4.src} alt={'menu-card'} fill={true}  quality={20}/>
                                </div>
                                <div className="menu__card--info">
                                    <div className="menu__card--price">199</div>
                                    <div className="menu__card--text">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</div>
                                    <div className="menu__card--des">
                                        <i className="fa-solid fa-clock"></i>
                                        <p>Intermediate</p>
                                        <p>8 Days / 7 Night</p>
                                    </div>
                                </div>
                            </div>
                            <div className="menu__card--item">
                                <div className="menu__card--bg">
                                    <Image src={mc5.src} alt={'menu-card'} fill={true}  quality={20}/>
                                </div>
                                <div className="menu__card--info">
                                    <div className="menu__card--price">199</div>
                                    <div className="menu__card--text">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</div>
                                    <div className="menu__card--des">
                                        <i className="fa-solid fa-clock"></i>
                                        <p>Intermediate</p>
                                        <p>8 Days / 7 Night</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;