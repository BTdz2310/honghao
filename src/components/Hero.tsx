'use client'
import React, {useLayoutEffect, useRef} from 'react';
import '@/assets/styles/Hero.css'
// import underBG from '@/assets/images/map-best-trip.png'
import underBG from '@/assets/images/hero-bg-under.png'
import hero1 from '@/assets/images/hero-1.png'
import hero2 from '@/assets/images/hero-2.png'
import title from '@/assets/images/hero-text.png'
import Header from "@/components/Header";
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//1. https://res.cloudinary.com/dmcrzul2v/image/upload/v1720178031/kxp2np5yforlo7ufoo6k.png
//2. https://res.cloudinary.com/dmcrzul2v/image/upload/v1720178128/rcr66uby2avtqpfre9dj.png
//3. https://res.cloudinary.com/dmcrzul2v/image/upload/v1720178498/g26vdezo2fnvfs8gobvv.png

const Hero = () => {

    const imgVectorRef = useRef(null);
    const circle1Ref = useRef(null);
    const circle2Ref = useRef(null);
    const circle3Ref = useRef(null);
    const zoomRef = useRef(null);
    const comingUpRef = useRef(null);
    const titleRef = useRef(null);
    const mapRef = useRef(null)
    const markRef = useRef(null);
    const stDelRef = useRef(null);
    const ndDelRef = useRef(null);
    const rdDelRef = useRef(null);
    const fthDelRef = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(()=> {

        //1

        gsap.timeline().to(imgVectorRef.current, {
            delay: 0.5,
            attr: {
                src: 'https://res.cloudinary.com/dmcrzul2v/image/upload/v1720178128/rcr66uby2avtqpfre9dj.png'
            },
            // opacity: 0
        }).to(imgVectorRef.current, {
            delay: 1.5,
            opacity: 0,
            duration: 3,
            ease: 'easeInOutQuad'
        })

        //2

        gsap.timeline().to(circle1Ref.current, {
            delay: 2.5,
            x: -200,
            duration: 3,
            ease: 'easeInOutQuad'
        }).to(circle1Ref.current, {
            // delay: 3,
            x: -400,
            duration: 2.5,
            ease: 'easeInQuad'
        })

        gsap.timeline().to(circle2Ref.current, {
            delay: 2.5,
            x: 200,
            duration: 3,
            ease: 'easeInOutQuad'
        }).to(circle2Ref.current, {
            // delay: 3,
            x: 400,
            duration: 2.5,
            ease: 'easeInQuad'
        })

        gsap.timeline().to(circle3Ref.current, {
            delay: 2.5,
            y: -80,
            duration: 3,
            ease: 'easeInOutQuad'
        }).to(circle3Ref.current, {
            // delay: 3,
            y: -400,
            duration: 2.5,
            ease: 'easeInQuad'
        })

        //3 5.5

        gsap.to(zoomRef.current, {
            delay: 5.5,
            scale: 11,
            duration: 2.5,
            ease: 'easeInQuad'
        })

        gsap.timeline().to(comingUpRef.current, {
            delay: 5.5,
            width: '924px',
            height: '451px',
            // width: '70%',
            duration: 2.5,
            ease: 'easeInQuad',
            marginTop: '0'
        }).to(comingUpRef.current, {
            width: '100vw',
            height: '100vh',
            duration: 1,
            borderRadius: '0'
            // ease: 'easeInQuad',
        })
        //     .to(comingUpRef.current, {
        //     // delay: 1,
        //     // duration: 1,
        //     attr: {
        //         src: 'https://res.cloudinary.com/dmcrzul2v/image/upload/v1720190075/wzfcvn01lu2ybaef9cmj.png'
        //     },
        //     // transition: 'opacity 1s',
        //     // backgroundImage: 'url("/road.png")'
        // })

        gsap.to(titleRef.current, {
            delay: 5.5,
            duration: 2.5,
            ease: 'easeInQuad',
            y: window.innerHeight*(-0.5) - 800
        })

        gsap.to(mapRef.current, {
            delay: 8,
            duration: 1.5,
            ease: 'easeInQuad',
            x: 0
        })

        const markTL = gsap.timeline().to(markRef.current, {
            delay: 10,
            duration: 1,
            ease: 'easeInQuad',
            opacity: '1',
            top: '70px'
        }).to(markRef.current, {
            delay: 1,
            duration: 1,
            ease: 'easeInQuad',
            top: '80px',
            right: '50px'
        }).to(markRef.current, {
            delay: 1,
            duration: 1,
            ease: 'easeInQuad',
            top: '130px',
            right: '60px'
        }).to(markRef.current, {
            delay: 1,
            duration: 1,
            ease: 'easeInQuad',
            top: '70px'
        })

        gsap.to(stDelRef.current, {
            delay: 10,
            duration: 1,
            ease: 'easeInQuad',
            opacity: '0',
        })

        gsap.to(ndDelRef.current, {
            delay: 12,
            duration: 1,
            ease: 'easeInQuad',
            opacity: '0',
        })

        gsap.to(rdDelRef.current, {
            delay: 14,
            duration: 1,
            ease: 'easeInQuad',
            opacity: '0',
        })

        gsap.to(fthDelRef.current, {
            delay: 16,
            duration: 1,
            ease: 'easeInQuad',
            opacity: '0',
        })

        })
        //
        return () => ctx.revert();

    }, [])



    return (
        <div className='hero __container' style={{backgroundImage: `url(${underBG.src})`}}>
            {/*<Header whenPause={whenPause} whenPlay={whenPlay}/>*/}
            {/*<Image ref={imgVectorRef} src={hero1.src} alt={'img'} className='img__middle' width={420} height={380}/>*/}

            <img ref={imgVectorRef}
                 src='https://res.cloudinary.com/dmcrzul2v/image/upload/v1720178031/kxp2np5yforlo7ufoo6k.png'
                 // src={hero1.src}
                 alt="img" className='img__middle' style={{width: '420px', height: 'auto', zIndex: '10'}}/>
            <img ref={zoomRef}
                loading={"lazy"}
                 src='https://res.cloudinary.com/dmcrzul2v/image/upload/v1720178498/g26vdezo2fnvfs8gobvv.png'
                 // src={hero1.src}
                 alt="img" className='img__middle' style={{width: '420px', height: 'auto', zIndex: '5'}}/>
            {/*<div className="hero__fixed">*/}
            {/*</div>*/}
            {/*<img*/}
            {/*     src='https://res.cloudinary.com/dmcrzul2v/image/upload/v1720190075/wzfcvn01lu2ybaef9cmj.png'*/}
            {/*    // src={hero1.src}*/}
            {/*     alt="img" loading={'eager'} style={{visibility: 'hidden'}}/>*/}
            {/*<div className="hero__background"></div>*/}
            <div className="img__middle">
                <div className="hero__circle-1 hero__circle" ref={circle1Ref}></div>
                <div className="hero__circle-2 hero__circle" ref={circle2Ref}></div>
                <div className="hero__circle-3 hero__circle" ref={circle3Ref}></div>
                <Image ref={titleRef} src={title.src} alt={'img'} className='' width={680} height={380}/>
            </div>
            <div className="hero__book-now">
                <div className="book-now__group">
                    <div className="book-now__title">
                        <p>Days</p>
                    </div>
                    <div className="book-now__option">
                        <p>5 days 4 nights</p>
                        <div>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div className="book-now__group">
                    <div className="book-now__title">
                        <p>type of tour</p>
                    </div>
                    <div className="book-now__option">
                        <p>best budget</p>
                        <div>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div className="book-now__group">
                    <div className="book-now__title">
                        <p>self driving</p>
                    </div>
                    <div className="book-now__option">
                        <p><i className="fa-solid fa-user" style={{paddingRight: '5px'}}></i>5 pax</p>
                        <div>
                            <i className="fa-solid fa-chevron-up"></i>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div className="book-now__group">
                    <div className="book-now__title">
                        <p>private driving</p>
                    </div>
                    <div className="book-now__option">
                        <p><i className="fa-solid fa-user" style={{paddingRight: '5px'}}></i>5 pax</p>
                        <div>
                            <i className="fa-solid fa-chevron-up"></i>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
                <div className="book-now__group">
                    <button className="book-now__button">
                        <p className='book-now__price'>299</p>
                        <p className='book-now__now'>book now</p>
                    </button>
                </div>
            </div>
            <div className="__map" ref={mapRef}>
                <img src="/img.png" alt="map" className='img__map'/>
                <img ref={markRef} src="/mark.png" alt="map" className='img__mark'/>
            </div>
            <div ref={comingUpRef} className="div__up">
                <img src="/img_1.png" alt="img-pop-up" className='img__up' style={{zIndex: '20'}} ref={stDelRef}/>
                <img src="/img_2.png" alt="img-pop-up" className='img__up' style={{zIndex: '18'}} ref={ndDelRef}/>
                <img src="/img_3.png" alt="img-pop-up" className='img__up' style={{zIndex: '16'}} ref={rdDelRef}/>
                <img src="/img_4.png" alt="img-pop-up" className='img__up' style={{zIndex: '14'}} ref={fthDelRef}/>
                <img src="/img_5.png" alt="img-pop-up" className='img__up' style={{zIndex: '12'}}/>

            </div>
        </div>
    );
};

export default Hero;