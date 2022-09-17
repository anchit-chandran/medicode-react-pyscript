import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSnipp = () => {
    return (
        <SyntaxHighlighter
            language='python'
            style={dracula}
            wrapLongLines={true}
            showLineNumbers={true}>
            {`age = 24
name = Anchit
print(age)
print(name)
#By the way, Python treats ignores new lines for code surrounded by parentheses so this print function does the exact same thing!
print(age, name)`}
        </SyntaxHighlighter>
    )
}

export default CodeSnipp