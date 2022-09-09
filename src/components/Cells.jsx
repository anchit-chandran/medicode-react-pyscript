import React from 'react'

const Cells = ({ toShow, sectionName, content }) => {

    // console.log(content)

    return (
        <section class={`${sectionName} cell p-4 m-3 rounded-5 row`}>
            <div className="col cellMainCol">
                <div className="row cellTitleRow">
                    <div className="col">
                        <h3 class='cellTitle'>{content.title}</h3>
                    </div>
                </div>
                <div className="row">
                    {toShow ? toShow : <></>}
                </div>
            </div>
        </section>
    )
}

export default Cells