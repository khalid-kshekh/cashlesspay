import React from 'react'
import '../../Css/Business/B_Sixth.css'

const B_Sixth = () => {
    return (
        <div className='b-sixth'>
            <div className='b-main-sixth'>
                <div className='b-sixth-main-handing'>
                    <h1>Frequently asked questions</h1>
                </div>
               
                    <div className="container">

                        <div className="accordions">
                            <div className="accordion">
                                <input type="checkbox" id="question-1" />
                                <label for="question-1" className="accordion__header" id="question-1">How do I open a business account? </label>
                                <div className="accordion__content">
                                    <p>To open a business account, just send us an email with a brief description of your business and how we can assist you. One of our team members will get in touch to discuss your needs and help you get started.</p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="question-2" />
                                <label for="question-2" className="accordion__header">Are there any restrictions on who can apply?
                                </label>
                                <div className="accordion__content">
                                    <p> No, all businesses are welcome to apply.</p>
                                </div>
                            </div>

                            <div className="accordion">
                                <input type="checkbox" id="question-3" />
                                <label for="question-3" className="accordion__header"> Are there any costs related to opening a business account? </label>
                                <div className="accordion__content">
                                    <p>There are no charges to setup an account.</p>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
    )
}

export default B_Sixth