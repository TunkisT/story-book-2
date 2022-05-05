import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Statistic.style';

function Statistic({ title, metric }) {
  return (
    <S.StatisticDiv>
      <S.StatisticTitle>{title}</S.StatisticTitle>
      <S.StatisticMetric>{metric}</S.StatisticMetric>
    </S.StatisticDiv>
  );
}

Statistic.propTypes = {
  title: PropTypes.node.isRequired,
  metric: PropTypes.node.isRequired,
};

export default Statistic;
