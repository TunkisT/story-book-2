import React from 'react';
import ItemList from './ItemList';

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

export default {
  title: 'ItemList',
  component: ItemList,
};

export const primary = () => <ItemList items={items}></ItemList>;
