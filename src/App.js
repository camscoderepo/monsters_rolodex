import { useState, useEffect } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState(''); 
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  //const [stringField, setStringField] = useState('');
  //const [id, setId] = useState([]);
  
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users));
  }, []);

useEffect(() => {
  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  setFilteredMonsters(newFilteredMonsters);
}, [monsters, searchField]);




  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
 }




  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className='monsters-search-box'onChangeHandler={onSearchChange} placeholder='search monsters' /> 
      <Cardlist monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     
//   }


//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;




//     return (
      
//     );
//   }
// }



export default App;
