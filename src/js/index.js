import "../scss/stylesheets.scss";
import block from "./block";
import board from "./board";

block.init();
board.init(10, 10);

const bind = () => {
  // tetris로 옮겨야함.
  document.body.addEventListener("keyup", (e) => {
    const { keyCode } = e;

    if (keyCode === 38) {
      console.log("up");
      board.update(block.rotate().getBlock());
    } else {
      const currentBlockShape = block.getBlock();
      const point = board.getPoint();

      if (keyCode === 40) {
        board.setPoint({ y: point.y + 1 });
        console.log("down");
      } else if (keyCode === 37) {
        board.setPoint({ x: point.x - 1 });
        console.log("left");
      } else if (keyCode === 39) {
        board.setPoint({ x: point.x + 1 });
        console.log("right");
      }
    }

    console.log(board.getPoint());
    block.getState();
  });
};

bind();
