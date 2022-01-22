const ColorRight = ({ right, bottom, width, height, color }) => {
  return (
    <div
      className="absolute blur "
      style={{
        right: right,
        bottom: bottom,
        width: width,
        height: height,
        background: color,
      }}
    ></div>
  );
};

export default ColorRight;
