import React from "react"

export default function ReviewModal(props) {
    const [form, setForm] = React.useState({
        name: '',
        review: ''
    })

    function handleClick(event) {
        const {name, value} = event.target
        setForm(prev =>{
            return {
                ...prev,
                [name] :value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.close()
    }

    return (
        <div className="overlay" >
            {props.modal &&
            <div className="modal-container" >
                <form className='modal-info-review' onSubmit={handleSubmit}>
                    <button onClick={props.close} className='closebtn'> X </button>
                    <h3>Name</h3>
                    <input type='text' placeholder='Enter your name' value={form.name} name='name' onChange={handleClick}/>
                    <h3>Review</h3>
                    <textarea type='textarea' placeholder='Enter your Comment' value={form.review} name='review' onChange={handleClick} />
                    <button>Submit</button>
                </form>
            </div>}
        </div>
    )
}