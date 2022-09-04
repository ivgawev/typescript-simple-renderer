import { Renderer } from '#/renderer';
import { Vertex } from '#/vertex';
import { Cube } from '#/cube';

const engine = new Renderer();
const dx = engine.width / 2;
const dy = engine.height / 2;

const center = new Vertex(0, 11 * dy / 10, 0);
const cube = new Cube(center, dx / 4);
engine.objects.push(cube);

engine.render();
