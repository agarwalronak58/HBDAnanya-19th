import React, { useEffect } from 'react';
import Guess from '../components/Guess';
import PuzzleStore from '../stores/PuzzleStore';
import { useLocalObservable, observer } from 'mobx-react-lite';
import Qwerty from '../components/Qwerty';
import cilantro from '../images/cilantro.gif';
import clown_dance from '../images/clown_dance.gif';
import troll from '../images/troll.gif';
import arthurfist from '../images/arthurfist.gif';
import anyaishocked from '../images/anyai_shocked.png';
import anyaishlumped from '../images/anyai_shlumped.png';
import anyairacist from '../images/anyai_racist.png';
import anyaiwasted from '../images/ananyawasted.gif';
import pbjtime from '../images/pbj_time.gif';
import './LevelTwo.css';
import { Link, useNavigate } from 'react-router-dom';

export default observer(function LevelTwo() {
    const store = useLocalObservable(() => PuzzleStore);
    const navigate = useNavigate();

    useEffect(() => {
        store.init();
        window.addEventListener('keyup', store.handleKeyup);
        return () => {
            window.removeEventListener('keyup', store.handleKeyup);
        };
    }, [store]);

    const Snowflake = (props) => {
        return (
            <p className="Snowflake" id={`item${props.id}`} style={props.style}>
                <img className="object-cover" src={props.image} alt='' />
            </p>
        );
    };

    class Snow extends React.Component {
        snow = () => {
            let animationDelay = '0s';
            let fontSize = '100px';
            let image;
            let images = [
                cilantro,
                clown_dance,
                troll,
                arthurfist,
                anyaishocked,
                anyaishlumped,
                anyairacist,
                anyaiwasted,
                pbjtime,
            ];
            let arr = Array.from(Array(90).keys());
            return arr.map((el, i) => {
                animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
                fontSize = `${Math.floor(Math.random() * 40) + 10}px`;
                image = images[Math.floor(Math.random() * images.length)];
                let style = {
                    animationDelay,
                    width: fontSize,
                    height: fontSize,
                };
                return <Snowflake key={i} id={i} style={style} image={image} />;
            });
        };
        render() {
            return <div className="App">{this.snow()}</div>;
        }
    }

    return !store.trace ? (
        <div className="flex justify-between overflow-hidden h-screen">
            {store.lost ? (
                <div className="bg-red-400 w-screen h-screen flex justify-center items-center flex-col">
                    <h2 className="text-white text-6xl font-bold">
                        lol. you lost. you suck. be better.
                    </h2>
                    <h2 className="text-white text-6xl font-bold">
                        If you want to try again you have to internalize the button below:
                    </h2>
                    <img src={clown_dance} alt='' />
                    <button
                        onClick={store.init}
                        className="hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                        I suck at wordle and I'm a loser and I admit this so I can try again.
                    </button>
                </div>
            ) : (
                <div>
                    <div className="top-0 left-0 absolute z-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-900">
                        <h1 className="bg-gradient-to-br from-green-400 to-purple-800 bg-clip-text text-6xl font-bold uppercase text-transparent">
                            LEVEL TWO
                        </h1>
                        <p className="text-white text-center px-40">
                            Welcome to level two, Anyai. Better have practiced boi.
                        </p>
                        {store.guesses.map((_, i) => (
                            <Guess
                                key={i}
                                word={store.word}
                                guess={store.guesses[i]}
                                isGuessed={i < store.currentGuess}
                            />
                        ))}
                        {store.won && navigate('/level-three')}
                        <Qwerty store={store} />
                    </div>
                    <Snow className="absolute z-10 top-0 left-0" />
                    <Link to="/">

                        <button
                            className="absolute w-max z-10 hover:underline bg-purple-600 text-white font-bold rounded-full py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out absolute z-20 bottom-5 right-5"
                        >
                            Psst! Don't click me! &lt;:)
                        </button>
                    </Link>
                </div>
            )}
        </div>
    ) : (
        <div className="flex items-center justify-center h-screen bg-red-600">
            <div className="bg-white salet p-20 border rounded-3xl flex items-center flex-col ">
                <h1 className="text-3xl">
                    YOU REALLY USED <b>TRACE</b>? SWITCH IT UP.
                </h1>
                <button
                    onClick={() => store.init()}
                    className="hover:underline bg-purple-400 bg-white text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                    I am very very sorry and i swear that I will not use "TRACE" again.
                </button>
            </div>
        </div>
    );
});
