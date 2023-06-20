import { BsGoogle, BsTelegram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsGoogle />
            </div>
            <div>
                <BsTelegram />
            </div>
            <div>
                <FaFacebookF />
            </div>
        </div>
    );
};

export default SocialMedia;