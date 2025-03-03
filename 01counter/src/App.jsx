import './App.css'
import Counter from './components/Counter'
import ToggleSwitch from './components/ToggleSwitch'
import ToDo from './components/ToDo'
import TodoComponent from './components/TodoComponent'
import FetchDataFromApi from './components/FetchDataFromApi'
import FetchDataFromApi2 from './components/FetchDataFromApi2'
import SearchBar from './components/SearchBar'
import SearchBarApi from './components/SearchBarApi'

function App() {
    
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

    return (
        // <Counter />
        // <ToggleSwitch />
        // <ToDo />
        // <TodoComponent />
        // <FetchDataFromApi />
        // <FetchDataFromApi2 />
        // <SearchBar items={items} />
        <SearchBarApi />
    )
}

export default App
