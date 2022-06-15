const length = (v) => {
  return Math.sqrt(v.x ** 2 * v.y ** 2);
};

const signedDstToCircle = (p, center, radius) => {
  return center.sub(p).length();
};

const signedDstToBox = (p, center, size) => {
    const offset = Math.abs(p-center) - size;
    // dst from point outside box to edge (0 if inside box)
    const unsignedDst = length(Math.max(offset, 0));
    // -dst from point inside box to edge (0 if outside box)
    const dstInsideBox = Math.max(Math.min(offset, 0));
    return unsignedDst + dstInsideBox;
}