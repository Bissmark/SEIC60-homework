import React, { Component } from "react";

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
let play = ''
let p1Win = ''
let p2Win = ''

const initialState = {
    s: '',
    disabled: false

};


class Square extends Component {
    
    constructor() {
        super()
        this.state = {
            s: '',
            disabled: false
        };
        this._play = this._play.bind(this) 
    }


    componentDidUpdate(prevProps) {
        if (prevProps.boardState !== this.props.boardState) {
          this.setState({
            ...initialState
          });
        }
        if(this.props.AI === this.props.id && !this.state.disabled) {
            this.setState({
            s: '〇',
            disabled: true,
            })
            
        }
    }

   


    _play() {
        if (!this.state.disabled) {
        this.setState({s: play, disabled: true})
        }
    }

  
    
    render() {


        let x = 0
        let o = 0
        const squares = document.querySelectorAll('.square')
setTimeout(function(){
        const p1 = document.querySelector('#P1')
        const p2 = document.querySelector('#P2')
        const result = document.querySelector('#result')
        for (let condition of winningCondtions) {
            let p1Check = ''
            let p2Check = ''
            if (p1Win != 'XXX' && p2Win != '〇〇〇' ) {
                for (let index of condition) {
                    if (board[index] === 'X') {
                        p1Check = p1Check + 'X'}
                    if (board[index] === '〇') {
                        p2Check = p2Check + '〇'}
                    if (p1Check === 'XXX') {
                        p1Win = p1Check

                        squares.forEach(square =>
                            square.classList.add('played'))
                        squares.forEach(square =>
                            square.classList.remove('player2'))
                        result.textContent = 'Player 1 wins!'
                        result.style.visibility = 'visible'
                        p1.textContent = parseInt(p1.textContent) + 1

                    }
                    if (p2Check === '〇〇〇') {
                        p2Win = p2Check

                            squares.forEach(square =>
                                square.classList.add('played'))
                            squares.forEach(square =>
                                square.classList.remove('player2'))
                            result.textContent = 'Player 2 wins!'
                            result.style.visibility = 'visible'
                            p2.textContent = parseInt(p2.textContent) + 1
                        }

                }
            }
        }

 


    for (let i =0; i < squares.length; i++) {
        if (squares[i].textContent === 'X') {
            squares[i].classList.add("played")
            squares[i].classList.remove('player2')
            x = x + 1;
            board[i] = 'X'
        }
        else if (squares[i].textContent === '〇') {
            squares[i].classList.add("played")
            squares[i].classList.remove('player2')
            o = o + 1;
            board[i] = '〇'
        }
    }


    if (x + o === 9 && p1Win != 'XXX' && p2Win != '〇〇〇') {
        play = ''
        result.textContent = 'Draw!'
        result.style.visibility = 'visible'
    }


    if (p1Win === 'XXX' || p2Win === '〇〇〇') {
        play = ''
    }

    if (p1Win != 'XXX' && p2Win != '〇〇〇') {
        if (x > o) {
            play = '〇'
            for (let square of squares) {
                if (square.textContent === '') {
                    square.classList.add('player2')
                }
            }
        }
        else {
            play = 'X'
            for (let square of squares) {
                if (square.textContent === '') {
                    square.classList.remove('player2')
                }
            }
        }
    }

















    // Restart
    let empty = 0
    for (let square of squares) {
        if (square.textContent === ''){
            empty = empty + 1
        }
    }
    if (empty === 9) {
        p2Win = ''
        p1Win = ''
        board = ["", "", "", "", "", "", "", "", ""]
        result.textContent = 'Result'
        for (let square of squares) {
            square.classList.remove('played')
            square.classList.remove('player2')
            result.style.visibility = 'hidden'
        }
    }





}, 100)



        const { s } = this.state
        return(
                <div className='square'
                onClick={this._play} value={ s || '' } style={{color: s === "X" ? "blue" : "red", borderColor: 'black'}}>{ s }</div>
               

        )
    
    }
}







export default Square