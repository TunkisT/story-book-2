import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Item.style';

const Item = ({ image, title, saleNumber }) => (
  <>
    <S.Item>
      <S.Image src={image}></S.Image>
      <S.Text>{title}</S.Text>
      <S.Counter>{saleNumber} Sales</S.Counter>
    </S.Item>
  </>
);

Item.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  saleNumber: PropTypes.number.isRequired,
};
Item.defaultProps = {
  image: '1',
  title: 'No title',
  saleNumber: 0,
};
export default Item;
