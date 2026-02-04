function Heavy() {
  const items = [];

  for (let i = 0; i < 5000; i++) {
    items.push(<p key={i}>Heavy Component Line {i}</p>);
  }

  return (
    <div>
      <h3>Heavy Component Loaded</h3>
      {items}
    </div>
  );
}

export default Heavy;