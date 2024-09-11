import classes from "./glitch_loader.module.css";

export default function GlitchLoader() {
  return (
    <div className={classes.loader}>
      <div data-glitch="Loading..." className={classes.glitch}>
        Loading...
      </div>
    </div>
  );
}
