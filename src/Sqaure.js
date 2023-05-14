import React from 'react'

const Sqaure = ({colorValue}) => {
  return (
    <section classNmae="sqaure"
        style={{backgroundColor: colorValue}}>
            <p>{colorValue ? colorValue: "empty value"}</p>
      
    </section>
  )
}
Sqaure.defaultProps={
    colorValue:"empty colour value"
}

export default Sqaure