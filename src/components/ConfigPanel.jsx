

function ConfigPanel({ selected }) {
  return (
    <div className="config-panel">
      {selected ? (
        <div>
          <h3>Configuration</h3>
          <p>Selected Item: {selected}</p>
        </div>
      ) : (
        <p>Select an item to configure</p>
      )}
    </div>
  );
}

export default ConfigPanel;
