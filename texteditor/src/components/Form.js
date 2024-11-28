import React from 'react'

export default function Form(props) {
    return (
        <div className='container'>
            <div class="mb-3">
                <h1 class="form-label">{props.th}</h1>
                
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button type="button" class="btn btn-success">Success</button>
        </div>
    )
}
