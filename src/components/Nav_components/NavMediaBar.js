import '../../styles/NavMediaBar.css';

const NavMediaBar = ({ films, series, setMediaType, setMTKey }) => {
    return (
        <ul className='navMB'>
            <li onClick={() => { setMediaType({ films }); setMTKey(Object.keys({ films })); }}>Films</li>
            <li onClick={() => { setMediaType({ series }); setMTKey(Object.keys({ series })); }}>Series</li>
        </ul >
    )
};

export default NavMediaBar;