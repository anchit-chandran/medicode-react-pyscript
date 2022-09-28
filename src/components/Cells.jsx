import React from 'react'

const Cells = ({ toShow, sectionName, content }) => {

    // console.log(content)

    return (
        <section class={`${sectionName} cell p-lg-4 p-2 m-lg-3 my-3 mx-1 rounded-5 row`}>
            <div className="col cellMainCol">
                <div className="row cellTitleRow justify-content-center align-content-center">
                    <div className="col">
                        <h3 class='cellTitle'>{content.title}</h3>
                    </div>
                </div>
                <div className="row justify-content-center align-content-center">
                    {toShow ? toShow : <></>}
                </div>
            </div>
        </section>
    )
}

export default Cells