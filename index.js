import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newItem = {
      id: Date.now(),
      value: inputValue.trim(),
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setInputValue('');
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Добавить</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
