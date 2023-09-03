import React from 'react';
import './BaseLayout.scss';

const BaseLayout = (props) => {

  const { enableBgr } = props;

  return (
    <div className={`base-wrap ${enableBgr ? 'bgr' : ''}`}>
      <div className='base-section-2'>
        {props.children}
      </div>
    </div>
  )
}

export default BaseLayout;
