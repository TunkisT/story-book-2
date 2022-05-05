import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ItemList.style';
import Item from '../Item/Item';

function ItemList({ items }) {
  return (
    <S.ItemListEl>
      {items.map((obj) => (
        <Item
          image={obj.image}
          title={obj.title}
          saleNumber={obj.saleNumber}
        ></Item>
      ))}
    </S.ItemListEl>
  );
}

ItemList.propTypes = {
  items: PropTypes.node.isRequired,
};

export default ItemList;
