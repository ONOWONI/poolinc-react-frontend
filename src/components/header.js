import logo from '../img/poolinctrans.png'


export default function Header() {
    return (
        <div className='header-container' id='header'>
            <img src={logo} alt='logo' className='header-logo'/>
            <div className='link-container'>
                <ul>
                    <li><a href='#header'>Home</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#shop'>Store</a></li>
                    <li><a href='#pros'>Professionals</a></li>
                    <li><a href='#reviews'>Reviews</a></li>
                </ul>
            </div>
            <a href='#contact' className='contact-btn'>
                <div className='header-contact'>Contact Us</div>
            </a>
        </div>
    )
}