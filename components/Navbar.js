import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <div className="header">
            <h1 className="blog-header">MY Blog</h1>
            <div className="container">
            <Link to="/">HOME</Link>
            <Link to="/New" style={{
                backgroundColor:'#f1356d',
                borderRadius:'8px'
            }}>New blog</Link>
            <Link to="/si" >Login</Link>
      
            </div>
            
            
        </div>
    )
}
export default NavBar;
