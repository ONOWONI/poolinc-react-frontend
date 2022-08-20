import React from "react"

export default function Modal(props) {
    return (
        <div className="overlay" >
            {props.openModal &&
            <div className="modal-container" >
               <div className='modal-img'>
                    <img src={`../img/${props.modal.image}`}  alt='modal pic' />
                </div>
                <div className='modal-info'>
                        <button onClick={props.closebtn} className='closebtn'> X </button>
                    <div className="modal-stats">
                        <h4 className='modal-name'>{props.modal.name}</h4>
                        <div className='modal-price-qty'>
                            <span className='modal-price'>${props.modal.price}</span>
                            <span className='modal-qty'>{props.modal.quantity} Pieces</span>
                        </div>
                        <hr></hr>
                    </div>
                    <p className='modal-desc'>{props.modal.desc}</p>
                    <div className="buy"><button>BUY</button></div>
                </div>
            </div>}
        </div>
    )
}