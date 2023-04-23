import React from "react";
import data from '../memeData';

function Meme() {
    const [memeImg, setMemeImg] = React.useState('');

    function getMemeImage(){
        const memeArr = data.data.memes;
        const randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)];
        const url = randomMeme.url;
        // console.log(url);
        setMemeImg(url)
        console.log(memeImg)
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
            <img src={memeImg} className="meme--img"/>
        </main>
        
    )
}

export default Meme;