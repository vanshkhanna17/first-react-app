import { Component } from "react";
import './search-box.style.css'; /* Once the css file is imported, be it in any component, the whole application can use it. 
                                    It doesn't matter if the JSX/JS files have a similar import statement.
                                    Even if the card-list.jsx file doesn't import this css file, it can still use the styling
                                    that is described in this css file.  Although the isolation of CSS file is possible. */

/* Class component initialisation */
// class SearchBox extends Component{
//     render(){
//         return(
//             <input
//           className={`search-box ${this.props.className}`} //applying two class names one dynamically the other statically
//           type='search'
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChangeHandler}
//         />
//         );
//     }
// }

/* Functional component initialisation */
// const SearchBox = (props) => {
//     return(
//         <input
//       className={`search-box ${props.className}`} //applying two class names one dynamically the other statically
//       type='search'
//       placeholder={props.placeholder}
//       onChange={props.onChangeHandler}
//     />
//     );
// }

/* the above functional component can also be written as - */
const SearchBox = ({ className, placeholder, onChangeHandler }) => ( //{className, placeholder, onChangeHandler} are props passed to the component
  <input
    className={`search-box ${className}`} //applying two class names one dynamically the other statically
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
  //here we used implicit return instead of providing the HTML in an explicit return function, which is used in card component,
  // as the component doesn't have any other logic but returning an HTML value
);
export default SearchBox;