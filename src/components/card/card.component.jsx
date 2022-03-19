import { Component } from "react";
import "./card.style.css";

/* Class component initialisation */
// class Card extends Component {
//     render() {
//         const { name, email, id } = this.props.monster; // this is called destructuring to increase resusability of object variables.
//         return (
//             <div className="card-container" key={id}>
//                 <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
//                 {/* `abc ${xyz}` is the way of string onterpolation where we can use javascript inside a string value
//                 to provide dynamic nature to the string values. */}
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

/* Functional component initialisation */

// const Card = (props) => {
//     const { name, email, id } = props.monster;
//     return (
//         <div className="card-container" key={id}>
//             <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
//             {/* `abc ${xyz}` is the way of string onterpolation where we can use javascript inside a string value
//                         to provide dynamic nature to the string values. */}
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//     )
// }

/* the above functional component can also be written as - */
const Card = ({ monster }) => { //monster is a prop passed to this component
    const { name, email, id } = monster;
    return (
        <div className="card-container" key={id}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            {/* `abc ${xyz}` is the way of string onterpolation where we can use javascript inside a string value
                                to provide dynamic nature to the string values. */}
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}
export default Card;