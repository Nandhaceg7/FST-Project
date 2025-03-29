import "./Navbar.css";


export default function Navbar()
{
    return (
        <>
         
              <nav className="navbar">
              <div >
            <img className="logoimg" src="./logo.png" alt="Company Logo" />
        </div>
        {/* <div className="logo">Yellow Pages</div> */}
        <ul class="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Workspace</a></li>
            <li><a href="#">Add Wokers</a></li>
        </ul>
        <button class="menu-btn">&#977;</button>
    </nav>
        </>
    );
}