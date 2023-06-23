import React from 'react';

const EmptyState = () => (
  <section className="container prose-static mt-20 mb-14 max-w-[600px]">
    <h4 className="text-center">
      No events match your filters.
      <br />
      Try adjusting them for more results.
    </h4>
  </section>
);

export default EmptyState;
