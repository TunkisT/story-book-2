import './App.css';
import { ItemList, StatisticList, Title } from './components';

const items = [
  {
    image:
      'https://res.cloudinary.com/social-upload-prod-media-cld/image/upload/shopify/1/0207/8508/products/hand-thrown-white-coffee-mug-with-magnolia-logo.jpg?v=1634150481',
    title: 'White Coffee Mug',
    saleNumber: 1.972,
  },
  {
    image:
      'https://www.hardware-wallets.net/wp-content/uploads/2020/01/cryptosteel-capsule-open-pimage.jpg',
    title: 'Cryptostell capsule',
    saleNumber: 2.712,
  },
  {
    image:
      'https://www.rossetticasalinghi.com/wp-content/uploads/2021/04/MioMoka6black.jpg',
    title: 'MioMokka espresso',
    saleNumber: 1.432,
  },
  {
    image:
      'https://www.hardware-wallets.net/wp-content/uploads/2020/01/cryptosteel-capsule-open-pimage.jpg',
    title: 'Cryptostell capsule',
    saleNumber: 2.712,
  },
];
const statistics = [
  {
    title: 'earnings',
    metric: '$ 315.20',
  },
  {
    title: 'orders',
    metric: '16',
  },
  {
    title: 'sessions',
    metric: '463',
  },
  {
    title: 'users',
    metric: '17',
  },
  {
    title: 'sessions',
    metric: '463',
  },
  {
    title: 'users',
    metric: '17',
  },
];

function App() {
  return (
    <div className='App'>
      <Title title='Statistics' />
      <StatisticList statistics={statistics} />
      <Title title='Product sales' />
      <ItemList items={items} />
    </div>
  );
}

export default App;
