import { useRef } from 'react';
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import '../../styles/Profile.css';
import Avatar from '../../images/Netflix-avatar.png';

const Profile = ({ displayName, email, setAuthState }) => {
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
                <li className='dropdown-email'>{`${displayName} | ${email}`}</li>
                <hr />
                <a href='/account'><li>Account Settings</li></a>
                <a href='/username'><li>Update Username</li></a>
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