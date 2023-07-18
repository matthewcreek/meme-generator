import React, { useEffect } from "react";
// import data from '../memeData';
import { useState } from "react";

function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        console.log(`effect ran`)
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const memeArr = allMemeImages;
        const randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)];
        const url = randomMeme.url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="container">
                <img src={meme.randomImage} alt="meme" className="meme--img"/>
                <div className="top-text"><h1>{meme.topText}</h1></div>
                <div className="bottom-text"><h1>{meme.bottomText}</h1></div>
            </div>
        </main>
        
    )
}

export default Meme;