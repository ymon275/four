import { BufferGeometry, Float32BufferAttribute, Vector4 } from "three";

class HyperBoxGeometry extends BufferGeometry {
  constructor(
    length = 1,
    width = 1,
    height = 1,
    depth = 1,
    lengthSegments = 1,
    widthSegments = 1,
    heightSegments = 1,
    depthSegments = 1
  ) {
    super();

    this.type = "HyperBoxGeometry";

    this.parameters = {
      length: length,
      width: width,
      height: height,
      depth: depth,
      lengthSegments: lengthSegments,
      widthSegments: widthSegments,
      heightSegments: heightSegments,
      depthSegments: depthSegments,
    };

    const scope = this;

    // segments

    lengthSegments = Math.floor(lengthSegments);
    widthSegments = Math.floor(widthSegments);
    heightSegments = Math.floor(heightSegments);
    depthSegments = Math.floor(depthSegments);

    // buffers

    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];

    // helper variables

    let numberOfVertices = 0;
    let groupStart = 0;

    // build each side of the Box geometry

    buildPlane(
        "z",
        "y",
        "x",
        "w",
        -1,
        -1,
        -1,
        length,
        depth,
        height,
        width,
        depthSegments,
        heightSegments,
        0
      );
      buildPlane(
        "z",
        "y",
        "x",
        "w",
        1,
        1,
        -1,
        length,
        depth,
        height,
        -width,
        depthSegments,
        heightSegments,
        1
      ); // nx
      buildPlane(
        "x",
        "z",
        "y",
        "w",
        1,
        1,
        1,
        length,
        width,
        depth,
        height,
        widthSegments,
        depthSegments,
        2
      ); // py
      buildPlane(
        "x",
        "z",
        "y",
        "w",
        -1,
        1,
        -1,
        length,
        width,
        depth,
        -height,
        widthSegments,
        depthSegments,
        3
      ); // ny
      buildPlane(
        "x",
        "y",
        "z",
        "w",
        -1,
        1,
        -1,
        length,
        width,
        height,
        depth,
        widthSegments,
        heightSegments,
        4
      ); // pz
      buildPlane(
        "x",
        "y",
        "z",
        "w",
        1,
        -1,
        -1,
        length,
        width,
        height,
        -depth,
        widthSegments,
        heightSegments,
        5
      ); // nz
      buildPlane(
        "z",
        "y",
        "x",
        "w",
        -1,
        -1,
        -1,
        length,
        depth,
        height,
        width,
        depthSegments,
        heightSegments,
        0
      );
      buildPlane(
        "z",
        "y",
        "x",
        "w",
        1,
        1,
        -1,
        length,
        depth,
        height,
        -width,
        depthSegments,
        heightSegments,
        1
      ); // nx
      buildPlane(
        "x",
        "z",
        "y",
        "w",
        1,
        1,
        1,
        length,
        width,
        depth,
        height,
        widthSegments,
        depthSegments,
        2
      ); // py
      buildPlane(
        "x",
        "z",
        "y",
        "w",
        -1,
        1,
        -1,
        length,
        width,
        depth,
        -height,
        widthSegments,
        depthSegments,
        3
      ); // ny
      buildPlane(
        "x",
        "y",
        "z",
        "w",
        -1,
        1,
        -1,
        length,
        width,
        height,
        depth,
        widthSegments,
        heightSegments,
        4
      ); // pz
      buildPlane(
        "x",
        "y",
        "z",
        "w",
        1,
        -1,
        -1,
        length,
        width,
        height,
        -depth,
        widthSegments,
        heightSegments,
        5
      ); // nz
      buildPlane(
        "z",
        "y",
        "x",
        "w",
        -1,
        -1,
        -1,
        length,
        depth,
        height,
        width,
        depthSegments,
        heightSegments,
        0
      );
      buildPlane(
        "z",
        "y",
        "x",
        "w",
        1,
        1,
        -1,
        length,
        depth,
        height,
        -width,
        depthSegments,
        heightSegments,
        1
      ); // nx
      buildPlane(
        "x",
        "z",
        "y",
        "w",
        1,
        1,
        1,
        length,
        width,
        depth,
        height,
        widthSegments,
        depthSegments,
        2
      ); // py
      buildPlane(
        "x",
        "z",
        "y",
        "w",
        -1,
        1,
        -1,
        length,
        width,
        depth,
        -height,
        widthSegments,
        depthSegments,
        3
      ); // ny
      buildPlane(
        "x",
        "y",
        "z",
        "w",
        -1,
        1,
        -1,
        length,
        width,
        height,
        depth,
        widthSegments,
        heightSegments,
        4
      ); // pz
      buildPlane(
        "x",
        "y",
        "z",
        "w",
        1,
        -1,
        -1,
        length,
        width,
        height,
        -depth,
        widthSegments,
        heightSegments,
        5
      ); // nz
      buildPlane(
        "z",
        "y",
        "x",
        "w",
        -1,
        -1,
        -1,
        length,
        depth,
        height,
        width,
        depthSegments,
        heightSegments,
        0
      );
      buildPlane(
        "z",
        "y",
        "x",
        "w",
        1,
        1,
        -1,
        length,
        depth,
        height,
        -width,
        depthSegments,
        heightSegments,
        1
      ); // nx
      buildPlane(
        "x",
        "z",
        "y",
        "w",
        1,
        1,
        1,
        length,
        width,
        depth,
        height,
        widthSegments,
        depthSegments,
        2
      ); // py
      buildPlane(
        "x",
        "z",
        "y",
        "w",
        -1,
        1,
        -1,
        length,
        width,
        depth,
        -height,
        widthSegments,
        depthSegments,
        3
      ); // ny
      buildPlane(
        "x",
        "y",
        "z",
        "w",
        -1,
        1,
        -1,
        length,
        width,
        height,
        depth,
        widthSegments,
        heightSegments,
        4
      ); // pz
      buildPlane(
        "x",
        "y",
        "z",
        "w",
        1,
        -1,
        -1,
        length,
        width,
        height,
        -depth,
        widthSegments,
        heightSegments,
        5
      ); // nz

