import React, { useState } from 'react'

function TabContent() {
    const [isActive, setIsActive] = useState(0)
    const tabContent = ['Tab Content 1', 'Tab Content 2', 'Tab Content 3']
    return (
        <div>
            <div>
                <button onClick={() => setIsActive(0)}>Tab 1</button>
                <button onClick={() => setIsActive(1)}>Tab 2</button>
                <button onClick={() => setIsActive(2)}>Tab 3</button>
            </div>
            <div>
                <h1>Tab Conetnt</h1>
            </div>
            <div>
                {tabContent[isActive]}
            </div>
        </div>
    )
}

export default TabContent