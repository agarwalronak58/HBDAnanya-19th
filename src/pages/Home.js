import React, { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from '../styles.module.css';
import troll from '../images/troll.gif';
import pbj from '../images/pbj_time.gif';
import pbjMusic from '../images/pbj_time.mp3';
import { Link } from 'react-router-dom';

function Home() {
    const alignCenter = { display: 'flex', alignItems: 'center' };

    const [angle, setAngle] = useState(0);

    const [audioPlayed, setAudioPlayed] = useState(false);

    const parallaxRef = useRef();

    const clickImage = () => {
        // console.log(parallaxRef);
        if (!audioPlayed) {
            const audio = new Audio(pbjMusic);
            audio.play();
            setAudioPlayed(true);
        }
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
                    offset={0.3}
                    speed={0.5}
                    style={{
                        ...alignCenter,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <br></br>
                    <h2 style={{fontSize: 100, color: 'pink'}}>Hello Ananya "Anyai" Singh.</h2>
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
                            I know your favorite colors are <span style={{color:'green', fontSize: 30}}>forest green</span> and <span style={{color:'darkorchid', fontSize: 30}}>royal purple</span>,<br></br>
                            I know you are a <span style={{color:'mediumvioletred', fontSize: 30}}>shopaholic</span>,<br></br>
                            I know you are obsessed with <span style={{color:'lightblue', fontSize: 30}}>Harry Potter</span>,<br></br>
                            I know you are a <span style={{color:'lightpink', fontSize: 30}}>dog person</span> (i hope),<br></br><br></br><br></br>
                            and worst of all...<br></br><br></br>
                            I know that you like to eat your own <br></br> <span style={{color:'lightgreen', fontSize: 60}}>BOOGERS</span>.<br></br><br></br>
                            Like bruh, boogers? Really? That is so <span style={{color: '#D4D977', fontSize: 30}}>GROSS</span>.<br></br>
                            I mean, I know you're a <span style={{color: '#D4D977', fontSize: 30}}>weirdo</span>, but that's just <span style={{color: '#D4D977', fontSize: 30}}>nasty</span>.<br></br><br></br>
                            I'm also realizing now that there was no need for me to emphasize those last few words <br></br>
                            but whatever, I'm too lazy to go back and fix it.<br></br>
                            Well, maybe <span style={{color: '#D4D977', fontSize: 30}}>weirdo</span> should stay emphasized...<br></br>
                        </p>
                        <p>
                            Anyways, feel free to scroll down or whatever.
                        </p>    
                    </p>
                </ParallaxLayer>

                <ParallaxLayer
                    sticky={{ start: 1.5, end: 6 }}
                    style={{
                        ...alignCenter,
                        justifyContent: 'flex-start',
                    }}
                >
                    <div
                        className={`${styles.pbj} ${styles.sticky}`}
                        onClick={clickImage}
                    >
                        <img src={pbj} />
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
                        <p style={{ color: 'white' }}>
                            As you may have already noticed, there is the peanut
                            butter jelly time guy on the left side of the page. <br></br>
                            No matter how far you try to scroll away. <br></br>
                            He will always be there, watching you,
                            judging you, and reminding you that it is always
                            peanut butter jelly time. Although, if you try clicking
                            on him, you may be able to get him to go away...
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
                        className={`${styles.card} ${styles.parallax} ${styles.black}`}
                    >
                        <p style={{ color: 'white', textAlign:'center' }}>
                            <span style={{color:'red', fontSize: 30}}>
                                MUAHAHAHAHAHAHAHAHAHA!
                            </span><br></br>
                            You really thought that would work?<br></br>
                            You really thought that you could just click
                            on him and he would go away? <br></br>
                            You really thought that I would be that easy 
                            to get rid of?<br></br>
                            <span style={{color:'red', fontSize: 30}}>
                                You fool!
                            </span><br></br>
                            You have no idea what you've gotten yourself into.<br></br>
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
                        className={`${styles.card} ${styles.parallax} ${styles.blue}`}
                    >
                        <p style={{ color: 'white' }}>
                            I knew you would be unable to resist clicking on
                            him. You poor soul. <br></br>
                            I know probably didn't even see this
                            coming. <br></br>
                            You probably thought this was just a fun little
                            website that I made for you. <br></br>
                            Well, out of pity, I will give you a chance to
                            escape. However, it will cost you... <br></br>

                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={5}
                    speed={1.5}
                    style={{ 
                        ...alignCenter, 
                        justifyContent: 'flex-end' 
                    }}
                >
                    <div
                        className={`${styles.card} ${styles.parallax} ${styles.purple}`}
                    >
                        <p style={{ color: 'white' }}>
                            All you have to do is keep scrolling, and I will
                            let you go. <br></br>
                            But if you scroll too far, you will be
                            trapped here forever. <br></br>
                            So, what will it be? <br></br>
                            Will you keep scrolling? <br></br>
                            Or will you give up and accept your  
                            <span style={{color:'pink', fontSize: 30}}> FATE?</span><br></br>
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={7}
                    speed={1.5}
                    style={{ 
                        ...alignCenter, 
                        justifyContent: 'center' 
                    }}
                >
                    <p style={{ color: 'white' }}>
                        You really want to risk it, hmm?
                    </p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={8}
                    speed={0.5}
                    style={{ 
                        ...alignCenter, 
                        justifyContent: 'center' 
                    }}
                >
                    <h1 styles={{ color: 'white' }}>Ok then...</h1>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={9}
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
                        TROLOLOLOLOLOLOLOLOL!!!!
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
                        I warned you not to scroll too far down. But what did
                        you do? You CHOSE not to listen, and now you got trolled. <br></br>
                        I hope you're happy with yourself. <br></br>
                        I hope you're happy with the choices you've made. <br></br>
                        I hope you're happy with the life you've chosen to live because I wouldn't be. <br></br>
                        Just click the button smh.
                    </p>
                    <Link to="/game">
                        <button className="learn-more" color="#841584">
                            Click here to redeem yourself.
                        </button>
                    </Link>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}

export default Home;
