import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // theme state

  const takeInput = (value) => setInput((prev) => prev + value);

  const calculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => setInput('');

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Theme styles
  const appStyle = {
    minHeight: '100vh',
    backgroundImage: isDarkMode
      ? 'linear-gradient(to right, #2c3e50, #4ca1af)' // Dark mode
      : 'radial-gradient(circle farthest-corner at 10% 20%, rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90%)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background 0.4s ease'
  };

  const calcStyle = {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
    color: isDarkMode ? '#f5f5f5' : '#000000',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    width: '100%',
    maxWidth: '400px'
  };

  const inputStyle = {
    width: '100%',
    fontSize: '24px',
    padding: '10px',
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#f5f5f5' : '#000',
    border: 'none',
    borderBottom: '2px solid #888',
    outline: 'none'
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? '#444' : '#ddd',
    color: isDarkMode ? '#fff' : '#000',
    margin: '4px',
    padding: '10px 20px',
    fontSize: '18px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s ease'
  };

  return (
    <div style={appStyle}>
      <div style={calcStyle}>
        <button onClick={toggleTheme} style={{ ...buttonStyle, marginBottom: '15px' }}>
          {isDarkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="0"
          style={inputStyle}
        />

        <div className="flex" style={{ marginTop: '10%' }}>
          {[1, 2, 3].map((n) => (
            <button key={n} style={buttonStyle} onClick={() => takeInput(n.toString())}>{n}</button>
          ))}
          <button style={{ ...buttonStyle, backgroundColor: '#20dbd9', color: 'black' }} onClick={clearInput}>CE</button>
        </div>

        <div className="flex" style={{ marginTop: '10%' }}>
          {[4, 5, 6].map((n) => (
            <button key={n} style={buttonStyle} onClick={() => takeInput(n.toString())}>{n}</button>
          ))}
          <button style={buttonStyle} onClick={() => takeInput('-')}>-</button>
        </div>

        <div className="flex" style={{ marginTop: '10%' }}>
          {[7, 8, 9].map((n) => (
            <button key={n} style={buttonStyle} onClick={() => takeInput(n.toString())}>{n}</button>
          ))}
          <button style={buttonStyle} onClick={() => takeInput('+')}>+</button>
        </div>

        <div className="flex" style={{ marginTop: '10%' }}>
          <button style={buttonStyle} onClick={() => takeInput('(-1)*')}>+/-</button>
          <button style={buttonStyle} onClick={() => takeInput('0')}>0</button>
          <button style={buttonStyle} onClick={() => takeInput('.')}>.</button>
          <button style={buttonStyle} onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
