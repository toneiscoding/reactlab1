import logo from './logo.svg';
import './App.css';
import Title from './components/title.js'
import SingleTodo from './components/morningExample.js'
import ColorChanger from './components/ColorChanger';
import ContactForm from './components/ContactForm';
import TextInput from './components/TextInput';
import ItemList from './components/ItemList';
function App() {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  return (
    <div className="App">
      <Title/>
      <Title/>
      <Title/>
      <Title/>
      <ColorChanger/>
      <ContactForm/>
      <TextInput/>
      <h1>List of Items</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;
