import React , { Component } from "react";
import Square from "./Square";
import { Button,styled} from "@material-ui/core";
import './style.css';
import ticPic from './tictoctoe.jpg';


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const PlayBtn = styled(Button)({
  backgroundColor: 'gray',
  borderRadius: 4,
  fontSize: "20px",
  left:"43%",
  cursor: 'pointer',
  width: "160px",
  height: "40px",
  textDecoration: 'none',
  fontWeight:'bold',
  
  '&:hover':{
    background: 'white',
  },

});

const PlayBtn2 = styled(Button)({
  backgroundColor: 'gray',
  borderRadius: 4,
  fontSize: "20px",
  cursor: 'pointer',
  width: "160px",
  height: "40px",
  textDecoration: 'none',
  fontWeight:'bold',
  
  '&:hover':{
    background: 'white',
  },

});

class Board extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
        isFinished:false,
        isnewGame:true,
    };
  }

  newGame(){
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      isFinished:false,
      isnewGame:true,
    });
  }



  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }
 
  handleClick(i) {
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    
    this.setState ({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;

    var moveNum=0;
    for (let i = 0; i < this.state.squares.length; i++) {
      if(this.state.squares[i] ==='X' || this.state.squares[i] ==='O')
      moveNum++;
    }

    if (winner) {
      status = 'Winner: ' + winner;
    }
    else if(moveNum===9){
      status = 'Equal';
    }
    
    else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    if((winner || moveNum === 9) && !this.state.isnewGame){
      return (
        <div className="container " > 
          <div className="board">
            <div > {status} </div> 
            <div className="board-row"> {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)} </div>
            <div className="board-row"> {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)} </div>
            <div className="board-row"> {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)} </div>  
          </div>
              <PlayBtn2   onClick={() => {this.newGame()}} > New Game </PlayBtn2>
        </div>

    );
    }
     else if(!(winner || moveNum === 9) && !this.state.isnewGame){
        return (
              <div className="container board" > 
                    <div > {status} </div> 
                    <div className="board-row"> {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)} </div>
                    <div className="board-row"> {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)} </div>
                    <div className="board-row"> {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)} </div>  
              </div>
          );
    }
    else if (this.state.isnewGame){
        return(
                <div>                   
                  <div className="container"> Welcome </div>
                  <img  className="picture" src={ticPic} alt="ticPic"  />
                    <div className="container">
                      <PlayBtn2 onClick={() => {this.setState({isnewGame : false});}} > Play Game</PlayBtn2>
                    </div>
                </div>
        );
    } 
   else{
        return(
          <div>
              <div className="container"> {status} </div> 
              <img  className="picture" src={ticPic} alt="ticPic" />
              <div className="container">
              <PlayBtn2  onClick={() => {this.newGame()}} > New Game </PlayBtn2>
              </div>
          </div>   
        );
    }
  }
}
  export default Board;
 
