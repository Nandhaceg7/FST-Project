import './CreateAccount.css'


export default function CreateAccount()
{
    return (
        <>
        
           <div class="container">
        <div class="card">
            <h2>Create Account</h2>
            <form>
                <div class="input-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name"></input>
                </div>

                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" ></input>
                </div>

                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" ></input>
                </div>

                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" ></input>
                </div>

                <button type="submit" class="btn">Create Account</button>
            </form>
        </div>
    </div>
        </>
    );
}