import React from 'react';

const StatusMessage = ({winner, current}) => {
    // we have used back tilt commas here in some places.
   // { winner && `Winner is ${winner}` }  *this line in the code should return boolean value:
   const noMovesLeft = current.board.every(el => el !== null);   
    return (
    <div className ="status-message"> 
        { winner && (
        <> 

         winner is {' '} 
         <span className ={winner === 'X' ? 'text-green' : 'text-orange'}>
           {winner}
         </span>
        </> //(<></>)- these are just react fragments
        )} 
        {!winner && !noMovesLeft && (
         <>
          Next player is {' '} 
            <span className ={current.isXNext ? 'text-green' : 'text-orange'}>
             {current.isXNext ? 'X' : 'O'} 
            </span>
         </>
         )} 
        {!winner && noMovesLeft &&  (
            <>
             <span className = "text-green">X</span> and{' '}
             <span className ="text-orange">O</span> tied
            </>
    
        )}
    </div>
    );
};

export default StatusMessage;
