import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    padding: (props) => props.spacing,
  },
  myLabel: (props) => ({
    display: "block",
    color: props.labelColor === "red" ? "red" : "blue",
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle,
  }),
});

const Button = ({ children, ...props }) => {
  const defaultProps = {
    spacing: 10,
    fontWeight: "normal",
    labelColor: "",
  };
  const classes = useStyles(defaultProps);
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

export default Button;
