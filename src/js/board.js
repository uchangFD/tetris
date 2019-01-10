class Board {
  constructor() {
    this.point = { x: 0, y: 0 };
  }

  init = (size) => (canvasEl) => {
    const { width, height } = size;

    this.point.x = (width / 2) % 2 === 0 ? width / 2 - 1 : width / 2;
    this.point.y = 0;

    this.setCanvas(size, canvasEl);
    return this;
  };

  setCanvas(size, canvasEl) {
    const { width: canvasWidth, height: canvasHeight } = canvasEl;
    const { width, height } = size;
    const cellWidth = canvasWidth / width;
    const cellHeight = canvasHeight / height;
    const ctx = canvasEl.getContext("2d");

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // 가로
    for (let i = 0; i < width; i++) {
      ctx.beginPath();
      ctx.moveTo(0, cellHeight * (i + 1));
      ctx.lineTo(canvasWidth, cellHeight * (i + 1));
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    console.log("dada");

    // 세로
    for (let i = 0; i < height; i++) {
      ctx.beginPath();
      ctx.moveTo(cellWidth * (i + 1), 0);
      ctx.lineTo(cellWidth * (i + 1), canvasHeight);
      ctx.lineWidth = 1;
      ctx.stroke();
    }

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
