import React, { useState } from 'react'

function DropDownMenu() {

    const [isClicked, setIsClicked] = useState(false)

    const menuItems = ['Menu', 'File', 'Edit', 'View']

    console.log('isClicked : ', isClicked);
    

    return (
        <div>
            <h1>Drop Down Menu</h1>
            <button onClick={() => setIsClicked(!isClicked)}
            >Click ME</button>
            {isClicked &&
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            }
        </div>
    )
}

export default DropDownMenu

/*
    [Menu, File, Edit, View]
*/