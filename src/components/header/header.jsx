import logo from  '../../assets/logo.png' ;
import './style.css'
const header = () => {
    return (<>
    <div className='navbar'>
            <img src={logo}  alt="logo" className='logo' />
            <ul className='navigation'>
                <li>Service</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
                <li>About</li>
            </ul>
            <div className='buttons'>
                <button className='secondary'>Login</button>
                <button className='primary'>Sign Up</button>
            </div>
            
        </div>

    </>
    

    );
}
export default header;