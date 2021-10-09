import MediaBar from './MediaBar';
import joker from '../images/joker.jpg';
import '../styles/Dashboard.css';

const Dashboard = () => {
    //document.querySelector('html').style.backgroundImage = `url(${joker})`;
    return (
        <div className='dashboard'>
            <div className='mainMediaCont'>
                <div>Watch Joker Now</div>
                <div>
                    Forever alone in a crowd, failed comedian Arthur Fleck
                    seeks connection as he walks the streets of Gotham City.
                    Arthur wears two masks -- the one he paints for his day job
                    as a clown, and the guise he projects in a futile attempt to
                    feel like he's part of the world around him.
                </div>
                <button className='mainPlayBtn'>Play</button>
            </div>
            <MediaBar title={`children`} />
            <MediaBar title={`drama`} />
            <MediaBar title={`romance`} />
            <MediaBar title={`suspense`} />
            <MediaBar title={`thriller`} />
        </div >
    );
};

export default Dashboard;