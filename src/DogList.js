// import React, { useState } from "react";
import React, { Component } from "react";
import { dogs } from "./data.js";


// function DogList() {
//     // the value of the search field 
//     const [name, setName] = useState('');
  
//     // the search result
//     const [foundBreeds, setfoundBreeds] = useState(dogs);
  
//     const filter = (e) => {
//       const keyword = e.target.value;
  
//       if (keyword !== '') {
//         const results = dogs.filter((dog) => {
//           return dog.name.toLowerCase().startsWith(keyword.toLowerCase());
//           // Use the toLowerCase() method to make it case-insensitive
//         });
//         setfoundBreeds(results);
//       } else {
//         setfoundBreeds(dogs);
//         // If the text field is empty, show all dogs
//       }
  
//       setName(keyword);
//     };

//     return (
//       <div className="container">
//         <input
//           type="search"
//           value={name}
//           onChange={filter}
//           className="input"
//           placeholder="Filter"
//         />
//         <div className="dog-list">
//           {foundBreeds && foundBreeds.length > 0 ? (
//             foundBreeds.map((dog) => (
//               <p key={dog.id} className="dog">
//                 <span className="dog-name">{dog.name} - {dog.breed}</span>
//               </p>
//             ))
//           ) : (
//             <h1>No results found!</h1>
//           )}
//         </div>
//       </div>
//     );
// }

class DogList extends Component {
    
    state = {
        breed: '',
        shownDogs: dogs
    }
    
    handleChange = (e) => {
        this.setState({
            breed: e.target.value
        })
    }
    
    handleClick = () => {
        this.setState((prevState) => {
            return {
                shownDogs: dogs.filter((dog) => dog.breed === prevState.breed)
            }
        })
    }
    
    render() {
        return (
            <div>
                <input
                    type='text'
                    onChange={this.handleChange}
                    value={this.state.breed}
                />
                <button type='button' onClick={this.handleClick}>Search by Breed</button>
                {this.state.shownDogs.map((dog) => {
                    return (
                        <p key={dog.id}>
                            {dog.name} - {dog.breed}
                        </p>
                    )
                })}
            </div>
        )
    }
}

export default DogList;


// Coding Challenge Ideas

// search bar

// list names + an increment button

// add/remove items

// fetch data