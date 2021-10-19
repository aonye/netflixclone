import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import '../../styles/Profile.css';
import Avatar from '../../images/Netflix-avatar.png';

const Profile = ({ name, email, setAuthState }) => {
    const dropDownRef = useRef();

    function signOutHand() {
        signOut(auth).then(() => {
            setAuthState(null);
            console.log('sign out successful');
        }).catch((error) => {
            alert('Error signing out', error);
        });
    }

    function clickHand() {
        const changeStyle = dropDownRef.current.style.display === 'none' ? 'block' : 'none';
        dropDownRef.current.style.display = changeStyle;
    }

    const Dropdown = () => {
        return (
            <ul ref={dropDownRef} className='dropdown' style={{ display: 'none' }}>
                <li className='dropdown-email'>{`${name} | ${email}`}</li>
                <hr />
                <Link to='/account'><li>Account Settings</li></Link>
                <Link to='/username'><li>Update Username</li></Link>
                <li onClick={() => signOutHand()}>Log Out</li>
            </ul>
        )
    };

    return (
        <div className='profile'>
            <div>
                <img onClick={() => clickHand()} src={Avatar} alt='' width='50' height='50' />
            </div>
            <Dropdown />
        </div>

    );
}

export default Profile;