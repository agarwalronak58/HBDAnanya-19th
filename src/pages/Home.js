import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../styles.module.css';
import troll from '../images/troll.gif';
import pbj from '../images/pbj_time.gif';
import pbjMusic from '../images/pbj_time.mp3';
import { Link } from 'react-router-dom';
function Home() {
    const alignCenter = { display: 'flex', alignItems: 'center' };

    const [angle, setAngle] = useState(0);

    const parallaxRef = useRef();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const image = document.querySelector("#pbj-time-img");
            const rect = image.getBoundingClientRect();
            const viewHeight = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight
            );
            
            if (rect.top >= 0 && rect.bottom <= viewHeight) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleClick() {
        // console.log(parallaxRef);
    }

    let gradient = `linear-gradient(${angle}deg, #511660, #064e40)`;

    const onScroll = () => {
        let scroll = parallaxRef.current.current / parallaxRef.current.space;
        console.log(360 / (scroll + 1));
        setAngle(360 / (scroll + 1));
        gradient = `linear-gradient(${angle}deg, #511660, #064e40)`;
    };

    useEffect(() => {
        if (!parallaxRef.current || !parallaxRef.current.container.current)
            return;
        parallaxRef.current.container.current.onscroll = onScroll;
    }, []);

    let bgStyle = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100vw',
        // height: '1000px',
        background: gradient,
    };

    let textColor = {
        color: 'white',
        textAlign: 'center',
    }

    return (
        <>
            <div style={bgStyle} />
            <Parallax pages={12} ref={parallaxRef}>
                <ParallaxLayer
                    offset={0.2}
                    speed={0.5}
                    style={{
                        ...alignCenter,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <br></br>
                    <h2 style={textColor}>Hello Ananya "Anyai" Singh.</h2>
                    <p className={styles.scrollText} style={textColor}>
                        <p>
                            I know you're probably wondering why I'm calling you
                            by your full name.
                        </p>
                        <p>
                            Well, it's because I'm a
                            professional and I'm not going to call you by your
                            nickname. I'm not your friend...
                        </p>
                        <p style={{fontSize: 50, color: 'red'}}>
                            I'm your enemy. 
                        </p>
                        <p> 
                            I know everything about you...<br></br>
                            I know your favorite ice cream is Ben & Jerry's <span style={{color:'indianred', fontSize: 30}}>Phish Food</span>,<br></br>
                            I know your favorite colors are <span style={{color:'green', fontSize: 30}}>dark green</span> and <span style={{color:'darkorchid', fontSize: 30}}>royal purple</span>,<br></br>
                            I know you are a <span style={{color:'mediumvioletred', fontSize: 30}}>shopaholic</span>,<br></br>
                            I know you are obsessed with <span style={{color:'lightblue', fontSize: 30}}>Harry Potter</span>,<br></br>
                            I know you are a <span style={{color:'lightpink', fontSize: 30}}>dog person</span> (i hope),<br></br><br></br><br></br>
                            and worst of all...<br></br><br></br>
                            I know that you like to eat your own <br></br> <span style={{color:'lightgreen', fontSize: 60}}>BOOGERS</span>.<br></br><br></br>
                            Like bruh, boogers? Really? That is so <span style={{color: '#D4D977', fontSize: 30}}>GROSS</span>.<br></br>
                            I mean, I know you're a <span style={{color: '#D4D977', fontSize: 30}}>weirdo</span>, but that's just <span style={{color: '#D4D977', fontSize: 30}}>nasty</span>.<br></br><br></br>
                            I'm also realizing now that three was no need for me to emphasize those last few words <br></br>
                            but whatever, I'm too lazy to go back and fix it.<br></br>
                            Well, maybe <span style={{color: '#D4D977', fontSize: 30}}>weirdo</span> should stay emphasized...<br></br>
                        </p>
                        <p>
                            Anyways, feel free to scroll down or whatever.
                        </p>    
                    </p>
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 1.5, end: 4 }}
                    style={{
                        ...alignCenter,
                        justifyContent: 'flex-start',
                    }}
                >
                    <div
                        className={`${styles.pbj} ${styles.sticky}`}
                        onClick={handleClick}
                    >
                        <img id="pbj-time-img" src={pbj} alt="pbj_time" />
                        {isVisible && (
                            <audio autoPlay>
                                <source src={pbjMusic} type="audio/mp3" />
                            </audio>
                        )}
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={1.5}
                    style={{ 
                        ...alignCenter, 
                        justifyContent: 'flex-end' 
                    }}
                >
                    <div
                        className={`${styles.card} ${styles.parallax} ${styles.purple}`}
                    >
                        <p>
                            As you may have already noticed, there is a dancing
                            clown at the left side of the page that will follow
                            you no matter how far you scroll. Do not try to
                            escape it and scroll too far or else you will have
                            regrets (no fr).
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={1.5}
                    style={{ 
                        ...alignCenter, 
                        justifyContent: 'flex-end' 
                    }}
                >
                    <div
                        className={`${styles.card} ${styles.parallax} ${styles.blue}`}
                    >
                        <p>
                            Hopefully your IQ and self-realization skills are
                            large enough for you to have realized that this
                            clown is actually YOU. Yes, YOU. ROHIL AGARWAL. One
                            day, while I was spying on you, I saw you dancing
                            like a clown and decided to animate it (jk this is
                            not my animation but instead a live video
                            recording).
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={1.5}
                    style={{ 
                        ...alignCenter, 
                        justifyContent: 'flex-end' 
                    }}
                >
                    <div
                        className={`${styles.card} ${styles.parallax} ${styles.black}`}
                    >
                        <p style={{ color: 'white' }}>
                            Because your IQ is so low, ik this may have come to
                            you as a surprise. Therefore, I am giving you a
                            chance to redeem yourself. You may escape this true
                            clown version of yourself, but it will cost you...
                            Keep scrolling to find out.
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={5}
                    speed={1.5}
                    style={{ 
                        ...alignCenter, 
                        justifyContent: 'center' 
                    }}
                >
                    <p style={{ color: 'white' }}>
                        I see. So you're ready, hm?
                    </p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={6}
                    speed={0.5}
                    style={{ 
                        ...alignCenter, 
                        justifyContent: 'center' 
                    }}
                >
                    <h1 styles={{ color: 'white' }}>Well then...</h1>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={8}
                    speed={0.5}
                    style={{
                        backgroundImage: `url(${troll})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {/* <img src={troll} /> */}
                </ParallaxLayer>
                <ParallaxLayer
                    offset={10}
                    speed={1.5}
                    style={{ 
                        ...alignCenter, 
                        justifyContent: 'center' 
                    }}
                >
                    <h1
                        className={`${styles.scrollText}`}
                        style={{ color: 'white' }}
                    >
                        TROLLEDDD!!!!
                    </h1>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={11}
                    speed={1.5}
                    style={{
                        ...alignCenter,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <p
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            padding: '300px',
                        }}
                    >
                        I warned you not to scroll too far, man. But what did
                        you do? Ya done scrolled too far, ya bum, and now you're
                        sitting here embarrassed with everyone around you
                        judging you in their heads. Too bad, so sad.
                    </p>
                    <Link to="/game">
                        <button className="learn-more">
                            Click here to redeem youreslf.
                        </button>
                    </Link>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}

export default Home;
