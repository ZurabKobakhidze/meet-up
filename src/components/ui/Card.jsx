import classes from "./Card.module.css";

function Card(proprs) {
  return <div className={classes.card}>
    {proprs.children}
  </div>;
}

export default Card;
