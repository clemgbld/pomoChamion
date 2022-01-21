const ColorTop = ({ top, width, height, color }) => {
  return (
    <div
      className="absolute blur"
      style={{
        top: top,
        width: width,
        height: height,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default ColorTop;
