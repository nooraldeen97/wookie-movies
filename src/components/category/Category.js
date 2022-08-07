import HomeCard from '../HomeCard';
import "./category.css"
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function Category(props) {

    const styleCardDiv = " col-md-4 col-lg-3 mx-auto g-2";
    const filteredArr = props.arr.filter(elem => elem.genres.includes(props.genres));

    return (
        <>
            <div className="d-grid gap-2">
                <p id="geners">{props.genres}</p>
                </div>
                <br></br>
                {
                    filteredArr.map(elem => {
                        return <Row className={styleCardDiv}>
                            <Link to={`/movie/${elem.id}`} style={{ textDecoration: 'none' }} >
                                <HomeCard elem={elem} />
                            </Link>
                        </Row>
                    })
                }
            </>
            )
}


            export default Category;