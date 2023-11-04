import React from 'react'
import '../Styles/Meme.css'
import memesData from '../memesData.js'

const Meme = () => {
  function getMemeImage (){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const memeUrl = memesArray[randomNumber].url
    const img = document.getElementById('meme--img')
    img.src = memeUrl
    console.log(randomNumber, memesArray[randomNumber], memeUrl)
    
  }  

  return (
    <main>
        <form className='form'>
            <input type='text'className='form--input' placeholder='Top text'/>
            <input type='text'className='form--input' placeholder='Bot text'/>
            <button onClick = {getMemeImage} type='button' className='form--button'>Get a new meme image 🖼</button>
        </form>
        <div className='meme'>
                <img id='meme--img' className='meme--image' src=''></img>
        </div>
    </main>
  )
}

export default Meme