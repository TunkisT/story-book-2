import React from 'react';
import StatisticList from './StatisticList';

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
];

export default {
  title: 'StatisticList',
  component: StatisticList,
};

export const primary = () => <StatisticList statistics={statistics} />;
