import { useState } from "react";
   let count1 = 0;
    let count2 = 0;
export default function Grid() {
    let playing = true;
    let potato = null;
    const [user, setUser] = useState(1);
    const [square2, setSquare2] = useState('');
    const [square1, setSquare1] = useState('');
    const [square3, setSquare3] = useState('');
    const [square4, setSquare4] = useState('');
    const [square5, setSquare5] = useState('');
    const [square6, setSquare6] = useState('');
    const [square7, setSquare7] = useState('');
    const [square8, setSquare8] = useState('');
    const [square9, setSquare9] = useState('');
    if (square1 != '' && square2 != '' && square3 != '' && square4 != '' && square5 != '' && square6 != '' && square7 != '' && square8 != '' && square9 != '') { 
        playing=false;
        potato=<h3>Game ended in a draw create a new one to continue</h3>
    }

    if ((square1 === 'X' && square2 === 'X' && square3 === 'X') 
        || (square4 === 'X' && square5 === 'X' && square6 === 'X')
        || (square7 === 'X' && square8 === 'X' && square9 === 'X')
        || (square1 === 'X' && square4 === 'X' && square7 === 'X')
        || (square2 === 'X' && square5 === 'X' && square8 === 'X')
        || (square3 === 'X' && square6 === 'X' && square9 === 'X')
        || (square1 === 'X' && square5 === 'X' && square9 === 'X')
        || (square3 === 'X' && square5 === 'X' && square7 === 'X')) {
        playing = false;
        count1++;
        potato = <h3>X won</h3>
    }

    if ((square1 === 'O' && square2 === 'O' && square3 === 'O')
        || (square4 === 'O' && square5 === 'O' && square6 === 'O')
        || (square7 === 'O' && square8 === 'O' && square9 === 'O')
        || (square1 === 'O' && square4 === 'O' && square7 === 'O')
        || (square2 === 'O' && square5 === 'O' && square8 === 'O')
        || (square3 === 'O' && square6 === 'O' && square9 === 'O')
        || (square1 === 'O' && square5 === 'O' && square9 === 'O')
        || (square3 === 'O' && square5 === 'O' && square7 === 'O')) {
        playing = false;
        count2++;
        potato=<h3>O won</h3>
       
    }
    return (
        <>
             <div className='ScoreBoard'>
        <h1 className='Player1'>X:{count1/2}</h1>
        <h1 className='Player2'>O:{count2/2}</h1>
     </div>
        <table className="Grid">
            <tr className="Row">
                    <td className={`Square ${square1=='X'?"red":"blue"}`} onClick={() => {
                     
                            if (playing) {
                                if (square1 === '') {
                                    if (user === 1) {
                                        setSquare1('X');
                                        setUser(2);
                                    } else {
                                        setSquare1('O');
                                        setUser(1);
                                    }
                                } else {
                                    alert('Square is already filled');
                                }
                    
                            } else {
                                alert('Game over create a new one');
                            }
                        }
                    }
                        
                   >{square1}</td>
                    
                    <td className={`Square ${square2=='X'?"red":"blue"}`} onClick={() => {
                      
                            if (playing) {
                                if (square2 === '') {
                                    if (user === 1) {
                                        setSquare2('X');
                                        setUser(2);
                                    } else {
                                        setSquare2('O');
                                        setUser(1)
                                    }
                                } else {
                                    alert('Square is already filled');
                                }
                            }
                            else {
                                alert('Game over create a new one');
                            }
                        }
                    }
                    >{square2}</td>

                    <td className={`Square ${square3=='X'?"red":"blue"}`} onClick={
                        () => {
                           
                                if (playing) {
                                    if (square3 === '') {
                                        if (user === 1) {
                                            setSquare3('X');
                                            setUser(2);
                                        } else {
                                            setSquare3('O');
                                            setUser(1);
                                        }
                                    } else {
                                        alert('Square is already filled');
                                    }
                                }
                                else {
                                    alert('Game over create a new one');
                                }
                            }
                        }>{square3}</td>
            </tr>
            <tr className="Row">
                    <td className={`Square ${square4=='X'?"red":"blue"}`} onClick={
                        () => {
                            
                                if (playing) {
                                    if (square4 === '') {
                                        if (user === 1) {
                                            setSquare4('X');
                                            setUser(2);
                                        } else {
                                            setSquare4('O');
                                            setUser(1);
                                        }
                                    } else {
                                        alert('Square is already filled');
                                    }
                                }
                                else {
                                    alert('Game over create a new one');
                                }
                            }
                        }>{square4}</td>
                    
                    <td className={`Square ${square5=='X'?"red":"blue"}`} onClick={
                        () => {
                            
                                if (playing) {
                                    if (square5 === '') {
                                        if (user === 1) {
                                            setSquare5('X');
                                            setUser(2);
                                        } else {
                                            setSquare5('O');
                                            setUser(1);
                                        }
                                    } else {
                                        alert('Square is already filled');
                                    }
                                }
                                else {
                                    alert('Game over create a new one');
                                }
                            }
                        }>{square5}</td>
                    <td className={`Square ${square6=='X'?"red":"blue"}`} onClick={() => {
                        
                            if (playing) {
                                if (square6 === '') {
                                    if (user === 1) {
                                        setSquare6('X');
                                        setUser(2);
                                    } else {
                                        setSquare6('O');
                                        setUser(1);
                                    }
                                } else {
                                    alert('Square is already filled');
                                }
                            }
                            else {
                                alert('Game over create a new one');
                            }

                        }
                    }>{ square6}</td>
            </tr>
            <tr className="Row">
                    <td className={`Square ${square7=='X'?"red":"blue"}`} onClick={
                        () => {
                           
                                if (playing) {
                                    if (square7 === '') {
                                        if (user === 1) {
                                            setSquare7('X');
                                            setUser(2);
                                        } else {
                                            setSquare7('O');
                                            setUser(1);
                                        }
                                    } else {
                                        alert('Square is already filled');
                                    }
                                }
                                else {
                                    alert('Game over create a new one');
                                }
                            }
                        }>{square7}</td>
                    <td className={`Square ${square8=='X'?"red":"blue"}`} onClick={
                        () => {
                            
                                if (playing) {
                                    if (square8 === '') {
                                        if (user === 1) {
                                            setSquare8('X');
                                            setUser(2);
                                        } else {
                                            setSquare8('O');
                                            setUser(1);
                                        }
                                    } else {
                                        alert('Square is already filled');
                                    }
                                }
                                else {
                                    alert('Game over create a new one')
                                }
                            
                        }}>{square8}</td>
                    <td className={`Square ${square9=='X'?"red":"blue"}`} onClick={
                        () => {
                            
                                if (playing) {
                                    if (square9 === '') {
                                        if (user === 1) {
                                            setSquare9('X');
                                            setUser(2);
                                        } else {
                                            setSquare9('O');
                                            setUser(1);
                                        }
                                    } else {
                                        alert('Square is already filled');
                                    }
                                }
                                else {
                                    alert('Game over create a new one');
                                }

                            }
                        }>{ square9}</td>
            </tr>
            </table>
            {playing && <h3 className="turn"> Player{user} turn</h3>}
            
            {!playing && potato}

            
        <button className="Reset" onClick={() => {
            setSquare1('')
            setSquare2('')
            setSquare3('')
            setSquare4('')
            setSquare5('')
            setSquare6('')
            setSquare7('')
            setSquare8('')
            setSquare9('')
            playing = true;
                
            }}>New Game</button>
            
        </>

        
    )
        }
        


