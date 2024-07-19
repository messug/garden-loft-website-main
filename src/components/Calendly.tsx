// Calendly.js

import { InlineWidget } from 'react-calendly';

// Define the props interface
interface CalendlyProps {
  url: string;
}

// Update the function to accept props of type CalendlyProps
const Calendly: React.FC<CalendlyProps> = ({ url }) => {
  return (
    <div>
      <InlineWidget url={url} />
    </div>
  );
};

export default Calendly;
