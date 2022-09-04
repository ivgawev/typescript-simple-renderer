import { Cube } from '#/cube';
import { Vertex } from '#/vertex';

class Renderer {
      private readonly canvas: HTMLCanvasElement;
      private readonly context: CanvasRenderingContext2D;
      public width: number;
      public height: number;
      public readonly objects: Cube[];

      constructor () {
            this.canvas = document.createElement('canvas');
            this.context = this.canvas.getContext('2d');
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.objects = [];
            this.canvas.style.background = '#fef2f2';
            document.body.prepend(this.canvas);
      }

      public render = () => {
            this.context.clearRect(0, 0, this.width, this.height);
            this.context.strokeStyle = '#7f1d1d';
            this.context.fillStyle = 'rgba(248, 113, 113, 0.5)';

            for (const object of this.objects) {
                  for (const face of object.faces) {
                        const projection = new Vertex(face[0].x, face[0].z);
                        this.context.beginPath();
                        this.context.moveTo(projection.x + (this.width / 2), -projection.y + (this.height / 2));

                        for (let v = 1; v < face.length; v++) {
                              const projection = new Vertex(face[v].x, face[v].z);
                              this.context.lineTo(projection.x + (this.width / 2), -projection.y + (this.height / 2));
                        }

                        this.context.closePath();
                        this.context.stroke();
                        this.context.fill();
                  }

                  object.rotate();
            }

            window.requestAnimationFrame(this.render);
      }
}

export { Renderer };
