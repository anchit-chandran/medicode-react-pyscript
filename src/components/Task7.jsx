import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import VariablesImg from '../resources/imgs/variables.png'
import Diagram from './Diagram';
import PyReplComponent from './PyReplComponent';

const Task7 = ({ replNum, task }) => {

    return (
        <>
            <div class="row explanationRow">
                <div className="col">
                    <p>You can update the value stored in your variables by simply typing the variable name and the new value:</p>
                    <SyntaxHighlighter
                        language='python'
                        style={dracula}
                        wrapLongLines={true}
                        showLineNumbers={true}>
                        {`patient_name = 'Anchit'
print(patient_name)

patient_name = 'Bruno'
print(patient_name)

>>>'Anchit'
>>>'Bruno'`}
                    </SyntaxHighlighter>
                    <ol>
                        <li><p>We define a variable called <code>patient_name</code> and assign it the value <code>&#39;Anchit&#39;</code>.</p></li>
                        <li><p>After printing out the value stored in <code>patient_name</code>, we update the variable by reassigning it the value of <code>Bruno</code>.</p></li>
                    </ol>
                </div>
            </div >
            <div className="row tasksRow">
                <div className="col-lg-6">
                    <h5>✍ Task 1 - Update these variables</h5>
                    <ol>
                        <li><p><input type="checkbox" />On Line 1, define a variable <code>age_1</code> and assign it any age as an integer.</p><ul>
                            <li><p><em>Make sure you type the name exactly, including the underscore!</em></p></li>
                        </ul>
                        </li>
                        <li><p><input type="checkbox" />On Line 2, define a variable <code>age_2</code> and assign it a different age.</p></li>
                        <li><p><input type="checkbox" />On Line 3, update the age stored in <code>age_1</code>.</p></li>
                        <li><p><input type="checkbox" />Finally, print out <code>age_1</code> and <code>age_2</code>.</p></li>
                    </ol>


                    <details>

                        <summary><font color='red'><b>Click&nbsp;for&nbsp;SOLUTION</b></font></summary>

                        <SyntaxHighlighter
                            language='python'
                            style={dracula}
                            wrapLongLines={true}
                            showLineNumbers={true}>
                            {`age_1 = 24
age_2 = 84
age_1 = 33
print(age_1)
print(age_2)

>>> 33
>>> 84`}
                        </SyntaxHighlighter>

                    </details>
                </div>
                <div className="col">
                    <div>
                        <py-repl
                            id={`my-repl7-1`}
                            auto-generate='false'
                            std-out={`output7-1`}
                            std-err={`err-div`}>
                        </py-repl>
                        <div id={`output7-1`} class="replOutput"></div>
                    </div>
                </div>
            </div >
            <div className="row tasksRow py-4">
                <div className="col-lg-6">
                    <h5>✍ Task 2 - Variables and maths</h5>
                    <p>We can use the variable names instead of numbers themselves.</p>
                    <ol>
                        <li><p><input type="checkbox" /> Define a variable called <code>dob</code> and save your year of birth as an integer e.g. <code>1997</code></p></li>
                        <li><p><input type="checkbox" /> Define a variable called <code>current_year</code> and assign it the current year as an integer.</p></li>
                        <li><p><input type="checkbox" /> Define a variable called <code>age</code> that subtracts <code>dob</code> from <code>current_year</code>.</p></li>
                        <li><p><input type="checkbox" /> Print out <code>age</code>.</p></li>
                    </ol>



                    <details>

                        <summary><font color='red'><b>Click&nbsp;for&nbsp;SOLUTION</b></font></summary>

                        <SyntaxHighlighter
                            language='python'
                            style={dracula}
                            wrapLongLines={true}
                            showLineNumbers={true}>
                            {`dob = 1997
current_year = 2022
age = current_year - dob
print(age)

>>> 24`}
                        </SyntaxHighlighter>

                    </details>
                </div>
                <div className="col">
                    <div>
                        <py-repl
                            id={`my-repl7-2`}
                            auto-generate='false'
                            std-out={`output7-2`}
                            std-err={`err-div`}>
                        </py-repl>
                        <div id={`output7-2`} class="replOutput"></div>
                    </div>
                </div>
            </div >
            <div className="row tasksRow">
                <div className="col-lg-6">
                    <h5>✍ Task 3 - Variables and text</h5>
                    <p>We can use variables to combine different text (or <em>strings</em>) together.</p>
                    <ol>
                        <li><p><input type="checkbox"/> Define a variable <code>first_name</code> and assign it your first name surrounded by single (<code>&#39; &#39;</code>) or double (<code>&quot; &quot;</code>) quotes.</p></li>
                        <li><p><input type="checkbox"/> Define a variable <code>last_name</code> in a similar way.</p></li>
                        <li><p><input type="checkbox"/> Print the following exactly: <code>print(&quot;My name is &quot; + first_name + last_name</code>)</p></li>
                    </ol>



                    <details>

                        <summary><font color='red'><b>Click&nbsp;for&nbsp;SOLUTION</b></font></summary>

                        <SyntaxHighlighter
                            language='python'
                            style={dracula}
                            wrapLongLines={true}
                            showLineNumbers={true}>
                            {`first_name = 'Anchit'
last_name = 'Chandran'
print("My name is " + first_name + last_name)

>>> "My name is AnchitChandran"`}
                        </SyntaxHighlighter>

                    </details>
                </div>
                <div className="col">
                    <div>
                        <py-repl
                            id={`my-repl7-3`}
                            auto-generate='false'
                            std-out={`output7-3`}
                            std-err={`err-div`}>
                        </py-repl>
                        <div id={`output7-3`} class="replOutput"></div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Task7