const root = document.querySelector("#root");

function Box({ style, className = "", ...rest }) {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{ padding: 20, ...style }}
      {...rest}
    />
  );
}

const element = (
  <div>
    <Box className="box--small" style={{ backgroundColor: "lime" }}>box 1</Box>
    <Box className="box--medium" style={{ backgroundColor: "pink" }}>box 2</Box>
    <Box className="box--large" style={{ backgroundColor: "lightblue" }}>
      box 3
    </Box>

  </div>
);

ReactDOM.render(element, root);
