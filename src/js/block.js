import shape from "./shape";
import _ from "./utils";

class Block {
  constructor() {
    this.state = {
      rotateCount: 0,
      currentBlockState: undefined,
      currentBlock: undefined,
    };
  }

  init() {
    const blockState = shape.getBlock().slice();
    const state = this.state;

    state.rotateCount = 0;
    state.currentBlockState = blockState;
    state.currentBlock = blockState[0];

    return this;
  }

  rotate() {
    const state = this.state;
    const totalBlockStateCount = state.currentBlockState.length;

    state.currentBlock = state.currentBlockState[++state.rotateCount % totalBlockStateCount];

    return this;
  }

  getBlock() {
    return { ...this.state.currentBlock };
  }

  isEdge() {
    return this;
  }
}

export default new Block();
