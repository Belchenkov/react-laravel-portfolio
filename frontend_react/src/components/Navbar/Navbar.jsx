import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
    const menuList = [
        'home',
        'about',
        'contact',
        'work',
        'skills',
    ];

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="Logo" />
            </div>
            <ul className="app__navbar-links">
                { menuList.map(item => (
                    <li key={`link-${item}`} className="app__flex p-text">
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                    )
                )}
            </ul>
        </nav>
    );
};

export default Navbar;