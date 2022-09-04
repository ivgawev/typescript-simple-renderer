(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();class h{constructor(t,o,s){this.x=t,this.y=o,this.z=s}rotate(t,o,s){const e=Math.cos(o),i=Math.sin(o),c=Math.cos(s),a=Math.sin(s),f=this.x-t.x,d=this.y-t.y,l=this.z-t.z;this.x=e*f-i*c*d+i*a*l+t.x,this.y=i*f+e*c*d-e*a*l+t.y,this.z=a*d+c*l+t.z}}class v{constructor(){this.render=()=>{this.context.clearRect(0,0,this.width,this.height),this.context.strokeStyle="#7f1d1d",this.context.fillStyle="rgba(248, 113, 113, 0.5)";for(const t of this.objects){for(const o of t.faces){const s=new h(o[0].x,o[0].z);this.context.beginPath(),this.context.moveTo(s.x+this.width/2,-s.y+this.height/2);for(let e=1;e<o.length;e++){const i=new h(o[e].x,o[e].z);this.context.lineTo(i.x+this.width/2,-i.y+this.height/2)}this.context.closePath(),this.context.stroke(),this.context.fill()}t.rotate()}window.requestAnimationFrame(this.render)},this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.objects=[],this.canvas.style.background="#fef2f2",document.body.prepend(this.canvas)}}class u{constructor(t,o){this.center=t,this.side=o;const s=this.side/2;this.vertices=[new h(t.x-s,t.y-s,t.z+s),new h(t.x-s,t.y-s,t.z-s),new h(t.x+s,t.y-s,t.z-s),new h(t.x+s,t.y-s,t.z+s),new h(t.x+s,t.y+s,t.z+s),new h(t.x+s,t.y+s,t.z-s),new h(t.x-s,t.y+s,t.z-s),new h(t.x-s,t.y+s,t.z+s)],this.faces=[[this.vertices[0],this.vertices[1],this.vertices[2],this.vertices[3]],[this.vertices[3],this.vertices[2],this.vertices[5],this.vertices[4]],[this.vertices[4],this.vertices[5],this.vertices[6],this.vertices[7]],[this.vertices[7],this.vertices[6],this.vertices[1],this.vertices[0]],[this.vertices[7],this.vertices[0],this.vertices[3],this.vertices[4]],[this.vertices[1],this.vertices[6],this.vertices[5],this.vertices[2]]]}rotate(){for(const t of this.vertices)t.rotate(this.center,-Math.PI/720,Math.PI/720)}}const n=new v,x=n.width/2,y=n.height/2,w=new h(0,11*y/10,0),g=new u(w,x/4);n.objects.push(g);n.render();
