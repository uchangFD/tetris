class Board {
  constructor() {
    this.state = {
      point: undefined,
    };
    this.board = [];
  }

  init(col, row) {
    this.board = new Array(row);
    this.board = this.board.fill(new Array(col));

    this.state.point = {
      x: col / 2 - 1,
      y: 0,
    };
    console.log(this.board);
    return this;
  }

  getPoint() {
    return this.state.point;
  }

  setPoint(newPoint) {
    const state = this.state;
    this.state = {
      ...state,
      point: {
        ...state.point,
        newPoint,
      },
    };
  }
  // checker edge,

  // update
  update() {}
}

export default new Board();
