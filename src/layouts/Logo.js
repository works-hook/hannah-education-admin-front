import { ReactComponent as LogoDark } from "../assets/images/logos/chalkboard-teacher-fill-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return ( <>
      <div className="d-flex" style={{"color": "#444"}}>
          <Link to="/">
              <LogoDark />
          </Link>
          <h4 className="mt-sm-1 mx-sm-2"><strong>ADMIN</strong> Teacher</h4>
      </div>
    </> );
};

export default Logo;
