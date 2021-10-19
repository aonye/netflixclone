import PropTypes from 'prop-types';

function YoutubeEmbed({ embedId, stopPlayHand }) {
    return (
        <div onClick={() => stopPlayHand()} className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                webkitallowfullscreen="webkitallowfullscreen"
            />
        </div>
    );
};

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;