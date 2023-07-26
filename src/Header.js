// import React from 'react'

const Header = ({ title }) => {
    //INLINE STYLE HEADER FOR CSS
    // const headerStyle = {
    //         backgroundColor: 'black',
    //         color: '#FFCA2A'
    // }

  return (
    <header>
      <h2>
        This is Header using ReactJS Framework!
          <center>        
            <h5>{title}</h5>
          </center>
      </h2>
    </header>
  )
}

//DEFAULT PROPERTY VALUE CHECKER
Header.defaultProps = {
    title: "Default Title"
}

export default Header
