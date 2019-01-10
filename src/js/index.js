import _ from "./utils";
import block from "./block";
import board from "./board";

block.init();
board.init({ width: 10, height: 10 });

const bind = () => {
  // tetris로 옮겨야함.
  document.body.addEventListener("keyup", (e) => {
    const { keyCode } = e;

    if (keyCode === 38) {
      console.log(block.rotate().getBlock());
      console.log("up");
    } else {
      const { x, y } = board.getPoint();

      if (keyCode === 40) {
        board.updatePoint(x, y - 1);
        console.log("down");
      } else if (keyCode === 37) {
        board.updatePoint(x - 1, y);
        console.log("left");
      } else if (keyCode === 39) {
        board.updatePoint(x + 1, y);
        console.log("right");
      }

      const boardPoint = _.calc.pointToDistance(board.getPoint())(block.getBlock());
      console.log(boardPoint);
    }
  });
};

bind();
