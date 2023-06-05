import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';
import Sound from 'react-sound';
import troll from '../images/troll_song.mp3';
import './Level.css';

function LevelThree() {
    const navigate = useNavigate();

    const [{ topVal, leftVal }, set] = useSpring(() => ({
        topVal: Math.floor(window.innerHeight / 2),
        leftVal: Math.floor(window.innerWidth / 2),
    }));

    const [count, up] = useState(false);

    function mouseOver() {
        up(Sound.status.PLAYING);
        set({
            topVal: Math.floor(Math.random() * (window.innerHeight - 100)),
            leftVal: Math.floor(Math.random() * (window.innerWidth - 300)),
        });
    }

    return (
        <div>
            {count && (
                <div className="bg-orange-4000 top-0 left-0 absolute z-0 w-full h-full opacity-50" />
            )}
            <div className="top-0 left-0 absolute z-10 h-screen w-screen bg-orange-400 opacity-90 ">
                <Sound
                    url={troll}
                    playStatus={count}
                    playFromPosition={300 /* in milliseconds */}
                />
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="mt-8 text-white text-4xl font-bold uppercase">
                        LEVEL THREE
                    </h1>
                    <p className="text-white text-xl px-60 text-center">
                        You FINALLY completed the wordle. It should have been an
                        easy one considering its your NAME, Ms. Anyai 😅. This 
                        level should be an easy one because I have been hard on you.
                        All you have to do is click the button and once you do, 
                        you will go to level four! 😃
                    </p>
                </div>
                <animated.div
                    onMouseOver={mouseOver}
                    onClick={() => navigate('/level-four')}
                    style={{ left: leftVal, top: topVal }}
                    className={`absolute hover:underline bg-white text-gray-800 font-bold rounded-full py-2 px-5 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out m-0`}
                >
                    To Level Four
                </animated.div>
            </div>
        </div>
    );
}

export default LevelThree;
