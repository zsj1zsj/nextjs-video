import { useState } from "react";
import JSONPretty from 'react-json-pretty';

function JsonFormat() {
    const [text, setText] = useState('{"employee":{"name":"sonoo","salary":56000,"married":true}}');
    const [formattedJson, setFormattedJson] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setText(value); // 更新输入的 JSON 字符串
        
        let temp = JSON.stringify(value, null, " ");
        temp = temp.replace('\\','');
        setFormattedJson(temp);
    };

    return (
        <div>
            <h1>Json Formatter</h1>
            <textarea rows='15' cols='50' onChange={handleInputChange} value={text} />
            <textarea rows='15' cols='50' onChange={handleInputChange} value={formattedJson} />
            <JSONPretty
                    json={text}
                    theme="monikai"
                />
        </div>
    );
}


export default JsonFormat;