import PropTypes from "prop-types";

export default function Footer({ children }) {
  return (
    <footer className="flex px-2 justify-between items-center w-full">
      {children}
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
