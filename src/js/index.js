import _ from "./utils/underbar";
import states from "./states";
import block from "./block";

const tetrisBoard = document.querySelector("#tetrisBoard");
// const addBlockBoard = document.querySelector("#addBlock");
const tetrisBoardCtx = tetrisBoard.getContext("2d");

const ctxPipe = (ctx) => (states) => (...funcs) => {
  return funcs.forEach((func) => {
    func(ctx, states);
  });
};

let tetrisBoardCtxPipe = ctxPipe(tetrisBoardCtx);
let blockStateIdx = 0;
let focusType = "tetrisBoard";

const init = () => {
  console.group("init");
  tetrisBoard.width = 400;
  tetrisBoard.height = 600;
  // getBlockState
  const blockStates = block.getBlockStates();
  const blockState = block.getNextBlockState(blockStates)(blockStateIdx);

  // setStates
  states.init({
    // 위치
    position: { x: 5, y: 0 },
    // 현재 블럭 상태들
    currentBlockStates: blockStates,
    // 현재 블럭 상태
    currentBlockState: blockState,
    // 셀 사이즈
    cellSize: { width: 40, height: 40 },
    // board size
    boardSize: { width: tetrisBoard.width, height: tetrisBoard.height },
  });

  console.log(states.displayStates());
  // display
  tetrisBoardCtxPipe = tetrisBoardCtxPipe(states.getStates());
  tetrisBoardCtxPipe(removePaintedOnes, paintBoard, paintBlock);

  console.groupEnd("init");
};

const checkEdge = (position, states) => {
  const {
    boardSize: { width: boardWidth, height: boardHeight },
    cellSize: { width: cellWidth, height: cellHeight },
    currentBlockState: { x: blockX, y: blockY },
  } = states;
  const { x: positionX, y: positionY } = position;
  const paintXDirection = blockX > 0 ? "right" : "left";
  const paintYDirection = blockY > 0 ? "bottom" : "top";
  const maxPosX = boardWidth / cellWidth;
  const maxPosY = boardHeight / cellHeight;
  let minPosX = 0;
  let minPosY = 0;
  let currPosX = positionX + blockX;
  let currPosY = positionY + blockY;

  if (paintXDirection === "left") {
    minPosX = blockX;
  }

  if (paintYDirection === "top") {
    minPosY = blockY;
  }

  // console.log(maxPosX);
  // console.log(maxPosY);
  // console.log(minPosX);
  // console.log(minPosY);
  // console.log(currPosX);
  // console.log(currPosY);

  if (currPosX <= minPosX || currPosY <= minPosY || maxPosX <= currPosX || maxPosY <= currPosY) {
    console.log("block 위치 적용");
    return false;
  }

  return true;
};
const removePaintedOnes = (ctx) => {
  ctx.clearRect(0, 0, tetrisBoard.width, tetrisBoard.height);
};
const paintBoard = (ctx, states) => {
  console.log("paintBoard");
  // 라인 그리기.
  const {
    boardSize: { width: boardWidth, height: boardHeight },
    cellSize: { width: cellWidth, height: cellHeight },
  } = states;
  const maxCellXCount = boardWidth / cellWidth;
  const maxCellYCount = boardHeight / cellHeight;

  for (let i = 1; i < maxCellXCount; i++) {
    ctx.beginPath();
    ctx.moveTo(cellWidth * i, 0);
    ctx.lineTo(cellWidth * i, boardHeight);
    ctx.stroke();
  }

  for (let i = 1; i < maxCellYCount; i++) {
    ctx.beginPath();
    ctx.moveTo(0, cellHeight * i);
    ctx.lineTo(boardWidth, cellHeight * i);
    ctx.stroke();
  }
};
const paintBlock = (ctx, states) => {
  console.group("paintBlock");

  const {
    position: { x: positionX, y: positionY },
    currentBlockState: { x: blockX, y: blockY },
    cellSize: { width: cellWidth, height: cellHeight },
  } = states;
  const paintXDirection = blockX > 0 ? "right" : "left";
  const paintYDirection = blockY > 0 ? "bottom" : "top";
  const posXInterv = Math.abs(blockX);
  const posYInterv = Math.abs(blockY);

  // console.log("paintXDirection: ", paintXDirection);
  // console.log("paintYDirection: ", paintYDirection);
  // console.log("posXInterv: ", posXInterv);
  // console.log("posYInterv: ", posYInterv);

  let currentPositionX = positionX;
  let currentPositionY = positionY;

  if (paintXDirection === "left") {
    currentPositionX -= posXInterv;
  }

  if (paintYDirection === "top") {
    currentPositionY -= posYInterv;
  }

  // 가로 블럭
  for (let i = 0; i <= posXInterv; i++) {
    let _cellWidth = cellWidth;
    let posX = currentPositionX * cellWidth + cellWidth * i;
    let posY = positionY * cellHeight;

    ctx.fillRect(posX, posY, _cellWidth, cellHeight);
  }

  // 세로 블럭
  for (let i = 0; i <= posYInterv; i++) {
    let _cellHeight = cellHeight;
    let posX = positionX * cellWidth;
    let posY = currentPositionY * cellHeight + cellHeight * i;

    ctx.fillRect(posX, posY, cellWidth, _cellHeight);
  }

  console.groupEnd("paintBlock");
};

const rotateBlock = () => {
  console.group("rotateBlock");
  const currentBlockStates = states.getCurrentBlockStates();
  let newBlockState;

  blockStateIdx = ++blockStateIdx % currentBlockStates.length;
  newBlockState = block.getNextBlockState(currentBlockStates)(blockStateIdx);

  states.setCurrentBlockState(newBlockState);
  console.groupEnd("rotateBlock");
};

const repaintBlock = () => {
  console.group("repaintBlock");
  tetrisBoardCtxPipe(removePaintedOnes, paintBoard, paintBlock);
  console.groupEnd("repaintBlock");
};

document.body.querySelector("#app").append(tetrisBoard);

init();

window.addEventListener("keyup", ({ keyCode }) => {
  if (focusType !== "tetrisBoard") {
    return;
  }
  const position = states.getPosition();
  let posX = position.x;
  let posY = position.y;

  if (keyCode === 38) {
    // up
    rotateBlock();
  } else if (keyCode === 40) {
    // down
    posY += 1;
  } else if (keyCode === 37) {
    // left
    posX -= 1;
  } else if (keyCode === 39) {
    // right
    posX += 1;
  }

  if (!checkEdge({ x: posX, y: posY }, states.getStates())) {
    return;
  }

  states.setPosition({ x: posX, y: posY });
  repaintBlock();
});

tetrisBoard.addEventListener("click", () => {
  focusType = "tetrisBoard";
});
// addBlockBoard.addEventListener("click", () => {
//   focusType = "addBlockBoard";
// });
