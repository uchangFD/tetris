let states = {
  // 위치
  position: { x: 0, y: 0 },
  // 현재 블럭 상태들
  currentBlockStates: [],
  // 현재 블럭 상태
  currentBlockState: {},
  // 셀 사이즈
  cellSize: { width: 20, height: 20 },
  // board size
  boardSize: { width: 0, height: 0 },
};
const displayStates = () => states;
const getPosition = () => states.position;
const getCurrentBlockStates = () => states.currentBlockStates;
const getCurrentBlockState = () => states.currentBlockState;
const getCellSize = () => states.cellSize;
const getBoardSize = () => states.boardSize;
const getStates = () => states;

const setPosition = (pos) => {
  states.position = {
    x: pos.x || states.position.x,
    y: pos.y || states.position.y,
  };
};
const setCurrentBlockStates = (blockStates) => {
  states.currentBlockStates = blockStates;
};
const setCurrentBlockState = (blockState) => {
  states.currentBlockState = blockState;
};
const setCellSize = (size) => {
  states.cellSize = {
    width: size.width || states.cellSize.width,
    height: size.height || states.cellSize.height,
  };
};

const init = (_states) => {
  states = {
    ...states,
    ..._states,
  };
};

export default {
  getPosition,
  getCurrentBlockStates,
  getCurrentBlockState,
  getCellSize,
  getBoardSize,
  getStates,
  setPosition,
  setCurrentBlockStates,
  setCurrentBlockState,
  setCellSize,
  init,
  displayStates,
};
