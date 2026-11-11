import sharp from 'sharp';
for(const [input,name]of [['cookie-baseline','whole'],['cracked','cracked'],['broken','broken']]){
 const {data,info}=await sharp(`assets/originals/${input}-v1.png`).ensureAlpha().raw().toBuffer({resolveWithObject:true});let x0=info.width,y0=info.height,x1=0,y1=0;
 for(let y=0;y<info.height;y++)for(let x=0;x<info.width;x++){if(data[(y*info.width+x)*4+3]>200){x0=Math.min(x0,x);y0=Math.min(y0,y);x1=Math.max(x1,x);y1=Math.max(y1,y)}}
 const b=await sharp(`assets/originals/${input}-v1.png`).extract({left:x0,top:y0,width:x1-x0+1,height:y1-y0+1}).resize(1060,940,{fit:'contain',background:'#00000000'}).png().toBuffer();
 await sharp({create:{width:1280,height:1280,channels:4,background:'#00000000'}}).composite([{input:b,left:110,top:150}]).webp({quality:85}).toFile(`assets/web/moment-${name}-1280.webp`);
}
