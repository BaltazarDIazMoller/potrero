(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="170",ju=0,tl=1,$u=2,Gh=1,Ju=2,Kn=3,On=0,Xe=1,we=2,Ci=0,Rs=1,Co=2,el=3,nl=4,Ku=5,Hi=100,Zu=101,Qu=102,td=103,ed=104,nd=200,id=201,sd=202,ad=203,Ro=204,Po=205,rd=206,od=207,cd=208,ld=209,hd=210,ud=211,dd=212,fd=213,pd=214,Lo=0,Do=1,Io=2,Is=3,Uo=4,No=5,zo=6,Fo=7,Rc=0,md=1,gd=2,Ri=0,vd=1,xd=2,_d=3,yd=4,Md=5,bd=6,Sd=7,Wh=300,Us=301,Ns=302,Oo=303,ko=304,Er=306,Pi=1e3,Xi=1001,Bo=1002,an=1003,wd=1004,Pa=1005,Nn=1006,zr=1007,qi=1008,ai=1009,Xh=1010,qh=1011,ya=1012,Pc=1013,ji=1014,zn=1015,Aa=1016,Lc=1017,Dc=1018,zs=1020,Yh=35902,jh=1021,$h=1022,En=1023,Jh=1024,Kh=1025,Ps=1026,Fs=1027,Tr=1028,Ic=1029,Zh=1030,Uc=1031,Nc=1033,hr=33776,ur=33777,dr=33778,fr=33779,Vo=35840,Ho=35841,Go=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,jo=37808,$o=37809,Jo=37810,Ko=37811,Zo=37812,Qo=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,ac=37819,rc=37820,oc=37821,pr=36492,cc=36494,lc=36495,Qh=36283,hc=36284,uc=36285,dc=36286,Ed=3200,Td=3201,Ar=0,Ad=1,wi="",Fe="srgb",Hs="srgb-linear",Cr="linear",ye="srgb",es=7680,il=519,Cd=512,Rd=513,Pd=514,tu=515,Ld=516,Dd=517,Id=518,Ud=519,fc=35044,sl="300 es",Qn=2e3,_r=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const ma=Math.PI/180,Ma=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Ge(i,t,e){return Math.max(t,Math.min(e,i))}function zc(i,t){return(i%t+t)%t}function Nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zd(i,t,e){return i!==t?(e-i)/(t-i):0}function ga(i,t,e){return(1-e)*i+e*t}function Fd(i,t,e,n){return ga(i,t,1-Math.exp(-e*n))}function Od(i,t=1){return t-Math.abs(zc(i,t*2)-t)}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hd(i,t){return i+Math.random()*(t-i)}function Gd(i){return i*(.5-Math.random())}function Wd(i){i!==void 0&&(al=i);let t=al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xd(i){return i*ma}function qd(i){return i*Ma}function Yd(i){return(i&i-1)===0&&i!==0}function jd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jd(i,t,e,n,s){const a=Math.cos,r=Math.sin,o=a(e/2),c=r(e/2),l=a((t+n)/2),u=r((t+n)/2),d=a((t-n)/2),h=r((t-n)/2),f=a((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const mr={DEG2RAD:ma,RAD2DEG:Ma,generateUUID:ti,clamp:Ge,euclideanModulo:zc,mapLinear:Nd,inverseLerp:zd,lerp:ga,damp:Fd,pingpong:Od,smoothstep:kd,smootherstep:Bd,randInt:Vd,randFloat:Hd,randFloatSpread:Gd,seededRandom:Wd,degToRad:Xd,radToDeg:qd,isPowerOfTwo:Yd,ceilPowerOfTwo:jd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:Jd,normalize:xe,denormalize:wn};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,s,a,r,o,c,l){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,c,l)}set(t,e,n,s,a,r,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=a,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],M=s[4],_=s[7],D=s[2],P=s[5],T=s[8];return a[0]=r*v+o*y+c*D,a[3]=r*m+o*M+c*P,a[6]=r*p+o*_+c*T,a[1]=l*v+u*y+d*D,a[4]=l*m+u*M+d*P,a[7]=l*p+u*_+d*T,a[2]=h*v+f*y+g*D,a[5]=h*m+f*M+g*P,a[8]=h*p+f*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*o*l-n*a*u+n*o*c+s*a*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*r-o*l,h=o*c-u*a,f=l*a-r*c,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*l-u*n)*v,t[2]=(o*n-s*r)*v,t[3]=h*v,t[4]=(u*e-s*c)*v,t[5]=(s*a-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(r*e-n*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-s*l,s*c,-s*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new ie;function eu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){const i=yr("canvas");return i.style.display="block",i}const rl={};function da(i){i in rl||(rl[i]=!0,console.warn(i))}function Zd(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function Qd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fe={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(i.r=ei(i.r),i.g=ei(i.g),i.b=ei(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?Cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ol=[.64,.33,.3,.6,.15,.06],cl=[.2126,.7152,.0722],ll=[.3127,.329],hl=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);fe.define({[Hs]:{primaries:ol,whitePoint:ll,transfer:Cr,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:cl,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:ol,whitePoint:ll,transfer:ye,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:cl,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let ns;class ef{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=yr("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ei(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nf=0;class nu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Or(s[r].image)):a.push(Or(s[r]))}else a=Or(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;class Ze extends Gs{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Xi,s=Xi,a=Nn,r=qi,o=En,c=ai,l=Ze.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ti(),this.name="",this.source=new nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Wh;Ze.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,_=(f+1)/2,D=(p+1)/2,P=(u+h)/4,T=(d+v)/4,I=(g+m)/4;return M>_&&M>D?M<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(M),s=P/n,a=T/n):_>D?_<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(_),n=P/s,a=I/s):D<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(D),n=T/a,s=I/a),this.set(n,s,a,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class af extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends af{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class iu extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rf extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const h=a[r+0],f=a[r+1],g=a[r+2],v=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==h||l!==f||u!==g){let m=1-o;const p=c*h+l*f+u*g+d*v,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const D=Math.sqrt(M),P=Math.atan2(D,p*y);m=Math.sin(m*P)/D,o=Math.sin(o*P)/D}const _=o*y;if(c=c*m+h*_,l=l*m+f*_,u=u*m+g*_,d=d*m+v*_,m===1-o){const D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=a[r],h=a[r+1],f=a[r+2],g=a[r+3];return t[e]=o*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-o*f,t[e+2]=l*g+u*f+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(a/2),h=c(n/2),f=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(a-l)*f,this._z=(r-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(a-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(r-s)/f,this._x=(a+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*o+s*l-a*c,this._y=s*u+r*c+a*o-n*l,this._z=a*u+r*l+n*c-s*o,this._w=r*u-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*s-o*n),u=2*(o*e-a*s),d=2*(a*n-r*e);return this.x=e+c*l+r*d-o*u,this.y=n+c*u+o*l-a*d,this.z=s+c*d+a*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kr.copy(this).projectOnVector(t),this.sub(kr)}reflect(t){return this.sub(kr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new O,dl=new Li;class Zi{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,vn):vn.fromBufferAttribute(a,r),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),La.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(t.matrixWorld),this.union(La)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),Da.subVectors(this.max,Zs),is.subVectors(t.a,Zs),ss.subVectors(t.b,Zs),as.subVectors(t.c,Zs),di.subVectors(ss,is),fi.subVectors(as,ss),Ii.subVectors(is,as);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ii.z,Ii.y,di.z,0,-di.x,fi.z,0,-fi.x,Ii.z,0,-Ii.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ii.y,Ii.x,0];return!Br(e,is,ss,as,Da)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,is,ss,as,Da))?!1:(Ia.crossVectors(di,fi),e=[Ia.x,Ia.y,Ia.z],Br(e,is,ss,as,Da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new O,new O,new O,new O,new O,new O,new O,new O],vn=new O,La=new Zi,is=new O,ss=new O,as=new O,di=new O,fi=new O,Ii=new O,Zs=new O,Da=new O,Ia=new O,Ui=new O;function Br(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Ui.fromArray(i,a);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),c=t.dot(Ui),l=e.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const of=new Zi,Qs=new O,Vr=new O;class Ws{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):of.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);const e=Qs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Vr)),this.expandByPoint(Qs.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new O,Hr=new O,Ua=new O,pi=new O,Gr=new O,Na=new O,Wr=new O;class su{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hr.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Hr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Ua),o=pi.dot(this.direction),c=-pi.dot(Ua),l=pi.lengthSq(),u=Math.abs(1-r*r);let d,h,f,g;if(u>0)if(d=r*c-o,h=r*o-c,g=a*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+r*h+2*o)+h*(r*d+h+2*c)+l}else h=a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;else h=-a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-a,-c),a),f=h*(h+2*c)+l):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-c),a),f=-d*d+h*(h+2*c)+l);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hr).addScaledVector(Ua,h),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(a=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,a){Gr.subVectors(e,t),Na.subVectors(n,t),Wr.crossVectors(Gr,Na);let r=this.direction.dot(Wr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;pi.subVectors(this.origin,t);const c=o*this.direction.dot(Na.crossVectors(pi,Na));if(c<0)return null;const l=o*this.direction.dot(Gr.cross(pi));if(l<0||c+l>r)return null;const u=-o*pi.dot(Wr);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,s,a,r,o,c,l,u,d,h,f,g,v,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,c,l,u,d,h,f,g,v,m)}set(t,e,n,s,a,r,o,c,l,u,d,h,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),a=1/rs.setFromMatrixColumn(t,1).length(),r=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const h=r*u,f=r*d,g=o*u,v=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-v*l,e[9]=-o*c,e[2]=v-h*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h+v*o,e[4]=g*o-f,e[8]=r*l,e[1]=r*d,e[5]=r*u,e[9]=-o,e[2]=f*o-g,e[6]=v+h*o,e[10]=r*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h-v*o,e[4]=-r*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*u,e[9]=v-h*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const h=r*u,f=r*d,g=o*u,v=o*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const h=r*c,f=r*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-h*d,e[8]=g*d+f,e[1]=d,e[5]=r*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-v*d}else if(t.order==="XZY"){const h=r*c,f=r*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=r*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,lf)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),mi.crossVectors(n,ln),mi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),mi.crossVectors(n,ln)),mi.normalize(),za.crossVectors(ln,mi),s[0]=mi.x,s[4]=za.x,s[8]=ln.x,s[1]=mi.y,s[5]=za.y,s[9]=ln.y,s[2]=mi.z,s[6]=za.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],M=n[7],_=n[11],D=n[15],P=s[0],T=s[4],I=s[8],S=s[12],x=s[1],N=s[5],B=s[9],V=s[13],W=s[2],Q=s[6],G=s[10],rt=s[14],Y=s[3],ct=s[7],xt=s[11],Mt=s[15];return a[0]=r*P+o*x+c*W+l*Y,a[4]=r*T+o*N+c*Q+l*ct,a[8]=r*I+o*B+c*G+l*xt,a[12]=r*S+o*V+c*rt+l*Mt,a[1]=u*P+d*x+h*W+f*Y,a[5]=u*T+d*N+h*Q+f*ct,a[9]=u*I+d*B+h*G+f*xt,a[13]=u*S+d*V+h*rt+f*Mt,a[2]=g*P+v*x+m*W+p*Y,a[6]=g*T+v*N+m*Q+p*ct,a[10]=g*I+v*B+m*G+p*xt,a[14]=g*S+v*V+m*rt+p*Mt,a[3]=y*P+M*x+_*W+D*Y,a[7]=y*T+M*N+_*Q+D*ct,a[11]=y*I+M*B+_*G+D*xt,a[15]=y*S+M*V+_*rt+D*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+a*c*d-s*l*d-a*o*h+n*l*h+s*o*f-n*c*f)+v*(+e*c*f-e*l*h+a*r*h-s*r*f+s*l*u-a*c*u)+m*(+e*l*d-e*o*f-a*r*d+n*r*f+a*o*u-n*l*u)+p*(-s*o*u-e*c*d+e*o*h+s*r*d-n*r*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=d*m*l-v*h*l+v*c*f-o*m*f-d*c*p+o*h*p,M=g*h*l-u*m*l-g*c*f+r*m*f+u*c*p-r*h*p,_=u*v*l-g*d*l+g*o*f-r*v*f-u*o*p+r*d*p,D=g*d*c-u*v*c-g*o*h+r*v*h+u*o*m-r*d*m,P=e*y+n*M+s*_+a*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=y*T,t[1]=(v*h*a-d*m*a-v*s*f+n*m*f+d*s*p-n*h*p)*T,t[2]=(o*m*a-v*c*a+v*s*l-n*m*l-o*s*p+n*c*p)*T,t[3]=(d*c*a-o*h*a-d*s*l+n*h*l+o*s*f-n*c*f)*T,t[4]=M*T,t[5]=(u*m*a-g*h*a+g*s*f-e*m*f-u*s*p+e*h*p)*T,t[6]=(g*c*a-r*m*a-g*s*l+e*m*l+r*s*p-e*c*p)*T,t[7]=(r*h*a-u*c*a+u*s*l-e*h*l-r*s*f+e*c*f)*T,t[8]=_*T,t[9]=(g*d*a-u*v*a-g*n*f+e*v*f+u*n*p-e*d*p)*T,t[10]=(r*v*a-g*o*a+g*n*l-e*v*l-r*n*p+e*o*p)*T,t[11]=(u*o*a-r*d*a-u*n*l+e*d*l+r*n*f-e*o*f)*T,t[12]=D*T,t[13]=(u*v*s-g*d*s+g*n*h-e*v*h-u*n*m+e*d*m)*T,t[14]=(g*o*s-r*v*s-g*n*c+e*v*c+r*n*m-e*o*m)*T,t[15]=(r*d*s-u*o*s+u*n*c-e*d*c-r*n*h+e*o*h)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,c=t.z,l=a*r,u=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*r,0,l*c-s*o,u*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,u=r+r,d=o+o,h=a*l,f=a*u,g=a*d,v=r*u,m=r*d,p=o*d,y=c*l,M=c*u,_=c*d,D=n.x,P=n.y,T=n.z;return s[0]=(1-(v+p))*D,s[1]=(f+_)*D,s[2]=(g-M)*D,s[3]=0,s[4]=(f-_)*P,s[5]=(1-(h+p))*P,s[6]=(m+y)*P,s[7]=0,s[8]=(g+M)*T,s[9]=(m-y)*T,s[10]=(1-(h+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=rs.set(s[0],s[1],s[2]).length();const r=rs.set(s[4],s[5],s[6]).length(),o=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/a,u=1/r,d=1/o;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=Qn){const c=this.elements,l=2*a/(e-t),u=2*a/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let f,g;if(o===Qn)f=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===_r)f=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=Qn){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(r-a),h=(e+t)*l,f=(n+s)*u;let g,v;if(o===Qn)g=(r+a)*d,v=-2*d;else if(o===_r)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rs=new O,xn=new me,cf=new O(0,0,0),lf=new O(1,1,1),mi=new O,za=new O,ln=new O,fl=new me,pl=new Li;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ge(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hf=0;const ml=new O,os=new Li,Wn=new me,Fa=new O,ta=new O,uf=new O,df=new Li,gl=new O(1,0,0),vl=new O(0,1,0),xl=new O(0,0,1),_l={type:"added"},ff={type:"removed"},cs={type:"childadded",child:null},Xr={type:"childremoved",child:null};class Ue extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new O,e=new mn,n=new Li,s=new O(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new ie}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(xl,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fa.copy(t):Fa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(ta,Fa,this.up):Wn.lookAt(Fa,ta,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Wn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_l),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ff),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_l),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t,uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,df,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new O(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new O,Xn=new O,qr=new O,qn=new O,ls=new O,hs=new O,yl=new O,Yr=new O,jr=new O,$r=new O,Jr=new Me,Kr=new Me,Zr=new Me;class pn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){_n.subVectors(s,e),Xn.subVectors(n,e),qr.subVectors(t,e);const r=_n.dot(_n),o=_n.dot(Xn),c=_n.dot(qr),l=Xn.dot(Xn),u=Xn.dot(qr),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,g=(r*u-o*c)*h;return a.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,a,r,o,c){return this.getBarycoord(t,e,n,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,qn.x),c.addScaledVector(r,qn.y),c.addScaledVector(o,qn.z),c)}static getInterpolatedAttribute(t,e,n,s,a,r){return Jr.setScalar(0),Kr.setScalar(0),Zr.setScalar(0),Jr.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,n),Zr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Jr,a.x),r.addScaledVector(Kr,a.y),r.addScaledVector(Zr,a.z),r}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Xn.subVectors(t,e),_n.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),_n.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;ls.subVectors(s,n),hs.subVectors(a,n),Yr.subVectors(t,n);const c=ls.dot(Yr),l=hs.dot(Yr);if(c<=0&&l<=0)return e.copy(n);jr.subVectors(t,s);const u=ls.dot(jr),d=hs.dot(jr);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(ls,r);$r.subVectors(t,a);const f=ls.dot($r),g=hs.dot($r);if(g>=0&&f<=g)return e.copy(a);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(hs,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return yl.subVectors(a,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(yl,o);const p=1/(m+v+h);return r=v*p,o=h*p,e.copy(n).addScaledVector(ls,r).addScaledVector(hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Qr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=zc(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Qr(r,a,t+1/3),this.g=Qr(r,a,t),this.b=Qr(r,a,t-1/3)}return fe.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return fe.fromWorkingColorSpace(je.copy(this),t),Math.round(Ge(je.r*255,0,255))*65536+Math.round(Ge(je.g*255,0,255))*256+Math.round(Ge(je.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(je.copy(this),e);const n=je.r,s=je.g,a=je.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const u=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=u<=.5?d/(r+o):d/(2-r-o),r){case n:c=(s-a)/d+(s<a?6:0);break;case s:c=(a-n)/d+2;break;case a:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Fe){fe.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Oa);const n=ga(gi.h,Oa.h,e),s=ga(gi.s,Oa.s,e),a=ga(gi.l,Oa.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Zt;Zt.NAMES=ru;let pf=0;class ci extends Gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ti(),this.name="",this.blending=Rs,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Po,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kt extends ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new O,ka=new At;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ka.fromBufferAttribute(this,e),ka.applyMatrix3(t),this.setXY(e,ka.x,ka.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),a=xe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fc&&(t.usage=this.usage),t}}class ou extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cu extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class be extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let mf=0;const dn=new me,to=new Ue,us=new O,hn=new Zi,ea=new Zi,Be=new O;class qe extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eu(t)?cu:ou)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ie().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return to.lookAt(t),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,s=e.count;n<s;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];hn.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(hn.min,ea.min),hn.expandByPoint(Be),Be.addVectors(hn.max,ea.max),hn.expandByPoint(Be)):(hn.expandByPoint(ea.min),hn.expandByPoint(ea.max))}hn.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)Be.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Be.fromBufferAttribute(o,l),c&&(us.fromBufferAttribute(t,l),Be.add(us)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new O,c[I]=new O;const l=new O,u=new O,d=new O,h=new At,f=new At,g=new At,v=new O,m=new O;function p(I,S,x){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),h.fromBufferAttribute(a,I),f.fromBufferAttribute(a,S),g.fromBufferAttribute(a,x),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(N),o[I].add(v),o[S].add(v),o[x].add(v),c[I].add(m),c[S].add(m),c[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,S=y.length;I<S;++I){const x=y[I],N=x.start,B=x.count;for(let V=N,W=N+B;V<W;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const M=new O,_=new O,D=new O,P=new O;function T(I){D.fromBufferAttribute(s,I),P.copy(D);const S=o[I];M.copy(S),M.sub(D.multiplyScalar(D.dot(S))).normalize(),_.crossVectors(P,S);const N=_.dot(c[I])<0?-1:1;r.setXYZW(I,M.x,M.y,M.z,N)}for(let I=0,S=y.length;I<S;++I){const x=y[I],N=x.start,B=x.count;for(let V=N,W=N+B;V<W;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new O,a=new O,r=new O,o=new O,c=new O,l=new O,u=new O,d=new O;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),v=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),a.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new Ke(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],d=a[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new me,Ni=new su,Ba=new Ws,bl=new O,Va=new O,Ha=new O,Ga=new O,eo=new O,Wa=new O,Sl=new O,Xa=new O;class tt extends Ue{constructor(t=new qe,e=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){Wa.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],d=a[c];u!==0&&(eo.fromBufferAttribute(d,t),r?Wa.addScaledVector(eo,u):Wa.addScaledVector(eo.sub(e),u))}e.add(Wa)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(a),Ni.copy(t.ray).recast(t.near),!(Ba.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Ba,bl)===null||Ni.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(Ml.copy(a).invert(),Ni.copy(t.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,D=M;_<D;_+=3){const P=o.getX(_),T=o.getX(_+1),I=o.getX(_+2);s=qa(this,p,t,n,l,u,d,P,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=qa(this,r,t,n,l,u,d,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,D=M;_<D;_+=3){const P=_,T=_+1,I=_+2;s=qa(this,p,t,n,l,u,d,P,T,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,M=m+1,_=m+2;s=qa(this,r,t,n,l,u,d,y,M,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function gf(i,t,e,n,s,a,r,o){let c;if(t.side===Xe?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,t.side===On,o),c===null)return null;Xa.copy(o),Xa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Xa);return l<e.near||l>e.far?null:{distance:l,point:Xa.clone(),object:i}}function qa(i,t,e,n,s,a,r,o,c,l){i.getVertexPosition(o,Va),i.getVertexPosition(c,Ha),i.getVertexPosition(l,Ga);const u=gf(i,t,e,n,Va,Ha,Ga,Sl);if(u){const d=new O;pn.getBarycoord(Sl,Va,Ha,Ga,d),s&&(u.uv=pn.getInterpolatedAttribute(s,o,c,l,d,new At)),a&&(u.uv1=pn.getInterpolatedAttribute(a,o,c,l,d,new At)),r&&(u.normal=pn.getInterpolatedAttribute(r,o,c,l,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new O,materialIndex:0};pn.getNormal(Va,Ha,Ga,h.normal),u.face=h,u.barycoord=d}return u}class qt extends qe{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(d,2));function g(v,m,p,y,M,_,D,P,T,I,S){const x=_/T,N=D/I,B=_/2,V=D/2,W=P/2,Q=T+1,G=I+1;let rt=0,Y=0;const ct=new O;for(let xt=0;xt<G;xt++){const Mt=xt*N-V;for(let Ut=0;Ut<Q;Ut++){const Z=Ut*x-B;ct[v]=Z*y,ct[m]=Mt*M,ct[p]=W,l.push(ct.x,ct.y,ct.z),ct[v]=0,ct[m]=0,ct[p]=P>0?1:-1,u.push(ct.x,ct.y,ct.z),d.push(Ut/T),d.push(1-xt/I),rt+=1}}for(let xt=0;xt<I;xt++)for(let Mt=0;Mt<T;Mt++){const Ut=h+Mt+Q*xt,Z=h+Mt+Q*(xt+1),C=h+(Mt+1)+Q*(xt+1),k=h+(Mt+1)+Q*xt;c.push(Ut,Z,k),c.push(Z,C,k),Y+=6}o.addGroup(f,Y,S),f+=Y,h+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function nn(i){const t={};for(let e=0;e<i.length;e++){const n=Os(i[e]);for(const s in n)t[s]=n[s]}return t}function vf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const xf={clone:Os,merge:nn};var _f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hu extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new O,wl=new At,El=new At;class Je extends hu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,wl,El),e.subVectors(El,wl)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ma*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,fs=1;class Mf extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(ds,fs,t,e);s.layers=this.layers,this.add(s);const a=new Je(ds,fs,t,e);a.layers=this.layers,this.add(a);const r=new Je(ds,fs,t,e);r.layers=this.layers,this.add(r);const o=new Je(ds,fs,t,e);o.layers=this.layers,this.add(o);const c=new Je(ds,fs,t,e);c.layers=this.layers,this.add(c);const l=new Je(ds,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uu extends Ze{constructor(t,e,n,s,a,r,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,s,a,r,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bf extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qt(5,5,5),a=new ri({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Ci});a.uniforms.tEquirect.value=e;const r=new tt(s,a),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=Nn),new Mf(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}const no=new O,Sf=new O,wf=new ie;class Bi{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=no.subVectors(n,e).cross(Sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(no),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wf.getNormalMatrix(t),s=this.coplanarPoint(no).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Ws,Ya=new O;class Fc{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,a=new Bi,r=new Bi){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){const n=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],u=s[5],d=s[6],h=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],M=s[14],_=s[15];if(n[0].setComponents(c-a,h-l,m-f,_-p).normalize(),n[1].setComponents(c+a,h+l,m+f,_+p).normalize(),n[2].setComponents(c+r,h+u,m+g,_+y).normalize(),n[3].setComponents(c-r,h-u,m-g,_-y).normalize(),n[4].setComponents(c-o,h-d,m-v,_-M).normalize(),e===Qn)n[5].setComponents(c+o,h+d,m+v,_+M).normalize();else if(e===_r)n[5].setComponents(o,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ya.x=s.normal.x>0?t.max.x:t.min.x,Ya.y=s.normal.y>0?t.max.y:t.min.y,Ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function du(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Ef(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class Tn extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const y=p*h-r;for(let M=0;M<l;M++){const _=M*d-a;g.push(_,-y,0),v.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const M=y+l*p,_=y+l*(p+1),D=y+1+l*(p+1),P=y+1+l*p;f.push(M,_,P),f.push(_,D,P)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,If=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$f=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Im=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,i0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,re={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:Cf,alphamap_pars_fragment:Rf,alphatest_fragment:Pf,alphatest_pars_fragment:Lf,aomap_fragment:Df,aomap_pars_fragment:If,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:zf,beginnormal_vertex:Ff,bsdfs:Of,iridescence_fragment:kf,bumpmap_pars_fragment:Bf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:jf,common:$f,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Zf,displacementmap_vertex:Qf,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:ap,envmap_pars_fragment:rp,envmap_pars_vertex:op,envmap_physical_pars_fragment:xp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:vp,lights_toon_fragment:_p,lights_toon_pars_fragment:yp,lights_phong_fragment:Mp,lights_phong_pars_fragment:bp,lights_physical_fragment:Sp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Lp,map_fragment:Dp,map_pars_fragment:Ip,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:zp,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:kp,morphnormal_vertex:Bp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Hp,normal_fragment_begin:Gp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Zp,opaque_fragment:Qp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:am,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:om,shadowmap_pars_vertex:cm,shadowmap_vertex:lm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:vm,tonemapping_pars_fragment:xm,transmission_fragment:_m,transmission_pars_fragment:ym,uv_pars_fragment:Mm,uv_pars_vertex:bm,uv_vertex:Sm,worldpos_vertex:wm,background_vert:Em,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Cm,cube_vert:Rm,cube_frag:Pm,depth_vert:Lm,depth_frag:Dm,distanceRGBA_vert:Im,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:zm,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:km,meshbasic_frag:Bm,meshlambert_vert:Vm,meshlambert_frag:Hm,meshmatcap_vert:Gm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:jm,meshphysical_vert:$m,meshphysical_frag:Jm,meshtoon_vert:Km,meshtoon_frag:Zm,points_vert:Qm,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},Ct={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Un={basic:{uniforms:nn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:nn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:nn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:nn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:nn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Zt(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:nn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:nn([Ct.points,Ct.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:nn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:nn([Ct.common,Ct.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:nn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:nn([Ct.sprite,Ct.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:nn([Ct.common,Ct.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:nn([Ct.lights,Ct.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Un.physical={uniforms:nn([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const ja={r:0,b:0,g:0},Fi=new mn,a0=new me;function r0(i,t,e,n,s,a,r){const o=new Zt(0);let c=a===!0?0:1,l,u,d=null,h=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function v(y){let M=!1;const _=g(y);_===null?p(o,c):_&&_.isColor&&(p(_,1),M=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,M){const _=g(M);_&&(_.isCubeTexture||_.mapping===Er)?(u===void 0&&(u=new tt(new qt(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Os(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fi.copy(M.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(Fi)),u.material.toneMapped=fe.getTransfer(_.colorSpace)!==ye,(d!==_||h!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new tt(new Tn(2,2),new ri({name:"BackgroundMaterial",uniforms:Os(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=fe.getTransfer(_.colorSpace)!==ye,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||h!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,h=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(ja,lu(i)),n.buffers.color.setClear(ja.r,ja.g,ja.b,M,r)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:v,addToRenderList:m}}function o0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let a=s,r=!1;function o(x,N,B,V,W){let Q=!1;const G=d(V,B,N);a!==G&&(a=G,l(a.object)),Q=f(x,V,B,W),Q&&g(x,V,B,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Q||r)&&(r=!1,_(x,N,B,V),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,N,B){const V=B.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let Q=W[N.id];Q===void 0&&(Q={},W[N.id]=Q);let G=Q[V];return G===void 0&&(G=h(c()),Q[V]=G),G}function h(x){const N=[],B=[],V=[];for(let W=0;W<e;W++)N[W]=0,B[W]=0,V[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:V,object:x,attributes:{},index:null}}function f(x,N,B,V){const W=a.attributes,Q=N.attributes;let G=0;const rt=B.getAttributes();for(const Y in rt)if(rt[Y].location>=0){const xt=W[Y];let Mt=Q[Y];if(Mt===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),xt===void 0||xt.attribute!==Mt||Mt&&xt.data!==Mt.data)return!0;G++}return a.attributesNum!==G||a.index!==V}function g(x,N,B,V){const W={},Q=N.attributes;let G=0;const rt=B.getAttributes();for(const Y in rt)if(rt[Y].location>=0){let xt=Q[Y];xt===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor));const Mt={};Mt.attribute=xt,xt&&xt.data&&(Mt.data=xt.data),W[Y]=Mt,G++}a.attributes=W,a.attributesNum=G,a.index=V}function v(){const x=a.newAttributes;for(let N=0,B=x.length;N<B;N++)x[N]=0}function m(x){p(x,0)}function p(x,N){const B=a.newAttributes,V=a.enabledAttributes,W=a.attributeDivisors;B[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),W[x]!==N&&(i.vertexAttribDivisor(x,N),W[x]=N)}function y(){const x=a.newAttributes,N=a.enabledAttributes;for(let B=0,V=N.length;B<V;B++)N[B]!==x[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function M(x,N,B,V,W,Q,G){G===!0?i.vertexAttribIPointer(x,N,B,W,Q):i.vertexAttribPointer(x,N,B,V,W,Q)}function _(x,N,B,V){v();const W=V.attributes,Q=B.getAttributes(),G=N.defaultAttributeValues;for(const rt in Q){const Y=Q[rt];if(Y.location>=0){let ct=W[rt];if(ct===void 0&&(rt==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),rt==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),ct!==void 0){const xt=ct.normalized,Mt=ct.itemSize,Ut=t.get(ct);if(Ut===void 0)continue;const Z=Ut.buffer,C=Ut.type,k=Ut.bytesPerElement,K=C===i.INT||C===i.UNSIGNED_INT||ct.gpuType===Pc;if(ct.isInterleavedBufferAttribute){const at=ct.data,yt=at.stride,vt=ct.offset;if(at.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Y.locationSize;Tt++)p(Y.location+Tt,at.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Tt=0;Tt<Y.locationSize;Tt++)m(Y.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Tt=0;Tt<Y.locationSize;Tt++)M(Y.location+Tt,Mt/Y.locationSize,C,xt,yt*k,(vt+Mt/Y.locationSize*Tt)*k,K)}else{if(ct.isInstancedBufferAttribute){for(let at=0;at<Y.locationSize;at++)p(Y.location+at,ct.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let at=0;at<Y.locationSize;at++)m(Y.location+at);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let at=0;at<Y.locationSize;at++)M(Y.location+at,Mt/Y.locationSize,C,xt,Mt*k,Mt/Y.locationSize*at*k,K)}}else if(G!==void 0){const xt=G[rt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(Y.location,xt);break;case 3:i.vertexAttrib3fv(Y.location,xt);break;case 4:i.vertexAttrib4fv(Y.location,xt);break;default:i.vertexAttrib1fv(Y.location,xt)}}}}y()}function D(){I();for(const x in n){const N=n[x];for(const B in N){const V=N[B];for(const W in V)u(V[W].object),delete V[W];delete N[B]}delete n[x]}}function P(x){if(n[x.id]===void 0)return;const N=n[x.id];for(const B in N){const V=N[B];for(const W in V)u(V[W].object),delete V[W];delete N[B]}delete n[x.id]}function T(x){for(const N in n){const B=n[N];if(B[x.id]===void 0)continue;const V=B[x.id];for(const W in V)u(V[W].object),delete V[W];delete B[x.id]}}function I(){S(),r=!0,a!==s&&(a=s,l(a.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function c0(i,t,e){let n;function s(l){n=l}function a(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];e.update(f,n,1)}function c(l,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];e.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function l0(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const I=T===Aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==zn&&!I)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:D,maxSamples:P}}function h0(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new Bi,o=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||a&&!m)a?u(null):l();else{const y=a?0:n,M=y*4;let _=p.clippingState||null;c.value=_,_=u(g,h,M,f);for(let D=0;D!==M;++D)_[D]=e[D];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==v;++M,_+=4)r.copy(d[M]).applyMatrix4(y,o),r.normal.toArray(m,_),m[_+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function u0(i){let t=new WeakMap;function e(r,o){return o===Oo?r.mapping=Us:o===ko&&(r.mapping=Ns),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Oo||o===ko)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new bf(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class fu extends hu{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const As=4,Tl=[.125,.215,.35,.446,.526,.582],Gi=20,io=new fu,Al=new Zt;let so=null,ao=0,ro=0,oo=!1;const Vi=(1+Math.sqrt(5))/2,ps=1/Vi,Cl=[new O(-Vi,ps,0),new O(Vi,ps,0),new O(-ps,0,Vi),new O(ps,0,Vi),new O(0,Vi,-ps),new O(0,Vi,ps),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(so,ao,ro),this._renderer.xr.enabled=oo,t.scissorTest=!1,$a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),so=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Aa,format:En,colorSpace:Hs,depthBuffer:!1},s=Pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(a)),this._blurMaterial=f0(a,t,e)}return s}_compileMaterial(t){const e=new tt(this._lodPlanes[0],t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,s){const o=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Al),u.toneMapping=Ri,u.autoClear=!1;const f=new Kt({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new tt(new qt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Al),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const M=this._cubeSize;$a(s,y*M,p>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Us||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new tt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;$a(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Cl[(s-a-1)%Cl.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new tt(this._lodPlanes[s],l),h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),v=a/g,m=isFinite(a)?1+Math.floor(u*v):Gi;m>Gi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const p=[];let y=0;for(let T=0;T<Gi;++T){const I=T/v,S=Math.exp(-I*I/2);p.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const _=this._sizeLods[s],D=3*_*(s>M-As?s-M+As:0),P=4*(this._cubeSize-_);$a(e,D,P,3*_,2*_),c.setRenderTarget(e),c.render(d,io)}}function d0(i){const t=[],e=[],n=[];let s=i;const a=i-As+1+Tl.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let c=1/o;r>i-As?c=Tl[r-i+As-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let P=0;P<f;P++){const T=P%3*2/3-1,I=P>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];y.set(S,v*g*P),M.set(h,m*g*P);const x=[P,P,P,P,P,P];_.set(x,p*g*P)}const D=new qe;D.setAttribute("position",new Ke(y,v)),D.setAttribute("uv",new Ke(M,m)),D.setAttribute("faceIndex",new Ke(_,p)),t.push(D),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pl(i,t,e){const n=new $i(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function f0(i,t,e){const n=new Float32Array(Gi),s=new O(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ll(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Dl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Oo||c===ko,u=c===Us||c===Ns;if(l||u){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Rl(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Rl(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function m0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&da("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g0(i,t,e,n){const s={},a=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}h.removeEventListener("dispose",r),delete s[h.id];const f=a.get(h);f&&(t.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let M=0,_=y.length;M<_;M+=3){const D=y[M+0],P=y[M+1],T=y[M+2];h.push(D,P,P,T,T,D)}}else if(g!==void 0){const y=g.array;v=g.version;for(let M=0,_=y.length/3-1;M<_;M+=3){const D=M+0,P=M+1,T=M+2;h.push(D,P,P,T,T,D)}}else return;const m=new(eu(h)?cu:ou)(h,1);m.version=v;const p=a.get(d);p&&t.remove(p),a.set(d,m)}function u(d){const h=a.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function v0(i,t,e){let n;function s(h){n=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function c(h,f){i.drawElements(n,f,a,h*r),e.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,a,h*r,g),e.update(f,n,g))}function u(h,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(h,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/r,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,h,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function x0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _0(i,t,e){const n=new WeakMap,s=new Me;function a(r,o,c){const l=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let x=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let D=o.attributes.position.count*_,P=1;D>t.maxTextureSize&&(P=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const T=new Float32Array(D*P*4*d),I=new iu(T,D,P,d);I.type=zn,I.needsUpdate=!0;const S=_*4;for(let N=0;N<d;N++){const B=p[N],V=y[N],W=M[N],Q=D*P*4*N;for(let G=0;G<B.count;G++){const rt=G*S;g===!0&&(s.fromBufferAttribute(B,G),T[Q+rt+0]=s.x,T[Q+rt+1]=s.y,T[Q+rt+2]=s.z,T[Q+rt+3]=0),v===!0&&(s.fromBufferAttribute(V,G),T[Q+rt+4]=s.x,T[Q+rt+5]=s.y,T[Q+rt+6]=s.z,T[Q+rt+7]=0),m===!0&&(s.fromBufferAttribute(W,G),T[Q+rt+8]=s.x,T[Q+rt+9]=s.y,T[Q+rt+10]=s.z,T[Q+rt+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:I,size:new At(D,P)},n.set(o,h),o.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function y0(i,t,e,n){let s=new WeakMap;function a(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class pu extends Ze{constructor(t,e,n,s,a,r,o,c,l,u=Ps){if(u!==Ps&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ps&&(n=ji),n===void 0&&u===Fs&&(n=zs),super(null,s,a,r,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:an,this.minFilter=c!==void 0?c:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mu=new Ze,Il=new pu(1,1),gu=new iu,vu=new rf,xu=new uu,Ul=[],Nl=[],zl=new Float32Array(16),Fl=new Float32Array(9),Ol=new Float32Array(4);function Xs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Ul[s];if(a===void 0&&(a=new Float32Array(s),Ul[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=Nl[t];e===void 0&&(e=new Int32Array(t),Nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function M0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function E0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,n))return;Ol.set(n),i.uniformMatrix2fv(this.addr,!1,Ol),ke(e,n)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,n))return;Fl.set(n),i.uniformMatrix3fv(this.addr,!1,Fl),ke(e,n)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Oe(e,n))return;zl.set(n),i.uniformMatrix4fv(this.addr,!1,zl),ke(e,n)}}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function D0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Il.compareFunction=tu,a=Il):a=mu,e.setTexture2D(t||a,s)}function F0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vu,s)}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xu,s)}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gu,s)}function B0(i){switch(i){case 5126:return M0;case 35664:return b0;case 35665:return S0;case 35666:return w0;case 35674:return E0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return C0;case 35667:case 35671:return R0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return I0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return k0}}function V0(i,t){i.uniform1fv(this.addr,t)}function H0(i,t){const e=Xs(t,this.size,2);i.uniform2fv(this.addr,e)}function G0(i,t){const e=Xs(t,this.size,3);i.uniform3fv(this.addr,e)}function W0(i,t){const e=Xs(t,this.size,4);i.uniform4fv(this.addr,e)}function X0(i,t){const e=Xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function q0(i,t){const e=Xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Y0(i,t){const e=Xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function j0(i,t){i.uniform1iv(this.addr,t)}function $0(i,t){i.uniform2iv(this.addr,t)}function J0(i,t){i.uniform3iv(this.addr,t)}function K0(i,t){i.uniform4iv(this.addr,t)}function Z0(i,t){i.uniform1uiv(this.addr,t)}function Q0(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){const n=this.cache,s=t.length,a=Rr(e,s);Oe(n,a)||(i.uniform1iv(this.addr,a),ke(n,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||mu,a[r])}function ig(i,t,e){const n=this.cache,s=t.length,a=Rr(e,s);Oe(n,a)||(i.uniform1iv(this.addr,a),ke(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||vu,a[r])}function sg(i,t,e){const n=this.cache,s=t.length,a=Rr(e,s);Oe(n,a)||(i.uniform1iv(this.addr,a),ke(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||xu,a[r])}function ag(i,t,e){const n=this.cache,s=t.length,a=Rr(e,s);Oe(n,a)||(i.uniform1iv(this.addr,a),ke(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||gu,a[r])}function rg(i){switch(i){case 5126:return V0;case 35664:return H0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return j0;case 35667:case 35671:return $0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return Z0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return ag}}class og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=B0(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}}class lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const co=/(\w+)(\])?(\[|\.)?/g;function kl(i,t){i.seq.push(t),i.map[t.id]=t}function hg(i,t,e){const n=i.name,s=n.length;for(co.lastIndex=0;;){const a=co.exec(n),r=co.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){kl(e,l===void 0?new og(o,i,t):new cg(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new lg(o),kl(e,d)),e=d}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);hg(a,r,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Bl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ug=37297;let dg=0;function fg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Vl=new ie;function pg(i){fe._getMatrix(Vl,fe.workingColorSpace,i);const t=`mat3( ${Vl.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case Cr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+fg(i.getShaderSource(t),r)}else return s}function mg(i,t){const e=pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gg(i,t){let e;switch(t){case vd:e="Linear";break;case xd:e="Reinhard";break;case _d:e="Cineon";break;case yd:e="ACESFilmic";break;case bd:e="AgX";break;case Sd:e="Neutral";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ja=new O;function vg(){fe.getLuminanceCoefficients(Ja);const i=Ja.x.toFixed(4),t=Ja.y.toFixed(4),e=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function _g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function fa(i){return i!==""}function Gl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(Mg,Sg)}const bg=new Map;function Sg(i,t){let e=re[t];if(e===void 0){const n=bg.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(i){return i.replace(wg,Eg)}function Eg(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function ql(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ju?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ag(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lg(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=Tg(e),l=Ag(e),u=Cg(e),d=Rg(e),h=Pg(e),f=xg(e),g=_g(a),v=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?re.tonemapping_pars_fragment:"",e.toneMapping!==Ri?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fa).join(`
`)),r=pc(r),r=Gl(r,e),r=Wl(r,e),o=pc(o),o=Gl(o,e),o=Wl(o,e),r=Xl(r),o=Xl(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+r,_=y+p+o,D=Bl(s,s.VERTEX_SHADER,M),P=Bl(s,s.FRAGMENT_SHADER,_);s.attachShader(v,D),s.attachShader(v,P),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(N){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(P).trim();let Q=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,P);else{const rt=Hl(s,D,"vertex"),Y=Hl(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+rt+`
`+Y)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||W==="")&&(G=!1);G&&(N.diagnostics={runnable:Q,programLog:B,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(D),s.deleteShader(P),I=new gr(s,v),S=yg(s,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,ug)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=P,this}let Dg=0;class Ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ug(t),e.set(t,n)),n}}class Ug{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}}function Ng(i,t,e,n,s,a,r){const o=new au,c=new Ig,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,N,B,V){const W=B.fog,Q=V.geometry,G=S.isMeshStandardMaterial?B.environment:null,rt=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),Y=rt&&rt.mapping===Er?rt.image.height:null,ct=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Mt=xt!==void 0?xt.length:0;let Ut=0;Q.morphAttributes.position!==void 0&&(Ut=1),Q.morphAttributes.normal!==void 0&&(Ut=2),Q.morphAttributes.color!==void 0&&(Ut=3);let Z,C,k,K;if(ct){const It=Un[ct];Z=It.vertexShader,C=It.fragmentShader}else Z=S.vertexShader,C=S.fragmentShader,c.update(S),k=c.getVertexShaderID(S),K=c.getFragmentShaderID(S);const at=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),vt=V.isInstancedMesh===!0,Tt=V.isBatchedMesh===!0,$t=!!S.map,Xt=!!S.matcap,lt=!!rt,H=!!S.aoMap,Dt=!!S.lightMap,Pt=!!S.bumpMap,Ot=!!S.normalMap,Nt=!!S.displacementMap,Qt=!!S.emissiveMap,zt=!!S.metalnessMap,L=!!S.roughnessMap,b=S.anisotropy>0,J=S.clearcoat>0,ut=S.dispersion>0,dt=S.iridescence>0,ot=S.sheen>0,Ft=S.transmission>0,Et=b&&!!S.anisotropyMap,Rt=J&&!!S.clearcoatMap,se=J&&!!S.clearcoatNormalMap,R=J&&!!S.clearcoatRoughnessMap,A=dt&&!!S.iridescenceMap,$=dt&&!!S.iridescenceThicknessMap,ht=ot&&!!S.sheenColorMap,st=ot&&!!S.sheenRoughnessMap,mt=!!S.specularMap,pt=!!S.specularColorMap,St=!!S.specularIntensityMap,F=Ft&&!!S.transmissionMap,gt=Ft&&!!S.thicknessMap,U=!!S.gradientMap,z=!!S.alphaMap,j=S.alphaTest>0,it=!!S.alphaHash,ft=!!S.extensions;let _t=Ri;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(_t=i.toneMapping);const Gt={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:C,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&V._colorsTexture!==null,instancing:vt,instancingColor:vt&&V.instanceColor!==null,instancingMorph:vt&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Hs,alphaToCoverage:!!S.alphaToCoverage,map:$t,matcap:Xt,envMap:lt,envMapMode:lt&&rt.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:Dt,bumpMap:Pt,normalMap:Ot,displacementMap:h&&Nt,emissiveMap:Qt,normalMapObjectSpace:Ot&&S.normalMapType===Ad,normalMapTangentSpace:Ot&&S.normalMapType===Ar,metalnessMap:zt,roughnessMap:L,anisotropy:b,anisotropyMap:Et,clearcoat:J,clearcoatMap:Rt,clearcoatNormalMap:se,clearcoatRoughnessMap:R,dispersion:ut,iridescence:dt,iridescenceMap:A,iridescenceThicknessMap:$,sheen:ot,sheenColorMap:ht,sheenRoughnessMap:st,specularMap:mt,specularColorMap:pt,specularIntensityMap:St,transmission:Ft,transmissionMap:F,thicknessMap:gt,gradientMap:U,opaque:S.transparent===!1&&S.blending===Rs&&S.alphaToCoverage===!1,alphaMap:z,alphaTest:j,alphaHash:it,combine:S.combine,mapUv:$t&&v(S.map.channel),aoMapUv:H&&v(S.aoMap.channel),lightMapUv:Dt&&v(S.lightMap.channel),bumpMapUv:Pt&&v(S.bumpMap.channel),normalMapUv:Ot&&v(S.normalMap.channel),displacementMapUv:Nt&&v(S.displacementMap.channel),emissiveMapUv:Qt&&v(S.emissiveMap.channel),metalnessMapUv:zt&&v(S.metalnessMap.channel),roughnessMapUv:L&&v(S.roughnessMap.channel),anisotropyMapUv:Et&&v(S.anisotropyMap.channel),clearcoatMapUv:Rt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:A&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:$&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:st&&v(S.sheenRoughnessMap.channel),specularMapUv:mt&&v(S.specularMap.channel),specularColorMapUv:pt&&v(S.specularColorMap.channel),specularIntensityMapUv:St&&v(S.specularIntensityMap.channel),transmissionMapUv:F&&v(S.transmissionMap.channel),thicknessMapUv:gt&&v(S.thicknessMap.channel),alphaMapUv:z&&v(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ot||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&($t||z),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:yt,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:$t&&S.map.isVideoTexture===!0&&fe.getTransfer(S.map.colorSpace)===ye,decodeVideoTextureEmissive:Qt&&S.emissiveMap.isVideoTexture===!0&&fe.getTransfer(S.emissiveMap.colorSpace)===ye,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===we,flipSided:S.side===Xe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&S.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)x.push(N),x.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(y(x,S),M(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function y(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const x=g[S.type];let N;if(x){const B=Un[x];N=xf.clone(B.uniforms)}else N=S.uniforms;return N}function D(S,x){let N;for(let B=0,V=u.length;B<V;B++){const W=u[B];if(W.cacheKey===x){N=W,++N.usedTimes;break}}return N===void 0&&(N=new Lg(i,x,S,a),u.push(N)),N}function P(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function T(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:P,releaseShaderCache:T,programs:u,dispose:I}}function zg(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function Fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jl(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(d,h,f,g,v,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,h,f,g,v,m){const p=r(d,h,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,h,f,g,v,m){const p=r(d,h,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,h){e.length>1&&e.sort(d||Fg),n.length>1&&n.sort(h||Yl),s.length>1&&s.sort(h||Yl)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:u,sort:l}}function Og(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new jl,i.set(n,[r])):s>=a.length?(r=new jl,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Zt};break;case"SpotLight":e={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Bg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vg=0;function Hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gg(i){const t=new kg,e=Bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const s=new O,a=new me,r=new me;function o(l){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,M=0,_=0,D=0,P=0,T=0;l.sort(Hg);for(let S=0,x=l.length;S<x;S++){const N=l[S],B=N.color,V=N.intensity,W=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=B.r*V,d+=B.g*V,h+=B.b*V;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],V);T++}else if(N.isDirectionalLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const rt=N.shadow,Y=e.get(N);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=N.shadow.matrix,y++}n.directional[f]=G,f++}else if(N.isSpotLight){const G=t.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(B).multiplyScalar(V),G.distance=W,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[v]=G;const rt=N.shadow;if(N.map&&(n.spotLightMap[D]=N.map,D++,rt.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[v]=rt.matrix,N.castShadow){const Y=e.get(N);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=Q,_++}v++}else if(N.isRectAreaLight){const G=t.get(N);G.color.copy(B).multiplyScalar(V),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=G,m++}else if(N.isPointLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){const rt=N.shadow,Y=e.get(N);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,Y.shadowCameraNear=rt.camera.near,Y.shadowCameraFar=rt.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=N.shadow.matrix,M++}n.point[g]=G,g++}else if(N.isHemisphereLight){const G=t.get(N);G.skyColor.copy(N.color).multiplyScalar(V),G.groundColor.copy(N.groundColor).multiplyScalar(V),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==_||I.numSpotMaps!==D||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=_,I.numSpotMaps=D,I.numLightProbes=T,n.version=Vg++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const M=l[p];if(M.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),r.identity(),a.copy(M.matrixWorld),a.premultiply(m),r.extractRotation(a),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function $l(i){const t=new Gg(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function a(u){e.push(u)}function r(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Wg(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new $l(i),t.set(s,[o])):a>=r.length?(o=new $l(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xg extends ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qg extends ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $g(i,t,e){let n=new Fc;const s=new At,a=new At,r=new Me,o=new Xg({depthPacking:Td}),c=new qg,l={},u=e.maxTextureSize,d={[On]:Xe,[Xe]:On,[we]:we},h=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Yg,fragmentShader:jg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(P,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ci),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=p!==Kn&&this.type===Kn,W=p===Kn&&this.type!==Kn;for(let Q=0,G=P.length;Q<G;Q++){const rt=P[Q],Y=rt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ct=Y.getFrameExtents();if(s.multiply(ct),a.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/ct.x),s.x=a.x*ct.x,Y.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/ct.y),s.y=a.y*ct.y,Y.mapSize.y=a.y)),Y.map===null||V===!0||W===!0){const Mt=this.type!==Kn?{minFilter:an,magFilter:an}:{};Y.map!==null&&Y.map.dispose(),Y.map=new $i(s.x,s.y,Mt),Y.map.texture.name=rt.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const xt=Y.getViewportCount();for(let Mt=0;Mt<xt;Mt++){const Ut=Y.getViewport(Mt);r.set(a.x*Ut.x,a.y*Ut.y,a.x*Ut.z,a.y*Ut.w),B.viewport(r),Y.updateMatrices(rt,Mt),n=Y.getFrustum(),_(T,I,Y.camera,rt,this.type)}Y.isPointLightShadow!==!0&&this.type===Kn&&y(Y,I),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,N)};function y(P,T){const I=t.update(v);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new $i(s.x,s.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,I,h,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,I,f,v,null)}function M(P,T,I,S){let x=null;const N=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)x=N;else if(x=I.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=x.uuid,V=T.uuid;let W=l[B];W===void 0&&(W={},l[B]=W);let Q=W[V];Q===void 0&&(Q=x.clone(),W[V]=Q,T.addEventListener("dispose",D)),x=Q}if(x.visible=T.visible,x.wireframe=T.wireframe,S===Kn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=I}return x}function _(P,T,I,S,x){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Kn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const V=t.update(P),W=P.material;if(Array.isArray(W)){const Q=V.groups;for(let G=0,rt=Q.length;G<rt;G++){const Y=Q[G],ct=W[Y.materialIndex];if(ct&&ct.visible){const xt=M(P,ct,S,x);P.onBeforeShadow(i,P,T,I,V,xt,Y),i.renderBufferDirect(I,null,V,xt,P,Y),P.onAfterShadow(i,P,T,I,V,xt,Y)}}}else if(W.visible){const Q=M(P,W,S,x);P.onBeforeShadow(i,P,T,I,V,Q,null),i.renderBufferDirect(I,null,V,Q,P,null),P.onAfterShadow(i,P,T,I,V,Q,null)}}const B=P.children;for(let V=0,W=B.length;V<W;V++)_(B[V],T,I,S,x)}function D(P){P.target.removeEventListener("dispose",D);for(const I in l){const S=l[I],x=P.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Jg={[Lo]:Do,[Io]:zo,[Uo]:Fo,[Is]:No,[Do]:Lo,[zo]:Io,[Fo]:Uo,[No]:Is};function Kg(i,t){function e(){let F=!1;const gt=new Me;let U=null;const z=new Me(0,0,0,0);return{setMask:function(j){U!==j&&!F&&(i.colorMask(j,j,j,j),U=j)},setLocked:function(j){F=j},setClear:function(j,it,ft,_t,Gt){Gt===!0&&(j*=_t,it*=_t,ft*=_t),gt.set(j,it,ft,_t),z.equals(gt)===!1&&(i.clearColor(j,it,ft,_t),z.copy(gt))},reset:function(){F=!1,U=null,z.set(-1,0,0,0)}}}function n(){let F=!1,gt=!1,U=null,z=null,j=null;return{setReversed:function(it){if(gt!==it){const ft=t.get("EXT_clip_control");gt?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT);const _t=j;j=null,this.setClear(_t)}gt=it},getReversed:function(){return gt},setTest:function(it){it?at(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(it){U!==it&&!F&&(i.depthMask(it),U=it)},setFunc:function(it){if(gt&&(it=Jg[it]),z!==it){switch(it){case Lo:i.depthFunc(i.NEVER);break;case Do:i.depthFunc(i.ALWAYS);break;case Io:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case Uo:i.depthFunc(i.EQUAL);break;case No:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case Fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}z=it}},setLocked:function(it){F=it},setClear:function(it){j!==it&&(gt&&(it=1-it),i.clearDepth(it),j=it)},reset:function(){F=!1,U=null,z=null,j=null,gt=!1}}}function s(){let F=!1,gt=null,U=null,z=null,j=null,it=null,ft=null,_t=null,Gt=null;return{setTest:function(It){F||(It?at(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(It){gt!==It&&!F&&(i.stencilMask(It),gt=It)},setFunc:function(It,ae,Jt){(U!==It||z!==ae||j!==Jt)&&(i.stencilFunc(It,ae,Jt),U=It,z=ae,j=Jt)},setOp:function(It,ae,Jt){(it!==It||ft!==ae||_t!==Jt)&&(i.stencilOp(It,ae,Jt),it=It,ft=ae,_t=Jt)},setLocked:function(It){F=It},setClear:function(It){Gt!==It&&(i.clearStencil(It),Gt=It)},reset:function(){F=!1,gt=null,U=null,z=null,j=null,it=null,ft=null,_t=null,Gt=null}}}const a=new e,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,M=null,_=null,D=null,P=null,T=new Zt(0,0,0),I=0,S=!1,x=null,N=null,B=null,V=null,W=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,rt=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=rt>=2);let ct=null,xt={};const Mt=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Z=new Me().fromArray(Mt),C=new Me().fromArray(Ut);function k(F,gt,U,z){const j=new Uint8Array(4),it=i.createTexture();i.bindTexture(F,it),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<U;ft++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,z,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(gt+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return it}const K={};K[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(i.DEPTH_TEST),r.setFunc(Is),Pt(!1),Ot(tl),at(i.CULL_FACE),H(Ci);function at(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function yt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function vt(F,gt){return d[F]!==gt?(i.bindFramebuffer(F,gt),d[F]=gt,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Tt(F,gt){let U=f,z=!1;if(F){U=h.get(gt),U===void 0&&(U=[],h.set(gt,U));const j=F.textures;if(U.length!==j.length||U[0]!==i.COLOR_ATTACHMENT0){for(let it=0,ft=j.length;it<ft;it++)U[it]=i.COLOR_ATTACHMENT0+it;U.length=j.length,z=!0}}else U[0]!==i.BACK&&(U[0]=i.BACK,z=!0);z&&i.drawBuffers(U)}function $t(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const Xt={[Hi]:i.FUNC_ADD,[Zu]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};Xt[td]=i.MIN,Xt[ed]=i.MAX;const lt={[nd]:i.ZERO,[id]:i.ONE,[sd]:i.SRC_COLOR,[Ro]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[cd]:i.DST_COLOR,[rd]:i.DST_ALPHA,[ad]:i.ONE_MINUS_SRC_COLOR,[Po]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function H(F,gt,U,z,j,it,ft,_t,Gt,It){if(F===Ci){v===!0&&(yt(i.BLEND),v=!1);return}if(v===!1&&(at(i.BLEND),v=!0),F!==Ku){if(F!==m||It!==S){if((p!==Hi||_!==Hi)&&(i.blendEquation(i.FUNC_ADD),p=Hi,_=Hi),It)switch(F){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,M=null,D=null,P=null,T.set(0,0,0),I=0,m=F,S=It}return}j=j||gt,it=it||U,ft=ft||z,(gt!==p||j!==_)&&(i.blendEquationSeparate(Xt[gt],Xt[j]),p=gt,_=j),(U!==y||z!==M||it!==D||ft!==P)&&(i.blendFuncSeparate(lt[U],lt[z],lt[it],lt[ft]),y=U,M=z,D=it,P=ft),(_t.equals(T)===!1||Gt!==I)&&(i.blendColor(_t.r,_t.g,_t.b,Gt),T.copy(_t),I=Gt),m=F,S=!1}function Dt(F,gt){F.side===we?yt(i.CULL_FACE):at(i.CULL_FACE);let U=F.side===Xe;gt&&(U=!U),Pt(U),F.blending===Rs&&F.transparent===!1?H(Ci):H(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),a.setMask(F.colorWrite);const z=F.stencilWrite;o.setTest(z),z&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Qt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(F){x!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),x=F)}function Ot(F){F!==ju?(at(i.CULL_FACE),F!==N&&(F===tl?i.cullFace(i.BACK):F===$u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),N=F}function Nt(F){F!==B&&(G&&i.lineWidth(F),B=F)}function Qt(F,gt,U){F?(at(i.POLYGON_OFFSET_FILL),(V!==gt||W!==U)&&(i.polygonOffset(gt,U),V=gt,W=U)):yt(i.POLYGON_OFFSET_FILL)}function zt(F){F?at(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function L(F){F===void 0&&(F=i.TEXTURE0+Q-1),ct!==F&&(i.activeTexture(F),ct=F)}function b(F,gt,U){U===void 0&&(ct===null?U=i.TEXTURE0+Q-1:U=ct);let z=xt[U];z===void 0&&(z={type:void 0,texture:void 0},xt[U]=z),(z.type!==F||z.texture!==gt)&&(ct!==U&&(i.activeTexture(U),ct=U),i.bindTexture(F,gt||K[F]),z.type=F,z.texture=gt)}function J(){const F=xt[ct];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ut(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function R(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function A(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(F){Z.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Z.copy(F))}function st(F){C.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),C.copy(F))}function mt(F,gt){let U=l.get(gt);U===void 0&&(U=new WeakMap,l.set(gt,U));let z=U.get(F);z===void 0&&(z=i.getUniformBlockIndex(gt,F.name),U.set(F,z))}function pt(F,gt){const z=l.get(gt).get(F);c.get(gt)!==z&&(i.uniformBlockBinding(gt,z,F.__bindingPointIndex),c.set(gt,z))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ct=null,xt={},d={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,M=null,_=null,D=null,P=null,T=new Zt(0,0,0),I=0,S=!1,x=null,N=null,B=null,V=null,W=null,Z.set(0,0,i.canvas.width,i.canvas.height),C.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:at,disable:yt,bindFramebuffer:vt,drawBuffers:Tt,useProgram:$t,setBlending:H,setMaterial:Dt,setFlipSided:Pt,setCullFace:Ot,setLineWidth:Nt,setPolygonOffset:Qt,setScissorTest:zt,activeTexture:L,bindTexture:b,unbindTexture:J,compressedTexImage2D:ut,compressedTexImage3D:dt,texImage2D:A,texImage3D:$,updateUBOMapping:mt,uniformBlockBinding:pt,texStorage2D:se,texStorage3D:R,texSubImage2D:ot,texSubImage3D:Ft,compressedTexSubImage2D:Et,compressedTexSubImage3D:Rt,scissor:ht,viewport:st,reset:St}}function Jl(i,t,e,n){const s=Zg(n);switch(e){case jh:return i*t;case Jh:return i*t;case Kh:return i*t*2;case Tr:return i*t/s.components*s.byteLength;case Ic:return i*t/s.components*s.byteLength;case Zh:return i*t*2/s.components*s.byteLength;case Uc:return i*t*2/s.components*s.byteLength;case $h:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Nc:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Wo:return Math.max(i,16)*Math.max(t,8)/4;case Vo:case Go:return Math.max(i,8)*Math.max(t,8)/2;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qh:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case uc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zg(i){switch(i){case ai:case Xh:return{byteLength:1,components:1};case ya:case qh:case Aa:return{byteLength:2,components:1};case Lc:case Dc:return{byteLength:2,components:4};case ji:case Pc:case zn:return{byteLength:4,components:1};case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qg(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,b){return f?new OffscreenCanvas(L,b):yr("canvas")}function v(L,b,J){let ut=1;const dt=zt(L);if((dt.width>J||dt.height>J)&&(ut=J/Math.max(dt.width,dt.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ut*dt.width),Ft=Math.floor(ut*dt.height);d===void 0&&(d=g(ot,Ft));const Et=b?g(ot,Ft):d;return Et.width=ot,Et.height=Ft,Et.getContext("2d").drawImage(L,0,0,ot,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Ft+")."),Et}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,b,J,ut,dt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=b;if(b===i.RED&&(J===i.FLOAT&&(ot=i.R32F),J===i.HALF_FLOAT&&(ot=i.R16F),J===i.UNSIGNED_BYTE&&(ot=i.R8)),b===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ot=i.R8UI),J===i.UNSIGNED_SHORT&&(ot=i.R16UI),J===i.UNSIGNED_INT&&(ot=i.R32UI),J===i.BYTE&&(ot=i.R8I),J===i.SHORT&&(ot=i.R16I),J===i.INT&&(ot=i.R32I)),b===i.RG&&(J===i.FLOAT&&(ot=i.RG32F),J===i.HALF_FLOAT&&(ot=i.RG16F),J===i.UNSIGNED_BYTE&&(ot=i.RG8)),b===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ot=i.RG8UI),J===i.UNSIGNED_SHORT&&(ot=i.RG16UI),J===i.UNSIGNED_INT&&(ot=i.RG32UI),J===i.BYTE&&(ot=i.RG8I),J===i.SHORT&&(ot=i.RG16I),J===i.INT&&(ot=i.RG32I)),b===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),J===i.UNSIGNED_INT&&(ot=i.RGB32UI),J===i.BYTE&&(ot=i.RGB8I),J===i.SHORT&&(ot=i.RGB16I),J===i.INT&&(ot=i.RGB32I)),b===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),J===i.UNSIGNED_INT&&(ot=i.RGBA32UI),J===i.BYTE&&(ot=i.RGBA8I),J===i.SHORT&&(ot=i.RGBA16I),J===i.INT&&(ot=i.RGBA32I)),b===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),b===i.RGBA){const Ft=dt?Cr:fe.getTransfer(ut);J===i.FLOAT&&(ot=i.RGBA32F),J===i.HALF_FLOAT&&(ot=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ot=Ft===ye?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(L,b){let J;return L?b===null||b===ji||b===zs?J=i.DEPTH24_STENCIL8:b===zn?J=i.DEPTH32F_STENCIL8:b===ya&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===zs?J=i.DEPTH_COMPONENT24:b===zn?J=i.DEPTH_COMPONENT32F:b===ya&&(J=i.DEPTH_COMPONENT16),J}function D(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==an&&L.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function P(L){const b=L.target;b.removeEventListener("dispose",P),I(b),b.isVideoTexture&&u.delete(b)}function T(L){const b=L.target;b.removeEventListener("dispose",T),x(b)}function I(L){const b=n.get(L);if(b.__webglInit===void 0)return;const J=L.source,ut=h.get(J);if(ut){const dt=ut[b.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&S(L),Object.keys(ut).length===0&&h.delete(J)}n.remove(L)}function S(L){const b=n.get(L);i.deleteTexture(b.__webglTexture);const J=L.source,ut=h.get(J);delete ut[b.__cacheKey],r.memory.textures--}function x(L){const b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(b.__webglFramebuffer[ut]))for(let dt=0;dt<b.__webglFramebuffer[ut].length;dt++)i.deleteFramebuffer(b.__webglFramebuffer[ut][dt]);else i.deleteFramebuffer(b.__webglFramebuffer[ut]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ut])}else{if(Array.isArray(b.__webglFramebuffer))for(let ut=0;ut<b.__webglFramebuffer.length;ut++)i.deleteFramebuffer(b.__webglFramebuffer[ut]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ut=0;ut<b.__webglColorRenderbuffer.length;ut++)b.__webglColorRenderbuffer[ut]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ut]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=L.textures;for(let ut=0,dt=J.length;ut<dt;ut++){const ot=n.get(J[ut]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),r.memory.textures--),n.remove(J[ut])}n.remove(L)}let N=0;function B(){N=0}function V(){const L=N;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function W(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function Q(L,b){const J=n.get(L);if(L.isVideoTexture&&Nt(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(J,L,b);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+b)}function G(L,b){const J=n.get(L);if(L.version>0&&J.__version!==L.version){C(J,L,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+b)}function rt(L,b){const J=n.get(L);if(L.version>0&&J.__version!==L.version){C(J,L,b);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+b)}function Y(L,b){const J=n.get(L);if(L.version>0&&J.__version!==L.version){k(J,L,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+b)}const ct={[Pi]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},xt={[an]:i.NEAREST,[wd]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},Mt={[Cd]:i.NEVER,[Ud]:i.ALWAYS,[Rd]:i.LESS,[tu]:i.LEQUAL,[Pd]:i.EQUAL,[Id]:i.GEQUAL,[Ld]:i.GREATER,[Dd]:i.NOTEQUAL};function Ut(L,b){if(b.type===zn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===zr||b.magFilter===Pa||b.magFilter===qi||b.minFilter===Nn||b.minFilter===zr||b.minFilter===Pa||b.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ct[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ct[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ct[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,xt[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,xt[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Mt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==Pa&&b.minFilter!==qi||b.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Z(L,b){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",P));const ut=b.source;let dt=h.get(ut);dt===void 0&&(dt={},h.set(ut,dt));const ot=W(b);if(ot!==L.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,J=!0),dt[ot].usedTimes++;const Ft=dt[L.__cacheKey];Ft!==void 0&&(dt[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&S(b)),L.__cacheKey=ot,L.__webglTexture=dt[ot].texture}return J}function C(L,b,J){let ut=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ut=i.TEXTURE_3D);const dt=Z(L,b),ot=b.source;e.bindTexture(ut,L.__webglTexture,i.TEXTURE0+J);const Ft=n.get(ot);if(ot.version!==Ft.__version||dt===!0){e.activeTexture(i.TEXTURE0+J);const Et=fe.getPrimaries(fe.workingColorSpace),Rt=b.colorSpace===wi?null:fe.getPrimaries(b.colorSpace),se=b.colorSpace===wi||Et===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let R=v(b.image,!1,s.maxTextureSize);R=Qt(b,R);const A=a.convert(b.format,b.colorSpace),$=a.convert(b.type);let ht=M(b.internalFormat,A,$,b.colorSpace,b.isVideoTexture);Ut(ut,b);let st;const mt=b.mipmaps,pt=b.isVideoTexture!==!0,St=Ft.__version===void 0||dt===!0,F=ot.dataReady,gt=D(b,R);if(b.isDepthTexture)ht=_(b.format===Fs,b.type),St&&(pt?e.texStorage2D(i.TEXTURE_2D,1,ht,R.width,R.height):e.texImage2D(i.TEXTURE_2D,0,ht,R.width,R.height,0,A,$,null));else if(b.isDataTexture)if(mt.length>0){pt&&St&&e.texStorage2D(i.TEXTURE_2D,gt,ht,mt[0].width,mt[0].height);for(let U=0,z=mt.length;U<z;U++)st=mt[U],pt?F&&e.texSubImage2D(i.TEXTURE_2D,U,0,0,st.width,st.height,A,$,st.data):e.texImage2D(i.TEXTURE_2D,U,ht,st.width,st.height,0,A,$,st.data);b.generateMipmaps=!1}else pt?(St&&e.texStorage2D(i.TEXTURE_2D,gt,ht,R.width,R.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,A,$,R.data)):e.texImage2D(i.TEXTURE_2D,0,ht,R.width,R.height,0,A,$,R.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){pt&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,ht,mt[0].width,mt[0].height,R.depth);for(let U=0,z=mt.length;U<z;U++)if(st=mt[U],b.format!==En)if(A!==null)if(pt){if(F)if(b.layerUpdates.size>0){const j=Jl(st.width,st.height,b.format,b.type);for(const it of b.layerUpdates){const ft=st.data.subarray(it*j/st.data.BYTES_PER_ELEMENT,(it+1)*j/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,it,st.width,st.height,1,A,ft)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,st.width,st.height,R.depth,A,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,U,ht,st.width,st.height,R.depth,0,st.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,st.width,st.height,R.depth,A,$,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,U,ht,st.width,st.height,R.depth,0,A,$,st.data)}else{pt&&St&&e.texStorage2D(i.TEXTURE_2D,gt,ht,mt[0].width,mt[0].height);for(let U=0,z=mt.length;U<z;U++)st=mt[U],b.format!==En?A!==null?pt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,U,0,0,st.width,st.height,A,st.data):e.compressedTexImage2D(i.TEXTURE_2D,U,ht,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?F&&e.texSubImage2D(i.TEXTURE_2D,U,0,0,st.width,st.height,A,$,st.data):e.texImage2D(i.TEXTURE_2D,U,ht,st.width,st.height,0,A,$,st.data)}else if(b.isDataArrayTexture)if(pt){if(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,ht,R.width,R.height,R.depth),F)if(b.layerUpdates.size>0){const U=Jl(R.width,R.height,b.format,b.type);for(const z of b.layerUpdates){const j=R.data.subarray(z*U/R.data.BYTES_PER_ELEMENT,(z+1)*U/R.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,z,R.width,R.height,1,A,$,j)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,R.width,R.height,R.depth,A,$,R.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,R.width,R.height,R.depth,0,A,$,R.data);else if(b.isData3DTexture)pt?(St&&e.texStorage3D(i.TEXTURE_3D,gt,ht,R.width,R.height,R.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,R.width,R.height,R.depth,A,$,R.data)):e.texImage3D(i.TEXTURE_3D,0,ht,R.width,R.height,R.depth,0,A,$,R.data);else if(b.isFramebufferTexture){if(St)if(pt)e.texStorage2D(i.TEXTURE_2D,gt,ht,R.width,R.height);else{let U=R.width,z=R.height;for(let j=0;j<gt;j++)e.texImage2D(i.TEXTURE_2D,j,ht,U,z,0,A,$,null),U>>=1,z>>=1}}else if(mt.length>0){if(pt&&St){const U=zt(mt[0]);e.texStorage2D(i.TEXTURE_2D,gt,ht,U.width,U.height)}for(let U=0,z=mt.length;U<z;U++)st=mt[U],pt?F&&e.texSubImage2D(i.TEXTURE_2D,U,0,0,A,$,st):e.texImage2D(i.TEXTURE_2D,U,ht,A,$,st);b.generateMipmaps=!1}else if(pt){if(St){const U=zt(R);e.texStorage2D(i.TEXTURE_2D,gt,ht,U.width,U.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,A,$,R)}else e.texImage2D(i.TEXTURE_2D,0,ht,A,$,R);m(b)&&p(ut),Ft.__version=ot.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function k(L,b,J){if(b.image.length!==6)return;const ut=Z(L,b),dt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);const ot=n.get(dt);if(dt.version!==ot.__version||ut===!0){e.activeTexture(i.TEXTURE0+J);const Ft=fe.getPrimaries(fe.workingColorSpace),Et=b.colorSpace===wi?null:fe.getPrimaries(b.colorSpace),Rt=b.colorSpace===wi||Ft===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const se=b.isCompressedTexture||b.image[0].isCompressedTexture,R=b.image[0]&&b.image[0].isDataTexture,A=[];for(let z=0;z<6;z++)!se&&!R?A[z]=v(b.image[z],!0,s.maxCubemapSize):A[z]=R?b.image[z].image:b.image[z],A[z]=Qt(b,A[z]);const $=A[0],ht=a.convert(b.format,b.colorSpace),st=a.convert(b.type),mt=M(b.internalFormat,ht,st,b.colorSpace),pt=b.isVideoTexture!==!0,St=ot.__version===void 0||ut===!0,F=dt.dataReady;let gt=D(b,$);Ut(i.TEXTURE_CUBE_MAP,b);let U;if(se){pt&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,mt,$.width,$.height);for(let z=0;z<6;z++){U=A[z].mipmaps;for(let j=0;j<U.length;j++){const it=U[j];b.format!==En?ht!==null?pt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,j,0,0,it.width,it.height,ht,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,j,mt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,j,0,0,it.width,it.height,ht,st,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,j,mt,it.width,it.height,0,ht,st,it.data)}}}else{if(U=b.mipmaps,pt&&St){U.length>0&&gt++;const z=zt(A[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,mt,z.width,z.height)}for(let z=0;z<6;z++)if(R){pt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,A[z].width,A[z].height,ht,st,A[z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,mt,A[z].width,A[z].height,0,ht,st,A[z].data);for(let j=0;j<U.length;j++){const ft=U[j].image[z].image;pt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,j+1,0,0,ft.width,ft.height,ht,st,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,j+1,mt,ft.width,ft.height,0,ht,st,ft.data)}}else{pt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ht,st,A[z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,mt,ht,st,A[z]);for(let j=0;j<U.length;j++){const it=U[j];pt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,j+1,0,0,ht,st,it.image[z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,j+1,mt,ht,st,it.image[z])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),ot.__version=dt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function K(L,b,J,ut,dt,ot){const Ft=a.convert(J.format,J.colorSpace),Et=a.convert(J.type),Rt=M(J.internalFormat,Ft,Et,J.colorSpace),se=n.get(b),R=n.get(J);if(R.__renderTarget=b,!se.__hasExternalTextures){const A=Math.max(1,b.width>>ot),$=Math.max(1,b.height>>ot);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,ot,Rt,A,$,b.depth,0,Ft,Et,null):e.texImage2D(dt,ot,Rt,A,$,0,Ft,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Ot(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,dt,R.__webglTexture,0,Pt(b)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,dt,R.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(L,b,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){const ut=b.depthTexture,dt=ut&&ut.isDepthTexture?ut.type:null,ot=_(b.stencilBuffer,dt),Ft=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=Pt(b);Ot(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,ot,b.width,b.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ot,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ot,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,L)}else{const ut=b.textures;for(let dt=0;dt<ut.length;dt++){const ot=ut[dt],Ft=a.convert(ot.format,ot.colorSpace),Et=a.convert(ot.type),Rt=M(ot.internalFormat,Ft,Et,ot.colorSpace),se=Pt(b);J&&Ot(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Rt,b.width,b.height):Ot(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Rt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=n.get(b.depthTexture);ut.__renderTarget=b,(!ut.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q(b.depthTexture,0);const dt=ut.__webglTexture,ot=Pt(b);if(b.depthTexture.format===Ps)Ot(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(b.depthTexture.format===Fs)Ot(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function vt(L){const b=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ut){const dt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ut.removeEventListener("dispose",dt)};ut.addEventListener("dispose",dt),b.__depthDisposeCallback=dt}b.__boundDepthTexture=ut}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");yt(b.__webglFramebuffer,L)}else if(J){b.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ut]),b.__webglDepthbuffer[ut]===void 0)b.__webglDepthbuffer[ut]=i.createRenderbuffer(),at(b.__webglDepthbuffer[ut],L,!1);else{const dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=b.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),at(b.__webglDepthbuffer,L,!1);else{const ut=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(L,b,J){const ut=n.get(L);b!==void 0&&K(ut.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&vt(L)}function $t(L){const b=L.texture,J=n.get(L),ut=n.get(b);L.addEventListener("dispose",T);const dt=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Ft=dt.length>1;if(Ft||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=b.version,r.memory.textures++),ot){J.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[Et]=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)J.__webglFramebuffer[Et][Rt]=i.createFramebuffer()}else J.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let Et=0;Et<b.mipmaps.length;Et++)J.__webglFramebuffer[Et]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let Et=0,Rt=dt.length;Et<Rt;Et++){const se=n.get(dt[Et]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),r.memory.textures++)}if(L.samples>0&&Ot(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Et=0;Et<dt.length;Et++){const Rt=dt[Et];J.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Et]);const se=a.convert(Rt.format,Rt.colorSpace),R=a.convert(Rt.type),A=M(Rt.internalFormat,se,R,Rt.colorSpace,L.isXRRenderTarget===!0),$=Pt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,A,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,J.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),at(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,b);for(let Et=0;Et<6;Et++)if(b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)K(J.__webglFramebuffer[Et][Rt],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Rt);else K(J.__webglFramebuffer[Et],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let Et=0,Rt=dt.length;Et<Rt;Et++){const se=dt[Et],R=n.get(se);e.bindTexture(i.TEXTURE_2D,R.__webglTexture),Ut(i.TEXTURE_2D,se),K(J.__webglFramebuffer,L,se,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),m(se)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,ut.__webglTexture),Ut(Et,b),b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)K(J.__webglFramebuffer[Rt],L,b,i.COLOR_ATTACHMENT0,Et,Rt);else K(J.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,Et,0);m(b)&&p(Et),e.unbindTexture()}L.depthBuffer&&vt(L)}function Xt(L){const b=L.textures;for(let J=0,ut=b.length;J<ut;J++){const dt=b[J];if(m(dt)){const ot=y(L),Ft=n.get(dt).__webglTexture;e.bindTexture(ot,Ft),p(ot),e.unbindTexture()}}}const lt=[],H=[];function Dt(L){if(L.samples>0){if(Ot(L)===!1){const b=L.textures,J=L.width,ut=L.height;let dt=i.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(L),Et=b.length>1;if(Et)for(let Rt=0;Rt<b.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Rt]);const se=n.get(b[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,J,ut,0,0,J,ut,dt,i.NEAREST),c===!0&&(lt.length=0,H.length=0,lt.push(i.COLOR_ATTACHMENT0+Rt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(lt.push(ot),H.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Rt=0;Rt<b.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Rt]);const se=n.get(b[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Pt(L){return Math.min(s.maxSamples,L.samples)}function Ot(L){const b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(L){const b=r.render.frame;u.get(L)!==b&&(u.set(L,b),L.update())}function Qt(L,b){const J=L.colorSpace,ut=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Hs&&J!==wi&&(fe.getTransfer(J)===ye?(ut!==En||dt!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=G,this.setTexture3D=rt,this.setTextureCube=Y,this.rebindTextures=Tt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ot}function tv(i,t){function e(n,s=wi){let a;const r=fe.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===ya)return i.UNSIGNED_SHORT;if(n===Pc)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Aa)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===$h)return i.RGB;if(n===En)return i.RGBA;if(n===Jh)return i.LUMINANCE;if(n===Kh)return i.LUMINANCE_ALPHA;if(n===Ps)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===Tr)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===Zh)return i.RG;if(n===Uc)return i.RG_INTEGER;if(n===Nc)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(r===ye)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===hr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===hr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Ho||n===Go||n===Wo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Vo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Xo||n===qo)return r===ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Yo)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jo||n===$o||n===Jo||n===Ko||n===Zo||n===Qo||n===tc||n===ec||n===nc||n===ic||n===sc||n===ac||n===rc||n===oc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===jo)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return r===ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===cc||n===lc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===pr)return r===ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===hc||n===uc||n===dc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===pr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ev extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _e extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nv={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class av{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ri({vertexShader:iv,fragmentShader:sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tt(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rv extends Gs{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const v=new av,m=e.getContextAttributes();let p=null,y=null;const M=[],_=[],D=new At;let P=null;const T=new Je;T.viewport=new Me;const I=new Je;I.viewport=new Me;const S=[T,I],x=new ev;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let k=M[C];return k===void 0&&(k=new lo,M[C]=k),k.getTargetRaySpace()},this.getControllerGrip=function(C){let k=M[C];return k===void 0&&(k=new lo,M[C]=k),k.getGripSpace()},this.getHand=function(C){let k=M[C];return k===void 0&&(k=new lo,M[C]=k),k.getHandSpace()};function V(C){const k=_.indexOf(C.inputSource);if(k===-1)return;const K=M[k];K!==void 0&&(K.update(C.inputSource,C.frame,l||r),K.dispatchEvent({type:C.type,data:C.inputSource}))}function W(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Q);for(let C=0;C<M.length;C++){const k=_[C];k!==null&&(_[C]=null,M[C].disconnect(k))}N=null,B=null,v.reset(),t.setRenderTarget(p),f=null,h=null,d=null,s=null,y=null,Z.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){o=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const k={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $i(f.framebufferWidth,f.framebufferHeight,{format:En,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let k=null,K=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=m.stencil?Fs:Ps,K=m.stencil?zs:ji);const yt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:a};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(yt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new $i(h.textureWidth,h.textureHeight,{format:En,type:ai,depthTexture:new pu(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(C){for(let k=0;k<C.removed.length;k++){const K=C.removed[k],at=_.indexOf(K);at>=0&&(_[at]=null,M[at].disconnect(K))}for(let k=0;k<C.added.length;k++){const K=C.added[k];let at=_.indexOf(K);if(at===-1){for(let vt=0;vt<M.length;vt++)if(vt>=_.length){_.push(K),at=vt;break}else if(_[vt]===null){_[vt]=K,at=vt;break}if(at===-1)break}const yt=M[at];yt&&yt.connect(K)}}const G=new O,rt=new O;function Y(C,k,K){G.setFromMatrixPosition(k.matrixWorld),rt.setFromMatrixPosition(K.matrixWorld);const at=G.distanceTo(rt),yt=k.projectionMatrix.elements,vt=K.projectionMatrix.elements,Tt=yt[14]/(yt[10]-1),$t=yt[14]/(yt[10]+1),Xt=(yt[9]+1)/yt[5],lt=(yt[9]-1)/yt[5],H=(yt[8]-1)/yt[0],Dt=(vt[8]+1)/vt[0],Pt=Tt*H,Ot=Tt*Dt,Nt=at/(-H+Dt),Qt=Nt*-H;if(k.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Qt),C.translateZ(Nt),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),yt[10]===-1)C.projectionMatrix.copy(k.projectionMatrix),C.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const zt=Tt+Nt,L=$t+Nt,b=Pt-Qt,J=Ot+(at-Qt),ut=Xt*$t/L*zt,dt=lt*$t/L*zt;C.projectionMatrix.makePerspective(b,J,ut,dt,zt,L),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function ct(C,k){k===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(k.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;let k=C.near,K=C.far;v.texture!==null&&(v.depthNear>0&&(k=v.depthNear),v.depthFar>0&&(K=v.depthFar)),x.near=I.near=T.near=k,x.far=I.far=T.far=K,(N!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),N=x.near,B=x.far),T.layers.mask=C.layers.mask|2,I.layers.mask=C.layers.mask|4,x.layers.mask=T.layers.mask|I.layers.mask;const at=C.parent,yt=x.cameras;ct(x,at);for(let vt=0;vt<yt.length;vt++)ct(yt[vt],at);yt.length===2?Y(x,T,I):x.projectionMatrix.copy(T.projectionMatrix),xt(C,x,at)};function xt(C,k,K){K===null?C.matrix.copy(k.matrixWorld):(C.matrix.copy(K.matrixWorld),C.matrix.invert(),C.matrix.multiply(k.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(k.projectionMatrix),C.projectionMatrixInverse.copy(k.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=Ma*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(C){c=C,h!==null&&(h.fixedFoveation=C),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=C)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let Mt=null;function Ut(C,k){if(u=k.getViewerPose(l||r),g=k,u!==null){const K=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let at=!1;K.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let vt=0;vt<K.length;vt++){const Tt=K[vt];let $t=null;if(f!==null)$t=f.getViewport(Tt);else{const lt=d.getViewSubImage(h,Tt);$t=lt.viewport,vt===0&&(t.setRenderTargetTextures(y,lt.colorTexture,h.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(y))}let Xt=S[vt];Xt===void 0&&(Xt=new Je,Xt.layers.enable(vt),Xt.viewport=new Me,S[vt]=Xt),Xt.matrix.fromArray(Tt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Tt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set($t.x,$t.y,$t.width,$t.height),vt===0&&(x.matrix.copy(Xt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Xt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const vt=d.getDepthInformation(K[0]);vt&&vt.isValid&&vt.texture&&v.init(t,vt,s.renderState)}}for(let K=0;K<M.length;K++){const at=_[K],yt=M[K];at!==null&&yt!==void 0&&yt.update(at,k,l||r)}Mt&&Mt(C,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const Z=new du;Z.setAnimationLoop(Ut),this.setAnimationLoop=function(C){Mt=C},this.dispose=function(){}}}const Oi=new mn,ov=new me;function cv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,_=y.envMapRotation;M&&(m.envMap.value=M,Oi.copy(_),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(Oi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lv(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const _=M.program;n.uniformBlockBinding(y,_)}function l(y,M){let _=s[y.id];_===void 0&&(g(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",m));const D=M.program;n.updateUBOMapping(y,D);const P=t.render.frame;a[y.id]!==P&&(h(y),a[y.id]=P)}function u(y){const M=d();y.__bindingPointIndex=M;const _=i.createBuffer(),D=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=s[y.id],_=y.uniforms,D=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,T=_.length;P<T;P++){const I=Array.isArray(_[P])?_[P]:[_[P]];for(let S=0,x=I.length;S<x;S++){const N=I[S];if(f(N,P,S,D)===!0){const B=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let W=0;for(let Q=0;Q<V.length;Q++){const G=V[Q],rt=v(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+W,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,W),W+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,M,_,D){const P=y.value,T=M+"_"+_;if(D[T]===void 0)return typeof P=="number"||typeof P=="boolean"?D[T]=P:D[T]=P.clone(),!0;{const I=D[T];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return D[T]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function g(y){const M=y.uniforms;let _=0;const D=16;for(let T=0,I=M.length;T<I;T++){const S=Array.isArray(M[T])?M[T]:[M[T]];for(let x=0,N=S.length;x<N;x++){const B=S[x],V=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Q=V.length;W<Q;W++){const G=V[W],rt=v(G),Y=_%D,ct=Y%rt.boundary,xt=Y+ct;_+=ct,xt!==0&&D-xt<rt.storage&&(_+=D-xt),B.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=rt.storage}}}const P=_%D;return P>0&&(_+=D-P),y.__size=_,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const _=r.indexOf(M.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:c,update:l,dispose:p}}class hv{constructor(t={}){const{canvas:e=Kd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Ri,this.toneMappingExposure=1;const _=this;let D=!1,P=0,T=0,I=null,S=-1,x=null;const N=new Me,B=new Me;let V=null;const W=new Zt(0);let Q=0,G=e.width,rt=e.height,Y=1,ct=null,xt=null;const Mt=new Me(0,0,G,rt),Ut=new Me(0,0,G,rt);let Z=!1;const C=new Fc;let k=!1,K=!1;const at=new me,yt=new me,vt=new O,Tt=new Me,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function lt(){return I===null?Y:1}let H=n;function Dt(w,X){return e.getContext(w,X)}try{const w={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cc}`),e.addEventListener("webglcontextlost",z,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",it,!1),H===null){const X="webgl2";if(H=Dt(X,w),H===null)throw Dt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Pt,Ot,Nt,Qt,zt,L,b,J,ut,dt,ot,Ft,Et,Rt,se,R,A,$,ht,st,mt,pt,St,F;function gt(){Pt=new m0(H),Pt.init(),pt=new tv(H,Pt),Ot=new l0(H,Pt,t,pt),Nt=new Kg(H,Pt),Ot.reverseDepthBuffer&&h&&Nt.buffers.depth.setReversed(!0),Qt=new x0(H),zt=new zg,L=new Qg(H,Pt,Nt,zt,Ot,pt,Qt),b=new u0(_),J=new p0(_),ut=new Ef(H),St=new o0(H,ut),dt=new g0(H,ut,Qt,St),ot=new y0(H,dt,ut,Qt),ht=new _0(H,Ot,L),R=new h0(zt),Ft=new Ng(_,b,J,Pt,Ot,St,R),Et=new cv(_,zt),Rt=new Og,se=new Wg(Pt),$=new r0(_,b,J,Nt,ot,f,c),A=new $g(_,ot,Ot),F=new lv(H,Qt,Ot,Nt),st=new c0(H,Pt,Qt),mt=new v0(H,Pt,Qt),Qt.programs=Ft.programs,_.capabilities=Ot,_.extensions=Pt,_.properties=zt,_.renderLists=Rt,_.shadowMap=A,_.state=Nt,_.info=Qt}gt();const U=new rv(_,H);this.xr=U,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(G,rt,!1))},this.getSize=function(w){return w.set(G,rt)},this.setSize=function(w,X,et=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,rt=X,e.width=Math.floor(w*Y),e.height=Math.floor(X*Y),et===!0&&(e.style.width=w+"px",e.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(G*Y,rt*Y).floor()},this.setDrawingBufferSize=function(w,X,et){G=w,rt=X,Y=et,e.width=Math.floor(w*et),e.height=Math.floor(X*et),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,X,et,nt){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,X,et,nt),Nt.viewport(N.copy(Mt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,X,et,nt){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,X,et,nt),Nt.scissor(B.copy(Ut).multiplyScalar(Y).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){Nt.setScissorTest(Z=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){xt=w},this.getClearColor=function(w){return w.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(w=!0,X=!0,et=!0){let nt=0;if(w){let q=!1;if(I!==null){const bt=I.texture.format;q=bt===Nc||bt===Uc||bt===Ic}if(q){const bt=I.texture.type,Lt=bt===ai||bt===ji||bt===ya||bt===zs||bt===Lc||bt===Dc,Bt=$.getClearColor(),Vt=$.getClearAlpha(),te=Bt.r,ee=Bt.g,Ht=Bt.b;Lt?(g[0]=te,g[1]=ee,g[2]=Ht,g[3]=Vt,H.clearBufferuiv(H.COLOR,0,g)):(v[0]=te,v[1]=ee,v[2]=Ht,v[3]=Vt,H.clearBufferiv(H.COLOR,0,v))}else nt|=H.COLOR_BUFFER_BIT}X&&(nt|=H.DEPTH_BUFFER_BIT),et&&(nt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",z,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Rt.dispose(),se.dispose(),zt.dispose(),b.dispose(),J.dispose(),ot.dispose(),St.dispose(),F.dispose(),Ft.dispose(),U.dispose(),U.removeEventListener("sessionstart",kt),U.removeEventListener("sessionend",jt),Se.stop()};function z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const w=Qt.autoReset,X=A.enabled,et=A.autoUpdate,nt=A.needsUpdate,q=A.type;gt(),Qt.autoReset=w,A.enabled=X,A.autoUpdate=et,A.needsUpdate=nt,A.type=q}function it(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ft(w){const X=w.target;X.removeEventListener("dispose",ft),_t(X)}function _t(w){Gt(w),zt.remove(w)}function Gt(w){const X=zt.get(w).programs;X!==void 0&&(X.forEach(function(et){Ft.releaseProgram(et)}),w.isShaderMaterial&&Ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,et,nt,q,bt){X===null&&(X=$t);const Lt=q.isMesh&&q.matrixWorld.determinant()<0,Bt=Xu(w,X,et,nt,q);Nt.setMaterial(nt,Lt);let Vt=et.index,te=1;if(nt.wireframe===!0){if(Vt=dt.getWireframeAttribute(et),Vt===void 0)return;te=2}const ee=et.drawRange,Ht=et.attributes.position;let pe=ee.start*te,Ee=(ee.start+ee.count)*te;bt!==null&&(pe=Math.max(pe,bt.start*te),Ee=Math.min(Ee,(bt.start+bt.count)*te)),Vt!==null?(pe=Math.max(pe,0),Ee=Math.min(Ee,Vt.count)):Ht!=null&&(pe=Math.max(pe,0),Ee=Math.min(Ee,Ht.count));const Ae=Ee-pe;if(Ae<0||Ae===1/0)return;St.setup(q,nt,Bt,et,Vt);let rn,ge=st;if(Vt!==null&&(rn=ut.get(Vt),ge=mt,ge.setIndex(rn)),q.isMesh)nt.wireframe===!0?(Nt.setLineWidth(nt.wireframeLinewidth*lt()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(q.isLine){let Wt=nt.linewidth;Wt===void 0&&(Wt=1),Nt.setLineWidth(Wt*lt()),q.isLineSegments?ge.setMode(H.LINES):q.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else q.isPoints?ge.setMode(H.POINTS):q.isSprite&&ge.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ge.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))ge.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Wt=q._multiDrawStarts,Vn=q._multiDrawCounts,ve=q._multiDrawCount,gn=Vt?ut.get(Vt).bytesPerElement:1,ts=zt.get(nt).currentProgram.getUniforms();for(let cn=0;cn<ve;cn++)ts.setValue(H,"_gl_DrawID",cn),ge.render(Wt[cn]/gn,Vn[cn])}else if(q.isInstancedMesh)ge.renderInstances(pe,Ae,q.count);else if(et.isInstancedBufferGeometry){const Wt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Vn=Math.min(et.instanceCount,Wt);ge.renderInstances(pe,Ae,Vn)}else ge.render(pe,Ae)};function It(w,X,et){w.transparent===!0&&w.side===we&&w.forceSinglePass===!1?(w.side=Xe,w.needsUpdate=!0,Ra(w,X,et),w.side=On,w.needsUpdate=!0,Ra(w,X,et),w.side=we):Ra(w,X,et)}this.compile=function(w,X,et=null){et===null&&(et=w),p=se.get(et),p.init(X),M.push(p),et.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),w!==et&&w.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const nt=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const bt=q.material;if(bt)if(Array.isArray(bt))for(let Lt=0;Lt<bt.length;Lt++){const Bt=bt[Lt];It(Bt,et,q),nt.add(Bt)}else It(bt,et,q),nt.add(bt)}),M.pop(),p=null,nt},this.compileAsync=function(w,X,et=null){const nt=this.compile(w,X,et);return new Promise(q=>{function bt(){if(nt.forEach(function(Lt){zt.get(Lt).currentProgram.isReady()&&nt.delete(Lt)}),nt.size===0){q(w);return}setTimeout(bt,10)}Pt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ae=null;function Jt(w){ae&&ae(w)}function kt(){Se.stop()}function jt(){Se.start()}const Se=new du;Se.setAnimationLoop(Jt),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(w){ae=w,U.setAnimationLoop(w),w===null?Se.stop():Se.start()},U.addEventListener("sessionstart",kt),U.addEventListener("sessionend",jt),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(X),X=U.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,X,I),p=se.get(w,M.length),p.init(X),M.push(p),yt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),C.setFromProjectionMatrix(yt),K=this.localClippingEnabled,k=R.init(this.clippingPlanes,K),m=Rt.get(w,y.length),m.init(),y.push(m),U.enabled===!0&&U.isPresenting===!0){const bt=_.xr.getDepthSensingMesh();bt!==null&&Qe(bt,X,-1/0,_.sortObjects)}Qe(w,X,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ct,xt),Xt=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,Xt&&$.addToRenderList(m,w),this.info.render.frame++,k===!0&&R.beginShadows();const et=p.state.shadowsArray;A.render(et,w,X),k===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const bt=X.cameras;if(q.length>0)for(let Lt=0,Bt=bt.length;Lt<Bt;Lt++){const Vt=bt[Lt];li(nt,q,w,Vt)}Xt&&$.render(w);for(let Lt=0,Bt=bt.length;Lt<Bt;Lt++){const Vt=bt[Lt];$s(m,w,Vt,Vt.viewport)}}else q.length>0&&li(nt,q,w,X),Xt&&$.render(w),$s(m,w,X);I!==null&&(L.updateMultisampleRenderTarget(I),L.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(_,w,X),St.resetDefaultState(),S=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],k===!0&&R.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Qe(w,X,et,nt){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)et=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||C.intersectsSprite(w)){nt&&Tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(yt);const Lt=ot.update(w),Bt=w.material;Bt.visible&&m.push(w,Lt,Bt,et,Tt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||C.intersectsObject(w))){const Lt=ot.update(w),Bt=w.material;if(nt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Tt.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Tt.copy(Lt.boundingSphere.center)),Tt.applyMatrix4(w.matrixWorld).applyMatrix4(yt)),Array.isArray(Bt)){const Vt=Lt.groups;for(let te=0,ee=Vt.length;te<ee;te++){const Ht=Vt[te],pe=Bt[Ht.materialIndex];pe&&pe.visible&&m.push(w,Lt,pe,et,Tt.z,Ht)}}else Bt.visible&&m.push(w,Lt,Bt,et,Tt.z,null)}}const bt=w.children;for(let Lt=0,Bt=bt.length;Lt<Bt;Lt++)Qe(bt[Lt],X,et,nt)}function $s(w,X,et,nt){const q=w.opaque,bt=w.transmissive,Lt=w.transparent;p.setupLightsView(et),k===!0&&R.setGlobalState(_.clippingPlanes,et),nt&&Nt.viewport(N.copy(nt)),q.length>0&&Ca(q,X,et),bt.length>0&&Ca(bt,X,et),Lt.length>0&&Ca(Lt,X,et),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function li(w,X,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[nt.id]===void 0&&(p.state.transmissionRenderTarget[nt.id]=new $i(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Aa:ai,minFilter:qi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));const bt=p.state.transmissionRenderTarget[nt.id],Lt=nt.viewport||N;bt.setSize(Lt.z,Lt.w);const Bt=_.getRenderTarget();_.setRenderTarget(bt),_.getClearColor(W),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),Xt&&$.render(et);const Vt=_.toneMapping;_.toneMapping=Ri;const te=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),p.setupLightsView(nt),k===!0&&R.setGlobalState(_.clippingPlanes,nt),Ca(w,et,nt),L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Ht=0,pe=X.length;Ht<pe;Ht++){const Ee=X[Ht],Ae=Ee.object,rn=Ee.geometry,ge=Ee.material,Wt=Ee.group;if(ge.side===we&&Ae.layers.test(nt.layers)){const Vn=ge.side;ge.side=Xe,ge.needsUpdate=!0,Jc(Ae,et,nt,rn,ge,Wt),ge.side=Vn,ge.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(bt),L.updateRenderTargetMipmap(bt))}_.setRenderTarget(Bt),_.setClearColor(W,Q),te!==void 0&&(nt.viewport=te),_.toneMapping=Vt}function Ca(w,X,et){const nt=X.isScene===!0?X.overrideMaterial:null;for(let q=0,bt=w.length;q<bt;q++){const Lt=w[q],Bt=Lt.object,Vt=Lt.geometry,te=nt===null?Lt.material:nt,ee=Lt.group;Bt.layers.test(et.layers)&&Jc(Bt,X,et,Vt,te,ee)}}function Jc(w,X,et,nt,q,bt){w.onBeforeRender(_,X,et,nt,q,bt),w.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(_,X,et,nt,w,bt),q.transparent===!0&&q.side===we&&q.forceSinglePass===!1?(q.side=Xe,q.needsUpdate=!0,_.renderBufferDirect(et,X,nt,q,w,bt),q.side=On,q.needsUpdate=!0,_.renderBufferDirect(et,X,nt,q,w,bt),q.side=we):_.renderBufferDirect(et,X,nt,q,w,bt),w.onAfterRender(_,X,et,nt,q,bt)}function Ra(w,X,et){X.isScene!==!0&&(X=$t);const nt=zt.get(w),q=p.state.lights,bt=p.state.shadowsArray,Lt=q.state.version,Bt=Ft.getParameters(w,q.state,bt,X,et),Vt=Ft.getProgramCacheKey(Bt);let te=nt.programs;nt.environment=w.isMeshStandardMaterial?X.environment:null,nt.fog=X.fog,nt.envMap=(w.isMeshStandardMaterial?J:b).get(w.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",ft),te=new Map,nt.programs=te);let ee=te.get(Vt);if(ee!==void 0){if(nt.currentProgram===ee&&nt.lightsStateVersion===Lt)return Zc(w,Bt),ee}else Bt.uniforms=Ft.getUniforms(w),w.onBeforeCompile(Bt,_),ee=Ft.acquireProgram(Bt,Vt),te.set(Vt,ee),nt.uniforms=Bt.uniforms;const Ht=nt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ht.clippingPlanes=R.uniform),Zc(w,Bt),nt.needsLights=Yu(w),nt.lightsStateVersion=Lt,nt.needsLights&&(Ht.ambientLightColor.value=q.state.ambient,Ht.lightProbe.value=q.state.probe,Ht.directionalLights.value=q.state.directional,Ht.directionalLightShadows.value=q.state.directionalShadow,Ht.spotLights.value=q.state.spot,Ht.spotLightShadows.value=q.state.spotShadow,Ht.rectAreaLights.value=q.state.rectArea,Ht.ltc_1.value=q.state.rectAreaLTC1,Ht.ltc_2.value=q.state.rectAreaLTC2,Ht.pointLights.value=q.state.point,Ht.pointLightShadows.value=q.state.pointShadow,Ht.hemisphereLights.value=q.state.hemi,Ht.directionalShadowMap.value=q.state.directionalShadowMap,Ht.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ht.spotShadowMap.value=q.state.spotShadowMap,Ht.spotLightMatrix.value=q.state.spotLightMatrix,Ht.spotLightMap.value=q.state.spotLightMap,Ht.pointShadowMap.value=q.state.pointShadowMap,Ht.pointShadowMatrix.value=q.state.pointShadowMatrix),nt.currentProgram=ee,nt.uniformsList=null,ee}function Kc(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=gr.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function Zc(w,X){const et=zt.get(w);et.outputColorSpace=X.outputColorSpace,et.batching=X.batching,et.batchingColor=X.batchingColor,et.instancing=X.instancing,et.instancingColor=X.instancingColor,et.instancingMorph=X.instancingMorph,et.skinning=X.skinning,et.morphTargets=X.morphTargets,et.morphNormals=X.morphNormals,et.morphColors=X.morphColors,et.morphTargetsCount=X.morphTargetsCount,et.numClippingPlanes=X.numClippingPlanes,et.numIntersection=X.numClipIntersection,et.vertexAlphas=X.vertexAlphas,et.vertexTangents=X.vertexTangents,et.toneMapping=X.toneMapping}function Xu(w,X,et,nt,q){X.isScene!==!0&&(X=$t),L.resetTextureUnits();const bt=X.fog,Lt=nt.isMeshStandardMaterial?X.environment:null,Bt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Hs,Vt=(nt.isMeshStandardMaterial?J:b).get(nt.envMap||Lt),te=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ee=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ht=!!et.morphAttributes.position,pe=!!et.morphAttributes.normal,Ee=!!et.morphAttributes.color;let Ae=Ri;nt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ae=_.toneMapping);const rn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ge=rn!==void 0?rn.length:0,Wt=zt.get(nt),Vn=p.state.lights;if(k===!0&&(K===!0||w!==x)){const un=w===x&&nt.id===S;R.setState(nt,w,un)}let ve=!1;nt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Vn.state.version||Wt.outputColorSpace!==Bt||q.isBatchedMesh&&Wt.batching===!1||!q.isBatchedMesh&&Wt.batching===!0||q.isBatchedMesh&&Wt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Wt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Wt.instancing===!1||!q.isInstancedMesh&&Wt.instancing===!0||q.isSkinnedMesh&&Wt.skinning===!1||!q.isSkinnedMesh&&Wt.skinning===!0||q.isInstancedMesh&&Wt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Wt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Wt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Wt.instancingMorph===!1&&q.morphTexture!==null||Wt.envMap!==Vt||nt.fog===!0&&Wt.fog!==bt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==R.numPlanes||Wt.numIntersection!==R.numIntersection)||Wt.vertexAlphas!==te||Wt.vertexTangents!==ee||Wt.morphTargets!==Ht||Wt.morphNormals!==pe||Wt.morphColors!==Ee||Wt.toneMapping!==Ae||Wt.morphTargetsCount!==ge)&&(ve=!0):(ve=!0,Wt.__version=nt.version);let gn=Wt.currentProgram;ve===!0&&(gn=Ra(nt,X,q));let ts=!1,cn=!1,Js=!1;const Ce=gn.getUniforms(),Rn=Wt.uniforms;if(Nt.useProgram(gn.program)&&(ts=!0,cn=!0,Js=!0),nt.id!==S&&(S=nt.id,cn=!0),ts||x!==w){Nt.buffers.depth.getReversed()?(at.copy(w.projectionMatrix),Qd(at),tf(at),Ce.setValue(H,"projectionMatrix",at)):Ce.setValue(H,"projectionMatrix",w.projectionMatrix),Ce.setValue(H,"viewMatrix",w.matrixWorldInverse);const hi=Ce.map.cameraPosition;hi!==void 0&&hi.setValue(H,vt.setFromMatrixPosition(w.matrixWorld)),Ot.logarithmicDepthBuffer&&Ce.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ce.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,cn=!0,Js=!0)}if(q.isSkinnedMesh){Ce.setOptional(H,q,"bindMatrix"),Ce.setOptional(H,q,"bindMatrixInverse");const un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ce.setValue(H,"boneTexture",un.boneTexture,L))}q.isBatchedMesh&&(Ce.setOptional(H,q,"batchingTexture"),Ce.setValue(H,"batchingTexture",q._matricesTexture,L),Ce.setOptional(H,q,"batchingIdTexture"),Ce.setValue(H,"batchingIdTexture",q._indirectTexture,L),Ce.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Ce.setValue(H,"batchingColorTexture",q._colorsTexture,L));const Ks=et.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&ht.update(q,et,gn),(cn||Wt.receiveShadow!==q.receiveShadow)&&(Wt.receiveShadow=q.receiveShadow,Ce.setValue(H,"receiveShadow",q.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Rn.envMap.value=Vt,Rn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&X.environment!==null&&(Rn.envMapIntensity.value=X.environmentIntensity),cn&&(Ce.setValue(H,"toneMappingExposure",_.toneMappingExposure),Wt.needsLights&&qu(Rn,Js),bt&&nt.fog===!0&&Et.refreshFogUniforms(Rn,bt),Et.refreshMaterialUniforms(Rn,nt,Y,rt,p.state.transmissionRenderTarget[w.id]),gr.upload(H,Kc(Wt),Rn,L)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(gr.upload(H,Kc(Wt),Rn,L),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ce.setValue(H,"center",q.center),Ce.setValue(H,"modelViewMatrix",q.modelViewMatrix),Ce.setValue(H,"normalMatrix",q.normalMatrix),Ce.setValue(H,"modelMatrix",q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const un=nt.uniformsGroups;for(let hi=0,ui=un.length;hi<ui;hi++){const Qc=un[hi];F.update(Qc,gn),F.bind(Qc,gn)}}return gn}function qu(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Yu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,X,et){zt.get(w.texture).__webglTexture=X,zt.get(w.depthTexture).__webglTexture=et;const nt=zt.get(w);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,X){const et=zt.get(w);et.__webglFramebuffer=X,et.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,et=0){I=w,P=X,T=et;let nt=!0,q=null,bt=!1,Lt=!1;if(w){const Vt=zt.get(w);if(Vt.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(H.FRAMEBUFFER,null),nt=!1;else if(Vt.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(Vt.__hasExternalTextures)L.rebindTextures(w,zt.get(w.texture).__webglTexture,zt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ht=w.depthTexture;if(Vt.__boundDepthTexture!==Ht){if(Ht!==null&&zt.has(Ht)&&(w.width!==Ht.image.width||w.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Lt=!0);const ee=zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?q=ee[X][et]:q=ee[X],bt=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?q=zt.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[et]:q=ee,N.copy(w.viewport),B.copy(w.scissor),V=w.scissorTest}else N.copy(Mt).multiplyScalar(Y).floor(),B.copy(Ut).multiplyScalar(Y).floor(),V=Z;if(Nt.bindFramebuffer(H.FRAMEBUFFER,q)&&nt&&Nt.drawBuffers(w,q),Nt.viewport(N),Nt.scissor(B),Nt.setScissorTest(V),bt){const Vt=zt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Vt.__webglTexture,et)}else if(Lt){const Vt=zt.get(w.texture),te=X||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.__webglTexture,et||0,te)}S=-1},this.readRenderTargetPixels=function(w,X,et,nt,q,bt,Lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt){Nt.bindFramebuffer(H.FRAMEBUFFER,Bt);try{const Vt=w.texture,te=Vt.format,ee=Vt.type;if(!Ot.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-nt&&et>=0&&et<=w.height-q&&H.readPixels(X,et,nt,q,pt.convert(te),pt.convert(ee),bt)}finally{const Vt=I!==null?zt.get(I).__webglFramebuffer:null;Nt.bindFramebuffer(H.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(w,X,et,nt,q,bt,Lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt){const Vt=w.texture,te=Vt.format,ee=Vt.type;if(!Ot.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=w.width-nt&&et>=0&&et<=w.height-q){Nt.bindFramebuffer(H.FRAMEBUFFER,Bt);const Ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ht),H.bufferData(H.PIXEL_PACK_BUFFER,bt.byteLength,H.STREAM_READ),H.readPixels(X,et,nt,q,pt.convert(te),pt.convert(ee),0);const pe=I!==null?zt.get(I).__webglFramebuffer:null;Nt.bindFramebuffer(H.FRAMEBUFFER,pe);const Ee=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Zd(H,Ee,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,bt),H.deleteBuffer(Ht),H.deleteSync(Ee),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,X=null,et=0){w.isTexture!==!0&&(da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1]);const nt=Math.pow(2,-et),q=Math.floor(w.image.width*nt),bt=Math.floor(w.image.height*nt),Lt=X!==null?X.x:0,Bt=X!==null?X.y:0;L.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,et,0,0,Lt,Bt,q,bt),Nt.unbindTexture()},this.copyTextureToTexture=function(w,X,et=null,nt=null,q=0){w.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,w=arguments[1],X=arguments[2],q=arguments[3]||0,et=null);let bt,Lt,Bt,Vt,te,ee,Ht,pe,Ee;const Ae=w.isCompressedTexture?w.mipmaps[q]:w.image;et!==null?(bt=et.max.x-et.min.x,Lt=et.max.y-et.min.y,Bt=et.isBox3?et.max.z-et.min.z:1,Vt=et.min.x,te=et.min.y,ee=et.isBox3?et.min.z:0):(bt=Ae.width,Lt=Ae.height,Bt=Ae.depth||1,Vt=0,te=0,ee=0),nt!==null?(Ht=nt.x,pe=nt.y,Ee=nt.z):(Ht=0,pe=0,Ee=0);const rn=pt.convert(X.format),ge=pt.convert(X.type);let Wt;X.isData3DTexture?(L.setTexture3D(X,0),Wt=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Wt=H.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Wt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Vn=H.getParameter(H.UNPACK_ROW_LENGTH),ve=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gn=H.getParameter(H.UNPACK_SKIP_PIXELS),ts=H.getParameter(H.UNPACK_SKIP_ROWS),cn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ae.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Vt),H.pixelStorei(H.UNPACK_SKIP_ROWS,te),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ee);const Js=w.isDataArrayTexture||w.isData3DTexture,Ce=X.isDataArrayTexture||X.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Rn=zt.get(w),Ks=zt.get(X),un=zt.get(Rn.__renderTarget),hi=zt.get(Ks.__renderTarget);Nt.bindFramebuffer(H.READ_FRAMEBUFFER,un.__webglFramebuffer),Nt.bindFramebuffer(H.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<Bt;ui++)Js&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(w).__webglTexture,q,ee+ui),w.isDepthTexture?(Ce&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.get(X).__webglTexture,q,Ee+ui),H.blitFramebuffer(Vt,te,bt,Lt,Ht,pe,bt,Lt,H.DEPTH_BUFFER_BIT,H.NEAREST)):Ce?H.copyTexSubImage3D(Wt,q,Ht,pe,Ee+ui,Vt,te,bt,Lt):H.copyTexSubImage2D(Wt,q,Ht,pe,Ee+ui,Vt,te,bt,Lt);Nt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ce?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Wt,q,Ht,pe,Ee,bt,Lt,Bt,rn,ge,Ae.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Wt,q,Ht,pe,Ee,bt,Lt,Bt,rn,Ae.data):H.texSubImage3D(Wt,q,Ht,pe,Ee,bt,Lt,Bt,rn,ge,Ae):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,Ht,pe,bt,Lt,rn,ge,Ae.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,Ht,pe,Ae.width,Ae.height,rn,Ae.data):H.texSubImage2D(H.TEXTURE_2D,q,Ht,pe,bt,Lt,rn,ge,Ae);H.pixelStorei(H.UNPACK_ROW_LENGTH,Vn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ve),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gn),H.pixelStorei(H.UNPACK_SKIP_ROWS,ts),H.pixelStorei(H.UNPACK_SKIP_IMAGES,cn),q===0&&X.generateMipmaps&&H.generateMipmap(Wt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(w,X,et=null,nt=null,q=0){return w.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,w=arguments[2],X=arguments[3],q=arguments[4]||0),da('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,et,nt,q)},this.initRenderTarget=function(w){zt.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Nt.unbindTexture()},this.resetState=function(){P=0,T=0,I=null,Nt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}class qs{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new qs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pr extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new O;class Mr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),a=xe(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lr extends ci{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const na=new O,gs=new O,vs=new O,xs=new At,ia=new At,_u=new me,Ka=new O,sa=new O,Za=new O,Kl=new At,ho=new At,Zl=new At;class kc extends Ue{constructor(t=new Lr){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new uv(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Mr(n,3,0,!1)),ms.setAttribute("uv",new Mr(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),_u.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;Qa(Ka.set(-.5,-.5,0),vs,r,gs,s,a),Qa(sa.set(.5,-.5,0),vs,r,gs,s,a),Qa(Za.set(.5,.5,0),vs,r,gs,s,a),Kl.set(0,0),ho.set(1,0),Zl.set(1,1);let o=t.ray.intersectTriangle(Ka,sa,Za,!1,na);if(o===null&&(Qa(sa.set(-.5,.5,0),vs,r,gs,s,a),ho.set(0,1),o=t.ray.intersectTriangle(Ka,Za,sa,!1,na),o===null))return;const c=t.ray.origin.distanceTo(na);c<t.near||c>t.far||e.push({distance:c,point:na.clone(),uv:pn.getInterpolation(na,Ka,sa,Za,Kl,ho,Zl,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qa(i,t,e,n,s,a){xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ia.x=a*xs.x-s*xs.y,ia.y=s*xs.x+a*xs.y):ia.copy(xs),i.copy(t),i.x+=ia.x,i.y+=ia.y,i.applyMatrix4(_u)}class yu extends Ze{constructor(t=null,e=1,n=1,s,a,r,o,c,l=an,u=an,d,h){super(null,r,o,c,l,u,s,a,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql extends Ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _s=new me,th=new me,tr=[],eh=new Zi,dv=new me,aa=new tt,ra=new Ws;class Yi extends tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),eh.copy(t.boundingBox).applyMatrix4(_s),this.boundingBox.union(eh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_s),ra.copy(t.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(ra)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),t.ray.intersectsSphere(ra)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,_s),th.multiplyMatrices(n,_s),aa.matrixWorld=th,aa.raycast(t,tr);for(let r=0,o=tr.length;r<o;r++){const c=tr[r];c.instanceId=a,c.object=this,e.push(c)}tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new yu(new Float32Array(s*this.count),s,this.count,Tr,zn));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*t;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class fv extends ci{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nh=new me,mc=new su,er=new Ws,nr=new O;class pv extends Ue{constructor(t=new qe,e=new fv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=a,t.ray.intersectsSphere(er)===!1)return;nh.copy(s).invert(),mc.copy(t.ray).applyMatrix4(nh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=h,v=f;g<v;g++){const m=l.getX(g);nr.fromBufferAttribute(d,m),ih(nr,m,c,s,t,e,this)}}else{const h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=h,v=f;g<v;g++)nr.fromBufferAttribute(d,g),ih(nr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ih(i,t,e,n,s,a,r){const o=mc.distanceSqToPoint(i);if(o<e){const c=new O;mc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class kn extends Ze{constructor(t,e,n,s,a,r,o,c,l){super(t,e,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(a-1);const u=n[s],h=n[s+1]-u,f=(r-u)/h;return(s+f)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=e||(r.isVector2?new At:new O);return c.copy(o).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,s=[],a=[],r=[],o=new O,c=new me;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new O)}a[0]=new O,r[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ge(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(e===!0){let f=Math.acos(Ge(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(f=-f);for(let g=1;g<=t;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bc extends Bn{constructor(t=0,e=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new At){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mv extends Bc{constructor(t,e,n,s,a,r){super(t,e,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Vc(){let i=0,t=0,e=0,n=0;function s(a,r,o,c){i=a,t=o,e=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,u,d){let h=(r-a)/l-(o-a)/(l+u)+(o-r)/u,f=(o-r)/u-(c-r)/(u+d)+(c-o)/d;h*=u,f*=u,s(r,o,h,f)},calc:function(a){const r=a*a,o=r*a;return i+t*a+e*r+n*o}}}const ir=new O,uo=new Vc,fo=new Vc,po=new Vc;class gv extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){const n=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%a]:(ir.subVectors(s[0],s[1]).add(s[0]),l=ir);const d=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(ir.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),uo.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,v,m),fo.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,v,m),po.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),fo.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),po.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(uo.calc(c),fo.calc(c),po.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sh(i,t,e,n,s){const a=(n-t)*.5,r=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+a+r)*c+(-3*e+3*n-2*a-r)*o+a*i+e}function vv(i,t){const e=1-i;return e*e*t}function xv(i,t){return 2*(1-i)*i*t}function _v(i,t){return i*i*t}function va(i,t,e,n){return vv(i,t)+xv(i,e)+_v(i,n)}function yv(i,t){const e=1-i;return e*e*e*t}function Mv(i,t){const e=1-i;return 3*e*e*i*t}function bv(i,t){return 3*(1-i)*i*i*t}function Sv(i,t){return i*i*i*t}function xa(i,t,e,n,s){return yv(i,t)+Mv(i,e)+bv(i,n)+Sv(i,s)}class Mu extends Bn{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(xa(t,s.x,a.x,r.x,o.x),xa(t,s.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wv extends Bn{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(xa(t,s.x,a.x,r.x,o.x),xa(t,s.y,a.y,r.y,o.y),xa(t,s.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bu extends Bn{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ev extends Bn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Su extends Bn{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(va(t,s.x,a.x,r.x),va(t,s.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tv extends Bn{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(va(t,s.x,a.x,r.x),va(t,s.y,a.y,r.y),va(t,s.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(sh(o,c.x,l.x,u.x,d.x),sh(o,c.y,l.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new At().fromArray(s))}return this}}var ah=Object.freeze({__proto__:null,ArcCurve:mv,CatmullRomCurve3:gv,CubicBezierCurve:Mu,CubicBezierCurve3:wv,EllipseCurve:Bc,LineCurve:bu,LineCurve3:Ev,QuadraticBezierCurve:Su,QuadraticBezierCurve3:Tv,SplineCurve:wu});class Av extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ah[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ah[s.type]().fromJSON(s))}return this}}class Cv extends Av{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bu(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new Su(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,r){const o=new Mu(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,a,r),this}absarc(t,e,n,s,a,r){return this.absellipse(t,e,n,n,s,a,r),this}ellipse(t,e,n,s,a,r,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,a,r,o,c),this}absellipse(t,e,n,s,a,r,o,c){const l=new Bc(t,e,n,s,a,r,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hc extends qe{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ge(s,0,Math.PI*2);const a=[],r=[],o=[],c=[],l=[],u=1/e,d=new O,h=new At,f=new O,g=new O,v=new O;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const M=n+y*u*s,_=Math.sin(M),D=Math.cos(M);for(let P=0;P<=t.length-1;P++){d.x=t[P].x*_,d.y=t[P].y,d.z=t[P].x*D,r.push(d.x,d.y,d.z),h.x=y/e,h.y=P/(t.length-1),o.push(h.x,h.y);const T=c[3*P+0]*_,I=c[3*P+1],S=c[3*P+0]*D;l.push(T,I,S)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const _=M+y*t.length,D=_,P=_+t.length,T=_+t.length+1,I=_+1;a.push(D,P,I),a.push(T,I,P)}this.setIndex(a),this.setAttribute("position",new be(r,3)),this.setAttribute("uv",new be(o,2)),this.setAttribute("normal",new be(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.points,t.segments,t.phiStart,t.phiLength)}}class on extends Hc{constructor(t=1,e=1,n=4,s=8){const a=new Cv;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new on(t.radius,t.length,t.capSegments,t.radialSegments)}}class An extends qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const a=[],r=[],o=[],c=[],l=new O,u=new At;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(r[h]/t+1)/2,u.y=(r[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yt extends qe{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const u=[],d=[],h=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(f,2));function y(){const _=new O,D=new O;let P=0;const T=(e-t)/n;for(let I=0;I<=a;I++){const S=[],x=I/a,N=x*(e-t)+t;for(let B=0;B<=s;B++){const V=B/s,W=V*c+o,Q=Math.sin(W),G=Math.cos(W);D.x=N*Q,D.y=-x*n+m,D.z=N*G,d.push(D.x,D.y,D.z),_.set(Q,T,G).normalize(),h.push(_.x,_.y,_.z),f.push(V,1-x),S.push(g++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<a;S++){const x=v[S][I],N=v[S+1][I],B=v[S+1][I+1],V=v[S][I+1];(t>0||S!==0)&&(u.push(x,N,V),P+=3),(e>0||S!==a-1)&&(u.push(N,B,V),P+=3)}l.addGroup(p,P,0),p+=P}function M(_){const D=g,P=new At,T=new O;let I=0;const S=_===!0?t:e,x=_===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*x,0),h.push(0,x,0),f.push(.5,.5),g++;const N=g;for(let B=0;B<=s;B++){const W=B/s*c+o,Q=Math.cos(W),G=Math.sin(W);T.x=S*G,T.y=m*x,T.z=S*Q,d.push(T.x,T.y,T.z),h.push(0,x,0),P.x=Q*.5+.5,P.y=G*.5*x+.5,f.push(P.x,P.y),g++}for(let B=0;B<s;B++){const V=D+B,W=N+B;_===!0?u.push(W,W+1,V):u.push(W+1,W,V),I+=3}l.addGroup(p,I,_===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cn extends Yt{constructor(t=1,e=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Cn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dr extends qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],r=[];o(s),l(n),u(),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(a.slice(),3)),this.setAttribute("uv",new be(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new O,_=new O,D=new O;for(let P=0;P<e.length;P+=3)f(e[P+0],M),f(e[P+1],_),f(e[P+2],D),c(M,_,D,y)}function c(y,M,_,D){const P=D+1,T=[];for(let I=0;I<=P;I++){T[I]=[];const S=y.clone().lerp(_,I/P),x=M.clone().lerp(_,I/P),N=P-I;for(let B=0;B<=N;B++)B===0&&I===P?T[I][B]=S:T[I][B]=S.clone().lerp(x,B/N)}for(let I=0;I<P;I++)for(let S=0;S<2*(P-I)-1;S++){const x=Math.floor(S/2);S%2===0?(h(T[I][x+1]),h(T[I+1][x]),h(T[I][x])):(h(T[I][x+1]),h(T[I+1][x+1]),h(T[I+1][x]))}}function l(y){const M=new O;for(let _=0;_<a.length;_+=3)M.x=a[_+0],M.y=a[_+1],M.z=a[_+2],M.normalize().multiplyScalar(y),a[_+0]=M.x,a[_+1]=M.y,a[_+2]=M.z}function u(){const y=new O;for(let M=0;M<a.length;M+=3){y.x=a[M+0],y.y=a[M+1],y.z=a[M+2];const _=m(y)/2/Math.PI+.5,D=p(y)/Math.PI+.5;r.push(_,1-D)}g(),d()}function d(){for(let y=0;y<r.length;y+=6){const M=r[y+0],_=r[y+2],D=r[y+4],P=Math.max(M,_,D),T=Math.min(M,_,D);P>.9&&T<.1&&(M<.2&&(r[y+0]+=1),_<.2&&(r[y+2]+=1),D<.2&&(r[y+4]+=1))}}function h(y){a.push(y.x,y.y,y.z)}function f(y,M){const _=y*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const y=new O,M=new O,_=new O,D=new O,P=new At,T=new At,I=new At;for(let S=0,x=0;S<a.length;S+=9,x+=6){y.set(a[S+0],a[S+1],a[S+2]),M.set(a[S+3],a[S+4],a[S+5]),_.set(a[S+6],a[S+7],a[S+8]),P.set(r[x+0],r[x+1]),T.set(r[x+2],r[x+3]),I.set(r[x+4],r[x+5]),D.copy(y).add(M).add(_).divideScalar(3);const N=m(D);v(P,x+0,y,N),v(T,x+2,M,N),v(I,x+4,_,N)}}function v(y,M,_,D){D<0&&y.x===1&&(r[M]=y.x-1),_.x===0&&_.z===0&&(r[M]=D/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.vertices,t.indices,t.radius,t.details)}}class Ir extends Dr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ir(t.radius,t.detail)}}class Gc extends Dr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gc(t.radius,t.detail)}}class oi extends qe{constructor(t=.5,e=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,f=new O,g=new At;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=a+m/n*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const y=p+m,M=y,_=y+n+1,D=y+n+2,P=y+1;o.push(M,_,P),o.push(_,D,P)}}this.setIndex(o),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class oe extends qe{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const u=[],d=new O,h=new O,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let _=0;p===0&&r===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let D=0;D<=e;D++){const P=D/e;d.x=-t*Math.cos(s+P*a)*Math.sin(r+M*o),d.y=t*Math.cos(r+M*o),d.z=t*Math.sin(s+P*a)*Math.sin(r+M*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(P+_,1-M),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=u[p][y+1],_=u[p][y],D=u[p+1][y],P=u[p+1][y+1];(p!==0||r>0)&&f.push(M,_,P),(p!==n-1||c<Math.PI)&&f.push(_,D,P)}this.setIndex(f),this.setAttribute("position",new be(g,3)),this.setAttribute("normal",new be(v,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class We extends qe{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],c=[],l=[],u=new O,d=new O,h=new O;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*a,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;r.push(v,m,y),r.push(m,p,y)}this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Rv extends ci{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ar,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Di extends ci{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Zt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ar,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class xi extends ci{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ar,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ur extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Wc extends Ur{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const mo=new me,rh=new O,oh=new O;class Eu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fc,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ch=new me,oa=new O,go=new O;class Pv extends Eu{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),oa.setFromMatrixPosition(t.matrixWorld),n.position.copy(oa),go.copy(n.position),go.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(go),n.updateMatrixWorld(),s.makeTranslation(-oa.x,-oa.y,-oa.z),ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch)}}class lh extends Ur{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Lv extends Eu{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ks extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Lv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dv extends Ur{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);class Iv{constructor(t){this.canvas=t,this.renderer=new hv({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.current=null,this.t=0,this.last=performance.now(),this.running=!0,addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{this.last=performance.now()}),this.resize(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}resize(){const t=innerWidth,e=innerHeight;if(this.renderer.setSize(t,e,!1),this.current){const n=this.current.camera;n&&n.isPerspectiveCamera&&(n.aspect=t/e,n.updateProjectionMatrix()),this.current.resize&&this.current.resize(t,e)}}setScene(t){this.current&&this.current.dispose&&this.current.dispose(),this.current=null,this.current=t(),this.resize()}loop(t){requestAnimationFrame(this.loop);const e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.t+=e;const n=this.current;n&&(n.update(e,this.t),this.renderer.render(n.scene,n.camera))}}const Uv="https://juanbracco2001-eng.github.io/Cachetazo/",Tu="potrero-perfil-v1",Ie=[{id:"albiceleste",name:"Albiceleste",pattern:"stripes10",c1:"#75aadb",c2:"#f7f7f4",sleeve:"#75aadb",rarity:"comun",unlock:{type:"start"}},{id:"rojo",name:"Rojo liso",pattern:"solid",c1:"#c9382f",c2:"#f7f7f4",sleeve:"#c9382f",rarity:"comun",unlock:{type:"start"}},{id:"azul-franja",name:"Azul con franja",pattern:"band",c1:"#1b3a8c",c2:"#f2c21b",sleeve:"#1b3a8c",rarity:"comun",unlock:{type:"start"}},{id:"banda-roja",name:"Banda roja",pattern:"sash",c1:"#f7f7f4",c2:"#c9382f",sleeve:"#f7f7f4",rarity:"rara",unlock:{type:"level",level:2}},{id:"rojiblanca",name:"Rojiblanca",pattern:"stripes10",c1:"#c9382f",c2:"#f7f7f4",sleeve:"#c9382f",rarity:"rara",unlock:{type:"level",level:3}},{id:"rojinegra",name:"Rojinegra",pattern:"stripes6",c1:"#c9382f",c2:"#15161a",sleeve:"#15161a",rarity:"comun",unlock:{type:"chest"}},{id:"azulgrana",name:"Azulgrana",pattern:"stripes6",c1:"#1d3f8f",c2:"#8c1d2f",sleeve:"#8c1d2f",rarity:"rara",unlock:{type:"chest"}},{id:"granate",name:"Granate",pattern:"solid",c1:"#7a1a2b",c2:"#f7f7f4",sleeve:"#7a1a2b",rarity:"comun",unlock:{type:"chest"}},{id:"verdiblanca",name:"Verdiblanca",pattern:"stripes10",c1:"#2f8f5b",c2:"#f7f7f4",sleeve:"#2f8f5b",rarity:"rara",unlock:{type:"chest"}},{id:"blanquinegra",name:"Blanquinegra",pattern:"stripes10",c1:"#f7f7f4",c2:"#15161a",sleeve:"#15161a",rarity:"rara",unlock:{type:"chest"}},{id:"celeste-liso",name:"Celeste liso",pattern:"solid",c1:"#8ec5f0",c2:"#f7f7f4",sleeve:"#8ec5f0",rarity:"comun",unlock:{type:"chest"}},{id:"azul-amarilla",name:"Azul y amarilla",pattern:"stripes6",c1:"#1b3a8c",c2:"#f2c21b",sleeve:"#f2c21b",rarity:"epica",unlock:{type:"tournament",wins:1}},{id:"retro-aros",name:"Retro de aros",pattern:"hoops",c1:"#c9382f",c2:"#f7f7f4",sleeve:"#c9382f",rarity:"epica",unlock:{type:"level",level:8}},{id:"dorada",name:"Dorada",pattern:"solid",c1:"#e0a912",c2:"#f7f7f4",sleeve:"#e0a912",rarity:"legendaria",unlock:{type:"tournament",wins:3}},{id:"suplente",name:"Suplente negra",pattern:"band",c1:"#15161a",c2:"#75aadb",sleeve:"#15161a",rarity:"legendaria",unlock:{type:"level",level:10}}],ba={comun:{name:"Común",weight:6,color:"#9fb0cc"},rara:{name:"Rara",weight:3,color:"#75aadb"},epica:{name:"Épica",weight:1.2,color:"#b57cf0"},legendaria:{name:"Legendaria",weight:.4,color:"#f6b40e"}},Au=i=>Math.max(0,Ie.findIndex(t=>t.id===i)),Nv=Ie.filter(i=>i.unlock.type==="start").map(i=>i.id);function br(i){const t=i.unlock;return t.type==="start"?"La tenés desde el inicio":t.type==="level"?`Nivel ${t.level}`:t.type==="tournament"?t.wins===1?"Ganá 1 torneo":`Ganá ${t.wins} torneos`:"Sale de los cofres"}const Qi=[{key:"sk",title:"Piel",color:!0,items:["#f1c7a5","#e3b48f","#d39b74","#b97a50","#8a5a3c","#5e3b26"]},{key:"hs",title:"Pelo",items:[["buzz","Corto"],["bald","Pelado"],["fade","Degradé"],["swept","Peinado"],["long","Largo"],["dreads","Rastas"],["bob","Melena"],["slick","Engominado"],["curly","Rulos"],["bun","Rodete"]]},{key:"hc",title:"Color de pelo",color:!0,items:["#110c0b","#3a2418","#7a4a22","#b5541c","#d9b25c","#d9d3c9","#2f5fd0","#d0306a"]},{key:"bd",title:"Barba",items:[["none","Sin barba"],["full","Completa"],["trim","Candado"],["mustache","Bigote"],["fumanchu","Bigote largo"],["goatee","Chivita"]]},{key:"of",title:"Ropa",items:[["tee","Remera"],["kit","Casaca"],["poncho","Poncho"],["jacket","Campera"],["apron","Delantal"]]},{key:"kt",title:"Casaca",kit:!0,items:Ie.map(i=>[i.id,i.name])},{key:"sh",title:"Color de ropa",color:!0,items:["#e8e4da","#1c2a4a","#c9382f","#2f8f5b","#e6a817","#6a3fa0","#2a2a30","#e07b39"]},{key:"ht",title:"En la cabeza",items:[["","Nada"],["beret","Boina"],["cap","Gorra"],["beanie","Gorro"],["hincha","Gorro de hincha"],["chullo","Chullo"],["gaucho","Sombrero"],["vincha","Vincha"]]},{key:"sf",title:"Bufanda",items:[["","Sin bufanda"],["scarf","Bufanda de hincha"]]},{key:"pr",title:"En la mano",items:[["","Nada"],["pizza","Pizza"],["beer","Cerveza",!0],["fernet","Fernet",!0],["mate","Mate"],["choripan","Choripán"],["vuvu","Bubusela"],["flag","Bandera"],["faso","Faso",!0]]},{key:"ex",title:"Cara",items:[["calm","Tranqui"],["shout","Gritando el gol"],["cry","Llorando de emoción"],["sing","Cantando"]]}],Xc={sk:2,hs:3,hc:1,bd:0,of:1,kt:0,sh:0,ht:0,sf:0,pr:0,ex:1},Cu=i=>Array.isArray(i)?i[0]:i,hh=(i,t)=>{const e=Qi.find(s=>s.key===i),n=e&&e.items[t];return Array.isArray(n)?n[1]:n},Pn=(i,t)=>{const e=Qi.find(n=>n.key===i);return e?Cu(e.items[t]):void 0};function Ai(i,t){const e=Qi.find(s=>s.key===i),n=e?e.items.findIndex(s=>Cu(s)===t):-1;return n<0?Xc[i]:n}const gc=(i,t)=>{const e=Qi.find(s=>s.key===i),n=e&&e.items[t];return Array.isArray(n)&&n[2]===!0};function Ru(i){const t={};for(const e of Qi){const n=Math.floor(Number(i&&i[e.key]));t[e.key]=Number.isFinite(n)&&n>=0&&n<e.items.length?n:Xc[e.key]}return t}function zv(i,t=!0){const e={};for(const n of Qi){let s=n.items.map((a,r)=>r);n.key==="kt"&&i&&i.length&&(s=i),t||(s=s.filter(a=>!gc(n.key,a))),e[n.key]=s[Math.floor(Math.random()*s.length)]}return e}const Yn=i=>{const t={};for(const e in i)t[e]=Ai(e,i[e]);return t},qc=[{id:"jujeno",name:"El Jujeño",region:"Jujuy · NOA",tag:"Baja de la quebrada con la bubusela y el aguante de siempre.",look:Yn({sk:"#8a5a3c",hs:"bob",hc:"#110c0b",bd:"none",of:"kit",kt:"albiceleste",ht:"chullo",sf:"scarf",pr:"vuvu",ex:"shout"})},{id:"cordobesa",name:"La Cordobesa",region:"Córdoba",tag:"Fernet, cuarteto y cantar los noventa minutos.",look:Yn({sk:"#e3b48f",hs:"long",hc:"#3a2418",bd:"none",of:"kit",kt:"azul-franja",ht:"vincha",sh:"#c9382f",sf:"",pr:"fernet",ex:"sing"})},{id:"correntino",name:"El Correntino",region:"Corrientes · Litoral",tag:"Mate en mano y chamamé en la tribuna.",look:Yn({sk:"#b97a50",hs:"slick",hc:"#110c0b",bd:"fumanchu",of:"kit",kt:"rojo",ht:"gaucho",sh:"#3a2418",sf:"",pr:"mate",ex:"sing"})},{id:"rosarina",name:"La Rosarina",region:"Rosario · Santa Fe",tag:"Llora, grita y abraza a medio estadio, rival incluido.",look:Yn({sk:"#d39b74",hs:"bun",hc:"#b5541c",bd:"none",of:"kit",kt:"rojo",ht:"",sf:"scarf",pr:"choripan",ex:"cry"})},{id:"cacho",name:"Cacho",region:"Conurbano · Buenos Aires",tag:"Birra, bombo y aguante desde la popular.",look:Yn({sk:"#d39b74",hs:"buzz",hc:"#3a2418",bd:"goatee",of:"kit",kt:"albiceleste",ht:"cap",sf:"",pr:"beer",ex:"shout"})},{id:"oso",name:"Oso",region:"Chubut · Patagonia",tag:"Con el viento de frente y la campera puesta: no hay clima que lo calle.",look:Yn({sk:"#f1c7a5",hs:"long",hc:"#7a4a22",bd:"full",of:"jacket",sh:"#2f8f5b",ht:"beanie",sf:"scarf",pr:"mate",ex:"shout"})},{id:"tano",name:"El Tano",region:"Buenos Aires · herencia italiana",tag:"Pizza en una mano, el puño en la otra.",look:Yn({sk:"#e3b48f",hs:"slick",hc:"#d9d3c9",bd:"mustache",of:"kit",kt:"azul-franja",ht:"beret",sf:"",pr:"pizza",ex:"shout"})},{id:"mendocina",name:"La Mendocina",region:"Mendoza · Cuyo",tag:"Bandera arriba hasta que se canse el brazo.",look:Yn({sk:"#b97a50",hs:"curly",hc:"#110c0b",bd:"none",of:"kit",kt:"rojo",ht:"hincha",sf:"scarf",pr:"flag",ex:"shout"})},{id:"tucumano",name:"El Tucumano",region:"Tucumán · NOA",tag:"Nervioso, apasionado y con el fasito en la boca hasta en los penales.",look:Yn({sk:"#d39b74",hs:"curly",hc:"#110c0b",bd:"trim",of:"kit",kt:"albiceleste",ht:"cap",sf:"",pr:"faso",ex:"cry"})}],vc=100,uh=40,dh=60,ys=(i,t,e)=>{const n=Math.floor(Number(i));return Number.isFinite(n)&&n>=0?Math.min(n,e):t},Pu=i=>Math.floor(i/vc)+1,xc=i=>typeof i=="string"?i.replace(/[\u0000-\u001f​-‏‪-‮]/g,"").trim().slice(0,14):"",fh=()=>{const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`};function Sa(i){const t=i&&typeof i=="object"?i:{},e=new Set(Ie.map(r=>r.id)),n=[...new Set([...Nv,...(Array.isArray(t.kits)?t.kits:[]).filter(r=>e.has(r))])],s=Ru(t.look||Xc);n.includes(Ie[s.kt].id)||(s.kt=Au("albiceleste"));const a=ys(t.xp,0,1e9);return{v:2,name:xc(t.name),created:t.created===!0,look:s,hincha:qc.some(r=>r.id===t.hincha)?t.hincha:"",coins:ys(t.coins,0,1e9),xp:a,kits:n,chests:ys(t.chests,0,9999),wins:ys(t.wins,0,1e6),rewardedLevel:Math.max(1,ys(t.rewardedLevel,1,9999)),lastDaily:typeof t.lastDaily=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(t.lastDaily)?t.lastDaily:"",adultProps:t.adultProps!==!1,updatedAt:ys(t.updatedAt,0,1e15)}}let sn=Sa(null),Lu="local";const _c=new Set,Fv=()=>_c.forEach(i=>{try{i(sn,Lu)}catch(t){console.error(t)}});function Ov(){try{localStorage.setItem(Tu,JSON.stringify(sn))}catch{}}function kv(){try{return Sa(JSON.parse(localStorage.getItem(Tu)||"null"))}catch{return Sa(null)}}function Ms(i){const t=Sa(sn),e=i(t)||{};return sn=Sa(Object.assign(t,{updatedAt:Date.now()})),Ov(),Fv(),e}function vo(i){const t=[];for(const e of Ie){if(i.kits.includes(e.id))continue;const n=e.unlock;(n.type==="level"&&i.rewardedLevel>=n.level||n.type==="tournament"&&i.wins>=n.wins)&&(i.kits.push(e.id),t.push(e))}return t}function ph(i){const t=Pu(i.xp),e=Math.max(0,t-i.rewardedLevel);return e&&(i.chests+=e,i.rewardedLevel=t),e?t:0}const he={get profile(){return sn},get status(){return Lu},get level(){return Pu(sn.xp)},get levelProgress(){return sn.xp%vc/vc},hasCharacter:()=>sn.created,owns:i=>sn.kits.includes(i),on(i){return _c.add(i),()=>_c.delete(i)},async syncNow(){},async load(){return sn=kv(),this.syncNow(),sn},update(i){Ms(t=>{Object.assign(t,i)})},addXp(i){return Ms(t=>{const e=t.chests;t.xp+=i;const n=ph(t),s=vo(t);return{level:n,chests:t.chests-e,kits:s}})},recordTournamentWin(){return Ms(i=>(i.wins+=1,i.chests+=1,{level:0,chests:1,kits:vo(i)}))},canClaimDaily(){return sn.created&&sn.lastDaily!==fh()},claimDaily(){return this.canClaimDaily()?Ms(i=>(i.lastDaily=fh(),i.xp+=uh,i.chests+=1,{level:ph(i),chests:1,xp:uh,kits:vo(i)})):null},openChest(){return sn.chests<1?null:Ms(i=>{i.chests-=1;const t=Ie.filter(a=>a.unlock.type==="chest"&&!i.kits.includes(a.id));if(!t.length)return i.coins+=dh,{type:"coins",amount:dh};const e=t.reduce((a,r)=>a+ba[r.rarity].weight,0);let n=Math.random()*e,s=t[t.length-1];for(const a of t)if(n-=ba[a.rarity].weight,n<=0){s=a;break}return i.kits.push(s.id),{type:"kit",kit:s}})},equipKit(i){return sn.kits.includes(i)?(Ms(t=>{t.look=Object.assign({},t.look,{kt:Au(i),of:Ai("of","kit")})}),!0):!1}},Bv="#1c2230",ca="#efece4",le=Math.PI,Ji=new yu(Uint8Array.from([70,140,210,255]),4,1,Tr);Ji.minFilter=Ji.magFilter=an;Ji.generateMipmaps=!1;Ji.needsUpdate=!0;const Vv=new Kt({color:856347,side:Xe}),mh=new Map;function wt(i,t){const e=i+(t||"");let n=mh.get(e);return n||(n=new Di({color:i,gradientMap:Ji,side:t||On}),mh.set(e,n)),n}const _i=(i,t)=>new Kt({color:i,transparent:t!=null,opacity:t??1}),gh=new Map;function vh(i,t){const e=i.pattern+i.c1+i.c2+(t||"");let n=gh.get(e);if(n)return n;const s=document.createElement("canvas");s.width=64,s.height=32;const a=s.getContext("2d");if(a.fillStyle=i.c1,a.fillRect(0,0,64,32),a.fillStyle=i.c2,i.pattern==="stripes10"||i.pattern==="stripes6"){const o=i.pattern==="stripes10"?10:6,c=64/o;for(let l=1;l<o;l+=2)a.fillRect(l*c,0,c,32)}else if(i.pattern==="hoops")for(let o=1;o<8;o+=2)a.fillRect(0,o*4,64,4);else i.pattern==="band"&&a.fillRect(0,11,64,9);const r=new kn(s);return r.colorSpace=Fe,r.magFilter=r.minFilter=an,r.generateMipmaps=!1,r.wrapS=Pi,n=new Di({map:r,gradientMap:Ji,side:t||On}),gh.set(e,n),n}let sr=null;function Hv(){if(sr)return sr;const i=document.createElement("canvas");i.width=90,i.height=56;const t=i.getContext("2d");t.fillStyle="#75aadb",t.fillRect(0,0,90,56),t.fillStyle="#ffffff",t.fillRect(0,19,90,18),t.fillStyle="#f6b40e",t.beginPath(),t.arc(45,28,7,0,le*2),t.fill();const e=new kn(i);return e.colorSpace=Fe,sr=new Di({map:e,gradientMap:Ji,side:we}),sr}function jn(i,t,e,n=1.07){const s=new tt(i,t);if(e){const a=new tt(i,Vv);a.scale.setScalar(n),s.add(a)}return s}const xh={pizza:-1.3,beer:-2.5,fernet:-2.3,mate:-1.25,choripan:-1.3,vuvu:-2.4,flag:-2.7},_h=-2.7;function Bs(i){const t=Ru(i),e=Pn("sk",t.sk),n=Pn("hc",t.hc),s=Pn("sh",t.sh),a=Pn("hs",t.hs),r=Pn("bd",t.bd),o=Pn("of",t.of),c=Pn("ht",t.ht),l=Pn("sf",t.sf),u=Pn("pr",t.pr),d=Pn("ex",t.ex),h=Ie[t.kt]||Ie[0],f=[],g=Z=>(f.push(Z),Z),v=new _e,m=new _e;v.add(m);const p=.55,y=[-1,1].map(Z=>{const C=new _e;C.position.set(Z*.14,p,0);const k=jn(g(new on(.11,.3,4,10)),wt(Bv),!0);k.position.y=-.2;const K=jn(g(new oe(.14,12,10)),wt(ca),!0);return K.scale.set(1,.7,1.35),K.position.set(0,-.43,.05),C.add(k,K),m.add(C),C}),M=o==="kit"?vh(h):wt(o==="jacket"||o==="tee"?s:ca),_=jn(g(new on(.25,.15,6,14)),M,!0);if(_.position.y=.93,m.add(_),o==="kit"&&h.pattern==="sash"){const Z=new tt(g(new qt(.14,.46,.54)),wt(h.c2));Z.position.y=.95,Z.rotation.z=.6,m.add(Z)}if(o==="apron"){const Z=jn(g(new qt(.38,.52,.05)),wt(s),!1);Z.position.set(0,.86,.245),m.add(Z)}if(o==="poncho"){const Z=new tt(g(new Yt(.3,.6,.6,18,1,!0)),wt(s,we));Z.position.y=1;const C=new tt(g(new We(.6,.03,6,28)),wt(ca));C.rotation.x=le/2,C.position.y=.72;const k=new tt(g(new We(.5,.025,6,28)),wt("#c9382f"));k.rotation.x=le/2,k.position.y=.82,m.add(Z,C,k)}if(l==="scarf"){const Z=new tt(g(new We(.215,.065,8,22)),wt(h.c1));Z.rotation.x=le/2,Z.position.y=1.19;const C=new tt(g(new We(.205,.045,8,22)),wt(h.c2));C.rotation.x=le/2,C.position.y=1.25;const k=new tt(g(new qt(.11,.38,.04)),wt(h.c1));k.position.set(-.1,.98,.265),k.rotation.z=.08;const K=new tt(g(new qt(.115,.07,.045)),wt(h.c2));K.position.set(-.1,.9,.268),K.rotation.z=.08,m.add(Z,C,k,K)}const D=o==="jacket",P=o==="kit"?h.sleeve:s,T=[d==="shout"?_h:0,u&&xh[u]!==void 0?xh[u]:d==="shout"?_h:0],I=[-1,1].map(Z=>{const C=new _e;C.position.set(Z*.33,1.14,0);const k=jn(g(new on(.085,.26,4,8)),wt(D?s:e),!0);if(k.position.y=-.2,C.add(k),!D&&o!=="poncho"&&o!=="apron"){const at=jn(g(new on(.1,.08,4,8)),wt(P),!0,1.05);at.position.y=-.1,C.add(at)}const K=jn(g(new oe(.095,10,8)),wt(e),!0);return K.position.y=-.46,C.add(K),m.add(C),C});let S=null;if(u&&u!=="faso"){const Z=new _e;Z.position.set(0,-.46,0),Z.rotation.x=-T[1];const C=(k,K,at,yt,vt,Tt)=>{const $t=new tt(g(k),typeof K=="string"?wt(K):K);return $t.position.set(at,yt,vt),Tt&&$t.rotation.set(Tt[0]||0,Tt[1]||0,Tt[2]||0),Z.add($t),$t};switch(u){case"pizza":{const k=C(new Yt(.26,.26,.04,3),"#f2c21b",0,.16,.1,[-1.05,0,0]);k.rotation.y=le/2;for(const[K,at,yt]of[[-.07,.2,.17],[.07,.17,.12],[0,.26,.21]])C(new Yt(.04,.04,.02,10),"#b3261e",K,at,yt,[-1.05,0,0]);break}case"beer":{C(new Yt(.085,.07,.24,14),"#e3a21a",0,.12,0),C(new Yt(.09,.087,.06,14),"#ffffff",0,.27,0),C(new We(.06,.014,6,12),"#cfd6e2",.1,.12,0,[0,le/2,0]);break}case"fernet":{C(new Yt(.07,.075,.26,12),"#2b1a12",0,.13,0),C(new Yt(.032,.05,.12,10),"#2b1a12",0,.32,0),C(new Yt(.036,.036,.03,10),"#c9382f",0,.4,0),C(new qt(.1,.1,.02),"#c9382f",0,.12,.072);break}case"mate":{const k=C(new oe(.085,12,10),"#6b4a2f",0,.09,0);k.scale.y=1.15,C(new Yt(.055,.055,.015,12),"#5a7a2a",0,.185,0),C(new Yt(.008,.008,.22,6),"#cfd6e2",.02,.28,0,[0,0,-.25]);break}case"choripan":{C(new on(.06,.2,4,8),"#d9a85a",0,.09,0,[0,0,le/2]),C(new on(.04,.27,4,8),"#a8412a",0,.12,0,[0,0,le/2]);break}case"vuvu":{C(new Yt(.02,.02,.06,8),"#f4f1ea",0,.03,0),C(new Yt(.14,.03,.8,14,1,!0),wt(h.c1,we),0,.46,0),C(new We(.14,.02,6,16),wt(h.c2),0,.86,0,[le/2,0,0]);break}case"flag":{C(new Yt(.018,.018,1.15,6),"#d8d2c4",0,.5,0);const k=C(new qt(.66,.42,.012),Hv(),.34,.95,0);k.userData.wave=!0;break}}I[1].add(Z),S=Z}const x=new _e;x.position.y=1.66,m.add(x),x.add(jn(g(new oe(.42,26,20)),wt(e),!0,1.05));const N={calm:.05,shout:.5,cry:-.45,sing:-.12}[d],B=d==="shout"?.15:.17;for(const Z of[-1,1]){const C=jn(g(new oe(.075,10,8)),wt(e),!0);C.position.set(Z*.41,-.02,0),x.add(C);const k=new tt(g(new oe(.1,14,12)),wt("#ffffff"));k.scale.set(1,d==="shout"?1.1:1.25,.5),k.position.set(Z*.15,.02,.375);const K=new tt(g(new oe(.062,12,10)),wt("#1a1420"));K.scale.set(1,1.2,.5),K.position.set(Z*.15,.015,.405);const at=new tt(g(new oe(.02,8,6)),_i(16777215));at.position.set(Z*.15+.022,.05,.43);const yt=new tt(g(new qt(.16,.03,.03)),wt(n));if(yt.position.set(Z*.15,B,.378),yt.rotation.z=Z*N,x.add(k,K,at,yt),d==="shout"||d==="cry"){const vt=new tt(g(new An(.065,14)),_i(14704730,.4)),Tt=new O(Z*.24,-.08,.33).normalize().multiplyScalar(.425);vt.position.copy(Tt),vt.quaternion.setFromUnitVectors(new O(0,0,1),Tt.clone().normalize()),x.add(vt)}if(d==="cry"){const vt=new tt(g(new on(.02,.13,3,6)),_i(8376575,.9));vt.position.set(Z*.19,-.1,.385),x.add(vt)}}const V=new tt(g(new oe(.035,8,6)),wt(e));V.position.set(0,-.06,.415),x.add(V);const W=r==="full"?.43:.395;if(d==="calm"){const Z=new tt(g(new We(.055,.012,6,14,le)),_i(8005168));Z.rotation.z=le,Z.position.set(0,-.14,W),x.add(Z)}else{const Z=d==="sing"?.6:d==="cry"?1.25:1.1,C=d==="sing"?1.2:d==="cry"?.85:1,k=new tt(g(new oe(.085,14,10)),_i(4853532));k.scale.set(Z,C,.4),k.position.set(0,-.15,W-.005);const K=new tt(g(new oe(.05,10,8)),_i(14243434));if(K.scale.set(Z*.9,.55,.4),K.position.set(0,-.19-(C-1)*.02,W+.004),x.add(k,K),d!=="sing"){const at=new tt(g(new qt(.1*Z,.022,.02)),_i(16777215));at.position.set(0,-.1,W+.008),x.add(at)}}if(u==="faso"){const Z=new _e;Z.position.set(.09,-.155,W+.01);const C=new tt(g(new Yt(.017,.017,.15,6)),wt("#f4f1ea"));C.rotation.x=le/2,C.position.z=.06;const k=new tt(g(new oe(.022,6,5)),_i(14710058));k.position.z=.14,Z.add(C,k),Z.rotation.y=.35,x.add(Z)}const Q=wt(n,we),G=(Z=.445,C=-.32,k=.02)=>{const K=new tt(g(new oe(Z,24,14,0,le*2,0,le/2)),Q);return K.rotation.x=C,K.position.y=k,K.userData.top=!0,K},rt=(Z,C,k,K=le*.4,at=le*1.2)=>{const yt=new tt(g(new Yt(C,C*.9,Z,18,1,!0,K,at)),Q);return yt.position.set(0,k,0),yt},Y=(Z,C,k,K,at,yt,vt=0,Tt=0)=>{const $t=new tt(g(new qt(Z,C,k)),Q);return $t.position.set(K,at,yt),$t.rotation.set(Tt,0,vt),$t.userData.top=!0,$t};switch(a){case"buzz":x.add(G(.43));break;case"fade":x.add(G(.43,-.4),Y(.36,.1,.4,0,.42,.02));break;case"swept":x.add(G(),Y(.5,.13,.3,.05,.4,.17,-.18,.25));break;case"long":x.add(G(),rt(.8,.45,-.28));break;case"bob":x.add(G(),rt(.46,.47,-.07),Y(.5,.12,.2,0,.38,.25,0,.3));break;case"slick":x.add(G(.435,-.5),Y(.3,.08,.4,0,.44,-.06));break;case"bun":{x.add(G());const Z=new tt(g(new oe(.16,12,10)),wt(n));Z.position.set(0,.5,-.14),Z.userData.top=!0,x.add(Z);break}case"dreads":{x.add(G());for(let Z=0;Z<9;Z++){const C=le*.35+Z/8*le*1.3,k=new tt(g(new on(.045,.5,3,6)),wt(n));k.position.set(Math.sin(C)*.42,-.22,Math.cos(C)*.42),k.rotation.set(Math.cos(C)*.12,0,-Math.sin(C)*.12),x.add(k)}break}case"curly":{for(let C=0;C<22;C++){const k=.3+C/22*.7,K=C*2.4,at=Math.sqrt(1-k*k)*.43,yt=Math.cos(K)*at,vt=Math.sin(K)*at;if(yt>.2&&k<.55)continue;const Tt=new tt(g(new oe(.14,10,8)),wt(n));Tt.position.set(vt,k*.43,yt),k*.43>.12&&(Tt.userData.top=!0),x.add(Tt)}break}}["beanie","hincha","chullo","gaucho","cap","beret"].includes(c)&&x.children.filter(Z=>Z.userData.top).forEach(Z=>x.remove(Z));const ct=wt(n),xt=(Z=.17)=>{const C=new tt(g(new on(.03,Z,4,8)),ct);return C.rotation.z=le/2,C.position.set(0,-.105,.405),C};switch(r){case"full":{const Z=new tt(g(new oe(.44,22,12,0,le,le*.62,le*.38)),wt(n,we));x.add(Z);break}case"trim":{const Z=new tt(g(new oe(.07,10,8)),ct);Z.scale.set(1,1.4,.8),Z.position.set(0,-.31,.35),x.add(xt(),Z);break}case"mustache":x.add(xt());break;case"fumanchu":{x.add(xt(.2));for(const Z of[-1,1]){const C=new tt(g(new on(.026,.34,4,8)),ct);C.position.set(Z*.115,-.32,.385),C.rotation.z=Z*.08,x.add(C)}break}case"goatee":{const Z=new tt(g(new oe(.07,10,8)),ct);Z.scale.set(1,1.5,.8),Z.position.set(0,-.31,.35),x.add(Z);break}}const Mt=wt(s,we),Ut={pattern:"stripes10",c1:h.c1,c2:h.c2};if(c==="beret"){const Z=new tt(g(new oe(.4,18,12)),Mt);Z.scale.set(1.02,.34,1.02),Z.position.set(.03,.4,0),Z.rotation.z=-.18;const C=new tt(g(new Yt(.02,.02,.06,6)),Mt);C.position.set(.03,.55,0),x.add(Z,C)}else if(c==="cap"){const Z=new tt(g(new oe(.46,20,12,0,le*2,0,le/2)),Mt);Z.rotation.x=-.45,Z.position.y=.06;const C=new tt(g(new qt(.46,.04,.32)),wt(h.c1));C.position.set(0,.27,.5),C.rotation.x=.1,x.add(Z,C)}else if(c==="beanie"){const Z=new tt(g(new oe(.47,20,12,0,le*2,0,le*.42)),Mt);Z.position.y=.04;const C=new tt(g(new We(.435,.05,8,24)),wt(ca));C.rotation.x=le/2,C.position.y=.2;const k=new tt(g(new oe(.09,10,8)),wt(ca));k.position.y=.55,x.add(Z,C,k)}else if(c==="hincha"){const Z=new tt(g(new oe(.47,24,12,0,le*2,0,le*.42)),vh(Ut,we));Z.position.y=.04;const C=new tt(g(new We(.435,.05,8,24)),wt(h.c2));C.rotation.x=le/2,C.position.y=.2;const k=new tt(g(new oe(.1,10,8)),wt(h.c1));k.position.y=.56,x.add(Z,C,k)}else if(c==="chullo"){const Z="#c9382f",C=new tt(g(new oe(.47,20,12,0,le*2,0,le*.46)),wt(Z,we));C.position.y=.04;const k=new tt(g(new We(.45,.032,6,24)),wt("#f2c21b"));k.rotation.x=le/2,k.position.y=.15;const K=new tt(g(new We(.42,.032,6,24)),wt("#2f8f5b"));K.rotation.x=le/2,K.position.y=.24,x.add(C,k,K);for(const yt of[-1,1]){const vt=new tt(g(new on(.075,.22,4,8)),wt(Z));vt.position.set(yt*.4,-.12,.05),vt.rotation.z=yt*.12;const Tt=new tt(g(new oe(.05,8,6)),wt("#f2c21b"));Tt.position.set(yt*.43,-.34,.05),x.add(vt,Tt)}const at=new tt(g(new oe(.07,8,6)),wt("#f2c21b"));at.position.y=.52,x.add(at)}else if(c==="gaucho"){const Z=new tt(g(new Yt(.25,.27,.26,18)),wt("#2d2118"));Z.position.y=.5;const C=new tt(g(new Yt(.62,.62,.04,28)),wt("#2d2118"));C.position.y=.36;const k=new tt(g(new We(.265,.025,6,24)),wt("#c9382f"));k.rotation.x=le/2,k.position.y=.41,x.add(Z,C,k)}else if(c==="vincha"){const Z=new tt(g(new We(.43,.04,6,28)),wt(s));Z.rotation.x=le/2-.15,Z.position.y=.2;const C=new tt(g(new oe(.07,8,6)),wt(s));C.position.set(0,.15,-.43),x.add(Z,C)}return v.userData={body:m,legs:y,arms:I,head:x,geos:f,raise:T,holder:S},v}function wa(i,t,e=0){const n=i.userData,s=Math.min(1,e),a=Math.sin(t*11)*.9*s,r=(o,c)=>o?Math.sin(t*7+c)*.15*(1-s):0;if(n.legs[0].rotation.x=a,n.legs[1].rotation.x=-a,n.arms[0].rotation.x=-a*.8+n.raise[0]+r(n.raise[0],0),n.arms[1].rotation.x=a*.8+n.raise[1]+r(n.raise[1],1.7),n.arms[0].rotation.z=-.09-Math.sin(t*1.7)*.02*(1-s)-(n.raise[0]?.12:0),n.arms[1].rotation.z=.09+Math.sin(t*1.7)*.02*(1-s)+(n.raise[1]?.12:0),n.body.position.y=Math.abs(Math.sin(t*11))*.07*s+Math.sin(t*2)*.012*(1-s),n.body.rotation.x=.12*s,n.head.rotation.y=Math.sin(t*.8)*.12*(1-s),n.holder){const o=n.holder.children.find(c=>c.userData.wave);o&&(o.rotation.y=Math.sin(t*5)*.25)}}function Ki(i){i&&(i.userData.geos.forEach(t=>t.dispose()),i.removeFromParent())}function E(i,t,...e){const n=document.createElement(i);if(t)for(const s in t){const a=t[s];if(!(a==null||a===!1))if(s==="class")n.className=a;else if(s==="text")n.textContent=a;else if(s==="style")for(const r in a)r.startsWith("--")?n.style.setProperty(r,a[r]):n.style[r]=a[r];else s.startsWith("on")&&typeof a=="function"?n.addEventListener(s.slice(2).toLowerCase(),a):n.setAttribute(s,a===!0?"":String(a))}for(const s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}const Ys=()=>document.getElementById("ui");function ni(){const i=Ys();for(;i.firstChild;)i.removeChild(i.firstChild)}let yh=0;function Ve(i){const t=document.getElementById("toast");t.textContent=i,t.hidden=!1,clearTimeout(yh),yh=setTimeout(()=>{t.hidden=!0},2600)}function Gv(i){const t=(e,n="90deg")=>{const s=100/e;return`repeating-linear-gradient(${n}, ${i.c1} 0 ${s}%, ${i.c2} ${s}% ${s*2}%)`};switch(i.pattern){case"stripes10":return t(10);case"stripes6":return t(6);case"hoops":return t(8,"0deg");case"band":return`linear-gradient(0deg, ${i.c1} 0 36%, ${i.c2} 36% 64%, ${i.c1} 64%)`;case"sash":return`linear-gradient(135deg, ${i.c1} 0 36%, ${i.c2} 36% 64%, ${i.c1} 64%)`;default:return i.c1}}const yc=i=>E("i",{class:"kit-sw",style:{background:Gv(i)},"aria-hidden":"true"});function Wv({onDone:i,onCancel:t}){const e=new Pr;e.background=new Zt("#0b1424"),e.fog=new qs("#0b1424",9,20);const n=new Je(36,innerWidth/innerHeight,.1,60);e.add(new Wc("#cfe6ff","#26314a",.8));const s=new ks("#ffffff",1.3);s.position.set(3,5,4);const a=new ks("#75aadb",1);a.position.set(-4,3,-3),e.add(s,a);const r=new _e,o=new tt(new Yt(1.5,1.6,.25,40),new Di({color:"#f4f1ea"}));o.position.y=-.125;const c=new tt(new We(1.5,.05,8,48),new Kt({color:"#75aadb"}));c.rotation.x=Math.PI/2;const l=new tt(new An(.55,24),new Kt({color:"#f6b40e"}));l.rotation.x=-Math.PI/2,l.position.y=.005,r.add(o,c,l),e.add(r);let u=Object.assign({},he.profile.look),d=he.profile.hincha,h=null,f=-.35,g=!0,v=null;const m=()=>he.profile.adultProps,p=()=>Ie.map((G,rt)=>he.owns(G.id)?rt:-1).filter(G=>G>=0),y=()=>{!m()&&gc("pr",u.pr)&&(u.pr=0)};function M(){Ki(h),h=Bs(u),r.add(h)}const _=document.getElementById("gl"),D=G=>{v=G.clientX,g=!1},P=G=>{v!=null&&(f+=(G.clientX-v)*.012,v=G.clientX)},T=()=>{v=null};_.addEventListener("pointerdown",D),addEventListener("pointermove",P),addEventListener("pointerup",T),addEventListener("pointercancel",T),ni();const I=E("input",{id:"cr-name",type:"text",maxlength:14,autocomplete:"off",spellcheck:"false",placeholder:"Tu nombre",value:he.profile.name}),S=E("div",{class:"hincha-grid"}),x=E("div",{class:"cr-opts"});function N(G){G(),y(),g=!1,M(),W()}function B(){S.textContent="";for(const G of qc)S.append(E("button",{type:"button",class:"hincha","aria-pressed":String(d===G.id),title:G.tag,onclick:()=>N(()=>{u=Object.assign({},G.look),d=G.id,xc(I.value)||(I.value=G.name)})},E("strong",{text:G.name}),E("small",{text:G.region})))}function V(){x.textContent="";for(const G of Qi){const rt=E("div",{class:"cr-row"});G.kit?Ie.forEach((Y,ct)=>{const xt=he.owns(Y.id),Mt=u.kt===ct;rt.append(E("button",{type:"button",class:"chip kit"+(xt?"":" locked"),"aria-pressed":String(Mt),disabled:!xt,title:xt?Y.name:`${Y.name}: ${br(Y)}`,onclick:()=>N(()=>{u.kt=ct,u.of=Ai("of","kit")})},yc(Y),E("span",null,E("b",{text:Y.name}),E("small",{text:xt?ba[Y.rarity].name:br(Y)}))))}):G.items.forEach((Y,ct)=>{if(G.key==="pr"&&!m()&&gc("pr",ct))return;const xt=u[G.key]===ct,Mt=G.color?`${G.title} ${ct+1}`:hh(G.key,ct);rt.append(E("button",{type:"button",class:G.color?"chip sw":"chip","aria-pressed":String(xt),"aria-label":Mt,title:Mt,onclick:()=>N(()=>{u[G.key]=ct})},G.color?E("i",{style:{background:Y}}):hh(G.key,ct)))}),x.append(E("span",{class:"lab",text:G.title}),rt)}}function W(){B(),V()}const Q=E("section",{class:"cr-panel","aria-label":"Creador de personaje"},E("header",null,E("p",{class:"kicker",text:he.hasCharacter()?"Tu personaje":"Bienvenido"}),E("h1",{text:he.hasCharacter()?"Cambiá tu look":"Creá tu hincha"})),E("label",{class:"lab",for:"cr-name",text:"Nombre"}),I,E("span",{class:"lab",text:"Hinchas de la casa"}),S,x,E("footer",null,E("button",{type:"button",class:"btn ghost",text:"Al azar",onclick:()=>N(()=>{u=zv(p(),m()),d=""})}),he.hasCharacter()&&E("button",{type:"button",class:"btn ghost",text:"Volver",onclick:()=>t&&t()}),E("button",{type:"button",class:"btn primary",text:he.hasCharacter()?"Guardar":"Entrar al mundo",onclick:()=>{const G=xc(I.value);if(!G){I.focus(),Ve("Ponele un nombre a tu personaje.");return}he.update({name:G,look:u,hincha:d,created:!0}),i()}})));return Ys().append(Q),y(),W(),M(),{scene:e,camera:n,update(G,rt){g&&(f+=G*.5),r.rotation.y=f,wa(h,rt,0);const Y=innerWidth/innerHeight<.9;n.position.set(Y?0:1.15,Y?1:1.6,Y?9.4:5.6),n.lookAt(Y?0:1.15,Y?-.4:1.05,0)},dispose(){_.removeEventListener("pointerdown",D),removeEventListener("pointermove",P),removeEventListener("pointerup",T),removeEventListener("pointercancel",T),Ki(h),ni()}}}const ar=Math.PI,bs="#f4f1ea",rr="#1c2230",ue=(i,t,e,n=0,s=0,a=0)=>{const r=new tt(t,typeof e=="string"?wt(e):e);return r.position.set(n,s,a),i.add(r),r},Mh={ring(i,t){ue(i,new qt(4.2,.4,4.2),bs,0,.2,0),ue(i,new qt(4.4,.12,4.4),t.color,0,.06,0);for(const e of[-1,1])for(const n of[-1,1])ue(i,new Yt(.1,.1,1.7,8),rr,e*1.95,1.25,n*1.95);for(const e of[.9,1.35,1.8])ue(i,new qt(3.9,.06,.06),t.color,0,e,1.95),ue(i,new qt(3.9,.06,.06),t.color,0,e,-1.95),ue(i,new qt(.06,.06,3.9),t.color,1.95,e,0),ue(i,new qt(.06,.06,3.9),t.color,-1.95,e,0)},goal(i,t){ue(i,new qt(7,.05,5),t.color,0,.03,.5),ue(i,new qt(6.6,.06,.08),bs,0,.06,2.9);for(const s of[-1,1])ue(i,new Yt(.09,.09,2.3,8),bs,s*2.2,1.15,-.8);ue(i,new qt(4.5,.16,.16),bs,0,2.3,-.8);const e=new tt(new Tn(4.4,2.2),new Kt({color:"#ffffff",transparent:!0,opacity:.22,side:we}));e.position.set(0,1.15,-1.3),i.add(e);const n=ue(i,new oe(.32,16,12),bs,.4,.34,1.4);n.userData.spin=!0},booth(i,t){ue(i,new qt(3.4,1,1.3),rr,0,.5,0),ue(i,new qt(3.5,.08,1.4),t.color,0,1.04,0);for(const e of[-1,1]){const n=ue(i,new Yt(.46,.46,.06,20),"#0d111b",e*.8,1.11,.05);n.userData.disc=!0,ue(i,new Yt(.14,.14,.08,12),t.accent,e*.8,1.13,.05),ue(i,new qt(.9,1.9,.9),rr,e*2.4,.95,-.2),ue(i,new Yt(.3,.3,.06,16),"#2a3347",e*2.4,.7,.27).rotation.x=ar/2}ue(i,new qt(4.6,.12,.12),new Kt({color:t.color}),0,2.3,-.5)},globe(i,t){ue(i,new Yt(.9,1.1,.5,16),bs,0,.25,0);const e=ue(i,new oe(1.15,20,16),t.color,0,1.9,0);e.userData.spin=!0;for(const[s,a,r]of[[.6,2.3,.85],[-.8,1.7,.7],[.2,1.3,1.1],[-.3,2.5,-.9]])ue(e,new oe(.32,8,6),"#5fb36b",s,a-1.9,r);ue(i,new We(1.45,.04,6,36),"#f6b40e",0,1.9,0).rotation.set(ar/2.6,0,.4),ue(i,new Yt(.06,.06,2.4,6),rr,2.3,1.2,.6);for(const[s,a]of[[2.1,.2],[1.7,-.3]]){const r=ue(i,new qt(1.1,.3,.06),t.accent,2.7,s,.6);r.rotation.y=a}},farm(i,t){ue(i,new qt(5.4,.12,3.8),"#6b4a2f",-.4,.06,.6);for(let n=0;n<4;n++){ue(i,new qt(5,.16,.3),"#5a3d26",-.4,.16,-.7+n*.8);for(let s=0;s<5;s++){const a=ue(i,new Cn(.17,.5,6),t.color,-2.4+s*1,.45,-.7+n*.8);a.userData.sway=s+n}}ue(i,new qt(2,1.5,1.6),"#b98957",3.1,.75,-.6);const e=ue(i,new Cn(1.7,.9,4),"#8a3d2c",3.1,1.95,-.6);e.rotation.y=ar/4},mill(i,t){ue(i,new qt(5,2.1,3.2),t.accent,0,1.05,-.6);for(let e=0;e<3;e++){const n=ue(i,new qt(1.7,.1,3.3),t.color,-1.65+e*1.65,2.35,-.6);n.rotation.z=.5}ue(i,new Yt(.32,.4,3.4,10),"#8a3d2c",2.7,1.7,-1.4),ue(i,new qt(1.2,1.1,.06),"#2a3347",-1.1,1,1.02),ue(i,new qt(1,1.4,.06),"#2a3347",1.2,.7,1.02),["#c9382f","#2f8f5b","#e6a817"].forEach((e,n)=>{const s=ue(i,new Yt(.28,.28,1.3,12),e,-1.6+n*.75,.3,2);s.rotation.z=ar/2})}};function Xv(i){const t=new _e;return(Mh[i.shape]||Mh.ring)(t,i),t}function qv(i,t,e,n){const s=document.createElement("canvas");s.width=512,s.height=160;const a=new kn(s);a.colorSpace=Fe;const r=()=>{const c=s.getContext("2d");c.clearRect(0,0,s.width,s.height),c.fillStyle=n?"rgba(14,20,34,0.78)":"rgba(14,20,34,0.92)",c.beginPath(),c.roundRect(8,8,496,144,28),c.fill(),c.fillStyle=e,c.fillRect(8,8,18,144),c.fillStyle="#ffffff",c.font="64px Anton, Impact, sans-serif",c.textBaseline="middle",c.fillText(i.toUpperCase(),50,62,440),c.fillStyle=n?"#9fb0cc":"#ffd98a",c.font='600 34px "Barlow Condensed", Arial Narrow, sans-serif',c.fillText(t,50,120,440),a.needsUpdate=!0};r(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(r);const o=new kc(new Lr({map:a,transparent:!0,depthWrite:!1}));return o.scale.set(3.9,1.22,1),o.userData.tex=a,o}const Mc=[{id:"peleas",name:"El Ring",title:"Peleas",status:"live",kind:"embed",url:Uv,tag:"Cachetazo: duelos 1 contra 1 a mano abierta, con salas y torneos.",plan:["Salas con código de 4 letras","Torneo, 2 vs 2 y 3 vs 3","Más de 65 personajes, pase de batalla y cofres"],color:"#c9382f",accent:"#ffd9d4",shape:"ring"},{id:"futbol",name:"La Cancha",title:"Fútbol",status:"live",kind:"scene",stage:"Etapa 2",tag:"Fútbol 3 vs 3 de potrero: pase corto, filtrado de tres dedos, tiro potente y poderes.",plan:["Partidos online con hasta 6 jugadores (falta el servidor)","Más poderes y estrellas con onda anime","Torneos que dan cofres y casacas"],color:"#2f8f5b",accent:"#d7f2e2",shape:"goal"},{id:"dj",name:"La Cabina",title:"DJ y canciones",status:"live",kind:"scene",stage:"Etapa 3",tag:"Armá tu propio tema paso a paso (ritmo, bajo, melodía), mezclalo y pasalo en un set de DJ con dos bandejas.",plan:["Compartir tus temas en la sala","Más sonidos y estilos (guitarra eléctrica, cuerdas)","Pedir temas y bailar con otros jugadores"],color:"#6a3fa0",accent:"#e6dcf5",shape:"booth"},{id:"viajes",name:"La Terminal",title:"Viajar por el mundo",status:"soon",stage:"Etapa 4",tag:"Salí de Rosario y recorré ciudades del mundo.",plan:["Destinos con su propia escena 3D","Misiones y coleccionables por ciudad","Viajar con amigos"],color:"#2a7fb5",accent:"#d5ebf8",shape:"globe"},{id:"chacra",name:"La Chacra",title:"Cultivo",status:"soon",stage:"Etapa 4",tag:"Un espacio para cultivar y vivir de eso.",plan:["Parcela propia","Siembra, cosecha y venta","Mejoras y herramientas"],color:"#7a9a2f",accent:"#eaf2cf",shape:"farm"},{id:"taller",name:"El Taller",title:"Oficios",status:"soon",stage:"Etapa 5",tag:"Diseñador industrial, de autos, de moda, ingeniero, industria textil.",plan:["Profesiones con sus propios minijuegos","Industria textil y cadena de producción","Economía compartida con el resto de los modos"],color:"#e07b39",accent:"#fbe3d1",shape:"mill"}];let Ei=null;function ii(i,{onClose:t,cls:e=""}={}){Ei&&Ei.close();const n=E("div",{class:"dlg-back"+(e==="full"?" full-back":""),role:"dialog","aria-modal":"true"}),s=E("div",{class:"dlg "+e},i);n.append(s);const a=o=>{o.key==="Escape"&&r.close()};n.addEventListener("pointerdown",o=>{o.target===n&&r.close()}),addEventListener("keydown",a),Ys().append(n);const r={close(){Ei===r&&(Ei=null,removeEventListener("keydown",a),n.remove(),t&&t())}};return Ei=r,r}const ze=()=>{Ei&&Ei.close()},Yv=()=>!!Ei,Du=i=>E("span",{class:"pill "+i.status,text:i.status==="live"?"Disponible":`${i.stage} · Próximamente`});function jv({onPick:i,onClose:t}){const e=E("div",{class:"mode-grid"},Mc.map(n=>E("button",{type:"button",class:"mode-card "+n.status,style:{"--c":n.color},onclick:()=>i(n)},E("span",{class:"mc-title",text:n.title}),E("span",{class:"mc-tag",text:n.tag}),Du(n))));return ii(E("div",null,E("header",{class:"dlg-head"},E("h2",{text:"Elegí a qué jugar"}),E("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>ze()})),e),{onClose:t,cls:"wide"})}function $v(i,{onClose:t}){return ii(E("div",{style:{"--c":i.color}},E("header",{class:"dlg-head"},E("h2",{text:i.title}),E("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>ze()})),Du(i),E("p",{class:"lead",text:i.tag}),E("p",{class:"lab",text:"Lo que va a tener"}),E("ul",{class:"plan"},i.plan.map(e=>E("li",{text:e}))),E("footer",null,E("button",{type:"button",class:"btn primary",text:"Entendido",onclick:()=>ze()}))),{onClose:t})}function Jv(i,{onClose:t}){const e=E("iframe",{class:"embed-frame",src:i.url,title:i.title,allow:"fullscreen; autoplay",referrerpolicy:"no-referrer",sandbox:"allow-scripts allow-same-origin allow-forms allow-popups"});e.addEventListener("load",()=>e.focus());const n=E("div",{class:"embed"},E("header",{class:"embed-bar"},E("strong",{text:i.title}),E("button",{type:"button",class:"btn ghost",text:"Volver al mundo",onclick:()=>ze()})),e);return ii(n,{onClose:t,cls:"full"})}const Kv={local:"Tu progreso se guarda solo en este dispositivo.","cloud-pending":"Conectando con la nube…","cloud-ok":"Tu progreso se guarda en la nube.","cloud-error":"No pude conectar con la nube. Por ahora se guarda en este dispositivo."};function Zv({onClose:i,onEditLook:t}){const e=he.profile,n=E("p",{class:"lead",text:Kv[he.status]||""}),s=E("p",{class:"muted",text:""}),a=E("div",{class:"row-actions"},E("button",{type:"button",class:"btn ghost",text:"Cambiar personaje",onclick:()=>{ze(),t()}}));s.textContent="La nube se activa con un proyecto de Firebase propio (los pasos están en el README).";const r=E("label",{class:"toggle"},E("input",{type:"checkbox",checked:e.adultProps,onchange:o=>he.update({adultProps:o.target.checked})}),E("span",{text:"Mostrar cerveza, fernet y fasos en los personajes"}));return ii(E("div",null,E("header",{class:"dlg-head"},E("h2",{text:e.name||"Jugador"}),E("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>ze()})),E("p",{class:"lead",text:`Nivel ${he.level} · ${e.coins} monedas`}),n,s,r,a),{onClose:i})}function Qv({onClose:i}){const t=E("div");let e=null;function n(){const r=he.openChest();r&&(e=r),a()}function s(){if(!e)return null;if(e.type==="coins")return E("div",{class:"reveal pop"},E("strong",{text:"¡Ya tenés todas las casacas de cofre!"}),E("span",{text:`Te llevás ${e.amount} monedas.`}));const r=e.kit,o=ba[r.rarity];return E("div",{class:"reveal pop",style:{"--r":o.color}},E("span",{class:"rar",text:o.name}),yc(r),E("strong",{text:r.name}),E("span",{text:"¡Casaca nueva!"}),E("button",{type:"button",class:"btn primary",text:"Ponérmela",onclick:()=>{he.equipKit(r.id),Ve("Casaca puesta."),a()}}))}function a(){t.textContent="";const r=he.profile,o=Ie.filter(c=>r.kits.includes(c.id)).length;t.append(E("header",{class:"dlg-head"},E("h2",{text:"Cofres y casacas"}),E("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>ze()})),E("div",{class:"chest-row"},E("div",{class:"chest-art","aria-hidden":"true"}),E("div",null,E("p",{class:"lead",text:r.chests===1?"Tenés 1 cofre":`Tenés ${r.chests} cofres`}),E("p",{class:"muted",text:"Ganás uno por cada nivel que subís, por el regalo del día y por cada torneo que ganás."}),E("button",{type:"button",class:"btn primary",text:"Abrir cofre",disabled:r.chests<1,onclick:n}))),s(),E("span",{class:"lab",text:`Tus casacas (${o} de ${Ie.length})`}),E("div",{class:"kit-list"},Ie.map((c,l)=>{const u=r.kits.includes(c.id);return E("button",{type:"button",class:"chip kit"+(u?"":" locked"),disabled:!u,"aria-pressed":String(u&&r.look.kt===l),title:u?`Usar ${c.name}`:`${c.name}: ${br(c)}`,onclick:()=>{he.equipKit(c.id),a()}},yc(c),E("span",null,E("b",{text:c.name}),E("small",{text:u?ba[c.rarity].name:br(c)})))})))}return a(),ii(t,{onClose:i,cls:"wide"})}const $n=Math.PI,bh=6.2,yi=17,Sh=13,xo=5.4,_o=36;function tx(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function ex({onEditLook:i,onPlay:t}){const e=new Pr,n="#a9d6f5";e.background=new Zt(n),e.fog=new qs(n,38,80);const s=new Je(48,innerWidth/innerHeight,.1,160);e.add(new Wc("#ffffff","#6f9a63",.85));const a=new ks("#fff4dc",1.25);a.position.set(18,30,12),e.add(a);const r=[],o=A=>(r.push(A),A),c=new tt(o(new An(90,48)),wt("#5fa665"));c.rotation.x=-$n/2,e.add(c);const l=new tt(o(new An(yi,64)),wt("#efe6d2"));l.rotation.x=-$n/2,l.position.y=.02,e.add(l),[[yi-.9,yi,"#75aadb"],[yi-1.8,yi-.9,"#ffffff"],[yi-2.7,yi-1.8,"#75aadb"]].forEach(([A,$,ht],st)=>{const mt=new tt(o(new oi(A,$,64)),wt(ht));mt.rotation.x=-$n/2,mt.position.y=.03+st*.001,e.add(mt)});const u=new _e;u.add(new tt(o(new Yt(1.9,2.2,.9,24)),wt("#f4f1ea"))),u.children[0].position.y=.45;const d=new _e;d.position.y=2.3,d.add(new tt(o(new oe(.85,20,16)),new Kt({color:"#f6b40e"})));const h=o(new Cn(.14,.75,6));for(let A=0;A<16;A++){const $=A/16*$n*2,ht=new tt(h,new Kt({color:A%2?"#f6b40e":"#e08a00"}));ht.position.set(Math.cos($)*1.3,Math.sin($)*1.3,0),ht.rotation.z=$-$n/2,d.add(ht)}u.add(d),e.add(u);{const A=tx(20261022),$=70,ht=o(new Yt(.22,.3,1.5,6)),st=o(new Cn(1.5,3.6,7)),mt=new Yi(ht,wt("#7a5230"),$),pt=new Yi(st,wt("#3f8a4c"),$),St=new me,F=new Li,gt=new O,U=new O;for(let z=0;z<$;z++){const j=A()*$n*2,it=yi+3+A()*40,ft=.8+A()*.9;U.set(Math.cos(j)*it,.75*ft,Math.sin(j)*it),gt.set(ft,ft,ft),St.compose(U,F,gt),mt.setMatrixAt(z,St),U.y=(1.5+1.8)*ft,St.compose(U,F,gt),pt.setMatrixAt(z,St)}e.add(mt,pt)}const f=Mc.map((A,$)=>{const ht=$/Mc.length*$n*2,st=Math.cos(ht)*Sh,mt=Math.sin(ht)*Sh,pt=Xv(A);pt.position.set(st,0,mt),pt.rotation.y=Math.atan2(-st,-mt),e.add(pt);const St=new tt(o(new Yt(4.6,4.6,.08,36)),wt(A.accent));St.position.set(st,.05,mt),e.add(St);const F=new tt(o(new oi(4.2,4.6,48)),new Kt({color:A.status==="live"?"#f6b40e":A.color,transparent:!0,opacity:.6,side:we}));F.rotation.x=-$n/2,F.position.set(st,.11,mt),e.add(F);const gt=qv(A.name,A.status==="live"?"Disponible · "+A.title:A.stage+" · "+A.title,A.color,A.status!=="live");return gt.position.set(st,4.2,mt),e.add(gt),o({dispose:()=>gt.userData.tex.dispose()}),pt.traverse(U=>{U.geometry&&o(U.geometry)}),{mode:A,x:st,z:mt,g:pt,glow:F,pad:St}}),g=[{x:0,z:0,r:2.5},...f.map(A=>({x:A.x,z:A.z,r:2.6}))];let v=Bs(he.profile.look);v.position.set(0,0,5),e.add(v);let m=JSON.stringify(he.profile.look);function p(){const A=JSON.stringify(he.profile.look);if(A===m)return;m=A;const $=v;v=Bs(he.profile.look),v.position.copy($.position),v.rotation.y=$.rotation.y,e.add(v),Ki($)}const y=new tt(o(new An(.55,20)),new Kt({color:0,transparent:!0,opacity:.25}));y.rotation.x=-$n/2,y.position.y=.06,e.add(y);const M=new At;let _=0,D=0,P=.74,T=11.5;const I=new O(0,1.4,5);s.position.set(0,8,16);const S=new Set,x={x:0,y:0};let N=null,B=!1;const V=A=>A.target&&/INPUT|TEXTAREA|SELECT/.test(A.target.tagName),W=A=>{if(V(A)||B)return;const $=A.key.toLowerCase();if($==="e"||$==="enter"){N&&!A.repeat&&(A.preventDefault(),dt(N.mode));return}if($==="m"){ut();return}["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes($)&&(S.add($),A.preventDefault())},Q=A=>S.delete(A.key.toLowerCase()),G=()=>S.clear();addEventListener("keydown",W),addEventListener("keyup",Q),addEventListener("blur",G);const rt=document.getElementById("gl");let Y=null;const ct=A=>{Y={id:A.pointerId,x:A.clientX,y:A.clientY}},xt=A=>{!Y||A.pointerId!==Y.id||(D-=(A.clientX-Y.x)*.006,P=Math.max(.25,Math.min(1.2,P+(A.clientY-Y.y)*.004)),Y.x=A.clientX,Y.y=A.clientY)},Mt=A=>{Y&&A.pointerId===Y.id&&(Y=null)},Ut=A=>{T=Math.max(7,Math.min(28,T+A.deltaY*.012))};rt.addEventListener("pointerdown",ct),addEventListener("pointermove",xt),addEventListener("pointerup",Mt),addEventListener("pointercancel",Mt),rt.addEventListener("wheel",Ut,{passive:!0}),ni();const Z=E("strong",{class:"hud-name"}),C=E("span",{class:"hud-lvl"}),k=E("span",{class:"hud-coins"}),K=E("i"),at=E("button",{type:"button",class:"hud-card","aria-label":"Tu cuenta",onclick:()=>Ft()},Z,E("span",{class:"hud-sub"},C,k),E("span",{class:"bar"},K)),yt=E("b",{class:"badge",text:"0"}),vt=E("button",{type:"button",class:"btn gold",hidden:!0,text:"Regalo del día",onclick:()=>Ot()}),Tt=E("div",{class:"hud-actions"},vt,E("button",{type:"button",class:"btn primary",onclick:()=>ut()},"Modos ",E("kbd",{text:"M"})),E("button",{type:"button",class:"btn ghost",onclick:()=>ot()},"Cofres ",yt),E("button",{type:"button",class:"btn ghost",text:"Personaje",onclick:()=>{i()}})),$t=E("button",{type:"button",class:"prompt",hidden:!0,onclick:()=>N&&dt(N.mode)}),Xt=E("i",{class:"knob"}),lt=E("div",{class:"joy","aria-hidden":"true"},Xt),H=E("p",{class:"help",text:"WASD o flechas para caminar · arrastrá para girar la cámara"});Ys().append(E("div",{class:"hud-top"},at,Tt),$t,lt,H);function Dt(){const A=he.profile;Z.textContent=A.name||"Jugador",C.textContent=`Nivel ${he.level}`,k.textContent=`${A.coins} monedas`,K.style.width=Math.round(he.levelProgress*100)+"%",yt.textContent=String(A.chests),yt.classList.toggle("has",A.chests>0),vt.hidden=!he.canClaimDaily(),p()}function Pt(A){const $=[];A.xp&&$.push(`+${A.xp} XP`),A.level&&$.push(`¡Nivel ${A.level}!`),A.chests&&$.push(A.chests===1?"+1 cofre":`+${A.chests} cofres`),A.kits&&A.kits.length&&$.push("Casaca nueva: "+A.kits.map(ht=>ht.name).join(", ")),$.length&&Ve($.join(" · "))}function Ot(){const A=he.claimDaily();A&&Pt(A)}Dt();const Nt=he.on(Dt);let Qt=null;const zt=48,L=A=>{const $=lt.getBoundingClientRect();let ht=A.clientX-($.left+$.width/2),st=A.clientY-($.top+$.height/2);const mt=Math.hypot(ht,st);mt>zt&&(ht*=zt/mt,st*=zt/mt),Xt.style.transform=`translate(${ht}px, ${st}px)`,x.x=ht/zt,x.y=-st/zt},b=()=>{Qt=null,x.x=x.y=0,Xt.style.transform=""};lt.addEventListener("pointerdown",A=>{Qt=A.pointerId,lt.setPointerCapture(A.pointerId),L(A),A.stopPropagation()}),lt.addEventListener("pointermove",A=>{A.pointerId===Qt&&L(A)}),lt.addEventListener("pointerup",b),lt.addEventListener("pointercancel",b);const J=()=>{B=!1};function ut(){B=!0,S.clear(),b(),jv({onPick:dt,onClose:J})}function dt(A){B=!0,S.clear(),b(),A.status==="live"&&A.kind==="embed"?Jv(A,{onClose:J}):A.status==="live"&&A.kind==="scene"&&t?t(A.id):$v(A,{onClose:J})}function ot(){B=!0,S.clear(),b(),Qv({onClose:J})}function Ft(){B=!0,S.clear(),b(),Zv({onClose:J,onEditLook:()=>i()})}const Et=new At,Rt=new O;let se=null;function R(A,$){let ht=0,st=0;B||((S.has("w")||S.has("arrowup"))&&(ht+=1),(S.has("s")||S.has("arrowdown"))&&(ht-=1),(S.has("d")||S.has("arrowright"))&&(st+=1),(S.has("a")||S.has("arrowleft"))&&(st-=1),ht+=x.y,st+=x.x);const mt=Math.min(1,Math.hypot(ht,st)),pt=Math.sin(D),St=Math.cos(D);Et.set(-pt*ht+St*st,-St*ht-pt*st),Et.lengthSq()>0&&Et.normalize().multiplyScalar(mt*bh),M.lerp(Et,1-Math.exp(-14*A)),v.position.x+=M.x*A,v.position.z+=M.y*A;for(const it of g){const ft=v.position.x-it.x,_t=v.position.z-it.z,Gt=Math.hypot(ft,_t),It=it.r+.4;Gt<It&&Gt>1e-4&&(v.position.x=it.x+ft/Gt*It,v.position.z=it.z+_t/Gt*It)}const F=Math.hypot(v.position.x,v.position.z);F>_o&&(v.position.x*=_o/F,v.position.z*=_o/F);const gt=M.length();if(gt>.3){let ft=Math.atan2(M.x,M.y)-_;ft=Math.atan2(Math.sin(ft),Math.cos(ft)),_+=ft*(1-Math.exp(-12*A))}v.rotation.y=_,wa(v,$,gt/bh),y.position.x=v.position.x,y.position.z=v.position.z,I.lerp(Rt.set(v.position.x,1.4,v.position.z),1-Math.exp(-8*A)),s.position.set(I.x+Math.sin(D)*Math.cos(P)*T,I.y+Math.sin(P)*T,I.z+Math.cos(D)*Math.cos(P)*T),s.lookAt(I),d.rotation.z+=A*.4,u.rotation.y+=A*.2;let U=null,z=xo;for(const it of f){const ft=Math.hypot(v.position.x-it.x,v.position.z-it.z);ft<z&&(U=it,z=ft),it.glow.material.opacity=.45+.35*Math.sin($*3+it.x)*(ft<xo?1:.4),it.glow.scale.setScalar(ft<xo?1.04+Math.sin($*5)*.02:1),it.g.traverse(_t=>{_t.userData.spin&&(_t.rotation.y+=A*.8),_t.userData.disc&&(_t.rotation.y+=A*4),_t.userData.sway!==void 0&&(_t.rotation.z=Math.sin($*2+_t.userData.sway)*.08)})}N=U;const j=N?N.mode.id:null;j!==se&&(se=j,$t.hidden=!N,N&&($t.textContent="",$t.append(E("kbd",{text:"E"}),` Entrar a ${N.mode.name}`)))}return{scene:e,camera:s,update:R,dispose(){removeEventListener("keydown",W),removeEventListener("keyup",Q),removeEventListener("blur",G),removeEventListener("pointermove",xt),removeEventListener("pointerup",Mt),removeEventListener("pointercancel",Mt),rt.removeEventListener("pointerdown",ct),rt.removeEventListener("wheel",Ut),Nt(),Yv()&&ze(),Ki(v),r.forEach(A=>A.dispose()),ni()}}}const si={HL:20,HW:12,GW:3.6,GH:2.5,GD:3,R:.34},{HL:nx}=si,Ds={bubusela:{id:"bubusela",name:"Bubuselazo",cost:50,color:"#ffb02e",desc:"Una onda de bubusela tira para atrás a los rivales cercanos y les saca la pelota."},pique:{id:"pique",name:"Pique de potrero",cost:35,color:"#75aadb",desc:"Salís disparado con la pelota pegada y nadie te la puede sacar."},iman:{id:"iman",name:"Pelota pegada",cost:45,color:"#b57cf0",desc:"La pelota viene sola hacia vos, incluso si la tiene un rival."},alambrado:{id:"alambrado",name:"Alambrado",cost:45,color:"#9fb0cc",desc:"Levantás un paredón de alambre adelante tuyo que frena jugadores y pelota."}},bc=Object.keys(Ds),Le=(i,t,e)=>i<t?t:i>e?e:i,Cs=i=>i===0?1:-1,ix=i=>Cs(i)*nx,wh=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function sx(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function pa(i,t,e,n,s,a){const r=s-e,o=a-n,c=r*r+o*o,l=c<1e-9?0:Le(((i-e)*r+(t-n)*o)/c,0,1);return Math.hypot(i-(e+r*l),t-(n+o*l))}function Eh(i,t,e,n,s,a){return Math.abs(n)<.001?{x:i+s*Math.sin(e)*a,z:t+s*Math.cos(e)*a}:{x:i+s/n*(Math.cos(e)-Math.cos(e+n*a)),z:t+s/n*(Math.sin(e+n*a)-Math.sin(e))}}const{HL:vr,HW:Sr,GW:Sc}=si;function ax(i,t,e){const n=t.ai,s=n.inp;if(s.pass=s.through=s.tackle=s.power=!1,s.target=null,s.aimZ=void 0,i.phase!=="play")return s.mx=s.mz=0,s.shoot=!1,s;const a=i.cfg.difficulty;n.t-=e,n.t<=0&&(n.t=.34-.2*a+i.rng()*.12,rx(i,t,n,a,s)),n.hold>0?(n.hold-=e,s.shoot=n.hold>0,s.aimZ=n.aimZ):s.shoot=!1;const r=n.tx-t.x,o=n.tz-t.z,c=Math.hypot(r,o),l=.84+.16*a;return c>n.stop?(s.mx=r/c*l,s.mz=o/c*l):(s.mx=0,s.mz=0),s}function rx(i,t,e,n,s){const a=i.ball,r=Cs(t.team),o=-r*vr,c=ix(t.team),l=i.ownerPlayer(),u=l&&l.id===t.id,d=l&&l.team===t.team;e.stop=.4;const h=t.role===1?-5.5:t.role===2?5.5:0;if(t.runTo&&t.runT>0&&!u){e.tx=t.runTo.x,e.tz=t.runTo.z,e.mode="run",e.stop=.2;return}if(u){ox(i,t,e,n,s,r,c);return}if(d){e.mode="support";let D=Le(l.x+r*(6+t.role*1.5),-vr+3,vr-3),P=h!==0?h*1.25:Le(-l.z*.6,-6,6);for(const T of i.mateList(t))T.id!==l.id&&Math.hypot(T.x-D,T.z-P)<4&&(P+=(P>=T.z?1:-1)*3);e.tx=D,e.tz=Le(P,-Sr+1.5,Sr-1.5),e.stop=.8;return}const f=i.players.filter(D=>D.team===t.team),g=Math.hypot(a.x-t.x,a.z-t.z),v=f.filter(D=>D.id!==t.id&&Math.hypot(a.x-D.x,a.z-D.z)<g-.5),m=v.length===0||v.length===1&&g<3.2,p=f.filter(D=>D.id!==t.id&&D.id!==(v.length?v[0].id:-1)),y=!m&&p.every(D=>Math.abs(t.x-o)<=Math.abs(D.x-o));if(m){if(e.mode="chase",e.tx=a.x+a.vx*.25,e.tz=a.z+a.vz*.25,e.stop=.2,l&&l.team!==t.team){const D=Math.hypot(l.x-t.x,l.z-t.z),P=Math.cos(Math.atan2(l.x-t.x,l.z-t.z)-t.face)>.5;D<1.9&&t.tackleCd<=0&&P&&i.rng()<.12+.28*n&&(s.tackle=!0,s.mx=(l.x-t.x)/D,s.mz=(l.z-t.z)/D),D<6&&_a(i,t,["bubusela","iman"],n,.45)&&(s.power=!0)}else!l&&_a(i,t,["iman"],n,.1)&&g<8&&(s.power=!0);return}e.mode="defend";const M={x:a.x-o,z:a.z};if(y){const D=Math.hypot(M.x,M.z)||1;e.tx=o+M.x/D*4.2,e.tz=Le(M.z/D*4.2,-Sc+.6,Sc-.6)}else{let D=null,P=1e9;for(const T of i.foeList(t)){if(l&&T.id===l.id)continue;const I=Math.hypot(T.x-t.x,T.z-t.z)+Math.abs(T.z-h)*.3;I<P&&(P=I,D=T)}D?(e.tx=D.x*.6+o*.4,e.tz=D.z*.8):(e.tx=o+(a.x-o)*.45,e.tz=h*.7)}e.stop=.7}function _a(i,t,e,n,s){const a=i.meterOf(t);return!a||a.cd>0||!e.includes(a.power)||a.v<Ds[a.power].cost?!1:i.rng()<s*(.4+n)}function ox(i,t,e,n,s,a,r){i.ball,e.mode="carry",e.stop=.1;const o=Math.abs(r-t.x),c=i.minOppDist(t.x,t.z,t.team),l=i.callFor&&i.callFor.team===t.team&&i.callFor.id!==t.id?i.players[i.callFor.id]:null,u=11+5*n;if(o<u&&Math.abs(t.z)<Sr-1.5){const _=(t.z>=0?-1:1)*(Sc-.9)*(.7+i.rng()*.3);if(i.laneClear(t.x,t.z,r,_,t.team)>1.4-.4*n||c>4){e.aimZ=_,o>7.5&&i.rng()<.45+.3*n?e.hold=.55+i.rng()*.25:e.hold=.12,e.tx=r,e.tz=0;return}}const d=i.mateList(t),h=c<2.4;let f=null,g=-1e9;for(const _ of d){const D=(_.x-t.x)*a,P=Math.hypot(_.x-t.x,_.z-t.z);if(P<3)continue;const T=i.laneClear(t.x,t.z,_.x,_.z,t.team),I=i.minOppDist(_.x,_.z,t.team);if(T<1.3)continue;let S=D*.35+I*.6+T*.4-P*.05;l&&l.id===_.id&&(S+=2.5),S>g&&(g=S,f=_)}if(f&&(h||l&&l.id===f.id&&i.rng()<.7||(f.x-t.x)*a>5&&i.minOppDist(f.x,f.z,t.team)>3.2&&i.rng()<.3+.25*n)){const _=(f.x-t.x)*a;s.target=f.id,_>6&&i.rng()<.35+.35*n?s.through=!0:s.pass=!0,e.tx=t.x,e.tz=t.z;return}c>3.5&&o>9&&_a(i,t,["pique"],n,.35)&&(s.power=!0);let m=0;for(const _ of i.foeList(t))Math.hypot(_.x-t.x,_.z-t.z)<5&&m++;m>=2&&_a(i,t,["bubusela"],n,.6)&&(s.power=!0),m>=1&&o<14&&_a(i,t,["alambrado"],n,.12)&&(s.power=!0);const p=Math.atan2(r-t.x,-t.z*.4);let y=p,M=-1e9;for(let _=-4;_<=4;_++){const D=p+_*.28,P=t.x+Math.sin(D)*5,T=t.z+Math.cos(D)*5;if(Math.abs(T)>Sr-1.2||Math.abs(P)>vr-1)continue;let I=-Math.abs(_)*.35;for(const S of i.foeList(t)){const x=pa(S.x,S.z,t.x,t.z,P,T);I-=Math.max(0,2.6-x)*2.2}I>M&&(M=I,y=D)}e.tx=t.x+Math.sin(y)*6,e.tz=t.z+Math.cos(y)*6}const{HL:Pe,HW:en,GW:Ln,GH:Dn,GD:Th,R:ce}=si,Ah=24,Ch=7.6,cx=44,lx=64,hx=15,ux=17,Rh=.98,yo=.52,Ph=12.5,Lh=()=>({mx:0,mz:0,shoot:!1,pass:!1,through:!1,tackle:!1,power:!1,target:null,aimZ:void 0});class dx{constructor(t){this.cfg=Object.assign({duration:180,difficulty:.6,seed:Date.now()&2147483647},t),this.rng=sx(this.cfg.seed),this.time=0,this.score=[0,0],this.timeLeft=this.cfg.duration,this.golden=!1,this.over=!1,this.winner=-1,this.events=[],this.barriers=[],this.marker=null,this.callFor=null,this.stats=[0,1].map(()=>({shots:0,passes:0,tackles:0,powers:0,goals:0})),this.meters={},this.slots={};const e=[0,0];this.players=this.cfg.players.map((n,s)=>{const a=e[n.team]++;return{id:s,team:n.team,role:a,slot:n.slot==null?null:n.slot,name:n.name||"Jugador",hincha:n.hincha||null,power:n.power||bc[Math.floor(this.rng()*bc.length)],x:0,z:0,vx:0,vz:0,face:n.team===0?Math.PI/2:-Math.PI/2,stun:0,tackleT:0,tackleCd:0,recover:0,touchCd:0,actCd:0,kickT:0,charge:0,charging:!1,boost:0,magnet:0,runTo:null,runT:0,celebrate:0,lx:0,lz:0,lastInp:null,ai:{t:this.rng()*.3,tx:0,tz:0,mode:"idle",hold:0,aimZ:0,inp:Lh(),seed:this.rng()}}});for(const n of this.players)n.slot!=null&&(this.slots[n.slot]||(this.slots[n.slot]={team:n.team,ids:[],active:n.id,input:Lh(),autoT:0,lock:0,power:n.power})).ids.push(n.id);for(const n in this.slots){const s=this.slots[n];s.mode=s.ids.length>1?"team":"pro",s.active=s.ids[0],this.meters["s"+n]={v:40,cd:0,power:s.power}}for(const n of this.players)n.slot==null&&(this.meters["p"+n.id]={v:25+this.rng()*20,cd:0,power:n.power});this.ball={x:0,y:ce,z:0,vx:0,vy:0,vz:0,owner:null,lastId:null,lastTeam:0,guided:null,spin:0,speedKick:0},this.placeKickoff(0)}mateList(t){return this.players.filter(e=>e.team===t.team&&e.id!==t.id)}foeList(t){return this.players.filter(e=>e.team!==t.team)}meterOf(t){return this.meters[t.slot!=null?"s"+t.slot:"p"+t.id]}minOppDist(t,e,n){let s=99;for(const a of this.players)a.team!==n&&(s=Math.min(s,Math.hypot(a.x-t,a.z-e)));return s}laneClear(t,e,n,s,a,r){let o=99;for(const c of this.players)c.team===a||c.id===r||(o=Math.min(o,pa(c.x,c.z,t,e,n,s)));return o}drain(){const t=this.events;return this.events=[],t}ownerPlayer(){return this.ball.owner==null?null:this.players[this.ball.owner]}setInput(t,e){const n=this.slots[t];n&&Object.assign(n.input,e)}placeKickoff(t){this.phase="kickoff",this.phaseT=2.4,this.kickTeam=t,this.barriers.length=0,this.marker=null;for(const n of this.players){const s=Cs(n.team);n.x=-s*(n.role===0?3.4:9.5),n.z=n.role===0?0:n.role===1?-6.2:6.2,n.team===t&&n.role===0&&(n.x=-s*1.3),n.vx=n.vz=0,n.face=s>0?Math.PI/2:-Math.PI/2,n.stun=n.tackleT=n.tackleCd=n.recover=n.touchCd=n.actCd=n.kickT=0,n.charge=0,n.charging=!1,n.boost=0,n.magnet=0,n.runTo=null,n.celebrate=0,n.ai.hold=0,n.ai.mode="idle"}const e=this.ball;e.x=0,e.y=ce,e.z=0,e.vx=e.vy=e.vz=0,e.owner=null,e.guided=null,e.lastId=null;for(const n in this.slots){const s=this.slots[n];s.active=s.ids[0]}this.events.push({type:"kickoff",team:t})}step(t){if(this.time+=t,this.phase==="end"){this.idlePlayers(t);return}if(this.phase==="kickoff"){this.phaseT-=t;for(const e of this.players)e.vx=e.vz=0;if(this.phaseT<=0){this.phase="play";const e=this.players.find(n=>n.team===this.kickTeam&&n.role===0);this.ball.x=e.x+Math.sin(e.face)*.8,this.ball.z=e.z+Math.cos(e.face)*.8,this.ball.owner=e.id,this.ball.lastId=e.id,this.ball.lastTeam=e.team,this.events.push({type:"whistle",kind:"start"})}return}if(this.phase==="goal"){this.phaseT-=t,this.idlePlayers(t),this.updateBall(t),this.decayTimers(t),this.phaseT<=0&&(this.over?this.finish():this.placeKickoff(this.concede));return}this.timeLeft-=t,this.decayTimers(t),this.updateSlots(t);for(const e of this.players){const n=this.inputOf(e,t);e.lastInp=n,this.updatePlayer(e,n,t)}this.separate(),this.updateBarriers(t),this.updateBall(t),this.checkGoal();for(const e in this.slots){const n=this.slots[e].input;n.pass=n.through=n.tackle=n.power=!1}this.phase==="play"&&this.timeLeft<=0&&(this.score[0]!==this.score[1]?this.finish():this.golden?this.finish():(this.golden=!0,this.timeLeft=60,this.events.push({type:"overtime"})))}finish(){this.phase="end",this.over=!0,this.timeLeft=Math.max(0,this.timeLeft),this.winner=this.score[0]>this.score[1]?0:this.score[1]>this.score[0]?1:-1,this.events.push({type:"end",winner:this.winner})}decayTimers(t){for(const e in this.meters){const n=this.meters[e];n.cd=Math.max(0,n.cd-t),this.phase==="play"&&(n.v=Math.min(100,n.v+(e[0]==="s"?2.8:1.5)*t))}this.callFor&&(this.callFor.t-=t,this.callFor.t<=0&&(this.callFor=null)),this.marker&&(this.marker.t-=t,this.marker.t<=0&&(this.marker=null));for(const e of this.players)e.celebrate=Math.max(0,e.celebrate-t),e.kickT=Math.max(0,e.kickT-t)}idlePlayers(t){for(const e of this.players)e.vx*=Math.exp(-8*t),e.vz*=Math.exp(-8*t),e.x+=e.vx*t,e.z+=e.vz*t,e.charging=!1,e.charge=0}updateSlots(t){this.ball;for(const e in this.slots){const n=this.slots[e];if(n.autoT=Math.max(0,n.autoT-t),n.lock=Math.max(0,n.lock-t),n.mode!=="team")continue;const s=this.players[n.active];if(n.input.pass&&!this.canKick(s)){const r=n.ids.slice().sort((c,l)=>this.dist2Ball(this.players[c])-this.dist2Ball(this.players[l])),o=r.indexOf(n.active);n.active=r[(o+1)%r.length],n.input.pass=!1,n.lock=.5,this.events.push({type:"switch",slot:+e,id:n.active});continue}if(n.lock>0)continue;const a=this.ownerPlayer();if(a&&a.team===n.team)n.active!==a.id&&(n.active=a.id,this.events.push({type:"switch",slot:+e,id:n.active}));else if(n.autoT<=0){let r=n.active,o=this.dist2Ball(this.players[n.active])-4;for(const c of n.ids){const l=this.dist2Ball(this.players[c]);l<o&&(o=l,r=c)}r!==n.active&&(n.active=r,n.autoT=.35,this.events.push({type:"switch",slot:+e,id:r}))}}}dist2Ball(t){const e=this.ball;return(t.x-e.x)**2+(t.z-e.z)**2}inputOf(t,e){if(t.slot!=null){const n=this.slots[t.slot];if(n.mode==="pro"||n.active===t.id)return n.input}return ax(this,t,e)}canKick(t){const e=this.ball;return t.stun>0||t.tackleT>0?!1:e.owner===t.id?!0:e.owner!=null?!1:t.touchCd<=0&&e.y<1.3&&Math.hypot(e.x-t.x,e.z-t.z)<Rh+.25}updatePlayer(t,e,n){const s=this.ball;t.stun=Math.max(0,t.stun-n),t.tackleCd=Math.max(0,t.tackleCd-n),t.recover=Math.max(0,t.recover-n),t.touchCd=Math.max(0,t.touchCd-n),t.actCd=Math.max(0,t.actCd-n),t.boost=Math.max(0,t.boost-n),t.magnet=Math.max(0,t.magnet-n),t.runT>0&&(t.runT-=n,t.runT<=0&&(t.runTo=null));let a=e.mx,r=e.mz;const o=Math.hypot(a,r);o>1&&(a/=o,r/=o);const c=s.owner===t.id;let l=Ch*(c?.9:1);if(t.boost>0&&(l*=1.8),t.charging&&(l*=.5),t.recover>0&&(l*=.45),t.tackleT>0)t.tackleT-=n,t.vx=t.lx*Ph*(.4+t.tackleT/.34),t.vz=t.lz*Ph*(.4+t.tackleT/.34),this.tackleHit(t),t.tackleT<=0&&(t.recover=.4);else if(t.stun>0)t.vx*=Math.exp(-5*n),t.vz*=Math.exp(-5*n);else{const u=a*l,d=r*l,h=u-t.vx,f=d-t.vz,g=Math.hypot(h,f),v=(o<.05?lx:cx)*n;g<=v?(t.vx=u,t.vz=d):(t.vx+=h/g*v,t.vz+=f/g*v),o>.15&&(t.face+=wh(t.face,Math.atan2(a,r))*Math.min(1,hx*n))}t.x=Le(t.x+t.vx*n,-Pe+.6,Pe-.6),t.z=Le(t.z+t.vz*n,-en+.6,en-.6),this.handleActions(t,e,n)}handleActions(t,e,n){const s=this.ball;if(t.stun>0||t.tackleT>0){t.charging=!1,t.charge=0;return}const a=this.canKick(t);if(e.shoot&&a)t.charging=!0,t.charge=Math.min(1,t.charge+n/.85);else if(t.charging){const r=t.charge;t.charging=!1,t.charge=0,a&&this.doShot(t,r,e)}e.pass&&t.actCd<=0&&(a?this.doPass(t,e):this.slots[t.slot]&&this.slots[t.slot].mode==="pro"&&(this.callFor={id:t.id,team:t.team,t:1.3},t.actCd=.5,this.events.push({type:"call",id:t.id}))),e.through&&t.actCd<=0&&a&&this.doThrough(t,e),e.tackle&&t.tackleCd<=0&&t.recover<=0&&s.owner!==t.id&&this.startTackle(t,e),e.power&&this.usePower(t)}pickMate(t,e,n){const s=e.mx,a=e.mz,r=Math.hypot(s,a),o=r>.3,c=o?s/r:Math.sin(t.face),l=o?a/r:Math.cos(t.face),u=o?.5:.25,d=Cs(t.team);let h=null,f=-1e9;for(const g of this.mateList(t)){const v=g.x-t.x,m=g.z-t.z,p=Math.hypot(v,m);if(p<2)continue;const y=(v*c+m*l)/p;if(y<u)continue;const M=this.laneClear(t.x,t.z,g.x,g.z,t.team);let _=y*3-p*.035+Math.min(M,3)*.5;n&&(_+=(g.x-t.x)*d*.12),_>f&&(f=_,h=g)}return h}kickBase(t,e){const n=this.ball;n.owner=null,n.guided=null,n.lastId=t.id,n.lastTeam=t.team,t.touchCd=.45,t.kickT=.28,t.actCd=.18,t.charging=!1,t.charge=0,t.face=t.face,this.events.push({type:"kick",kind:e,id:t.id,x:n.x,z:n.z})}doPass(t,e){const n=this.ball;let s=e.target!=null?this.players[e.target]:this.pickMate(t,e,!1);s&&s.team!==t.team&&(s=null);let a,r;if(s)a=s.x+s.vx*.4,r=s.z+s.vz*.4;else{const d=Math.hypot(e.mx,e.mz),h=d>.3?e.mx/d:Math.sin(t.face),f=d>.3?e.mz/d:Math.cos(t.face);a=n.x+h*9,r=n.z+f*9}a=Le(a,-Pe+1,Pe-1),r=Le(r,-en+1,en-1);const o=a-n.x,c=r-n.z,l=Math.max(.5,Math.hypot(o,c)),u=Le(l/17+.12,.28,.85);this.kickBase(t,"pass"),this.startGuide({kind:"pass",x0:n.x,z0:n.z,th0:Math.atan2(o,c),w:0,v:l/u,T:u,h:0,who:s?s.id:null,team:t.team}),s&&this.onPassTarget(t,s,a,r,u),this.stats[t.team].passes++}doThrough(t,e){const n=this.ball,s=Cs(t.team),a=e.target!=null?this.players[e.target]:this.pickMate(t,e,!0);let r,o;if(a&&a.team===t.team){const M=Math.hypot(a.vx,a.vz);r=a.x+a.vx*.95+s*(M<2?3.2:1.6),o=a.z+a.vz*.95}else{const M=Math.hypot(e.mx,e.mz),_=M>.3?e.mx/M:Math.sin(t.face),D=M>.3?e.mz/M:Math.cos(t.face);r=n.x+_*14,o=n.z+D*14}r=Le(r,-Pe+1.5,Pe-1.5),o=Le(o,-en+1.4,en-1.4);const c=r-n.x,l=o-n.z,u=Math.hypot(c,l);if(u<4){this.doPass(t,e);return}const d=Le(u/15+.5,.85,1.5),h=.8+Math.min(.5,u*.02),f=Math.atan2(c,l);let g=1,v=-1e9;for(const M of[-1,1]){const _=M*h/d,D=f-M*h/2,P=u*Math.abs(_)/(2*Math.sin(h/2)),T=Eh(n.x,n.z,D,_,P,d/2);let I=Math.min(this.minOppDist(T.x,T.z,t.team),6);(Math.abs(T.z)>en-1||Math.abs(T.x)>Pe-1)&&(I-=5),I>v&&(v=I,g=M)}const m=g*h/d,p=f-g*h/2,y=u*Math.abs(m)/(2*Math.sin(h/2));this.kickBase(t,"through"),t.actCd=.3,this.startGuide({kind:"through",x0:n.x,z0:n.z,th0:p,w:m,v:y,T:d,h:.7+Math.min(.5,u*.025),who:a?a.id:null,team:t.team,side:g}),a&&a.team===t.team&&this.onPassTarget(t,a,r,o,d),this.marker={x:r,z:o,team:t.team,t:d+.2},this.stats[t.team].passes++}startGuide(t){t.t=0,this.ball.guided=t}onPassTarget(t,e,n,s,a){e.runTo={x:n,z:s},e.runT=a+.35;const r=e.slot!=null?this.slots[e.slot]:null;r&&r.mode==="team"&&r.active!==e.id&&(r.active=e.id,r.lock=.9,this.events.push({type:"switch",slot:e.slot,id:e.id}))}doShot(t,e,n){const s=this.ball,a=Cs(t.team),r=a*Pe,o=e>=.3,c={x:Math.sin(t.face),z:Math.cos(t.face)},l=Math.atan2(r-s.x,0-s.z),u=Math.abs(wh(t.face,l))<Math.PI*.55,d=Math.max(1,Math.hypot(r-s.x,s.z));let h;if(n.aimZ!==void 0)h=n.aimZ;else if(Math.abs(n.mz)>.35)h=Le(n.mz*3,-Ln+.7,Ln-.7);else{let D=0,P=99;for(const T of this.foeList(t)){const I=Math.hypot(T.x-s.x,T.z-s.z);I<P&&(T.x-s.x)*a>0&&(P=I,D=T.z)}h=D>=0?-2.7:Ln-.9}const f=o?25+15*e:20.5,g=(o?.35:.55)+d*(o?.045:.06);let v=h+(this.rng()+this.rng()-1)*g,m=o?.45+this.rng()*1.2:.4+this.rng()*1.2,p=r-s.x,y=v-s.z;u||(p=c.x*10,y=c.z*10,m=.3);const M=Math.max(1,Math.hypot(p,y)),_=M/f;this.kickBase(t,o?"power":"shot"),t.kickT=.35,s.vx=p/M*f,s.vz=y/M*f,s.vy=(m-s.y)/_+.5*Ah*_,s.vy=Le(s.vy,0,14),s.y=Math.max(s.y,ce+.05),s.speedKick=f,this.stats[t.team].shots++,this.events[this.events.length-1].power=e}startTackle(t,e){const n=Math.hypot(e.mx,e.mz),s=n>.3?e.mx/n:Math.sin(t.face),a=n>.3?e.mz/n:Math.cos(t.face);t.lx=s,t.lz=a,t.face=Math.atan2(s,a),t.tackleT=.34,t.tackleCd=1.35,t.tackleHit=!1,t.charging=!1,t.charge=0,this.events.push({type:"tackle",id:t.id,x:t.x,z:t.z,hit:!1})}tackleHit(t){const e=this.ball;if(t.tackleHit)return;const n=this.ownerPlayer();if(n&&n.team!==t.team&&Math.hypot(n.x-t.x,n.z-t.z)<1.35){if(t.tackleHit=!0,n.boost>0){t.stun=.7,t.tackleT=0,t.recover=.4,t.vx*=.2,t.vz*=.2,this.events.push({type:"tackle",id:t.id,victim:n.id,hit:!1,blocked:!0,x:t.x,z:t.z});return}e.owner=null,e.guided=null,e.vx=t.lx*6+n.vx*.3,e.vz=t.lz*6+n.vz*.3,e.vy=2.2,e.lastId=t.id,e.lastTeam=t.team,n.stun=.6,t.touchCd=0,this.stats[t.team].tackles++;const s=this.meterOf(t);s.v=Math.min(100,s.v+10),this.events.push({type:"tackle",id:t.id,victim:n.id,hit:!0,x:n.x,z:n.z})}else!n&&Math.hypot(e.x-t.x,e.z-t.z)<1.4&&e.y<1&&(t.tackleHit=!0,e.vx=t.lx*11,e.vz=t.lz*11,e.guided=null,e.vy=1.5,e.lastId=t.id,e.lastTeam=t.team,this.events.push({type:"tackle",id:t.id,hit:!0,x:e.x,z:e.z}));t.tackleT<=0&&(t.tackleHit=!1)}usePower(t){const e=this.meterOf(t),n=Ds[e.power];if(!n||e.v<n.cost||e.cd>0)return;e.v-=n.cost,e.cd=2,this.stats[t.team].powers++;const s=this.ball,a={type:"power",id:t.id,power:n.id,x:t.x,z:t.z,ang:t.face};if(n.id==="bubusela"){for(const l of this.foeList(t)){const u=l.x-t.x,d=l.z-t.z,h=Math.hypot(u,d);if(h>7.5)continue;const f=1-h/9,g=h<.01?1:u/h,v=h<.01?0:d/h;l.vx+=g*18*f+g*4,l.vz+=v*18*f+v*4,l.stun=.7+.8*f,l.tackleT=0,l.charging=!1,l.charge=0,s.owner===l.id&&(s.owner=null,s.vx=g*8,s.vz=v*8,s.vy=3,s.lastId=t.id,s.lastTeam=t.team)}const r=s.x-t.x,o=s.z-t.z,c=Math.hypot(r,o);s.owner==null&&c<7.5&&c>.01&&(s.guided=null,s.vx+=r/c*9,s.vz+=o/c*9,s.vy=Math.max(s.vy,2))}else if(n.id==="pique")t.boost=1.5;else if(n.id==="iman")t.magnet=.9;else if(n.id==="alambrado"){const r=Math.sin(t.face),o=Math.cos(t.face),c=Le(t.x+r*3.4,-Pe+3,Pe-3),l=Le(t.z+o*3.4,-en+2.7,en-2.7),u=Math.atan2(r,o)+Math.PI/2,d=Math.sin(u)*2.7,h=Math.cos(u)*2.7;this.barriers.push({x1:c-d,z1:l-h,x2:c+d,z2:l+h,t:4,life:4,team:t.team}),a.x=c,a.z=l,a.ang=Math.atan2(r,o)}this.events.push(a)}updateBarriers(t){for(let e=this.barriers.length-1;e>=0;e--){const n=this.barriers[e];if(n.t-=t,n.t<=0){this.barriers.splice(e,1);continue}for(const s of this.players)pa(s.x,s.z,n.x1,n.z1,n.x2,n.z2)<yo+.1&&this.pushFromSegment(s,n,yo+.1)}}pushFromSegment(t,e,n){const s=e.x2-e.x1,a=e.z2-e.z1,r=s*s+a*a,o=Le(((t.x-e.x1)*s+(t.z-e.z1)*a)/r,0,1),c=e.x1+s*o,l=e.z1+a*o;let u=t.x-c,d=t.z-l,h=Math.hypot(u,d);return h<1e-4&&(u=-a,d=s,h=Math.hypot(u,d)),u/=h,d/=h,t.x=c+u*n,t.z=l+d*n,{nx:u,nz:d}}separate(){const t=this.players;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){const s=t[e],a=t[n],r=a.x-s.x,o=a.z-s.z,c=Math.hypot(r,o),l=yo*2;if(c<l&&c>1e-4){const u=(l-c)/2,d=r/c,h=o/c;s.x-=d*u,s.z-=h*u,a.x+=d*u,a.z+=h*u}}for(const e of t)e.x=Le(e.x,-Pe+.6,Pe-.6),e.z=Le(e.z,-en+.6,en-.6)}updateBall(t){const e=this.ball,n=this.phase==="play";if(e.owner!=null){const s=this.players[e.owner],r=.78+.25*Math.min(1,Math.hypot(s.vx,s.vz)/Ch),o=s.x+Math.sin(s.face)*r,c=s.z+Math.cos(s.face)*r,l=1-Math.exp(-20*t);e.x+=(o-e.x)*l,e.z+=(c-e.z)*l,e.vx=s.vx,e.vz=s.vz,e.vy=0,e.y=ce,e.z=Le(e.z,-en+ce,en-ce),e.x=Le(e.x,-Pe+ce,Pe-ce),(s.stun>0||Math.hypot(e.x-s.x,e.z-s.z)>2.3)&&(e.owner=null);for(const u of this.barriers)pa(e.x,e.z,u.x1,u.z1,u.x2,u.z2)<ce+.12&&(e.x=s.x,e.z=s.z)}else if(e.guided){const s=e.guided;s.t+=t;const a=Math.min(s.t,s.T),r=Eh(s.x0,s.z0,s.th0,s.w,s.v,a),o=s.th0+s.w*a;e.x=r.x,e.z=r.z,e.vx=Math.sin(o)*s.v,e.vz=Math.cos(o)*s.v;const c=Math.PI*a/s.T;e.y=ce+s.h*Math.sin(c),e.vy=s.h*Math.cos(c)*Math.PI/s.T,s.t>=s.T&&(e.guided=null,e.vx*=.5,e.vz*=.5,e.vy=0,e.y=ce)}else{for(const s of this.players)if(s.magnet>0&&e.owner==null&&n){const a=s.x-e.x,r=s.z-e.z,o=Math.hypot(a,r);o<10&&o>.3&&(e.vx=a/o*17,e.vz=r/o*17,e.vy=0,e.y=Math.max(ce,e.y*.8),e.guided=null)}if(e.vy-=Ah*t,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.y<ce&&(e.y=ce,e.vy<-2.5?(e.vy<-5&&this.events.push({type:"bounce",x:e.x,z:e.z,v:-e.vy}),e.vy=-e.vy*.5,e.vx*=.97,e.vz*=.97):e.vy=0),e.y<=ce+.001&&e.vy===0){const s=Math.hypot(e.vx,e.vz),a=(1.5+s*.32)*t;s<=a?e.vx=e.vz=0:(e.vx*=(s-a)/s,e.vz*=(s-a)/s)}else e.vx*=1-.04*t,e.vz*=1-.04*t}this.collideBall(),n&&this.capture()}collideBall(){const t=this.ball,e=this.phase==="goal",n=Math.abs(t.z)<Ln&&t.y<Dn;if(e){const s=Math.sign(t.x)||1;Math.abs(t.x)>Pe+Th-ce&&(t.x=s*(Pe+Th-ce),t.vx*=-.25),Math.abs(t.z)>Ln-ce&&(t.z=Math.sign(t.z)*(Ln-ce),t.vz*=-.3),t.y>Dn-ce&&(t.y=Dn-ce,t.vy=-Math.abs(t.vy)*.3),Math.abs(t.x)<Pe+.2&&(t.x=s*(Pe+.2),t.vx=Math.abs(t.vx)*s),t.vx*=1-3*(1/60),t.vz*=1-3*(1/60);return}for(const s of[-1,1])for(const a of[-1,1]){const r=s*Pe,o=a*Ln,c=t.x-r,l=t.z-o,u=Math.hypot(c,l);if(u<ce+.13&&t.y<Dn+ce){const d=c/(u||1),h=l/(u||1),f=t.vx*d+t.vz*h;f<0&&(t.vx-=1.75*f*d,t.vz-=1.75*f*h,t.guided&&(t.guided=null),this.events.push({type:"post",x:t.x,z:t.z,v:-f})),t.x=r+d*(ce+.13),t.z=o+h*(ce+.13)}}if(Math.abs(t.z)<Ln&&Math.abs(Math.abs(t.x)-Pe)<ce+.1&&Math.abs(t.y-Dn)<ce+.1&&(t.vy>0||Math.abs(t.y-Dn)<ce)&&(t.vy=-Math.abs(t.vy)*.6-1,t.vx*=.6,t.guided=null,t.y=t.y>Dn?Dn+ce+.1:Dn-ce-.1,this.events.push({type:"bar",x:t.x,z:t.z,v:Math.abs(t.vy)})),Math.abs(t.x)>Pe-ce&&!(n&&Math.abs(t.z)<Ln-.05)){const s=Math.sign(t.x);t.vx*s>0&&(Math.abs(t.vx)>5&&this.events.push({type:"wall",x:t.x,z:t.z,v:Math.abs(t.vx)}),t.vx*=-.6,t.guided&&(t.guided=null)),t.x=s*(Pe-ce)}if(Math.abs(t.z)>en-ce){const s=Math.sign(t.z);t.vz*s>0&&(Math.abs(t.vz)>5&&this.events.push({type:"wall",x:t.x,z:t.z,v:Math.abs(t.vz)}),t.vz*=-.65,t.vx*=.97,t.guided&&(t.guided=null)),t.z=s*(en-ce)}for(const s of this.barriers){if(t.owner!=null)break;if(pa(t.x,t.z,s.x1,s.z1,s.x2,s.z2)<ce+.12&&t.y<2.6){const{nx:r,nz:o}=this.pushFromSegment(t,s,ce+.12),c=t.vx*r+t.vz*o;c<0&&(t.vx-=1.6*c*r,t.vz-=1.6*c*o,t.guided=null,this.events.push({type:"wall",x:t.x,z:t.z,v:-c}))}}}capture(){const t=this.ball;if(t.owner!=null)return;const e=Math.hypot(t.vx,t.vz);let n=null,s=1e9;for(const a of this.players){if(a.stun>0||a.tackleT>0)continue;const r=Math.hypot(t.x-a.x,t.z-a.z);if(e<=ux){if(a.touchCd>0||t.y>1.05||r>Rh)continue;const o=t.guided&&t.guided.who===a.id?r-.6:r;o<s&&(s=o,n=a)}else if(r<.78&&t.y<1.9&&a.team!==t.lastTeam){const o=(t.x-a.x)/(r||1),c=(t.z-a.z)/(r||1),l=t.vx*o+t.vz*c;if(l<0){const u=e>30;t.vx=(t.vx-2*l*o)*.45,t.vz=(t.vz-2*l*c)*.45,t.vy=2+this.rng()*3,t.guided=null,t.lastId=a.id,t.lastTeam=a.team,a.stun=u?.9:.35,u&&(a.vx=-o*7,a.vz=-c*7),this.events.push({type:"block",id:a.id,x:a.x,z:a.z,v:e})}}}if(n){const a=t.guided;if(t.owner=n.id,t.guided=null,t.vy=0,t.y=ce,t.lastId=n.id,a&&a.who===n.id&&a.team===n.team){const r=this.meterOf(n);r.v=Math.min(100,r.v+6),this.events.push({type:"receive",id:n.id,kind:a.kind})}t.lastTeam=n.team,n.magnet>0&&(n.magnet=0)}}checkGoal(){const t=this.ball;if(this.phase==="play"&&Math.abs(t.x)>Pe&&Math.abs(t.z)<Ln&&t.y<Dn){const e=t.x>0?0:1;this.score[e]++,this.stats[e].goals++;const n=t.lastTeam===e?t.lastId:null;this.concede=1-e,this.phase="goal",this.phaseT=3.6,t.owner=null,t.guided=null,this.golden&&(this.over=!0),this.timeLeft<=0&&(this.over=!0);for(const s of this.players)s.charging=!1,s.charge=0,s.tackleT=0,s.team===e&&(s.celebrate=3.4);for(const s of this.players)if(s.team!==e){const a=this.meterOf(s);a.v=Math.min(100,a.v+15)}this.events.push({type:"goal",team:e,scorer:n,x:t.x,z:t.z,speed:Math.hypot(t.vx,t.vz),score:this.score.slice()})}}}const{HL:De,HW:He,GW:yn,GH:Mn,GD:Jn}=si,Te=Math.PI,js=(i,t,e,{repeat:n,srgb:s=!0}={})=>{const a=document.createElement("canvas");a.width=i,a.height=t,e(a.getContext("2d"),i,t);const r=new kn(a);return s&&(r.colorSpace=Fe),r.anisotropy=4,n&&(r.wrapS=r.wrapT=Pi,r.repeat.set(n[0],n[1])),r};function fx(){const t=Math.round(2048*(He*2)/(De*2)),e=2048/(De*2);return js(2048,t,(n,s,a)=>{const o=s/10;for(let h=0;h<10;h++)n.fillStyle=h%2?"#4d9a55":"#5aa862",n.fillRect(h*o,0,o+1,a);let c=7;const l=()=>(c=c*16807%2147483647)/2147483647;for(let h=0;h<900;h++)n.fillStyle=l()>.5?"rgba(255,255,255,.03)":"rgba(0,30,0,.05)",n.beginPath(),n.ellipse(l()*s,l()*a,6+l()*22,3+l()*10,l()*Te,0,Te*2),n.fill();const u=(h,f,g,v)=>{const m=n.createRadialGradient(h,f,0,h,f,Math.max(g,v));m.addColorStop(0,"rgba(170,132,86,.95)"),m.addColorStop(.6,"rgba(160,125,80,.7)"),m.addColorStop(1,"rgba(160,125,80,0)"),n.save(),n.translate(h,f),n.scale(g/Math.max(g,v),v/Math.max(g,v)),n.translate(-h,-f),n.fillStyle=m,n.beginPath(),n.arc(h,f,Math.max(g,v),0,Te*2),n.fill(),n.restore()};u(s/2,a/2,2.4*e,2.4*e),u(1.6*e,a/2,2.8*e,5*e),u(s-1.6*e,a/2,2.8*e,5*e),u(s*.3,1*e,3*e,1.6*e),u(s*.72,a-1*e,3.4*e,1.6*e),n.strokeStyle="rgba(255,255,255,.92)",n.lineWidth=.16*e,n.lineCap="round";const d=(h,f,g,v)=>{n.beginPath(),n.moveTo(h,f),n.lineTo(g,v),n.stroke()};n.strokeRect(.1*e,.1*e,s-.2*e,a-.2*e),d(s/2,0,s/2,a),n.beginPath(),n.arc(s/2,a/2,3.4*e,0,Te*2),n.stroke(),n.fillStyle="#fff",n.beginPath(),n.arc(s/2,a/2,.22*e,0,Te*2),n.fill();for(const h of[0,1]){const f=h?s:0,g=h?-1:1;n.strokeRect(h?s-6.5*e:.1*e,a/2-7*e,6.4*e,14*e),n.strokeRect(h?s-2.6*e:.1*e,a/2-3.6*e-1.2*e,2.5*e,(3.6*2+2.4)*e),n.beginPath(),n.arc(f+g*4.6*e,a/2,2.2*e,h?Te-1:-1,h?Te+1:1),n.stroke(),n.beginPath(),n.arc(f+g*4.6*e,a/2,.16*e,0,Te*2),n.fill()}n.globalCompositeOperation="destination-out";for(let h=0;h<160;h++)n.fillStyle="rgba(0,0,0,.25)",n.fillRect(l()*s,l()*a,14+l()*30,3+l()*6)})}const px=()=>js(128,128,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="rgba(205,215,230,.9)",i.lineWidth=3;for(let n=-e;n<t+e;n+=16)i.beginPath(),i.moveTo(n,0),i.lineTo(n+e,e),i.stroke(),i.beginPath(),i.moveTo(n+e,0),i.lineTo(n,e),i.stroke()},{repeat:[1,1]}),mx=()=>js(64,64,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="rgba(255,255,255,.85)",i.lineWidth=3,i.strokeRect(0,0,t,e),i.beginPath(),i.moveTo(t/2,0),i.lineTo(t/2,e),i.moveTo(0,e/2),i.lineTo(t,e/2),i.stroke()}),or=(i,t,e)=>js(96,64,(n,s,a)=>{n.fillStyle=i,n.fillRect(0,0,s,a),e?(n.fillStyle=t,n.fillRect(0,a/3,s,a/3),n.fillStyle="#f6b40e",n.beginPath(),n.arc(s/2,a/2,6,0,Te*2),n.fill()):(n.fillStyle=t,n.fillRect(0,0,s*.5,a))});function gx(){return js(4,256,(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#24407a"),n.addColorStop(.45,"#4a7bc0"),n.addColorStop(.72,"#f2a76a"),n.addColorStop(.86,"#ffd28a"),n.addColorStop(1,"#ffe7b5"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function vx(i){const t=new _e;i.add(t);const e=new tt(new oe(170,24,16),new Kt({map:gx(),side:Xe,fog:!1}));t.add(e),i.fog=new qs("#e9c493",70,190),i.add(new Wc("#bcd4ff","#6b7a4a",.85));const n=new ks("#ffe2b0",1.5);n.position.set(-18,30,16),i.add(n);const s=new ks("#9fc2ff",.45);s.position.set(20,12,-14),i.add(s);const a=new tt(new An(150,40),wt("#6f9a52"));a.rotation.x=-Te/2,a.position.y=-.02,t.add(a);const r=new tt(new Tn(De*2+8,He*2+8),wt("#a7916a"));r.rotation.x=-Te/2,r.position.y=-.01,t.add(r);const o=new tt(new Tn(De*2,He*2),new Di({map:fx(),gradientMap:wt("#fff").gradientMap}));o.rotation.x=-Te/2,t.add(o);const c=px();new Kt({map:c,transparent:!0,side:we,depthWrite:!1,alphaTest:.05});const l=wt("#8d98aa"),u=(m,p,y,M,_,D,P)=>{const T=new tt(new qt(m,p,y),wt(M));return T.position.set(_,D,P),t.add(T),T},d=(m,p,y,M,_,D)=>{const P=c.clone();P.needsUpdate=!0,P.repeat.set(m/2.4,p/2.4);const T=new tt(new Tn(m,p),new Kt({map:P,transparent:!0,side:we,depthWrite:!1}));T.position.set(y,M,_),T.rotation.y=D,t.add(T)},h=De*2+.6;u(h,.9,.2,"#e8e4da",0,.45,-He-.1);for(let m=0;m<20;m++)u(2,.9,.22,m%2?"#75aadb":"#f4f1ea",-De+1+m*2,.45,-He-.1);d(h,3.6,0,.9+1.8,-He-.1,0),u(h,.55,.2,"#e8e4da",0,.275,He+.1);for(let m=0;m<20;m++)u(2,.55,.22,m%2?"#75aadb":"#f4f1ea",-De+1+m*2,.275,He+.1);for(const m of[-1,1]){const p=He-yn;for(const y of[-1,1])u(.2,.9,p,"#e8e4da",m*(De+.1),.45,y*(yn+p/2)),d(p,3.6,m*(De+.1),2.7,y*(yn+p/2),Te/2);u(.2,.9,.2,"#e8e4da",m*(De+.1),.45,0)}for(let m=-De;m<=De;m+=5){const p=new tt(new Yt(.07,.07,4.5,6),l);p.position.set(m,2.25,-He-.1),t.add(p)}for(const m of[-1,1])for(const p of[-He,-6,6,He]){const y=new tt(new Yt(.07,.07,4.5,6),l);y.position.set(m*(De+.1),2.25,p),t.add(y)}const f=[],g=mx();for(const m of[-1,1]){const p=new _e;p.position.x=m*De,t.add(p);for(const I of[-1,1]){const S=new tt(new Yt(.12,.12,Mn,10),wt("#ffffff"));S.position.set(0,Mn/2,I*yn),p.add(S);const x=new tt(new Yt(.06,.06,Mn,8),wt("#dfe6f0"));x.position.set(m*Jn,Mn/2,I*yn),p.add(x);const N=new tt(new Yt(.05,.05,Jn,8),wt("#dfe6f0"));N.rotation.z=Te/2,N.position.set(m*Jn/2,.05,I*yn),p.add(N)}const y=new tt(new Yt(.12,.12,yn*2+.24,10),wt("#ffffff"));y.rotation.x=Te/2,y.position.set(0,Mn,0),p.add(y);const M=new tt(new Yt(.05,.05,yn*2,8),wt("#dfe6f0"));M.rotation.x=Te/2,M.position.set(m*Jn,Mn,0),p.add(M);const _=new _e,D=(I,S,x,N)=>{const B=g.clone();return B.needsUpdate=!0,B.wrapS=B.wrapT=Pi,B.repeat.set(x,N),new tt(new Tn(I,S),new Kt({map:B,transparent:!0,side:we,depthWrite:!1,opacity:.8}))},P=D(yn*2,Mn,14,6);P.rotation.y=Te/2,P.position.set(m*Jn,Mn/2,0),_.add(P);const T=D(Jn,yn*2,6,14);T.rotation.x=Te/2,T.rotation.z=Te/2,T.position.set(m*Jn/2,Mn,0),_.add(T);for(const I of[-1,1]){const S=D(Jn,Mn,6,6);S.position.set(m*Jn/2,Mn/2,I*yn),_.add(S)}p.add(_),f.push({net:_,sx:m,pulse:0,base:p})}for(const m of[-1,1])for(const p of[-1,1]){const y=m*(De+7),M=p*(He+6),_=new tt(new Yt(.18,.28,13,6),wt("#5b6678"));_.position.set(y,6.5,M),t.add(_);const D=new tt(new qt(2.6,1.2,.5),new Kt({color:"#fff6d8"}));D.position.set(y,13.2,M),D.lookAt(0,8,0),t.add(D)}const v=xx(t);return _x(t),{root:t,nets:f,fans:v,pulseNet(m){const p=f.find(y=>y.sx===m);p&&(p.pulse=1)},setExcite(m){v.excite=m},update(m,p){for(const y of f){y.pulse=Math.max(0,y.pulse-m*1.4);const M=y.pulse;y.net.scale.set(1+.18*Math.sin(p*25)*M,1,1+.05*M),y.net.position.x=y.sx*.5*M*Math.abs(Math.sin(p*14))}v.update(m,p)},dispose(){i.remove(t),t.traverse(m=>{m.geometry&&m.geometry.dispose(),m.material&&m.material.dispose&&!m.material.isShared&&m.material.dispose()})}}}function xx(i){const t=new on(.28,.45,3,8),e=new oe(.26,8,6),n=[],s=(x,N,B,V,W,Q,G,rt=1,Y=.75)=>{for(let ct=0;ct<V;ct++){const xt=ct*rt,Mt=.55+ct*Y,Ut=x-W*xt,Z=N-Q*xt,C=new tt(new qt(W?1:B,Mt,Q?1:B),wt(ct%2?"#9aa3b2":"#aab2bf"));C.position.set(Ut,Mt/2,Z),i.add(C);const k=Math.floor(B/.95);for(let K=0;K<k;K++){const at=-B/2+.5+K*(B/k);n.push({x:Ut+(Q?at:0)+(Math.random()-.5)*.2,y:Mt,z:Z+(W?at:0)+(Math.random()-.5)*.2,ry:G})}}};s(0,-He-2.2,De*2+6,5,0,1,0),s(-De-4.8,0,He*2+2,3,1,0,Te/2,1,.75),s(De+4.8,0,He*2+2,3,-1,0,-Te/2,1,.75),s(0,He+1.9,De*2+6,1,0,-1,Te);const a=n.length,r=new Yi(t,new Di({gradientMap:wt("#fff").gradientMap}),a),o=new Yi(e,wt("#e3b48f"),a),c=["#75aadb","#f4f1ea","#75aadb","#c9382f","#1b3a8c","#f4f1ea","#2f8f5b","#f2c21b","#15161a","#75aadb"],l=["#f1c7a5","#e3b48f","#d39b74","#b97a50","#8a5a3c","#5e3b26"],u=new Zt,d=new Float32Array(a),h=new Float32Array(a);for(let x=0;x<a;x++)u.set(c[Math.floor(Math.random()*c.length)]),r.setColorAt(x,u),u.set(l[Math.floor(Math.random()*l.length)]),o.setColorAt(x,u),d[x]=Math.random()*10,h[x]=.5+Math.random()*.8;i.add(r,o);const f=new Tn(1.8,1.2,6,3),g=[or("#75aadb","#ffffff",!0),or("#c9382f","#f4f1ea",!1),or("#1b3a8c","#f2c21b",!1),or("#75aadb","#ffffff",!0)],v=[];for(let x=0;x<26;x++){const N=n[Math.floor(Math.random()*n.length)],B=new _e,V=new tt(new Yt(.03,.03,2.4,5),wt("#6b4a2a"));V.position.y=1.2,B.add(V);const W=new tt(f,new Kt({map:g[x%g.length],side:we}));W.position.set(.9,2,0),B.add(W),B.position.set(N.x,N.y+.6,N.z),B.rotation.y=N.ry,i.add(B),v.push({g:B,f:W,ph:Math.random()*6})}const m=new Cn(.28,.6,3),p=new Yi(m,new Kt,80),y=["#75aadb","#ffffff","#75aadb","#f6b40e"],M=new me,_=new Li,D=new mn,P=new O(1,1,1),T=new O;for(let x=0;x<80;x++){const N=-De+.4+x*((De*2-.8)/79);T.set(N,4.2-Math.sin(x%8/8*Te)*.5,-He-.2),D.set(Te,0,0),_.setFromEuler(D),M.compose(T,_,P),p.setMatrixAt(x,M),p.setColorAt(x,u.set(y[x%y.length]))}i.add(p);const I=new Ue,S={excite:.2,update(x,N){const B=S.excite;for(let V=0;V<a;V++){const W=n[V],Q=Math.max(0,Math.sin(N*(4+B*6)+d[V]))*(.05+B*.55)*h[V];I.position.set(W.x,W.y+.55+Q,W.z),I.rotation.set(0,W.ry,0),I.scale.set(1,1,1),I.updateMatrix(),r.setMatrixAt(V,I.matrix),I.position.y+=.62,I.updateMatrix(),o.setMatrixAt(V,I.matrix)}r.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0;for(const V of v)V.f.rotation.y=Math.sin(N*(3+B*4)+V.ph)*.35,V.g.rotation.z=Math.sin(N*(2+B*3)+V.ph)*.12*(.5+B)}};return S}function _x(i){const t=["#b9a68a","#c9b79d","#a79880","#d1c1a6","#9d8f7a","#c4a98c","#8f8574"],e=(f,g)=>f+Math.random()*(g-f),n=js(64,128,(f,g,v)=>{f.fillStyle="#fff",f.fillRect(0,0,g,v),f.fillStyle="rgba(50,70,110,.55)";for(let m=8;m<v-8;m+=20)for(let p=6;p<g-6;p+=18)f.fillRect(p,m,9,12)});for(let f=0;f<42;f++){const g=Te+(f/41-.5)*Te*1.5,v=e(78,105),m=e(12,38),p=e(7,13),y=e(7,12),M=new tt(new qt(p,m,y),new Di({color:t[f%t.length],map:n,gradientMap:wt("#fff").gradientMap}));M.material.map=n.clone(),M.material.map.needsUpdate=!0,M.material.map.wrapS=M.material.map.wrapT=Pi,M.material.map.repeat.set(Math.round(p/6),Math.round(m/9)),M.position.set(Math.cos(g)*v*1,m/2,Math.sin(g)*v-0),M.position.z=-Math.abs(M.position.z)-22,M.position.x=(f/41-.5)*190,M.rotation.y=e(-.1,.1),i.add(M)}const s=new _e,a=(f,g)=>{const v=new tt(new Yt(.25,.3,14,6),wt("#8d98aa"));v.position.set(f,7,g),s.add(v)};a(-2,-2),a(2,-2),a(-2,2),a(2,2);const r=new tt(new Yt(4.6,4.6,6,16),wt("#d8d3c6"));r.position.y=17,s.add(r);const o=new tt(new Cn(4.9,2.6,16),wt("#c9382f"));o.position.y=21.3,s.add(o),s.position.set(-46,0,-70),i.add(s);for(let f=0;f<3;f++){const g=new tt(new Yt(3.4,3.4,22+f*3,14),wt("#cfd4da"));g.position.set(52+f*7.5,11+f*1.5,-78),i.add(g);const v=new tt(new Cn(3.5,2.6,14),wt("#9aa3b2"));v.position.set(52+f*7.5,23+f*3,-78),i.add(v)}const c=new Yt(.3,.4,3,6),l=new Ir(2.2,0),u=new Yi(c,wt("#6b4a2a"),40),d=new Yi(l,wt("#3f8a4c"),40),h=new Ue;for(let f=0;f<40;f++){const g=f%2?1:-1,v=e(-70,70),m=g*e(30,50)+(g>0?6:-4);h.position.set(v,1.5,m),h.scale.set(1,e(.9,1.3),1),h.updateMatrix(),u.setMatrixAt(f,h.matrix),h.position.set(v,4.4,m),h.scale.setScalar(e(.9,1.5)),h.updateMatrix(),d.setMatrixAt(f,h.matrix)}i.add(u,d)}const yx=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new kn(i);return n.colorSpace=Fe,n})(),In=700;class Mx{constructor(t){this.scene=t,this.n=In,this.pos=new Float32Array(In*3),this.col=new Float32Array(In*3),this.size=new Float32Array(In),this.alpha=new Float32Array(In),this.vel=new Float32Array(In*3),this.life=new Float32Array(In),this.maxLife=new Float32Array(In).fill(1),this.grav=new Float32Array(In),this.s0=new Float32Array(In),this.cursor=0;const e=new qe;e.setAttribute("position",new Ke(this.pos,3)),e.setAttribute("color",new Ke(this.col,3)),e.setAttribute("size",new Ke(this.size,1)),e.setAttribute("alpha",new Ke(this.alpha,1)),this.uniforms={uScale:{value:600},uMap:{value:yx}},this.points=new pv(e,new ri({uniforms:this.uniforms,transparent:!0,depthWrite:!1,vertexColors:!0,vertexShader:`
        attribute float size; attribute float alpha; varying vec3 vC; varying float vA; uniform float uScale;
        void main() {
          vC = color; vA = alpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uScale / max(0.1, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D uMap; varying vec3 vC; varying float vA;
        void main() { vec4 t = texture2D(uMap, gl_PointCoord); gl_FragColor = vec4(vC, vA * t.a); }`})),this.points.frustumCulled=!1,t.add(this.points),this.rings=[];const n=new oi(.86,1,48);for(let s=0;s<8;s++){const a=new tt(n,new Kt({color:"#fff",transparent:!0,opacity:0,side:we,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.visible=!1,t.add(a),this.rings.push({m:a,t:0,dur:1,r:1,active:!1})}this.trailColor=new Zt("#fff"),this.trailOn=0}setScale(t,e){this.uniforms.uScale.value=t*Math.min(devicePixelRatio||1,2)/(2*Math.tan(mr.degToRad(e)/2))}emit(t,e,n,s,a,r,o,c,l,u=-9,d=1){const h=this.cursor;this.cursor=(this.cursor+1)%this.n;const f=new Zt(o);this.pos[h*3]=t,this.pos[h*3+1]=e,this.pos[h*3+2]=n,this.vel[h*3]=s,this.vel[h*3+1]=a,this.vel[h*3+2]=r,this.col[h*3]=f.r,this.col[h*3+1]=f.g,this.col[h*3+2]=f.b,this.s0[h]=c,this.size[h]=c,this.life[h]=l,this.maxLife[h]=l,this.grav[h]=u,this.alpha[h]=d}burst(t,e,n,s,a=12,r=4,o=.5,c=.6,l=-9){for(let u=0;u<a;u++){const d=Math.random()*Math.PI*2,h=Math.random(),f=r*(.4+h*.8);this.emit(t,e,n,Math.cos(d)*f,(.3+Math.random())*r*.5,Math.sin(d)*f,s,o*(.6+Math.random()*.8),c*(.6+Math.random()*.6),l)}}dust(t,e,n=0,s=0,a=6){for(let r=0;r<a;r++)this.emit(t+(Math.random()-.5)*.6,.12,e+(Math.random()-.5)*.6,n*2+(Math.random()-.5)*1.6,.4+Math.random()*.9,s*2+(Math.random()-.5)*1.6,r%2?"#d9c7a0":"#b8a37a",.9+Math.random()*.7,.5+Math.random()*.3,-1.5,.7)}confetti(t,e,n=140){const s=["#75aadb","#ffffff","#f6b40e","#9fd0ff","#ffffff","#ffd45e"];for(let a=0;a<n;a++){const r=Math.random()*Math.PI*2,o=3+Math.random()*8;this.emit(t,1.2,e,Math.cos(r)*o,6+Math.random()*9,Math.sin(r)*o,s[a%s.length],.22+Math.random()*.2,1.8+Math.random()*1.2,-9)}}ring(t,e,n,s,a=.6,r=.1){const o=this.rings.find(c=>!c.active)||this.rings[0];o.active=!0,o.t=0,o.dur=a,o.r=s,o.m.material.color.set(n),o.m.position.set(t,r,e),o.m.visible=!0}trailStyle(t,e){this.trailColor.set(t),this.trailOn=e}update(t,e){for(let s=0;s<this.n;s++){if(this.life[s]<=0){this.alpha[s]=0;continue}this.life[s]-=t;const a=Math.max(0,this.life[s]/this.maxLife[s]);this.vel[s*3+1]+=this.grav[s]*t,this.pos[s*3]+=this.vel[s*3]*t,this.pos[s*3+1]=Math.max(.05,this.pos[s*3+1]+this.vel[s*3+1]*t),this.pos[s*3+2]+=this.vel[s*3+2]*t,this.alpha[s]=Math.min(1,a*2),this.size[s]=this.s0[s]*(.4+.6*a)}for(const s of this.rings){if(!s.active)continue;s.t+=t;const a=s.t/s.dur;if(a>=1){s.active=!1,s.m.visible=!1;continue}const r=1-(1-a)*(1-a);s.m.scale.setScalar(Math.max(.01,s.r*r)),s.m.material.opacity=(1-a)*.85}e&&this.trailOn>0&&this.emit(e.x,e.y,e.z,0,0,0,this.trailColor,.62*this.trailOn,.4,0,.85);const n=this.points.geometry;n.attributes.position.needsUpdate=!0,n.attributes.size.needsUpdate=!0,n.attributes.alpha.needsUpdate=!0,n.attributes.color.needsUpdate=!0}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose();for(const t of this.rings)this.scene.remove(t.m),t.m.material.dispose();this.rings[0].m.geometry.dispose()}}const Zn=Math.PI,bx=1.25,Sx=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);return e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new kn(i)})(),wx=new Kt({map:Sx,transparent:!0,depthWrite:!1}),Ex=new An(1,20),Iu=i=>{const t=new tt(Ex,wx.clone());return t.rotation.x=-Zn/2,t.position.y=.03,t.scale.setScalar(i),t};function Tx(i,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=new kn(e);n.colorSpace=Fe;const s=()=>{const a=e.getContext("2d");a.clearRect(0,0,256,64),a.fillStyle="rgba(11,20,36,.82)",a.beginPath(),a.roundRect(4,8,248,48,22),a.fill(),a.fillStyle=t,a.beginPath(),a.arc(30,32,10,0,Zn*2),a.fill(),a.fillStyle="#fff",a.font="30px Anton, Impact, sans-serif",a.textBaseline="middle",a.fillText(i.toUpperCase(),52,34,190),n.needsUpdate=!0};return s(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(s),n}const Dh=i=>[1,3,5].map(t=>parseInt(i.slice(t,t+2),16)),Ih=(i,t)=>{const e=Dh(i),n=Dh(t);return Math.hypot(e[0]-n[0],e[1]-n[1],e[2]-n[2])};function Ax(i){const t=Ie[i]||Ie[0];let e=1,n=-1;return Ie.forEach((s,a)=>{if(a===i)return;const r=Math.min(Ih(s.c1,t.c1),Ih(s.c1,t.c2))+(s.pattern==="solid"||s.pattern==="stripes10"?40:0);r>n&&(n=r,e=a)}),e}function Mo(i,t){const e=Object.assign({},i);return e.of=Ai("of","kit"),e.kt=t,e.pr=Ai("pr",""),e.ex===Ai("ex","shout")&&(e.ex=Ai("ex","sing")),e}function wc(i,t=[]){const e=qc.filter(s=>!t.includes(s.id)),n=[];for(;n.length<i&&e.length;)n.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return n}class Cx{constructor(t,e,n,s){this.p=e,this.root=new _e,this.avatar=Bs(n),this.avatar.userData.raise[0]=this.avatar.userData.raise[1]=0,this.avatar.scale.setScalar(bx),this.root.add(this.avatar),this.shadow=Iu(.85),this.root.add(this.shadow),this.shadow.scale.setScalar(.95);const a=new kc(new Lr({map:Tx(e.name,s),transparent:!0,depthWrite:!1,depthTest:!1}));a.scale.set(2.5,.62,1),a.position.y=3.35,a.renderOrder=10,this.label=a,this.root.add(a),this.arrow=new tt(new Cn(.34,.6,4),new Kt({color:"#f6b40e",depthTest:!1})),this.arrow.rotation.x=Zn,this.arrow.position.y=3.9,this.arrow.renderOrder=11,this.arrow.visible=!1,this.root.add(this.arrow),this.ring=new tt(new oi(.95,1.1,32),new Kt({color:"#f6b40e",transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-Zn/2,this.ring.position.y=.05,this.ring.visible=!1,this.root.add(this.ring),this.charge=new tt(new oi(1.2,1.4,40),new Kt({color:"#fff",transparent:!0,opacity:.9,depthWrite:!1})),this.charge.rotation.x=-Zn/2,this.charge.position.y=.06,this.charge.visible=!1,this.root.add(this.charge),this.stars=new _e;for(let r=0;r<3;r++){const o=new tt(new Gc(.17),new Kt({color:"#ffe066"}));this.stars.add(o)}this.stars.position.y=2.75,this.stars.visible=!1,this.root.add(this.stars),this.aura=new tt(new oe(1.3,14,10),new Kt({color:"#75aadb",transparent:!0,opacity:0,depthWrite:!1})),this.aura.position.y=1.2,this.root.add(this.aura),t.add(this.root),this.scene=t,this.smoothSpeed=0}update(t,e,n,{controlled:s,goalPhase:a}){const r=this.root,o=this.avatar,c=o.userData;r.position.set(t.x,0,t.z),o.rotation.y=t.face;const l=Math.hypot(t.vx,t.vz)/7.6;if(this.smoothSpeed+=(l-this.smoothSpeed)*Math.min(1,n*14),wa(o,e+t.id*.7,Math.min(1.6,this.smoothSpeed*(t.boost>0?1.1:1))*(t.stun>0?.3:1)),o.position.y=0,c.body.rotation.z=0,t.kickT>0){const u=Math.sin((1-t.kickT/.32)*Zn);c.legs[1].rotation.x=-1.6*u,c.legs[0].rotation.x=.5*u,c.body.rotation.x=.2*u,c.arms[0].rotation.x=.9*u,c.arms[1].rotation.x=-.6*u}if(t.charging&&(c.body.rotation.x=-.18,c.body.position.y=-.08,c.legs[1].rotation.x=.7,c.legs[0].rotation.x=-.25),t.tackleT>0?(c.body.rotation.x=-1.2,c.body.position.y=-.28,c.legs[0].rotation.x=-1.5,c.legs[1].rotation.x=-1.35,c.arms[0].rotation.x=.9,c.arms[1].rotation.x=.9):t.recover>0&&(c.body.rotation.x=.4),t.stun>0&&(c.body.rotation.z=Math.sin(e*22)*.22,c.body.rotation.x=.25,c.arms[0].rotation.x=-.4,c.arms[1].rotation.x=-.4),t.celebrate>0){const u=Math.abs(Math.sin(e*9+t.id))*.55;o.position.y=u,c.arms[0].rotation.x=c.arms[1].rotation.x=-2.7+Math.sin(e*14+t.id)*.25,c.arms[0].rotation.z=-.35,c.arms[1].rotation.z=.35,c.legs[0].rotation.x=Math.sin(e*9)*.4,c.legs[1].rotation.x=-Math.sin(e*9)*.4}else a&&t.celebrate<=0&&t.stun<=0?(c.body.rotation.x=.35,c.head.rotation.x=.4):c.head.rotation.x=0;if(this.arrow.visible=!!s,this.ring.visible=!!s,s&&(this.arrow.position.y=3.9+Math.sin(e*6)*.15,this.arrow.rotation.y=e*3),this.label.visible=!s||!0,this.charge.visible=t.charging&&t.charge>.05,this.charge.visible){const u=t.charge;this.charge.scale.setScalar(.55+u*.9),this.charge.material.color.setHSL(.1-.1*u,1,.55+.2*(1-u))}this.aura.material.opacity=t.charging&&t.charge>=.3?.25+.15*Math.sin(e*30):t.boost>0?.28:t.magnet>0?.2:0,this.aura.material.color.set(t.boost>0?"#75aadb":t.magnet>0?"#b57cf0":"#ff8a2e"),this.stars.visible=t.stun>0,this.stars.visible&&this.stars.children.forEach((u,d)=>{const h=e*6+d*(Zn*2/3);u.position.set(Math.cos(h)*.5,Math.sin(e*5+d)*.08,Math.sin(h)*.5),u.rotation.y=e*4})}dispose(){Ki(this.avatar),this.scene.remove(this.root),this.root.traverse(t=>{t.material&&t.material.map&&t.material.map.isCanvasTexture&&t.isSprite&&t.material.map.dispose()})}}class Rx{constructor(t){const e=document.createElement("canvas");e.width=128,e.height=64;const n=e.getContext("2d");n.fillStyle="#f7f5ee",n.fillRect(0,0,128,64),n.fillStyle="#1c2230";for(const[r,o]of[[16,16],[48,44],[80,14],[112,40],[32,56],[96,58],[64,30],[4,40]])n.beginPath(),n.arc(r,o,8,0,Zn*2),n.fill();const s=new kn(e);s.colorSpace=Fe,this.mesh=new tt(new oe(si.R*1.08,20,14),new Di({map:s,gradientMap:wt("#fff").gradientMap}));const a=new tt(this.mesh.geometry,new Kt({color:856347,side:Xe}));a.scale.setScalar(1.1),this.mesh.add(a),this.group=new _e,this.group.add(this.mesh),this.shadow=Iu(.5),this.group.add(this.shadow),t.add(this.group),this.scene=t,this.q=new Li,this.axis=new O}update(t,e){this.mesh.position.set(t.x,t.y,t.z),this.shadow.position.set(t.x,.04,t.z);const n=Math.max(0,t.y-si.R);this.shadow.scale.setScalar(.5+Math.min(.5,n*.15)),this.shadow.material.opacity=Math.max(.25,1-n*.35);const s=Math.hypot(t.vx,t.vz);s>.05&&(this.axis.set(t.vz,0,-t.vx).normalize(),this.q.setFromAxisAngle(this.axis,s*e/si.R),this.mesh.quaternion.premultiply(this.q))}dispose(){this.scene.remove(this.group),this.mesh.geometry.dispose(),this.mesh.material.map.dispose()}}class Px{constructor(t){this.mesh=new tt(new oi(.7,.9,32),new Kt({color:"#75aadb",transparent:!0,opacity:.9,depthWrite:!1})),this.mesh.rotation.x=-Zn/2,this.mesh.position.y=.07,this.mesh.visible=!1,t.add(this.mesh),this.scene=t}update(t,e){this.mesh.visible=!!t,t&&(this.mesh.position.x=t.x,this.mesh.position.z=t.z,this.mesh.scale.setScalar(1+.15*Math.sin(e*14)),this.mesh.material.opacity=Math.min(1,t.t*3))}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}let ne=null,bn=null,la=null,Mi=null,Ts=!1;try{Ts=localStorage.getItem("potrero-mute")==="1"}catch{}const de={get muted(){return Ts},setMuted(i){Ts=!!i;try{localStorage.setItem("potrero-mute",Ts?"1":"0")}catch{}bn&&(bn.gain.value=Ts?0:.8)},unlock(){if(!ne){const i=window.AudioContext||window.webkitAudioContext;if(!i)return;ne=new i,bn=ne.createGain(),bn.gain.value=Ts?0:.8;const t=ne.createDynamicsCompressor();bn.connect(t),t.connect(ne.destination),la=ne.createBuffer(1,ne.sampleRate*2,ne.sampleRate);const e=la.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1}ne.state==="suspended"&&ne.resume()},_tone(i,t,e,n,s,a=0){if(!ne)return;const r=ne.currentTime+a,o=ne.createOscillator(),c=ne.createGain();o.type=i,o.frequency.setValueAtTime(t,r),e!==t&&o.frequency.exponentialRampToValueAtTime(Math.max(20,e),r+n),c.gain.setValueAtTime(s,r),c.gain.exponentialRampToValueAtTime(8e-4,r+n),o.connect(c),c.connect(bn),o.start(r),o.stop(r+n+.02)},_noise(i,t,e,n=1,s="lowpass",a=0){if(!ne)return;const r=ne.currentTime+a,o=ne.createBufferSource();o.buffer=la;const c=ne.createBiquadFilter();c.type=s,c.frequency.value=e,c.Q.value=n;const l=ne.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(8e-4,r+i),o.connect(c),c.connect(l),l.connect(bn),o.start(r,Math.random()),o.stop(r+i+.02)},kick(i=0){this._tone("sine",190+i*40,55,.12,.5+i*.3),this._noise(.06,.25+i*.2,1800,1,"bandpass")},pass(){this._tone("sine",230,90,.08,.32),this._noise(.04,.12,2400,1,"bandpass")},through(){this._tone("sine",260,80,.1,.4),this._tone("triangle",520,880,.3,.12,.03),this._noise(.12,.1,3200,2,"bandpass")},power(){this._tone("sawtooth",120,60,.25,.3),this._tone("sine",150,40,.3,.7),this._noise(.2,.5,2200,1,"bandpass")},thud(i=8){this._tone("sine",120,50,.1,Math.min(.5,i*.03))},post(){this._tone("triangle",1100,900,.5,.35),this._tone("square",1650,1500,.25,.08)},tackle(i){this._noise(.18,i?.5:.2,i?900:1500,1,"lowpass"),i&&this._tone("sine",140,60,.15,.4)},block(){this._tone("sine",100,45,.2,.6),this._noise(.12,.3,700)},switch(){this._tone("square",880,880,.04,.05)},receive(){this._tone("sine",420,300,.05,.16)},tick(){this._tone("square",740,740,.07,.1)},whistle(i=!1){if(!ne)return;const t=ne.currentTime,e=i?.9:.35,n=ne.createOscillator(),s=ne.createGain(),a=ne.createOscillator(),r=ne.createGain();n.type="square",n.frequency.value=2900,a.frequency.value=28,r.gain.value=90,a.connect(r),r.connect(n.frequency),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.16,t+.02),s.gain.setValueAtTime(.16,t+e-.05),s.gain.exponentialRampToValueAtTime(8e-4,t+e),n.connect(s),s.connect(bn),n.start(t),a.start(t),n.stop(t+e+.02),a.stop(t+e+.02)},bubusela(i=.7){if(!ne)return;const t=ne.currentTime;for(const e of[233,466,699]){const n=ne.createOscillator(),s=ne.createGain();n.type="sawtooth",n.frequency.value=e,s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.12,t+.04),s.gain.setValueAtTime(.12,t+i-.1),s.gain.exponentialRampToValueAtTime(8e-4,t+i),n.connect(s),s.connect(bn),n.start(t),n.stop(t+i+.02)}},cheer(i=2.4){if(!ne)return;const t=ne.currentTime,e=ne.createBufferSource();e.buffer=la,e.loop=!0;const n=ne.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=.6;const s=ne.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.5,t+.25),s.gain.exponentialRampToValueAtTime(.2,t+i*.6),s.gain.exponentialRampToValueAtTime(8e-4,t+i),n.frequency.setValueAtTime(700,t),n.frequency.linearRampToValueAtTime(1300,t+.5),n.frequency.linearRampToValueAtTime(800,t+i),e.connect(n),n.connect(s),s.connect(bn),e.start(t),e.stop(t+i+.05),this.bubusela(1)},aww(){this._tone("sawtooth",380,200,.7,.07),this._noise(.6,.12,600)},crowdStart(){if(!ne||Mi)return;const i=ne.createBufferSource();i.buffer=la,i.loop=!0;const t=ne.createBiquadFilter();t.type="bandpass",t.frequency.value=520,t.Q.value=.5;const e=ne.createGain();e.gain.value=1e-4,i.connect(t),t.connect(e),e.connect(bn),i.start(),Mi={s:i,g:e,f:t}},crowdLevel(i){!ne||!Mi||(Mi.g.gain.setTargetAtTime(.02+i*.1,ne.currentTime,.4),Mi.f.frequency.setTargetAtTime(480+i*500,ne.currentTime,.4))},crowdStop(){if(Mi){try{Mi.s.stop()}catch{}Mi=null}}},{HL:ki,HW:Lx}=si,Uh=Math.PI,bo=1/60,Ss=42,Dx=[["Tranqui",.3],["Normal",.6],["Bravo",.92]],Ix=[2,3,5];function Ux({onExit:i}){const t=new Pr;t.background=new Zt("#e9c493");const e=new Je(Ss,innerWidth/innerHeight,.5,400),n=vx(t),s=new Mx(t),a=new Rx(t),r=new Px(t),o=new Map;let c=null,l=[],u="setup",d=0,h=0,f=1,g=0,v=0,m=0,p={x:0,z:0},y=0,M=0,_=Ss,D=0,P=0,T=!1,I=[],S="",x="",N=-1;const B={control:"team",power:"bubusela",diff:.6,minutes:3};let V=[0,1];document.getElementById("gl");const W=new Set,Q={x:0,y:0};let G=!1;const rt=matchMedia("(pointer: coarse)").matches,Y=()=>innerWidth/innerHeight<.85,ct=R=>{c&&c.setInput(0,R)},xt=R=>{u==="playing"&&ct({[R]:!0})},Mt=R=>{if(/INPUT|TEXTAREA|SELECT/.test(R.target&&R.target.tagName))return;const A=R.key.toLowerCase();if(A==="escape"){u==="playing"&&(R.preventDefault(),at());return}if(u==="playing"){if(de.unlock(),["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(A)){W.add(A),R.preventDefault();return}if(R.repeat){A===" "&&R.preventDefault();return}A==="j"?xt("pass"):A==="k"?xt("through"):A==="u"||A==="i"?xt("tackle"):A===" "?(R.preventDefault(),xt("power")):A==="l"?W.add("l"):A==="m"&&(de.setMuted(!de.muted),Dt())}},Ut=R=>W.delete(R.key.toLowerCase()),Z=()=>{W.clear(),Q.x=Q.y=0,G=!1};addEventListener("keydown",Mt),addEventListener("keyup",Ut),addEventListener("blur",Z);function C(){let R=0,A=0;(W.has("a")||W.has("arrowleft"))&&(R-=1),(W.has("d")||W.has("arrowright"))&&(R+=1),(W.has("w")||W.has("arrowup"))&&(A-=1),(W.has("s")||W.has("arrowdown"))&&(A+=1);const $=Math.hypot(R,A);$>1&&(R/=$,A/=$),(Q.x||Q.y)&&(R=Q.x,A=-Q.y),Y()?ct({mx:-A,mz:R,shoot:W.has("l")||G}):ct({mx:R,mz:A,shoot:W.has("l")||G})}function k(){for(const mt of l)mt.dispose();l=[];const R=he.profile.look.kt,A=Ax(R);V=[R,A];const $=wc(2),ht=wc(3,$.map(mt=>mt.id)),st=[];return st.push({team:0,slot:0,name:he.profile.name||"Vos",look:Mo(he.profile.look,R)}),$.forEach(mt=>st.push({team:0,slot:B.control==="team"?0:null,name:mt.name,look:Mo(mt.look,R)})),ht.forEach(mt=>st.push({team:1,slot:null,name:mt.name,look:Mo(mt.look,A)})),st}function K(){de.unlock(),de.crowdStart();const R=k();c=new dx({duration:B.minutes*60,difficulty:B.diff,players:R.map(A=>({team:A.team,slot:A.slot,name:A.name,power:A.slot===0?B.power:void 0}))}),l=c.players.map((A,$)=>new Cx(t,A,R[$].look,Ie[V[A.team]].c1==="#f7f7f4"?Ie[V[A.team]].c2:Ie[V[A.team]].c1)),o.forEach(A=>{t.remove(A)}),o.clear(),d=0,h=0,g=0,m=0,T=!1,P=0,S=x="",N=-1,y=0,_=Ss,u="playing",H(),Nt("Saque inicial",1.6)}function at(){return u!=="playing"?void 0:(u="paused",Z(),ii(E("div",null,E("header",{class:"dlg-head"},E("h2",{text:"Pausa"})),E("div",{class:"fb-keys"},Tt()),E("footer",null,E("button",{type:"button",class:"btn ghost",text:"Salir del partido",onclick:()=>{u="over",ze(),vt()}}),E("button",{type:"button",class:"btn primary",text:"Seguir",onclick:()=>ze()}))),{onClose:()=>{u==="paused"&&(u="playing")}}))}let yt=!1;function vt(){yt||i()}function Tt(){return E("dl",{class:"keylist"},[["WASD / flechas","Moverte"],["J","Pase corto (sin pelota: cambiás de jugador o pedís el pase)"],["K","Filtrado de tres dedos: la pelota se dobla y cae adelante del compañero"],["L","Tiro al arco. Mantené apretado para el tiro potente"],["U","Barrida para sacarle la pelota al rival"],["Espacio","Tu poder (se carga jugando)"],["M","Sonido"]].flatMap(([A,$])=>[E("dt",null,E("kbd",{text:A})),E("dd",{text:$})]))}function $t(){const R=E("div",{class:"fb-setup"}),A=()=>{R.textContent="";const ht=(st,mt,pt,St,F)=>E("button",{type:"button",class:"fb-card","aria-pressed":String(pt),disabled:F,onclick:St},E("strong",{text:st}),E("span",{text:mt}));R.append(E("header",{class:"dlg-head"},E("h2",{text:"La Cancha · 3 vs 3"}),E("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>ze()})),E("p",{class:"lead",text:"Cancha de potrero cerrada con alambrado: sin laterales ni córners. Gana el que meta más goles; si empatan, gol de oro."}),E("span",{class:"lab",text:"¿Cómo jugás?"}),E("div",{class:"fb-cards"},ht("Mi equipo","Manejás a los tres. Cambiás solo al más cercano a la pelota o con J.",B.control==="team",()=>{B.control="team",A()}),ht("Un jugador","Sos solo tu personaje, como en clubes pro. Tus dos compañeros son bots por ahora.",B.control==="pro",()=>{B.control="pro",A()}),ht("Online con amigos","Hasta 6 personas, cada una con su personaje. Necesita un servidor: es el próximo paso.",!1,null,!0)),E("span",{class:"lab",text:"Tu poder"}),E("div",{class:"fb-cards four"},bc.map(st=>{const mt=Ds[st];return E("button",{type:"button",class:"fb-card",style:{"--c":mt.color},"aria-pressed":String(B.power===st),onclick:()=>{B.power=st,A()}},E("strong",{text:mt.name}),E("span",{text:mt.desc}))})),E("div",{class:"fb-opts"},E("div",null,E("span",{class:"lab",text:"Rivales"}),E("div",{class:"row"},Dx.map(([st,mt])=>E("button",{type:"button",class:"chip","aria-pressed":String(B.diff===mt),text:st,onclick:()=>{B.diff=mt,A()}})))),E("div",null,E("span",{class:"lab",text:"Duración"}),E("div",{class:"row"},Ix.map(st=>E("button",{type:"button",class:"chip","aria-pressed":String(B.minutes===st),text:st+" min",onclick:()=>{B.minutes=st,A()}}))))),!rt&&E("details",{class:"fb-keys"},E("summary",{text:"Controles"}),Tt()),E("footer",null,E("button",{type:"button",class:"btn ghost",text:"Volver al mundo",onclick:()=>ze()}),E("button",{type:"button",class:"btn primary",text:"¡A jugar!",onclick:()=>{$=!0,ze(),K()}})))};let $=!1;A(),ii(R,{cls:"wide",onClose:()=>{$||vt()}})}let Xt=null,lt={};function H(){ni();const R=$=>E("i",{class:"fb-dot",style:{background:$}}),A=$=>Ie[V[$]];lt.scoreA=E("b",{text:"0"}),lt.scoreB=E("b",{text:"0"}),lt.time=E("span",{class:"fb-time",text:"0:00"}),lt.banner=E("div",{class:"fb-banner",hidden:!0}),lt.pop=E("div",{class:"fb-pops"}),lt.meterFill=E("i"),lt.meterName=E("span"),lt.meterKey=E("kbd",{text:rt?"PODER":"Espacio"}),lt.meter=E("div",{class:"fb-meter"},E("div",{class:"row"},lt.meterName,lt.meterKey),E("div",{class:"bar"},lt.meterFill)),lt.chargeFill=E("i"),lt.charge=E("div",{class:"fb-charge",hidden:!0},E("div",{class:"bar"},lt.chargeFill)),lt.mute=E("button",{type:"button",class:"btn ghost sm","aria-label":"Sonido",onclick:()=>{de.unlock(),de.setMuted(!de.muted),Dt()}}),lt.pause=E("button",{type:"button",class:"btn ghost sm",text:"Pausa",onclick:()=>at()}),lt.who=E("div",{class:"fb-who"}),Xt=E("div",{class:"fb-hud"},E("div",{class:"fb-score"},E("div",{class:"tm"},R(A(0).c1),E("span",{text:A(0).name})),lt.scoreA,lt.time,lt.scoreB,E("div",{class:"tm r"},E("span",{text:A(1).name}),R(A(1).c1))),E("div",{class:"fb-top"},lt.mute,lt.pause),lt.banner,lt.pop,lt.who,lt.charge,lt.meter,!rt&&E("p",{class:"fb-hint"},E("kbd",{text:"J"})," pase  ",E("kbd",{text:"K"})," filtrado  ",E("kbd",{text:"L"})," tiro (mantené: potente)  ",E("kbd",{text:"U"})," barrida  ",E("kbd",{text:"Espacio"})," poder"),rt&&Pt()),Ys().append(Xt),Dt()}function Dt(){lt.mute&&(lt.mute.textContent=de.muted?"🔇":"🔊")}function Pt(){const R=E("i",{class:"knob"}),A=E("div",{class:"joy","aria-hidden":"true"},R);let $=null;const ht=48,st=St=>{const F=A.getBoundingClientRect();let gt=St.clientX-(F.left+F.width/2),U=St.clientY-(F.top+F.height/2);const z=Math.hypot(gt,U);z>ht&&(gt=gt/z*ht,U=U/z*ht),R.style.transform=`translate(${gt}px, ${U}px)`,Q.x=gt/ht,Q.y=-U/ht},mt=()=>{$=null,Q.x=Q.y=0,R.style.transform=""};A.addEventListener("pointerdown",St=>{$=St.pointerId,A.setPointerCapture(St.pointerId),st(St)}),A.addEventListener("pointermove",St=>{St.pointerId===$&&st(St)}),A.addEventListener("pointerup",mt),A.addEventListener("pointercancel",mt);const pt=(St,F,gt,U)=>{const z=E("button",{type:"button",class:"fb-btn "+St},F);z.addEventListener("pointerdown",it=>{it.preventDefault(),z.setPointerCapture(it.pointerId),de.unlock(),gt(),z.classList.add("on")});const j=()=>{U&&U(),z.classList.remove("on")};return z.addEventListener("pointerup",j),z.addEventListener("pointercancel",j),z};return E("div",{class:"fb-touch"},A,E("div",{class:"fb-btns"},pt("shoot","TIRO",()=>{G=!0},()=>{G=!1}),pt("pass","PASE",()=>xt("pass")),pt("thru","FILTRADO",()=>xt("through")),pt("tackle","BARRIDA",()=>xt("tackle")),pt("power","PODER",()=>xt("power"))))}let Ot=0;function Nt(R,A=1.4,$=""){lt.banner&&(lt.banner.textContent=R,lt.banner.className="fb-banner "+$,lt.banner.hidden=!1,lt.banner.style.animation="none",lt.banner.offsetWidth,lt.banner.style.animation="",Ot=A)}function Qt(R,A,$,ht,st="#fff"){if(!lt.pop)return;const mt=E("span",{class:"fb-pop",text:R,style:{color:st}});lt.pop.append(mt),I.push({n:mt,x:A,y:$,z:ht,t:1.2})}const zt=new O;function L(R){for(let A=I.length-1;A>=0;A--){const $=I[A];if($.t-=R,$.y+=R*1.2,$.t<=0){$.n.remove(),I.splice(A,1);continue}zt.set($.x,$.y,$.z).project(e),$.n.style.transform=`translate(-50%,-50%) translate(${(zt.x*.5+.5)*innerWidth}px, ${(-zt.y*.5+.5)*innerHeight}px)`,$.n.style.opacity=Math.min(1,$.t*2.2)}}const b=R=>c.players[R]?c.players[R].name:"";function J(R){const A=c.ball;switch(R.type){case"kick":R.kind==="pass"?de.pass():R.kind==="through"?(de.through(),h=.45,f=.5,Qt("¡Tres dedos!",A.x,2.2,A.z,"#9fd0ff")):R.kind==="power"?(de.kick(1),de.power(),g=Math.max(g,.5),s.burst(A.x,.6,A.z,"#ff9a3c",16,6,.6,.5,-6),R.power>.6&&Qt("¡Cañonazo!",A.x,2.4,A.z,"#ffb870")):(de.kick(.3),s.dust(A.x,A.z,0,0,3));break;case"receive":de.receive();break;case"switch":R.slot===0&&de.switch();break;case"call":Qt("¡Pasala!",c.players[R.id].x,3.8,c.players[R.id].z,"#f6b40e");break;case"tackle":de.tackle(R.hit),s.dust(R.x,R.z,0,0,R.hit?10:4),R.hit&&(g=Math.max(g,.2)),R.blocked&&Qt("¡No pasa!",R.x,2.6,R.z,"#9fb0cc");break;case"block":de.block(),s.burst(R.x,1.2,R.z,"#fff",10,5,.5,.4),g=Math.max(g,R.v>30?.6:.25);break;case"post":de.post(),s.burst(R.x,1.4,R.z,"#fff",12,4,.4,.5),g=Math.max(g,.3),Qt("¡AL PALO!",R.x,3,R.z,"#ffe066");break;case"bar":de.post(),s.burst(R.x,2.5,R.z,"#fff",12,4,.4,.5),g=Math.max(g,.3),Qt("¡AL TRAVESAÑO!",R.x,3.4,R.z,"#ffe066");break;case"wall":de.thud(R.v);break;case"bounce":de.thud(R.v*.6),s.dust(R.x,R.z,0,0,2);break;case"power":{de.power();const $=Ds[R.power];R.power==="bubusela"?(de.bubusela(.8),s.ring(R.x,R.z,$.color,7.5,.7),s.ring(R.x,R.z,"#fff",5,.5),s.burst(R.x,1.3,R.z,$.color,24,7,.7,.7,-2),g=Math.max(g,.5),Qt("¡BUBUSELAZO!",R.x,3.6,R.z,$.color)):R.power==="pique"?(s.ring(R.x,R.z,$.color,2.6,.5),s.burst(R.x,.4,R.z,$.color,16,5,.6,.6,-2),Qt("¡Pique!",R.x,3.6,R.z,$.color)):R.power==="iman"?(s.ring(R.x,R.z,$.color,9,.8),Qt("¡Pelota pegada!",R.x,3.6,R.z,$.color)):R.power==="alambrado"&&(s.burst(R.x,.4,R.z,"#cdd7e6",20,4,.5,.6,-3),Qt("¡Alambrado!",R.x,3.6,R.z,"#cdd7e6"),g=Math.max(g,.2));break}case"kickoff":m=0,Nt(R.team===0?"Saca tu equipo":"Saca el rival",1.6),de.whistle(!1);break;case"whistle":Nt("¡Dale!",.8,"go"),de.whistle(!1);break;case"goal":{const $=R.team===0;de.whistle(!0),de.cheer($?3:1.6),$||de.aww(),g=1,h=1.1,f=.33,m=3.4,p={x:R.x,z:R.z},s.confetti(R.x>0?ki-2:-ki+2,R.z,$?200:70),s.ring(R.x,R.z,"#fff",6,.9,.6),n.pulseNet(R.x>0?1:-1),n.setExcite(1),Nt($?"¡GOOOL!":"Gol del rival",3.2,$?"goal":"foe"),R.scorer!=null&&Qt(b(R.scorer),c.players[R.scorer].x,4.6,c.players[R.scorer].z,"#ffd45e"),S="";break}case"overtime":Nt("¡Tiempo extra! Gol de oro",2.2,"goal"),de.whistle(!1);break;case"end":P=1.4;break}}function ut(){T=!0,u="over",de.whistle(!0);const R=c.winner,A=c.score[0],$=c.score[1],st=(R===0?60:R===-1?35:25)+Math.min(30,A*6);let mt=null;try{mt=he.addXp(st)}catch(gt){console.warn(gt)}const pt=R===0?"¡Ganaste!":R===-1?"Empate":"Perdiste",St=c.stats,F=(gt,U,z)=>E("tr",null,E("td",{text:String(U)}),E("th",{text:gt}),E("td",{text:String(z)}));ii(E("div",{class:"fb-result"},E("header",{class:"dlg-head"},E("h2",{text:pt})),E("p",{class:"fb-final",text:`${A}  –  ${$}`}),E("table",null,F("Tiros",St[0].shots,St[1].shots),F("Pases",St[0].passes,St[1].passes),F("Barridas ganadas",St[0].tackles,St[1].tackles),F("Poderes",St[0].powers,St[1].powers)),E("p",{class:"lead",text:`+${st} XP${mt&&mt.chests?` · ¡Subiste de nivel! ${mt.chests===1?"Ganaste un cofre.":`Ganaste ${mt.chests} cofres.`}`:""}`}),E("footer",null,E("button",{type:"button",class:"btn ghost",text:"Volver al mundo",onclick:()=>{ze()}}),E("button",{type:"button",class:"btn primary",text:"Revancha",onclick:()=>{dt=!0,ze(),K()}}))),{onClose:()=>{dt||vt(),dt=!1}})}let dt=!1;function ot(R,A){const $=innerWidth/innerHeight;e.aspect=$;const ht=Math.tan(Uh/180*Ss/2);let st=Math.min(52,Math.max(27,17/(ht*$))),mt=0,pt=0,St=Ss;if(u==="setup"||!c){D+=R*.12,e.position.set(Math.sin(D)*30,17,Math.cos(D)*26+2),e.lookAt(0,0,0),e.fov=Ss,e.updateProjectionMatrix();return}const F=c.ball,gt=Y();gt&&(st=Math.min(60,Math.max(30,10.5/(ht*$))));const U=ht*$*st*.9,z=gt?Math.max(0,ki+2-15):Math.max(0,ki+2-U),j=gt?Math.max(0,Lx+1-U):0;mt=mr.clamp(F.x*.85+F.vx*.2,-z,z),pt=gt?mr.clamp(F.z*.6,-j,j):F.z*.18,m>0&&(m-=R,mt=mr.clamp(p.x,-ki-1,ki+1),pt=p.z*.3,St=36,st*=.85);const it=1-Math.exp(-(m>0?3:4.5)*R);y+=(mt-y)*it,M+=(pt-M)*it,_+=(St-_)*(1-Math.exp(-3*R)),e.fov=_,e.updateProjectionMatrix();const ft=g>0?Math.sin(A*61+v)*g*.35:0,_t=g>0?Math.cos(A*53)*g*.25:0;gt?(e.position.set(y-st*.62+ft,st*.8+_t,M),e.lookAt(y+1,0,M)):(e.position.set(y+ft,st*.8+_t,M+st*.62),e.lookAt(y,0,M-1))}const Ft=(()=>{const R=document.createElement("canvas");R.width=R.height=64;const A=R.getContext("2d");A.strokeStyle="rgba(225,235,250,.95)",A.lineWidth=3;for(let ht=-64;ht<128;ht+=16)A.beginPath(),A.moveTo(ht,0),A.lineTo(ht+64,64),A.stroke(),A.beginPath(),A.moveTo(ht+64,0),A.lineTo(ht,64),A.stroke();const $=new kn(R);return $.wrapS=$.wrapT=Pi,$.repeat.set(4,1.4),$})();function Et(){for(const R of c.barriers){let A=o.get(R);if(!A){const ht=Math.hypot(R.x2-R.x1,R.z2-R.z1);A=new _e;const st=new tt(new Tn(ht,2.6),new Kt({map:Ft,transparent:!0,side:we,depthWrite:!1}));st.position.y=1.3;const mt=new tt(new qt(ht,.12,.12),new Kt({color:"#cdd7e6"}));mt.position.y=2.6;for(const pt of[-1,1]){const St=new tt(new Yt(.08,.08,2.7,6),new Kt({color:"#8d98aa"}));St.position.set(pt*ht/2,1.35,0),A.add(St)}A.add(st,mt),A.position.set((R.x1+R.x2)/2,0,(R.z1+R.z2)/2),A.rotation.y=Math.atan2(R.x2-R.x1,R.z2-R.z1)-Uh/2,t.add(A),o.set(R,A)}const $=R.life-R.t;A.scale.y=Math.min(1,$/.2),A.visible=R.t>.4||Math.floor(R.t*14)%2===0}for(const[R,A]of o)c.barriers.includes(R)||(t.remove(A),o.delete(R))}function Rt(R){if(!c)return;const A=c.score.join("-");A!==S&&(lt.scoreA.textContent=c.score[0],lt.scoreB.textContent=c.score[1],S=A);const $=Math.max(0,Math.ceil(c.timeLeft)),ht=(c.golden?"g":"")+$;ht!==x&&(lt.time.textContent=c.golden?"GOL DE ORO":`${Math.floor($/60)}:${String($%60).padStart(2,"0")}`,lt.time.classList.toggle("low",!c.golden&&$<=10),x=ht);const st=c.meters.s0;if(st){const St=Ds[st.power];lt.meterName.textContent=St.name,lt.meterFill.style.width=Math.min(100,st.v)+"%",lt.meterFill.style.background=St.color,lt.meter.classList.toggle("ready",st.v>=St.cost&&st.cd<=0),lt.meter.style.setProperty("--cost",St.cost+"%")}const mt=c.slots[0],pt=c.players[mt.active];pt&&(pt.charging?(lt.charge.hidden=!1,lt.chargeFill.style.width=pt.charge*100+"%",lt.chargeFill.className=pt.charge>=.3?"hot":""):lt.charge.hidden=!0,mt.active!==N&&(N=mt.active,lt.who.textContent=pt.name,lt.who.classList.remove("flash"),lt.who.offsetWidth,lt.who.classList.add("flash"))),Ot>0&&(Ot-=R,Ot<=0&&(lt.banner.hidden=!0)),L(R)}function se(R,A){if(n.update(R,A),!c){s.update(R,null),s.setScale(innerHeight,e.fov),ot(R,A),a.update({x:0,y:si.R,z:0,vx:0,vy:0,vz:0},R);return}if(u==="playing"){if(C(),c.phase!=="play"){const F=c.slots[0].input;F.pass=F.through=F.tackle=F.power=!1}let pt=1;h>0&&(h-=R,pt=f+(1-f)*Math.max(0,1-h*2.2)),d+=R*pt;let St=0;for(;d>=bo&&St<6;){c.step(bo);for(const F of c.drain())J(F);d-=bo,St++}St===6&&(d=0),c.phase==="end"&&!T&&(P-=R,P<=0&&ut())}g=Math.max(0,g-R*1.6);const $=n.fans.excite;n.setExcite(Math.max(c.phase==="goal"?1:.18+.25*(Math.abs(c.ball.x)/ki),$-R*.35)),de.crowdLevel(n.fans.excite);const ht=c.ball;a.update(ht,R);const st=c.slots[0];for(let pt=0;pt<l.length;pt++){const St=c.players[pt],F=st&&(st.mode==="team"?st.active===St.id:St.slot===0)&&c.phase!=="end";l[pt].update(St,A,R,{controlled:F,goalPhase:c.phase==="goal"})}r.update(c.marker&&c.marker.team===0?c.marker:null,A);const mt=Math.hypot(ht.vx,ht.vz);ht.guided&&ht.guided.kind==="through"?s.trailStyle("#8fd0ff",1):ht.speedKick>30&&mt>22?s.trailStyle("#ff9a3c",1):mt>19?s.trailStyle("#ffffff",.55):s.trailStyle("#fff",0);for(const pt of c.players)(Math.hypot(pt.vx,pt.vz)>6.5||pt.boost>0)&&Math.random()<R*9&&s.dust(pt.x-pt.vx*.05,pt.z-pt.vz*.05,-pt.vx*.1,-pt.vz*.1,1),pt.boost>0&&Math.random()<R*30&&s.emit(pt.x,.8+Math.random(),pt.z,0,.5,0,"#75aadb",.8,.4,0,.8),pt.charging&&pt.charge>=.3&&Math.random()<R*40&&s.emit(pt.x+(Math.random()-.5),.2,pt.z+(Math.random()-.5),0,3,0,"#ffb870",.5,.4,0,.9);Et(),s.setScale(innerHeight,e.fov),s.update(R,ht),ot(R,A),Rt(R)}return ni(),$t(),{scene:t,camera:e,update:se,dispose(){yt=!0,removeEventListener("keydown",Mt),removeEventListener("keyup",Ut),removeEventListener("blur",Z),ze(),de.crowdStop();for(const R of l)R.dispose();a.dispose(),r.dispose(),s.dispose(),n.dispose(),o.forEach(R=>t.remove(R)),ni()}}}const So=["Do","Do#","Re","Re#","Mi","Fa","Fa#","Sol","Sol#","La","La#","Si"],Fn={minor:{name:"Menor natural",steps:[0,2,3,5,7,8,10],mood:"Oscura y seria. Es la base del trap y del rap."},major:{name:"Mayor",steps:[0,2,4,5,7,9,11],mood:"Alegre y brillante. Pop, cumbia, fiesta."},pentMin:{name:"Pentatónica menor",steps:[0,3,5,7,10],mood:"Cinco notas: casi imposible desafinar. Rock y blues."},pentMaj:{name:"Pentatónica mayor",steps:[0,2,4,7,9],mood:"Cinco notas, sonido abierto y folclórico."},blues:{name:"Blues",steps:[0,3,5,6,7,10],mood:'Menor pentatónica con una nota "sucia" que da tensión.'},dorian:{name:"Dórica",steps:[0,2,3,5,7,9,10],mood:"Menor pero con un toque luminoso. Funk y jazz."},phrygian:{name:"Frigia",steps:[0,1,3,5,7,8,10],mood:"Española y dramática. Flamenco y metal."}},Nx=Object.keys(Fn),Re=16,zx=36,Fx=60,xr=i=>(Fn[i]||Fn.minor).steps.length*2+1;function Uu(i,t){const e=(Fn[i]||Fn.minor).steps,n=e.length;return e[(t%n+n)%n]+12*Math.floor(t/n)}const Nu=(i,t,e)=>e+i.root+Uu(i.scale,t),Nr=i=>440*Math.pow(2,(i-69)/12),$e=i=>i.split("").map(t=>t==="."?0:+t),Ox=[{id:"trap",name:"Trap",bpm:140,swing:0,tip:"Caja solo en el 3 y hi-hats con ráfagas.",drums:{kick:$e("1......1..1....."),snare:$e("........1......."),hat:$e("1.1.1.121.1.1.22"),perc:$e("........1.......")}},{id:"boombap",name:"Boom bap",bpm:90,swing:.25,tip:"Clásico del hip hop: bombo y caja bien marcados, con swing.",drums:{kick:$e("1.....1...1....."),snare:$e("....1.......1..."),hat:$e("1.1.1.1.1.1.1.3."),perc:$e("................")}},{id:"dembow",name:"Dembow",bpm:95,swing:0,tip:'El ritmo del reggaetón: bombo en los cuatro tiempos y la caja "3 + 3 + 2".',drums:{kick:$e("1...1...1...1..."),snare:$e("...1..1....1..1."),hat:$e("1.1.1.1.1.1.1.1."),perc:$e("................")}},{id:"cumbia",name:"Cumbia",bpm:100,swing:.1,tip:"Bombo caminando, aro en los tiempos 2 y 4 y hi-hat sin parar.",drums:{kick:$e("1.....1.1.....1."),snare:$e("....1.......1..."),hat:$e("1111111111111111"),perc:$e("..1...1...1...1.")}}],kx=[{id:"808",name:"808 de trap",notes:[[0,0,3],[6,0,2],[10,2,4]],tip:"Notas largas que arrancan con el bombo."},{id:"raices",name:"Raíces",notes:[[0,0,2],[4,0,2],[8,3,2],[12,4,2]],tip:"Una nota por tiempo, siguiendo los acordes."},{id:"caminante",name:"Caminante",notes:[[0,0,2],[2,2,2],[4,4,2],[6,3,2],[8,2,2],[10,0,2],[12,4,2],[14,3,2]],tip:"Sube y baja por la escala."}],Bx=[{id:"arpegio",name:"Arpegio",notes:[[0,5,1],[2,7,1],[4,9,1],[6,7,1],[8,5,1],[10,7,1],[12,9,1],[14,10,1]],tip:"Notas del acorde una por una."},{id:"pregunta",name:"Pregunta y respuesta",notes:[[0,7,2],[3,8,1],[4,9,4],[10,8,1],[12,7,1],[14,5,2]],tip:"Primero sube (pregunta), después baja y cierra en la raíz (respuesta)."},{id:"escalera",name:"Escalera",notes:[[0,4,1],[2,5,1],[4,6,1],[6,7,1],[8,8,1],[10,7,1],[12,6,1],[14,5,1]],tip:"Subís y bajás por la escala."}],Vx={ritmo:"El bombo (kick) marca el pulso. La caja (snare) va en los tiempos 2 y 4, o solo en el 3 si es trap. Los hi-hats rellenan: tocá un cuadradito varias veces y pasa de cerrado a ráfaga a abierto.",bajo:"El bajo sigue al bombo: casi siempre arranca donde pega el kick. Si tocás de nuevo una nota, se alarga: las notas largas son el sonido 808.",melodia:'Todas las filas son notas de la escala que elegiste, así que cualquiera que pongas suena bien. Las filas marcadas son la raíz: terminá la frase ahí y suena "cerrada".',mezcla:"Si el bajo y el bombo se pisan, subí el sidechain: el bajo se agacha cada vez que pega el bombo. El filtro DJ: a la izquierda apaga los agudos, a la derecha los graves.",armar:"Armá los bloques A, B, C y D (por ejemplo A = intro, B = estribillo) y ordenalos acá para formar la canción completa. Después guardala o exportala.",set:"Cargá dos temas, uno en cada bandeja, y pasá de uno al otro con el crossfader. Los dos se sincronizan al mismo BPM."},Vs=(i,t)=>60/(t||i.bpm)/4,Nh=new WeakMap;function Hx(i){let t=Nh.get(i);if(!t){t=i.createBuffer(1,i.sampleRate*2,i.sampleRate);const e=t.getChannelData(0);let n=12345;for(let s=0;s<e.length;s++)n=n*1664525+1013904223>>>0,e[s]=n/2147483648-1;Nh.set(i,t)}return t}const zh=new WeakMap;function Gx(i){let t=zh.get(i);if(!t){t=new Float32Array(1024);for(let e=0;e<1024;e++){const n=e/511.5-1;t[e]=Math.tanh(n*2.2)}zh.set(i,t)}return t}const Fh=new Map;function Wx(i,t){const e=i.sampleRate+":"+t;let n=Fh.get(e);if(!n){const s=i.sampleRate,a=Nr(t),r=Math.floor(s*2.2),o=Math.max(2,Math.round(s/a)),c=new Float32Array(r);let l=987+t,u=0;for(let f=0;f<o;f++){l=l*1664525+1013904223>>>0;const g=l/2147483648-1;u=u*.45+g*.55,c[f]=u}const d=.9965-Math.min(.0025,a/4e5);for(let f=o;f<r;f++)c[f]=d*.5*(c[f-o]+c[f-o+1]);const h=i.createBuffer(1,r,s);h.copyToChannel(c,0),n={buf:h,rate:s/o/a},Fh.set(e,n)}return n}function zu(i){const t=i.createGain(),e=i.createDynamicsCompressor();e.threshold.value=-16,e.knee.value=14,e.ratio.value=4,e.attack.value=.004,e.release.value=.2;const n=i.createGain();return n.gain.value=.9,t.connect(e),e.connect(n),n.connect(i.destination),{input:t,out:n}}class Fu{constructor(t,e){this.ctx=t,this.cue=null,this.sampleBuffer=null,this.mix={sidechain:.4};const n=()=>t.createGain();this.bus=n(),this.duck=n(),this.hp=t.createBiquadFilter(),this.hp.type="highpass",this.hp.frequency.value=10,this.lp=t.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=2e4,this.out=n(),this.deck=n(),this.bus.connect(this.hp),this.duck.connect(this.hp),this.hp.connect(this.lp),this.lp.connect(this.out),this.out.connect(this.deck),this.deck.connect(e),this.g={};for(const s of["kick","snare","hat","perc","sample"])this.g[s]=n(),this.g[s].connect(this.bus);for(const s of["bass","lead"])this.g[s]=n(),this.g[s].connect(this.duck)}apply(t){const e=this.ctx.currentTime;this.mix=t;for(const r in this.g)this.g[r].gain.setTargetAtTime(t[r]==null?.8:t[r],e,.02);this.out.gain.setTargetAtTime(t.master==null?.85:t.master,e,.02);const n=t.filter==null?.5:t.filter;let s=2e4,a=10;n<.48?s=Math.max(140,2e4*Math.pow(n/.48,3)):n>.52&&(a=10+Math.pow((n-.52)/.48,2)*5e3),this.lp.frequency.setTargetAtTime(s,e,.03),this.hp.frequency.setTargetAtTime(a,e,.03)}}function Xx(i,t,e=1){const n=i.ctx,s=n.createOscillator(),a=n.createGain();s.type="sine",s.frequency.setValueAtTime(170,t),s.frequency.exponentialRampToValueAtTime(42,t+.13),a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(.001,t+.5),s.connect(a),a.connect(i.g.kick),s.start(t),s.stop(t+.55);const r=n.createOscillator(),o=n.createGain();r.type="triangle",r.frequency.setValueAtTime(900,t),r.frequency.exponentialRampToValueAtTime(120,t+.02),o.gain.setValueAtTime(.25*e,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),r.connect(o),o.connect(i.g.kick),r.start(t),r.stop(t+.05)}function Yc(i,t,e,{hp:n=0,bp:s=0,q:a=1,vel:r=1,dur:o=.1}){const c=i.ctx,l=c.createBufferSource(),u=c.createGain();l.buffer=Hx(c);let d=l;if(n){const h=c.createBiquadFilter();h.type="highpass",h.frequency.value=n,d.connect(h),d=h}if(s){const h=c.createBiquadFilter();h.type="bandpass",h.frequency.value=s,h.Q.value=a,d.connect(h),d=h}u.gain.setValueAtTime(r,e),u.gain.exponentialRampToValueAtTime(.001,e+o),d.connect(u),u.connect(t),l.start(e,e*7.31%1.5),l.stop(e+o+.02)}function qx(i,t,e=1){Yc(i,i.g.snare,t,{hp:1400,vel:.8*e,dur:.2});const n=i.ctx,s=n.createOscillator(),a=n.createGain();s.type="triangle",s.frequency.setValueAtTime(220,t),s.frequency.exponentialRampToValueAtTime(130,t+.1),a.gain.setValueAtTime(.55*e,t),a.gain.exponentialRampToValueAtTime(.001,t+.13),s.connect(a),a.connect(i.g.snare),s.start(t),s.stop(t+.16)}function ha(i,t,e,n=.6){Yc(i,i.g.hat,t,{hp:7500,vel:n,dur:e?.3:.05})}function Yx(i,t,e=1){for(let n=0;n<3;n++)Yc(i,i.g.perc,t+n*.011,{bp:1500,q:.8,vel:.7*e,dur:n===2?.16:.03})}function jx(i,t,e,n){const s=i.ctx,a=Nr(e),r=s.createOscillator(),o=s.createOscillator(),c=s.createGain(),l=s.createWaveShaper(),u=s.createGain();r.type="sine",o.type="triangle",r.frequency.setValueAtTime(a*1.6,t),r.frequency.exponentialRampToValueAtTime(a,t+.05),o.frequency.value=a,u.gain.value=.22,l.curve=Gx(s),l.oversample="2x";const d=t+Math.max(.12,n);c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(.9,t+.006),c.gain.setValueAtTime(.9,Math.max(t+.01,d-.04)),c.gain.exponentialRampToValueAtTime(8e-4,d+.1),r.connect(c),o.connect(u),u.connect(c),c.connect(l),l.connect(i.g.bass),r.start(t),o.start(t),r.stop(d+.12),o.stop(d+.12)}function Ou(i,t,e,n,s=.8){const a=i.ctx,r=Nr(e),o=a.createGain();o.connect(i.g.lead);const c=Math.min(2.4,Math.max(.6,2.8-r/500));[[1,1],[2,.5],[3,.28],[4,.14],[5,.07],[6,.04]].forEach(([u,d],h)=>{for(const f of h===0?[-3,3]:[0]){const g=a.createOscillator(),v=a.createGain();g.type="sine",g.frequency.value=r*u,g.detune.value=f,v.gain.setValueAtTime(1e-4,t),v.gain.linearRampToValueAtTime(d*s*.2,t+.004),v.gain.exponentialRampToValueAtTime(8e-4,t+c/Math.sqrt(u)),g.connect(v),v.connect(o),g.start(t),g.stop(t+n+.3)}}),o.gain.setValueAtTime(1,t+n),o.gain.exponentialRampToValueAtTime(1e-4,t+n+.18)}function $x(i,t,e,n,s=.8){const a=i.ctx,r=Wx(a,e),o=a.createBufferSource(),c=a.createGain();o.buffer=r.buf,o.playbackRate.value=r.rate,c.gain.setValueAtTime(s*.9,t);const l=Math.max(.25,n);c.gain.setValueAtTime(s*.9,t+l),c.gain.exponentialRampToValueAtTime(8e-4,t+l+.35),o.connect(c),c.connect(i.g.lead),o.start(t),o.stop(t+l+.4)}function Jx(i,t,e,n,s=.8){const a=i.ctx,r=Nr(e),o=a.createOscillator(),c=a.createOscillator(),l=a.createBiquadFilter(),u=a.createGain();o.type="sawtooth",c.type="square",o.frequency.value=r,c.frequency.value=r*1.005,l.type="lowpass",l.Q.value=4,l.frequency.setValueAtTime(3800,t),l.frequency.exponentialRampToValueAtTime(700,t+Math.max(.15,n));const d=t+Math.max(.1,n);u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(.28*s,t+.01),u.gain.setValueAtTime(.28*s,d),u.gain.exponentialRampToValueAtTime(8e-4,d+.12),o.connect(l),c.connect(l),l.connect(u),u.connect(i.g.lead),o.start(t),c.start(t),o.stop(d+.15),c.stop(d+.15)}const Kx={piano:Ou,guitar:$x,synth:Jx};function ku(i,t,e,n,s){(Kx[t.inst]||Ou)(i,n,Nu(t,e,Fx),s)}function Bu(i,t,e,n,s){jx(i,n,Nu(t,e,zx),s)}function jc(i,t,e,n,s,a){const r=e.drums;if(r.kick[n]){Xx(i,s);const u=1-.9*(i.mix.sidechain||0);if(u<.99){const d=i.duck.gain;d.setValueAtTime(u,s),d.linearRampToValueAtTime(1,s+.17)}i.cue&&i.cue("kick",s)}r.snare[n]&&(qx(i,s),i.cue&&i.cue("snare",s));const o=r.hat[n];o===1?ha(i,s,!1,.6):o===2?(ha(i,s,!1,.4),ha(i,s+a/3,!1,.55),ha(i,s+2*a/3,!1,.7)):o===3&&ha(i,s,!0,.55),r.perc[n]&&Yx(i,s);const c=e.bass[n];c&&Bu(i,t,c.d,s,c.l*a*.97);const l=e.lead[n];if(l&&(ku(i,t,l.d,s,l.l*a*.97),i.cue&&i.cue("note",s)),e.sample[n]&&i.sampleBuffer){const u=i.ctx,d=u.createBufferSource();d.buffer=i.sampleBuffer,d.connect(i.g.sample),d.start(s)}}class Zx{constructor(){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=zu(this.ctx),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=128,this.analyser.smoothingTimeConstant=.7,this.master.out.connect(this.analyser),this.cues=[],this.players=[],this.bpm=100,this.timer=setInterval(()=>this.tick(),25),this.previewRack=this.rack(),this.sampleBuffer=null}setSample(t){this.sampleBuffer=t,this.previewRack.sampleBuffer=t;for(const e of this.players)e.rack.sampleBuffer=t}rack(){const t=new Fu(this.ctx,this.master.input);return t.cue=(e,n)=>{this.cues.push({type:e,time:n}),this.cues.length>300&&this.cues.splice(0,100)},t}resume(){this.ctx.state!=="running"&&this.ctx.resume()}tick(){for(const t of this.players)t.tick()}preview(t,e,n){this.resume();const s=this.previewRack;s.apply(t.mix);const a=this.ctx.currentTime+.02;e==="bass"?Bu(s,t,n,a,.45):ku(s,t,n,a,.45)}previewDrum(t,e,n=1){this.resume();const s=this.previewRack;s.apply(t.mix);const a={drums:{kick:[0],snare:[0],hat:[0],perc:[0]},bass:[null],lead:[null],sample:[0]};e==="sample"?a.sample[0]=1:a.drums[e][0]=n,jc(s,t,a,0,this.ctx.currentTime+.02,Vs(t))}popCues(t){const e=[];for(;this.cues.length&&this.cues[0].time<=t;)e.push(this.cues.shift());return e}close(){clearInterval(this.timer),this.players.length=0;try{this.ctx.close()}catch{}}}class wo{constructor(t,{bpm:e}={}){this.live=t,this.rack=t.rack(),this.rack.sampleBuffer=t.sampleBuffer,this.bpmFn=e||null,this.song=null,this.mode="song",this.pat=0,this.playing=!1,this.arrPos=0,this.step=0,this.nextTime=0,this.events=[],t.players.push(this)}load(t){this.song=t,this.rack.apply(t.mix)}start(t){this.live.resume(),this.playing=!0,this.arrPos=0,this.step=0,this.nextTime=t??this.live.ctx.currentTime+.07,this.events=[]}stop(){this.playing=!1}nextBarTime(){return!this.playing||!this.song?this.live.ctx.currentTime+.07:this.nextTime+(Re-this.step)%Re*Vs(this.song,this.bpmFn&&this.bpmFn())}tick(){if(!this.playing||!this.song)return;const t=this.live.ctx.currentTime+.16;let e=0;for(;this.nextTime<t&&e++<8;)this.scheduleOne()}scheduleOne(){const t=this.song,e=Vs(t,this.bpmFn&&this.bpmFn()),n=this.mode==="pattern"?this.pat:t.arrangement[this.arrPos%t.arrangement.length],s=t.patterns[n],a=this.step%2===1?t.swing*e*.5:0;jc(this.rack,t,s,this.step,this.nextTime+a,e),this.events.push({time:this.nextTime,step:this.step,arrPos:this.arrPos,pat:n}),this.events.length>48&&this.events.splice(0,16),this.nextTime+=e,this.step++,this.step>=Re&&(this.step=0,this.mode==="song"&&(this.arrPos=(this.arrPos+1)%t.arrangement.length))}position(){const t=this.live.ctx.currentTime;let e=null;for(const n of this.events)if(n.time<=t)e=n;else break;return e}}async function Qx(i,t){const n=Vs(i),s=i.arrangement.length*Re*n+2.5,a=new OfflineAudioContext(2,Math.ceil(s*44100),44100),r=zu(a),o=new Fu(a,r.input);o.sampleBuffer=t||null,o.apply(i.mix);let c=.05;for(const u of i.arrangement)for(let d=0;d<Re;d++)jc(o,i,i.patterns[u],d,c+(d%2?i.swing*n*.5:0),n),c+=n;const l=await a.startRendering();return t_(l)}function t_(i){const t=i.numberOfChannels,e=i.length,n=i.sampleRate,s=[];let a=1e-4;for(let u=0;u<t;u++){const d=i.getChannelData(u);s.push(d);for(let h=0;h<e;h++)a=Math.max(a,Math.abs(d[h]))}const r=Math.min(1,.95/a),o=new DataView(new ArrayBuffer(44+e*t*2)),c=(u,d)=>{for(let h=0;h<d.length;h++)o.setUint8(u+h,d.charCodeAt(h))};c(0,"RIFF"),o.setUint32(4,36+e*t*2,!0),c(8,"WAVE"),c(12,"fmt "),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,t,!0),o.setUint32(24,n,!0),o.setUint32(28,n*t*2,!0),o.setUint16(32,t*2,!0),o.setUint16(34,16,!0),c(36,"data"),o.setUint32(40,e*t*2,!0);let l=44;for(let u=0;u<e;u++)for(let d=0;d<t;d++){const h=Math.max(-1,Math.min(1,s[d][u]*r));o.setInt16(l,h<0?h*32768:h*32767,!0),l+=2}return new Blob([o],{type:"audio/wav"})}const bi=Math.PI,Oh=9,kh=6,cr=1.5,ws=26,fn=(i,t=1,e=.55)=>new Zt().setHSL((i%1+1)%1,t,e);function e_(i,t){const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.clearRect(0,0,512,128),n.font='86px Anton, Impact, "Arial Narrow", sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor=t,n.shadowBlur=26,n.fillStyle=t,n.fillText(i,256,68),n.shadowBlur=8,n.fillStyle="#fff",n.fillText(i,256,68);const s=new kn(e);return s.colorSpace=Fe,s}function n_(i,{djLook:t,dancers:e=6}){const n=new _e;i.add(n),i.background=new Zt("#07040f"),i.fog=new qs("#07040f",14,34);const s=new Dv("#6b5a9a",1.15),a=new lh("#ff4fa0",28,18,1.6);a.position.set(-4,4,3);const r=new lh("#3fd0ff",28,18,1.6);r.position.set(4,4,3);const o=new ks("#ffffff",1.1);o.position.set(0,4,8),n.add(s,a,r,o);const c=[],l=new qt(cr*.94,.12,cr*.94);for(let C=0;C<Oh;C++)for(let k=0;k<kh;k++){const K=new Kt({color:"#1a1030"}),at=new tt(l,K);at.position.set((C-(Oh-1)/2)*cr,-.06,1.4-k*cr+1.5),n.add(at),c.push({m:K,i:C,j:k})}const u=new tt(new qt(24,11,.4),new xi({color:"#120a22"}));u.position.set(0,5.5,-8.6),n.add(u);const d=[],h=new qt(.34,1,.2);h.translate(0,.5,0);for(let C=0;C<ws;C++){const k=new Kt({color:fn(C/ws)}),K=new tt(h,k);K.position.set((C-(ws-1)/2)*.62,.05,-8.3),K.scale.y=.2,n.add(K),d.push({b:K,m:k})}const f=new Lr({map:e_("LA CABINA","#ff4fa0"),transparent:!0,depthWrite:!1}),g=new kc(f);g.scale.set(7.2,1.8,1),g.position.set(0,7.2,-8.2),n.add(g);const v=new tt(new qt(14,.18,.18),new xi({color:"#2a2540"}));v.position.set(0,7,-3),n.add(v);const m=[],p=new Cn(1,9,18,1,!0);p.translate(0,-4.5,0);for(let C=0;C<6;C++){const k=new _e;k.position.set((C-2.5)*2.5,7,-3);const K=new Kt({color:fn(C/6),transparent:!0,opacity:.1,blending:Co,depthWrite:!1,side:we});k.add(new tt(p,K));const at=new tt(new oe(.2,8,6),new Kt({color:fn(C/6,1,.7)}));k.add(at),n.add(k),m.push({g:k,mat:K,lamp:at,ph:C*1.1})}const y=new tt(new Ir(.7,1),new Rv({color:"#cfd6ff",metalness:.7,roughness:.25,flatShading:!0}));y.position.set(0,5.6,.5),n.add(y);const M=new tt(new Yt(.02,.02,1.8,4),new Kt({color:"#666"}));M.position.set(0,6.8,.5),n.add(M);const _=[];for(const C of[-1,1]){const k=new tt(new qt(1.7,3.4,1.4),new xi({color:"#17131f"}));k.position.set(C*6.2,1.7,-4.6),k.rotation.y=-C*.3,n.add(k);for(const[K,at]of[[.95,.5],[-.7,.18]]){const yt=new tt(new An(at*1.3,24),new Kt({color:"#2b2640"})),vt=new tt(new An(at,20),new Kt({color:"#4a4468"})),Tt=new _e;Tt.add(yt),vt.position.z=.01,Tt.add(vt),Tt.position.set(0,K,.71),k.add(Tt),_.push({g:Tt,r:at})}}const D=new _e;D.position.set(0,0,-2),n.add(D);const P=new tt(new qt(5,1.05,1.5),new xi({color:"#1b1530"}));P.position.y=.525,D.add(P);const T=new tt(new qt(5.05,.08,.08),new Kt({color:"#ff4fa0"}));T.position.set(0,1.04,.76),D.add(T);const I=T.clone();I.material=new Kt({color:"#3fd0ff"}),I.position.set(0,.06,.76),D.add(I);const S=[];for(let C=0;C<16;C++){const k=new Kt({color:"#2a2240"}),K=new tt(new qt(.2,.12,.04),k);K.position.set((C-7.5)*.29,.55,.77),D.add(K),S.push(k)}const x=[];for(const C of[-1,1]){const k=new tt(new qt(1.7,.1,1.25),new xi({color:"#2c2748"}));k.position.set(C*1.6,1.1,0),D.add(k);const K=new _e;K.position.set(C*1.6,1.2,0);const at=new tt(new Yt(.55,.55,.07,36),new xi({color:"#0e0b16"}));K.add(at);for(const $t of[.45,.36,.28]){const Xt=new tt(new oi($t,$t+.012,40),new Kt({color:"#3a3358",side:we}));Xt.rotation.x=-bi/2,Xt.position.y=.041,K.add(Xt)}const yt=new tt(new Yt(.17,.17,.08,20),new Kt({color:C<0?"#ff4fa0":"#3fd0ff"}));K.add(yt);const vt=new tt(new qt(.05,.02,.2),new Kt({color:"#fff"}));vt.position.set(0,.05,.4),K.add(vt),D.add(K);const Tt=new tt(new qt(.04,.04,.7),new xi({color:"#bbb"}));Tt.position.set(C*1.6+.55,1.22,-.1),Tt.rotation.y=.5,D.add(Tt),x.push({plat:K,label:yt,spin:0})}const N=new tt(new qt(1.05,.14,1.25),new xi({color:"#15101f"}));N.position.set(0,1.12,0),D.add(N);const B=[];for(let C=0;C<6;C++){const k=new tt(new Yt(.06,.06,.06,10),new Kt({color:C<3?"#ff4fa0":"#3fd0ff"}));k.position.set((C%3-1)*.28,1.22,-.3+Math.floor(C/3)*.28),D.add(k),B.push(k)}const V=new tt(new qt(.8,.02,.07),new Kt({color:"#000"}));V.position.set(0,1.2,.45),D.add(V);const W=new tt(new qt(.12,.08,.16),new Kt({color:"#f6b40e"}));W.position.set(0,1.25,.45),D.add(W);const Q=Bs(t);Q.scale.setScalar(1.2),Q.position.set(0,0,-3.4),n.add(Q);const G=[],rt=wc(e),Y=[[-3.9,.4],[4,.2],[-6,-1.2],[6.1,-1],[-2.6,2.4],[2.7,2.6],[-5.2,2.2],[5.3,2]];rt.forEach((C,k)=>{const K=Bs(Object.assign({},C.look,{pr:0}));K.scale.setScalar(.95);const[at,yt]=Y[k%Y.length];K.position.set(at,0,yt),K.rotation.y=Math.atan2(-at*.5,4-yt),n.add(K),G.push({av:K,x:at,z:yt,style:k%3,ph:Math.random()*6})});let ct=0,xt=0,Mt=0,Ut=.9;return{hit(C){C==="kick"?ct=1:C==="snare"?xt=1:C==="note"&&(Mt=1)},update(C,k,K){ct=Math.max(0,ct-C*5.5),xt=Math.max(0,xt-C*6),Mt=Math.max(0,Mt-C*4);const at=!!K.playing,yt=at?K.beat:k*1.6,vt=at?1:.25;Ut+=C*.03*(.4+vt),a.color.copy(fn(Ut)),r.color.copy(fn(Ut+.5)),a.intensity=18+40*ct*vt,r.intensity=18+40*xt*vt+20*Mt,s.intensity=.95+.5*ct*vt,T.material.color.copy(fn(Ut)),f.color.copy(fn(Ut+.12,1,.85)),g.scale.setScalar(1+.04*ct),g.scale.set(7.2*(1+.04*ct),1.8*(1+.04*ct),1);for(const Dt of c){const Ot=.12+.35*(.5+.5*Math.sin(yt*bi*.5+Dt.i*.7+Dt.j*.9))*vt+.5*ct*vt*(1-Dt.j/kh*.5);Dt.m.color.copy(fn(Ut+Dt.i*.05+Dt.j*.04,.9,Math.min(.62,Ot*.7)))}const Tt=K.spectrum;for(let Dt=0;Dt<ws;Dt++){let Pt;if(Tt&&at){const Nt=Math.min(Tt.length-1,Math.floor(Math.pow(Dt/ws,1.6)*Tt.length*.8));Pt=Tt[Nt]/255}else Pt=.12+.05*Math.sin(k*2+Dt);const Ot=d[Dt].b.scale.y;d[Dt].b.scale.y=Ot+(.2+Pt*6.5-Ot)*Math.min(1,C*18),d[Dt].m.color.copy(fn(Ut+Dt/ws*.8,1,.5+Pt*.2))}m.forEach((Dt,Pt)=>{Dt.g.rotation.z=Math.sin(k*.8+Dt.ph)*.55,Dt.g.rotation.x=Math.cos(k*.6+Dt.ph*1.3)*.35+.1,Dt.mat.color.copy(fn(Ut+Pt*.16)),Dt.lamp.material.color.copy(fn(Ut+Pt*.16,1,.7)),Dt.mat.opacity=.05+(at?.07:.01)+.12*ct*vt}),y.rotation.y+=C*.6,y.scale.setScalar(1+.05*ct);for(const Dt of _)Dt.g.scale.setScalar(1+.12*ct*(Dt.r>.3?1:.3));const $t=K.step==null?-1:K.step;S.forEach((Dt,Pt)=>{Dt.color.set($t===Pt?"#ffffff":Pt%4===0?"#5b3f8a":"#2a2240")});const Xt=K.decks||[!1,!1];x.forEach((Dt,Pt)=>{const Ot=Xt[Pt]?3.4:0;Dt.spin+=(Ot-Dt.spin)*Math.min(1,C*3),Dt.plat.rotation.y-=Dt.spin*C,Dt.label.material.color.copy(fn(Ut+Pt*.5,1,.6))}),W.position.x=((K.fader==null?.5:K.fader)-.5)*.72,B.forEach((Dt,Pt)=>{Dt.rotation.y=(K.knob==null?.5:K.knob)*4+Pt});const lt=Q.userData;wa(Q,k,0);const H=Math.sin(yt*bi*2);lt.body.position.y=Math.abs(H)*.06*vt,lt.body.rotation.x=.12+(at?.12*ct:.03),lt.head.rotation.x=.1+.25*ct*vt,lt.head.rotation.y=Math.sin(yt*bi*.5)*.35*vt,lt.arms[0].rotation.x=-1.2+Math.sin(yt*bi*2+.5)*.22*vt,lt.arms[1].rotation.x=-1.2+Math.cos(yt*bi*2)*.22*vt,lt.arms[0].rotation.z=-.35,lt.arms[1].rotation.z=.35;for(const Dt of G){const Pt=Dt.av.userData;wa(Dt.av,k+Dt.ph,0);const Ot=yt*bi*2+Dt.ph,Nt=Math.abs(Math.sin(yt*bi+Dt.ph*.2));Dt.av.position.y=Nt*.3*vt,Pt.body.rotation.z=Math.sin(Ot*.5)*.12*vt,Dt.style===0?(Pt.arms[0].rotation.x=-2.7+Math.sin(Ot)*.35*vt,Pt.arms[1].rotation.x=-2.7+Math.cos(Ot)*.35*vt,Pt.arms[0].rotation.z=-.25,Pt.arms[1].rotation.z=.25):Dt.style===1?(Pt.arms[0].rotation.x=-.6+Math.sin(Ot)*.8*vt,Pt.arms[1].rotation.x=-.6-Math.sin(Ot)*.8*vt,Dt.av.rotation.y+=Math.sin(Ot*.25)*C*.8*vt):(Pt.arms[0].rotation.x=-2.4*(.4+.6*ct)*vt,Pt.arms[1].rotation.x=Math.sin(Ot)*1.2*vt,Pt.legs[0].rotation.x=Math.sin(Ot)*.5*vt,Pt.legs[1].rotation.x=-Math.sin(Ot)*.5*vt),Pt.head.rotation.x=.15*ct*vt}},dispose(){Ki(Q);for(const C of G)Ki(C.av);i.remove(n),n.traverse(C=>{C.geometry&&C.geometry.dispose(),C.material&&(C.material.map&&C.material.map.dispose(),C.material.dispose())}),i.fog=null}}}const Eo="potrero-temas-v1",Bh="potrero-tema-borrador-v1",Vh={kick:"Bombo",snare:"Caja",hat:"Hi-hat",perc:"Aro",bass:"Bajo",lead:"Melodía",sample:"Sample"},i_=[["piano","Piano"],["guitar","Guitarra"],["synth","Sinte"]],Vu=16,Ec=4,Ti=(i,t,e)=>Math.min(e,Math.max(t,i)),Wi=(i,t)=>Number.isFinite(+i)?+i:t,$c=()=>({drums:{kick:Array(Re).fill(0),snare:Array(Re).fill(0),hat:Array(Re).fill(0),perc:Array(Re).fill(0)},bass:Array(Re).fill(null),lead:Array(Re).fill(null),sample:Array(Re).fill(0)});function Tc(){return{id:"t"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),name:"Mi tema",folder:"Sin carpeta",bpm:100,swing:0,root:0,scale:"minor",inst:"piano",mix:{kick:.9,snare:.75,hat:.55,perc:.6,bass:.8,lead:.7,sample:.8,master:.85,sidechain:.4,filter:.5},patterns:Array.from({length:Ec},$c),arrangement:[0,0,1,1],xpGiven:!1}}const Hh=(i,t)=>Array.from({length:Re},(e,n)=>{const s=i&&i[n];return!s||!Number.isFinite(+s.d)?null:{d:Ti(Math.round(+s.d),0,t-1),l:Ti(Math.round(Wi(s.l,1)),1,8)}}),To=(i,t)=>Array.from({length:Re},(e,n)=>Ti(Math.round(Wi(i&&i[n],0)),0,t));function Ea(i){const t=Tc();if(!i||typeof i!="object")return t;const e=t;e.id=typeof i.id=="string"&&/^[\w-]{1,40}$/.test(i.id)?i.id:t.id,e.name=String(i.name||"Mi tema").slice(0,30),e.folder=String(i.folder||"Sin carpeta").slice(0,24),e.bpm=Ti(Math.round(Wi(i.bpm,100)),60,180),e.swing=Ti(Wi(i.swing,0),0,.6),e.root=Ti(Math.round(Wi(i.root,0)),0,11),e.scale=Fn[i.scale]?i.scale:"minor",e.inst=["piano","guitar","synth"].includes(i.inst)?i.inst:"piano",e.xpGiven=!!i.xpGiven;for(const a in e.mix)e.mix[a]=Ti(Wi(i.mix&&i.mix[a],e.mix[a]),0,1);const n=xr(e.scale);e.patterns=Array.from({length:Ec},(a,r)=>{const o=i.patterns&&i.patterns[r],c=$c();if(!o)return c;for(const l of["kick","snare","perc"])c.drums[l]=To(o.drums&&o.drums[l],1);return c.drums.hat=To(o.drums&&o.drums.hat,3),c.bass=Hh(o.bass,n),c.lead=Hh(o.lead,n),c.sample=To(o.sample,1),c});const s=Array.isArray(i.arrangement)?i.arrangement:e.arrangement;return e.arrangement=s.map(a=>Ti(Math.round(Wi(a,0)),0,Ec-1)).slice(0,Vu),e.arrangement.length||(e.arrangement=[0]),e}const Hu=(i,t)=>{try{const e=localStorage.getItem(i);return e?JSON.parse(e):t}catch{return t}},Ac=(i,t)=>{try{return localStorage.setItem(i,JSON.stringify(t)),!0}catch{return!1}},Sn={list(){const i=Hu(Eo,[]);return Array.isArray(i)?i.map(Ea):[]},save(i){const t=Sn.list().filter(e=>e.id!==i.id);return t.unshift(Ea(i)),Ac(Eo,t.slice(0,60))},remove(i){Ac(Eo,Sn.list().filter(t=>t.id!==i))},folders(){return[...new Set(["Sin carpeta",...Sn.list().map(i=>i.folder)])]},get(i){return Sn.list().find(t=>t.id===i)||null}},ua={load(){const i=Hu(Bh,null);return i?Ea(i):null},save(i){Ac(Bh,i)}};function s_(i){const t=new Set;for(const e of i.patterns){for(const n of["kick","snare","hat","perc"])e.drums[n].some(Boolean)&&t.add(n);e.bass.some(Boolean)&&t.add("bass"),e.lead.some(Boolean)&&t.add("lead")}return t.size}const Gu=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),Es=["A","B","C","D"],a_=[["ritmo","1 · Ritmo"],["bajo","2 · Bajo"],["melodia","3 · Melodía"],["mezcla","4 · Mezcla"],["armar","5 · Armar"],["set","Set DJ"]],r_=[["kick","Bombo","#ff4fa0"],["snare","Caja","#ff4fa0"],["hat","Hi-hat","#ff4fa0"],["perc","Aro","#ff4fa0"],["bass","Bajo","#3fd0ff"],["lead","Melodía","#3fd0ff"],["sample","Sample","#3fd0ff"]],o_=["kick","snare","hat","perc"];function Si({label:i,value:t,onInput:e,color:n="#f6b40e",fmt:s,def:a,compact:r}){let o=t;const c=E("i",{class:"knob-ind"}),l=E("div",{class:"knob-dial"},c),u=E("span",{class:"knob-val"}),d=E("div",{class:"dj-knob"+(r?" compact":""),tabindex:"0",role:"slider","aria-label":i,"aria-valuemin":"0","aria-valuemax":"100"},l,E("span",{class:"knob-lab",text:i}),u),h=()=>{l.style.setProperty("--v",o),l.style.setProperty("--c",n),c.style.transform=`rotate(${-135+o*270}deg)`,u.textContent=s?s(o):String(Math.round(o*100)),d.setAttribute("aria-valuenow",String(Math.round(o*100)))},f=y=>{o=Gu(y),h(),e(o)};let g=0,v=0,m=!1;d.addEventListener("pointerdown",y=>{m=!0,g=y.clientY,v=o,d.setPointerCapture(y.pointerId),y.preventDefault()}),d.addEventListener("pointermove",y=>{m&&f(v+(g-y.clientY)/140)});const p=()=>{m=!1};return d.addEventListener("pointerup",p),d.addEventListener("pointercancel",p),d.addEventListener("dblclick",()=>f(a??t)),d.addEventListener("wheel",y=>{y.preventDefault(),f(o+(y.deltaY<0?.04:-.04))},{passive:!1}),d.addEventListener("keydown",y=>{const M=y.key;M==="ArrowUp"||M==="ArrowRight"?(f(o+.05),y.preventDefault()):(M==="ArrowDown"||M==="ArrowLeft")&&(f(o-.05),y.preventDefault())}),h(),d}const lr=(i,t,e,n={})=>E("button",{type:"button",class:"chip","aria-pressed":t?"true":"false",onclick:e,...n,text:i}),Ao=(i,t,e,n)=>{const s=E("select",{class:"dj-select","aria-label":n},i.map(([a,r])=>E("option",{value:a,text:r})));return s.value=String(t),s.addEventListener("change",()=>e(s.value)),s};function c_({onExit:i}){const t=new Pr,e=new Je(46,innerWidth/innerHeight,.1,90),n=Object.assign({},he.profile.look,{ex:Ai("ex","sing")}),s=n_(t,{djLook:n}),a=new Zx,r=new wo(a);let o=100;const c=[new wo(a,{bpm:()=>o}),new wo(a,{bpm:()=>o})],l=[null,null],u=[null,null];let d=.5,h=ua.load()||Tc(),f="",g="ritmo",v=0,m=0,p="",y=null,M=!1,_=!1,D=-2,P=-2,T=[],I=[],S=0,x=null;const N=[],B=new Uint8Array(a.analyser.frequencyBinCount),V=()=>h.patterns[v],W=()=>{clearTimeout(S),S=setTimeout(()=>ua.save(h),350)},Q=()=>{r.rack.apply(h.mix)},G=()=>{r.load(h),r.mode=g==="armar"?"song":"pattern",r.pat=v},rt=U=>U.patterns.some(z=>z.drums.kick.some(Boolean)||z.drums.snare.some(Boolean)||z.drums.hat.some(Boolean)||z.drums.perc.some(Boolean)||z.bass.some(Boolean)||z.lead.some(Boolean)),Y=()=>JSON.stringify(h)!==f&&rt(h),ct=E("div",{class:"dj-hud"}),xt=E("div",{class:"dj-body"}),Mt=E("p",{class:"dj-tip",title:"Tocá para ver el consejo completo"});Mt.addEventListener("click",()=>Mt.classList.toggle("open"));const Ut=E("div",{class:"dj-blocks"}),Z=E("button",{type:"button",class:"btn primary dj-play",onclick:()=>Dt()}),C=E("span",{class:"dj-song"}),k=E("section",{class:"dj-panel"}),K=E("nav",{class:"dj-tabs",role:"tablist"}),at=E("button",{type:"button",class:"btn sm dj-min","aria-label":"Mostrar u ocultar el panel",text:"▾",onclick:()=>{_=!_,k.classList.toggle("min",_),at.textContent=_?"▴":"▾",requestAnimationFrame(pt)}}),yt=E("div",{class:"dj-top"},E("button",{type:"button",class:"btn sm",text:"← Salir",onclick:()=>{M||i()}}),C);k.append(E("header",{class:"dj-head"},K,E("div",{class:"dj-actions"},Z,E("button",{type:"button",class:"btn ghost sm",text:"Temas",onclick:()=>se()}),at)),Mt,Ut,xt),ct.append(yt,k),ni(),Ys().append(ct);function vt(){K.replaceChildren(...a_.map(([z,j])=>E("button",{type:"button",class:"dj-tab",role:"tab","aria-selected":z===g?"true":"false",text:j,onclick:()=>Tt(z)})));const U=K.querySelector('[aria-selected="true"]');U&&(K.scrollLeft=U.offsetLeft-(K.clientWidth-U.offsetWidth)/2)}function Tt(U){if(U===g)return;const z=g==="set";g=U,U==="set"?r.stop():z&&c.forEach(j=>j.stop()),G(),$t()}function $t(){vt(),C.textContent=h.name+(Y()?" •":""),Mt.textContent=Vx[g]||"",Xt(),lt(),H(),requestAnimationFrame(pt)}function Xt(){if(g==="armar"||g==="set"){Ut.hidden=!0;return}Ut.hidden=!1;const U=z=>{const j=h.patterns[z];return j.drums.kick.some(Boolean)||j.drums.snare.some(Boolean)||j.drums.hat.some(Boolean)||j.drums.perc.some(Boolean)||j.bass.some(Boolean)||j.lead.some(Boolean)};Ut.replaceChildren(E("span",{class:"lab",text:"Bloque"}),...Es.map((z,j)=>E("button",{type:"button",class:"chip blk"+(U(j)?" has":""),"aria-pressed":j===v?"true":"false",text:z,onclick:()=>{v=j,r.pat=j,D=-2,Xt(),lt()}})),E("span",{class:"blk-gap"}),(()=>{const z=E("select",{class:"dj-select tiny","aria-label":"Más opciones del bloque"},E("option",{value:"",text:"Más…"}),...Es.flatMap((j,it)=>it===v?[]:[E("option",{value:"c"+it,text:`Copiar al ${j}`})]),E("option",{value:"x",text:"Borrar este bloque"}));return z.addEventListener("change",()=>{const j=z.value;z.value="",j==="x"?(h.patterns[v]=$c(),W(),Xt(),lt()):j[0]==="c"&&(h.patterns[+j[1]]=JSON.parse(JSON.stringify(h.patterns[v])),Ve(`Copiado al bloque ${Es[+j[1]]}`),W(),Xt())}),z})())}function lt(){T=[],I=[],D=-2,P=-2,xt.replaceChildren({ritmo:zt,bajo:L,melodia:b,mezcla:J,armar:ut,set:dt}[g]()),C.textContent=h.name+(Y()?" •":"")}function H(){Z.hidden=g==="set",Z.replaceChildren(E("span",{class:"ico",text:r.playing?"■":"▶"}),E("span",{class:"txt",text:r.playing?" Parar":" Tocar"})),Z.setAttribute("aria-label",r.playing?"Parar":"Tocar"),Z.classList.toggle("on",r.playing)}function Dt(){if(r.playing){r.stop(),H();return}a.resume(),G(),Q(),r.start(),H()}function Pt(){const U=h.patterns[v].drums,z=E("div",{class:"dj-grid drums",style:{"--cols":Re}}),j=Array.from({length:Re},()=>[]),it=[...o_,"sample"];for(const kt of it){z.append(E("span",{class:"row-lab",text:Vh[kt]}));for(let jt=0;jt<Re;jt++){const Se=kt==="sample"?V().sample[jt]:U[kt][jt],Qe=E("button",{type:"button",class:"cell "+kt+(jt%4===0?" beat":""),"data-tr":kt,"data-s":jt,"data-v":Se,"aria-label":`${Vh[kt]} paso ${jt+1}`});j[jt].push(Qe),z.append(Qe)}}T=j;const ft=kt=>kt==="hat"?3:1,_t=(kt,jt)=>kt==="sample"?V().sample[jt]:V().drums[kt][jt],Gt=(kt,jt,Se)=>{kt==="sample"?V().sample[jt]=Se:V().drums[kt][jt]=Se};let It=null;const ae=kt=>{const jt=document.elementFromPoint(kt.clientX,kt.clientY);return jt&&jt.classList&&jt.classList.contains("cell")&&z.contains(jt)?jt:null},Jt=(kt,jt)=>{const Se=kt.dataset.tr,Qe=+kt.dataset.s;_t(Se,Qe)!==jt&&(Gt(Se,Qe,jt),kt.dataset.v=jt,W(),jt&&a.previewDrum(h,Se,jt))};return z.addEventListener("pointerdown",kt=>{const jt=ae(kt);if(!jt)return;const Se=jt.dataset.tr;if(Se==="sample"&&!a.sampleBuffer){Ve("Primero cargá un sample (abajo)");return}const Qe=_t(Se,+jt.dataset.s);It=Qe>=ft(Se)?0:Qe+1,Jt(jt,It),z.dataset.tr=Se,kt.preventDefault()}),z.addEventListener("pointermove",kt=>{if(It==null)return;const jt=ae(kt);jt&&jt.dataset.tr===z.dataset.tr&&Jt(jt,It)}),x&&(removeEventListener("pointerup",x),removeEventListener("pointercancel",x)),x=()=>{It!=null&&(It=null,C.textContent=h.name+(Y()?" •":""),Xt())},addEventListener("pointerup",x),addEventListener("pointercancel",x),z}function Ot(U){const z=V()[U],j=xr(h.scale),it=Fn[h.scale].steps.length,ft=U==="bass"?36:60,_t=Array.from({length:j},()=>Array(Re).fill(null));z.forEach((ae,Jt)=>{if(ae)for(let kt=0;kt<ae.l&&Jt+kt<Re;kt++)_t[ae.d][Jt+kt]={head:kt===0,step:Jt}});const Gt=E("div",{class:"dj-grid roll "+U,style:{"--cols":Re}}),It=Array.from({length:Re},()=>[]);for(let ae=j-1;ae>=0;ae--){const Jt=ft+h.root+Uu(h.scale,ae),kt=ae%it===0;Gt.append(E("span",{class:"row-lab"+(kt?" root":""),text:So[Jt%12]+(kt?"★":"")}));for(let jt=0;jt<Re;jt++){const Se=_t[ae][jt],Qe=E("button",{type:"button",class:"cell note"+(jt%4===0?" beat":"")+(kt?" root":"")+(Se?Se.head?" on":" on cont":""),"aria-label":`${So[Jt%12]} paso ${jt+1}`,onclick:()=>{const $s=Se?Se.step:jt,li=z[$s];Se&&li?li.l===1?li.l=2:li.l===2?li.l=4:z[$s]=null:(z[jt]={d:ae,l:1},a.preview(h,U,ae)),W(),lt(),Xt()}});It[jt].push(Qe),Gt.append(Qe)}}return T=It,Gt}function Nt(){return E("div",{class:"dj-row"},E("label",{class:"dj-field"},E("span",{text:"Nota"}),Ao(So.map((U,z)=>[z,U]),h.root,U=>{h.root=+U,W(),lt()},"Nota raíz")),E("label",{class:"dj-field"},E("span",{text:"Escala"}),Ao(Nx.map(U=>[U,Fn[U].name]),h.scale,U=>{h.scale=U;const z=xr(U);for(const j of h.patterns)for(const it of["bass","lead"])j[it]=j[it].map(ft=>ft?{d:Math.min(ft.d,z-1),l:ft.l}:null);W(),lt()},"Escala")),E("span",{class:"dj-mood",text:Fn[h.scale].mood}))}function Qt(U,z){return E("div",{class:"dj-row"},E("span",{class:"lab",text:"Arranques"}),...U.map(j=>lr(j.name,!1,()=>{const it=Array(Re).fill(null),ft=xr(h.scale);for(const[_t,Gt,It]of j.notes)it[_t]={d:Math.min(Gt,ft-1),l:It};V()[z]=it,W(),Mt.textContent=j.tip,lt(),Xt()})))}function zt(){const U=E("div",{class:"dj-pane"});return U.append(E("div",{class:"dj-row"},E("span",{class:"lab",text:"Estilos"}),...Ox.map(z=>lr(z.name,!1,()=>{V().drums=JSON.parse(JSON.stringify(z.drums)),h.bpm=z.bpm,h.swing=z.swing,Mt.textContent=z.tip,W(),lt(),Xt()})),E("span",{class:"blk-gap"}),Si({compact:!0,label:"BPM",value:(h.bpm-60)/120,def:40/120,color:"#f6b40e",fmt:z=>String(Math.round(60+z*120)),onInput:z=>{h.bpm=Math.round(60+z*120),W()}}),Si({compact:!0,label:"Swing",value:h.swing/.6,def:0,color:"#f6b40e",onInput:z=>{h.swing=+(z*.6).toFixed(3),W()}})),Pt(),E("div",{class:"dj-row sample"},E("span",{class:"lab",text:"Sample propio"}),E("button",{type:"button",class:"btn ghost sm",text:"Subir audio",onclick:()=>R.click()}),E("button",{type:"button",class:"btn ghost sm"+(y?" rec":""),text:y?"■ Frenar":"🎙 Grabar",onclick:()=>$()}),E("span",{class:"muted small",text:p?`Cargado: ${p}`:'Subí un audio o grabá tu guitarra o tu voz: después lo ponés en la fila "Sample". No se guarda con el tema.'}))),U}function L(){return E("div",{class:"dj-pane"},Nt(),Qt(kx,"bass"),Ot("bass"),E("p",{class:"muted small",text:"Tocá un cuadradito para poner una nota. Tocá la misma de nuevo para alargarla (1 → 2 → 4 pasos) y otra vez para sacarla."}))}function b(){const U=Nt();return U.append(E("span",{class:"blk-gap"}),...i_.map(([z,j])=>lr(j,h.inst===z,()=>{h.inst=z,W(),a.preview(h,"lead",5),lt()}))),E("div",{class:"dj-pane"},U,Qt(Bx,"lead"),Ot("lead"))}function J(){const U=h.mix,z=E("div",{class:"dj-pane"}),j=(ft,_t,Gt)=>Si({label:_t,value:U[ft],color:Gt,onInput:It=>{U[ft]=It,Q(),W()}}),it=ft=>ft<.47?"graves":ft>.53?"agudos":"abierto";return z.append(E("div",{class:"dj-row knobs big"},...r_.map(([ft,_t,Gt])=>j(ft,_t,Gt)),E("i",{class:"knob-sep"}),Si({label:"Sidechain",value:U.sidechain,def:.4,color:"#f6b40e",onInput:ft=>{U.sidechain=ft,Q(),W()}}),Si({label:"Filtro",value:U.filter,def:.5,color:"#9b7dff",fmt:it,onInput:ft=>{U.filter=ft,Q(),W()}}),Si({label:"Volumen",value:U.master,def:.85,color:"#f6b40e",onInput:ft=>{U.master=ft,Q(),W()}})),E("p",{class:"muted small",text:"Arrastrá cada perilla hacia arriba o abajo (o usá la rueda). Doble clic: vuelve al valor de arranque."})),z}function ut(){const U=E("div",{class:"dj-pane"}),z=h.arrangement.length*Re*Vs(h),j=E("div",{class:"dj-slots"});I=[],h.arrangement.forEach((Jt,kt)=>{const jt=E("button",{type:"button",class:"slot"+(kt===m?" sel":""),"aria-label":`Compás ${kt+1}: bloque ${Es[Jt]}`,onclick:()=>{m=kt,lt()}},E("b",{text:Es[Jt]}),E("small",{text:String(kt+1)}));I.push(jt),j.append(jt)}),h.arrangement.length<Vu&&j.append(E("button",{type:"button",class:"slot add","aria-label":"Agregar compás",text:"+",onclick:()=>{h.arrangement.push(h.arrangement[h.arrangement.length-1]||0),m=h.arrangement.length-1,W(),lt()}}));const it=h.arrangement[m],ft=Jt=>{const kt=m+Jt;kt<0||kt>=h.arrangement.length||([h.arrangement[m],h.arrangement[kt]]=[h.arrangement[kt],h.arrangement[m]],m=kt,W(),lt())},_t=Sn.folders().map(Jt=>[Jt,Jt]);_t.some(([Jt])=>Jt===h.folder)||_t.push([h.folder,h.folder]);const Gt=E("input",{class:"dj-input",type:"text",maxlength:"30",value:h.name,"aria-label":"Nombre del tema"});Gt.addEventListener("input",()=>{h.name=Gt.value.trim().slice(0,30)||"Mi tema",C.textContent=h.name+" •",W()});const It=E("input",{class:"dj-input",type:"text",maxlength:"24",list:"dj-folders",value:h.folder,"aria-label":"Carpeta"});It.addEventListener("input",()=>{h.folder=It.value.trim().slice(0,24)||"Sin carpeta",W()});const ae=E("datalist",{id:"dj-folders"},_t.map(([Jt])=>E("option",{value:Jt})));return U.append(E("span",{class:"lab",text:`Tu canción · ${h.arrangement.length} compases · ${Math.round(z)} s`}),j,E("div",{class:"dj-row"},E("span",{class:"lab",text:"Este compás"}),...Es.map((Jt,kt)=>lr(Jt,it===kt,()=>{h.arrangement[m]=kt,W(),lt()})),E("button",{type:"button",class:"chip tiny",text:"◀","aria-label":"Mover antes",onclick:()=>ft(-1)}),E("button",{type:"button",class:"chip tiny",text:"▶","aria-label":"Mover después",onclick:()=>ft(1)}),E("button",{type:"button",class:"chip tiny",text:"Sacar",disabled:h.arrangement.length<=1,onclick:()=>{h.arrangement.splice(m,1),m=Math.min(m,h.arrangement.length-1),W(),lt()}})),E("div",{class:"dj-row save"},E("label",{class:"dj-field grow"},E("span",{text:"Nombre"}),Gt),E("label",{class:"dj-field grow"},E("span",{text:"Carpeta"}),It,ae),E("button",{type:"button",class:"btn primary",text:"Guardar",onclick:()=>Ft()}),E("button",{type:"button",class:"btn ghost",text:"Exportar WAV",onclick:Jt=>Et(Jt.currentTarget)}))),U}function dt(){const U=E("div",{class:"dj-pane"}),z=E("div",{class:"dj-decks"}),j=[...Sn.list()],it=[["","— elegir tema —"],["__cur","Tema actual: "+h.name],...j.map(_t=>[_t.id,`${_t.name} (${_t.bpm})`])];[0,1].forEach(_t=>{const Gt=c[_t],It=Ao(it,l[_t]&&l[_t].__pick||"",Jt=>{if(Gt.stop(),!Jt){l[_t]=null,lt();return}const kt=Jt==="__cur"?Ea(JSON.parse(JSON.stringify(h))):Sn.get(Jt);kt&&(kt.__pick=Jt,l[_t]=kt,u[_t]=Object.assign({},kt.mix),Gt.load(kt),c[1-_t].playing||(o=kt.bpm),ot(),lt())},`Tema de la bandeja ${_t?"B":"A"}`),ae=E("button",{type:"button",class:"btn primary",text:Gt.playing?"■":"▶",disabled:!l[_t],onclick:()=>{if(Gt.playing){Gt.stop(),ae.textContent="▶";return}a.resume();const Jt=c[1-_t];Gt.load(l[_t]),Gt.rack.apply(u[_t]),Gt.start(Jt.playing?Jt.nextBarTime():void 0),ae.textContent="■"}});z.append(E("div",{class:"dj-deck d"+_t},E("h4",{text:"Bandeja "+(_t?"B":"A")}),It,ae,Si({label:"Filtro",value:u[_t]?u[_t].filter:.5,def:.5,color:_t?"#3fd0ff":"#ff4fa0",fmt:Jt=>Jt<.47?"graves":Jt>.53?"agudos":"abierto",onInput:Jt=>{u[_t]&&(u[_t].filter=Jt,Gt.rack.apply(u[_t]))}})))});const ft=E("input",{type:"range",class:"dj-cross",min:"0",max:"1",step:"0.01",value:String(d),"aria-label":"Crossfader"});return ft.addEventListener("input",()=>{d=+ft.value,ot()}),U.append(z,E("div",{class:"dj-row cross"},E("span",{class:"lab",text:"A"}),ft,E("span",{class:"lab",text:"B"}),Si({label:"BPM",value:(o-60)/120,color:"#f6b40e",fmt:_t=>String(Math.round(60+_t*120)),onInput:_t=>{o=Math.round(60+_t*120)}})),E("p",{class:"muted small",text:j.length?"Los dos temas se sincronizan al BPM del centro. La segunda bandeja entra justo al empezar el próximo compás.":'Todavía no tenés temas guardados: armá uno y tocá Guardar en "5 · Armar".'})),U}function ot(){const U=Math.cos(d*Math.PI/2),z=Math.sin(d*Math.PI/2),j=a.ctx.currentTime;c[0].rack.deck.gain.setTargetAtTime(U,j,.02),c[1].rack.deck.gain.setTargetAtTime(z,j,.02)}function Ft(){if(!Sn.save(h)){Ve("No pude guardar: se llenó el almacenamiento del navegador");return}f=JSON.stringify(h);let z=`Guardado: ${h.name}`;!h.xpGiven&&s_(h)>=3&&(h.xpGiven=!0,Sn.save(h),f=JSON.stringify(h),he.addXp(20),z+=" · +20 XP"),ua.save(h),Ve(z),C.textContent=h.name}async function Et(U){if(!rt(h)){Ve("Armá algo primero");return}const z=U.textContent;U.disabled=!0,U.textContent="Exportando…";try{const j=await Qx(h,a.sampleBuffer),it=E("a",{href:URL.createObjectURL(j),download:(h.name.replace(/[^\w\- ]+/g,"").trim()||"tema")+".wav"});document.body.append(it),it.click(),it.remove(),setTimeout(()=>URL.revokeObjectURL(it.href),4e3),Ve("Listo: se descargó el WAV")}catch(j){console.warn(j),Ve("No se pudo exportar")}U.disabled=!1,U.textContent=z}function Rt(U){r.stop(),h=Ea(U),v=0,m=0,f=JSON.stringify(h),ua.save(h),G(),Q(),$t()}function se(){let U=null;const z=E("div",{class:"dj-lib"}),j=()=>{const it=Sn.list(),ft=[...new Set(it.map(Gt=>Gt.folder))],_t=Y();z.replaceChildren(...[E("div",{class:"dj-row"},E("button",{type:"button",class:"btn primary",text:"Tema nuevo",onclick:Gt=>{if(_t&&U!=="new"){U="new",Gt.currentTarget.textContent="¿Seguro? Se pierde lo no guardado";return}Rt(Tc()),ze()}})),it.length?null:E("p",{class:"muted",text:"Todavía no guardaste temas. Armá uno y tocá Guardar."}),...ft.map(Gt=>E("div",{class:"lib-folder"},E("h4",{text:"📁 "+Gt}),...it.filter(It=>It.folder===Gt).map(It=>E("div",{class:"lib-row"},E("span",{class:"lib-name",text:It.name}),E("span",{class:"muted small",text:`${It.bpm} BPM · ${Fn[It.scale].name}`}),E("button",{type:"button",class:"btn ghost sm",text:"Abrir",onclick:ae=>{if(_t&&U!==It.id){U=It.id,ae.currentTarget.textContent="¿Seguro?";return}Rt(It),ze()}}),E("button",{type:"button",class:"btn ghost sm","aria-label":"Borrar "+It.name,text:"🗑",onclick:ae=>{if(U!=="del"+It.id){U="del"+It.id,ae.currentTarget.textContent="¿Borrar?";return}Sn.remove(It.id),U=null,j()}})))))].filter(Boolean))};j(),ii(E("div",null,E("header",{class:"dlg-head"},E("h2",{text:"Mis temas"}),E("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>ze()})),z),{cls:"wide"})}const R=E("input",{type:"file",accept:"audio/*",hidden:!0});R.addEventListener("change",async()=>{const U=R.files&&R.files[0];if(R.value="",!!U){if(U.size>12*1024*1024){Ve("El audio es muy pesado (máx. 12 MB)");return}try{await A(await U.arrayBuffer(),U.name.slice(0,24))}catch{Ve("No pude leer ese audio")}}}),ct.append(R);async function A(U,z){a.resume();let j=await a.ctx.decodeAudioData(U);const it=Math.floor(j.sampleRate*10);if(j.length>it){const ft=a.ctx.createBuffer(j.numberOfChannels,it,j.sampleRate);for(let _t=0;_t<j.numberOfChannels;_t++)ft.copyToChannel(j.getChannelData(_t).subarray(0,it),_t);j=ft,Ve("Usé solo los primeros 10 segundos")}a.setSample(j),p=z,lt(),Ve('Sample cargado: marcalo en la fila "Sample"')}async function $(){if(y){y.stop();return}if(!navigator.mediaDevices||!window.MediaRecorder){Ve("Tu navegador no puede grabar");return}try{const U=await navigator.mediaDevices.getUserMedia({audio:!0}),z=new MediaRecorder(U),j=[];z.ondataavailable=ft=>{ft.data.size&&j.push(ft.data)},z.onstop=async()=>{U.getTracks().forEach(ft=>ft.stop()),clearTimeout(it),y=null;try{await A(await new Blob(j,{type:z.mimeType}).arrayBuffer(),"grabación")}catch{Ve("No pude usar esa grabación")}M||lt()};const it=setTimeout(()=>{z.state==="recording"&&z.stop()},1e4);z.start(),y=z,lt(),Ve("Grabando… (máx. 10 s)")}catch{Ve("No tengo permiso para usar el micrófono")}}const ht=U=>{/INPUT|TEXTAREA|SELECT/.test(U.target&&U.target.tagName)||U.key===" "&&g!=="set"&&(U.preventDefault(),Dt())};addEventListener("keydown",ht);const st=()=>a.resume();addEventListener("pointerdown",st);let mt=0;function pt(){const U=innerWidth,z=innerHeight;e.aspect=U/z;const j=k.getBoundingClientRect().height;e.setViewOffset(U,z,0,Math.round((j-44)/2),U,z),e.updateProjectionMatrix()}function St(U){const z=r.playing&&U&&g!=="armar"&&g!=="set"?U.step:-1;if(z!==D){if(D>=0&&T[D])for(const it of T[D])it.classList.remove("now");if(z>=0&&T[z])for(const it of T[z])it.classList.add("now");D=z}const j=r.playing&&U&&g==="armar"?U.arrPos:-1;j!==P&&(I[P]&&I[P].classList.remove("now"),I[j]&&I[j].classList.add("now"),P=j)}function F(U,z){for(const ae of a.popCues(a.ctx.currentTime))s.hit(ae.type);a.analyser.getByteFrequencyData(B);let j=null,it=null,ft=!1;g==="set"?(j=c[0].playing?c[0]:c[1].playing?c[1]:null,it=j===c[0]?l[0]:l[1],ft=!!j):(j=r,it=h,ft=r.playing);const _t=j&&ft?j.position():null;let Gt=0,It=-1;if(_t){const ae=Vs(it,g==="set"?o:void 0);Gt=(_t.arrPos*Re+_t.step+Gu((a.ctx.currentTime-_t.time)/ae,0,1))/4,It=_t.step}St(g==="set"?null:_t),s.update(U,z,{spectrum:B,beat:Gt,playing:!!_t,step:It,decks:g==="set"?[c[0].playing,c[1].playing]:[r.playing,r.playing],fader:g==="set"?d:.5,knob:h.mix.filter}),mt+=U,e.position.set(Math.sin(mt*.25)*1,4+Math.sin(mt*.2)*.12,gt()),e.lookAt(0,1.3,-2.5)}const gt=()=>{const U=innerWidth/innerHeight;return U<1?13+(1-U)*10:U<1.4?13:11.5};if(f=JSON.stringify(h),G(),Q(),ot(),$t(),pt(),typeof ResizeObserver<"u"){const U=new ResizeObserver(()=>pt());U.observe(k),N.push(()=>U.disconnect())}return{scene:t,camera:e,update:F,resize(){pt()},dispose(){M=!0,clearTimeout(S),ua.save(h),removeEventListener("keydown",ht),removeEventListener("pointerdown",st),x&&(removeEventListener("pointerup",x),removeEventListener("pointercancel",x));for(const U of N)U();if(y)try{y.stop()}catch{}ze(),s.dispose(),a.close(),ni()}}}const wr=new Iv(document.getElementById("gl"));function Ta(){wr.setScene(()=>ex({onEditLook:()=>Wu(),onPlay:i=>l_(i)}))}function l_(i){i==="futbol"?wr.setScene(()=>Ux({onExit:Ta})):i==="dj"&&wr.setScene(()=>c_({onExit:Ta}))}function Wu(){wr.setScene(()=>Wv({onDone:Ta,onCancel:Ta}))}he.load().then(()=>{he.hasCharacter()?Ta():Wu()});
