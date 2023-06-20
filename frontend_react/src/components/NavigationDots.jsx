import { useState } from 'react';

const NavigationDots = ({ active }) => {
    const [toggle, setToggle] = useState(false);
    const menuList = [
        'home',
        'about',
        'contact',
        'work',
        'skills',
        'testimonials',
        'contact',
    ];

    return (
        <div className='app__navigation'>
            { menuList.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313bac' } : {}}
                    onClick={() => setToggle(false)}
                />
            ))}
        </div>
    );
};

export default NavigationDots;