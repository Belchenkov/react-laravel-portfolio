import { images } from '../constants';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a
                    title="Habr"
                    href="https://career.habr.com/belchenkov--aleksey"
                    target="_blank"
                >
                    <img src={images.portfolio} alt="Habr"/>
                </a>
            </div>
            <div>
                <a
                    title="Telegram"
                    href="https://telegram.me/BelchenkovAleksey"
                    target="_blank"
                >
                    <img src={images.telegram} alt="Telegram"/>
                </a>
            </div>
            <div>
                <a
                    title="GitHub"
                    href="https://github.com/Belchenkov"
                    target="_blank"
                >
                    <img src={images.github} alt="GitHub"/>
                </a>
            </div>
            <div>
                <a
                    href="https://join.skype.com/invite/Gl19POeU5FkT"
                    target="_blank"
                    title="Skype"
                >
                    <img src={images.skype_social} alt="Skype"/>
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
