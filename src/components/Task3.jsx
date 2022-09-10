import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Task3 = ({ task }) => {
    return (
        <>
            <div class="row explanationRow">
                <div className="col">
                    <p>Comments are used to explain your code - both for yourself and others. Python will <strong>ignore</strong> this text when running the program.</p>
                    <ul>
                        <li><p>To tell Python what you&#39;re writing is a <em>comment</em>, place a <code>#</code> hashtag at the beginning of the line.</p></li>
                        <li><p>In Google Colab, comments are highlighted in a different colour:</p></li>
                    </ul>
                    <SyntaxHighlighter language="python" style={dracula}>
                        {
                            `# this is a comment

print('This code will run!')
# print('This code WON'T run!')`
                        }
                    </SyntaxHighlighter>

                    <ul>
                        <li><p>For a <em>multi-line comment</em>, you select the relevant lines, and press <kbd>Ctrl</kbd> + <kbd>/</kbd> which toggles those lines as comments. This can also be used if you temporarily want to skip over any parts of your program for testing.</p>
                        </li>
                        <li><p>To establish good habits early, you should write a comment above each line of code, explaining what it does.</p>
                        </li>
                    </ul>

                </div>
            </div >
            <div className="row tasksRow">
                <div className="col-lg-6">
                    <h4>✍ Task 1</h4>
                    <p>In the coding cell below, you can see a bunch of random text which means the code doesn&#39;t work. Let&#39;s fix it:</p>
                    <ol>
                        <li><p><input type="checkbox" /> Comment out the first line by typing <code>#</code> at the beginning.</p></li>
                        <li><p><input type="checkbox" /> Comment out the remaining non-code text at once by highlighting and using <kbd>Ctrl</kbd> + <kbd>/</kbd> (or <code>CMD + /</code> on Macs).</p></li>
                        <li><p><input type="checkbox" /> Uncomment the final <code>print()</code> statement.</p></li>
                        <li><p><input type="checkbox" /> Run your code - it should be working!</p></li>
                    </ol>
                    <details>

                        <summary><font color='red'><b>Click&nbsp;for&nbsp;SOLUTION</b></font></summary>

                        <code>python
                            # hi

                            # welcome to

                            # Coding for Medics

                            # with Albert and Anchit!

                            print(&quot;Well done! You&#39;re beginning to learn how to properly write code!&quot;)</code>

                    </details>
                </div>
                <div className="col">
                    <py-repl>
print('ehlo')
print('h')
                    </py-repl>
                    <div id={`output3`} class=""></div>
                    <div id={`err-div3`}></div>
                </div>
            </div>
        </>
    )
}

export default Task3