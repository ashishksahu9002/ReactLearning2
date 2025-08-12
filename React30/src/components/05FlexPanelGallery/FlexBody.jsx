import React from 'react'
import FlexChild from './FlexChild'

const FlexBody = () => {

  const dataObj = [
    [
      "Hey",
      "Let's",
      "Dance",
    ],
    [
      "Give",
      "Take",
      "Receive",
    ],
    [
      "Experience",
      "It",
      "Today",
    ],
    [
      "Give",
      "All",
      "You can",
    ],
    [
      "Life",
      "In",
      "Motion",
    ]
  ]

  return (
    <div className='bg-[#7927a5] h-screen w-screen flex overflow-hidden'>
      {
        dataObj.map((data, index) => (
          <FlexChild key={index} data={data} />
        ))
      }
    </div>
  )
}

export default FlexBody


// #6c0f9c