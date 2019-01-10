import block from "./block";

block.init();

const bind = () => {
  // tetris로 옮겨야함.
  document.body.addEventListener("keyup", (e) => {
    const { keyCode } = e;

    if (keyCode === 38) {
      console.log(block.rotate().getBlock());
    } else if (keyCode === 40) {
      console.log("down");
    } else if (keyCode === 37) {
      console.log("left");
    } else if (keyCode === 39) {
      console.log("right");
    }
  });
};

bind();
