import "./Navbar.css";


export default function Navbar()
{
    return (
        <>
         
              <nav class="navbar">
        <div class="logo">My Logo</div>
        <ul class="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <button class="menu-btn">&#977;</button>
    </nav>
        </>
    );
}