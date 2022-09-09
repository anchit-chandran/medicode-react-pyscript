import React from 'react'

const Task2 = ({task}) => {
    return (
        <>
            <div class="row explanationRow">
                <div class="col">
                    <p>To get our program to print out text, we actually need to use the in-built <code>print()</code> function.</p>
                    <pre><code class="lang-python"><span class="hljs-function"><span class="hljs-title">print</span><span class="hljs-params">(<span class="hljs-string">'Hello world!'</span>)</span></span>
                    </code></pre>
                    <pre><code><span class="hljs-meta">&gt;&gt;</span>&gt; Hello world!
                    </code></pre><ul>
                        <li><p>This function takes in any text surrounded by <code>&#39; &#39;</code> or <code>&quot; &quot;</code> and prints the message to the screen.</p></li>
                    </ul>
                </div>
            </div>
            <div className="row tasksRow">
                <div className="col-lg-6">
                    <ol>
                        <li><p><input type="checkbox" /> Use the <code>print()</code> function to print the message <code>&quot;Hello, my name is NAME&quot;</code> where <code>NAME</code> is your name.</p></li>
                    </ol>
                    <p>Some important points to note:</p>
                    <ul>
                        <li><p>Spaces between characters on the same line technically don&#39;t matter as the code will still run. </p></li>
                        <li><p>However, <code>print(&#39;Anchit&#39;)</code> is more visually more clear than <code>print ( &#39; Anchit &#39; )</code>.</p></li>
                        <li><p>Moreover, Google Colab&#39;s text highlighting which helps identify keywords in your code may not work if you add spaces where they&#39;re not needed.</p></li>
                        <li><p>The last line&#39;s output will always be shown regardless of whether you print it out (but get into good habits by always using <code>print</code>).</p></li>
                    </ul>
                    <details>

                        <summary><font color='red'><b>Click&nbsp;for&nbsp;SOLUTION</b></font></summary>

                        <code>python
                            print(&#39;Hello, my name is Anchit&#39;)</code>

                    </details>
                </div>
                <div className="col">
                    <py-repl id={`my-repl2`} auto-generate="false" std-out="output2" std-err="err-div2">
                    </py-repl>
                    <div id={`output2`} class=""></div>
                    <div id={`err-div2`}></div>
                </div>
            </div>
        </>
    )
}

export default Task2