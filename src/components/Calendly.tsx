// Calendly.js
import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = ({ styles }) => {
  return (
    <div style={styles}>
      <InlineWidget 
        url="https://calendly.com/gebremess23/30min" 
       
      />
    </div>
  );
};

export default Calendly;
