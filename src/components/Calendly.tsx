// Calendly.js

import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <InlineWidget 
        url="https://calendly.com/gebremess23/30min" 
        styles={{ height: '100%', width: '100%' }} // Ensure the widget fills the container
      />
    </div>
  );
};

export default Calendly;
