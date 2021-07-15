import { React, useState}  from 'react';
import Icon from './Components/Icon';
//import toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import reactstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import './style.css';


const tiktacArray = new Array(9).fill("")

const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")

    const playAgain = () =>{
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")
    }

    //simulation
    const play = (position) => {
        if (isCross) {
            tiktacArray[position] = "x"
        } else {
            tiktacArray[position] = "o"
        }
        setIsCross(!isCross)
        findWinner()           
    }

    //findWinner()
    /*  winner horizontal positions 
        [0, 1, 2]
        [3, 4, 5]
        [6, 7, 8]
        
        winner vertical positions
        [0, 3, 6]
        [1, 4, 7]
        [2, 5, 8]

        winner diagonal position
        [0, 4, 8]
        [2, 4, 6]
    */

    const findWinner = () => {        
        if ((tiktacArray[0] === "x" && tiktacArray[1] === "x" && tiktacArray[2] === "x") || (tiktacArray[3] === "x" && tiktacArray[4] === "x" && tiktacArray[5] === "x") || (tiktacArray[6] === "x" && tiktacArray[7] === "x" && tiktacArray[8] === "x")) {
            setWinMessage("x")
        } else if ((tiktacArray[0] === "o" && tiktacArray[1] === "o" && tiktacArray[2] === "o") || (tiktacArray[3] === "o" && tiktacArray[4] === "o" && tiktacArray[5] === "o") || (tiktacArray[6] === "o" && tiktacArray[7] === "o" && tiktacArray[8] === "o")) {
            setWinMessage("o")
        } else if ((tiktacArray[0] === "x" && tiktacArray[3] === "x" && tiktacArray[6] === "x") || (tiktacArray[1] === "x" && tiktacArray[4] === "x" && tiktacArray[7] === "x") || (tiktacArray[2] === "x" && tiktacArray[5] === "x" && tiktacArray[8] === "x")) {
            setWinMessage("x")
        } else if ((tiktacArray[0] === "o" && tiktacArray[3] === "o" && tiktacArray[6] === "o") || (tiktacArray[1] === "o" && tiktacArray[4] === "o" && tiktacArray[7] === "o") || (tiktacArray[2] === "o" && tiktacArray[5] === "o" && tiktacArray[8] === "o")) {
            setWinMessage("o")
        } else if ((tiktacArray[0] === "x" && tiktacArray[4] === "x" && tiktacArray[8] === "x") || (tiktacArray[2] === "x" && tiktacArray[4] === "x" && tiktacArray[6] === "x")) {
            setWinMessage("x")
        } else if ((tiktacArray[0] === "o" && tiktacArray[4] === "o" && tiktacArray[8] === "o") || (tiktacArray[2] === "o" && tiktacArray[4] === "o" && tiktacArray[6] === "o")) {
            setWinMessage("o")
        } else {
            setWinMessage("")
        }
    }


    return (
        <div>
            <h1>Salut!!! Tic Tac Toe</h1>
            {tiktacArray.map((value, index) => {
                    return (
                        <p> 
                            <span className="text-position">Position {index}</span>
                            <span className="text-click" onClick={() => play(index)}>Click to select 'x' or 'o'</span>
                        </p>
                    )
                })
            }
            <h1>{tiktacArray}</h1>
            {winMessage === "" ? 
                    <Icon choice={""} />
                :
                    winMessage === "x" ?
                            <h2>Winner is... <Icon choice={"cross"} /></h2>
                        :
                            <h2>Winner is... <Icon choice={"circle"} /></h2>
            }
            <div>
                <button onClick={() => playAgain()}>Reset</button>
            </div>
        </div>
        )
}

export default App;