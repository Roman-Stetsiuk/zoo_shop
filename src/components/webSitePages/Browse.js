import './Browse.css'
import Game from "./Game"
import React, { useState} from 'react';
import Board from "./Board";

function Browse({games}){
    const [gameMenu,setGameMenu] = useState(Array(12).fill(null))


    return(<div className='Browse'>
<div className='habbar'> <a href={''}> Galaxy Shop</a>  <a href={''}> Products</a> <a href={''}> Log in/ Sig in</a>  </div>
            <Board games={gameMenu}/>
        </div>
    )}

export default Browse