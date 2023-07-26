// import React from 'react'

import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete}) => {
    // const [name, setName] = useState('UseState Sample');
    // const [count, setCount] = useState(0);

    // //random function output 
    // const handleNameChange = () => {
    //     const names = ['Mark', 'Boy2', 'Marko'];
    //     const int = Math.floor(Math.random() * 3);
    //     return names[int];
    // }

        // //random function output 
        // const handleNameChange = () => {
        //     const names = ['Mark', 'Boy2', 'Marko'];
        //     const int = Math.floor(Math.random() * 3);
        //     setName(names[int]);
        // }

        // //default value
        // const handleClickSample = () =>{
        //     console.log(count)
        // }

        // //taga click sa sa button na naay onClick mp add sya 
        // const handleClickIncrement = () =>{
        //     setCount(count + 1)
        //     console.log(count)
        // }

    // const handleClick = () =>{
    //     console.log('Click it!')
    // }
    // //SAMPLE OF ANONYMOUS FUNCTION
    // const handleClick2 = (name) =>{
    //     console.log(`${name} was clicked!`)
    // }
    
    // //SAMPLE OF EVENT HANDLING FUNCTION
    // const handleClick3 = (e) =>{
    //     console.log(e.target.innerText) //innerTEXT method para makuha ang text sa button 
    //     console.log(e.target) //para makuha ang button ug ang text na value niya which is "Click it" 
    // }
    //         {/*<p>Hello {handleNameChange()}!</p>*/}
    //                {/*<p>{name}!</p>*/}
    //                <br />
                    {/*<button onClick={handleClick}>Click it</button>*/}
                    {/*<button onClick={handleNameChange}>Click it</button> {/* SAMPLE PARA HANDLE NAME CHANGE */}
                    {/*{<button onClick={handleClickSample}>Count click</button> */}{/* SAMPLE PARA SA USESTATE */}
                    {/*<button onClick={handleClickIncrement}>Count click increment </button>*/} {/* BUTTON PARA SA USESTATE */}
                    {/*<button onClick={() => handleClick2('MarkBello')}>Click it</button>*/} {/* SAMPLE OF  ANONYMOUS FUNCTION */}
                    {/*<button onClick={() => handleClick2('MarkBello')}>Click it</button> {/* SAMPLE OF  ANONYMOUS FUNCTION */}
                    {/*<button onClick={(e) => handleClick3(e)}>Click it</button>*/} {/* SAMPLE OF  EVENT HANDLING FUNCTION */}
    return (
        <main>
                {items.length ? (
                    <h3>
                        <ItemList
                            items={items}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                        />
                    </h3>
                ) : (
                    <p style={{ marginTop: '2rem'}}>Your list is empty.</p>
                )}
            
        </main>
    )
}

export default Content
