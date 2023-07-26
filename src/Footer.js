// import React from 'react'

const Footer = ( {length} ) => {
    const today = new Date();

  return (
    <footer>
    <h4>
      <center>
        <p>{length} List {length === 1 ? "Item" : "Items"}</p>
        <p>Copyright &copy; {today.getFullYear()}</p>
      </center>
    </h4>
    </footer>
  )
}

export default Footer