    // build geometry

    console.log("vertices => ", vertices);
    console.log("normals => ", normals);
    console.log("uvs => ", uvs);
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 4));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 4));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 3));

    function buildPlane(
      q,
      u,
      v,
      w,
      qdir,
      udir,
      vdir,
      length,
      width,
      height,
      depth,
      gridX,
      gridY,
      gridZ,
      materialIndex
    ) {
      const segmentLength = length / gridX;
      const segmentWidth = width / gridY;
      const segmentHeight = height / gridZ;

      const lengthHalf = length / 2;
      const widthHalf = width / 2;
      const heightHalf = height / 2;
      const depthHalf = depth / 2;

      const gridX1 = gridX + 1;
      const gridY1 = gridY + 1;
      const gridZ1 = gridZ + 1;

      let vertexCounter = 0;
      let groupCount = 0;

      const vector = new Vector4();

      // generate vertices, normals and uvs

      for (let iz = 0; iz < gridZ1; iz++) {
        const z = iz * segmentHeight - heightHalf;

        for (let iy = 0; iy < gridY1; iy++) {
          const y = iy * segmentWidth - widthHalf;

          for (let ix = 0; ix < gridX1; ix++) {
            const x = ix * segmentLength - lengthHalf;

            // set values to correct vector component

            vector[q] = x * qdir;
            vector[u] = y * udir;
            vector[v] = z * vdir;
            vector[w] = depthHalf;

            // now apply vector to vertex buffer

            vertices.push(vector.x, vector.y, vector.z, vector.w);

            // set values to correct vector component

            vector[q] = 0;
            vector[u] = 0;
            vector[v] = 0;
            vector[w] = depth > 0 ? 1 : -1;

            // now apply vector to normal buffer

            normals.push(vector.x, vector.y, vector.z, vector.w);

            // uvs

            uvs.push(ix / gridX);
            uvs.push(1 - iy / gridY);
            uvs.push(iz / gridZ);

            // counters

            vertexCounter += 1;
          }
        }
      }

      // indices

      // 1. you need three indices to draw a single face
      // 2. a single segment consists of two faces
      // 3. so we need to generate six (2*3) indices per segment

      for (let iy = 0; iy < gridY; iy++) {
        for (let ix = 0; ix < gridX; ix++) {
          const a = numberOfVertices + ix + gridX1 * iy;
          const b = numberOfVertices + ix + gridX1 * (iy + 1);
          const c = numberOfVertices + (ix + 1) + gridX1 * (iy + 1);
          const d = numberOfVertices + (ix + 1) + gridX1 * iy;

          // faces

          indices.push(a, b, d);
          indices.push(b, c, d);

          // increase counter

          groupCount += 6;
        }
      }

      // add a group to the geometry. this will ensure multi material support

      scope.addGroup(groupStart, groupCount, materialIndex);

      // calculate new start value for groups

      groupStart += groupCount;

      // update total number of vertices

      numberOfVertices += vertexCounter;
    }
  }

  static fromJSON(data) {
    return new BoxGeometry(
      data.length,
      data.width,
      data.height,
      data.depth,
      data.lengthSegments,
      data.widthSegments,
      data.heightSegments,
      data.depthSegments
    );
  }
}

export { HyperBoxGeometry, HyperBoxGeometry as HyperBoxBufferGeometry };
