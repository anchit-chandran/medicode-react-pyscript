import React from 'react'

import PyReplComponent from './PyReplComponent';

const Task1 = ({ replNum, task }) => {
    console.log(replNum)
    return (
        <>
            <div class="row explanationRow">
                <div class="col">
                </div >
            </div >
            <div className="row tasksRow">
                <div className="col-lg-6">
                    <h5>✍ Task 1</h5>
                    <ol>
                        <li><p><input type="checkbox" /> Type your name in the coding cell and run the cell.</p></li>
                        <ul><li><p>You will get an error. Don't worry, errors in programming are everywhere and you should get comfortable seeing them.</p></li></ul>
                    </ol>
                </div>
                <div className="col">
                    <PyReplComponent replNum={replNum}></PyReplComponent>
                </div>
            </div>
        </>
    )
}

export default Task1