import React, { useState } from 'react'

const TextInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleButtonClick = () => {
        alert(inputValue)
    };


  return (
    <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Show Text</button>
    </div>
  )
}

export default TextInput