import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer'>
                <h1>Questions? Call 1-844-505-2993</h1>
                <div className='grid'>
                    <button>FAQ</button>
                    <button>Help Center</button>
                    <button>Account</button>
                    <button>Media Center</button>
                    <button>Investor Relations</button>
                    <button>Jobs</button>
                    <button>Redeem Gift Cards</button>
                    <button>Buy Gift Cards</button>
                    <button>Ways to Watch</button>
                    <button>Terms of Use</button>
                    <button>Privacy</button>
                    <button>Cookie Preferences</button>
                    <button>Corporate Information</button>
                    <button>Contact Us</button>
                    <button>Speed Test</button>
                    <button>Legal Notices</button>
                    <button>Only on Netflix</button>
                </div>
                <div className='copyright'>
                    <span>Andy Ye - 2021 -&nbsp;</span>
                    <a href='https://www.github.com/aonye' target='_blank' rel="noreferrer">{` Github`}</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;