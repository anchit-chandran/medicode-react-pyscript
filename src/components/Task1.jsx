import React from 'react'
import PyReplComponent from './PyReplComponent'

const Task1 = ({ }) => {
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
                    <PyReplComponent />
                </div>
            </div >
        </>
    )
}

export default Task1