// resources/js/navComponent.jsx
import { Link } from 'react-router-dom';
import '../../css/nav.css';

const nav = () => {
    return (
        <nav className="menu">
            <div className='nav_logo'><img src="/assets/image/nav/nav_logo_l.png"></img></div>
            <div className='nav_switch'>
                <ul>
                    <li><Link to="/">關於不帆心</Link></li>
                    <li>
                        <Link to="/">系列課程</Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/">家長講座課</Link></li>
                            <li><Link className="dropdown-item" to="/">親子共學營</Link></li>
                            <li><Link className="dropdown-item" to="/">繁星共學團</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">親職專欄</Link></li>
                    <li><Link to="/">共享資源</Link></li>
                </ul>
            </div>
            
       </nav>
    );
  }
  
  export default nav;
 