'use client';

import React from 'react';
import moment from 'moment';
type Props = {
  time: string;
};

const LiveTimeStamp = ({ time }: Props) => {
  const timeNow = moment(time).format('LLL');
  return <p>{timeNow}</p>;
};

export default LiveTimeStamp;
