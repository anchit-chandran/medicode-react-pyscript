import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import VariablesImg from '../resources/imgs/variables.png'
import Diagram from './Diagram';
import PyReplComponent from './PyReplComponent';

const Task5 = ({ replNum, task }) => {
    const content = (<ul>
        <li><p>On the left of the <code>=</code> sign, you <em>define</em> the variable name - in this case, our variable is called <code>name</code>.</p></li>
        <li><p>On the right of the <code>=</code> sign, you write the value you want to <em>assign</em> to the variable  - in this case, the string <code>&#39;Anchit&#39;</code>.</p></li>
    </ul>)
    return (
        <>
            <div class="row explanationRow">
                <div className="col">
                    <p>Variables are fundamental to programming, not just in Python. They store information, allowing you to write complicated code and prevent you repeating yourself. </p>
                    <p>You <em>define</em> a variable like so:</p>

                    <Diagram src={VariablesImg} content={content} diagCaption='Variable Anatomy' />

                </div>
            </div >
            <div className="row tasksRow px-0 px-lg-1">
                <div className="col-lg-6">
                    <h5>✍ Task 1 - Creating your own variables</h5>
                    <ol>
                        <li><p><input type="checkbox" /> Define a variable called <code>age</code> and assign it the value of your age as an <em>integer</em>.</p></li>
                        <li><p><input type="checkbox" /> Define a variable called <code>name</code> and assign it the value of your name as a string (i.e. surrounded by either <code>&#39; &#39;</code> or <code>&quot; &quot;</code>).</p></li>
                        <li><p><input type="checkbox" /> Print out both variables.</p></li>
                    </ol>
                    <details>

                        <summary><font color='red'><b>Click&nbsp;for&nbsp;SOLUTION</b></font></summary>

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

                    </details>
                </div>
                <div className="col-12 col-md-6 px-0 px-lg-1">
                    <PyReplComponent replNum={replNum}></PyReplComponent>
                </div>
            </div>
        </>
    )
}

export default Task5