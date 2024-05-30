import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='sidebar bg-light'>
        <ul>
            <li>
                <NavLink to="/" exact className="text-dark  rounded py-2 w-100 d-inline-block px-3"  activeClassName='active'><FaIcons.FaHome className="me-2"/> Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/Estadisticas" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName='active'><FaIcons.FaChartBar className="me-2"/> Metricas</NavLink>
            </li>
            <li>
                <NavLink to="/Calendario" exact className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName='active'><FaIcons.FaCalendarAlt className="me-2"/> Calendario</NavLink>
            </li>
        </ul>
    </div>
  );
};

export default Sidebar;