import './App.css'
import Counter from './components/Counter'
import ToggleSwitch from './components/ToggleSwitch'
import ToDo from './components/ToDo'
import TodoComponent from './components/TodoComponent'
import FetchDataFromApi from './components/FetchDataFromApi'
import FetchDataFromApi2 from './components/FetchDataFromApi2'
import SearchBar from './components/SearchBar'
import SearchBarApi from './components/SearchBarApi'
import DropDownMenu from './components/DropDownMenu'
import TabContent from './components/TabContent'
import ModalPopup from './components/ModalPopup'
import { useState } from 'react'
import Carousel from './components/Carousel'
import one from './assets/1.jpg'
import two from './assets/2.jpeg'
import three from './assets/3.jpeg'
import four from './assets/4.jpg'
import five from './assets/5.png'
import StarRating from './components/StarRating'
import RealTimeSearch from './components/RealTimeSearch'

function App() {

    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

    const [isModalOpen, setIsModalOpen] = useState(false)

    const imageArr = [one, two, three, four, five]

    return (
        // <Counter />
        // <ToggleSwitch />
        // <ToDo />
        // <TodoComponent />
        // <FetchDataFromApi />
        // <FetchDataFromApi2 />
        // <SearchBar items={items} />
        // <SearchBarApi />
        // <DropDownMenu />
        // <TabContent />
        // <div>
        //     <button onClick={()=>setIsModalOpen(!isModalOpen)}>Open Modal</button>
        //     {isModalOpen && 
        //         <ModalPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        //             <h1>Modal is open</h1>
        //             <h2>Hi there</h2>
        //         </ModalPopup>
        //     }
        // </div>

        // <Carousel images={imageArr} />
        // <StarRating />
        <RealTimeSearch items={items} />
    )
}

export default App
