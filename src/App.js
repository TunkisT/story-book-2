import './App.css';
import { Item } from './components';

function App() {
  return (
    <div className='App'>
      <Item
        image='https://res.cloudinary.com/social-upload-prod-media-cld/image/upload/shopify/1/0207/8508/products/hand-thrown-white-coffee-mug-with-magnolia-logo.jpg?v=1634150481'
        title='White Coffee Mug'
        saleNumber={1.972}
      />
    </div>
  );
}

export default App;
