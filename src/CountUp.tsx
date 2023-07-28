import React, { useState } from 'react';

const CountUp = ():JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <p>{new Date().toTimeString()}</p>
    </div>
  );
};
export default CountUp;