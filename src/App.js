import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {
      const [items, setItems] = useState([
        {
              id: 1,
              checked: true,
              item: "JavaScript!"
        },
        {
              id: 2,
              checked: false,
              item: "ReactJS!"
        },
        {
              id: 3,
              checked: false,
              item: "Redux!"
        },
        {
              id: 4,
              checked: false,
              item: "Laravel!"
        },
        {
              id: 5,
              checked: false,
              item: "MySQL!"
        },
        {
              id: 6,
              checked: false,
              item: "API!"
        }
        ]);

      const handleCheck = (id) => {
        // console.log(`Key: ${id}`)
          const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
          setItems(listItems);
          localStorage.setItem('mark', JSON.stringify(listItems)); 
      }

      const handleDelete = (id) => {
          const listItems = items.filter((item) => item.id !== id);
          setItems(listItems);
          localStorage.setItem('mark', JSON.stringify(listItems));
      }

  return (
    <div className="App">
      <Header title="ReactJS" />
      <AddItem />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
