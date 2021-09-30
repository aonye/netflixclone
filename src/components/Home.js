import { Link } from "react-router-dom";
import '../styles/Home.css';

const Home = () => {
    return (
        <div className='homepage'>
            <Link to='./signin'><div>1</div></Link>
            <Link to='./signup'><div>2</div></Link>
        </div>
    );
}

export default Home;