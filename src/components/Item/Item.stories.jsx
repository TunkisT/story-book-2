import React from 'react';
import Item from './Item';

export default {
  title: 'Item',
  component: Item,
};

export const primary = () => (
  <Item
    image='https://res.cloudinary.com/social-upload-prod-media-cld/image/upload/shopify/1/0207/8508/products/hand-thrown-white-coffee-mug-with-magnolia-logo.jpg?v=1634150481'
    title='White Coffee Mug'
    saleNumber={1.972}
  ></Item>
);
