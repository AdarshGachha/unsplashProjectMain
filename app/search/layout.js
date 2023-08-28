import React from 'react'

const layout = (props) => {
    const {children} = props
  return (
    <div>
        {children}
        <div className="pages"><h4>1</h4>
        <h4>2</h4>
        <h4>3</h4>
        <h4>4</h4></div>
    </div>
  )
}

export default layout