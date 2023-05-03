import React, { useState } from 'react'

const ColorChanger = () => {

    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleClick = () => {
    
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setBackgroundColor(randomColor)
    }
  
    return (
    <div style={{backgroundColor}}>
        <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default ColorChanger