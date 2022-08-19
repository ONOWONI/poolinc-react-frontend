import React from "react";
import Modal from './modal';


class Shop extends React.Component{
    constructor() {
        super();
        this.state={
            data:[],
            openModal: false,
            ModalData : {
                        name : '',
                        price : 0,
                        quantity : 0,
                        desc : '',
                        image : '',
                    }
        }
    }

    fetchData() {
        fetch('https://poolinc.herokuapp.com/api/products')
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


    handleClick(item) {
        this.setState({
            ModalData:item
        })
        this.setState({
            openModal : true
        })
    }

    closebtn() {
        return this.setState({
            openModal : false
        })
    }


    render() {

        const empdata = this.state.data;
        const data = this.state.ModalData;
        const rows = empdata.map(item => <div key={item.id} className='shop-card' onClick={() => this.handleClick(item)}>
            <div className='flex-img'>
                <img src={`../img/${item.image}`} alt='product pic' />
            </div>
            <div className='card-info'>
                <h4 className='card-name'>{item.name}</h4>
                <div className='price-qty'>
                    <span className='card-price'>${item.price}</span>
                    <span className='card-qty'>{item.quantity} Pieces</span>
                </div>
                <hr></hr>
                <p className='card-desc'>{item.desc}</p>
            </div>
        </div>)
        return (
            <section className='shop' id='shop'>
                <Modal modal={data} openModal={this.state.openModal} closebtn={() => this.closebtn()}/>
                <h3>Store</h3>
                <div className='shop-card-container'>
                    {/* <Modal /> */}
                    {rows}
                </div>
            </section>
        )
    }
}
export default Shop;



