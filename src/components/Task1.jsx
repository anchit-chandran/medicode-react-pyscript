import React from 'react'

const Task1 = ({ task }) => {
    return (
        <>
            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col">
                            <ol>
                                <li><p><input type="checkbox" /> Type your name in the coding cell and run the cell.</p></li>
                                <ul><li><p>You will get an error. Don't worry, errors in programming are everywhere and you should get comfortable seeing them.</p></li></ul>
                            </ol>
                        </div>
                    </div >
                </div >
                <div className="col">
                    <py-repl id={`my-repl1`} auto-generate="false" std-out="output1" std-err="err-div1">
                    </py-repl>
                    <div id="output1" class=""></div>
                    <div id="err-div1"></div>
                </div>
            </div >
        </>
    )
}

export default Task1