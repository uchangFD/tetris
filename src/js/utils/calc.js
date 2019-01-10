const pointToDistance = (point) => {
  return (blockState) => {
    const result = {
      point: Object.assign({}, point),
    };

    for (let prop in blockState) {
      if (blockState.hasOwnProperty(prop)) {
        let x = point.x;
        let y = point.y;

        switch (prop) {
          case "left":
            x += -1;
            break;
          case "right":
            x += 1;
            break;
          case "top":
            y += -1;
            break;
          case "bottom":
            y += 1;
            break;
          case "topRight":
            x += 1;
            y += 1;
            break;
          default:
            continue;
        }

        result[prop] = {
          x,
          y,
        };
      }
    }

    return result;
  };
};

export default {
  pointToDistance,
};
