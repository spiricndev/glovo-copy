import './header.css'
import LogoImage from "../../assets/images/glovo.png"
import { Form } from 'react-bootstrap';


const Header = () => {
    return (
        <div className='container'>
            <div className='container__logo'>
                <label className='container__logo__style'>Glovo</label>
            </div>
            <div className='container__search'>
                <text>Search bar</text>
            </div>
            <div className='container__button'>
               <button className='container__button__style'>Zapocni</button>
            </div>
        </div>
    )
}

export default Header;