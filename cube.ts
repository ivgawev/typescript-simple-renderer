import { Vertex } from '#/vertex';

class Cube {
      public center: Vertex;
      public side: number;
      public vertices: Vertex[];
      public faces: Vertex[][];

      constructor (center: Vertex, side: number) {
            this.center = center;
            this.side = side;

            const distance = this.side / 2;
            this.vertices = [
                  new Vertex(center.x - distance, center.y - distance, center.z + distance),
                  new Vertex(center.x - distance, center.y - distance, center.z - distance),
                  new Vertex(center.x + distance, center.y - distance, center.z - distance),
                  new Vertex(center.x + distance, center.y - distance, center.z + distance),
                  new Vertex(center.x + distance, center.y + distance, center.z + distance),
                  new Vertex(center.x + distance, center.y + distance, center.z - distance),
                  new Vertex(center.x - distance, center.y + distance, center.z - distance),
                  new Vertex(center.x - distance, center.y + distance, center.z + distance)
            ];

            this.faces = [
                  [this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]],
                  [this.vertices[3], this.vertices[2], this.vertices[5], this.vertices[4]],
                  [this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]],
                  [this.vertices[7], this.vertices[6], this.vertices[1], this.vertices[0]],
                  [this.vertices[7], this.vertices[0], this.vertices[3], this.vertices[4]],
                  [this.vertices[1], this.vertices[6], this.vertices[5], this.vertices[2]]
            ];
      }

      public rotate () {
            for (const vertex of this.vertices) {
                  vertex.rotate(this.center, -Math.PI / 720, Math.PI / 720);
            }
      }
}

export { Cube };
