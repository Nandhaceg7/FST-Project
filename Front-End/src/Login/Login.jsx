import './Login.css'


export default function Login()
{
    return(
        <>
        <div class="login-container">
        <h2>Login</h2>
        <form action="/Check" method="get">
            <div class="input-group">
                <label for="username">Username</label>
                <input></input>
             
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input></input>
               
            </div>
            <button type="submit" class="login-btn">Login</button>
        </form>
        <br/>
        <form action="/Create" method="get">
        <h5>Create a New Account ? </h5>
        {/* <button className='but'>Click here</button> */}
        <button>Click here</button>
        </form>
    </div>
    </>
    );
}