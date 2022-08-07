import ReactStars from "react-rating-stars-component";



function Stars(props) {

    console.log(props.starNum);
    return (
        <>
            {props.starNum ? <ReactStars
                count={5}
                size={40}
                isHalf={true}
                value={props.starNum / 2}
                edit={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            /> : ""
            }
        </>
    )
}

export default Stars;