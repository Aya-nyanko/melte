import sharp from 'sharp';
for(const [source,name]of [['package','hero-package'],['wrapper','hero-wrapper'],['cookie-section','hero-cut'],['cookie-baseline','hero-whole'],['hero-ingredients','hero-ingredients']]){
 const input=`assets/originals/${source}-v1.png`;const {data,info}=await sharp(input).ensureAlpha().raw().toBuffer({resolveWithObject:true});let l=info.width,t=info.height,r=0,b=0;
 for(let y=0;y<info.height;y++)for(let x=0;x<info.width;x++)if(data[(y*info.width+x)*4+3]>220){l=Math.min(l,x);t=Math.min(t,y);r=Math.max(r,x);b=Math.max(b,y)}
 l=Math.max(0,l-12);t=Math.max(0,t-12);r=Math.min(info.width-1,r+12);b=Math.min(info.height-1,b+12);
 for(const width of [640,1280])await sharp(input).extract({left:l,top:t,width:r-l+1,height:b-t+1}).resize({width,withoutEnlargement:true}).webp({quality:88}).toFile(`assets/web/${name}-${width}.webp`);
}
