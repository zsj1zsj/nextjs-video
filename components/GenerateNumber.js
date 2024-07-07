import { useState } from "react";

const GenerateNumber = () => {
    const [text, setText] = useState('');
    const [numbers, setNumbers] = useState([]);
    const generateNumber = (length) => {
        let num = ''
        length = parseInt(length);

        for (let i = 0; i < length; i++) {
            num += Math.floor(Math.random() * 10);
        }

        return num;
    };

    const handleOnChange = (event) => {
        const textValue = event.target.value;
        const newNumbers = [];

        if (!isNaN(textValue) && textValue.length >= 1 && textValue.length <= 2) {
            setText(textValue);
            const count = 5

            for (let i = 0; i < count; i++) {
                const num = generateNumber(textValue);
                newNumbers.push(num);
            }
        } else {
            setText(''); // 重置文本框
            setNumbers([]); // 重置生成的数字列表
        }

        setNumbers(newNumbers);
    }

    // 处理输入框获得焦点的事件，全选文本
    const handleFocus = (event) => {
        event.target.select();
    };

    return (
        <div>
            <input type="text" style={{ width: '30px' }} value={text} onFocus={handleFocus} onChange={handleOnChange} />
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li> // 使用每个number作为列表项的内容
                ))
                }
            </ul>
        </div>
    );
}

export default GenerateNumber;