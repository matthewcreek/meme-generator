import React from "react";
import data from '../memeData';

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemeImages, setAllMemeImages] = React.useState(data)

    function getMemeImage(){
        const memeArr = allMemeImages.data.memes;
        const randomMeme = memeArr[Math.floor(Math.random() * memeArr.length)];
        const url = randomMeme.url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
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
            <img src={meme.randomImage} alt="meme" className="meme--img"/>
        </main>
        
    )
}

export default Meme;