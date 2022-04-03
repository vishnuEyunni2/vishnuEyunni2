import React from 'react';
import './NeonTitle.scss';
import styled from 'styled-components';

const NeonTitle = ({ className, children }) => {

  return (
    <div >
      <h2 className={className}>{children}</h2>
      <br />
    </div>
  )
}

export const BarLine = styled.div`
  border: 1px solid gray;
  margin: 0 1rem;
`

const NeonLabel = styled(NeonTitle)`
  color: #fff;
  text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f09,
  0 0 80px #f09, 0 0 90px #f09, 0 0 100px #f09, 0 0 150px #f09;
  font-weight: 300;
  font-size: 2rem;
`

export default NeonLabel;
