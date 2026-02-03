import React from 'react';

function Child1({ name, theme }) {
  return (
    <div>
      Child1
      <br />
      value from state is : {name}
      <br />
      theme from state is : {theme}
    </div>
  );
}

export default Child1;