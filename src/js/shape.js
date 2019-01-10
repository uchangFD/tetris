import _ from "./utils";

const blocks = [
  [
    // ㅗ
    { top: 1, left: 1, right: 1 },
    // ㅏ
    {
      top: 1,
      bottom: 1,
      right: 1,
    },
    // ㅜ
    {
      bottom: 1,
      left: 1,
      right: 1,
    },
    // ㅓ
    {
      top: 1,
      bottom: 1,
      left: 1,
    },
  ],
  [
    {
      // ㅡ
      left: 1,
      right: 2,
    },
    {
      // ㅣ
      top: 1,
      bottom: 2,
    },
  ],
  [
    {
      // ㄴ
      top: 1,
      right: 2,
    },
    {
      // ...
      bottom: 2,
      right: 1,
    },
    {
      // ㄱ
      bottom: 1,
      left: 2,
    },
    {
      // ㄴ
      top: 2,
      left: 1,
    },
  ],
  [
    {
      // ㅁ : 중심점부터 늘어날 property name을 정의하는게 햇갈리네.
      top: 1,
      topRight: 1,
      right: 1,
    },
  ],
];

const _getRandomNum = (blockCount) => {
  return Math.floor(Math.random() * blockCount);
};
const _getRandomShape = (randomNum) => {
  return () => {
    return blocks[randomNum];
  };
};
const getBlock = _.chain(blocks.length)(_getRandomNum, _getRandomShape);

export default {
  getBlock,
};
