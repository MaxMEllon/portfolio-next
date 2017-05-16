import React from 'react';
import { Icon } from 'react-fa';

export default function LoadingSlide() {
  return (
    <div
      style={{
        position: 'absolute',
        textAlign: 'center',
        fontSize: '120px',
        width: '100%',
        marginTop: 'calc(50vh - 60px)',
      }}
    >
      <Icon spin name="spinner" />
    </div>
  );
}
