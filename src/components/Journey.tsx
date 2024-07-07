'use client'
import React, {useLayoutEffect, useRef} from 'react';
import '@/assets/styles/Journey.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Journey = () => {

    const zoomRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const tourRef = useRef(null);
    const tourRoadRef = useRef(null);
    const motorRef = useRef(null);
    const cloudRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        let ctx = gsap.context(() => {

            gsap.to(tourRoadRef.current, {
                scrollTrigger: {
                    trigger: tourRef.current,
                    start: 'top top',
                    // markers: true
                },
                duration: 1.5,
                height: '100%',
            })

            gsap.to(cloudRef.current, {
                scrollTrigger: {
                    trigger: tourRef.current,
                    start: 'top top',
                    // markers: true
                },
                duration: 5,
                right: '-200px'
            })

            const motorTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: tourRef.current,
                    start: 'top top',
                    // markers: true
                }
            })

            motorTimeline.to(motorRef.current,{
                opacity: 1,
                duration: 0.5,
                delay: 1.5
            }).to(motorRef.current, {
                // x: -120,
                top: 'calc(220 / 675 * 100vh)',
                left: 'calc(80 / 675 * 100vh)',
                transform: 'rotate(23deg)',
                duration: 1,
                // ease: 'easeInOutQuad'
            }).to(motorRef.current, {
                // x: -120,
                // top: 'calc(370 / 675 * 100vh)',
                // left: 'calc(62 / 675 * 100vh)',
                // transform: 'rotate(66deg)',
                top: 'calc( 415 / 675 * 100vh)',
                left: 'calc( 52 / 675 * 100vh)',
                transform: 'rotate(63deg)',
                duration: 1,
                // ease: 'easeInOutQuad'
            }).to(motorRef.current, {
                // x: -120,
                // top: 'calc(370 / 675 * 100vh)',
                // left: 'calc(62 / 675 * 100vh)',
                // transform: 'rotate(66deg)',
                top: '110vh',
                left: 'calc( 42 / 675 * 100vh)',
                transform: 'rotate(49deg)',
                duration: 0.8,
                // ease: 'easeInOutQuad'
            })
            //     .to(motorRef, {
            //     // delay: 1.5,
            //     duration: 0.5,
            //     opacity: '0',
            //     width: '10px'
            // }).to(motorRef, {

            // })




        })

        return () => ctx.revert()

    }, []);

    const handleZoom = () => {
        gsap.to(zoomRef.current, {
            width: '100vw',
            height: '100vh',
            duration: 1,
            borderRadius: '0'
        })

        gsap.to(titleRef.current, {
            top: '120px',
            duration: 1,
        })

        gsap.to(textRef.current, {
            width: '298px',
            duration: 1,
            top: '40px'
        })

        setTimeout(()=>{
            zoomRef.current.play();
        },1000)
    }

    const handleUnZoom = () => {
        gsap.to(zoomRef.current, {
            width: '768px',
            height: '440px',
            duration: 1 ,
            borderRadius: '16px'
        })

        gsap.to(titleRef.current, {
            top: '40px',
            duration: 1,
        })

        gsap.to(textRef.current, {
            width: '396px',
            duration: 1,
            top: '20px'
        })

        setTimeout(()=>{
            zoomRef.current.pause();
        },1000)
    }

    return (
        <div className='journey __container'>
            <div className="journey__background"></div>
            <div className="__content">
                <div className="tour" ref={tourRef}>
                    <div className="road__text">EXPLORE YOUR JOURNEY WITH US</div>
                    <div className="tour__info">
                        <p className='tour__title'>HONG HAO MOTORBIKE TOUR</p>
                        <p className='tour__text'>Experience the raw beauty of Hà Giang with our immersive travel adventures. From rugged mountain landscapes to vibrant ethnic cultures, Hà Giang offers a truly unique and authentic experience. Explore remote villages.</p>
                        <div className="tour__list">
                            <p className="tour__item"><i class="fa-solid fa-check"></i>Tours accommodate a maximum of 10 guests</p>
                            <p className="tour__item"><i class="fa-solid fa-check"></i>Flexible cancellation policy</p>
                            <p className="tour__item"><i class="fa-solid fa-check"></i>Book now, pay later</p>
                            <p className="tour__item"><i class="fa-solid fa-check"></i>Fluent English-speaking guides</p>
                            <p className="tour__item"><i class="fa-solid fa-check"></i>Creating job opportunities for the Vietnamese community</p>
                        </div>
                        <div className="tour__task">
                            <button className='tour__button-orange'></button>
                            <button className='tour__button-trans'></button>
                        </div>
                    </div>
                    <img src="/road-mark.png" alt="mark" className='road-mark__img'/>
                    <div className="tour__road" ref={tourRoadRef}>
                        {/*<div className="tour__road--bg"></div>*/}
                        <img src="/road.png" alt="road" className='road__img'/>
                        <img src="/motor.png" alt="motor" className='motor__img' ref={motorRef}/>
                    </div>

                </div>
            </div>
            <div className="tour__cloud" ref={cloudRef}>
                <img src="/cloud-main.png" alt="cloud-main" className='cloud__main'/>
                <img src="/cloud-9h.png" alt="cloud-9h" className='cloud__9h'/>
                <img src="/cloud-11h.png" alt="cloud-9h" className='cloud__11h'/>
                <img src="/cloud-12h.png" alt="cloud-9h" className='cloud__12h'/>
                <img src="/cloud-13h.png" alt="cloud-9h" className='cloud__13h'/>
            </div>
            <div className="beautiful">
                <div className="beautiful__text" ref={titleRef}>
                    <p className="beautiful__title">
                        ha giang naturally
                    </p>
                    <img ref={textRef} src="/beautiful.png" alt="beautiful" className='beautiful__sign'/>
                </div>
                {/*<img ref={zoomRef} onMouseOver={handleZoom} onMouseLeave={handleUnZoom} src="/menu-card-1.jpeg" alt="zoom-img" className='beautiful__zoom'/>*/}
                <video className='beautiful__zoom' ref={zoomRef} onMouseOver={handleZoom} onMouseLeave={handleUnZoom} muted>
                    <source src="https://s3-figma-videos-production-sig.figma.com/video/1340597443540956718/TEAM/f4ea/0d23/-1515-4b3c-8dbf-33ec3468fc97?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X3FcFU0WfKzyu~2YROJN~FVKSVNs7NV9vlBRorrYJ65~uagwamQZOqRBUMvI~9Jp1jPgJiJFfIarjofqxt0p06Fg1XHaH5RPmQoV2y~HGrNNeCJhDag7RtbKkSA3CbCuVA3O~aQagL5hzXWCsOaWslqhgt3n3AqF5vqZr9PN1zuGZ2DO~WyDMB7o53jn2KkEdqunCvQm9LEM3J1pO2LwhWnXEYulMxEtctWWze4eJBGc5Bp3Hgy9e4GeXmBGr9RxoMapJNdtJ0XKGOiODZjBf3ljW8h2Ks2UiqdUugWjgun3VuM7P3i5lzdBngKHQYBqeTh0sib5-IrQhqWTv-jWoQ__" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Journey;