import React from 'react'

const StatusMessage = ({winner, current}) => {
    // we have used back tilt commas here in some places.
   // { winner && `Winner is ${winner}` }  *this line in the code should return boolean value:
   const noMovesLeft = current.board.every(el => el !== null);   
    return (
    <h2> 
        { winner && `Winner is ${winner}` } 
        {!winner && 
        !noMovesLeft && 
        `Next player is ${current.isXNext ? 'X' : 'O'}`} 
        {!winner && noMovesLeft &&  'X and O tied'}
        </h2>
    );
};

export default StatusMessage;
