import React from 'react';
import PropTypes from 'prop-types';
import * as S from './StatisticList.style';
import Statistic from '../Statistic/Statistic';

function StatisticList({ statistics }) {
  console.log('statistics ===', statistics);
  return (
    <S.StatisticListDiv>
      {statistics.map((obj) => (
        <Statistic title={obj.title} metric={obj.metric} />
      ))}
    </S.StatisticListDiv>
  );
}

StatisticList.propTypes = {
  statistics: PropTypes.node.isRequired,
};

export default StatisticList;
