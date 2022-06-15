import { BufferGeometry, Float32BufferAttribute, Vector4 } from "three";

class HyperCubeGeometry extends BufferGeometry {
  constructor(
    length = 1,
    lengthSegments = 1,
  ) {
    super();

    this.type = "HyperCubeGeometry";

    this.parameters = {
      length: length,
      lengthSegments: lengthSegments
    };

    const scope = this;

    // segments

    lengthSegments = Math.floor(lengthSegments);

    // Half height

    const halfLength = length / 2;

    // buffers

    const indices = [];
    const vertices = [];
    const normals = [];
    const uvs = [];

    // helper variables

    let numberOfVertices = 0;
    let groupStart = 0;

    // build each side of the Cube geometry
    // initialize the vertices and normals
    
    for (let i = 0; i < 2; i++) {
        for(let j = 0; j < 2; j++) {
            for(let n = 0; n < 2; n++) {
                for(let p = 0; p < 2; p++) {
                    const [a, b, c, d] = [i < 1 ? 1 : -1, j < 1 ? 1 : -1, n < 1 ? 1 : -1, p < 1 ? 1 : -1]
                    normals.push(a, b, c, d);
                }
            }
        }
    }
    vertices.push(normals.map((value, index, arr) => halfLength * value));

    // build the indices

    

    // build geometry

    console.log("vertices => ", vertices);
    console.log("normals => ", normals);
    console.log("uvs => ", uvs);
    this.setIndex(indices);
    this.setAttribute("position", new Float32BufferAttribute(vertices, 4));
    this.setAttribute("normal", new Float32BufferAttribute(normals, 4));
    this.setAttribute("uv", new Float32BufferAttribute(uvs, 3));
  }

  static fromJSON(data) {
    return new HyperCubeGeometry(
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

export { HyperCubeGeometry, HyperCubeGeometry as HyperCubeBufferGeometry };
