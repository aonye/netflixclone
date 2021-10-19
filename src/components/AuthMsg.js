import '../styles/AuthMsg.css';

const AuthMsg = ({ useClass, msg }) => {
    return (
        <div className={useClass}>
            {msg}
        </div >
    )
};

export default AuthMsg;