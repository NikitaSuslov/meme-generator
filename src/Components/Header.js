import React from 'react'
import '../Styles/Header.css'
import trollface from '../Images/troll-face.png'

const Header = () => {
  return (
    <header className='header'>
        <img src= {trollface} className='header--logo' ></img>
        <h1 className='header--name'>Meme Generator</h1>
    </header>
  )
}

export default Header