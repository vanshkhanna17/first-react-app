import React from "react";
import { Component } from "react";
import Card from "../card/card.component";
import './card-list.style.css';


/* Class component initialisation */
// class CardList extends Component {
//     render() {
//         console.log("render from Card List")
//         console.log(this.props);
//         const monsters = this.props.monsters;
//         return (
//             <div className="card-list">
//                 {
//                     monsters.map((monster) => {
//                         return (
//                             <Card monster={monster} key={monster.id}></Card>
//                         );
//                     })
//                 }
//             </div>
//         )
//     }
// }

/* Functional component initialisation */

// const CardList = (props) => {
//     const monsters = props.monsters;
//     return (
//         <div className="card-list">
//             {
//                 monsters.map((monster) => {
//                     return (
//                         <Card monster={monster} key={monster.id}></Card>
//                     );
//                 })
//             }
//         </div>
//     )
// }

/* the above functional component can also be written as - */
const CardList = ({ monsters }) => ( //monsters is a prop passed to the component
    <div className="card-list">
        {
            monsters.map((monster) => {
                return (
                    <Card monster={monster} key={monster.id}></Card>
                );
            })
        }
    </div>
    //here we used implicit return instead of providing the HTML in an explicit return function, which is used in card component,
    // as the component doesn't have any other logic but returning an HTML value
);
export default CardList;