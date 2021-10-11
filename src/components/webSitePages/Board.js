import Game from "./Game";
import './Board.css'


function Board({games}){
    return(
        <div className="gameMenu"> {games.map((game, i) => ( <Game key = {i} value = {game}/>))}  </div>
    )
}

export default Board