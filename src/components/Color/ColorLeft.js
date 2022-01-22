const ColorLeft = ({ left, bottom, width, height, color }) => {
  return (
    <div
      className="absolute blur "
      style={{
        left: left,
        bottom: bottom,
        width: width,
        height: height,
        background: color,
      }}
    ></div>
  );
};

export default ColorLeft;
