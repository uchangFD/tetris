import _ from "./utils/underbar";

// rotate 기준점
// 대각선

const blocks = [
  [
    // ㄴ
    {
      x: 2,
      y: -1,
    },
    // ?
    {
      x: 1,
      y: 2,
    },
    // ㄱ
    {
      y: 1,
      x: -2,
    },
    // ?
    {
      y: -2,
      x: 1,
    },
  ],
  [
    {
      x: 4,
      y: 0,
    },
    {
      x: 0,
      y: 4,
    },
    {
      x: -4,
      y: 0,
    },
    {
      x: 0,
      y: -4,
    },
  ],
];

// createBlock
const randomNumber = (array) => Math.floor(Math.random() * array.length);
const randomBlock = (_randomNumber, _blocks) => _blocks[_randomNumber];
const getBlockStates = () => _(blocks)
  .chain(randomNumber, randomBlock)
  .value();

// rotate
const getNextBlockState = (blockStates) => {
  let index = 0;
  return (_index) => {
    index = _index || index;
    return blockStates[index++ % blockStates.length];
  };
};

// add block
// const addBlock = (blockState) => {
//   blocks.push(blockState);
// };

export default {
  // block 상태(모든 블럭 모양) 가져오기
  getBlockStates,
  // block 상태들을 바탕으로 현재 및 회전된 블럭 상태가져오기
  getNextBlockState,
  // addBlock,
};
