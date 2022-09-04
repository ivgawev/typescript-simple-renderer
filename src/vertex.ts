class Vertex {
      public x: number;
      public y: number;
      public z: number | undefined;

      constructor (x: number, y: number, z?: number) {
            this.x = x;
            this.y = y;
            this.z = z;
      }

      public rotate (center: Vertex, theta: number, phi: number) {
            const ct = Math.cos(theta);
            const st = Math.sin(theta);
            const cp = Math.cos(phi);
            const sp = Math.sin(phi);

            const x = this.x - center.x;
            const y = this.y - center.y;
            const z = this.z - center.z;

            this.x = ct * x - st * cp * y + st * sp * z + center.x;
            this.y = st * x + ct * cp * y - ct * sp * z + center.y;
            this.z = sp * y + cp * z + center.z;
      }
}

export { Vertex };
