import '../styles/MediaBar.css';

const MediaBar = ({ genre, mediaType, MTKey, onClickHand, hoverImgHand, hoverOutImgHand }) => {

    function makePreviews(arr) {
        return arr.map((item, index) => {
            const img = require(`../assets/${MTKey}/${genre}/${item.title}/small.jpg`);
            return (
                <img
                    key={index}
                    className={`${genre} cardImg`}
                    onMouseOver={(e) => hoverImgHand(e)}
                    onMouseOut={(e) => hoverOutImgHand(e)}
                    onClick={(e) => onClickHand(e)}
                    src={img.default}
                    alt={item.title}
                />
            )
        });
    }

    return (
        <div className='cards'>
            {makePreviews(mediaType[MTKey][genre])}
        </div>
    )
};

export default MediaBar;