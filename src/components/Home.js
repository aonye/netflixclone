import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({ setEmail }) => {
    const emailInput = useRef();
    const history = useHistory();

    function redirectSignUp() {
        history.push(`signup`);
    }

    function handleSubmit(e) {
        e.preventDefault();
        redirectSignUp();
        setEmail(emailInput.current.value);
    }

    return (
        <div className='home'>
            <div className='home-overlay'>
                <div className='home-signUp'>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input ref={emailInput} id='home-email' type='email' placeholder='Email address' required></input>
                        <input id='home-submit' type='submit' value='Get Started &#8250;'></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;