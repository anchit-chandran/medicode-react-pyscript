import React from 'react'

import MainLogo from '../resources/imgs/medicode-logo-main.svg' 

const HeroHead = () => {
    return (
        <div class="row hero-main-row vh-100 align-items-center">
            <div class="col">
                <div class="px-4 py-5 my-5 text-center">
                    <img class="d-block mx-auto mb-4" src={MainLogo} alt="" width="100"
                        height="100" />
                    <h1 class="display-1 hero-title fw-bold medicode-title"> <span class="first">MEDI</span><span
                        class="second">CODE</span></h1>
                    <div class="col-lg-6 mx-auto">
                        <div class="row">
                            <div class="col">
                                <p class="lead mb-4 hero-title"><em>Teaching clinicians to code</em></p>
                            </div>
                        </div>
                        <div class="row my-4">
                            <div class="col tutorial-1-subheading">
                                <p class="lead hero-title">Tutorial 1:</p>
                                <p class="lead hero-title">python variables and syntax</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroHead