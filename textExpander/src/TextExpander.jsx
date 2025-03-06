import PropTypes from "prop-types";
import { useState } from "react";

export default function TextExpander({
  children,
  padding = 0,
  buttonColor,
  bgButtonColor,
  bgColor,
  size = children.length,
}) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const styleText = {
    padding: `${padding}px`,
    backgroundColor: bgColor,
  };
  const styleButton = {
    backgroundColor: bgButtonColor,
    color: buttonColor,
  };
  const text = children.split(" ").slice(0, size).join(" ");
  return (
    <div style={styleText}>
      {show ? <>{children}</> : <>{text}</>}
      <button style={styleButton} onClick={toggleShow}>
        {show ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
TextExpander.propTypes = {
  children: PropTypes.node,
  padding: PropTypes.number,
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  bgColor: PropTypes.string,
  bgButtonColor: PropTypes.string,
  size: PropTypes.number,
};
