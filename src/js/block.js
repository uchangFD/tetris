// 블록 만들기
// 블록 회전하기
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

class Block {
  constructor() {
    this.state = {
      currentBlockShape: undefined,
      currentBlockState: undefined,
      rotateCount: 0,
    };
  }

  init() {
    const blockState = blocks[this._random()];
    this.state.rotateCount = 0;
    this.state.currentBlockState = blockState;
    return this;
  }

  rotate() {
    const state = this.state;
    const rotateCount = ++state.rotateCount % state.currentBlockState.length;
    state.currentBlockShape = state.currentBlockState[rotateCount];
    return this;
  }

  getBlock() {
    return this.state.currentBlockShape;
  }

  getState() {
    const { currentBlockShape, currentBlockState, rotateCount } = this.state;

    console.group("== Block State ==");
    console.log("currentBlockShape: ", currentBlockShape);
    console.log("currentBlockState: ", currentBlockState);
    console.log("rotateCount: ", rotateCount);
    console.groupEnd("== Block State ==");
  }

  _random() {
    return Math.floor(Math.random() * blocks.length);
  }
}

export default new Block();
