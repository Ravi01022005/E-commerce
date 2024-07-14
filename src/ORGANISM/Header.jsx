import React, { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";0
import { MdPersonAddAlt1 } from "react-icons/md";
import { countCreate } from "../wrapper/cartcount";
import { SiMeteor } from "react-icons/si";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Header.css"
function Header() {
    const { count } = useContext(countCreate);
    return (
        //#0d6efd
        <>
            <div className="w-100" style={{width:"100%"}}>
                <header style={{backgroundColor:"#0d6efd" }}>
                <div className="d-flex justify-content-between align-items-center flex-md-nowrap" style={{height:"100px"}}>
                    <div><Link to="/" style={{color:"white",marginLeft:"50px"}}><SiMeteor size={80}/></Link>
                    </div>
                        <div className="d-flex justify-content-evenly ">
                            <li>              
                               <Link to="/" className=' text-decoration-none'><span className="header_points m-5">Home</span> </Link>
                            </li>
                            <li>
                                <Link to="/About" className=' text-decoration-none'><span className="header_points m-5">About</span></Link>
                            </li>
                            <li>
                            <Link to="/Product" className=' text-decoration-none'><span className="header_points m-3">Product</span></Link>
                            </li>
                        </div>
                        <div>
                            <Link to="/tocart" style={{color:"white",marginRight:"30px"}} className=' text-decoration-none'>
                                <span
                                    className="position-absolute"
                                     style={{
                                        borderRadius: "50%",
                                        color: "white",
                                        backgroundColor: "rgb(196, 27, 27)",
                                        height: "30px",
                                        width: "30px",
                                        textAlign: "center",
                                        marginLeft:"30px",
                                        marginTop:"-10px"
                                        
                                    }}
                                >
                                    {count}
                                </span>
                                <FaCartArrowDown size={50}  />
                            </Link>
                            <Link to="/login" style={{
                                color: "white",
                                marginLeft: "50px",
                                textDecoration: "none",
                                fontWeight: "bold",
                                marginRight: "30px",
                                flexWrap:"nowrap"
                            }} className=' text-decoration-none'>
                                Login <MdPersonAddAlt1 size={50} />
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}

export default Header;
