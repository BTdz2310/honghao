'use client'
import Image from "next/image";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Pin from "@/components/Pin";
import React, {useEffect, useState} from "react";
import Header from "@/components/Header";
import gsap from "gsap";
// import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {

    const [show, setShow] = useState(false)

    // useEffect( () => {
    //     (
    //         async () => {
    //             const LocomotiveScroll = (await import('locomotive-scroll')).default
    //             const locomotiveScroll = new LocomotiveScroll();
    //             locomotiveScroll.stop();
    //         }
    //     )()
    // }, [])

    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // });

    const whenPause = () => gsap.globalTimeline.pause();

    const whenPlay = () => gsap.globalTimeline.play();

    return (
        <>
            <div>
                <Header whenPause={whenPause} whenPlay={whenPlay} />
                <Hero />
            </div>
            <Description />
            <Pin />
        </>
    );

}