import telephone from '../img/telephone.jpg';

export default function Contact() {
    return (
        <div id="contact">
            <img src={telephone} className='telephone' alt='contact Background' />
            <h2 className='contact-header'>We would like to hear from you</h2>

            <div className='contact'>
                <a href="mailto:danielonowoni1@gmail.com?subject=I want a clean pool&body=Contacting you to clean my pipes" >poolinc@gmail.com</a><br></br>
                <a href="tel:09133117289">+234 913 3117 289</a><br></br>
                <a href="socialmedia">Twitter</a><br></br>
                <a href="socialmedia">Instagram</a>
            </div>
        </div>
    )
}