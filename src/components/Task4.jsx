import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PyReplComponent from './PyReplComponent';

const Task4 = ({ replNum, task }) => {
    return (
        <>
            <div class="row explanationRow">
                <div className="col">
                    You can use Python like a calculator!

                    In this exercise, we will cover the important arithmetic operators.
                    <SyntaxHighlighter language="python" style={dracula}>
                        {`# Adding
2 + 2

# Subtracting
2 - 2

# Multiplying
6 * 2

# Dividing
6 / 2

# Powers
2 ** 3`}
                    </SyntaxHighlighter>
                </div>
            </div >
            <div className="row tasksRow">
                <div className="col-lg-6">
                    <h5>✍ Task 1</h5>
                    <ol>
                        <li><p><input type="checkbox" /> On Line 1, print out 300 x 53.</p></li>
                        <li><p><input type="checkbox" /> On Line 2, print out 23 + 40 x 8.</p></li>
                        <li><p><input type="checkbox" /> On Line 3, print out the square root of 25.</p></li>
                        <li><p><input type="checkbox" /> On Line 4, print out 39 - 50 + 12 x 39 ÷ (5 to the power of 4).</p></li>
                    </ol>
                    <details>

                        <summary><font color='red'><b>Click&nbsp;for&nbsp;SOLUTION</b></font></summary>

                        <SyntaxHighlighter language="python" style={dracula}>
                            {`print(300*53)
print(23+40*8)
print(25**0.5)
print(39-50+12*39/(5**4))`}
                        </SyntaxHighlighter>
                    </details>
                </div>
                <div className="col">
                    <PyReplComponent replNum={replNum}></PyReplComponent>
                </div>
            </div>
        </>
    )
}

export default Task4