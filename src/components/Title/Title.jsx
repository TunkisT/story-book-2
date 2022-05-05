import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Title.style';

function Title({ title }) {
  return <S.TitleDiv>{title}</S.TitleDiv>;
}

Title.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Title;
