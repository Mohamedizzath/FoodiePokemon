import LoginImage from "../images/login-page.jpg";
import {useState} from "react";
import userRoles from "../testdata/UserRoles";
import {useNavigate} from "react-router-dom";

function LoginPage({ setUser }){
    // Handling the state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState('');
    const [showError, setShowError] = useState(false);

    // Getting navigator
    const navigator = useNavigate();

    const submitForm = (username, password) => {
        const userNames = userRoles.map(user => user.username.toLowerCase());
        if(userNames.includes(username.toLowerCase())){
            // Getting that particular user
            const user = userRoles.find(user => user.username.toLowerCase() === username.toLowerCase());

            if(user.password === password){
                setUser({ username: username, password: password });
                navigator('/');
            } else {
                setErrorText('Username and password invalid');
                setShowError(true);
            }
        } else {
            setErrorText('Username and password invalid');
            setShowError(true);
        }
    }

    return <div className="container-fluid p-0 vh-100 d-flex">
        <div className="container-fluid w-50 h-100 d-flex justify-content-center align-items-center">
            <form>
                <div className="container w-100">
                    <h1 className="text-success mb-4">Let's get started...</h1>
                    <div className="from-group row my-2">
                        <h4>Username</h4>
                        <input type="text" className="form-control ms-2" id="user-name" value={username} onChange={(e) => {
                            setUsername(e.target.value);
                            setShowError(false);
                        }} />
                    </div>
                    <div className="from-group row my-2">
                        <h4>Password</h4>
                        <input type="password" className="form-control ms-2" id="password" value={password} onChange={(e) => {
                            setPassword(e.target.value);
                            setShowError(false);
                        }}/>
                    </div>
                    <div className="container-fluid p-2">
                        { showError && <h6 className="text-danger">{errorText}</h6> }
                    </div>
                    <div className="container text-center">
                        <button type="button" className="btn btn-outline-success" style={{ minWidth: 100 }} onClick={() => submitForm(username, password)}>Login</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="container-fluid w-50 h-100" style={{ backgroundImage: `url(${LoginImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "#FFFFFF" }}></div>
    </div>
}

export default  LoginPage;