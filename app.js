const root = document.querySelector("#root");

function Box({ style, size, ...rest }) {
  const sizeClassName = size ? `box--${size}` : "box";
  return (
    <div
      className={sizeClassName}
      style={{ padding: 20, ...style }}
      {...rest}
    />
  );
}

const element = (
  <div>
    <Box size="small" style={{ backgroundColor: "lime" }}>box 1</Box>
    <Box size="medium" style={{ backgroundColor: "pink" }}>box 2</Box>
    <Box size="large" style={{ backgroundColor: "lightblue" }}>
      box 3
    </Box>

  </div>
);

ReactDOM.render(element, root);
