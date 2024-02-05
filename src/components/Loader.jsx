import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loader = () => (
  <div className="loader">
    <Spin indicator={<LoadingOutlined className="loading-spinner" spin />} />
  </div>
);

export default Loader;
