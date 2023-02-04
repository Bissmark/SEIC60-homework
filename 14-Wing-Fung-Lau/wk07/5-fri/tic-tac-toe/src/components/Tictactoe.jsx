import React, { Component } from "react";
import Square from './Square';


let AI = ''
let p1Win = ''
let p2Win = ''



const winningCondtions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ]
let board = ["", "", "", "", "", "", "", "", "", ]




 



 






class Tictactoe extends Component {
    constructor() {
        super()
        this._AI = this._AI.bind(this)
        this._AIonOff = this._AIonOff.bind(this) 
    }
    
    state = {
        boardState: {},
        AImode: 'off',
        selectedSquareId: AI,
        a: "AI off"
    };

    _AIonOff(){
        if (this.state.a === 'AI off'){
            this.setState({a: 'AI on'})
        }
        else {this.setState({a: 'AI off'})}
    }

    _AI() {
        this.setState({selectedSquareId: AI})
    }
    
    _resetBoardState = () => {
        this.setState({
            boardState: {}
        });
    };










    

    render() {
        const squares = document.querySelectorAll('.square')
        board = ["", "", "", "", "", "", "", "", ""]
        AI = ''
        p1Win = ''
        p2Win = ''
        let x = 0
        let o = 0
        let p1played = []
        let p2played = []
        let noplayed = []
        setTimeout(function() {


            

            for (let i = 0; i < 9; i++) {
                let squares = document.querySelectorAll('.square')
                if (squares[i].textContent === 'X'){
                    board[i] = 'X'
                    x = x + 1
                    p1played.push(i)
                }
                if (squares[i].textContent === '〇'){
                    board[i] = '〇'
                    o = o + 1
                    p2played.push(i)
                }
                if (squares[i].textContent === '') {
                    noplayed.push(i)
                }
            }

            for (let condition of winningCondtions) {
                let p1Check = ''
                let p2Check = ''
                if (p1Win !== 'XXX' && p2Win !== '〇〇〇' ) {
                    for (let index of condition) {
                        if (board[index] === 'X') {
                            p1Check = p1Check + 'X'}
                        if (board[index] === '〇') {
                            p2Check = p2Check + '〇'}
                        if (p1Check === 'XXX') {
                            p1Win = p1Check
                        }
                        if (p2Check === '〇〇〇') {
                            p2Win = p2Check
                            }
    
                    }
                }
            }
            
            let empty = 0
            for (let square of squares) {
                if (square.textContent === ''){
                    empty = empty + 1
                }
            }
            if (p1Win === 'XXX' || p2Win === '〇〇〇' || empty === 9 || x + o === 9) {
                board = ["", "", "", "", "", "", "", "", ""]
                AI = ''
                p1Win = ''
                p2Win = ''
                x = 0
                o = 0
                p1played = []
                p2played = []
                noplayed = []
            }







            
            const btnAI = document.querySelector('#btnAI')
            if (x > o && btnAI.textContent === 'AI on'){



                if(squares[4].textContent === '') {
                    AI = 'sq4'
                }
                else if (squares[4].textContent === 'X' && x === 1) {
                    let corner;
                    do {
                        corner = Math.floor( Math.random() * 10 / 2 ) * 2
                    } while(corner === 4);
                    AI = 'sq' + corner
                }
                for (let i = 0; i < winningCondtions.length; i++) {
                    let checkP2 = "";
                    for (let j = 0; j < winningCondtions[i].length; j++){
                        if (p2played.includes(winningCondtions[i][j])) {
                            checkP2 = checkP2 + 'W';
                        }
                        if (checkP2.length === 2 && j === 2) {
                            if(squares[winningCondtions[i][j-2]].textContent === '') {
                                AI = 'sq' + winningCondtions[i][j-2]
                            }
                            else if (squares[winningCondtions[i][j-1]].textContent === ''){
                                AI = 'sq' + winningCondtions[i][j-1]
                            }
                            else if (squares[winningCondtions[i][j]].textContent === ''){
                                AI = 'sq' + winningCondtions[i][j]
                            }
                        }

                    }
                }
                if (AI === '') {
                    for (let i = 0; i < winningCondtions.length; i++) {
                        let checkP1 = "";
                        for (let j = 0; j < winningCondtions[i].length; j++){
                            if (p1played.includes(winningCondtions[i][j])) {
                                checkP1 = checkP1 + 'W';
                            }
                            if (checkP1.length === 2 && j === 2) {    
                                if (checkP1.length === 2 && j === 2) {  
                                    if(squares[winningCondtions[i][j-2]].textContent === '') {
                                        AI = 'sq' + winningCondtions[i][j-2]
                                    }
                                    else if (squares[winningCondtions[i][j-1]].textContent === '') {
                                        AI = 'sq' + winningCondtions[i][j-1]
                                    }
                                    else if (squares[winningCondtions[i][j]].textContent === '') {
                                        AI = 'sq' + winningCondtions[i][j]
                                    }
                                }
                            }
                        }
                    }
                }
                if (AI === '') {
                    let random = Math.floor(Math.random() * noplayed.length)
                    AI = 'sq' + noplayed[random]
                }    
            }

        }, 200)



        const { a } = this.state
        return(
            <div className="tictactoe" onMouseMove={this._AI}>
                <h2 className='p1Scores'>Wins: <span id='P1'>0</span></h2>
                <h2 id='result'>Result</h2>
                <h2 className='p2Scores'>Wins: <span id='P2'>0</span></h2>
                <Square id='sq0' boardState={this.state.boardState} AI={this.state.selectedSquareId} />
                <Square id='sq1' boardState={this.state.boardState} AI={this.state.selectedSquareId} />
                <Square id='sq2' boardState={this.state.boardState} AI={this.state.selectedSquareId} />
                <Square id='sq3' boardState={this.state.boardState} AI={this.state.selectedSquareId} />
                <Square id='sq4' boardState={this.state.boardState} AI={this.state.selectedSquareId} />
                <Square id='sq5' boardState={this.state.boardState} AI={this.state.selectedSquareId} />
                <Square id='sq6' boardState={this.state.boardState} AI={this.state.selectedSquareId} />
                <Square id='sq7' boardState={this.state.boardState} AI={this.state.selectedSquareId} />
                <Square id='sq8' boardState={this.state.boardState} AI={this.state.selectedSquareId} />
                <div></div>
                <button id='restart' onClick={this._resetBoardState}>Restart</button>
                <button id='btnAI' onClick={this._AIonOff} value={ a || 'AI: Off' }>{ a }</button>
            </div>
        )

    }
}


export default Tictactoe