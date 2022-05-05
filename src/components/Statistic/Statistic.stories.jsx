import React from 'react';
import Statistic from './Statistic';

export default {
  title: 'Statistic',
  component: Statistic,
};

export const primary = () => <Statistic title='earnings' metric='$ 315.20' />;
