import { useState, useEffect } from "react";
import ChatGPTClient from './ChatGPTClient.js';

const Results = ({ prompt }) => {
    const [text, setText] = useState("thinking...");
    const [ done, setDone ] = useState(false);
    console.log(prompt)

    const chat = new ChatGPTClient();

    const runTest = async () => {
        setDone(true);
        const result = await chat.sendPrompt(prompt);
        setText(result)
    };

    useEffect(()=>{
        setDone(false);
        console.log('i worked')
    },[prompt])

    if (!done) {
        runTest()
    }

    return (
        <div className="results flex flex-col bg-emerald-200 p-4 rounded-lg">
            <h2 className="text-3xl mb-4">After deep consideration</h2>
            <p>{text}</p>
        </div>
    );
};

export default Results;