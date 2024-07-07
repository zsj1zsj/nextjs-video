import React, { useState, useEffect } from 'react';

const Gemini = () => {
  const [text, setText] = useState('');
  const [model, setModel] = useState(null);
  const [response, setResponse] = useState('');

  // 在组件挂载后创建文本会话
  useEffect(() => {
    const createModel = async () => {
      try {
        const createdModel = await window.ai.createTextSession();
        setModel(createdModel);
      } catch (error) {
        console.error('Error creating text session:', error);
      }
    };

    createModel();
  }, []); // 空依赖数组意味着这个 effect 只运行一次

  // 处理文本输入变化
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // 处理提交文本以获取响应
  const handleOnSubmit = async () => {
    if (model) {
      try {
        const res = await model.prompt(text);
        setResponse(res);
      } catch (error) {
        console.error('Error prompting model:', error);
      }
    }
  };

  return (
    <div>
        <h1>Gemini</h1>
      <textarea rows='15' cols='50' value={text} onChange={handleInputChange} />
      <button onClick={handleOnSubmit}>Submit</button>
      {response && <div>{response}</div>}
    </div>
  );
};

export default Gemini;