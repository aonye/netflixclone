import { useState } from 'react';
import { capitalizeFirstLetter } from '../helper/helper';
import YoutubeEmbed from './YoutubeEmbed';
import MainMedia from './MainMedia';
import MediaBar from './MediaBar';
import Preview from './Preview';
import { configTitle } from '../helper/helper';
import '../styles/Dashboard.css';

const Dashboard = ({ mediaType, MTKey }) => {
    const [currentMedia, setCurrentMedia] = useState(null);
    const [preview, setPreview] = useState({
        currentFilm: null,
        currentGenre: null,
    });

    async function onClickHand(e) {
        const [genre, ,] = e.target.classList;
        const filmName = e.target.alt;
        const { title, description, YTLink } = mediaType[MTKey][genre].find((item) => item.title === filmName);
        setPreview({
            currentFilm:
                <Preview
                    image={getPreview(MTKey, genre, filmName)}
                    hoverPlayBtn={hoverPlayBtn}
                    hoverOffPlayBtn={hoverOffPlayBtn}
                    playBtnClickHand={playBtnClickHand}
                    xClickHand={xClickHand}
                    title={configTitle(title)}
                    description={description}
                    YTLink={YTLink}
                />,
            currentGenre: genre
        });
        if (window.innerWidth < 1000) { //automatically open the link if <1000px width
            setCurrentMedia(<YoutubeEmbed embedId={YTLink} stopPlayHand={stopPlayHand} />);
        }
    }

    function getPreview(key, genre, filmName) {
        return require(`../assets/${key}/${genre}/${filmName}/large.jpg`).default;
    }

    function hoverPlayBtn(e) {
        e.target.classList.add('hover');
    }

    function hoverOffPlayBtn(e) {
        e.target.classList.remove('hover');
    }

    function hoverImgHand(e) {
        e.target.classList.add('cardImgHover');
    }

    function hoverOutImgHand(e) {
        e.target.classList.remove('cardImgHover');
    }

    function playBtnClickHand(e, url) {
        setCurrentMedia(<YoutubeEmbed embedId={url} stopPlayHand={stopPlayHand} />);
    }

    function stopPlayHand(e) {
        setCurrentMedia(null);
    }

    function xClickHand() {
        setPreview((prevState) => ({
            ...prevState,
            currentFilm: null,
        }));
    }

    function makeMediaBar() {
        let arr = [];
        const key = Object.keys(mediaType);
        for (let genre in mediaType[key]) {
            arr.push(
                <div className='media-wrapper'>
                    <div className='media-container'>
                        <div className='media-title'>{capitalizeFirstLetter(genre)}</div>
                        <MediaBar
                            genre={genre}
                            mediaType={mediaType}
                            MTKey={MTKey}
                            onClickHand={onClickHand}
                            hoverImgHand={hoverImgHand}
                            hoverOutImgHand={hoverOutImgHand}
                        />
                        <div id={`${genre}Preview`} className='preview-container'>
                            {preview.currentGenre === genre && preview.currentFilm !== null ?
                                preview.currentFilm :
                                null
                            }
                        </div>
                    </div>
                </div>
            );
        }
        return arr.map((item, index) => {
            return (
                <div key={index}>
                    {item}
                </div>
            );
        });
    }

    return (
        <div className='dashboard'>
            <MainMedia
                display={`joker`}
                hoverPlayBtn={hoverPlayBtn}
                hoverOffPlayBtn={hoverOffPlayBtn}
                playBtnClickHand={playBtnClickHand} />
            <div>
                {makeMediaBar()}
            </div>
            {currentMedia}
        </div >
    );
};

export default Dashboard;