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
                    <div className="searchDiv">
                    <FaSearch className="icon"/>
                    <input type="text" className="search-bar" onChange={props.searchHandler} placeholder='search about movie' value={props.searchValue}/>
                    </div>
            <button class="custom-btn btn-16" onClick={removeToken}>log Out</button>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;