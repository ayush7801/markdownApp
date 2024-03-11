import React, { useState } from 'react'

function useMarkdownEditor() {
    const [data, setData] = useState("");
    const handleChange = (text) => {
        console.log(text);
        setData(text);
    }
    
    return {data, handleChange};
}

export default useMarkdownEditor