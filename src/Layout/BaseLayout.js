import React from 'react';
import './BaseLayout.scss';

const BaseLayout = (props) => {

  const { enableBgr } = props;

  return (
    <div className='base-wrap'>
      {
        enableBgr
        &&
        <div className='base-section-1' >
        </div>
      }
      <div className='base-section-2'>
        {props.children}
      </div>
    </div>
  )
}

export default BaseLayout;
