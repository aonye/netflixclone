import { useRef } from 'react';
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import Avatar from '../../images/Netflix-avatar.png';

const Profile = (props) => {
    const { setAuthState } = props;
    const dropDownRef = useRef();

    function signOutHand() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('sign out successful');
            localStorage.removeItem('authState');
            setAuthState(null);
        }).catch((error) => {
            // An error happened.
            console.log('error signing out');
        });
    }

    function clickHand(e) {
        if (dropDownRef.current.style.display === 'none') {
            dropDownRef.current.style.display = 'flex';
            return;
        }
        dropDownRef.current.style.display = 'none';
    }
    const dropdown = () => {
        return (
            <ul ref={dropDownRef} className='dropdown' style={{ display: 'none' }}>
                <a href='/account'><li>Account Settings</li></a>
                <li onClick={() => signOutHand()}>Log Out</li>
            </ul>
        )
    }
    return (
        <div className='profile'>
            <img onClick={(e) => clickHand(e)} src={Avatar} alt='' width='50' height='50' />
            {dropdown()}
        </div>

    );
}

export default Profile;