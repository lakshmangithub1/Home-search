import {Link} from 'react-router-dom';
import './index.css' 

const Header = () => {
    return(
        <div>
            <nav className='nav-container'>
                <div className='img'> 
                    <img src="https://res.cloudinary.com/dblbmd6ik/image/upload/v1681143978/free-logo-eybn02mi7a-h2jtexu61o_kjpljl.jpg"  alt="logo-img" className='logo-img' />
                </div> 
                <ul className='links-order'> 
                    <Link to="/" className='nav-link'>
                        <li>Home</li>
                    </Link>
                    <Link to="/rent" className='nav-link'>
                        <li>Rent</li>
                    </Link>
                    <Link to="/sale" className='nav-link'>
                        <li>Sale</li>
                    </Link>
                    <Link to="/about" className='nav-link'>
                        <li>About</li>
                    </Link>
                    
                    
                    
                    

                </ul>
            </nav>
        </div>
    )
}


export default Header