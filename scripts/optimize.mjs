import sharp from 'sharp';
import fs from 'node:fs/promises';
const dir='assets/originals';
for(const name of await fs.readdir(dir)){
 if(!name.endsWith('.png'))continue;
 const stem=name.replace('-v1.png','').replace('.png','');
 for(const width of [640,1280]) await sharp(`${dir}/${name}`).resize({width,withoutEnlargement:true}).webp({quality: /package|section|baseline/.test(name)?88:83}).toFile(`assets/web/${stem}-${width}.webp`);
}
