import {Navbar,Container} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

function Header(props) {


    function removeToken(){
        props.signOutHandler();
    }
    
    return (
        <>
            <Navbar bg="danger" variant="light" id="header" expand="md">
                <Container>
                    <Navbar.Brand href="/" >
                    WOOKIE <br></br> MOVIES</Navbar.Brand>
                    <FaSearch className="icon"/>
            <input type="text" onChange={props.searchHandler} placeholder='search about movie' value={props.searchValue}/>
            <button onClick={removeToken}>logOut</button>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;