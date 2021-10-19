import maintitle from '../assets/maintitle/index';
import PlayButton from './PlayButton';
import '../styles/MainMedia.css';

const MainMedia = ({ display, hoverPlayBtn, hoverOffPlayBtn, playBtnClickHand }) => {
    return (
        <div className='mainMediaCont'>
            <div>
                <h1>{maintitle[display].header}</h1>
                <p>
                    {maintitle[display].description}
                </p>
                <PlayButton
                    hoverPlayBtn={hoverPlayBtn}
                    hoverOffPlayBtn={hoverOffPlayBtn}
                    playBtnClickHand={playBtnClickHand}
                    YTLink={maintitle[display].YTLink}
                />
            </div>
        </div >
    );
};

export default MainMedia;