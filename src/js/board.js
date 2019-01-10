class Board {
  constructor() {
    this.point = { x: 0, y: 0 };
  }

  init(size) {
    const { width, height } = size;

    this.point.x = (width / 2) % 2 === 0 ? width / 2 - 1 : width / 2;
    this.point.y = 0;

    return this;
  }

  updatePoint(x, y) {
    this.point.x = x;
    this.point.y = y;

    return this;
  }

  getPoint() {
    return { ...this.point };
  }
}

export default new Board();
