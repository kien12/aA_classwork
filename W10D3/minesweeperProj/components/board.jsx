import React from 'react';
import Tile from './tile'

class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const mappedBoard = this.props.board.grid.map((row, idx) =>{
            return (
                <div key={`row-${idx}`}>
                    {
                        row.map((tile, idx) =>{
                            return (<div key={`col-${idx}`}>
                                <Tile tile={tile} updateGame={this.props.updateGame}/>
                            </div>
                            )
                        })
                    }
                </div>
            )
        })
        return(
            <div className="row">
                {mappedBoard}
            </div>
        )
    }
    
}

export default Board;