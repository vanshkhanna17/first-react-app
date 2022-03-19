import './App.css';
import { Component, useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

/* Class component initialisation */
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       searchField: '',
//       monsters: []
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState(
//       () => {
//         return {monsters : users};
//       },
//       () => {
//         console.log(this.state);
//       }
//     ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value;
//     this.setState(() => {
//       return { searchField };
//     }, () => {
//       console.log(searchField);
//       console.log("this.setState() called");
//     });
//   }

//   render() {

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());
//     });

//     return (
//       <div className="App">
//         {
//         /* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'></SearchBox>
//         <CardList propsExample={[1,2,3]} monsters={filteredMonsters}>
//           {
//             /* Props.Children*/
//           }
//         </CardList>
//       </div>
//     );
//   }
// }

/* Functional component initialisation */
const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]); //[value, setValue]
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); 
  /* creating filteredMonsters as a state variable to avoid re-execution of the filter code logic even when it is not required, 
  as it was before whenever the component was re-rendered due to any state change which was not with respect to 
  the array (monsters state variable) on which the filter was applied */

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  }, []);

  useEffect( () => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  /* using the above useEffect hook to apply the filteredMonsters filter logic only when there is any change in the monsters 
  state variable array or the searchField string state variable  */

  const onSearchChange = (event) => {
    const searchFieldValue = event.target.value;
    setSearchField(searchFieldValue);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='search monsters'></SearchBox>
      <CardList propsExample={[1, 2, 3]} monsters={filteredMonsters}>           
        {
          //             /* Props.Children*/
        }
      </CardList>
    </div>
  )
}

export default App;
