'use client'
import React, {useLayoutEffect, useRef} from 'react';
import '@/assets/styles/Pin.css'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import pin1 from '../../public/pin-1.jpeg'
import pin2 from '../../public/pin-2.jpeg'
import pin3 from '../../public/pin-3.jpeg'
import pin4 from '../../public/pin-4.png'
import pin5 from '../../public/pin-5.jpeg'
import Image from "next/image";

const Pin = () => {

    const pinRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: pinRef.current,
                scrub: true,
                // markers: true,
            })
        })

        return () => ctx.revert()

    }, []);

    return (
        <div className='pin __container'>
            <div className="__content" ref={containerRef}>
                <div className="pin__left" ref={pinRef}>
                    <p className='pin__title'>BEST TRIPS FOR YOU</p>
                    <img src="/best-trip.png" alt="best-trip" className='pin__img'/>
                </div>
                <div className="pin__show"><p className='pin__title'>BEST TRIPS FOR YOU</p></div>
                <div className="pin__right">
                    <div className="pin__list">
                        <div className="pin__item">
                            <div className="pin__bg">
                                <Image src={pin1.src} alt={'pin1'} fill={true}/>
                            </div>
                            <div className="pin__item--info">
                                <p className="pin__item--title">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</p>
                                <p className="pin__item--text"><i className="fa-solid fa-house"></i><b>Accomodation: </b><span>Phòng Doom</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-motorcycle"></i><b>Motorbike: </b><span>Xe Wave, Vision</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-user"></i><b>Tour guide</b></p>
                                <p className="pin__item--text"><i className="fa-solid fa-train"></i><b>Transport: </b><span>Xe VIP, có trung chuyển</span></p>
                            </div>
                            <div className="pin__item--price">199</div>
                        </div>
                        <div className="pin__item">
                            <div className="pin__bg">
                                <Image src={pin2.src} alt={'pin2'} fill={true}/>
                            </div>
                            <div className="pin__item--info">
                                <p className="pin__item--title">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</p>
                                <p className="pin__item--text"><i className="fa-solid fa-house"></i><b>Accomodation: </b><span>Phòng Doom</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-motorcycle"></i><b>Motorbike: </b><span>Xe Wave, Vision</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-user"></i><b>Tour guide</b></p>
                                <p className="pin__item--text"><i className="fa-solid fa-train"></i><b>Transport: </b><span>Xe VIP, có trung chuyển</span></p>
                            </div>
                            <div className="pin__item--price">199</div>
                        </div>
                        <div className="pin__item">
                            <div className="pin__bg">
                                <Image src={pin3.src} alt={'pin3'} fill={true}/>
                            </div>
                            <div className="pin__item--info">
                                <p className="pin__item--title">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</p>
                                <p className="pin__item--text"><i className="fa-solid fa-house"></i><b>Accomodation: </b><span>Phòng Doom</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-motorcycle"></i><b>Motorbike: </b><span>Xe Wave, Vision</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-user"></i><b>Tour guide</b></p>
                                <p className="pin__item--text"><i className="fa-solid fa-train"></i><b>Transport: </b><span>Xe VIP, có trung chuyển</span></p>
                            </div>
                            <div className="pin__item--price">199</div>
                        </div>
                        <div className="pin__item">
                            <div className="pin__bg">
                                <Image src={pin4.src} alt={'pin4'} fill={true}/>
                            </div>
                            <div className="pin__item--info">
                                <p className="pin__item--title">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</p>
                                <p className="pin__item--text"><i className="fa-solid fa-house"></i><b>Accomodation: </b><span>Phòng Doom</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-motorcycle"></i><b>Motorbike: </b><span>Xe Wave, Vision</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-user"></i><b>Tour guide</b></p>
                                <p className="pin__item--text"><i className="fa-solid fa-train"></i><b>Transport: </b><span>Xe VIP, có trung chuyển</span></p>
                            </div>
                            <div className="pin__item--price">199</div>
                        </div>
                        <div className="pin__item">
                            <div className="pin__bg">
                                <Image src={pin5.src} alt={'pin5'} fill={true}/>
                            </div>
                            <div className="pin__item--info">
                                <p className="pin__item--title">Ha Giang Loop tour: Itinerary in 4 Days 5 Nights</p>
                                <p className="pin__item--text"><i className="fa-solid fa-house"></i><b>Accomodation: </b><span>Phòng Doom</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-motorcycle"></i><b>Motorbike: </b><span>Xe Wave, Vision</span></p>
                                <p className="pin__item--text"><i className="fa-solid fa-user"></i><b>Tour guide</b></p>
                                <p className="pin__item--text"><i className="fa-solid fa-train"></i><b>Transport: </b><span>Xe VIP, có trung chuyển</span></p>
                            </div>
                            <div className="pin__item--price">199</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pin;