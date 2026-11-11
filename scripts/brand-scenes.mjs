import sharp from 'sharp';
const logo=async w=>sharp('assets/brand/melte-logo.svg').resize(w).png().toBuffer();
const label=(w)=>Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="70"><text x="${w/2}" y="28" fill="#07552E" font-family="sans-serif" font-size="16" letter-spacing="3" text-anchor="middle">BAKED SWEETS</text></svg>`);
for(const [name,items] of [['gift',[[665,270,340]]],['group',[[960,270,350],[215,495,260]]],['wrapper',[[480,390,560]]]]){
 const composites=[];for(const [left,top,width]of items){composites.push({input:await logo(width),left,top},{input:label(width),left,top:top+Math.round(width*.244)+14});}
 await sharp(`assets/originals/${name}-blank-v1.png`).composite(composites).png().toFile(`assets/originals/${name}-v1.png`);
}
