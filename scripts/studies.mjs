// Original architectural plates for the preview. Replace their URLs in content.mjs.
import { writeFileSync } from 'node:fs';
const common = `<defs>
<pattern id="lines" width="7" height="7" patternUnits="userSpaceOnUse"><path d="M0 7L7 0" stroke="#49392c" opacity=".19" stroke-width=".7"/></pattern>
<pattern id="wood" width="9" height="90" patternUnits="userSpaceOnUse"><path d="M1 0q3 30 0 52t1 38M7 0v90" fill="none" stroke="#47382d" opacity=".34" stroke-width="1"/></pattern>
<pattern id="grid" width="85" height="70" patternUnits="userSpaceOnUse"><path d="M0 70V0h85" fill="none" stroke="#584d40" opacity=".28"/></pattern>
<filter id="paper"><feTurbulence type="fractalNoise" baseFrequency=".55" numOctaves="3" stitchTiles="stitch"/></filter>
</defs>`;
const arch = (x,y,w,h,fill) => `<path d="M${x} ${y+h}v-${h-w/2}a${w/2} ${w/2} 0 0 1 ${w} 0v${h-w/2}z" fill="${fill}"/>`;
const rect=(x,y,w,h,c,r=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}"/>`;
const line=(d,c='#675846',width=1)=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${width}"/>`;
const ellipse=(x,y,rx,ry,c)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}"/>`;
function vase(x,y,s,c){return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-9 -57h18l-3 14q30 24 13 42q-15 5-36 0q-15-20 12-42z" fill="${c}"/></g>`;}
const sofa = `<g stroke="#74624c" stroke-width="1.4">${rect(104,363,388,110,'#c4b299',21)}${rect(116,347,167,77,'#e2cfaf',14)}${rect(284,347,178,77,'#d7c2a4',14)}${rect(112,419,362,34,'#dfceb1',12)}${rect(91,382,35,78,'#c6b498',11)}${rect(462,380,34,80,'#c6b498',11)}</g>`;
const gallery = arch(90,60,224,345,'#af9e83')+arch(101,71,202,334,'#675d4b')+arch(125,90,184,315,'#9a987f')+arch(141,116,151,289,'url(#lines)')+rect(432,0,200,408,'#a48869')+rect(432,0,200,408,'url(#wood)')+sofa+ellipse(374,512,112,12,'#ad987c')+rect(330,474,65,35,'#6f5943')+ellipse(362,474,99,12,'#543f32')+vase(375,467,.52,'#9e765b');
const dining=rect(54,0,245,411,'#6b6252')+rect(68,0,218,400,'#ddddc7')+rect(68,0,218,400,'url(#grid)')+line('M145 0v401m75-401v401M66 190h220','#645f50',6)+rect(412,0,164,412,'#a48e75')+rect(412,0,164,412,'url(#wood)')+line('M335 0v148','#584c3b',2)+`<path d="M265 181q15-63 70-61t72 61z" fill="#684e37"/>`+rect(167,354,19,119,'#70503a')+rect(448,354,19,119,'#70503a')+ellipse(317,348,185,23,'#765639')+vase(317,333,.72,'#c8ab87')+rect(163,384,80,59,'#846c50',16)+line('M169 429v65m64-65v65','#72583c',8)+rect(385,385,80,59,'#846c50',16)+line('M392 429v65m64-65v65','#72583c',8);
const alcove=arch(147,32,333,451,'#ab967a')+arch(163,51,300,431,'#7e6b56')+arch(185,73,274,405,'#b9a588')+arch(185,73,274,405,'url(#lines)')+rect(150,358,329,16,'#7f6951')+rect(150,373,329,86,'#b39771')+rect(150,373,329,86,'url(#wood)')+vase(251,357,1.08,'#71513d')+vase(302,358,.66,'#c8af8b')+rect(363,343,65,10,'#6c6352')+rect(371,337,53,6,'#d6c5a9');
const scenes=[['gallery',gallery,'#d8c8ad'],['dining',dining,'#d4c4ab'],['alcove',alcove,'#d0bca0']];
for(const [name,scene,color] of scenes){
 for(const detail of [false,true]){
 const view=detail?'135 130 350 315':'0 0 640 560';
 let seams=''; for(let x=-300;x<1000;x+=90)seams+=line(`M320 300L${x} 560`,'#b2a087');
 writeFileSync(`assets/${name}${detail?'-detail':''}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view}" preserveAspectRatio="xMidYMid slice">${common}${rect(0,0,640,560,color)}${rect(0,411,640,149,'#c5b39a')}${seams}${rect(0,0,640,411,color)}${scene}<path d="M0 0h157L0 361z" fill="#fff8da" opacity=".13"/><rect width="640" height="560" opacity=".06" filter="url(#paper)"/></svg>`);
 }}
