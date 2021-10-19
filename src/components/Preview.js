import xBtn from '../assets/icons/close.png';
import '../styles/Preview.css';
import PlayButton from './PlayButton';

const Preview = ({ title, description, image, hoverPlayBtn, hoverOffPlayBtn, playBtnClickHand, xClickHand, YTLink }) => {
    return (
        <div className='active' style={{ background: `url(${image})` }}>
            <div className='pvInfo-container fade-in'>
                <h1>{`${title}`}</h1>
                <p>{`${description}`}</p>
                <PlayButton
                    hoverPlayBtn={hoverPlayBtn}
                    hoverOffPlayBtn={hoverOffPlayBtn}
                    playBtnClickHand={playBtnClickHand}
                    YTLink={YTLink}
                />
            </div>
            <img onClick={() => xClickHand()} className='pvInfo-btn fade-in' src={xBtn} alt='XBtn' />
        </div>
    )
};

export default Preview;