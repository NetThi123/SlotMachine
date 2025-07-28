import React, { useState } from 'react';

const GameStart = () => {
    const [showInputs, setShowInputs] = useState(false);

    let contentDisplayed; 
    
    if(showInputs){
        contentDisplayed = (
            <div>
                <input
                    type = "number"
                    placeholder="Bet amount per line: "
                    style={{
                        marginTop: '5px',
                        padding: '8px 16px',
                        backgroundColor: 'white',
                        border: '0.75px solid black',
                        color: 'white',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '10px',
                        fontSize: '1rem'
                    }}
                />
                <input
                    type = "number"
                    placeholder = "Lines to bet on (1-3): "
                    style={{
                        marginTop: '5px',
                        padding: '8px 16px',
                        backgroundColor: 'white',
                        color: 'white',
                        border: '0.75px solid black',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '10px',
                        fontSize: '1rem'
                    }}
                />
                <br /> 
                <button
                    style = {{
                        marginTop: '10px'
                    }}
                >Lets Roll!</button>
            </div>
        );
    }
    else{
        contentDisplayed = (
            <button onClick = { () =>setShowInputs(true)}>Lets Play!</button>
        );
    }

    return <div>{contentDisplayed}</div>;
};

export default GameStart; 