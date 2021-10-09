import '../styles/MediaBar.css';
import films from '../assets/films/index.js';
import { useRef } from 'react';
import { capitalizeFirstLetter, configTitle } from '../helper/helper';

const MediaBar = (props) => {
    const { title } = props;

    function hoverHand(e) {
        const preview = e.target.nextElementSibling;
        preview.setAttribute('style', 'display:block');
        preview.setAttribute('style', 'transform: scale(1.2)');
        e.target.setAttribute('style', 'transform: scale(1.2)');
    }

    function hoverOutHand(e) {
        const preview = e.target.nextElementSibling;
        preview.setAttribute('style', 'display: none');
        e.target.setAttribute('style', 'transform: scale(1.0)');
    }

    function getFilms() {
        for (const key in films) {
            if (title === key) {
                return films[key];
            }
        }
    }

    function makePreviews(arr) {
        return arr.map((item, index) => {
            const img = require(`../assets/films/${title}/${item.title}/small.jpg`);
            return (
                <div className='mediaUnit'>
                    <img
                        className='previewImg'
                        key={index}
                        onMouseOver={(e) => hoverHand(e)}
                        onMouseOut={(e) => hoverOutHand(e)}
                        src={img.default}
                        alt=''
                    />
                    <div className='previewCont'>
                        <p className='previewTitle'>{configTitle(item.title)}</p>
                        <p>{item.description}</p>
                    </div>
                </div>
            )
        });

    }

    return (
        <div className='mediaCont'>
            <div className='mediaTitle'>{capitalizeFirstLetter(title)}</div>
            <div className='previews'>
                {makePreviews(getFilms())}
            </div>
        </div>
    )
};

export default MediaBar;