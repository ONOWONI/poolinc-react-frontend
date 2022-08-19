import poster from '../img/pool4.jpg'
import poster2 from '../img/pool2.jpg'

export default function Services() {
    return (
        <section className='services' id='services'>
            <h2>What We Do</h2>
            <div className='service-card'>
                <div className='service-text'>
                    <h1>We will clean your pool for money</h1>
                    <p>we are experts in pool cleaning tech</p>
                </div>

                <div className='service-img right'>
                    <img src={poster} alt='Clean Pool' className='border-left' />
                </div>
            </div>
            <div className='service-card left-img'>
                <div className='service-img'>
                    <img src={poster2} alt='Clean Pool 2' className='border-right' />
                </div>
                <div className='service-text-right'>
                    <h1>Call us to organize your pool parties</h1>
                    <h1>for money</h1>
                    <p>we are experts in party tech</p>
                </div>

            </div>
        </section>
    )
}