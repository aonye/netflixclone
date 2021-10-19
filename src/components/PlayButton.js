const PlayButton = (props) => {
    const { hoverPlayBtn, hoverOffPlayBtn, playBtnClickHand, YTLink } = props;
    return (
        <button
            className='playBtn'
            onMouseOver={(e) => hoverPlayBtn(e)}
            onMouseOut={(e) => hoverOffPlayBtn(e)}
            onClick={(e) => playBtnClickHand(e, YTLink)}
        >
            PLAY
        </button>
    );
};

export default PlayButton;