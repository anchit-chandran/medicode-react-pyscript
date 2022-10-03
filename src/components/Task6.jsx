import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import VariablesImg from '../resources/imgs/variables.png'
import Diagram from './Diagram';
import PyReplComponent from './PyReplComponent';

const Task6 = ({ replNum, task }) => {
    const content = (<ul>
        <li><p>On the left of the <code>=</code> sign, you <em>define</em> the variable name - in this case, our variable is called <code>name</code>.</p></li>
        <li><p>On the right of the <code>=</code> sign, you write the value you want to <em>assign</em> to the variable  - in this case, the string <code>&#39;Anchit&#39;</code>.</p></li>
    </ul>)
    return (
        <>
            <div class="row explanationRow">
                <div className="col">
                    <p>Python requires variables to be named in certain ways:</p>
                    <ol>
                        <li><p>There can be <em>no spaces</em> in the name: <code>my Age = 10</code> would throw an error.</p></li>
                        <li><p>By convention, variables usually start with lowercase letters (<em>but this isn&#39;t necessary - </em><code>Myage</code><em> would still work</em>)</p></li>
                        <li><p>If you have multiple words in your variable name, you can separate them in certain ways to improve readability:</p>
                            <ul>
                                <li><p><b>Underscores</b>: <code>patient_details_from_hospital</code> - you use underscores to separate words. This is the &#39;Pythonic&#39; way to name variables and is generally preferred.</p></li>
                                <li><p><b>Camel Case</b>: <code>patientDetailsFromHospital</code> - the first letter of the second word onwards is capitalised.</p></li>
                            </ul>
                        </li>
                        <li><p>Names are <b>case-sensitive</b>. These would all be different variables: <code>BloodPressure</code>,<code>bloodpressure</code>,<code>blOOdpRessure</code></p></li>
                        <li><p>You can put numbers into the variable name: <code>patient1</code>,<code>patient2</code></p>.
                            <ul>
                                <li><p><em>NOTE: the variable can&#39;t <b>start</b> with a number - this will throw a <code>SyntaxError</code>.</em></p></li>
                            </ul>
                        </li>
                        <li><p>The names should describe what is being stored.</p>
                            <ul>
                                <li><p>They shouldn&#39;t be too short: <code>a</code></p></li>
                                <li><p>They shouldn&#39;t be too long: <code>a_very_very_unnecessarily_long_variable_name_that_perfectly_describes_what_is_being_stored</code></p></li>
                                <li><p>You will get a feel for good names very quickly as you gain more experience!</p></li>
                            </ul>
                        </li>
                    </ol>


                </div>
            </div >
            <div className="row tasksRow px-0 px-lg-1">
                <div className="col-lg-6">
                    <h5>✍ Task 1 - Fix these variable names</h5>
                    <ol>
                        <li><p><input type="checkbox" /> Copy and paste the code below. Fix the variable names so the code runs!</p></li>
                    </ol>
                    <SyntaxHighlighter
                        language='python'
                        style={dracula}
                        wrapLongLines={true}
                        showLineNumbers={true}>
                        {`why will this not work = "I don't know!" # fix me!

23adamKay = 'The real Adam Kay' # fix me!

G M C = 'uh oh' # fix me!

print(why_will_this_not_work)
print(adamKay23)
print(gmc)`}
                    </SyntaxHighlighter>
                    <details>

                        <summary><font color='red'><b>Click&nbsp;for&nbsp;SOLUTION</b></font></summary>

                        <SyntaxHighlighter
                            language='python'
                            style={dracula}
                            wrapLongLines={true}
                            showLineNumbers={true}>
                            {`why_will_this_not_work = "I don't know!" # fix me!

adamKay23 = 'The real Adam Kay' # fix me!

g_m_c = 'uh oh' # fix me!

print(why_will_this_not_work)
print(adamKay23)
print(gmc)`}
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

export default Task6