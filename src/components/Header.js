import {Navbar,Container} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
function Header(props) {


    return (
        <>
            <Navbar bg="danger" variant="light" id="header" expand="md">
                <Container>
                    <Navbar.Brand href="/" >
                    WOOKIE <br></br> MOVIES</Navbar.Brand>
                    <FaSearch className="icon"/>
            <input type="text" onChange={props.searchHandler} placeholder='search about movie' value={props.searchValue}/>

                </Container>
            </Navbar>
        </>
    );
}

export default Header;