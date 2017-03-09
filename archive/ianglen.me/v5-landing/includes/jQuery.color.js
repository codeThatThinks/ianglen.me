(function(m,n){var o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],color=m.Color=function(a,b,c,d){return new m.Color.fn.parse(a,b,c,d)},spaces={rgba:{cache:"_rgba",props:{red:{idx:0,type:"byte",empty:true},green:{idx:1,type:"byte",empty:true},blue:{idx:2,type:"byte",empty:true},alpha:{idx:3,type:"percent",def:1}}},hsla:{cache:"_hsla",props:{hue:{idx:0,type:"degrees",empty:true},saturation:{idx:1,type:"percent",empty:true},lightness:{idx:2,type:"percent",empty:true}}}},propTypes={"byte":{floor:true,min:0,max:255},"percent":{min:0,max:1},"degrees":{mod:360,floor:true}},rgbaspace=spaces.rgba.props,support=color.support={},colors,each=m.each;spaces.hsla.props.alpha=rgbaspace.alpha;function clamp(a,b,c){var d=propTypes[b.type]||{},allowEmpty=b.empty||c;if(allowEmpty&&a==null){return null}if(b.def&&a==null){return b.def}if(d.floor){a=~~a}else{a=parseFloat(a)}if(a==null||isNaN(a)){return b.def}if(d.mod){a=a%d.mod;return a<0?d.mod+a:a}return d.min>a?d.min:d.max<a?d.max:a}color.fn=color.prototype={constructor:color,parse:function(f,g,h,j){if(f===n){this._rgba=[null,null,null,null];return this}if(f instanceof m||f.nodeType){f=f instanceof m?f.css(g):m(f).css(g);g=n}var k=this,type=m.type(f),rgba=this._rgba=[],source;if(g!==n){f=[f,g,h,j];type="array"}if(type==="string"){f=f.toLowerCase();each(stringParsers,function(i,a){var b=a.re.exec(f),values=b&&a.parse(b),parsed,spaceName=a.space||"rgba",cache=spaces[spaceName].cache;if(values){parsed=k[spaceName](values);k[cache]=parsed[cache];rgba=k._rgba=parsed._rgba;return false}});if(rgba.length!==0){if(Math.max.apply(Math,rgba)===0){m.extend(rgba,colors.transparent)}return this}f=colors[f]||colors._default;return this.parse(f)}if(type==="array"){each(rgbaspace,function(a,b){rgba[b.idx]=clamp(f[b.idx],b)});return this}if(type==="object"){if(f instanceof color){each(spaces,function(a,b){if(f[b.cache]){k[b.cache]=f[b.cache].slice()}})}else{each(spaces,function(d,e){each(e.props,function(a,b){var c=e.cache;if(!k[c]&&e.to){if(f[a]==null||a==="alpha"){return}k[c]=e.to(k._rgba)}k[c][b.idx]=clamp(f[a],b,true)})})}return this}},is:function(d){var e=color(d),same=true,myself=this;each(spaces,function(_,b){var c=e[b.cache],localCache;if(c){localCache=myself[b.cache]||b.to&&b.to(myself._rgba)||[];each(b.props,function(_,a){if(c[a.idx]!=null){same=(c[a.idx]==localCache[a.idx]);return same}})}return same});return same},_space:function(){var c=[],inst=this;each(spaces,function(a,b){if(inst[b.cache]){c.push(a)}});return c.pop()},transition:function(d,e){var f=color(d),spaceName=f._space(),space=spaces[spaceName],start=this[space.cache]||space.to(this._rgba),result=start.slice();f=f[space.cache];each(space.props,function(a,b){var c=b.idx,startValue=start[c],endValue=f[c],type=propTypes[b.type]||{};if(endValue===null){return}if(startValue===null){result[c]=endValue}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod}else if(startValue-endValue>type.mod/2){startValue-=type.mod}}result[b.idx]=clamp((endValue-startValue)*e+startValue,b)}});return this[spaceName](result)},blend:function(b){if(this._rgba[3]===1){return this}var c=this._rgba.slice(),a=c.pop(),blend=color(b)._rgba;return color(m.map(c,function(v,i){return(1-a)*blend[i]+a*v}))},toRgbaString:function(){var a="rgba(",rgba=m.map(this._rgba,function(v,i){return v==null?(i>2?1:0):v});if(rgba[3]===1){rgba.pop();a="rgb("}return a+rgba.join(",")+")"},toHslaString:function(){var a="hsla(",hsla=m.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0}if(i&&i<3){v=Math.round(v*100)+"%"}return v});if(hsla[3]==1){hsla.pop();a="hsl("}return a+hsla.join(",")+")"},toHexString:function(a){var b=this._rgba.slice(),alpha=b.pop();if(a){b.push(~~(alpha*255))}return"#"+m.map(b,function(v,i){v=(v||0).toString(16);return v.length==1?"0"+v:v}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}};color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*6*h}if(h*2<1){return q}if(h*3<2){return p+(q-p)*((2/3)-h)*6}return p}spaces.hsla.to=function(c){if(c[0]==null||c[1]==null||c[2]==null){return[null,null,null,c[3]]}var r=c[0]/255,g=c[1]/255,b=c[2]/255,a=c[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0}else if(r===max){h=(60*(g-b)/diff)+360}else if(g===max){h=(60*(b-r)/diff)+120}else{h=(60*(r-g)/diff)+240}if(l===0||l===1){s=l}else if(l<=0.5){s=diff/add}else{s=diff/(2-add)}return[Math.round(h)%360,s,l,a==null?1:a]};spaces.hsla.from=function(c){if(c[0]==null||c[1]==null||c[2]==null){return[null,null,null,c[3]]}var h=c[0]/360,s=c[1],l=c[2],a=c[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q,r,g,b;return[Math.round(hue2rgb(p,q,h+(1/3))*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-(1/3))*255),a]};each(spaces,function(f,g){var h=g.props,cache=g.cache,to=g.to,from=g.from;color.fn[f]=function(d){if(to&&!this[cache]){this[cache]=to(this._rgba)}if(d===n){return this[cache].slice()}var e=m.type(d),arr=(e==="array"||e==="object")?d:arguments,local=this[cache].slice(),ret;each(h,function(a,b){var c=arr[e==="object"?a:b.idx];if(c==null){c=local[b.idx]}local[b.idx]=clamp(c,b)});if(from){ret=color(from(local));ret[cache]=local;return ret}else{return color(local)}};each(h,function(c,d){if(color.fn[c]){return}color.fn[c]=function(a){var b=m.type(a),fn=(c==='alpha'?(this._hsla?'hsla':'rgba'):f),local=this[fn](),cur=local[d.idx],match;if(b==="undefined"){return cur}if(b==="function"){a=a.call(this,cur);b=m.type(a)}if(a==null&&d.empty){return this}if(b==="string"){match=rplusequals.exec(a);if(match){a=cur+parseFloat(match[2])*(match[1]==="+"?1:-1)}}local[d.idx]=a;return this[fn](local)}})});each(o,function(i,d){m.cssHooks[d]={set:function(a,b){b=color(b);if(!support.rgba&&b._rgba[3]!==1){var c,curElem=d==="backgroundColor"?a.parentNode:a;do{c=m.curCSS(curElem,"backgroundColor")}while((c===""||c==="transparent")&&(curElem=curElem.parentNode)&&curElem.style);b=b.blend(c&&c!=="transparent"?c:"_default")}b=b.toRgbaString();a.style[d]=b}};m.fx.step[d]=function(a){if(!a.colorInit){a.start=color(a.elem,d);a.end=color(a.end);a.colorInit=true}m.cssHooks[d].set(a.elem,a.start.transition(a.end,a.pos))}});m(function(){var a=document.createElement("div"),div_style=a.style;div_style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=div_style.backgroundColor.indexOf("rgba")>-1});colors=m.Color.names={aqua:"#00ffff",azure:"#f0ffff",beige:"#f5f5dc",black:"#000000",blue:"#0000ff",brown:"#a52a2a",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkviolet:"#9400d3",fuchsia:"#ff00ff",gold:"#ffd700",green:"#008000",indigo:"#4b0082",khaki:"#f0e68c",lightblue:"#add8e6",lightcyan:"#e0ffff",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightyellow:"#ffffe0",lime:"#00ff00",magenta:"#ff00ff",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",pink:"#ffc0cb",purple:"#800080",violet:"#800080",red:"#ff0000",silver:"#c0c0c0",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);