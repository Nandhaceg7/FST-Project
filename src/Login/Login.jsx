import './Login.css'


export default function Login()
{
    return(
        <>
        <div class="login-container">
        <h2>Login</h2>
        <form action="/Create" method="get">
            <div class="input-group">
                <label for="username">Username</label>
                <input></input>
             
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input></input>
               
            </div>
            <button type="submit" class="login-btn">Login</button>
             
            <h5>Create a New Account ? <a>Click here</a></h5>
        </form>
    </div>
    </>
    );
}