// Calendly.js

import { InlineWidget } from 'react-calendly';

const Calendly = ({ url }) => {
  return (
    <div>
      <InlineWidget url={url} />
    </div>
  );
};

export default Calendly;
