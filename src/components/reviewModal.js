import React from "react"



export default class ReviewModal extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name: '',
            review: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleClick(event) {
        const {name, value} = event.target
        this.setState({
                [name] :value
            })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch("https://poolinc.herokuapp.com/api/reviews",
            {
                method: "POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    "name" : this.state.name,
                    "review" : this.state.review,
                })
            })
        this.setState({
            name: '',
            review:""
        })
        this.props.close()
    }
    render() {
        return (
            <div className="overlay" >
                {this.props.modal &&
                <div className="modal-container" >
                    <form className='modal-info-review' onSubmit={this.handleSubmit}>
                        <button onClick={this.props.close} className='closebtn'> X </button>
                        <h3>Name</h3>
                        <input type='text' placeholder='Enter your name' value={this.state.name} name='name' onChange={this.handleClick}/>
                        <h3>Review</h3>
                        <textarea type='textarea' placeholder='Enter your Comment' value={this.state.review} name='review' onChange={this.handleClick} />
                        <button>Submit</button>
                    </form>
                </div>}
            </div>
        )
    }
}