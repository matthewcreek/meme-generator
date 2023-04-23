import React from "react";
import data from '../memeData';

function Meme() {

    function getMemeImage(){
        const memeArr = data.data.memes;
        const randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)];
        const url = randomMeme.url;
        console.log(url);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
        </main>
        
    )
}

export default Meme;