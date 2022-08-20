import React from "react"
import ReviewModal from "./reviewModal"


export default class Reviews extends React.Component{

    constructor() {
        super();
        this.state={
            data:[],
            reviewDict :{
                review : "The poolinc crew are so amazing at their jobs, they came to clean my pool and they did a very amazing job i had to pay double what we agreed on",
                name : "MA NIGGA "
            },
            count :0,
            modal: false
        };
        this.prevClick = this.prevClick.bind(this)
        this.nextClick = this.nextClick.bind(this)
    }

    fetchData() {
        fetch("https://poolinc.herokuapp.com/api/reviews")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                data: data
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    nextClick() {
        var count = this.state.count
        var data = this.state.data
        if (count < data.length -1) {
            this.setState(prev => {
                return {count : prev.count + 1}
            })
        } else {
            this.setState({count: 0})
        }
        this.setState({reviewDict : this.state.data[this.state.count]})
        console.log(this.state.count);
    }


    prevClick() {
        if (this.state.count > 0 ) {
            this.setState(prev => {
                return {count : prev.count - 1}
            })
        } else {
            this.setState({count : this.state.data.length -1})
        }
        this.setState({reviewDict : this.state.data[this.state.count]})
        console.log(this.state.count);
    }



    closeModal(){
        this.setState({modal : false})
    }
    render() {
        return (
            <div id="reviews" >
                <h2>Feedback from our clients</h2>
                <div className="review-container">
                    <button id="left" onClick={this.prevClick}>Prev</button>
                    <div className="review-card">
                        <blockquote className='review-text'>
                            {this.state.reviewDict.review}
                        </blockquote>
                        <cite className="review-owner">~ {this.state.reviewDict.name}~</cite>
                    </div>
                    <button id="right" onClick={this.nextClick}>Next</button>
                </div>
                <button className='header-contact' id='review-btn' onClick={() => this.setState({modal : true})}>Submit your review</button>
                <ReviewModal modal={this.state.modal} close={() => this.closeModal()} />
            </div>
        )
    }
}