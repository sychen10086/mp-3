import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const addition = () => setResult(parseFloat(num1) + parseFloat(num2));
    const subtraction = () => setResult(parseFloat(num1) - parseFloat(num2));
    const multiplication = () => setResult(parseFloat(num1) * parseFloat(num2));
    const division = () => setResult(parseFloat(num1) / parseFloat(num2));
    const power = () => setResult(Math.pow(parseFloat(num1), parseFloat(num2)));

    const clearFields = () => {
        setNum1('');
        setNum2('');
        setResult(null);
    };

    return (
        <div id="calculator">
            <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
            />
            <button onClick={addition}>+</button>
            <button onClick={subtraction}>-</button>
            <button onClick={multiplication}>*</button>
            <button onClick={division}>/</button>
            <button onClick={power}>Power</button>
            <button onClick={clearFields}>Clear</button>
            <div id="result-box">
                <h3 id="output">Result: {result !== null ? result : 'Result will be displayed here'}</h3>
            </div>
        </div>
    );
};

export default Calculator;
