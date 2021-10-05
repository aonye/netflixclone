import { Switch, Redirect } from 'react-router-dom';
import '../styles/Home.css';

const Home = (props) => {
    const { email, setEmail } = props;

    function handleSubmit(e) {
        e.preventDefault();
        const [input,] = e.target.childNodes;
        console.log(e.target.childNodes, input.value);
        setEmail(input.value);
    }

    return (
        <Switch>
            <div className='homepage'>
                {email ?
                    <Redirect to="/signup" />
                    :
                    <div className='main'>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type='email'></input>
                            <input type='submit'></input>
                        </form>
                    </div>

                }
            </div>
        </Switch>
    );
}

export default Home;