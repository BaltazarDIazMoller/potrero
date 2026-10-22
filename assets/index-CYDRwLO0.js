(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="170",$h=0,mc=1,jh=2,Kl=1,Kh=2,Bn=3,En=0,Fe=1,xe=2,ci=0,us=1,gc=2,vc=3,_c=4,Zh=5,wi=100,Jh=101,Qh=102,tu=103,eu=104,nu=200,iu=201,su=202,ru=203,Va=204,Ga=205,au=206,ou=207,cu=208,lu=209,hu=210,uu=211,fu=212,du=213,pu=214,Wa=0,Xa=1,qa=2,ms=3,Ya=4,$a=5,ja=6,Ka=7,Zl=0,mu=1,gu=2,li=0,vu=1,_u=2,xu=3,Mu=4,yu=5,Su=6,bu=7,Jl=300,gs=301,vs=302,Za=303,Ja=304,Zr=306,ui=1e3,Ai=1001,Qa=1002,$e=1003,Eu=1004,sr=1005,Sn=1006,ia=1007,Ci=1008,qn=1009,Ql=1010,th=1011,Ys=1012,Bo=1013,Di=1014,bn=1015,Qs=1016,ko=1017,Ho=1018,_s=1020,eh=35902,nh=1021,ih=1022,pn=1023,sh=1024,rh=1025,fs=1026,xs=1027,Jr=1028,Vo=1029,ah=1030,Go=1031,Wo=1033,zr=33776,Fr=33777,Or=33778,Br=33779,to=35840,eo=35841,no=35842,io=35843,so=36196,ro=37492,ao=37496,oo=37808,co=37809,lo=37810,ho=37811,uo=37812,fo=37813,po=37814,mo=37815,go=37816,vo=37817,_o=37818,xo=37819,Mo=37820,yo=37821,kr=36492,So=36494,bo=36495,oh=36283,Eo=36284,wo=36285,To=36286,wu=3200,Tu=3201,ch=0,Au=1,ai="",Pe="srgb",ys="srgb-linear",Qr="linear",de="srgb",Bi=7680,xc=519,Cu=512,Ru=513,Pu=514,lh=515,Lu=516,Du=517,Iu=518,Uu=519,Ao=35044,Mc="300 es",Hn=2e3,Wr=2001;class Ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yc=1234567;const Vs=Math.PI/180,$s=180/Math.PI;function Vn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Xo(i,t){return(i%t+t)%t}function Nu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zu(i,t,e){return i!==t?(e-i)/(t-i):0}function Gs(i,t,e){return(1-e)*i+e*t}function Fu(i,t,e,n){return Gs(i,t,1-Math.exp(-e*n))}function Ou(i,t=1){return t-Math.abs(Xo(i,t*2)-t)}function Bu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ku(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vu(i,t){return i+Math.random()*(t-i)}function Gu(i){return i*(.5-Math.random())}function Wu(i){i!==void 0&&(yc=i);let t=yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xu(i){return i*Vs}function qu(i){return i*$s}function Yu(i){return(i&i-1)===0&&i!==0}function $u(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ku(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*f,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Hr={DEG2RAD:Vs,RAD2DEG:$s,generateUUID:Vn,clamp:Ne,euclideanModulo:Xo,mapLinear:Nu,inverseLerp:zu,lerp:Gs,damp:Fu,pingpong:Ou,smoothstep:Bu,smootherstep:ku,randInt:Hu,randFloat:Vu,randFloatSpread:Gu,seededRandom:Wu,degToRad:Xu,radToDeg:qu,isPowerOfTwo:Yu,ceilPowerOfTwo:$u,floorPowerOfTwo:ju,setQuaternionFromProperEuler:Ku,normalize:fe,denormalize:dn};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,a,o,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],S=s[4],x=s[7],D=s[2],C=s[5],T=s[8];return r[0]=a*v+o*M+c*D,r[3]=a*m+o*S+c*C,r[6]=a*p+o*x+c*T,r[1]=l*v+h*M+f*D,r[4]=l*m+h*S+f*C,r[7]=l*p+h*x+f*T,r[2]=u*v+d*M+g*D,r[5]=u*m+d*S+g*C,r[8]=u*p+d*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new Xt;function hh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zu(){const i=Xr("canvas");return i.style.display="block",i}const Sc={};function Bs(i){i in Sc||(Sc[i]=!0,console.warn(i))}function Ju(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Qu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?Qr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bc=[.64,.33,.3,.6,.15,.06],Ec=[.2126,.7152,.0722],wc=[.3127,.329],Tc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[ys]:{primaries:bc,whitePoint:wc,transfer:Qr,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:Ec,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:bc,whitePoint:wc,transfer:de,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:Ec,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let ki;class ef{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Xr("canvas")),ki.width=t.width,ki.height=t.height;const n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nf=0;class uh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ra(s[a].image)):r.push(ra(s[a]))}else r=ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ef.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;class Ge extends Ss{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Ai,s=Ai,r=Sn,a=Ci,o=pn,c=qn,l=Ge.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Vn(),this.name="",this.source=new uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Jl;Ge.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(d+1)/2,D=(p+1)/2,C=(h+u)/4,T=(f+v)/4,P=(g+m)/4;return S>x&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=C/n,r=T/n):x>D?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=C/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=T/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rf extends Ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends rf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fh extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class di{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==u||l!==d||h!==g){let m=1-o;const p=c*u+l*d+h*g+f*v,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),C=Math.atan2(D,p*M);m=Math.sin(m*C)/D,o=Math.sin(o*C)/D}const x=o*M;if(c=c*m+u*x,l=l*m+d*x,h=h*m+g*x,f=f*m+v*x,m===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=D,l*=D,h*=D,f*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new N,Cc=new di;class Ni{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),ar.subVectors(this.max,Cs),Hi.subVectors(t.a,Cs),Vi.subVectors(t.b,Cs),Gi.subVectors(t.c,Cs),Zn.subVectors(Vi,Hi),Jn.subVectors(Gi,Vi),gi.subVectors(Hi,Gi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-gi.z,gi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,gi.z,0,-gi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-gi.y,gi.x,0];return!oa(e,Hi,Vi,Gi,ar)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,Hi,Vi,Gi,ar))?!1:(or.crossVectors(Zn,Jn),e=[or.x,or.y,or.z],oa(e,Hi,Vi,Gi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new N,new N,new N,new N,new N,new N,new N,new N],on=new N,rr=new Ni,Hi=new N,Vi=new N,Gi=new N,Zn=new N,Jn=new N,gi=new N,Cs=new N,ar=new N,or=new N,vi=new N;function oa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);const o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const of=new Ni,Rs=new N,ca=new N;class bs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):of.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(ca)),this.expandByPoint(Rs.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new N,la=new N,cr=new N,Qn=new N,ha=new N,lr=new N,ua=new N;class dh{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){la.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(la);const r=t.distanceTo(e)*.5,a=-this.direction.dot(cr),o=Qn.dot(this.direction),c=-Qn.dot(cr),l=Qn.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(la).addScaledVector(cr,u),d}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){ha.subVectors(e,t),lr.subVectors(n,t),ua.crossVectors(ha,lr);let a=this.direction.dot(ua),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,t);const c=o*this.direction.dot(lr.crossVectors(Qn,lr));if(c<0)return null;const l=o*this.direction.dot(ha.cross(Qn));if(l<0||c+l>a)return null;const h=-o*Qn.dot(ua);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,r,a,o,c,l,h,f,u,d,g,v,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,d,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,f,u,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,v=l*f;e[0]=u+v*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,v=l*f;e[0]=u-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,d=a*f,g=o*h,v=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+v,e[1]=c*f,e[5]=v*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-v*f}else if(t.order==="XZY"){const u=a*c,d=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,lf)}lookAt(t,e,n){const s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ti.crossVectors(n,Qe),ti.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ti.crossVectors(n,Qe)),ti.normalize(),hr.crossVectors(Qe,ti),s[0]=ti.x,s[4]=hr.x,s[8]=Qe.x,s[1]=ti.y,s[5]=hr.y,s[9]=Qe.y,s[2]=ti.z,s[6]=hr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],D=n[15],C=s[0],T=s[4],P=s[8],b=s[12],_=s[1],L=s[5],F=s[9],V=s[13],Y=s[2],Q=s[6],H=s[10],et=s[14],G=s[3],ht=s[7],pt=s[11],yt=s[15];return r[0]=a*C+o*_+c*Y+l*G,r[4]=a*T+o*L+c*Q+l*ht,r[8]=a*P+o*F+c*H+l*pt,r[12]=a*b+o*V+c*et+l*yt,r[1]=h*C+f*_+u*Y+d*G,r[5]=h*T+f*L+u*Q+d*ht,r[9]=h*P+f*F+u*H+d*pt,r[13]=h*b+f*V+u*et+d*yt,r[2]=g*C+v*_+m*Y+p*G,r[6]=g*T+v*L+m*Q+p*ht,r[10]=g*P+v*F+m*H+p*pt,r[14]=g*b+v*V+m*et+p*yt,r[3]=M*C+S*_+x*Y+D*G,r[7]=M*T+S*L+x*Q+D*ht,r[11]=M*P+S*F+x*H+D*pt,r[15]=M*b+S*V+x*et+D*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*o*u+n*l*u+s*o*d-n*c*d)+v*(+e*c*d-e*l*u+r*a*u-s*a*d+s*l*h-r*c*h)+m*(+e*l*f-e*o*d-r*a*f+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-e*c*f+e*o*u+s*a*f-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],M=f*m*l-v*u*l+v*c*d-o*m*d-f*c*p+o*u*p,S=g*u*l-h*m*l-g*c*d+a*m*d+h*c*p-a*u*p,x=h*v*l-g*f*l+g*o*d-a*v*d-h*o*p+a*f*p,D=g*f*c-h*v*c-g*o*u+a*v*u+h*o*m-a*f*m,C=e*M+n*S+s*x+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return t[0]=M*T,t[1]=(v*u*r-f*m*r-v*s*d+n*m*d+f*s*p-n*u*p)*T,t[2]=(o*m*r-v*c*r+v*s*l-n*m*l-o*s*p+n*c*p)*T,t[3]=(f*c*r-o*u*r-f*s*l+n*u*l+o*s*d-n*c*d)*T,t[4]=S*T,t[5]=(h*m*r-g*u*r+g*s*d-e*m*d-h*s*p+e*u*p)*T,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*T,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*d+e*c*d)*T,t[8]=x*T,t[9]=(g*f*r-h*v*r-g*n*d+e*v*d+h*n*p-e*f*p)*T,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*f*r-h*n*l+e*f*l+a*n*d-e*o*d)*T,t[12]=D*T,t[13]=(h*v*s-g*f*s+g*n*u-e*v*u-h*n*m+e*f*m)*T,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*m-e*o*m)*T,t[15]=(a*f*s-h*o*s+h*n*c-e*f*c-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,g=r*f,v=a*h,m=a*f,p=o*f,M=c*l,S=c*h,x=c*f,D=n.x,C=n.y,T=n.z;return s[0]=(1-(v+p))*D,s[1]=(d+x)*D,s[2]=(g-S)*D,s[3]=0,s[4]=(d-x)*C,s[5]=(1-(u+p))*C,s[6]=(m+M)*C,s[7]=0,s[8]=(g+S)*T,s[9]=(m-M)*T,s[10]=(1-(u+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Wi.set(s[0],s[1],s[2]).length();const a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const l=1/r,h=1/a,f=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=f,cn.elements[9]*=f,cn.elements[10]*=f,e.setFromRotationMatrix(cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Hn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let d,g;if(o===Hn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Wr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Hn){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(a-r),u=(e+t)*l,d=(n+s)*h;let g,v;if(o===Hn)g=(a+r)*f,v=-2*f;else if(o===Wr)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wi=new N,cn=new ue,cf=new N(0,0,0),lf=new N(1,1,1),ti=new N,hr=new N,Qe=new N,Rc=new ue,Pc=new di;class wn{constructor(t=0,e=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hf=0;const Lc=new N,Xi=new di,Dn=new ue,ur=new N,Ps=new N,uf=new N,ff=new di,Dc=new N(1,0,0),Ic=new N(0,1,0),Uc=new N(0,0,1),Nc={type:"added"},df={type:"removed"},qi={type:"childadded",child:null},fa={type:"childremoved",child:null};class Ae extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new N,e=new wn,n=new di,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Xt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Ic,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Ic,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ps,ur,this.up):Dn.lookAt(ur,Ps,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(df),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new N(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new N,In=new N,da=new N,Un=new N,Yi=new N,$i=new N,zc=new N,pa=new N,ma=new N,ga=new N,va=new be,_a=new be,xa=new be;class sn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),In.subVectors(n,e),da.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(In),c=ln.dot(da),l=In.dot(In),h=In.dot(da),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return va.setScalar(0),_a.setScalar(0),xa.setScalar(0),va.fromBufferAttribute(t,e),_a.fromBufferAttribute(t,n),xa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(va,r.x),a.addScaledVector(_a,r.y),a.addScaledVector(xa,r.z),a}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),In.subVectors(t,e),ln.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Yi.subVectors(s,n),$i.subVectors(r,n),pa.subVectors(t,n);const c=Yi.dot(pa),l=$i.dot(pa);if(c<=0&&l<=0)return e.copy(n);ma.subVectors(t,s);const h=Yi.dot(ma),f=$i.dot(ma);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Yi,a);ga.subVectors(t,r);const d=Yi.dot(ga),g=$i.dot(ga);if(g>=0&&d<=g)return e.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector($i,o);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return zc.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(zc,o);const p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(Yi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Xo(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ma(a,r,t+1/3),this.g=Ma(a,r,t),this.b=Ma(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=mh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return ae.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ne(ke.r*255,0,255))*65536+Math.round(Ne(ke.g*255,0,255))*256+Math.round(Ne(ke.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Pe){ae.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(fr);const n=Gs(ei.h,fr.h,e),s=Gs(ei.s,fr.s,e),r=Gs(ei.l,fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new qt;qt.NAMES=mh;let pf=0;class zi extends Ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Vn(),this.name="",this.blending=us,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ce extends zi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new N,dr=new Et;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ao&&(t.usage=this.usage),t}}class gh extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vh extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let mf=0;const nn=new ue,ya=new Ae,ji=new N,tn=new Ni,Ls=new Ni,Ie=new N;class Oe extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hh(t)?vh:gh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(tn.min,Ls.min),tn.expandByPoint(Ie),Ie.addVectors(tn.max,Ls.max),tn.expandByPoint(Ie)):(tn.expandByPoint(Ls.min),tn.expandByPoint(Ls.max))}tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ie.fromBufferAttribute(o,l),c&&(ji.fromBufferAttribute(t,l),Ie.add(ji)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new N,c[P]=new N;const l=new N,h=new N,f=new N,u=new Et,d=new Et,g=new Et,v=new N,m=new N;function p(P,b,_){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,_),u.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[P].add(v),o[b].add(v),o[_].add(v),c[P].add(m),c[b].add(m),c[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,b=M.length;P<b;++P){const _=M[P],L=_.start,F=_.count;for(let V=L,Y=L+F;V<Y;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const S=new N,x=new N,D=new N,C=new N;function T(P){D.fromBufferAttribute(s,P),C.copy(D);const b=o[P];S.copy(b),S.sub(D.multiplyScalar(D.dot(b))).normalize(),x.crossVectors(C,b);const L=x.dot(c[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,L)}for(let P=0,b=M.length;P<b;++P){const _=M[P],L=_.start,F=_.count;for(let V=L,Y=L+F;V<Y;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new Ve(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new ue,_i=new dh,pr=new bs,Oc=new N,mr=new N,gr=new N,vr=new N,Sa=new N,_r=new N,Bc=new N,xr=new N;class nt extends Ae{constructor(t=new Oe,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(Sa.fromBufferAttribute(f,t),a?_r.addScaledVector(Sa,h):_r.addScaledVector(Sa.sub(e),h))}e.add(_r)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(pr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(pr,Oc)===null||_i.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Fc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,D=S;x<D;x+=3){const C=o.getX(x),T=o.getX(x+1),P=o.getX(x+2);s=Mr(this,p,t,n,l,h,f,C,T,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const M=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);s=Mr(this,a,t,n,l,h,f,M,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,D=S;x<D;x+=3){const C=x,T=x+1,P=x+2;s=Mr(this,p,t,n,l,h,f,C,T,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const M=m,S=m+1,x=m+2;s=Mr(this,a,t,n,l,h,f,M,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function gf(i,t,e,n,s,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===En,o),c===null)return null;xr.copy(o),xr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(xr);return l<e.near||l>e.far?null:{distance:l,point:xr.clone(),object:i}}function Mr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,mr),i.getVertexPosition(c,gr),i.getVertexPosition(l,vr);const h=gf(i,t,e,n,mr,gr,vr,Bc);if(h){const f=new N;sn.getBarycoord(Bc,mr,gr,vr,f),s&&(h.uv=sn.getInterpolatedAttribute(s,o,c,l,f,new Et)),r&&(h.uv1=sn.getInterpolatedAttribute(r,o,c,l,f,new Et)),a&&(h.normal=sn.getInterpolatedAttribute(a,o,c,l,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new N,materialIndex:0};sn.getNormal(mr,gr,vr,u.normal),h.face=u,h.barycoord=f}return h}class Wt extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function g(v,m,p,M,S,x,D,C,T,P,b){const _=x/T,L=D/P,F=x/2,V=D/2,Y=C/2,Q=T+1,H=P+1;let et=0,G=0;const ht=new N;for(let pt=0;pt<H;pt++){const yt=pt*L-V;for(let Ft=0;Ft<Q;Ft++){const j=Ft*_-F;ht[v]=j*M,ht[m]=yt*S,ht[p]=Y,l.push(ht.x,ht.y,ht.z),ht[v]=0,ht[m]=0,ht[p]=C>0?1:-1,h.push(ht.x,ht.y,ht.z),f.push(Ft/T),f.push(1-pt/P),et+=1}}for(let pt=0;pt<P;pt++)for(let yt=0;yt<T;yt++){const Ft=u+yt+Q*pt,j=u+yt+Q*(pt+1),U=u+(yt+1)+Q*(pt+1),q=u+(yt+1)+Q*pt;c.push(Ft,j,q),c.push(j,U,q),G+=6}o.addGroup(d,G,b),d+=G,u+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=Ms(i[e]);for(const s in n)t[s]=n[s]}return t}function vf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _h(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const _f={clone:Ms,merge:qe};var xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends zi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xh extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new N,kc=new Et,Hc=new Et;class Ze extends xh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,kc,Hc),e.subVectors(Hc,kc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Zi=1;class yf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Ki,Zi,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Ki,Zi,t,e);r.layers=this.layers,this.add(r);const a=new Ze(Ki,Zi,t,e);a.layers=this.layers,this.add(a);const o=new Ze(Ki,Zi,t,e);o.layers=this.layers,this.add(o);const c=new Ze(Ki,Zi,t,e);c.layers=this.layers,this.add(c);const l=new Ze(Ki,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mh extends Ge{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gs,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sf extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:ci});r.uniforms.tEquirect.value=e;const a=new nt(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Sn),new yf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const ba=new N,bf=new N,Ef=new Xt;class bi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ba.subVectors(n,e).cross(bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ef.getNormalMatrix(t),s=this.coplanarPoint(ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new bs,yr=new N;class qo{constructor(t=new bi,e=new bi,n=new bi,s=new bi,r=new bi,a=new bi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],S=s[14],x=s[15];if(n[0].setComponents(c-r,u-l,m-d,x-p).normalize(),n[1].setComponents(c+r,u+l,m+d,x+p).normalize(),n[2].setComponents(c+a,u+h,m+g,x+M).normalize(),n[3].setComponents(c-a,u-h,m-g,x-M).normalize(),n[4].setComponents(c-o,u-f,m-v,x-S).normalize(),e===Hn)n[5].setComponents(c+o,u+f,m+v,x+S).normalize();else if(e===Wr)n[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wf(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class mn extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let S=0;S<l;S++){const x=S*f-r;g.push(x,-M,0),v.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const S=M+l*p,x=M+l*(p+1),D=M+1+l*(p+1),C=M+1+l*p;d.push(S,x,C),d.push(x,D,C)}this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Tf=`#ifdef USE_ALPHAHASH
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,kf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jf=`#define PI 3.141592653589793
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
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
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bd=`PhysicalMaterial material;
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
#endif`,Ed=`struct PhysicalMaterial {
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
}`,wd=`
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Od=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
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
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hp=`float getShadowMask() {
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
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Vp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,jp=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,Zp=`#define TOON
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
}`,Jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:Cf,alphamap_pars_fragment:Rf,alphatest_fragment:Pf,alphatest_pars_fragment:Lf,aomap_fragment:Df,aomap_pars_fragment:If,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:zf,beginnormal_vertex:Ff,bsdfs:Of,iridescence_fragment:Bf,bumpmap_pars_fragment:kf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:$f,common:jf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Qf,emissivemap_fragment:td,emissivemap_pars_fragment:ed,colorspace_fragment:nd,colorspace_pars_fragment:id,envmap_fragment:sd,envmap_common_pars_fragment:rd,envmap_pars_fragment:ad,envmap_pars_vertex:od,envmap_physical_pars_fragment:_d,envmap_vertex:cd,fog_vertex:ld,fog_pars_vertex:hd,fog_fragment:ud,fog_pars_fragment:fd,gradientmap_pars_fragment:dd,lightmap_pars_fragment:pd,lights_lambert_fragment:md,lights_lambert_pars_fragment:gd,lights_pars_begin:vd,lights_toon_fragment:xd,lights_toon_pars_fragment:Md,lights_phong_fragment:yd,lights_phong_pars_fragment:Sd,lights_physical_fragment:bd,lights_physical_pars_fragment:Ed,lights_fragment_begin:wd,lights_fragment_maps:Td,lights_fragment_end:Ad,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Pd,logdepthbuf_vertex:Ld,map_fragment:Dd,map_pars_fragment:Id,map_particle_fragment:Ud,map_particle_pars_fragment:Nd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Fd,morphinstance_vertex:Od,morphcolor_vertex:Bd,morphnormal_vertex:kd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Vd,normal_fragment_begin:Gd,normal_fragment_maps:Wd,normal_pars_fragment:Xd,normal_pars_vertex:qd,normal_vertex:Yd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:Jd,opaque_fragment:Qd,packing:tp,premultiplied_alpha_fragment:ep,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:op,shadowmap_pars_vertex:cp,shadowmap_vertex:lp,shadowmask_pars_fragment:hp,skinbase_vertex:up,skinning_pars_vertex:fp,skinning_vertex:dp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:vp,tonemapping_pars_fragment:_p,transmission_fragment:xp,transmission_pars_fragment:Mp,uv_pars_fragment:yp,uv_pars_vertex:Sp,uv_vertex:bp,worldpos_vertex:Ep,background_vert:wp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:Cp,cube_vert:Rp,cube_frag:Pp,depth_vert:Lp,depth_frag:Dp,distanceRGBA_vert:Ip,distanceRGBA_frag:Up,equirect_vert:Np,equirect_frag:zp,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:kp,meshlambert_vert:Hp,meshlambert_frag:Vp,meshmatcap_vert:Gp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:$p,meshphysical_vert:jp,meshphysical_frag:Kp,meshtoon_vert:Zp,meshtoon_frag:Jp,points_vert:Qp,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},St={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},yn={basic:{uniforms:qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:qe([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:qe([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:qe([St.points,St.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:qe([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:qe([St.common,St.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:qe([St.sprite,St.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:qe([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:qe([St.lights,St.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};yn.physical={uniforms:qe([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Sr={r:0,b:0,g:0},Mi=new wn,rm=new ue;function am(i,t,e,n,s,r,a){const o=new qt(0);let c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function v(M){let S=!1;const x=g(M);x===null?p(o,c):x&&x.isColor&&(p(x,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Zr)?(h===void 0&&(h=new nt(new Wt(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ms(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(S.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(Mi)),h.material.toneMapped=ae.getTransfer(x.colorSpace)!==de,(f!==x||u!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new nt(new mn(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ms(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ae.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,S){M.getRGB(Sr,_h(i)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:v,addToRenderList:m}}function om(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(_,L,F,V,Y){let Q=!1;const H=f(V,F,L);r!==H&&(r=H,l(r.object)),Q=d(_,V,F,Y),Q&&g(_,V,F,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,x(_,L,F,V),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,L,F){const V=F.wireframe===!0;let Y=n[_.id];Y===void 0&&(Y={},n[_.id]=Y);let Q=Y[L.id];Q===void 0&&(Q={},Y[L.id]=Q);let H=Q[V];return H===void 0&&(H=u(c()),Q[V]=H),H}function u(_){const L=[],F=[],V=[];for(let Y=0;Y<e;Y++)L[Y]=0,F[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:V,object:_,attributes:{},index:null}}function d(_,L,F,V){const Y=r.attributes,Q=L.attributes;let H=0;const et=F.getAttributes();for(const G in et)if(et[G].location>=0){const pt=Y[G];let yt=Q[G];if(yt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function g(_,L,F,V){const Y={},Q=L.attributes;let H=0;const et=F.getAttributes();for(const G in et)if(et[G].location>=0){let pt=Q[G];pt===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor));const yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),Y[G]=yt,H++}r.attributes=Y,r.attributesNum=H,r.index=V}function v(){const _=r.newAttributes;for(let L=0,F=_.length;L<F;L++)_[L]=0}function m(_){p(_,0)}function p(_,L){const F=r.newAttributes,V=r.enabledAttributes,Y=r.attributeDivisors;F[_]=1,V[_]===0&&(i.enableVertexAttribArray(_),V[_]=1),Y[_]!==L&&(i.vertexAttribDivisor(_,L),Y[_]=L)}function M(){const _=r.newAttributes,L=r.enabledAttributes;for(let F=0,V=L.length;F<V;F++)L[F]!==_[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function S(_,L,F,V,Y,Q,H){H===!0?i.vertexAttribIPointer(_,L,F,Y,Q):i.vertexAttribPointer(_,L,F,V,Y,Q)}function x(_,L,F,V){v();const Y=V.attributes,Q=F.getAttributes(),H=L.defaultAttributeValues;for(const et in Q){const G=Q[et];if(G.location>=0){let ht=Y[et];if(ht===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor)),ht!==void 0){const pt=ht.normalized,yt=ht.itemSize,Ft=t.get(ht);if(Ft===void 0)continue;const j=Ft.buffer,U=Ft.type,q=Ft.bytesPerElement,at=U===i.INT||U===i.UNSIGNED_INT||ht.gpuType===Bo;if(ht.isInterleavedBufferAttribute){const ct=ht.data,bt=ct.stride,At=ht.offset;if(ct.isInstancedInterleavedBuffer){for(let Lt=0;Lt<G.locationSize;Lt++)p(G.location+Lt,ct.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Lt=0;Lt<G.locationSize;Lt++)m(G.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Lt=0;Lt<G.locationSize;Lt++)S(G.location+Lt,yt/G.locationSize,U,pt,bt*q,(At+yt/G.locationSize*Lt)*q,at)}else{if(ht.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct,ht.meshPerAttribute);_.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ct=0;ct<G.locationSize;ct++)S(G.location+ct,yt/G.locationSize,U,pt,yt*q,yt/G.locationSize*ct*q,at)}}else if(H!==void 0){const pt=H[et];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(G.location,pt);break;case 3:i.vertexAttrib3fv(G.location,pt);break;case 4:i.vertexAttrib4fv(G.location,pt);break;default:i.vertexAttrib1fv(G.location,pt)}}}}M()}function D(){P();for(const _ in n){const L=n[_];for(const F in L){const V=L[F];for(const Y in V)h(V[Y].object),delete V[Y];delete L[F]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;const L=n[_.id];for(const F in L){const V=L[F];for(const Y in V)h(V[Y].object),delete V[Y];delete L[F]}delete n[_.id]}function T(_){for(const L in n){const F=n[L];if(F[_.id]===void 0)continue;const V=F[_.id];for(const Y in V)h(V[Y].object),delete V[Y];delete F[_.id]}}function P(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function cm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*u[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function lm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==qn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==bn&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:D,maxSamples:C}}function hm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new bi,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,S=M*4;let x=p.clippingState||null;c.value=x,x=h(g,u,S,d);for(let D=0;D!==S;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==v;++S,x+=4)a.copy(f[S]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function um(i){let t=new WeakMap;function e(a,o){return o===Za?a.mapping=gs:o===Ja&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Za||o===Ja)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Sf(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Sh extends xh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ls=4,Vc=[.125,.215,.35,.446,.526,.582],Ti=20,Ea=new Sh,Gc=new qt;let wa=null,Ta=0,Aa=0,Ca=!1;const Ei=(1+Math.sqrt(5))/2,Ji=1/Ei,Wc=[new N(-Ei,Ji,0),new N(Ei,Ji,0),new N(-Ji,0,Ei),new N(Ji,0,Ei),new N(0,Ei,-Ji),new N(0,Ei,Ji),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Ta,Aa),this._renderer.xr.enabled=Ca,t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gs||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Qs,format:pn,colorSpace:ys,depthBuffer:!1},s=qc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fm(r)),this._blurMaterial=dm(r,t,e)}return s}_compileMaterial(t){const e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,Ea)}_sceneToCubeUV(t,e,n,s){const o=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Gc),h.toneMapping=li,h.autoClear=!1;const d=new ce({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new nt(new Wt,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Gc),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const S=this._cubeSize;br(s,M*S,p>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===gs||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;br(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wc[(s-r-1)%Wc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new nt(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let M=0;for(let T=0;T<Ti;++T){const P=T/v,b=Math.exp(-P*P/2);p.push(b),T===0?M+=b:T<m&&(M+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const x=this._sizeLods[s],D=3*x*(s>S-ls?s-S+ls:0),C=4*(this._cubeSize-x);br(e,D,C,3*x,2*x),c.setRenderTarget(e),c.render(f,Ea)}}function fm(i){const t=[],e=[],n=[];let s=i;const r=i-ls+1+Vc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ls?c=Vc[a-i+ls-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*d),S=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let C=0;C<d;C++){const T=C%3*2/3-1,P=C>2?0:-1,b=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];M.set(b,v*g*C),S.set(u,m*g*C);const _=[C,C,C,C,C,C];x.set(_,p*g*C)}const D=new Oe;D.setAttribute("position",new Ve(M,v)),D.setAttribute("uv",new Ve(S,m)),D.setAttribute("faceIndex",new Ve(x,p)),t.push(D),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qc(i,t,e){const n=new Ii(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dm(i,t,e){const n=new Float32Array(Ti),s=new N(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Yc(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function $c(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Yo(){return`

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
	`}function pm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Za||c===Ja,h=c===gs||c===vs;if(l||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Xc(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Xc(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gm(i,t,e,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(f){const u=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const M=d.array;v=d.version;for(let S=0,x=M.length;S<x;S+=3){const D=M[S+0],C=M[S+1],T=M[S+2];u.push(D,C,C,T,T,D)}}else if(g!==void 0){const M=g.array;v=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const D=S+0,C=S+1,T=S+2;u.push(D,C,C,T,T,D)}}else return;const m=new(hh(u)?vh:gh)(u,1);m.version=v;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function vm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function l(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*a,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(u,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*v[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function _m(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function xm(i,t,e){const n=new WeakMap,s=new be;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var d=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let D=o.attributes.position.count*x,C=1;D>t.maxTextureSize&&(C=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const T=new Float32Array(D*C*4*f),P=new fh(T,D,C,f);P.type=bn,P.needsUpdate=!0;const b=x*4;for(let L=0;L<f;L++){const F=p[L],V=M[L],Y=S[L],Q=D*C*4*L;for(let H=0;H<F.count;H++){const et=H*b;g===!0&&(s.fromBufferAttribute(F,H),T[Q+et+0]=s.x,T[Q+et+1]=s.y,T[Q+et+2]=s.z,T[Q+et+3]=0),v===!0&&(s.fromBufferAttribute(V,H),T[Q+et+4]=s.x,T[Q+et+5]=s.y,T[Q+et+6]=s.z,T[Q+et+7]=0),m===!0&&(s.fromBufferAttribute(Y,H),T[Q+et+8]=s.x,T[Q+et+9]=s.y,T[Q+et+10]=s.z,T[Q+et+11]=Y.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new Et(D,C)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Mm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class bh extends Ge{constructor(t,e,n,s,r,a,o,c,l,h=fs){if(h!==fs&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=Di),n===void 0&&h===xs&&(n=_s),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Eh=new Ge,jc=new bh(1,1),wh=new fh,Th=new af,Ah=new Mh,Kc=[],Zc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),tl=new Float32Array(4);function Es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Kc[s];if(r===void 0&&(r=new Float32Array(s),Kc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ta(i,t){let e=Zc[t];e===void 0&&(e=new Int32Array(t),Zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;tl.set(n),i.uniformMatrix2fv(this.addr,!1,tl),De(e,n)}}function Tm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Qc.set(n),i.uniformMatrix3fv(this.addr,!1,Qc),De(e,n)}}function Am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;Jc.set(n),i.uniformMatrix4fv(this.addr,!1,Jc),De(e,n)}}function Cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(jc.compareFunction=lh,r=jc):r=Eh,e.setTexture2D(t||r,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Th,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ah,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wh,s)}function km(i){switch(i){case 5126:return ym;case 35664:return Sm;case 35665:return bm;case 35666:return Em;case 35674:return wm;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Cm;case 35667:case 35671:return Rm;case 35668:case 35672:return Pm;case 35669:case 35673:return Lm;case 5125:return Dm;case 36294:return Im;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function Hm(i,t){i.uniform1fv(this.addr,t)}function Vm(i,t){const e=Es(t,this.size,2);i.uniform2fv(this.addr,e)}function Gm(i,t){const e=Es(t,this.size,3);i.uniform3fv(this.addr,e)}function Wm(i,t){const e=Es(t,this.size,4);i.uniform4fv(this.addr,e)}function Xm(i,t){const e=Es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qm(i,t){const e=Es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ym(i,t){const e=Es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $m(i,t){i.uniform1iv(this.addr,t)}function jm(i,t){i.uniform2iv(this.addr,t)}function Km(i,t){i.uniform3iv(this.addr,t)}function Zm(i,t){i.uniform4iv(this.addr,t)}function Jm(i,t){i.uniform1uiv(this.addr,t)}function Qm(i,t){i.uniform2uiv(this.addr,t)}function t0(i,t){i.uniform3uiv(this.addr,t)}function e0(i,t){i.uniform4uiv(this.addr,t)}function n0(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Eh,r[a])}function i0(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Th,r[a])}function s0(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ah,r[a])}function r0(i,t,e){const n=this.cache,s=t.length,r=ta(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wh,r[a])}function a0(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return $m;case 35667:case 35671:return jm;case 35668:case 35672:return Km;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return Qm;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class o0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=km(e.type)}}class c0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a0(e.type)}}class l0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function el(i,t){i.seq.push(t),i.map[t.id]=t}function h0(i,t,e){const n=i.name,s=n.length;for(Ra.lastIndex=0;;){const r=Ra.exec(n),a=Ra.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){el(e,l===void 0?new o0(o,i,t):new c0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new l0(o),el(e,f)),e=f}}}class Vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);h0(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function nl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const u0=37297;let f0=0;function d0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const il=new Xt;function p0(i){ae._getMatrix(il,ae.workingColorSpace,i);const t=`mat3( ${il.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Qr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+d0(i.getShaderSource(t),a)}else return s}function m0(i,t){const e=p0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function g0(i,t){let e;switch(t){case vu:e="Linear";break;case _u:e="Reinhard";break;case xu:e="Cineon";break;case Mu:e="ACESFilmic";break;case Su:e="AgX";break;case bu:e="Neutral";break;case yu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Er=new N;function v0(){ae.getLuminanceCoefficients(Er);const i=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function x0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ks(i){return i!==""}function rl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(i){return i.replace(y0,b0)}const S0=new Map;function b0(i,t){let e=jt[t];if(e===void 0){const n=S0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}const E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(E0,w0)}function w0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function T0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function A0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case vs:t="ENVMAP_TYPE_CUBE";break;case Zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function C0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function R0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zl:t="ENVMAP_BLENDING_MULTIPLY";break;case mu:t="ENVMAP_BLENDING_MIX";break;case gu:t="ENVMAP_BLENDING_ADD";break}return t}function P0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=T0(e),l=A0(e),h=C0(e),f=R0(e),u=P0(e),d=_0(e),g=x0(r),v=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(m=[cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?jt.tonemapping_pars_fragment:"",e.toneMapping!==li?g0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,m0("linearToOutputTexel",e.outputColorSpace),v0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),a=Co(a),a=rl(a,e),a=al(a,e),o=Co(o),o=rl(o,e),o=al(o,e),a=ol(a),o=ol(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+a,x=M+p+o,D=nl(s,s.VERTEX_SHADER,S),C=nl(s,s.FRAGMENT_SHADER,x);s.attachShader(v,D),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(C).trim();let Q=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,C);else{const et=sl(s,D,"vertex"),G=sl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+et+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(V===""||Y==="")&&(H=!1);H&&(L.diagnostics={runnable:Q,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(D),s.deleteShader(C),P=new Vr(s,v),b=M0(s,v)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,u0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=f0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=C,this}let D0=0;class I0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new U0(t),e.set(t,n)),n}}class U0{constructor(t){this.id=D0++,this.code=t,this.usedTimes=0}}function N0(i,t,e,n,s,r,a){const o=new ph,c=new I0,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,_,L,F,V){const Y=F.fog,Q=V.geometry,H=b.isMeshStandardMaterial?F.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),G=et&&et.mapping===Zr?et.image.height:null,ht=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yt=pt!==void 0?pt.length:0;let Ft=0;Q.morphAttributes.position!==void 0&&(Ft=1),Q.morphAttributes.normal!==void 0&&(Ft=2),Q.morphAttributes.color!==void 0&&(Ft=3);let j,U,q,at;if(ht){const re=yn[ht];j=re.vertexShader,U=re.fragmentShader}else j=b.vertexShader,U=b.fragmentShader,c.update(b),q=c.getVertexShaderID(b),at=c.getFragmentShaderID(b);const ct=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),At=V.isInstancedMesh===!0,Lt=V.isBatchedMesh===!0,Yt=!!b.map,$t=!!b.matcap,mt=!!et,O=!!b.aoMap,Re=!!b.lightMap,Kt=!!b.bumpMap,kt=!!b.normalMap,Nt=!!b.displacementMap,Ht=!!b.emissiveMap,Rt=!!b.metalnessMap,R=!!b.roughnessMap,y=b.anisotropy>0,X=b.clearcoat>0,st=b.dispersion>0,ot=b.iridescence>0,it=b.sheen>0,Pt=b.transmission>0,Mt=y&&!!b.anisotropyMap,Tt=X&&!!b.clearcoatMap,Zt=X&&!!b.clearcoatNormalMap,A=X&&!!b.clearcoatRoughnessMap,w=ot&&!!b.iridescenceMap,W=ot&&!!b.iridescenceThicknessMap,rt=it&&!!b.sheenColorMap,J=it&&!!b.sheenRoughnessMap,ut=!!b.specularMap,ft=!!b.specularColorMap,vt=!!b.specularIntensityMap,I=Pt&&!!b.transmissionMap,lt=Pt&&!!b.thicknessMap,$=!!b.gradientMap,tt=!!b.alphaMap,_t=b.alphaTest>0,dt=!!b.alphaHash,Ct=!!b.extensions;let ee=li;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ee=i.toneMapping);const Ee={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:j,fragmentShader:U,defines:b.defines,customVertexShaderID:q,customFragmentShaderID:at,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Lt,batchingColor:Lt&&V._colorsTexture!==null,instancing:At,instancingColor:At&&V.instanceColor!==null,instancingMorph:At&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ys,alphaToCoverage:!!b.alphaToCoverage,map:Yt,matcap:$t,envMap:mt,envMapMode:mt&&et.mapping,envMapCubeUVHeight:G,aoMap:O,lightMap:Re,bumpMap:Kt,normalMap:kt,displacementMap:u&&Nt,emissiveMap:Ht,normalMapObjectSpace:kt&&b.normalMapType===Au,normalMapTangentSpace:kt&&b.normalMapType===ch,metalnessMap:Rt,roughnessMap:R,anisotropy:y,anisotropyMap:Mt,clearcoat:X,clearcoatMap:Tt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:A,dispersion:st,iridescence:ot,iridescenceMap:w,iridescenceThicknessMap:W,sheen:it,sheenColorMap:rt,sheenRoughnessMap:J,specularMap:ut,specularColorMap:ft,specularIntensityMap:vt,transmission:Pt,transmissionMap:I,thicknessMap:lt,gradientMap:$,opaque:b.transparent===!1&&b.blending===us&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:_t,alphaHash:dt,combine:b.combine,mapUv:Yt&&v(b.map.channel),aoMapUv:O&&v(b.aoMap.channel),lightMapUv:Re&&v(b.lightMap.channel),bumpMapUv:Kt&&v(b.bumpMap.channel),normalMapUv:kt&&v(b.normalMap.channel),displacementMapUv:Nt&&v(b.displacementMap.channel),emissiveMapUv:Ht&&v(b.emissiveMap.channel),metalnessMapUv:Rt&&v(b.metalnessMap.channel),roughnessMapUv:R&&v(b.roughnessMap.channel),anisotropyMapUv:Mt&&v(b.anisotropyMap.channel),clearcoatMapUv:Tt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:w&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:W&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:J&&v(b.sheenRoughnessMap.channel),specularMapUv:ut&&v(b.specularMap.channel),specularColorMapUv:ft&&v(b.specularColorMap.channel),specularIntensityMapUv:vt&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:lt&&v(b.thicknessMap.channel),alphaMapUv:tt&&v(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(kt||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Q.attributes.uv&&(Yt||tt),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:V.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:Yt&&b.map.isVideoTexture===!0&&ae.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:Ht&&b.emissiveMap.isVideoTexture===!0&&ae.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xe,flipSided:b.side===Fe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ct&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&b.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function p(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)_.push(L),_.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(_,b),S(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function M(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function S(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const _=g[b.type];let L;if(_){const F=yn[_];L=_f.clone(F.uniforms)}else L=b.uniforms;return L}function D(b,_){let L;for(let F=0,V=h.length;F<V;F++){const Y=h[F];if(Y.cacheKey===_){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new L0(i,_,b,r),h.push(L)),L}function C(b){if(--b.usedTimes===0){const _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function T(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:P}}function z0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function F0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ll(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,u,d,g,v,m){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},i[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function o(f,u,d,g,v,m){const p=a(f,u,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,u,d,g,v,m){const p=a(f,u,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||F0),n.length>1&&n.sort(u||ll),s.length>1&&s.sort(u||ll)}function h(){for(let f=t,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function O0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new hl,i.set(n,[a])):s>=r.length?(a=new hl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new qt};break;case"SpotLight":e={position:new N,direction:new N,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function k0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let H0=0;function V0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G0(i){const t=new B0,e=k0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new ue,a=new ue;function o(l){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,M=0,S=0,x=0,D=0,C=0,T=0;l.sort(V0);for(let b=0,_=l.length;b<_;b++){const L=l[b],F=L.color,V=L.intensity,Y=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*V,f+=F.g*V,u+=F.b*V;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],V);T++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=H,d++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(F).multiplyScalar(V),H.distance=Y,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[v]=H;const et=L.shadow;if(L.map&&(n.spotLightMap[D]=L.map,D++,et.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[v]=et.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Q,x++}v++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(F).multiplyScalar(V),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(V),H.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==D||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,P.directionalLength=d,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=D,P.numLightProbes=T,n.version=H0++)}function c(l,h){let f=0,u=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(S.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function ul(i){const t=new G0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function W0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ul(i),t.set(s,[o])):r>=a.length?(o=new ul(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class X0 extends zi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class q0 extends zi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
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
}`;function j0(i,t,e){let n=new qo;const s=new Et,r=new Et,a=new be,o=new X0({depthPacking:Tu}),c=new q0,l={},h=e.maxTextureSize,f={[En]:Fe,[Fe]:En,[xe]:xe},u=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Y0,fragmentShader:$0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let p=this.type;this.render=function(C,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),_=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ci),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=p!==Bn&&this.type===Bn,Y=p===Bn&&this.type!==Bn;for(let Q=0,H=C.length;Q<H;Q++){const et=C[Q],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||V===!0||Y===!0){const yt=this.type!==Bn?{minFilter:$e,magFilter:$e}:{};G.map!==null&&G.map.dispose(),G.map=new Ii(s.x,s.y,yt),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const pt=G.getViewportCount();for(let yt=0;yt<pt;yt++){const Ft=G.getViewport(yt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),F.viewport(a),G.updateMatrices(et,yt),n=G.getFrustum(),x(T,P,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===Bn&&M(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,L)};function M(C,T){const P=t.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ii(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,P,u,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,P,d,v,null)}function S(C,T,P,b){let _=null;const L=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)_=L;else if(_=P.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=_.uuid,V=T.uuid;let Y=l[F];Y===void 0&&(Y={},l[F]=Y);let Q=Y[V];Q===void 0&&(Q=_.clone(),Y[V]=Q,T.addEventListener("dispose",D)),_=Q}if(_.visible=T.visible,_.wireframe=T.wireframe,b===Bn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:f[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=P}return _}function x(C,T,P,b,_){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Bn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const V=t.update(C),Y=C.material;if(Array.isArray(Y)){const Q=V.groups;for(let H=0,et=Q.length;H<et;H++){const G=Q[H],ht=Y[G.materialIndex];if(ht&&ht.visible){const pt=S(C,ht,b,_);C.onBeforeShadow(i,C,T,P,V,pt,G),i.renderBufferDirect(P,null,V,pt,C,G),C.onAfterShadow(i,C,T,P,V,pt,G)}}}else if(Y.visible){const Q=S(C,Y,b,_);C.onBeforeShadow(i,C,T,P,V,Q,null),i.renderBufferDirect(P,null,V,Q,C,null),C.onAfterShadow(i,C,T,P,V,Q,null)}}const F=C.children;for(let V=0,Y=F.length;V<Y;V++)x(F[V],T,P,b,_)}function D(C){C.target.removeEventListener("dispose",D);for(const P in l){const b=l[P],_=C.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}const K0={[Wa]:Xa,[qa]:ja,[Ya]:Ka,[ms]:$a,[Xa]:Wa,[ja]:qa,[Ka]:Ya,[$a]:ms};function Z0(i,t){function e(){let I=!1;const lt=new be;let $=null;const tt=new be(0,0,0,0);return{setMask:function(_t){$!==_t&&!I&&(i.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){I=_t},setClear:function(_t,dt,Ct,ee,Ee){Ee===!0&&(_t*=ee,dt*=ee,Ct*=ee),lt.set(_t,dt,Ct,ee),tt.equals(lt)===!1&&(i.clearColor(_t,dt,Ct,ee),tt.copy(lt))},reset:function(){I=!1,$=null,tt.set(-1,0,0,0)}}}function n(){let I=!1,lt=!1,$=null,tt=null,_t=null;return{setReversed:function(dt){if(lt!==dt){const Ct=t.get("EXT_clip_control");lt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const ee=_t;_t=null,this.setClear(ee)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?ct(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(dt){$!==dt&&!I&&(i.depthMask(dt),$=dt)},setFunc:function(dt){if(lt&&(dt=K0[dt]),tt!==dt){switch(dt){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case ms:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=dt}},setLocked:function(dt){I=dt},setClear:function(dt){_t!==dt&&(lt&&(dt=1-dt),i.clearDepth(dt),_t=dt)},reset:function(){I=!1,$=null,tt=null,_t=null,lt=!1}}}function s(){let I=!1,lt=null,$=null,tt=null,_t=null,dt=null,Ct=null,ee=null,Ee=null;return{setTest:function(re){I||(re?ct(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(re){lt!==re&&!I&&(i.stencilMask(re),lt=re)},setFunc:function(re,rn,Cn){($!==re||tt!==rn||_t!==Cn)&&(i.stencilFunc(re,rn,Cn),$=re,tt=rn,_t=Cn)},setOp:function(re,rn,Cn){(dt!==re||Ct!==rn||ee!==Cn)&&(i.stencilOp(re,rn,Cn),dt=re,Ct=rn,ee=Cn)},setLocked:function(re){I=re},setClear:function(re){Ee!==re&&(i.clearStencil(re),Ee=re)},reset:function(){I=!1,lt=null,$=null,tt=null,_t=null,dt=null,Ct=null,ee=null,Ee=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,v=!1,m=null,p=null,M=null,S=null,x=null,D=null,C=null,T=new qt(0,0,0),P=0,b=!1,_=null,L=null,F=null,V=null,Y=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,et=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=et>=2);let ht=null,pt={};const yt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),j=new be().fromArray(yt),U=new be().fromArray(Ft);function q(I,lt,$,tt){const _t=new Uint8Array(4),dt=i.createTexture();i.bindTexture(I,dt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<$;Ct++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(lt+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return dt}const at={};at[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),a.setFunc(ms),Kt(!1),kt(mc),ct(i.CULL_FACE),O(ci);function ct(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function bt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function At(I,lt){return f[I]!==lt?(i.bindFramebuffer(I,lt),f[I]=lt,I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Lt(I,lt){let $=d,tt=!1;if(I){$=u.get(lt),$===void 0&&($=[],u.set(lt,$));const _t=I.textures;if($.length!==_t.length||$[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ct=_t.length;dt<Ct;dt++)$[dt]=i.COLOR_ATTACHMENT0+dt;$.length=_t.length,tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,tt=!0);tt&&i.drawBuffers($)}function Yt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const $t={[wi]:i.FUNC_ADD,[Jh]:i.FUNC_SUBTRACT,[Qh]:i.FUNC_REVERSE_SUBTRACT};$t[tu]=i.MIN,$t[eu]=i.MAX;const mt={[nu]:i.ZERO,[iu]:i.ONE,[su]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[cu]:i.DST_COLOR,[au]:i.DST_ALPHA,[ru]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[lu]:i.ONE_MINUS_DST_COLOR,[ou]:i.ONE_MINUS_DST_ALPHA,[uu]:i.CONSTANT_COLOR,[fu]:i.ONE_MINUS_CONSTANT_COLOR,[du]:i.CONSTANT_ALPHA,[pu]:i.ONE_MINUS_CONSTANT_ALPHA};function O(I,lt,$,tt,_t,dt,Ct,ee,Ee,re){if(I===ci){v===!0&&(bt(i.BLEND),v=!1);return}if(v===!1&&(ct(i.BLEND),v=!0),I!==Zh){if(I!==m||re!==b){if((p!==wi||x!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,x=wi),re)switch(I){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,S=null,D=null,C=null,T.set(0,0,0),P=0,m=I,b=re}return}_t=_t||lt,dt=dt||$,Ct=Ct||tt,(lt!==p||_t!==x)&&(i.blendEquationSeparate($t[lt],$t[_t]),p=lt,x=_t),($!==M||tt!==S||dt!==D||Ct!==C)&&(i.blendFuncSeparate(mt[$],mt[tt],mt[dt],mt[Ct]),M=$,S=tt,D=dt,C=Ct),(ee.equals(T)===!1||Ee!==P)&&(i.blendColor(ee.r,ee.g,ee.b,Ee),T.copy(ee),P=Ee),m=I,b=!1}function Re(I,lt){I.side===xe?bt(i.CULL_FACE):ct(i.CULL_FACE);let $=I.side===Fe;lt&&($=!$),Kt($),I.blending===us&&I.transparent===!1?O(ci):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const tt=I.stencilWrite;o.setTest(tt),tt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ht(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(I){_!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),_=I)}function kt(I){I!==$h?(ct(i.CULL_FACE),I!==L&&(I===mc?i.cullFace(i.BACK):I===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),L=I}function Nt(I){I!==F&&(H&&i.lineWidth(I),F=I)}function Ht(I,lt,$){I?(ct(i.POLYGON_OFFSET_FILL),(V!==lt||Y!==$)&&(i.polygonOffset(lt,$),V=lt,Y=$)):bt(i.POLYGON_OFFSET_FILL)}function Rt(I){I?ct(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+Q-1),ht!==I&&(i.activeTexture(I),ht=I)}function y(I,lt,$){$===void 0&&(ht===null?$=i.TEXTURE0+Q-1:$=ht);let tt=pt[$];tt===void 0&&(tt={type:void 0,texture:void 0},pt[$]=tt),(tt.type!==I||tt.texture!==lt)&&(ht!==$&&(i.activeTexture($),ht=$),i.bindTexture(I,lt||at[I]),tt.type=I,tt.texture=lt)}function X(){const I=pt[ht];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function A(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function w(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(I){j.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),j.copy(I))}function J(I){U.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),U.copy(I))}function ut(I,lt){let $=l.get(lt);$===void 0&&($=new WeakMap,l.set(lt,$));let tt=$.get(I);tt===void 0&&(tt=i.getUniformBlockIndex(lt,I.name),$.set(I,tt))}function ft(I,lt){const tt=l.get(lt).get(I);c.get(lt)!==tt&&(i.uniformBlockBinding(lt,tt,I.__bindingPointIndex),c.set(lt,tt))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,pt={},f={},u=new WeakMap,d=[],g=null,v=!1,m=null,p=null,M=null,S=null,x=null,D=null,C=null,T=new qt(0,0,0),P=0,b=!1,_=null,L=null,F=null,V=null,Y=null,j.set(0,0,i.canvas.width,i.canvas.height),U.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:bt,bindFramebuffer:At,drawBuffers:Lt,useProgram:Yt,setBlending:O,setMaterial:Re,setFlipSided:Kt,setCullFace:kt,setLineWidth:Nt,setPolygonOffset:Ht,setScissorTest:Rt,activeTexture:R,bindTexture:y,unbindTexture:X,compressedTexImage2D:st,compressedTexImage3D:ot,texImage2D:w,texImage3D:W,updateUBOMapping:ut,uniformBlockBinding:ft,texStorage2D:Zt,texStorage3D:A,texSubImage2D:it,texSubImage3D:Pt,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Tt,scissor:rt,viewport:J,reset:vt}}function fl(i,t,e,n){const s=J0(n);switch(e){case nh:return i*t;case sh:return i*t;case rh:return i*t*2;case Jr:return i*t/s.components*s.byteLength;case Vo:return i*t/s.components*s.byteLength;case ah:return i*t*2/s.components*s.byteLength;case Go:return i*t*2/s.components*s.byteLength;case ih:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case Wo:return i*t*4/s.components*s.byteLength;case zr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:case io:return Math.max(i,16)*Math.max(t,8)/4;case to:case no:return Math.max(i,8)*Math.max(t,8)/2;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kr:case So:case bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case oh:case Eo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J0(i){switch(i){case qn:case Ql:return{byteLength:1,components:1};case Ys:case th:case Qs:return{byteLength:2,components:1};case ko:case Ho:return{byteLength:2,components:4};case Di:case Bo:case bn:return{byteLength:4,components:1};case eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Q0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return d?new OffscreenCanvas(R,y):Xr("canvas")}function v(R,y,X){let st=1;const ot=Rt(R);if((ot.width>X||ot.height>X)&&(st=X/Math.max(ot.width,ot.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const it=Math.floor(st*ot.width),Pt=Math.floor(st*ot.height);f===void 0&&(f=g(it,Pt));const Mt=y?g(it,Pt):f;return Mt.width=it,Mt.height=Pt,Mt.getContext("2d").drawImage(R,0,0,it,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+it+"x"+Pt+")."),Mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,y,X,st,ot=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let it=y;if(y===i.RED&&(X===i.FLOAT&&(it=i.R32F),X===i.HALF_FLOAT&&(it=i.R16F),X===i.UNSIGNED_BYTE&&(it=i.R8)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.R8UI),X===i.UNSIGNED_SHORT&&(it=i.R16UI),X===i.UNSIGNED_INT&&(it=i.R32UI),X===i.BYTE&&(it=i.R8I),X===i.SHORT&&(it=i.R16I),X===i.INT&&(it=i.R32I)),y===i.RG&&(X===i.FLOAT&&(it=i.RG32F),X===i.HALF_FLOAT&&(it=i.RG16F),X===i.UNSIGNED_BYTE&&(it=i.RG8)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RG8UI),X===i.UNSIGNED_SHORT&&(it=i.RG16UI),X===i.UNSIGNED_INT&&(it=i.RG32UI),X===i.BYTE&&(it=i.RG8I),X===i.SHORT&&(it=i.RG16I),X===i.INT&&(it=i.RG32I)),y===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGB8UI),X===i.UNSIGNED_SHORT&&(it=i.RGB16UI),X===i.UNSIGNED_INT&&(it=i.RGB32UI),X===i.BYTE&&(it=i.RGB8I),X===i.SHORT&&(it=i.RGB16I),X===i.INT&&(it=i.RGB32I)),y===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),X===i.UNSIGNED_INT&&(it=i.RGBA32UI),X===i.BYTE&&(it=i.RGBA8I),X===i.SHORT&&(it=i.RGBA16I),X===i.INT&&(it=i.RGBA32I)),y===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),y===i.RGBA){const Pt=ot?Qr:ae.getTransfer(st);X===i.FLOAT&&(it=i.RGBA32F),X===i.HALF_FLOAT&&(it=i.RGBA16F),X===i.UNSIGNED_BYTE&&(it=Pt===de?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(R,y){let X;return R?y===null||y===Di||y===_s?X=i.DEPTH24_STENCIL8:y===bn?X=i.DEPTH32F_STENCIL8:y===Ys&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Di||y===_s?X=i.DEPTH_COMPONENT24:y===bn?X=i.DEPTH_COMPONENT32F:y===Ys&&(X=i.DEPTH_COMPONENT16),X}function D(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==$e&&R.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),P(y),y.isVideoTexture&&h.delete(y)}function T(R){const y=R.target;y.removeEventListener("dispose",T),_(y)}function P(R){const y=n.get(R);if(y.__webglInit===void 0)return;const X=R.source,st=u.get(X);if(st){const ot=st[y.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&b(R),Object.keys(st).length===0&&u.delete(X)}n.remove(R)}function b(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const X=R.source,st=u.get(X);delete st[y.__cacheKey],a.memory.textures--}function _(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(y.__webglFramebuffer[st]))for(let ot=0;ot<y.__webglFramebuffer[st].length;ot++)i.deleteFramebuffer(y.__webglFramebuffer[st][ot]);else i.deleteFramebuffer(y.__webglFramebuffer[st]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[st])}else{if(Array.isArray(y.__webglFramebuffer))for(let st=0;st<y.__webglFramebuffer.length;st++)i.deleteFramebuffer(y.__webglFramebuffer[st]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let st=0;st<y.__webglColorRenderbuffer.length;st++)y.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[st]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=R.textures;for(let st=0,ot=X.length;st<ot;st++){const it=n.get(X[st]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(X[st])}n.remove(R)}let L=0;function F(){L=0}function V(){const R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function Y(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Q(R,y){const X=n.get(R);if(R.isVideoTexture&&Nt(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const st=R.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(X,R,y);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function H(R,y){const X=n.get(R);if(R.version>0&&X.__version!==R.version){U(X,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function et(R,y){const X=n.get(R);if(R.version>0&&X.__version!==R.version){U(X,R,y);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function G(R,y){const X=n.get(R);if(R.version>0&&X.__version!==R.version){q(X,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}const ht={[ui]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},pt={[$e]:i.NEAREST,[Eu]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},yt={[Cu]:i.NEVER,[Uu]:i.ALWAYS,[Ru]:i.LESS,[lh]:i.LEQUAL,[Pu]:i.EQUAL,[Iu]:i.GEQUAL,[Lu]:i.GREATER,[Du]:i.NOTEQUAL};function Ft(R,y){if(y.type===bn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===ia||y.magFilter===sr||y.magFilter===Ci||y.minFilter===Sn||y.minFilter===ia||y.minFilter===sr||y.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ht[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ht[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ht[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pt[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$e||y.minFilter!==sr&&y.minFilter!==Ci||y.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function j(R,y){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const st=y.source;let ot=u.get(st);ot===void 0&&(ot={},u.set(st,ot));const it=Y(y);if(it!==R.__cacheKey){ot[it]===void 0&&(ot[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ot[it].usedTimes++;const Pt=ot[R.__cacheKey];Pt!==void 0&&(ot[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(y)),R.__cacheKey=it,R.__webglTexture=ot[it].texture}return X}function U(R,y,X){let st=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(st=i.TEXTURE_3D);const ot=j(R,y),it=y.source;e.bindTexture(st,R.__webglTexture,i.TEXTURE0+X);const Pt=n.get(it);if(it.version!==Pt.__version||ot===!0){e.activeTexture(i.TEXTURE0+X);const Mt=ae.getPrimaries(ae.workingColorSpace),Tt=y.colorSpace===ai?null:ae.getPrimaries(y.colorSpace),Zt=y.colorSpace===ai||Mt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let A=v(y.image,!1,s.maxTextureSize);A=Ht(y,A);const w=r.convert(y.format,y.colorSpace),W=r.convert(y.type);let rt=S(y.internalFormat,w,W,y.colorSpace,y.isVideoTexture);Ft(st,y);let J;const ut=y.mipmaps,ft=y.isVideoTexture!==!0,vt=Pt.__version===void 0||ot===!0,I=it.dataReady,lt=D(y,A);if(y.isDepthTexture)rt=x(y.format===xs,y.type),vt&&(ft?e.texStorage2D(i.TEXTURE_2D,1,rt,A.width,A.height):e.texImage2D(i.TEXTURE_2D,0,rt,A.width,A.height,0,w,W,null));else if(y.isDataTexture)if(ut.length>0){ft&&vt&&e.texStorage2D(i.TEXTURE_2D,lt,rt,ut[0].width,ut[0].height);for(let $=0,tt=ut.length;$<tt;$++)J=ut[$],ft?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,J.width,J.height,w,W,J.data):e.texImage2D(i.TEXTURE_2D,$,rt,J.width,J.height,0,w,W,J.data);y.generateMipmaps=!1}else ft?(vt&&e.texStorage2D(i.TEXTURE_2D,lt,rt,A.width,A.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,w,W,A.data)):e.texImage2D(i.TEXTURE_2D,0,rt,A.width,A.height,0,w,W,A.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ft&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,rt,ut[0].width,ut[0].height,A.depth);for(let $=0,tt=ut.length;$<tt;$++)if(J=ut[$],y.format!==pn)if(w!==null)if(ft){if(I)if(y.layerUpdates.size>0){const _t=fl(J.width,J.height,y.format,y.type);for(const dt of y.layerUpdates){const Ct=J.data.subarray(dt*_t/J.data.BYTES_PER_ELEMENT,(dt+1)*_t/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,dt,J.width,J.height,1,w,Ct)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,J.width,J.height,A.depth,w,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,rt,J.width,J.height,A.depth,0,J.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,J.width,J.height,A.depth,w,W,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,rt,J.width,J.height,A.depth,0,w,W,J.data)}else{ft&&vt&&e.texStorage2D(i.TEXTURE_2D,lt,rt,ut[0].width,ut[0].height);for(let $=0,tt=ut.length;$<tt;$++)J=ut[$],y.format!==pn?w!==null?ft?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,J.width,J.height,w,J.data):e.compressedTexImage2D(i.TEXTURE_2D,$,rt,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,J.width,J.height,w,W,J.data):e.texImage2D(i.TEXTURE_2D,$,rt,J.width,J.height,0,w,W,J.data)}else if(y.isDataArrayTexture)if(ft){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,rt,A.width,A.height,A.depth),I)if(y.layerUpdates.size>0){const $=fl(A.width,A.height,y.format,y.type);for(const tt of y.layerUpdates){const _t=A.data.subarray(tt*$/A.data.BYTES_PER_ELEMENT,(tt+1)*$/A.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,A.width,A.height,1,w,W,_t)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,w,W,A.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,A.width,A.height,A.depth,0,w,W,A.data);else if(y.isData3DTexture)ft?(vt&&e.texStorage3D(i.TEXTURE_3D,lt,rt,A.width,A.height,A.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,w,W,A.data)):e.texImage3D(i.TEXTURE_3D,0,rt,A.width,A.height,A.depth,0,w,W,A.data);else if(y.isFramebufferTexture){if(vt)if(ft)e.texStorage2D(i.TEXTURE_2D,lt,rt,A.width,A.height);else{let $=A.width,tt=A.height;for(let _t=0;_t<lt;_t++)e.texImage2D(i.TEXTURE_2D,_t,rt,$,tt,0,w,W,null),$>>=1,tt>>=1}}else if(ut.length>0){if(ft&&vt){const $=Rt(ut[0]);e.texStorage2D(i.TEXTURE_2D,lt,rt,$.width,$.height)}for(let $=0,tt=ut.length;$<tt;$++)J=ut[$],ft?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,w,W,J):e.texImage2D(i.TEXTURE_2D,$,rt,w,W,J);y.generateMipmaps=!1}else if(ft){if(vt){const $=Rt(A);e.texStorage2D(i.TEXTURE_2D,lt,rt,$.width,$.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,w,W,A)}else e.texImage2D(i.TEXTURE_2D,0,rt,w,W,A);m(y)&&p(st),Pt.__version=it.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function q(R,y,X){if(y.image.length!==6)return;const st=j(R,y),ot=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const it=n.get(ot);if(ot.version!==it.__version||st===!0){e.activeTexture(i.TEXTURE0+X);const Pt=ae.getPrimaries(ae.workingColorSpace),Mt=y.colorSpace===ai?null:ae.getPrimaries(y.colorSpace),Tt=y.colorSpace===ai||Pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Zt=y.isCompressedTexture||y.image[0].isCompressedTexture,A=y.image[0]&&y.image[0].isDataTexture,w=[];for(let tt=0;tt<6;tt++)!Zt&&!A?w[tt]=v(y.image[tt],!0,s.maxCubemapSize):w[tt]=A?y.image[tt].image:y.image[tt],w[tt]=Ht(y,w[tt]);const W=w[0],rt=r.convert(y.format,y.colorSpace),J=r.convert(y.type),ut=S(y.internalFormat,rt,J,y.colorSpace),ft=y.isVideoTexture!==!0,vt=it.__version===void 0||st===!0,I=ot.dataReady;let lt=D(y,W);Ft(i.TEXTURE_CUBE_MAP,y);let $;if(Zt){ft&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ut,W.width,W.height);for(let tt=0;tt<6;tt++){$=w[tt].mipmaps;for(let _t=0;_t<$.length;_t++){const dt=$[_t];y.format!==pn?rt!==null?ft?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,dt.width,dt.height,rt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,ut,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,0,0,dt.width,dt.height,rt,J,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t,ut,dt.width,dt.height,0,rt,J,dt.data)}}}else{if($=y.mipmaps,ft&&vt){$.length>0&&lt++;const tt=Rt(w[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ut,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(A){ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,w[tt].width,w[tt].height,rt,J,w[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ut,w[tt].width,w[tt].height,0,rt,J,w[tt].data);for(let _t=0;_t<$.length;_t++){const Ct=$[_t].image[tt].image;ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,Ct.width,Ct.height,rt,J,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,ut,Ct.width,Ct.height,0,rt,J,Ct.data)}}else{ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,rt,J,w[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,ut,rt,J,w[tt]);for(let _t=0;_t<$.length;_t++){const dt=$[_t];ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,0,0,rt,J,dt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,_t+1,ut,rt,J,dt.image[tt])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),it.__version=ot.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function at(R,y,X,st,ot,it){const Pt=r.convert(X.format,X.colorSpace),Mt=r.convert(X.type),Tt=S(X.internalFormat,Pt,Mt,X.colorSpace),Zt=n.get(y),A=n.get(X);if(A.__renderTarget=y,!Zt.__hasExternalTextures){const w=Math.max(1,y.width>>it),W=Math.max(1,y.height>>it);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,it,Tt,w,W,y.depth,0,Pt,Mt,null):e.texImage2D(ot,it,Tt,w,W,0,Pt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),kt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ot,A.__webglTexture,0,Kt(y)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ot,A.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(R,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const st=y.depthTexture,ot=st&&st.isDepthTexture?st.type:null,it=x(y.stencilBuffer,ot),Pt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=Kt(y);kt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,it,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,it,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,it,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,R)}else{const st=y.textures;for(let ot=0;ot<st.length;ot++){const it=st[ot],Pt=r.convert(it.format,it.colorSpace),Mt=r.convert(it.type),Tt=S(it.internalFormat,Pt,Mt,it.colorSpace),Zt=Kt(y);X&&kt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,Tt,y.width,y.height):kt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,Tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(y.depthTexture);st.__renderTarget=y,(!st.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q(y.depthTexture,0);const ot=st.__webglTexture,it=Kt(y);if(y.depthTexture.format===fs)kt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(y.depthTexture.format===xs)kt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function At(R){const y=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const st=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),st){const ot=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,st.removeEventListener("dispose",ot)};st.addEventListener("dispose",ot),y.__depthDisposeCallback=ot}y.__boundDepthTexture=st}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");bt(y.__webglFramebuffer,R)}else if(X){y.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[st]),y.__webglDepthbuffer[st]===void 0)y.__webglDepthbuffer[st]=i.createRenderbuffer(),ct(y.__webglDepthbuffer[st],R,!1);else{const ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=y.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ct(y.__webglDepthbuffer,R,!1);else{const st=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(R,y,X){const st=n.get(R);y!==void 0&&at(st.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&At(R)}function Yt(R){const y=R.texture,X=n.get(R),st=n.get(y);R.addEventListener("dispose",T);const ot=R.textures,it=R.isWebGLCubeRenderTarget===!0,Pt=ot.length>1;if(Pt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=y.version,a.memory.textures++),it){X.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[Mt]=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)X.__webglFramebuffer[Mt][Tt]=i.createFramebuffer()}else X.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)X.__webglFramebuffer[Mt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let Mt=0,Tt=ot.length;Mt<Tt;Mt++){const Zt=n.get(ot[Mt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&kt(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ot.length;Mt++){const Tt=ot[Mt];X.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Mt]);const Zt=r.convert(Tt.format,Tt.colorSpace),A=r.convert(Tt.type),w=S(Tt.internalFormat,Zt,A,Tt.colorSpace,R.isXRRenderTarget===!0),W=Kt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,w,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,X.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,y);for(let Mt=0;Mt<6;Mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)at(X.__webglFramebuffer[Mt][Tt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Tt);else at(X.__webglFramebuffer[Mt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let Mt=0,Tt=ot.length;Mt<Tt;Mt++){const Zt=ot[Mt],A=n.get(Zt);e.bindTexture(i.TEXTURE_2D,A.__webglTexture),Ft(i.TEXTURE_2D,Zt),at(X.__webglFramebuffer,R,Zt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(Zt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,st.__webglTexture),Ft(Mt,y),y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)at(X.__webglFramebuffer[Tt],R,y,i.COLOR_ATTACHMENT0,Mt,Tt);else at(X.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,Mt,0);m(y)&&p(Mt),e.unbindTexture()}R.depthBuffer&&At(R)}function $t(R){const y=R.textures;for(let X=0,st=y.length;X<st;X++){const ot=y[X];if(m(ot)){const it=M(R),Pt=n.get(ot).__webglTexture;e.bindTexture(it,Pt),p(it),e.unbindTexture()}}}const mt=[],O=[];function Re(R){if(R.samples>0){if(kt(R)===!1){const y=R.textures,X=R.width,st=R.height;let ot=i.COLOR_BUFFER_BIT;const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(R),Mt=y.length>1;if(Mt)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const Zt=n.get(y[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,X,st,0,0,X,st,ot,i.NEAREST),c===!0&&(mt.length=0,O.length=0,mt.push(i.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(mt.push(it),O.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const Zt=n.get(y[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Kt(R){return Math.min(s.maxSamples,R.samples)}function kt(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Nt(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Ht(R,y){const X=R.colorSpace,st=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==ys&&X!==ai&&(ae.getTransfer(X)===de?(st!==pn||ot!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function Rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=Lt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=at,this.useMultisampledRTT=kt}function tg(i,t){function e(n,s=ai){let r;const a=ae.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.BYTE;if(n===th)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===Bo)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Qs)return i.HALF_FLOAT;if(n===nh)return i.ALPHA;if(n===ih)return i.RGB;if(n===pn)return i.RGBA;if(n===sh)return i.LUMINANCE;if(n===rh)return i.LUMINANCE_ALPHA;if(n===fs)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Jr)return i.RED;if(n===Vo)return i.RED_INTEGER;if(n===ah)return i.RG;if(n===Go)return i.RG_INTEGER;if(n===Wo)return i.RGBA_INTEGER;if(n===zr||n===Fr||n===Or||n===Br)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===so||n===ro)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oo||n===co||n===lo||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===Mo||n===yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===po)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_o)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kr||n===So||n===bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===kr)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oh||n===Eo||n===wo||n===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class eg extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ng={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ng)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sg=`
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

}`;class rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yn({vertexShader:ig,fragmentShader:sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ag extends Ss{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const v=new rg,m=e.getContextAttributes();let p=null,M=null;const S=[],x=[],D=new Et;let C=null;const T=new Ze;T.viewport=new be;const P=new Ze;P.viewport=new be;const b=[T,P],_=new eg;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let q=S[U];return q===void 0&&(q=new Pa,S[U]=q),q.getTargetRaySpace()},this.getControllerGrip=function(U){let q=S[U];return q===void 0&&(q=new Pa,S[U]=q),q.getGripSpace()},this.getHand=function(U){let q=S[U];return q===void 0&&(q=new Pa,S[U]=q),q.getHandSpace()};function V(U){const q=x.indexOf(U.inputSource);if(q===-1)return;const at=S[q];at!==void 0&&(at.update(U.inputSource,U.frame,l||a),at.dispatchEvent({type:U.type,data:U.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Q);for(let U=0;U<S.length;U++){const q=x[U];q!==null&&(x[U]=null,S[U].disconnect(q))}L=null,F=null,v.reset(),t.setRenderTarget(p),d=null,u=null,f=null,s=null,M=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ii(d.framebufferWidth,d.framebufferHeight,{format:pn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,at=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=m.stencil?xs:fs,at=m.stencil?_s:Di);const bt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ii(u.textureWidth,u.textureHeight,{format:pn,type:qn,depthTexture:new bh(u.textureWidth,u.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(U){for(let q=0;q<U.removed.length;q++){const at=U.removed[q],ct=x.indexOf(at);ct>=0&&(x[ct]=null,S[ct].disconnect(at))}for(let q=0;q<U.added.length;q++){const at=U.added[q];let ct=x.indexOf(at);if(ct===-1){for(let At=0;At<S.length;At++)if(At>=x.length){x.push(at),ct=At;break}else if(x[At]===null){x[At]=at,ct=At;break}if(ct===-1)break}const bt=S[ct];bt&&bt.connect(at)}}const H=new N,et=new N;function G(U,q,at){H.setFromMatrixPosition(q.matrixWorld),et.setFromMatrixPosition(at.matrixWorld);const ct=H.distanceTo(et),bt=q.projectionMatrix.elements,At=at.projectionMatrix.elements,Lt=bt[14]/(bt[10]-1),Yt=bt[14]/(bt[10]+1),$t=(bt[9]+1)/bt[5],mt=(bt[9]-1)/bt[5],O=(bt[8]-1)/bt[0],Re=(At[8]+1)/At[0],Kt=Lt*O,kt=Lt*Re,Nt=ct/(-O+Re),Ht=Nt*-O;if(q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ht),U.translateZ(Nt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),bt[10]===-1)U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Rt=Lt+Nt,R=Yt+Nt,y=Kt-Ht,X=kt+(ct-Ht),st=$t*Yt/R*Rt,ot=mt*Yt/R*Rt;U.projectionMatrix.makePerspective(y,X,st,ot,Rt,R),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function ht(U,q){q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let q=U.near,at=U.far;v.texture!==null&&(v.depthNear>0&&(q=v.depthNear),v.depthFar>0&&(at=v.depthFar)),_.near=P.near=T.near=q,_.far=P.far=T.far=at,(L!==_.near||F!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),L=_.near,F=_.far),T.layers.mask=U.layers.mask|2,P.layers.mask=U.layers.mask|4,_.layers.mask=T.layers.mask|P.layers.mask;const ct=U.parent,bt=_.cameras;ht(_,ct);for(let At=0;At<bt.length;At++)ht(bt[At],ct);bt.length===2?G(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),pt(U,_,ct)};function pt(U,q,at){at===null?U.matrix.copy(q.matrixWorld):(U.matrix.copy(at.matrixWorld),U.matrix.invert(),U.matrix.multiply(q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=$s*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(U){c=U,u!==null&&(u.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let yt=null;function Ft(U,q){if(h=q.getViewerPose(l||a),g=q,h!==null){const at=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ct=!1;at.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let At=0;At<at.length;At++){const Lt=at[At];let Yt=null;if(d!==null)Yt=d.getViewport(Lt);else{const mt=f.getViewSubImage(u,Lt);Yt=mt.viewport,At===0&&(t.setRenderTargetTextures(M,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(M))}let $t=b[At];$t===void 0&&($t=new Ze,$t.layers.enable(At),$t.viewport=new be,b[At]=$t),$t.matrix.fromArray(Lt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Lt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),At===0&&(_.matrix.copy($t.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push($t)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const At=f.getDepthInformation(at[0]);At&&At.isValid&&At.texture&&v.init(t,At,s.renderState)}}for(let at=0;at<S.length;at++){const ct=x[at],bt=S[at];ct!==null&&bt!==void 0&&bt.update(ct,q,l||a)}yt&&yt(U,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const j=new yh;j.setAnimationLoop(Ft),this.setAnimationLoop=function(U){yt=U},this.dispose=function(){}}}const yi=new wn,og=new ue;function cg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_h(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,yi.copy(x),yi.x*=-1,yi.y*=-1,yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(yi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function l(M,S){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",m));const D=S.program;n.updateUBOMapping(M,D);const C=t.render.frame;r[M.id]!==C&&(u(M),r[M.id]=C)}function h(M){const S=f();M.__bindingPointIndex=S;const x=i.createBuffer(),D=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const S=s[M.id],x=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,T=x.length;C<T;C++){const P=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,_=P.length;b<_;b++){const L=P[b];if(d(L,C,b,D)===!0){const F=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let Q=0;Q<V.length;Q++){const H=V[Q],et=v(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+Y,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,Y),Y+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,S,x,D){const C=M.value,T=S+"_"+x;if(D[T]===void 0)return typeof C=="number"||typeof C=="boolean"?D[T]=C:D[T]=C.clone(),!0;{const P=D[T];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return D[T]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(M){const S=M.uniforms;let x=0;const D=16;for(let T=0,P=S.length;T<P;T++){const b=Array.isArray(S[T])?S[T]:[S[T]];for(let _=0,L=b.length;_<L;_++){const F=b[_],V=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,Q=V.length;Y<Q;Y++){const H=V[Y],et=v(H),G=x%D,ht=G%et.boundary,pt=G+ht;x+=ht,pt!==0&&D-pt<et.storage&&(x+=D-pt),F.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=et.storage}}}const C=x%D;return C>0&&(x+=D-C),M.__size=x,M.__cache={},this}function v(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class hg{constructor(t={}){const{canvas:e=Zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=li,this.toneMappingExposure=1;const x=this;let D=!1,C=0,T=0,P=null,b=-1,_=null;const L=new be,F=new be;let V=null;const Y=new qt(0);let Q=0,H=e.width,et=e.height,G=1,ht=null,pt=null;const yt=new be(0,0,H,et),Ft=new be(0,0,H,et);let j=!1;const U=new qo;let q=!1,at=!1;const ct=new ue,bt=new ue,At=new N,Lt=new be,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function mt(){return P===null?G:1}let O=n;function Re(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",dt,!1),O===null){const B="webgl2";if(O=Re(B,E),O===null)throw Re(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Kt,kt,Nt,Ht,Rt,R,y,X,st,ot,it,Pt,Mt,Tt,Zt,A,w,W,rt,J,ut,ft,vt,I;function lt(){Kt=new mm(O),Kt.init(),ft=new tg(O,Kt),kt=new lm(O,Kt,t,ft),Nt=new Z0(O,Kt),kt.reverseDepthBuffer&&u&&Nt.buffers.depth.setReversed(!0),Ht=new _m(O),Rt=new z0,R=new Q0(O,Kt,Nt,Rt,kt,ft,Ht),y=new um(x),X=new pm(x),st=new wf(O),vt=new om(O,st),ot=new gm(O,st,Ht,vt),it=new Mm(O,ot,st,Ht),rt=new xm(O,kt,R),A=new hm(Rt),Pt=new N0(x,y,X,Kt,kt,vt,A),Mt=new cg(x,Rt),Tt=new O0,Zt=new W0(Kt),W=new am(x,y,X,Nt,it,d,c),w=new j0(x,it,kt),I=new lg(O,Ht,kt,Nt),J=new cm(O,Kt,Ht),ut=new vm(O,Kt,Ht),Ht.programs=Pt.programs,x.capabilities=kt,x.extensions=Kt,x.properties=Rt,x.renderLists=Tt,x.shadowMap=w,x.state=Nt,x.info=Ht}lt();const $=new ag(x,O);this.xr=$,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=Kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(H,et,!1))},this.getSize=function(E){return E.set(H,et)},this.setSize=function(E,B,K=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,et=B,e.width=Math.floor(E*G),e.height=Math.floor(B*G),K===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(H*G,et*G).floor()},this.setDrawingBufferSize=function(E,B,K){H=E,et=B,G=K,e.width=Math.floor(E*K),e.height=Math.floor(B*K),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(yt)},this.setViewport=function(E,B,K,Z){E.isVector4?yt.set(E.x,E.y,E.z,E.w):yt.set(E,B,K,Z),Nt.viewport(L.copy(yt).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Ft)},this.setScissor=function(E,B,K,Z){E.isVector4?Ft.set(E.x,E.y,E.z,E.w):Ft.set(E,B,K,Z),Nt.scissor(F.copy(Ft).multiplyScalar(G).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(E){Nt.setScissorTest(j=E)},this.setOpaqueSort=function(E){ht=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(E=!0,B=!0,K=!0){let Z=0;if(E){let k=!1;if(P!==null){const gt=P.texture.format;k=gt===Wo||gt===Go||gt===Vo}if(k){const gt=P.texture.type,wt=gt===qn||gt===Di||gt===Ys||gt===_s||gt===ko||gt===Ho,Dt=W.getClearColor(),It=W.getClearAlpha(),Bt=Dt.r,Vt=Dt.g,Ut=Dt.b;wt?(g[0]=Bt,g[1]=Vt,g[2]=Ut,g[3]=It,O.clearBufferuiv(O.COLOR,0,g)):(v[0]=Bt,v[1]=Vt,v[2]=Ut,v[3]=It,O.clearBufferiv(O.COLOR,0,v))}else Z|=O.COLOR_BUFFER_BIT}B&&(Z|=O.DEPTH_BUFFER_BIT),K&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Tt.dispose(),Zt.dispose(),Rt.dispose(),y.dispose(),X.dispose(),it.dispose(),vt.dispose(),I.dispose(),Pt.dispose(),$.dispose(),$.removeEventListener("sessionstart",oc),$.removeEventListener("sessionend",cc),mi.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Ht.autoReset,B=w.enabled,K=w.autoUpdate,Z=w.needsUpdate,k=w.type;lt(),Ht.autoReset=E,w.enabled=B,w.autoUpdate=K,w.needsUpdate=Z,w.type=k}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ct(E){const B=E.target;B.removeEventListener("dispose",Ct),ee(B)}function ee(E){Ee(E),Rt.remove(E)}function Ee(E){const B=Rt.get(E).programs;B!==void 0&&(B.forEach(function(K){Pt.releaseProgram(K)}),E.isShaderMaterial&&Pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,K,Z,k,gt){B===null&&(B=Yt);const wt=k.isMesh&&k.matrixWorld.determinant()<0,Dt=Xh(E,B,K,Z,k);Nt.setMaterial(Z,wt);let It=K.index,Bt=1;if(Z.wireframe===!0){if(It=ot.getWireframeAttribute(K),It===void 0)return;Bt=2}const Vt=K.drawRange,Ut=K.attributes.position;let oe=Vt.start*Bt,me=(Vt.start+Vt.count)*Bt;gt!==null&&(oe=Math.max(oe,gt.start*Bt),me=Math.min(me,(gt.start+gt.count)*Bt)),It!==null?(oe=Math.max(oe,0),me=Math.min(me,It.count)):Ut!=null&&(oe=Math.max(oe,0),me=Math.min(me,Ut.count));const ve=me-oe;if(ve<0||ve===1/0)return;vt.setup(k,Z,Dt,K,It);let je,le=J;if(It!==null&&(je=st.get(It),le=ut,le.setIndex(je)),k.isMesh)Z.wireframe===!0?(Nt.setLineWidth(Z.wireframeLinewidth*mt()),le.setMode(O.LINES)):le.setMode(O.TRIANGLES);else if(k.isLine){let zt=Z.linewidth;zt===void 0&&(zt=1),Nt.setLineWidth(zt*mt()),k.isLineSegments?le.setMode(O.LINES):k.isLineLoop?le.setMode(O.LINE_LOOP):le.setMode(O.LINE_STRIP)}else k.isPoints?le.setMode(O.POINTS):k.isSprite&&le.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)le.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const zt=k._multiDrawStarts,Rn=k._multiDrawCounts,he=k._multiDrawCount,an=It?st.get(It).bytesPerElement:1,Oi=Rt.get(Z).currentProgram.getUniforms();for(let Je=0;Je<he;Je++)Oi.setValue(O,"_gl_DrawID",Je),le.render(zt[Je]/an,Rn[Je])}else if(k.isInstancedMesh)le.renderInstances(oe,ve,k.count);else if(K.isInstancedBufferGeometry){const zt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Rn=Math.min(K.instanceCount,zt);le.renderInstances(oe,ve,Rn)}else le.render(oe,ve)};function re(E,B,K){E.transparent===!0&&E.side===xe&&E.forceSinglePass===!1?(E.side=Fe,E.needsUpdate=!0,ir(E,B,K),E.side=En,E.needsUpdate=!0,ir(E,B,K),E.side=xe):ir(E,B,K)}this.compile=function(E,B,K=null){K===null&&(K=E),p=Zt.get(K),p.init(B),S.push(p),K.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==K&&E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Z=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const gt=k.material;if(gt)if(Array.isArray(gt))for(let wt=0;wt<gt.length;wt++){const Dt=gt[wt];re(Dt,K,k),Z.add(Dt)}else re(gt,K,k),Z.add(gt)}),S.pop(),p=null,Z},this.compileAsync=function(E,B,K=null){const Z=this.compile(E,B,K);return new Promise(k=>{function gt(){if(Z.forEach(function(wt){Rt.get(wt).currentProgram.isReady()&&Z.delete(wt)}),Z.size===0){k(E);return}setTimeout(gt,10)}Kt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let rn=null;function Cn(E){rn&&rn(E)}function oc(){mi.stop()}function cc(){mi.start()}const mi=new yh;mi.setAnimationLoop(Cn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(E){rn=E,$.setAnimationLoop(E),E===null?mi.stop():mi.start()},$.addEventListener("sessionstart",oc),$.addEventListener("sessionend",cc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(B),B=$.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,P),p=Zt.get(E,S.length),p.init(B),S.push(p),bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),U.setFromProjectionMatrix(bt),at=this.localClippingEnabled,q=A.init(this.clippingPlanes,at),m=Tt.get(E,M.length),m.init(),M.push(m),$.enabled===!0&&$.isPresenting===!0){const gt=x.xr.getDepthSensingMesh();gt!==null&&na(gt,B,-1/0,x.sortObjects)}na(E,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ht,pt),$t=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,$t&&W.addToRenderList(m,E),this.info.render.frame++,q===!0&&A.beginShadows();const K=p.state.shadowsArray;w.render(K,E,B),q===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const gt=B.cameras;if(k.length>0)for(let wt=0,Dt=gt.length;wt<Dt;wt++){const It=gt[wt];hc(Z,k,E,It)}$t&&W.render(E);for(let wt=0,Dt=gt.length;wt<Dt;wt++){const It=gt[wt];lc(m,E,It,It.viewport)}}else k.length>0&&hc(Z,k,E,B),$t&&W.render(E),lc(m,E,B);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,B),vt.resetDefaultState(),b=-1,_=null,S.pop(),S.length>0?(p=S[S.length-1],q===!0&&A.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function na(E,B,K,Z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||U.intersectsSprite(E)){Z&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(bt);const wt=it.update(E),Dt=E.material;Dt.visible&&m.push(E,wt,Dt,K,Lt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||U.intersectsObject(E))){const wt=it.update(E),Dt=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Lt.copy(wt.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(bt)),Array.isArray(Dt)){const It=wt.groups;for(let Bt=0,Vt=It.length;Bt<Vt;Bt++){const Ut=It[Bt],oe=Dt[Ut.materialIndex];oe&&oe.visible&&m.push(E,wt,oe,K,Lt.z,Ut)}}else Dt.visible&&m.push(E,wt,Dt,K,Lt.z,null)}}const gt=E.children;for(let wt=0,Dt=gt.length;wt<Dt;wt++)na(gt[wt],B,K,Z)}function lc(E,B,K,Z){const k=E.opaque,gt=E.transmissive,wt=E.transparent;p.setupLightsView(K),q===!0&&A.setGlobalState(x.clippingPlanes,K),Z&&Nt.viewport(L.copy(Z)),k.length>0&&nr(k,B,K),gt.length>0&&nr(gt,B,K),wt.length>0&&nr(wt,B,K),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function hc(E,B,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Ii(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Qs:qn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const gt=p.state.transmissionRenderTarget[Z.id],wt=Z.viewport||L;gt.setSize(wt.z,wt.w);const Dt=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(Y),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),$t&&W.render(K);const It=x.toneMapping;x.toneMapping=li;const Bt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),q===!0&&A.setGlobalState(x.clippingPlanes,Z),nr(E,K,Z),R.updateMultisampleRenderTarget(gt),R.updateRenderTargetMipmap(gt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ut=0,oe=B.length;Ut<oe;Ut++){const me=B[Ut],ve=me.object,je=me.geometry,le=me.material,zt=me.group;if(le.side===xe&&ve.layers.test(Z.layers)){const Rn=le.side;le.side=Fe,le.needsUpdate=!0,uc(ve,K,Z,je,le,zt),le.side=Rn,le.needsUpdate=!0,Vt=!0}}Vt===!0&&(R.updateMultisampleRenderTarget(gt),R.updateRenderTargetMipmap(gt))}x.setRenderTarget(Dt),x.setClearColor(Y,Q),Bt!==void 0&&(Z.viewport=Bt),x.toneMapping=It}function nr(E,B,K){const Z=B.isScene===!0?B.overrideMaterial:null;for(let k=0,gt=E.length;k<gt;k++){const wt=E[k],Dt=wt.object,It=wt.geometry,Bt=Z===null?wt.material:Z,Vt=wt.group;Dt.layers.test(K.layers)&&uc(Dt,B,K,It,Bt,Vt)}}function uc(E,B,K,Z,k,gt){E.onBeforeRender(x,B,K,Z,k,gt),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,B,K,Z,E,gt),k.transparent===!0&&k.side===xe&&k.forceSinglePass===!1?(k.side=Fe,k.needsUpdate=!0,x.renderBufferDirect(K,B,Z,k,E,gt),k.side=En,k.needsUpdate=!0,x.renderBufferDirect(K,B,Z,k,E,gt),k.side=xe):x.renderBufferDirect(K,B,Z,k,E,gt),E.onAfterRender(x,B,K,Z,k,gt)}function ir(E,B,K){B.isScene!==!0&&(B=Yt);const Z=Rt.get(E),k=p.state.lights,gt=p.state.shadowsArray,wt=k.state.version,Dt=Pt.getParameters(E,k.state,gt,B,K),It=Pt.getProgramCacheKey(Dt);let Bt=Z.programs;Z.environment=E.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(E.isMeshStandardMaterial?X:y).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Ct),Bt=new Map,Z.programs=Bt);let Vt=Bt.get(It);if(Vt!==void 0){if(Z.currentProgram===Vt&&Z.lightsStateVersion===wt)return dc(E,Dt),Vt}else Dt.uniforms=Pt.getUniforms(E),E.onBeforeCompile(Dt,x),Vt=Pt.acquireProgram(Dt,It),Bt.set(It,Vt),Z.uniforms=Dt.uniforms;const Ut=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=A.uniform),dc(E,Dt),Z.needsLights=Yh(E),Z.lightsStateVersion=wt,Z.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.directionalShadowMap.value=k.state.directionalShadowMap,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotShadowMap.value=k.state.spotShadowMap,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMap.value=k.state.pointShadowMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),Z.currentProgram=Vt,Z.uniformsList=null,Vt}function fc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Vr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function dc(E,B){const K=Rt.get(E);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Xh(E,B,K,Z,k){B.isScene!==!0&&(B=Yt),R.resetTextureUnits();const gt=B.fog,wt=Z.isMeshStandardMaterial?B.environment:null,Dt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ys,It=(Z.isMeshStandardMaterial?X:y).get(Z.envMap||wt),Bt=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Vt=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ut=!!K.morphAttributes.position,oe=!!K.morphAttributes.normal,me=!!K.morphAttributes.color;let ve=li;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ve=x.toneMapping);const je=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,le=je!==void 0?je.length:0,zt=Rt.get(Z),Rn=p.state.lights;if(q===!0&&(at===!0||E!==_)){const en=E===_&&Z.id===b;A.setState(Z,E,en)}let he=!1;Z.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Rn.state.version||zt.outputColorSpace!==Dt||k.isBatchedMesh&&zt.batching===!1||!k.isBatchedMesh&&zt.batching===!0||k.isBatchedMesh&&zt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&zt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&zt.instancing===!1||!k.isInstancedMesh&&zt.instancing===!0||k.isSkinnedMesh&&zt.skinning===!1||!k.isSkinnedMesh&&zt.skinning===!0||k.isInstancedMesh&&zt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&zt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&zt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&zt.instancingMorph===!1&&k.morphTexture!==null||zt.envMap!==It||Z.fog===!0&&zt.fog!==gt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==A.numPlanes||zt.numIntersection!==A.numIntersection)||zt.vertexAlphas!==Bt||zt.vertexTangents!==Vt||zt.morphTargets!==Ut||zt.morphNormals!==oe||zt.morphColors!==me||zt.toneMapping!==ve||zt.morphTargetsCount!==le)&&(he=!0):(he=!0,zt.__version=Z.version);let an=zt.currentProgram;he===!0&&(an=ir(Z,B,k));let Oi=!1,Je=!1,Ts=!1;const _e=an.getUniforms(),gn=zt.uniforms;if(Nt.useProgram(an.program)&&(Oi=!0,Je=!0,Ts=!0),Z.id!==b&&(b=Z.id,Je=!0),Oi||_!==E){Nt.buffers.depth.getReversed()?(ct.copy(E.projectionMatrix),Qu(ct),tf(ct),_e.setValue(O,"projectionMatrix",ct)):_e.setValue(O,"projectionMatrix",E.projectionMatrix),_e.setValue(O,"viewMatrix",E.matrixWorldInverse);const jn=_e.map.cameraPosition;jn!==void 0&&jn.setValue(O,At.setFromMatrixPosition(E.matrixWorld)),kt.logarithmicDepthBuffer&&_e.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_e.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,Je=!0,Ts=!0)}if(k.isSkinnedMesh){_e.setOptional(O,k,"bindMatrix"),_e.setOptional(O,k,"bindMatrixInverse");const en=k.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),_e.setValue(O,"boneTexture",en.boneTexture,R))}k.isBatchedMesh&&(_e.setOptional(O,k,"batchingTexture"),_e.setValue(O,"batchingTexture",k._matricesTexture,R),_e.setOptional(O,k,"batchingIdTexture"),_e.setValue(O,"batchingIdTexture",k._indirectTexture,R),_e.setOptional(O,k,"batchingColorTexture"),k._colorsTexture!==null&&_e.setValue(O,"batchingColorTexture",k._colorsTexture,R));const As=K.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&rt.update(k,K,an),(Je||zt.receiveShadow!==k.receiveShadow)&&(zt.receiveShadow=k.receiveShadow,_e.setValue(O,"receiveShadow",k.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(gn.envMap.value=It,gn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(gn.envMapIntensity.value=B.environmentIntensity),Je&&(_e.setValue(O,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&qh(gn,Ts),gt&&Z.fog===!0&&Mt.refreshFogUniforms(gn,gt),Mt.refreshMaterialUniforms(gn,Z,G,et,p.state.transmissionRenderTarget[E.id]),Vr.upload(O,fc(zt),gn,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vr.upload(O,fc(zt),gn,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_e.setValue(O,"center",k.center),_e.setValue(O,"modelViewMatrix",k.modelViewMatrix),_e.setValue(O,"normalMatrix",k.normalMatrix),_e.setValue(O,"modelMatrix",k.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const en=Z.uniformsGroups;for(let jn=0,Kn=en.length;jn<Kn;jn++){const pc=en[jn];I.update(pc,an),I.bind(pc,an)}}return an}function qh(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Yh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,B,K){Rt.get(E.texture).__webglTexture=B,Rt.get(E.depthTexture).__webglTexture=K;const Z=Rt.get(E);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const K=Rt.get(E);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,K=0){P=E,C=B,T=K;let Z=!0,k=null,gt=!1,wt=!1;if(E){const It=Rt.get(E);if(It.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1;else if(It.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(It.__hasExternalTextures)R.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(It.__boundDepthTexture!==Ut){if(Ut!==null&&Rt.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(wt=!0);const Vt=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?k=Vt[B][K]:k=Vt[B],gt=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?k=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[K]:k=Vt,L.copy(E.viewport),F.copy(E.scissor),V=E.scissorTest}else L.copy(yt).multiplyScalar(G).floor(),F.copy(Ft).multiplyScalar(G).floor(),V=j;if(Nt.bindFramebuffer(O.FRAMEBUFFER,k)&&Z&&Nt.drawBuffers(E,k),Nt.viewport(L),Nt.scissor(F),Nt.setScissorTest(V),gt){const It=Rt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,It.__webglTexture,K)}else if(wt){const It=Rt.get(E.texture),Bt=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,K||0,Bt)}b=-1},this.readRenderTargetPixels=function(E,B,K,Z,k,gt,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){Nt.bindFramebuffer(O.FRAMEBUFFER,Dt);try{const It=E.texture,Bt=It.format,Vt=It.type;if(!kt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Z&&K>=0&&K<=E.height-k&&O.readPixels(B,K,Z,k,ft.convert(Bt),ft.convert(Vt),gt)}finally{const It=P!==null?Rt.get(P).__webglFramebuffer:null;Nt.bindFramebuffer(O.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,B,K,Z,k,gt,wt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const It=E.texture,Bt=It.format,Vt=It.type;if(!kt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-Z&&K>=0&&K<=E.height-k){Nt.bindFramebuffer(O.FRAMEBUFFER,Dt);const Ut=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ut),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(B,K,Z,k,ft.convert(Bt),ft.convert(Vt),0);const oe=P!==null?Rt.get(P).__webglFramebuffer:null;Nt.bindFramebuffer(O.FRAMEBUFFER,oe);const me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ju(O,me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ut),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.deleteBuffer(Ut),O.deleteSync(me),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,K=0){E.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const Z=Math.pow(2,-K),k=Math.floor(E.image.width*Z),gt=Math.floor(E.image.height*Z),wt=B!==null?B.x:0,Dt=B!==null?B.y:0;R.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,wt,Dt,k,gt),Nt.unbindTexture()},this.copyTextureToTexture=function(E,B,K=null,Z=null,k=0){E.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,E=arguments[1],B=arguments[2],k=arguments[3]||0,K=null);let gt,wt,Dt,It,Bt,Vt,Ut,oe,me;const ve=E.isCompressedTexture?E.mipmaps[k]:E.image;K!==null?(gt=K.max.x-K.min.x,wt=K.max.y-K.min.y,Dt=K.isBox3?K.max.z-K.min.z:1,It=K.min.x,Bt=K.min.y,Vt=K.isBox3?K.min.z:0):(gt=ve.width,wt=ve.height,Dt=ve.depth||1,It=0,Bt=0,Vt=0),Z!==null?(Ut=Z.x,oe=Z.y,me=Z.z):(Ut=0,oe=0,me=0);const je=ft.convert(B.format),le=ft.convert(B.type);let zt;B.isData3DTexture?(R.setTexture3D(B,0),zt=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),zt=O.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),zt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const Rn=O.getParameter(O.UNPACK_ROW_LENGTH),he=O.getParameter(O.UNPACK_IMAGE_HEIGHT),an=O.getParameter(O.UNPACK_SKIP_PIXELS),Oi=O.getParameter(O.UNPACK_SKIP_ROWS),Je=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ve.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,It),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Vt);const Ts=E.isDataArrayTexture||E.isData3DTexture,_e=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const gn=Rt.get(E),As=Rt.get(B),en=Rt.get(gn.__renderTarget),jn=Rt.get(As.__renderTarget);Nt.bindFramebuffer(O.READ_FRAMEBUFFER,en.__webglFramebuffer),Nt.bindFramebuffer(O.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Kn=0;Kn<Dt;Kn++)Ts&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(E).__webglTexture,k,Vt+Kn),E.isDepthTexture?(_e&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(B).__webglTexture,k,me+Kn),O.blitFramebuffer(It,Bt,gt,wt,Ut,oe,gt,wt,O.DEPTH_BUFFER_BIT,O.NEAREST)):_e?O.copyTexSubImage3D(zt,k,Ut,oe,me+Kn,It,Bt,gt,wt):O.copyTexSubImage2D(zt,k,Ut,oe,me+Kn,It,Bt,gt,wt);Nt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _e?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(zt,k,Ut,oe,me,gt,wt,Dt,je,le,ve.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(zt,k,Ut,oe,me,gt,wt,Dt,je,ve.data):O.texSubImage3D(zt,k,Ut,oe,me,gt,wt,Dt,je,le,ve):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,Ut,oe,gt,wt,je,le,ve.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,Ut,oe,ve.width,ve.height,je,ve.data):O.texSubImage2D(O.TEXTURE_2D,k,Ut,oe,gt,wt,je,le,ve);O.pixelStorei(O.UNPACK_ROW_LENGTH,Rn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he),O.pixelStorei(O.UNPACK_SKIP_PIXELS,an),O.pixelStorei(O.UNPACK_SKIP_ROWS,Oi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je),k===0&&B.generateMipmaps&&O.generateMipmap(zt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(E,B,K=null,Z=null,k=0){return E.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,E=arguments[2],B=arguments[3],k=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,K,Z,k)},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Nt.unbindTexture()},this.resetState=function(){C=0,T=0,P=null,Nt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class tr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new tr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $o extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ug{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ao,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new N;class qr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jo extends zi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qi;const Ds=new N,ts=new N,es=new N,ns=new Et,Is=new Et,Ch=new ue,wr=new N,Us=new N,Tr=new N,dl=new Et,La=new Et,pl=new Et;class Rh extends Ae{constructor(t=new jo){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ug(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new qr(n,3,0,!1)),Qi.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Ch.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ar(wr.set(-.5,-.5,0),es,a,ts,s,r),Ar(Us.set(.5,-.5,0),es,a,ts,s,r),Ar(Tr.set(.5,.5,0),es,a,ts,s,r),dl.set(0,0),La.set(1,0),pl.set(1,1);let o=t.ray.intersectTriangle(wr,Us,Tr,!1,Ds);if(o===null&&(Ar(Us.set(-.5,.5,0),es,a,ts,s,r),La.set(0,1),o=t.ray.intersectTriangle(wr,Tr,Us,!1,Ds),o===null))return;const c=t.ray.origin.distanceTo(Ds);c<t.near||c>t.far||e.push({distance:c,point:Ds.clone(),uv:sn.getInterpolation(Ds,wr,Us,Tr,dl,La,pl,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ar(i,t,e,n,s,r){ns.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Is.x=r*ns.x-s*ns.y,Is.y=s*ns.x+r*ns.y):Is.copy(ns),i.copy(t),i.x+=Is.x,i.y+=Is.y,i.applyMatrix4(Ch)}class Ph extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,c,l=$e,h=$e,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const is=new ue,gl=new ue,Cr=[],vl=new Ni,fg=new ue,Ns=new nt,zs=new bs;class Pi extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ml(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),vl.copy(t.boundingBox).applyMatrix4(is),this.boundingBox.union(vl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,is),zs.copy(t.boundingSphere).applyMatrix4(is),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),gl.multiplyMatrices(n,is),Ns.matrixWorld=gl,Ns.raycast(t,Cr);for(let a=0,o=Cr.length;a<o;a++){const c=Cr[a];c.instanceId=r,c.object=this,e.push(c)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ph(new Float32Array(s*this.count),s,this.count,Jr,bn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class dg extends zi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _l=new ue,Ro=new dh,Rr=new bs,Pr=new N;class pg extends Ae{constructor(t=new Oe,e=new dg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;_l.copy(s).invert(),Ro.copy(t.ray).applyMatrix4(_l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=u,v=d;g<v;g++){const m=l.getX(g);Pr.fromBufferAttribute(f,m),xl(Pr,m,c,s,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,v=d;g<v;g++)Pr.fromBufferAttribute(f,g),xl(Pr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xl(i,t,e,n,s,r,a){const o=Ro.distanceSqToPoint(i);if(o<e){const c=new N;Ro.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class $n extends Ge{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Et:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],r=[],a=[],o=new N,c=new ue;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ko extends An{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mg extends Ko{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Zo(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Lr=new N,Da=new Zo,Ia=new Zo,Ua=new Zo;class gg extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Lr.subVectors(s[0],s[1]).add(s[0]),l=Lr);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Da.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,v,m),Ia.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,v,m),Ua.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Ia.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Ua.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Da.calc(c),Ia.calc(c),Ua.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ml(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function vg(i,t){const e=1-i;return e*e*t}function _g(i,t){return 2*(1-i)*i*t}function xg(i,t){return i*i*t}function Ws(i,t,e,n){return vg(i,t)+_g(i,e)+xg(i,n)}function Mg(i,t){const e=1-i;return e*e*e*t}function yg(i,t){const e=1-i;return 3*e*e*i*t}function Sg(i,t){return 3*(1-i)*i*i*t}function bg(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return Mg(i,t)+yg(i,e)+Sg(i,n)+bg(i,s)}class Lh extends An{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eg extends An{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y),Xs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dh extends An{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wg extends An{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends An{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tg extends An{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y),Ws(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Ml(o,c.x,l.x,h.x,f.x),Ml(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var yl=Object.freeze({__proto__:null,ArcCurve:mg,CatmullRomCurve3:gg,CubicBezierCurve:Lh,CubicBezierCurve3:Eg,EllipseCurve:Ko,LineCurve:Dh,LineCurve3:wg,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:Tg,SplineCurve:Uh});class Ag extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new yl[s.type]().fromJSON(s))}return this}}class Cg extends Ag{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Dh(this.currentPoint.clone(),new Et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ih(this.currentPoint.clone(),new Et(t,e),new Et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Lh(this.currentPoint.clone(),new Et(t,e),new Et(n,s),new Et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Ko(t,e,n,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jo extends Oe{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,f=new N,u=new Et,d=new N,g=new N,v=new N;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let M=0;M<=e;M++){const S=n+M*h*s,x=Math.sin(S),D=Math.cos(S);for(let C=0;C<=t.length-1;C++){f.x=t[C].x*x,f.y=t[C].y,f.z=t[C].x*D,a.push(f.x,f.y,f.z),u.x=M/e,u.y=C/(t.length-1),o.push(u.x,u.y);const T=c[3*C+0]*x,P=c[3*C+1],b=c[3*C+0]*D;l.push(T,P,b)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){const x=S+M*t.length,D=x,C=x+t.length,T=x+t.length+1,P=x+1;r.push(D,C,P),r.push(T,P,C)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("uv",new pe(o,2)),this.setAttribute("normal",new pe(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.points,t.segments,t.phiStart,t.phiLength)}}class Ke extends Jo{constructor(t=1,e=1,n=4,s=8){const r=new Cg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ke(t.radius,t.length,t.capSegments,t.radialSegments)}}class Wn extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new N,h=new Et;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ot extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const v=[],m=n/2;let p=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new pe(f,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2));function M(){const x=new N,D=new N;let C=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const b=[],_=P/r,L=_*(e-t)+t;for(let F=0;F<=s;F++){const V=F/s,Y=V*c+o,Q=Math.sin(Y),H=Math.cos(Y);D.x=L*Q,D.y=-_*n+m,D.z=L*H,f.push(D.x,D.y,D.z),x.set(Q,T,H).normalize(),u.push(x.x,x.y,x.z),d.push(V,1-_),b.push(g++)}v.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const _=v[b][P],L=v[b+1][P],F=v[b+1][P+1],V=v[b][P+1];(t>0||b!==0)&&(h.push(_,L,V),C+=3),(e>0||b!==r-1)&&(h.push(L,F,V),C+=3)}l.addGroup(p,C,0),p+=C}function S(x){const D=g,C=new Et,T=new N;let P=0;const b=x===!0?t:e,_=x===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*_,0),u.push(0,_,0),d.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const Y=F/s*c+o,Q=Math.cos(Y),H=Math.sin(Y);T.x=b*H,T.y=m*_,T.z=b*Q,f.push(T.x,T.y,T.z),u.push(0,_,0),C.x=Q*.5+.5,C.y=H*.5*_+.5,d.push(C.x,C.y),g++}for(let F=0;F<s;F++){const V=D+F,Y=L+F;x===!0?h.push(Y,Y+1,V):h.push(Y+1,Y,V),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ot(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tn extends Ot{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Tn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ea extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new N,x=new N,D=new N;for(let C=0;C<e.length;C+=3)d(e[C+0],S),d(e[C+1],x),d(e[C+2],D),c(S,x,D,M)}function c(M,S,x,D){const C=D+1,T=[];for(let P=0;P<=C;P++){T[P]=[];const b=M.clone().lerp(x,P/C),_=S.clone().lerp(x,P/C),L=C-P;for(let F=0;F<=L;F++)F===0&&P===C?T[P][F]=b:T[P][F]=b.clone().lerp(_,F/L)}for(let P=0;P<C;P++)for(let b=0;b<2*(C-P)-1;b++){const _=Math.floor(b/2);b%2===0?(u(T[P][_+1]),u(T[P+1][_]),u(T[P][_])):(u(T[P][_+1]),u(T[P+1][_+1]),u(T[P+1][_]))}}function l(M){const S=new N;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(M),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const M=new N;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const x=m(M)/2/Math.PI+.5,D=p(M)/Math.PI+.5;a.push(x,1-D)}g(),f()}function f(){for(let M=0;M<a.length;M+=6){const S=a[M+0],x=a[M+2],D=a[M+4],C=Math.max(S,x,D),T=Math.min(S,x,D);C>.9&&T<.1&&(S<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),D<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,S){const x=M*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const M=new N,S=new N,x=new N,D=new N,C=new Et,T=new Et,P=new Et;for(let b=0,_=0;b<r.length;b+=9,_+=6){M.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),C.set(a[_+0],a[_+1]),T.set(a[_+2],a[_+3]),P.set(a[_+4],a[_+5]),D.copy(M).add(S).add(x).divideScalar(3);const L=m(D);v(C,_+0,M,L),v(T,_+2,S,L),v(P,_+4,x,L)}}function v(M,S,x,D){D<0&&M.x===1&&(a[S]=M.x-1),x.x===0&&x.z===0&&(a[S]=D/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.vertices,t.indices,t.radius,t.details)}}class Qo extends ea{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qo(t.radius,t.detail)}}class tc extends ea{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tc(t.radius,t.detail)}}class fi extends Oe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let f=t;const u=(e-t)/s,d=new N,g=new Et;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,x=M+n+1,D=M+n+2,C=M+1;o.push(S,x,C),o.push(x,D,C)}}this.setIndex(o),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Jt extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new N,u=new N,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const C=D/e;f.x=-t*Math.cos(s+C*r)*Math.sin(a+S*o),f.y=t*Math.cos(a+S*o),f.z=t*Math.sin(s+C*r)*Math.sin(a+S*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(C+x,1-S),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const S=h[p][M+1],x=h[p][M],D=h[p+1][M],C=h[p+1][M+1];(p!==0||a>0)&&d.push(S,x,C),(p!==n-1||c<Math.PI)&&d.push(x,D,C)}this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ze extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new N,f=new N,u=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;a.push(v,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pi extends zi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Nh extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ec extends Nh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Na=new ue,Sl=new N,bl=new N;class Rg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sl),bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bl),e.updateMatrixWorld(),Na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Pg extends Rg{constructor(){super(new Sh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class js extends Nh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Pg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);class Lg{constructor(t){this.canvas=t,this.renderer=new hg({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.current=null,this.t=0,this.last=performance.now(),this.running=!0,addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{this.last=performance.now()}),this.resize(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}resize(){const t=innerWidth,e=innerHeight;if(this.renderer.setSize(t,e,!1),this.current){const n=this.current.camera;n&&n.isPerspectiveCamera&&(n.aspect=t/e,n.updateProjectionMatrix()),this.current.resize&&this.current.resize(t,e)}}setScene(t){this.current&&this.current.dispose&&this.current.dispose(),this.current=null,this.current=t(),this.resize()}loop(t){requestAnimationFrame(this.loop);const e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.t+=e;const n=this.current;n&&(n.update(e,this.t),this.renderer.render(n.scene,n.camera))}}const Dg="https://juanbracco2001-eng.github.io/Cachetazo/",zh="potrero-perfil-v1",Te=[{id:"albiceleste",name:"Albiceleste",pattern:"stripes10",c1:"#75aadb",c2:"#f7f7f4",sleeve:"#75aadb",rarity:"comun",unlock:{type:"start"}},{id:"rojo",name:"Rojo liso",pattern:"solid",c1:"#c9382f",c2:"#f7f7f4",sleeve:"#c9382f",rarity:"comun",unlock:{type:"start"}},{id:"azul-franja",name:"Azul con franja",pattern:"band",c1:"#1b3a8c",c2:"#f2c21b",sleeve:"#1b3a8c",rarity:"comun",unlock:{type:"start"}},{id:"banda-roja",name:"Banda roja",pattern:"sash",c1:"#f7f7f4",c2:"#c9382f",sleeve:"#f7f7f4",rarity:"rara",unlock:{type:"level",level:2}},{id:"rojiblanca",name:"Rojiblanca",pattern:"stripes10",c1:"#c9382f",c2:"#f7f7f4",sleeve:"#c9382f",rarity:"rara",unlock:{type:"level",level:3}},{id:"rojinegra",name:"Rojinegra",pattern:"stripes6",c1:"#c9382f",c2:"#15161a",sleeve:"#15161a",rarity:"comun",unlock:{type:"chest"}},{id:"azulgrana",name:"Azulgrana",pattern:"stripes6",c1:"#1d3f8f",c2:"#8c1d2f",sleeve:"#8c1d2f",rarity:"rara",unlock:{type:"chest"}},{id:"granate",name:"Granate",pattern:"solid",c1:"#7a1a2b",c2:"#f7f7f4",sleeve:"#7a1a2b",rarity:"comun",unlock:{type:"chest"}},{id:"verdiblanca",name:"Verdiblanca",pattern:"stripes10",c1:"#2f8f5b",c2:"#f7f7f4",sleeve:"#2f8f5b",rarity:"rara",unlock:{type:"chest"}},{id:"blanquinegra",name:"Blanquinegra",pattern:"stripes10",c1:"#f7f7f4",c2:"#15161a",sleeve:"#15161a",rarity:"rara",unlock:{type:"chest"}},{id:"celeste-liso",name:"Celeste liso",pattern:"solid",c1:"#8ec5f0",c2:"#f7f7f4",sleeve:"#8ec5f0",rarity:"comun",unlock:{type:"chest"}},{id:"azul-amarilla",name:"Azul y amarilla",pattern:"stripes6",c1:"#1b3a8c",c2:"#f2c21b",sleeve:"#f2c21b",rarity:"epica",unlock:{type:"tournament",wins:1}},{id:"retro-aros",name:"Retro de aros",pattern:"hoops",c1:"#c9382f",c2:"#f7f7f4",sleeve:"#c9382f",rarity:"epica",unlock:{type:"level",level:8}},{id:"dorada",name:"Dorada",pattern:"solid",c1:"#e0a912",c2:"#f7f7f4",sleeve:"#e0a912",rarity:"legendaria",unlock:{type:"tournament",wins:3}},{id:"suplente",name:"Suplente negra",pattern:"band",c1:"#15161a",c2:"#75aadb",sleeve:"#15161a",rarity:"legendaria",unlock:{type:"level",level:10}}],Ks={comun:{name:"Común",weight:6,color:"#9fb0cc"},rara:{name:"Rara",weight:3,color:"#75aadb"},epica:{name:"Épica",weight:1.2,color:"#b57cf0"},legendaria:{name:"Legendaria",weight:.4,color:"#f6b40e"}},Fh=i=>Math.max(0,Te.findIndex(t=>t.id===i)),Ig=Te.filter(i=>i.unlock.type==="start").map(i=>i.id);function Yr(i){const t=i.unlock;return t.type==="start"?"La tenés desde el inicio":t.type==="level"?`Nivel ${t.level}`:t.type==="tournament"?t.wins===1?"Ganá 1 torneo":`Ganá ${t.wins} torneos`:"Sale de los cofres"}const Fi=[{key:"sk",title:"Piel",color:!0,items:["#f1c7a5","#e3b48f","#d39b74","#b97a50","#8a5a3c","#5e3b26"]},{key:"hs",title:"Pelo",items:[["buzz","Corto"],["bald","Pelado"],["fade","Degradé"],["swept","Peinado"],["long","Largo"],["dreads","Rastas"],["bob","Melena"],["slick","Engominado"],["curly","Rulos"],["bun","Rodete"]]},{key:"hc",title:"Color de pelo",color:!0,items:["#110c0b","#3a2418","#7a4a22","#b5541c","#d9b25c","#d9d3c9","#2f5fd0","#d0306a"]},{key:"bd",title:"Barba",items:[["none","Sin barba"],["full","Completa"],["trim","Candado"],["mustache","Bigote"],["fumanchu","Bigote largo"],["goatee","Chivita"]]},{key:"of",title:"Ropa",items:[["tee","Remera"],["kit","Casaca"],["poncho","Poncho"],["jacket","Campera"],["apron","Delantal"]]},{key:"kt",title:"Casaca",kit:!0,items:Te.map(i=>[i.id,i.name])},{key:"sh",title:"Color de ropa",color:!0,items:["#e8e4da","#1c2a4a","#c9382f","#2f8f5b","#e6a817","#6a3fa0","#2a2a30","#e07b39"]},{key:"ht",title:"En la cabeza",items:[["","Nada"],["beret","Boina"],["cap","Gorra"],["beanie","Gorro"],["hincha","Gorro de hincha"],["chullo","Chullo"],["gaucho","Sombrero"],["vincha","Vincha"]]},{key:"sf",title:"Bufanda",items:[["","Sin bufanda"],["scarf","Bufanda de hincha"]]},{key:"pr",title:"En la mano",items:[["","Nada"],["pizza","Pizza"],["beer","Cerveza",!0],["fernet","Fernet",!0],["mate","Mate"],["choripan","Choripán"],["vuvu","Bubusela"],["flag","Bandera"],["faso","Faso",!0]]},{key:"ex",title:"Cara",items:[["calm","Tranqui"],["shout","Gritando el gol"],["cry","Llorando de emoción"],["sing","Cantando"]]}],nc={sk:2,hs:3,hc:1,bd:0,of:1,kt:0,sh:0,ht:0,sf:0,pr:0,ex:1},Oh=i=>Array.isArray(i)?i[0]:i,El=(i,t)=>{const e=Fi.find(s=>s.key===i),n=e&&e.items[t];return Array.isArray(n)?n[1]:n},vn=(i,t)=>{const e=Fi.find(n=>n.key===i);return e?Oh(e.items[t]):void 0};function Ri(i,t){const e=Fi.find(s=>s.key===i),n=e?e.items.findIndex(s=>Oh(s)===t):-1;return n<0?nc[i]:n}const Po=(i,t)=>{const e=Fi.find(s=>s.key===i),n=e&&e.items[t];return Array.isArray(n)&&n[2]===!0};function Bh(i){const t={};for(const e of Fi){const n=Math.floor(Number(i&&i[e.key]));t[e.key]=Number.isFinite(n)&&n>=0&&n<e.items.length?n:nc[e.key]}return t}function Ug(i,t=!0){const e={};for(const n of Fi){let s=n.items.map((r,a)=>a);n.key==="kt"&&i&&i.length&&(s=i),t||(s=s.filter(r=>!Po(n.key,r))),e[n.key]=s[Math.floor(Math.random()*s.length)]}return e}const Nn=i=>{const t={};for(const e in i)t[e]=Ri(e,i[e]);return t},ic=[{id:"jujeno",name:"El Jujeño",region:"Jujuy · NOA",tag:"Baja de la quebrada con la bubusela y el aguante de siempre.",look:Nn({sk:"#8a5a3c",hs:"bob",hc:"#110c0b",bd:"none",of:"kit",kt:"albiceleste",ht:"chullo",sf:"scarf",pr:"vuvu",ex:"shout"})},{id:"cordobesa",name:"La Cordobesa",region:"Córdoba",tag:"Fernet, cuarteto y cantar los noventa minutos.",look:Nn({sk:"#e3b48f",hs:"long",hc:"#3a2418",bd:"none",of:"kit",kt:"azul-franja",ht:"vincha",sh:"#c9382f",sf:"",pr:"fernet",ex:"sing"})},{id:"correntino",name:"El Correntino",region:"Corrientes · Litoral",tag:"Mate en mano y chamamé en la tribuna.",look:Nn({sk:"#b97a50",hs:"slick",hc:"#110c0b",bd:"fumanchu",of:"kit",kt:"rojo",ht:"gaucho",sh:"#3a2418",sf:"",pr:"mate",ex:"sing"})},{id:"rosarina",name:"La Rosarina",region:"Rosario · Santa Fe",tag:"Llora, grita y abraza a medio estadio, rival incluido.",look:Nn({sk:"#d39b74",hs:"bun",hc:"#b5541c",bd:"none",of:"kit",kt:"rojo",ht:"",sf:"scarf",pr:"choripan",ex:"cry"})},{id:"cacho",name:"Cacho",region:"Conurbano · Buenos Aires",tag:"Birra, bombo y aguante desde la popular.",look:Nn({sk:"#d39b74",hs:"buzz",hc:"#3a2418",bd:"goatee",of:"kit",kt:"albiceleste",ht:"cap",sf:"",pr:"beer",ex:"shout"})},{id:"oso",name:"Oso",region:"Chubut · Patagonia",tag:"Con el viento de frente y la campera puesta: no hay clima que lo calle.",look:Nn({sk:"#f1c7a5",hs:"long",hc:"#7a4a22",bd:"full",of:"jacket",sh:"#2f8f5b",ht:"beanie",sf:"scarf",pr:"mate",ex:"shout"})},{id:"tano",name:"El Tano",region:"Buenos Aires · herencia italiana",tag:"Pizza en una mano, el puño en la otra.",look:Nn({sk:"#e3b48f",hs:"slick",hc:"#d9d3c9",bd:"mustache",of:"kit",kt:"azul-franja",ht:"beret",sf:"",pr:"pizza",ex:"shout"})},{id:"mendocina",name:"La Mendocina",region:"Mendoza · Cuyo",tag:"Bandera arriba hasta que se canse el brazo.",look:Nn({sk:"#b97a50",hs:"curly",hc:"#110c0b",bd:"none",of:"kit",kt:"rojo",ht:"hincha",sf:"scarf",pr:"flag",ex:"shout"})},{id:"tucumano",name:"El Tucumano",region:"Tucumán · NOA",tag:"Nervioso, apasionado y con el fasito en la boca hasta en los penales.",look:Nn({sk:"#d39b74",hs:"curly",hc:"#110c0b",bd:"trim",of:"kit",kt:"albiceleste",ht:"cap",sf:"",pr:"faso",ex:"cry"})}],Lo=100,wl=40,Tl=60,ss=(i,t,e)=>{const n=Math.floor(Number(i));return Number.isFinite(n)&&n>=0?Math.min(n,e):t},kh=i=>Math.floor(i/Lo)+1,Do=i=>typeof i=="string"?i.replace(/[\u0000-\u001f​-‏‪-‮]/g,"").trim().slice(0,14):"",Al=()=>{const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`};function Zs(i){const t=i&&typeof i=="object"?i:{},e=new Set(Te.map(a=>a.id)),n=[...new Set([...Ig,...(Array.isArray(t.kits)?t.kits:[]).filter(a=>e.has(a))])],s=Bh(t.look||nc);n.includes(Te[s.kt].id)||(s.kt=Fh("albiceleste"));const r=ss(t.xp,0,1e9);return{v:2,name:Do(t.name),created:t.created===!0,look:s,hincha:ic.some(a=>a.id===t.hincha)?t.hincha:"",coins:ss(t.coins,0,1e9),xp:r,kits:n,chests:ss(t.chests,0,9999),wins:ss(t.wins,0,1e6),rewardedLevel:Math.max(1,ss(t.rewardedLevel,1,9999)),lastDaily:typeof t.lastDaily=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(t.lastDaily)?t.lastDaily:"",adultProps:t.adultProps!==!1,updatedAt:ss(t.updatedAt,0,1e15)}}let Ye=Zs(null),Hh="local";const Io=new Set,Ng=()=>Io.forEach(i=>{try{i(Ye,Hh)}catch(t){console.error(t)}});function zg(){try{localStorage.setItem(zh,JSON.stringify(Ye))}catch{}}function Fg(){try{return Zs(JSON.parse(localStorage.getItem(zh)||"null"))}catch{return Zs(null)}}function rs(i){const t=Zs(Ye),e=i(t)||{};return Ye=Zs(Object.assign(t,{updatedAt:Date.now()})),zg(),Ng(),e}function za(i){const t=[];for(const e of Te){if(i.kits.includes(e.id))continue;const n=e.unlock;(n.type==="level"&&i.rewardedLevel>=n.level||n.type==="tournament"&&i.wins>=n.wins)&&(i.kits.push(e.id),t.push(e))}return t}function Cl(i){const t=kh(i.xp),e=Math.max(0,t-i.rewardedLevel);return e&&(i.chests+=e,i.rewardedLevel=t),e?t:0}const ie={get profile(){return Ye},get status(){return Hh},get level(){return kh(Ye.xp)},get levelProgress(){return Ye.xp%Lo/Lo},hasCharacter:()=>Ye.created,owns:i=>Ye.kits.includes(i),on(i){return Io.add(i),()=>Io.delete(i)},async syncNow(){},async load(){return Ye=Fg(),this.syncNow(),Ye},update(i){rs(t=>{Object.assign(t,i)})},addXp(i){return rs(t=>{const e=t.chests;t.xp+=i;const n=Cl(t),s=za(t);return{level:n,chests:t.chests-e,kits:s}})},recordTournamentWin(){return rs(i=>(i.wins+=1,i.chests+=1,{level:0,chests:1,kits:za(i)}))},canClaimDaily(){return Ye.created&&Ye.lastDaily!==Al()},claimDaily(){return this.canClaimDaily()?rs(i=>(i.lastDaily=Al(),i.xp+=wl,i.chests+=1,{level:Cl(i),chests:1,xp:wl,kits:za(i)})):null},openChest(){return Ye.chests<1?null:rs(i=>{i.chests-=1;const t=Te.filter(r=>r.unlock.type==="chest"&&!i.kits.includes(r.id));if(!t.length)return i.coins+=Tl,{type:"coins",amount:Tl};const e=t.reduce((r,a)=>r+Ks[a.rarity].weight,0);let n=Math.random()*e,s=t[t.length-1];for(const r of t)if(n-=Ks[r.rarity].weight,n<=0){s=r;break}return i.kits.push(s.id),{type:"kit",kit:s}})},equipKit(i){return Ye.kits.includes(i)?(rs(t=>{t.look=Object.assign({},t.look,{kt:Fh(i),of:Ri("of","kit")})}),!0):!1}},Og="#1c2230",Fs="#efece4",te=Math.PI,Ui=new Ph(Uint8Array.from([70,140,210,255]),4,1,Jr);Ui.minFilter=Ui.magFilter=$e;Ui.generateMipmaps=!1;Ui.needsUpdate=!0;const Bg=new ce({color:856347,side:Fe}),Rl=new Map;function xt(i,t){const e=i+(t||"");let n=Rl.get(e);return n||(n=new pi({color:i,gradientMap:Ui,side:t||En}),Rl.set(e,n)),n}const ii=(i,t)=>new ce({color:i,transparent:t!=null,opacity:t??1}),Pl=new Map;function Ll(i,t){const e=i.pattern+i.c1+i.c2+(t||"");let n=Pl.get(e);if(n)return n;const s=document.createElement("canvas");s.width=64,s.height=32;const r=s.getContext("2d");if(r.fillStyle=i.c1,r.fillRect(0,0,64,32),r.fillStyle=i.c2,i.pattern==="stripes10"||i.pattern==="stripes6"){const o=i.pattern==="stripes10"?10:6,c=64/o;for(let l=1;l<o;l+=2)r.fillRect(l*c,0,c,32)}else if(i.pattern==="hoops")for(let o=1;o<8;o+=2)r.fillRect(0,o*4,64,4);else i.pattern==="band"&&r.fillRect(0,11,64,9);const a=new $n(s);return a.colorSpace=Pe,a.magFilter=a.minFilter=$e,a.generateMipmaps=!1,a.wrapS=ui,n=new pi({map:a,gradientMap:Ui,side:t||En}),Pl.set(e,n),n}let Dr=null;function kg(){if(Dr)return Dr;const i=document.createElement("canvas");i.width=90,i.height=56;const t=i.getContext("2d");t.fillStyle="#75aadb",t.fillRect(0,0,90,56),t.fillStyle="#ffffff",t.fillRect(0,19,90,18),t.fillStyle="#f6b40e",t.beginPath(),t.arc(45,28,7,0,te*2),t.fill();const e=new $n(i);return e.colorSpace=Pe,Dr=new pi({map:e,gradientMap:Ui,side:xe}),Dr}function zn(i,t,e,n=1.07){const s=new nt(i,t);if(e){const r=new nt(i,Bg);r.scale.setScalar(n),s.add(r)}return s}const Dl={pizza:-1.3,beer:-2.5,fernet:-2.3,mate:-1.25,choripan:-1.3,vuvu:-2.4,flag:-2.7},Il=-2.7;function $r(i){const t=Bh(i),e=vn("sk",t.sk),n=vn("hc",t.hc),s=vn("sh",t.sh),r=vn("hs",t.hs),a=vn("bd",t.bd),o=vn("of",t.of),c=vn("ht",t.ht),l=vn("sf",t.sf),h=vn("pr",t.pr),f=vn("ex",t.ex),u=Te[t.kt]||Te[0],d=[],g=j=>(d.push(j),j),v=new Me,m=new Me;v.add(m);const p=.55,M=[-1,1].map(j=>{const U=new Me;U.position.set(j*.14,p,0);const q=zn(g(new Ke(.11,.3,4,10)),xt(Og),!0);q.position.y=-.2;const at=zn(g(new Jt(.14,12,10)),xt(Fs),!0);return at.scale.set(1,.7,1.35),at.position.set(0,-.43,.05),U.add(q,at),m.add(U),U}),S=o==="kit"?Ll(u):xt(o==="jacket"||o==="tee"?s:Fs),x=zn(g(new Ke(.25,.15,6,14)),S,!0);if(x.position.y=.93,m.add(x),o==="kit"&&u.pattern==="sash"){const j=new nt(g(new Wt(.14,.46,.54)),xt(u.c2));j.position.y=.95,j.rotation.z=.6,m.add(j)}if(o==="apron"){const j=zn(g(new Wt(.38,.52,.05)),xt(s),!1);j.position.set(0,.86,.245),m.add(j)}if(o==="poncho"){const j=new nt(g(new Ot(.3,.6,.6,18,1,!0)),xt(s,xe));j.position.y=1;const U=new nt(g(new ze(.6,.03,6,28)),xt(Fs));U.rotation.x=te/2,U.position.y=.72;const q=new nt(g(new ze(.5,.025,6,28)),xt("#c9382f"));q.rotation.x=te/2,q.position.y=.82,m.add(j,U,q)}if(l==="scarf"){const j=new nt(g(new ze(.215,.065,8,22)),xt(u.c1));j.rotation.x=te/2,j.position.y=1.19;const U=new nt(g(new ze(.205,.045,8,22)),xt(u.c2));U.rotation.x=te/2,U.position.y=1.25;const q=new nt(g(new Wt(.11,.38,.04)),xt(u.c1));q.position.set(-.1,.98,.265),q.rotation.z=.08;const at=new nt(g(new Wt(.115,.07,.045)),xt(u.c2));at.position.set(-.1,.9,.268),at.rotation.z=.08,m.add(j,U,q,at)}const D=o==="jacket",C=o==="kit"?u.sleeve:s,T=[f==="shout"?Il:0,h&&Dl[h]!==void 0?Dl[h]:f==="shout"?Il:0],P=[-1,1].map(j=>{const U=new Me;U.position.set(j*.33,1.14,0);const q=zn(g(new Ke(.085,.26,4,8)),xt(D?s:e),!0);if(q.position.y=-.2,U.add(q),!D&&o!=="poncho"&&o!=="apron"){const ct=zn(g(new Ke(.1,.08,4,8)),xt(C),!0,1.05);ct.position.y=-.1,U.add(ct)}const at=zn(g(new Jt(.095,10,8)),xt(e),!0);return at.position.y=-.46,U.add(at),m.add(U),U});let b=null;if(h&&h!=="faso"){const j=new Me;j.position.set(0,-.46,0),j.rotation.x=-T[1];const U=(q,at,ct,bt,At,Lt)=>{const Yt=new nt(g(q),typeof at=="string"?xt(at):at);return Yt.position.set(ct,bt,At),Lt&&Yt.rotation.set(Lt[0]||0,Lt[1]||0,Lt[2]||0),j.add(Yt),Yt};switch(h){case"pizza":{const q=U(new Ot(.26,.26,.04,3),"#f2c21b",0,.16,.1,[-1.05,0,0]);q.rotation.y=te/2;for(const[at,ct,bt]of[[-.07,.2,.17],[.07,.17,.12],[0,.26,.21]])U(new Ot(.04,.04,.02,10),"#b3261e",at,ct,bt,[-1.05,0,0]);break}case"beer":{U(new Ot(.085,.07,.24,14),"#e3a21a",0,.12,0),U(new Ot(.09,.087,.06,14),"#ffffff",0,.27,0),U(new ze(.06,.014,6,12),"#cfd6e2",.1,.12,0,[0,te/2,0]);break}case"fernet":{U(new Ot(.07,.075,.26,12),"#2b1a12",0,.13,0),U(new Ot(.032,.05,.12,10),"#2b1a12",0,.32,0),U(new Ot(.036,.036,.03,10),"#c9382f",0,.4,0),U(new Wt(.1,.1,.02),"#c9382f",0,.12,.072);break}case"mate":{const q=U(new Jt(.085,12,10),"#6b4a2f",0,.09,0);q.scale.y=1.15,U(new Ot(.055,.055,.015,12),"#5a7a2a",0,.185,0),U(new Ot(.008,.008,.22,6),"#cfd6e2",.02,.28,0,[0,0,-.25]);break}case"choripan":{U(new Ke(.06,.2,4,8),"#d9a85a",0,.09,0,[0,0,te/2]),U(new Ke(.04,.27,4,8),"#a8412a",0,.12,0,[0,0,te/2]);break}case"vuvu":{U(new Ot(.02,.02,.06,8),"#f4f1ea",0,.03,0),U(new Ot(.14,.03,.8,14,1,!0),xt(u.c1,xe),0,.46,0),U(new ze(.14,.02,6,16),xt(u.c2),0,.86,0,[te/2,0,0]);break}case"flag":{U(new Ot(.018,.018,1.15,6),"#d8d2c4",0,.5,0);const q=U(new Wt(.66,.42,.012),kg(),.34,.95,0);q.userData.wave=!0;break}}P[1].add(j),b=j}const _=new Me;_.position.y=1.66,m.add(_),_.add(zn(g(new Jt(.42,26,20)),xt(e),!0,1.05));const L={calm:.05,shout:.5,cry:-.45,sing:-.12}[f],F=f==="shout"?.15:.17;for(const j of[-1,1]){const U=zn(g(new Jt(.075,10,8)),xt(e),!0);U.position.set(j*.41,-.02,0),_.add(U);const q=new nt(g(new Jt(.1,14,12)),xt("#ffffff"));q.scale.set(1,f==="shout"?1.1:1.25,.5),q.position.set(j*.15,.02,.375);const at=new nt(g(new Jt(.062,12,10)),xt("#1a1420"));at.scale.set(1,1.2,.5),at.position.set(j*.15,.015,.405);const ct=new nt(g(new Jt(.02,8,6)),ii(16777215));ct.position.set(j*.15+.022,.05,.43);const bt=new nt(g(new Wt(.16,.03,.03)),xt(n));if(bt.position.set(j*.15,F,.378),bt.rotation.z=j*L,_.add(q,at,ct,bt),f==="shout"||f==="cry"){const At=new nt(g(new Wn(.065,14)),ii(14704730,.4)),Lt=new N(j*.24,-.08,.33).normalize().multiplyScalar(.425);At.position.copy(Lt),At.quaternion.setFromUnitVectors(new N(0,0,1),Lt.clone().normalize()),_.add(At)}if(f==="cry"){const At=new nt(g(new Ke(.02,.13,3,6)),ii(8376575,.9));At.position.set(j*.19,-.1,.385),_.add(At)}}const V=new nt(g(new Jt(.035,8,6)),xt(e));V.position.set(0,-.06,.415),_.add(V);const Y=a==="full"?.43:.395;if(f==="calm"){const j=new nt(g(new ze(.055,.012,6,14,te)),ii(8005168));j.rotation.z=te,j.position.set(0,-.14,Y),_.add(j)}else{const j=f==="sing"?.6:f==="cry"?1.25:1.1,U=f==="sing"?1.2:f==="cry"?.85:1,q=new nt(g(new Jt(.085,14,10)),ii(4853532));q.scale.set(j,U,.4),q.position.set(0,-.15,Y-.005);const at=new nt(g(new Jt(.05,10,8)),ii(14243434));if(at.scale.set(j*.9,.55,.4),at.position.set(0,-.19-(U-1)*.02,Y+.004),_.add(q,at),f!=="sing"){const ct=new nt(g(new Wt(.1*j,.022,.02)),ii(16777215));ct.position.set(0,-.1,Y+.008),_.add(ct)}}if(h==="faso"){const j=new Me;j.position.set(.09,-.155,Y+.01);const U=new nt(g(new Ot(.017,.017,.15,6)),xt("#f4f1ea"));U.rotation.x=te/2,U.position.z=.06;const q=new nt(g(new Jt(.022,6,5)),ii(14710058));q.position.z=.14,j.add(U,q),j.rotation.y=.35,_.add(j)}const Q=xt(n,xe),H=(j=.445,U=-.32,q=.02)=>{const at=new nt(g(new Jt(j,24,14,0,te*2,0,te/2)),Q);return at.rotation.x=U,at.position.y=q,at.userData.top=!0,at},et=(j,U,q,at=te*.4,ct=te*1.2)=>{const bt=new nt(g(new Ot(U,U*.9,j,18,1,!0,at,ct)),Q);return bt.position.set(0,q,0),bt},G=(j,U,q,at,ct,bt,At=0,Lt=0)=>{const Yt=new nt(g(new Wt(j,U,q)),Q);return Yt.position.set(at,ct,bt),Yt.rotation.set(Lt,0,At),Yt.userData.top=!0,Yt};switch(r){case"buzz":_.add(H(.43));break;case"fade":_.add(H(.43,-.4),G(.36,.1,.4,0,.42,.02));break;case"swept":_.add(H(),G(.5,.13,.3,.05,.4,.17,-.18,.25));break;case"long":_.add(H(),et(.8,.45,-.28));break;case"bob":_.add(H(),et(.46,.47,-.07),G(.5,.12,.2,0,.38,.25,0,.3));break;case"slick":_.add(H(.435,-.5),G(.3,.08,.4,0,.44,-.06));break;case"bun":{_.add(H());const j=new nt(g(new Jt(.16,12,10)),xt(n));j.position.set(0,.5,-.14),j.userData.top=!0,_.add(j);break}case"dreads":{_.add(H());for(let j=0;j<9;j++){const U=te*.35+j/8*te*1.3,q=new nt(g(new Ke(.045,.5,3,6)),xt(n));q.position.set(Math.sin(U)*.42,-.22,Math.cos(U)*.42),q.rotation.set(Math.cos(U)*.12,0,-Math.sin(U)*.12),_.add(q)}break}case"curly":{for(let U=0;U<22;U++){const q=.3+U/22*.7,at=U*2.4,ct=Math.sqrt(1-q*q)*.43,bt=Math.cos(at)*ct,At=Math.sin(at)*ct;if(bt>.2&&q<.55)continue;const Lt=new nt(g(new Jt(.14,10,8)),xt(n));Lt.position.set(At,q*.43,bt),q*.43>.12&&(Lt.userData.top=!0),_.add(Lt)}break}}["beanie","hincha","chullo","gaucho","cap","beret"].includes(c)&&_.children.filter(j=>j.userData.top).forEach(j=>_.remove(j));const ht=xt(n),pt=(j=.17)=>{const U=new nt(g(new Ke(.03,j,4,8)),ht);return U.rotation.z=te/2,U.position.set(0,-.105,.405),U};switch(a){case"full":{const j=new nt(g(new Jt(.44,22,12,0,te,te*.62,te*.38)),xt(n,xe));_.add(j);break}case"trim":{const j=new nt(g(new Jt(.07,10,8)),ht);j.scale.set(1,1.4,.8),j.position.set(0,-.31,.35),_.add(pt(),j);break}case"mustache":_.add(pt());break;case"fumanchu":{_.add(pt(.2));for(const j of[-1,1]){const U=new nt(g(new Ke(.026,.34,4,8)),ht);U.position.set(j*.115,-.32,.385),U.rotation.z=j*.08,_.add(U)}break}case"goatee":{const j=new nt(g(new Jt(.07,10,8)),ht);j.scale.set(1,1.5,.8),j.position.set(0,-.31,.35),_.add(j);break}}const yt=xt(s,xe),Ft={pattern:"stripes10",c1:u.c1,c2:u.c2};if(c==="beret"){const j=new nt(g(new Jt(.4,18,12)),yt);j.scale.set(1.02,.34,1.02),j.position.set(.03,.4,0),j.rotation.z=-.18;const U=new nt(g(new Ot(.02,.02,.06,6)),yt);U.position.set(.03,.55,0),_.add(j,U)}else if(c==="cap"){const j=new nt(g(new Jt(.46,20,12,0,te*2,0,te/2)),yt);j.rotation.x=-.45,j.position.y=.06;const U=new nt(g(new Wt(.46,.04,.32)),xt(u.c1));U.position.set(0,.27,.5),U.rotation.x=.1,_.add(j,U)}else if(c==="beanie"){const j=new nt(g(new Jt(.47,20,12,0,te*2,0,te*.42)),yt);j.position.y=.04;const U=new nt(g(new ze(.435,.05,8,24)),xt(Fs));U.rotation.x=te/2,U.position.y=.2;const q=new nt(g(new Jt(.09,10,8)),xt(Fs));q.position.y=.55,_.add(j,U,q)}else if(c==="hincha"){const j=new nt(g(new Jt(.47,24,12,0,te*2,0,te*.42)),Ll(Ft,xe));j.position.y=.04;const U=new nt(g(new ze(.435,.05,8,24)),xt(u.c2));U.rotation.x=te/2,U.position.y=.2;const q=new nt(g(new Jt(.1,10,8)),xt(u.c1));q.position.y=.56,_.add(j,U,q)}else if(c==="chullo"){const j="#c9382f",U=new nt(g(new Jt(.47,20,12,0,te*2,0,te*.46)),xt(j,xe));U.position.y=.04;const q=new nt(g(new ze(.45,.032,6,24)),xt("#f2c21b"));q.rotation.x=te/2,q.position.y=.15;const at=new nt(g(new ze(.42,.032,6,24)),xt("#2f8f5b"));at.rotation.x=te/2,at.position.y=.24,_.add(U,q,at);for(const bt of[-1,1]){const At=new nt(g(new Ke(.075,.22,4,8)),xt(j));At.position.set(bt*.4,-.12,.05),At.rotation.z=bt*.12;const Lt=new nt(g(new Jt(.05,8,6)),xt("#f2c21b"));Lt.position.set(bt*.43,-.34,.05),_.add(At,Lt)}const ct=new nt(g(new Jt(.07,8,6)),xt("#f2c21b"));ct.position.y=.52,_.add(ct)}else if(c==="gaucho"){const j=new nt(g(new Ot(.25,.27,.26,18)),xt("#2d2118"));j.position.y=.5;const U=new nt(g(new Ot(.62,.62,.04,28)),xt("#2d2118"));U.position.y=.36;const q=new nt(g(new ze(.265,.025,6,24)),xt("#c9382f"));q.rotation.x=te/2,q.position.y=.41,_.add(j,U,q)}else if(c==="vincha"){const j=new nt(g(new ze(.43,.04,6,28)),xt(s));j.rotation.x=te/2-.15,j.position.y=.2;const U=new nt(g(new Jt(.07,8,6)),xt(s));U.position.set(0,.15,-.43),_.add(j,U)}return v.userData={body:m,legs:M,arms:P,head:_,geos:d,raise:T,holder:b},v}function sc(i,t,e=0){const n=i.userData,s=Math.min(1,e),r=Math.sin(t*11)*.9*s,a=(o,c)=>o?Math.sin(t*7+c)*.15*(1-s):0;if(n.legs[0].rotation.x=r,n.legs[1].rotation.x=-r,n.arms[0].rotation.x=-r*.8+n.raise[0]+a(n.raise[0],0),n.arms[1].rotation.x=r*.8+n.raise[1]+a(n.raise[1],1.7),n.arms[0].rotation.z=-.09-Math.sin(t*1.7)*.02*(1-s)-(n.raise[0]?.12:0),n.arms[1].rotation.z=.09+Math.sin(t*1.7)*.02*(1-s)+(n.raise[1]?.12:0),n.body.position.y=Math.abs(Math.sin(t*11))*.07*s+Math.sin(t*2)*.012*(1-s),n.body.rotation.x=.12*s,n.head.rotation.y=Math.sin(t*.8)*.12*(1-s),n.holder){const o=n.holder.children.find(c=>c.userData.wave);o&&(o.rotation.y=Math.sin(t*5)*.25)}}function Js(i){i&&(i.userData.geos.forEach(t=>t.dispose()),i.removeFromParent())}function z(i,t,...e){const n=document.createElement(i);if(t)for(const s in t){const r=t[s];r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:s==="style"?Object.assign(n.style,r):s.startsWith("on")&&typeof r=="function"?n.addEventListener(s.slice(2).toLowerCase(),r):n.setAttribute(s,r===!0?"":String(r)))}for(const s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}const er=()=>document.getElementById("ui");function Li(){const i=er();for(;i.firstChild;)i.removeChild(i.firstChild)}let Ul=0;function rc(i){const t=document.getElementById("toast");t.textContent=i,t.hidden=!1,clearTimeout(Ul),Ul=setTimeout(()=>{t.hidden=!0},2600)}function Hg(i){const t=(e,n="90deg")=>{const s=100/e;return`repeating-linear-gradient(${n}, ${i.c1} 0 ${s}%, ${i.c2} ${s}% ${s*2}%)`};switch(i.pattern){case"stripes10":return t(10);case"stripes6":return t(6);case"hoops":return t(8,"0deg");case"band":return`linear-gradient(0deg, ${i.c1} 0 36%, ${i.c2} 36% 64%, ${i.c1} 64%)`;case"sash":return`linear-gradient(135deg, ${i.c1} 0 36%, ${i.c2} 36% 64%, ${i.c1} 64%)`;default:return i.c1}}const Uo=i=>z("i",{class:"kit-sw",style:{background:Hg(i)},"aria-hidden":"true"});function Vg({onDone:i,onCancel:t}){const e=new $o;e.background=new qt("#0b1424"),e.fog=new tr("#0b1424",9,20);const n=new Ze(36,innerWidth/innerHeight,.1,60);e.add(new ec("#cfe6ff","#26314a",.8));const s=new js("#ffffff",1.3);s.position.set(3,5,4);const r=new js("#75aadb",1);r.position.set(-4,3,-3),e.add(s,r);const a=new Me,o=new nt(new Ot(1.5,1.6,.25,40),new pi({color:"#f4f1ea"}));o.position.y=-.125;const c=new nt(new ze(1.5,.05,8,48),new ce({color:"#75aadb"}));c.rotation.x=Math.PI/2;const l=new nt(new Wn(.55,24),new ce({color:"#f6b40e"}));l.rotation.x=-Math.PI/2,l.position.y=.005,a.add(o,c,l),e.add(a);let h=Object.assign({},ie.profile.look),f=ie.profile.hincha,u=null,d=-.35,g=!0,v=null;const m=()=>ie.profile.adultProps,p=()=>Te.map((H,et)=>ie.owns(H.id)?et:-1).filter(H=>H>=0),M=()=>{!m()&&Po("pr",h.pr)&&(h.pr=0)};function S(){Js(u),u=$r(h),a.add(u)}const x=document.getElementById("gl"),D=H=>{v=H.clientX,g=!1},C=H=>{v!=null&&(d+=(H.clientX-v)*.012,v=H.clientX)},T=()=>{v=null};x.addEventListener("pointerdown",D),addEventListener("pointermove",C),addEventListener("pointerup",T),addEventListener("pointercancel",T),Li();const P=z("input",{id:"cr-name",type:"text",maxlength:14,autocomplete:"off",spellcheck:"false",placeholder:"Tu nombre",value:ie.profile.name}),b=z("div",{class:"hincha-grid"}),_=z("div",{class:"cr-opts"});function L(H){H(),M(),g=!1,S(),Y()}function F(){b.textContent="";for(const H of ic)b.append(z("button",{type:"button",class:"hincha","aria-pressed":String(f===H.id),title:H.tag,onclick:()=>L(()=>{h=Object.assign({},H.look),f=H.id,Do(P.value)||(P.value=H.name)})},z("strong",{text:H.name}),z("small",{text:H.region})))}function V(){_.textContent="";for(const H of Fi){const et=z("div",{class:"cr-row"});H.kit?Te.forEach((G,ht)=>{const pt=ie.owns(G.id),yt=h.kt===ht;et.append(z("button",{type:"button",class:"chip kit"+(pt?"":" locked"),"aria-pressed":String(yt),disabled:!pt,title:pt?G.name:`${G.name}: ${Yr(G)}`,onclick:()=>L(()=>{h.kt=ht,h.of=Ri("of","kit")})},Uo(G),z("span",null,z("b",{text:G.name}),z("small",{text:pt?Ks[G.rarity].name:Yr(G)}))))}):H.items.forEach((G,ht)=>{if(H.key==="pr"&&!m()&&Po("pr",ht))return;const pt=h[H.key]===ht,yt=H.color?`${H.title} ${ht+1}`:El(H.key,ht);et.append(z("button",{type:"button",class:H.color?"chip sw":"chip","aria-pressed":String(pt),"aria-label":yt,title:yt,onclick:()=>L(()=>{h[H.key]=ht})},H.color?z("i",{style:{background:G}}):El(H.key,ht)))}),_.append(z("span",{class:"lab",text:H.title}),et)}}function Y(){F(),V()}const Q=z("section",{class:"cr-panel","aria-label":"Creador de personaje"},z("header",null,z("p",{class:"kicker",text:ie.hasCharacter()?"Tu personaje":"Bienvenido"}),z("h1",{text:ie.hasCharacter()?"Cambiá tu look":"Creá tu hincha"})),z("label",{class:"lab",for:"cr-name",text:"Nombre"}),P,z("span",{class:"lab",text:"Hinchas de la casa"}),b,_,z("footer",null,z("button",{type:"button",class:"btn ghost",text:"Al azar",onclick:()=>L(()=>{h=Ug(p(),m()),f=""})}),ie.hasCharacter()&&z("button",{type:"button",class:"btn ghost",text:"Volver",onclick:()=>t&&t()}),z("button",{type:"button",class:"btn primary",text:ie.hasCharacter()?"Guardar":"Entrar al mundo",onclick:()=>{const H=Do(P.value);if(!H){P.focus(),rc("Ponele un nombre a tu personaje.");return}ie.update({name:H,look:h,hincha:f,created:!0}),i()}})));return er().append(Q),M(),Y(),S(),{scene:e,camera:n,update(H,et){g&&(d+=H*.5),a.rotation.y=d,sc(u,et,0);const G=innerWidth/innerHeight<.9;n.position.set(G?0:1.15,G?1:1.6,G?9.4:5.6),n.lookAt(G?0:1.15,G?-.4:1.05,0)},dispose(){x.removeEventListener("pointerdown",D),removeEventListener("pointermove",C),removeEventListener("pointerup",T),removeEventListener("pointercancel",T),Js(u),Li()}}}const Ir=Math.PI,as="#f4f1ea",Ur="#1c2230",ne=(i,t,e,n=0,s=0,r=0)=>{const a=new nt(t,typeof e=="string"?xt(e):e);return a.position.set(n,s,r),i.add(a),a},Nl={ring(i,t){ne(i,new Wt(4.2,.4,4.2),as,0,.2,0),ne(i,new Wt(4.4,.12,4.4),t.color,0,.06,0);for(const e of[-1,1])for(const n of[-1,1])ne(i,new Ot(.1,.1,1.7,8),Ur,e*1.95,1.25,n*1.95);for(const e of[.9,1.35,1.8])ne(i,new Wt(3.9,.06,.06),t.color,0,e,1.95),ne(i,new Wt(3.9,.06,.06),t.color,0,e,-1.95),ne(i,new Wt(.06,.06,3.9),t.color,1.95,e,0),ne(i,new Wt(.06,.06,3.9),t.color,-1.95,e,0)},goal(i,t){ne(i,new Wt(7,.05,5),t.color,0,.03,.5),ne(i,new Wt(6.6,.06,.08),as,0,.06,2.9);for(const s of[-1,1])ne(i,new Ot(.09,.09,2.3,8),as,s*2.2,1.15,-.8);ne(i,new Wt(4.5,.16,.16),as,0,2.3,-.8);const e=new nt(new mn(4.4,2.2),new ce({color:"#ffffff",transparent:!0,opacity:.22,side:xe}));e.position.set(0,1.15,-1.3),i.add(e);const n=ne(i,new Jt(.32,16,12),as,.4,.34,1.4);n.userData.spin=!0},booth(i,t){ne(i,new Wt(3.4,1,1.3),Ur,0,.5,0),ne(i,new Wt(3.5,.08,1.4),t.color,0,1.04,0);for(const e of[-1,1]){const n=ne(i,new Ot(.46,.46,.06,20),"#0d111b",e*.8,1.11,.05);n.userData.disc=!0,ne(i,new Ot(.14,.14,.08,12),t.accent,e*.8,1.13,.05),ne(i,new Wt(.9,1.9,.9),Ur,e*2.4,.95,-.2),ne(i,new Ot(.3,.3,.06,16),"#2a3347",e*2.4,.7,.27).rotation.x=Ir/2}ne(i,new Wt(4.6,.12,.12),new ce({color:t.color}),0,2.3,-.5)},globe(i,t){ne(i,new Ot(.9,1.1,.5,16),as,0,.25,0);const e=ne(i,new Jt(1.15,20,16),t.color,0,1.9,0);e.userData.spin=!0;for(const[s,r,a]of[[.6,2.3,.85],[-.8,1.7,.7],[.2,1.3,1.1],[-.3,2.5,-.9]])ne(e,new Jt(.32,8,6),"#5fb36b",s,r-1.9,a);ne(i,new ze(1.45,.04,6,36),"#f6b40e",0,1.9,0).rotation.set(Ir/2.6,0,.4),ne(i,new Ot(.06,.06,2.4,6),Ur,2.3,1.2,.6);for(const[s,r]of[[2.1,.2],[1.7,-.3]]){const a=ne(i,new Wt(1.1,.3,.06),t.accent,2.7,s,.6);a.rotation.y=r}},farm(i,t){ne(i,new Wt(5.4,.12,3.8),"#6b4a2f",-.4,.06,.6);for(let n=0;n<4;n++){ne(i,new Wt(5,.16,.3),"#5a3d26",-.4,.16,-.7+n*.8);for(let s=0;s<5;s++){const r=ne(i,new Tn(.17,.5,6),t.color,-2.4+s*1,.45,-.7+n*.8);r.userData.sway=s+n}}ne(i,new Wt(2,1.5,1.6),"#b98957",3.1,.75,-.6);const e=ne(i,new Tn(1.7,.9,4),"#8a3d2c",3.1,1.95,-.6);e.rotation.y=Ir/4},mill(i,t){ne(i,new Wt(5,2.1,3.2),t.accent,0,1.05,-.6);for(let e=0;e<3;e++){const n=ne(i,new Wt(1.7,.1,3.3),t.color,-1.65+e*1.65,2.35,-.6);n.rotation.z=.5}ne(i,new Ot(.32,.4,3.4,10),"#8a3d2c",2.7,1.7,-1.4),ne(i,new Wt(1.2,1.1,.06),"#2a3347",-1.1,1,1.02),ne(i,new Wt(1,1.4,.06),"#2a3347",1.2,.7,1.02),["#c9382f","#2f8f5b","#e6a817"].forEach((e,n)=>{const s=ne(i,new Ot(.28,.28,1.3,12),e,-1.6+n*.75,.3,2);s.rotation.z=Ir/2})}};function Gg(i){const t=new Me;return(Nl[i.shape]||Nl.ring)(t,i),t}function Wg(i,t,e,n){const s=document.createElement("canvas");s.width=512,s.height=160;const r=new $n(s);r.colorSpace=Pe;const a=()=>{const c=s.getContext("2d");c.clearRect(0,0,s.width,s.height),c.fillStyle=n?"rgba(14,20,34,0.78)":"rgba(14,20,34,0.92)",c.beginPath(),c.roundRect(8,8,496,144,28),c.fill(),c.fillStyle=e,c.fillRect(8,8,18,144),c.fillStyle="#ffffff",c.font="64px Anton, Impact, sans-serif",c.textBaseline="middle",c.fillText(i.toUpperCase(),50,62,440),c.fillStyle=n?"#9fb0cc":"#ffd98a",c.font='600 34px "Barlow Condensed", Arial Narrow, sans-serif',c.fillText(t,50,120,440),r.needsUpdate=!0};a(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(a);const o=new Rh(new jo({map:r,transparent:!0,depthWrite:!1}));return o.scale.set(3.9,1.22,1),o.userData.tex=r,o}const No=[{id:"peleas",name:"El Ring",title:"Peleas",status:"live",kind:"embed",url:Dg,tag:"Cachetazo: duelos 1 contra 1 a mano abierta, con salas y torneos.",plan:["Salas con código de 4 letras","Torneo, 2 vs 2 y 3 vs 3","Más de 65 personajes, pase de batalla y cofres"],color:"#c9382f",accent:"#ffd9d4",shape:"ring"},{id:"futbol",name:"La Cancha",title:"Fútbol",status:"live",kind:"scene",stage:"Etapa 2",tag:"Fútbol 3 vs 3 de potrero: pase corto, filtrado de tres dedos, tiro potente y poderes.",plan:["Partidos online con hasta 6 jugadores (falta el servidor)","Más poderes y estrellas con onda anime","Torneos que dan cofres y casacas"],color:"#2f8f5b",accent:"#d7f2e2",shape:"goal"},{id:"dj",name:"La Cabina",title:"DJ y canciones",status:"soon",stage:"Etapa 3",tag:"Armá beats, canciones y sets de DJ.",plan:["Secuenciador de beats paso a paso","Mezcla con perillas y discos","Compartir tus temas en la sala"],color:"#6a3fa0",accent:"#e6dcf5",shape:"booth"},{id:"viajes",name:"La Terminal",title:"Viajar por el mundo",status:"soon",stage:"Etapa 4",tag:"Salí de Rosario y recorré ciudades del mundo.",plan:["Destinos con su propia escena 3D","Misiones y coleccionables por ciudad","Viajar con amigos"],color:"#2a7fb5",accent:"#d5ebf8",shape:"globe"},{id:"chacra",name:"La Chacra",title:"Cultivo",status:"soon",stage:"Etapa 4",tag:"Un espacio para cultivar y vivir de eso.",plan:["Parcela propia","Siembra, cosecha y venta","Mejoras y herramientas"],color:"#7a9a2f",accent:"#eaf2cf",shape:"farm"},{id:"taller",name:"El Taller",title:"Oficios",status:"soon",stage:"Etapa 5",tag:"Diseñador industrial, de autos, de moda, ingeniero, industria textil.",plan:["Profesiones con sus propios minijuegos","Industria textil y cadena de producción","Economía compartida con el resto de los modos"],color:"#e07b39",accent:"#fbe3d1",shape:"mill"}];let oi=null;function hi(i,{onClose:t,cls:e=""}={}){oi&&oi.close();const n=z("div",{class:"dlg-back"+(e==="full"?" full-back":""),role:"dialog","aria-modal":"true"}),s=z("div",{class:"dlg "+e},i);n.append(s);const r=o=>{o.key==="Escape"&&a.close()};n.addEventListener("pointerdown",o=>{o.target===n&&a.close()}),addEventListener("keydown",r),er().append(n);const a={close(){oi===a&&(oi=null,removeEventListener("keydown",r),n.remove(),t&&t())}};return oi=a,a}const He=()=>{oi&&oi.close()},Xg=()=>!!oi,Vh=i=>z("span",{class:"pill "+i.status,text:i.status==="live"?"Disponible":`${i.stage} · Próximamente`});function qg({onPick:i,onClose:t}){const e=z("div",{class:"mode-grid"},No.map(n=>z("button",{type:"button",class:"mode-card "+n.status,style:{"--c":n.color},onclick:()=>i(n)},z("span",{class:"mc-title",text:n.title}),z("span",{class:"mc-tag",text:n.tag}),Vh(n))));return hi(z("div",null,z("header",{class:"dlg-head"},z("h2",{text:"Elegí a qué jugar"}),z("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>He()})),e),{onClose:t,cls:"wide"})}function Yg(i,{onClose:t}){return hi(z("div",{style:{"--c":i.color}},z("header",{class:"dlg-head"},z("h2",{text:i.title}),z("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>He()})),Vh(i),z("p",{class:"lead",text:i.tag}),z("p",{class:"lab",text:"Lo que va a tener"}),z("ul",{class:"plan"},i.plan.map(e=>z("li",{text:e}))),z("footer",null,z("button",{type:"button",class:"btn primary",text:"Entendido",onclick:()=>He()}))),{onClose:t})}function $g(i,{onClose:t}){const e=z("iframe",{class:"embed-frame",src:i.url,title:i.title,allow:"fullscreen; autoplay",referrerpolicy:"no-referrer",sandbox:"allow-scripts allow-same-origin allow-forms allow-popups"});e.addEventListener("load",()=>e.focus());const n=z("div",{class:"embed"},z("header",{class:"embed-bar"},z("strong",{text:i.title}),z("button",{type:"button",class:"btn ghost",text:"Volver al mundo",onclick:()=>He()})),e);return hi(n,{onClose:t,cls:"full"})}const jg={local:"Tu progreso se guarda solo en este dispositivo.","cloud-pending":"Conectando con la nube…","cloud-ok":"Tu progreso se guarda en la nube.","cloud-error":"No pude conectar con la nube. Por ahora se guarda en este dispositivo."};function Kg({onClose:i,onEditLook:t}){const e=ie.profile,n=z("p",{class:"lead",text:jg[ie.status]||""}),s=z("p",{class:"muted",text:""}),r=z("div",{class:"row-actions"},z("button",{type:"button",class:"btn ghost",text:"Cambiar personaje",onclick:()=>{He(),t()}}));s.textContent="La nube se activa con un proyecto de Firebase propio (los pasos están en el README).";const a=z("label",{class:"toggle"},z("input",{type:"checkbox",checked:e.adultProps,onchange:o=>ie.update({adultProps:o.target.checked})}),z("span",{text:"Mostrar cerveza, fernet y fasos en los personajes"}));return hi(z("div",null,z("header",{class:"dlg-head"},z("h2",{text:e.name||"Jugador"}),z("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>He()})),z("p",{class:"lead",text:`Nivel ${ie.level} · ${e.coins} monedas`}),n,s,a,r),{onClose:i})}function Zg({onClose:i}){const t=z("div");let e=null;function n(){const a=ie.openChest();a&&(e=a),r()}function s(){if(!e)return null;if(e.type==="coins")return z("div",{class:"reveal pop"},z("strong",{text:"¡Ya tenés todas las casacas de cofre!"}),z("span",{text:`Te llevás ${e.amount} monedas.`}));const a=e.kit,o=Ks[a.rarity];return z("div",{class:"reveal pop",style:{"--r":o.color}},z("span",{class:"rar",text:o.name}),Uo(a),z("strong",{text:a.name}),z("span",{text:"¡Casaca nueva!"}),z("button",{type:"button",class:"btn primary",text:"Ponérmela",onclick:()=>{ie.equipKit(a.id),rc("Casaca puesta."),r()}}))}function r(){t.textContent="";const a=ie.profile,o=Te.filter(c=>a.kits.includes(c.id)).length;t.append(z("header",{class:"dlg-head"},z("h2",{text:"Cofres y casacas"}),z("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>He()})),z("div",{class:"chest-row"},z("div",{class:"chest-art","aria-hidden":"true"}),z("div",null,z("p",{class:"lead",text:a.chests===1?"Tenés 1 cofre":`Tenés ${a.chests} cofres`}),z("p",{class:"muted",text:"Ganás uno por cada nivel que subís, por el regalo del día y por cada torneo que ganás."}),z("button",{type:"button",class:"btn primary",text:"Abrir cofre",disabled:a.chests<1,onclick:n}))),s(),z("span",{class:"lab",text:`Tus casacas (${o} de ${Te.length})`}),z("div",{class:"kit-list"},Te.map((c,l)=>{const h=a.kits.includes(c.id);return z("button",{type:"button",class:"chip kit"+(h?"":" locked"),disabled:!h,"aria-pressed":String(h&&a.look.kt===l),title:h?`Usar ${c.name}`:`${c.name}: ${Yr(c)}`,onclick:()=>{ie.equipKit(c.id),r()}},Uo(c),z("span",null,z("b",{text:c.name}),z("small",{text:h?Ks[c.rarity].name:Yr(c)})))})))}return r(),hi(t,{onClose:i,cls:"wide"})}const Fn=Math.PI,zl=6.2,si=17,Fl=13,Fa=5.4,Oa=36;function Jg(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function Qg({onEditLook:i,onPlay:t}){const e=new $o,n="#a9d6f5";e.background=new qt(n),e.fog=new tr(n,38,80);const s=new Ze(48,innerWidth/innerHeight,.1,160);e.add(new ec("#ffffff","#6f9a63",.85));const r=new js("#fff4dc",1.25);r.position.set(18,30,12),e.add(r);const a=[],o=w=>(a.push(w),w),c=new nt(o(new Wn(90,48)),xt("#5fa665"));c.rotation.x=-Fn/2,e.add(c);const l=new nt(o(new Wn(si,64)),xt("#efe6d2"));l.rotation.x=-Fn/2,l.position.y=.02,e.add(l),[[si-.9,si,"#75aadb"],[si-1.8,si-.9,"#ffffff"],[si-2.7,si-1.8,"#75aadb"]].forEach(([w,W,rt],J)=>{const ut=new nt(o(new fi(w,W,64)),xt(rt));ut.rotation.x=-Fn/2,ut.position.y=.03+J*.001,e.add(ut)});const h=new Me;h.add(new nt(o(new Ot(1.9,2.2,.9,24)),xt("#f4f1ea"))),h.children[0].position.y=.45;const f=new Me;f.position.y=2.3,f.add(new nt(o(new Jt(.85,20,16)),new ce({color:"#f6b40e"})));const u=o(new Tn(.14,.75,6));for(let w=0;w<16;w++){const W=w/16*Fn*2,rt=new nt(u,new ce({color:w%2?"#f6b40e":"#e08a00"}));rt.position.set(Math.cos(W)*1.3,Math.sin(W)*1.3,0),rt.rotation.z=W-Fn/2,f.add(rt)}h.add(f),e.add(h);{const w=Jg(20261022),W=70,rt=o(new Ot(.22,.3,1.5,6)),J=o(new Tn(1.5,3.6,7)),ut=new Pi(rt,xt("#7a5230"),W),ft=new Pi(J,xt("#3f8a4c"),W),vt=new ue,I=new di,lt=new N,$=new N;for(let tt=0;tt<W;tt++){const _t=w()*Fn*2,dt=si+3+w()*40,Ct=.8+w()*.9;$.set(Math.cos(_t)*dt,.75*Ct,Math.sin(_t)*dt),lt.set(Ct,Ct,Ct),vt.compose($,I,lt),ut.setMatrixAt(tt,vt),$.y=(1.5+1.8)*Ct,vt.compose($,I,lt),ft.setMatrixAt(tt,vt)}e.add(ut,ft)}const d=No.map((w,W)=>{const rt=W/No.length*Fn*2,J=Math.cos(rt)*Fl,ut=Math.sin(rt)*Fl,ft=Gg(w);ft.position.set(J,0,ut),ft.rotation.y=Math.atan2(-J,-ut),e.add(ft);const vt=new nt(o(new Ot(4.6,4.6,.08,36)),xt(w.accent));vt.position.set(J,.05,ut),e.add(vt);const I=new nt(o(new fi(4.2,4.6,48)),new ce({color:w.status==="live"?"#f6b40e":w.color,transparent:!0,opacity:.6,side:xe}));I.rotation.x=-Fn/2,I.position.set(J,.11,ut),e.add(I);const lt=Wg(w.name,w.status==="live"?"Disponible · "+w.title:w.stage+" · "+w.title,w.color,w.status!=="live");return lt.position.set(J,4.2,ut),e.add(lt),o({dispose:()=>lt.userData.tex.dispose()}),ft.traverse($=>{$.geometry&&o($.geometry)}),{mode:w,x:J,z:ut,g:ft,glow:I,pad:vt}}),g=[{x:0,z:0,r:2.5},...d.map(w=>({x:w.x,z:w.z,r:2.6}))];let v=$r(ie.profile.look);v.position.set(0,0,5),e.add(v);let m=JSON.stringify(ie.profile.look);function p(){const w=JSON.stringify(ie.profile.look);if(w===m)return;m=w;const W=v;v=$r(ie.profile.look),v.position.copy(W.position),v.rotation.y=W.rotation.y,e.add(v),Js(W)}const M=new nt(o(new Wn(.55,20)),new ce({color:0,transparent:!0,opacity:.25}));M.rotation.x=-Fn/2,M.position.y=.06,e.add(M);const S=new Et;let x=0,D=0,C=.74,T=11.5;const P=new N(0,1.4,5);s.position.set(0,8,16);const b=new Set,_={x:0,y:0};let L=null,F=!1;const V=w=>w.target&&/INPUT|TEXTAREA|SELECT/.test(w.target.tagName),Y=w=>{if(V(w)||F)return;const W=w.key.toLowerCase();if(W==="e"||W==="enter"){L&&!w.repeat&&(w.preventDefault(),ot(L.mode));return}if(W==="m"){st();return}["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(W)&&(b.add(W),w.preventDefault())},Q=w=>b.delete(w.key.toLowerCase()),H=()=>b.clear();addEventListener("keydown",Y),addEventListener("keyup",Q),addEventListener("blur",H);const et=document.getElementById("gl");let G=null;const ht=w=>{G={id:w.pointerId,x:w.clientX,y:w.clientY}},pt=w=>{!G||w.pointerId!==G.id||(D-=(w.clientX-G.x)*.006,C=Math.max(.25,Math.min(1.2,C+(w.clientY-G.y)*.004)),G.x=w.clientX,G.y=w.clientY)},yt=w=>{G&&w.pointerId===G.id&&(G=null)},Ft=w=>{T=Math.max(7,Math.min(28,T+w.deltaY*.012))};et.addEventListener("pointerdown",ht),addEventListener("pointermove",pt),addEventListener("pointerup",yt),addEventListener("pointercancel",yt),et.addEventListener("wheel",Ft,{passive:!0}),Li();const j=z("strong",{class:"hud-name"}),U=z("span",{class:"hud-lvl"}),q=z("span",{class:"hud-coins"}),at=z("i"),ct=z("button",{type:"button",class:"hud-card","aria-label":"Tu cuenta",onclick:()=>Pt()},j,z("span",{class:"hud-sub"},U,q),z("span",{class:"bar"},at)),bt=z("b",{class:"badge",text:"0"}),At=z("button",{type:"button",class:"btn gold",hidden:!0,text:"Regalo del día",onclick:()=>kt()}),Lt=z("div",{class:"hud-actions"},At,z("button",{type:"button",class:"btn primary",onclick:()=>st()},"Modos ",z("kbd",{text:"M"})),z("button",{type:"button",class:"btn ghost",onclick:()=>it()},"Cofres ",bt),z("button",{type:"button",class:"btn ghost",text:"Personaje",onclick:()=>{i()}})),Yt=z("button",{type:"button",class:"prompt",hidden:!0,onclick:()=>L&&ot(L.mode)}),$t=z("i",{class:"knob"}),mt=z("div",{class:"joy","aria-hidden":"true"},$t),O=z("p",{class:"help",text:"WASD o flechas para caminar · arrastrá para girar la cámara"});er().append(z("div",{class:"hud-top"},ct,Lt),Yt,mt,O);function Re(){const w=ie.profile;j.textContent=w.name||"Jugador",U.textContent=`Nivel ${ie.level}`,q.textContent=`${w.coins} monedas`,at.style.width=Math.round(ie.levelProgress*100)+"%",bt.textContent=String(w.chests),bt.classList.toggle("has",w.chests>0),At.hidden=!ie.canClaimDaily(),p()}function Kt(w){const W=[];w.xp&&W.push(`+${w.xp} XP`),w.level&&W.push(`¡Nivel ${w.level}!`),w.chests&&W.push(w.chests===1?"+1 cofre":`+${w.chests} cofres`),w.kits&&w.kits.length&&W.push("Casaca nueva: "+w.kits.map(rt=>rt.name).join(", ")),W.length&&rc(W.join(" · "))}function kt(){const w=ie.claimDaily();w&&Kt(w)}Re();const Nt=ie.on(Re);let Ht=null;const Rt=48,R=w=>{const W=mt.getBoundingClientRect();let rt=w.clientX-(W.left+W.width/2),J=w.clientY-(W.top+W.height/2);const ut=Math.hypot(rt,J);ut>Rt&&(rt*=Rt/ut,J*=Rt/ut),$t.style.transform=`translate(${rt}px, ${J}px)`,_.x=rt/Rt,_.y=-J/Rt},y=()=>{Ht=null,_.x=_.y=0,$t.style.transform=""};mt.addEventListener("pointerdown",w=>{Ht=w.pointerId,mt.setPointerCapture(w.pointerId),R(w),w.stopPropagation()}),mt.addEventListener("pointermove",w=>{w.pointerId===Ht&&R(w)}),mt.addEventListener("pointerup",y),mt.addEventListener("pointercancel",y);const X=()=>{F=!1};function st(){F=!0,b.clear(),y(),qg({onPick:ot,onClose:X})}function ot(w){F=!0,b.clear(),y(),w.status==="live"&&w.kind==="embed"?$g(w,{onClose:X}):w.status==="live"&&w.kind==="scene"&&t?t(w.id):Yg(w,{onClose:X})}function it(){F=!0,b.clear(),y(),Zg({onClose:X})}function Pt(){F=!0,b.clear(),y(),Kg({onClose:X,onEditLook:()=>i()})}const Mt=new Et,Tt=new N;let Zt=null;function A(w,W){let rt=0,J=0;F||((b.has("w")||b.has("arrowup"))&&(rt+=1),(b.has("s")||b.has("arrowdown"))&&(rt-=1),(b.has("d")||b.has("arrowright"))&&(J+=1),(b.has("a")||b.has("arrowleft"))&&(J-=1),rt+=_.y,J+=_.x);const ut=Math.min(1,Math.hypot(rt,J)),ft=Math.sin(D),vt=Math.cos(D);Mt.set(-ft*rt+vt*J,-vt*rt-ft*J),Mt.lengthSq()>0&&Mt.normalize().multiplyScalar(ut*zl),S.lerp(Mt,1-Math.exp(-14*w)),v.position.x+=S.x*w,v.position.z+=S.y*w;for(const dt of g){const Ct=v.position.x-dt.x,ee=v.position.z-dt.z,Ee=Math.hypot(Ct,ee),re=dt.r+.4;Ee<re&&Ee>1e-4&&(v.position.x=dt.x+Ct/Ee*re,v.position.z=dt.z+ee/Ee*re)}const I=Math.hypot(v.position.x,v.position.z);I>Oa&&(v.position.x*=Oa/I,v.position.z*=Oa/I);const lt=S.length();if(lt>.3){let Ct=Math.atan2(S.x,S.y)-x;Ct=Math.atan2(Math.sin(Ct),Math.cos(Ct)),x+=Ct*(1-Math.exp(-12*w))}v.rotation.y=x,sc(v,W,lt/zl),M.position.x=v.position.x,M.position.z=v.position.z,P.lerp(Tt.set(v.position.x,1.4,v.position.z),1-Math.exp(-8*w)),s.position.set(P.x+Math.sin(D)*Math.cos(C)*T,P.y+Math.sin(C)*T,P.z+Math.cos(D)*Math.cos(C)*T),s.lookAt(P),f.rotation.z+=w*.4,h.rotation.y+=w*.2;let $=null,tt=Fa;for(const dt of d){const Ct=Math.hypot(v.position.x-dt.x,v.position.z-dt.z);Ct<tt&&($=dt,tt=Ct),dt.glow.material.opacity=.45+.35*Math.sin(W*3+dt.x)*(Ct<Fa?1:.4),dt.glow.scale.setScalar(Ct<Fa?1.04+Math.sin(W*5)*.02:1),dt.g.traverse(ee=>{ee.userData.spin&&(ee.rotation.y+=w*.8),ee.userData.disc&&(ee.rotation.y+=w*4),ee.userData.sway!==void 0&&(ee.rotation.z=Math.sin(W*2+ee.userData.sway)*.08)})}L=$;const _t=L?L.mode.id:null;_t!==Zt&&(Zt=_t,Yt.hidden=!L,L&&(Yt.textContent="",Yt.append(z("kbd",{text:"E"}),` Entrar a ${L.mode.name}`)))}return{scene:e,camera:s,update:A,dispose(){removeEventListener("keydown",Y),removeEventListener("keyup",Q),removeEventListener("blur",H),removeEventListener("pointermove",pt),removeEventListener("pointerup",yt),removeEventListener("pointercancel",yt),et.removeEventListener("pointerdown",ht),et.removeEventListener("wheel",Ft),Nt(),Xg()&&He(),Js(v),a.forEach(w=>w.dispose()),Li()}}}const Xn={HL:20,HW:12,GW:3.6,GH:2.5,GD:3,R:.34},{HL:tv}=Xn,ps={bubusela:{id:"bubusela",name:"Bubuselazo",cost:50,color:"#ffb02e",desc:"Una onda de bubusela tira para atrás a los rivales cercanos y les saca la pelota."},pique:{id:"pique",name:"Pique de potrero",cost:35,color:"#75aadb",desc:"Salís disparado con la pelota pegada y nadie te la puede sacar."},iman:{id:"iman",name:"Pelota pegada",cost:45,color:"#b57cf0",desc:"La pelota viene sola hacia vos, incluso si la tiene un rival."},alambrado:{id:"alambrado",name:"Alambrado",cost:45,color:"#9fb0cc",desc:"Levantás un paredón de alambre adelante tuyo que frena jugadores y pelota."}},zo=Object.keys(ps),Se=(i,t,e)=>i<t?t:i>e?e:i,hs=i=>i===0?1:-1,ev=i=>hs(i)*tv,Ol=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function nv(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Hs(i,t,e,n,s,r){const a=s-e,o=r-n,c=a*a+o*o,l=c<1e-9?0:Se(((i-e)*a+(t-n)*o)/c,0,1);return Math.hypot(i-(e+a*l),t-(n+o*l))}function Bl(i,t,e,n,s,r){return Math.abs(n)<.001?{x:i+s*Math.sin(e)*r,z:t+s*Math.cos(e)*r}:{x:i+s/n*(Math.cos(e)-Math.cos(e+n*r)),z:t+s/n*(Math.sin(e+n*r)-Math.sin(e))}}const{HL:Gr,HW:jr,GW:Fo}=Xn;function iv(i,t,e){const n=t.ai,s=n.inp;if(s.pass=s.through=s.tackle=s.power=!1,s.target=null,s.aimZ=void 0,i.phase!=="play")return s.mx=s.mz=0,s.shoot=!1,s;const r=i.cfg.difficulty;n.t-=e,n.t<=0&&(n.t=.34-.2*r+i.rng()*.12,sv(i,t,n,r,s)),n.hold>0?(n.hold-=e,s.shoot=n.hold>0,s.aimZ=n.aimZ):s.shoot=!1;const a=n.tx-t.x,o=n.tz-t.z,c=Math.hypot(a,o),l=.84+.16*r;return c>n.stop?(s.mx=a/c*l,s.mz=o/c*l):(s.mx=0,s.mz=0),s}function sv(i,t,e,n,s){const r=i.ball,a=hs(t.team),o=-a*Gr,c=ev(t.team),l=i.ownerPlayer(),h=l&&l.id===t.id,f=l&&l.team===t.team;e.stop=.4;const u=t.role===1?-5.5:t.role===2?5.5:0;if(t.runTo&&t.runT>0&&!h){e.tx=t.runTo.x,e.tz=t.runTo.z,e.mode="run",e.stop=.2;return}if(h){rv(i,t,e,n,s,a,c);return}if(f){e.mode="support";let D=Se(l.x+a*(6+t.role*1.5),-Gr+3,Gr-3),C=u!==0?u*1.25:Se(-l.z*.6,-6,6);for(const T of i.mateList(t))T.id!==l.id&&Math.hypot(T.x-D,T.z-C)<4&&(C+=(C>=T.z?1:-1)*3);e.tx=D,e.tz=Se(C,-jr+1.5,jr-1.5),e.stop=.8;return}const d=i.players.filter(D=>D.team===t.team),g=Math.hypot(r.x-t.x,r.z-t.z),v=d.filter(D=>D.id!==t.id&&Math.hypot(r.x-D.x,r.z-D.z)<g-.5),m=v.length===0||v.length===1&&g<3.2,p=d.filter(D=>D.id!==t.id&&D.id!==(v.length?v[0].id:-1)),M=!m&&p.every(D=>Math.abs(t.x-o)<=Math.abs(D.x-o));if(m){if(e.mode="chase",e.tx=r.x+r.vx*.25,e.tz=r.z+r.vz*.25,e.stop=.2,l&&l.team!==t.team){const D=Math.hypot(l.x-t.x,l.z-t.z),C=Math.cos(Math.atan2(l.x-t.x,l.z-t.z)-t.face)>.5;D<1.9&&t.tackleCd<=0&&C&&i.rng()<.12+.28*n&&(s.tackle=!0,s.mx=(l.x-t.x)/D,s.mz=(l.z-t.z)/D),D<6&&qs(i,t,["bubusela","iman"],n,.45)&&(s.power=!0)}else!l&&qs(i,t,["iman"],n,.1)&&g<8&&(s.power=!0);return}e.mode="defend";const S={x:r.x-o,z:r.z};if(M){const D=Math.hypot(S.x,S.z)||1;e.tx=o+S.x/D*4.2,e.tz=Se(S.z/D*4.2,-Fo+.6,Fo-.6)}else{let D=null,C=1e9;for(const T of i.foeList(t)){if(l&&T.id===l.id)continue;const P=Math.hypot(T.x-t.x,T.z-t.z)+Math.abs(T.z-u)*.3;P<C&&(C=P,D=T)}D?(e.tx=D.x*.6+o*.4,e.tz=D.z*.8):(e.tx=o+(r.x-o)*.45,e.tz=u*.7)}e.stop=.7}function qs(i,t,e,n,s){const r=i.meterOf(t);return!r||r.cd>0||!e.includes(r.power)||r.v<ps[r.power].cost?!1:i.rng()<s*(.4+n)}function rv(i,t,e,n,s,r,a){i.ball,e.mode="carry",e.stop=.1;const o=Math.abs(a-t.x),c=i.minOppDist(t.x,t.z,t.team),l=i.callFor&&i.callFor.team===t.team&&i.callFor.id!==t.id?i.players[i.callFor.id]:null,h=11+5*n;if(o<h&&Math.abs(t.z)<jr-1.5){const x=(t.z>=0?-1:1)*(Fo-.9)*(.7+i.rng()*.3);if(i.laneClear(t.x,t.z,a,x,t.team)>1.4-.4*n||c>4){e.aimZ=x,o>7.5&&i.rng()<.45+.3*n?e.hold=.55+i.rng()*.25:e.hold=.12,e.tx=a,e.tz=0;return}}const f=i.mateList(t),u=c<2.4;let d=null,g=-1e9;for(const x of f){const D=(x.x-t.x)*r,C=Math.hypot(x.x-t.x,x.z-t.z);if(C<3)continue;const T=i.laneClear(t.x,t.z,x.x,x.z,t.team),P=i.minOppDist(x.x,x.z,t.team);if(T<1.3)continue;let b=D*.35+P*.6+T*.4-C*.05;l&&l.id===x.id&&(b+=2.5),b>g&&(g=b,d=x)}if(d&&(u||l&&l.id===d.id&&i.rng()<.7||(d.x-t.x)*r>5&&i.minOppDist(d.x,d.z,t.team)>3.2&&i.rng()<.3+.25*n)){const x=(d.x-t.x)*r;s.target=d.id,x>6&&i.rng()<.35+.35*n?s.through=!0:s.pass=!0,e.tx=t.x,e.tz=t.z;return}c>3.5&&o>9&&qs(i,t,["pique"],n,.35)&&(s.power=!0);let m=0;for(const x of i.foeList(t))Math.hypot(x.x-t.x,x.z-t.z)<5&&m++;m>=2&&qs(i,t,["bubusela"],n,.6)&&(s.power=!0),m>=1&&o<14&&qs(i,t,["alambrado"],n,.12)&&(s.power=!0);const p=Math.atan2(a-t.x,-t.z*.4);let M=p,S=-1e9;for(let x=-4;x<=4;x++){const D=p+x*.28,C=t.x+Math.sin(D)*5,T=t.z+Math.cos(D)*5;if(Math.abs(T)>jr-1.2||Math.abs(C)>Gr-1)continue;let P=-Math.abs(x)*.35;for(const b of i.foeList(t)){const _=Hs(b.x,b.z,t.x,t.z,C,T);P-=Math.max(0,2.6-_)*2.2}P>S&&(S=P,M=D)}e.tx=t.x+Math.sin(M)*6,e.tz=t.z+Math.cos(M)*6}const{HL:ye,HW:Xe,GW:_n,GH:xn,GD:kl,R:Qt}=Xn,Hl=24,Vl=7.6,av=44,ov=64,cv=15,lv=17,Gl=.98,Ba=.52,Wl=12.5,Xl=()=>({mx:0,mz:0,shoot:!1,pass:!1,through:!1,tackle:!1,power:!1,target:null,aimZ:void 0});class hv{constructor(t){this.cfg=Object.assign({duration:180,difficulty:.6,seed:Date.now()&2147483647},t),this.rng=nv(this.cfg.seed),this.time=0,this.score=[0,0],this.timeLeft=this.cfg.duration,this.golden=!1,this.over=!1,this.winner=-1,this.events=[],this.barriers=[],this.marker=null,this.callFor=null,this.stats=[0,1].map(()=>({shots:0,passes:0,tackles:0,powers:0,goals:0})),this.meters={},this.slots={};const e=[0,0];this.players=this.cfg.players.map((n,s)=>{const r=e[n.team]++;return{id:s,team:n.team,role:r,slot:n.slot==null?null:n.slot,name:n.name||"Jugador",hincha:n.hincha||null,power:n.power||zo[Math.floor(this.rng()*zo.length)],x:0,z:0,vx:0,vz:0,face:n.team===0?Math.PI/2:-Math.PI/2,stun:0,tackleT:0,tackleCd:0,recover:0,touchCd:0,actCd:0,kickT:0,charge:0,charging:!1,boost:0,magnet:0,runTo:null,runT:0,celebrate:0,lx:0,lz:0,lastInp:null,ai:{t:this.rng()*.3,tx:0,tz:0,mode:"idle",hold:0,aimZ:0,inp:Xl(),seed:this.rng()}}});for(const n of this.players)n.slot!=null&&(this.slots[n.slot]||(this.slots[n.slot]={team:n.team,ids:[],active:n.id,input:Xl(),autoT:0,lock:0,power:n.power})).ids.push(n.id);for(const n in this.slots){const s=this.slots[n];s.mode=s.ids.length>1?"team":"pro",s.active=s.ids[0],this.meters["s"+n]={v:40,cd:0,power:s.power}}for(const n of this.players)n.slot==null&&(this.meters["p"+n.id]={v:25+this.rng()*20,cd:0,power:n.power});this.ball={x:0,y:Qt,z:0,vx:0,vy:0,vz:0,owner:null,lastId:null,lastTeam:0,guided:null,spin:0,speedKick:0},this.placeKickoff(0)}mateList(t){return this.players.filter(e=>e.team===t.team&&e.id!==t.id)}foeList(t){return this.players.filter(e=>e.team!==t.team)}meterOf(t){return this.meters[t.slot!=null?"s"+t.slot:"p"+t.id]}minOppDist(t,e,n){let s=99;for(const r of this.players)r.team!==n&&(s=Math.min(s,Math.hypot(r.x-t,r.z-e)));return s}laneClear(t,e,n,s,r,a){let o=99;for(const c of this.players)c.team===r||c.id===a||(o=Math.min(o,Hs(c.x,c.z,t,e,n,s)));return o}drain(){const t=this.events;return this.events=[],t}ownerPlayer(){return this.ball.owner==null?null:this.players[this.ball.owner]}setInput(t,e){const n=this.slots[t];n&&Object.assign(n.input,e)}placeKickoff(t){this.phase="kickoff",this.phaseT=2.4,this.kickTeam=t,this.barriers.length=0,this.marker=null;for(const n of this.players){const s=hs(n.team);n.x=-s*(n.role===0?3.4:9.5),n.z=n.role===0?0:n.role===1?-6.2:6.2,n.team===t&&n.role===0&&(n.x=-s*1.3),n.vx=n.vz=0,n.face=s>0?Math.PI/2:-Math.PI/2,n.stun=n.tackleT=n.tackleCd=n.recover=n.touchCd=n.actCd=n.kickT=0,n.charge=0,n.charging=!1,n.boost=0,n.magnet=0,n.runTo=null,n.celebrate=0,n.ai.hold=0,n.ai.mode="idle"}const e=this.ball;e.x=0,e.y=Qt,e.z=0,e.vx=e.vy=e.vz=0,e.owner=null,e.guided=null,e.lastId=null;for(const n in this.slots){const s=this.slots[n];s.active=s.ids[0]}this.events.push({type:"kickoff",team:t})}step(t){if(this.time+=t,this.phase==="end"){this.idlePlayers(t);return}if(this.phase==="kickoff"){this.phaseT-=t;for(const e of this.players)e.vx=e.vz=0;if(this.phaseT<=0){this.phase="play";const e=this.players.find(n=>n.team===this.kickTeam&&n.role===0);this.ball.x=e.x+Math.sin(e.face)*.8,this.ball.z=e.z+Math.cos(e.face)*.8,this.ball.owner=e.id,this.ball.lastId=e.id,this.ball.lastTeam=e.team,this.events.push({type:"whistle",kind:"start"})}return}if(this.phase==="goal"){this.phaseT-=t,this.idlePlayers(t),this.updateBall(t),this.decayTimers(t),this.phaseT<=0&&(this.over?this.finish():this.placeKickoff(this.concede));return}this.timeLeft-=t,this.decayTimers(t),this.updateSlots(t);for(const e of this.players){const n=this.inputOf(e,t);e.lastInp=n,this.updatePlayer(e,n,t)}this.separate(),this.updateBarriers(t),this.updateBall(t),this.checkGoal();for(const e in this.slots){const n=this.slots[e].input;n.pass=n.through=n.tackle=n.power=!1}this.phase==="play"&&this.timeLeft<=0&&(this.score[0]!==this.score[1]?this.finish():this.golden?this.finish():(this.golden=!0,this.timeLeft=60,this.events.push({type:"overtime"})))}finish(){this.phase="end",this.over=!0,this.timeLeft=Math.max(0,this.timeLeft),this.winner=this.score[0]>this.score[1]?0:this.score[1]>this.score[0]?1:-1,this.events.push({type:"end",winner:this.winner})}decayTimers(t){for(const e in this.meters){const n=this.meters[e];n.cd=Math.max(0,n.cd-t),this.phase==="play"&&(n.v=Math.min(100,n.v+(e[0]==="s"?2.8:1.5)*t))}this.callFor&&(this.callFor.t-=t,this.callFor.t<=0&&(this.callFor=null)),this.marker&&(this.marker.t-=t,this.marker.t<=0&&(this.marker=null));for(const e of this.players)e.celebrate=Math.max(0,e.celebrate-t),e.kickT=Math.max(0,e.kickT-t)}idlePlayers(t){for(const e of this.players)e.vx*=Math.exp(-8*t),e.vz*=Math.exp(-8*t),e.x+=e.vx*t,e.z+=e.vz*t,e.charging=!1,e.charge=0}updateSlots(t){this.ball;for(const e in this.slots){const n=this.slots[e];if(n.autoT=Math.max(0,n.autoT-t),n.lock=Math.max(0,n.lock-t),n.mode!=="team")continue;const s=this.players[n.active];if(n.input.pass&&!this.canKick(s)){const a=n.ids.slice().sort((c,l)=>this.dist2Ball(this.players[c])-this.dist2Ball(this.players[l])),o=a.indexOf(n.active);n.active=a[(o+1)%a.length],n.input.pass=!1,n.lock=.5,this.events.push({type:"switch",slot:+e,id:n.active});continue}if(n.lock>0)continue;const r=this.ownerPlayer();if(r&&r.team===n.team)n.active!==r.id&&(n.active=r.id,this.events.push({type:"switch",slot:+e,id:n.active}));else if(n.autoT<=0){let a=n.active,o=this.dist2Ball(this.players[n.active])-4;for(const c of n.ids){const l=this.dist2Ball(this.players[c]);l<o&&(o=l,a=c)}a!==n.active&&(n.active=a,n.autoT=.35,this.events.push({type:"switch",slot:+e,id:a}))}}}dist2Ball(t){const e=this.ball;return(t.x-e.x)**2+(t.z-e.z)**2}inputOf(t,e){if(t.slot!=null){const n=this.slots[t.slot];if(n.mode==="pro"||n.active===t.id)return n.input}return iv(this,t,e)}canKick(t){const e=this.ball;return t.stun>0||t.tackleT>0?!1:e.owner===t.id?!0:e.owner!=null?!1:t.touchCd<=0&&e.y<1.3&&Math.hypot(e.x-t.x,e.z-t.z)<Gl+.25}updatePlayer(t,e,n){const s=this.ball;t.stun=Math.max(0,t.stun-n),t.tackleCd=Math.max(0,t.tackleCd-n),t.recover=Math.max(0,t.recover-n),t.touchCd=Math.max(0,t.touchCd-n),t.actCd=Math.max(0,t.actCd-n),t.boost=Math.max(0,t.boost-n),t.magnet=Math.max(0,t.magnet-n),t.runT>0&&(t.runT-=n,t.runT<=0&&(t.runTo=null));let r=e.mx,a=e.mz;const o=Math.hypot(r,a);o>1&&(r/=o,a/=o);const c=s.owner===t.id;let l=Vl*(c?.9:1);if(t.boost>0&&(l*=1.8),t.charging&&(l*=.5),t.recover>0&&(l*=.45),t.tackleT>0)t.tackleT-=n,t.vx=t.lx*Wl*(.4+t.tackleT/.34),t.vz=t.lz*Wl*(.4+t.tackleT/.34),this.tackleHit(t),t.tackleT<=0&&(t.recover=.4);else if(t.stun>0)t.vx*=Math.exp(-5*n),t.vz*=Math.exp(-5*n);else{const h=r*l,f=a*l,u=h-t.vx,d=f-t.vz,g=Math.hypot(u,d),v=(o<.05?ov:av)*n;g<=v?(t.vx=h,t.vz=f):(t.vx+=u/g*v,t.vz+=d/g*v),o>.15&&(t.face+=Ol(t.face,Math.atan2(r,a))*Math.min(1,cv*n))}t.x=Se(t.x+t.vx*n,-ye+.6,ye-.6),t.z=Se(t.z+t.vz*n,-Xe+.6,Xe-.6),this.handleActions(t,e,n)}handleActions(t,e,n){const s=this.ball;if(t.stun>0||t.tackleT>0){t.charging=!1,t.charge=0;return}const r=this.canKick(t);if(e.shoot&&r)t.charging=!0,t.charge=Math.min(1,t.charge+n/.85);else if(t.charging){const a=t.charge;t.charging=!1,t.charge=0,r&&this.doShot(t,a,e)}e.pass&&t.actCd<=0&&(r?this.doPass(t,e):this.slots[t.slot]&&this.slots[t.slot].mode==="pro"&&(this.callFor={id:t.id,team:t.team,t:1.3},t.actCd=.5,this.events.push({type:"call",id:t.id}))),e.through&&t.actCd<=0&&r&&this.doThrough(t,e),e.tackle&&t.tackleCd<=0&&t.recover<=0&&s.owner!==t.id&&this.startTackle(t,e),e.power&&this.usePower(t)}pickMate(t,e,n){const s=e.mx,r=e.mz,a=Math.hypot(s,r),o=a>.3,c=o?s/a:Math.sin(t.face),l=o?r/a:Math.cos(t.face),h=o?.5:.25,f=hs(t.team);let u=null,d=-1e9;for(const g of this.mateList(t)){const v=g.x-t.x,m=g.z-t.z,p=Math.hypot(v,m);if(p<2)continue;const M=(v*c+m*l)/p;if(M<h)continue;const S=this.laneClear(t.x,t.z,g.x,g.z,t.team);let x=M*3-p*.035+Math.min(S,3)*.5;n&&(x+=(g.x-t.x)*f*.12),x>d&&(d=x,u=g)}return u}kickBase(t,e){const n=this.ball;n.owner=null,n.guided=null,n.lastId=t.id,n.lastTeam=t.team,t.touchCd=.45,t.kickT=.28,t.actCd=.18,t.charging=!1,t.charge=0,t.face=t.face,this.events.push({type:"kick",kind:e,id:t.id,x:n.x,z:n.z})}doPass(t,e){const n=this.ball;let s=e.target!=null?this.players[e.target]:this.pickMate(t,e,!1);s&&s.team!==t.team&&(s=null);let r,a;if(s)r=s.x+s.vx*.4,a=s.z+s.vz*.4;else{const f=Math.hypot(e.mx,e.mz),u=f>.3?e.mx/f:Math.sin(t.face),d=f>.3?e.mz/f:Math.cos(t.face);r=n.x+u*9,a=n.z+d*9}r=Se(r,-ye+1,ye-1),a=Se(a,-Xe+1,Xe-1);const o=r-n.x,c=a-n.z,l=Math.max(.5,Math.hypot(o,c)),h=Se(l/17+.12,.28,.85);this.kickBase(t,"pass"),this.startGuide({kind:"pass",x0:n.x,z0:n.z,th0:Math.atan2(o,c),w:0,v:l/h,T:h,h:0,who:s?s.id:null,team:t.team}),s&&this.onPassTarget(t,s,r,a,h),this.stats[t.team].passes++}doThrough(t,e){const n=this.ball,s=hs(t.team),r=e.target!=null?this.players[e.target]:this.pickMate(t,e,!0);let a,o;if(r&&r.team===t.team){const S=Math.hypot(r.vx,r.vz);a=r.x+r.vx*.95+s*(S<2?3.2:1.6),o=r.z+r.vz*.95}else{const S=Math.hypot(e.mx,e.mz),x=S>.3?e.mx/S:Math.sin(t.face),D=S>.3?e.mz/S:Math.cos(t.face);a=n.x+x*14,o=n.z+D*14}a=Se(a,-ye+1.5,ye-1.5),o=Se(o,-Xe+1.4,Xe-1.4);const c=a-n.x,l=o-n.z,h=Math.hypot(c,l);if(h<4){this.doPass(t,e);return}const f=Se(h/15+.5,.85,1.5),u=.8+Math.min(.5,h*.02),d=Math.atan2(c,l);let g=1,v=-1e9;for(const S of[-1,1]){const x=S*u/f,D=d-S*u/2,C=h*Math.abs(x)/(2*Math.sin(u/2)),T=Bl(n.x,n.z,D,x,C,f/2);let P=Math.min(this.minOppDist(T.x,T.z,t.team),6);(Math.abs(T.z)>Xe-1||Math.abs(T.x)>ye-1)&&(P-=5),P>v&&(v=P,g=S)}const m=g*u/f,p=d-g*u/2,M=h*Math.abs(m)/(2*Math.sin(u/2));this.kickBase(t,"through"),t.actCd=.3,this.startGuide({kind:"through",x0:n.x,z0:n.z,th0:p,w:m,v:M,T:f,h:.7+Math.min(.5,h*.025),who:r?r.id:null,team:t.team,side:g}),r&&r.team===t.team&&this.onPassTarget(t,r,a,o,f),this.marker={x:a,z:o,team:t.team,t:f+.2},this.stats[t.team].passes++}startGuide(t){t.t=0,this.ball.guided=t}onPassTarget(t,e,n,s,r){e.runTo={x:n,z:s},e.runT=r+.35;const a=e.slot!=null?this.slots[e.slot]:null;a&&a.mode==="team"&&a.active!==e.id&&(a.active=e.id,a.lock=.9,this.events.push({type:"switch",slot:e.slot,id:e.id}))}doShot(t,e,n){const s=this.ball,r=hs(t.team),a=r*ye,o=e>=.3,c={x:Math.sin(t.face),z:Math.cos(t.face)},l=Math.atan2(a-s.x,0-s.z),h=Math.abs(Ol(t.face,l))<Math.PI*.55,f=Math.max(1,Math.hypot(a-s.x,s.z));let u;if(n.aimZ!==void 0)u=n.aimZ;else if(Math.abs(n.mz)>.35)u=Se(n.mz*3,-_n+.7,_n-.7);else{let D=0,C=99;for(const T of this.foeList(t)){const P=Math.hypot(T.x-s.x,T.z-s.z);P<C&&(T.x-s.x)*r>0&&(C=P,D=T.z)}u=D>=0?-2.7:_n-.9}const d=o?25+15*e:20.5,g=(o?.35:.55)+f*(o?.045:.06);let v=u+(this.rng()+this.rng()-1)*g,m=o?.45+this.rng()*1.2:.4+this.rng()*1.2,p=a-s.x,M=v-s.z;h||(p=c.x*10,M=c.z*10,m=.3);const S=Math.max(1,Math.hypot(p,M)),x=S/d;this.kickBase(t,o?"power":"shot"),t.kickT=.35,s.vx=p/S*d,s.vz=M/S*d,s.vy=(m-s.y)/x+.5*Hl*x,s.vy=Se(s.vy,0,14),s.y=Math.max(s.y,Qt+.05),s.speedKick=d,this.stats[t.team].shots++,this.events[this.events.length-1].power=e}startTackle(t,e){const n=Math.hypot(e.mx,e.mz),s=n>.3?e.mx/n:Math.sin(t.face),r=n>.3?e.mz/n:Math.cos(t.face);t.lx=s,t.lz=r,t.face=Math.atan2(s,r),t.tackleT=.34,t.tackleCd=1.35,t.tackleHit=!1,t.charging=!1,t.charge=0,this.events.push({type:"tackle",id:t.id,x:t.x,z:t.z,hit:!1})}tackleHit(t){const e=this.ball;if(t.tackleHit)return;const n=this.ownerPlayer();if(n&&n.team!==t.team&&Math.hypot(n.x-t.x,n.z-t.z)<1.35){if(t.tackleHit=!0,n.boost>0){t.stun=.7,t.tackleT=0,t.recover=.4,t.vx*=.2,t.vz*=.2,this.events.push({type:"tackle",id:t.id,victim:n.id,hit:!1,blocked:!0,x:t.x,z:t.z});return}e.owner=null,e.guided=null,e.vx=t.lx*6+n.vx*.3,e.vz=t.lz*6+n.vz*.3,e.vy=2.2,e.lastId=t.id,e.lastTeam=t.team,n.stun=.6,t.touchCd=0,this.stats[t.team].tackles++;const s=this.meterOf(t);s.v=Math.min(100,s.v+10),this.events.push({type:"tackle",id:t.id,victim:n.id,hit:!0,x:n.x,z:n.z})}else!n&&Math.hypot(e.x-t.x,e.z-t.z)<1.4&&e.y<1&&(t.tackleHit=!0,e.vx=t.lx*11,e.vz=t.lz*11,e.guided=null,e.vy=1.5,e.lastId=t.id,e.lastTeam=t.team,this.events.push({type:"tackle",id:t.id,hit:!0,x:e.x,z:e.z}));t.tackleT<=0&&(t.tackleHit=!1)}usePower(t){const e=this.meterOf(t),n=ps[e.power];if(!n||e.v<n.cost||e.cd>0)return;e.v-=n.cost,e.cd=2,this.stats[t.team].powers++;const s=this.ball,r={type:"power",id:t.id,power:n.id,x:t.x,z:t.z,ang:t.face};if(n.id==="bubusela"){for(const l of this.foeList(t)){const h=l.x-t.x,f=l.z-t.z,u=Math.hypot(h,f);if(u>7.5)continue;const d=1-u/9,g=u<.01?1:h/u,v=u<.01?0:f/u;l.vx+=g*18*d+g*4,l.vz+=v*18*d+v*4,l.stun=.7+.8*d,l.tackleT=0,l.charging=!1,l.charge=0,s.owner===l.id&&(s.owner=null,s.vx=g*8,s.vz=v*8,s.vy=3,s.lastId=t.id,s.lastTeam=t.team)}const a=s.x-t.x,o=s.z-t.z,c=Math.hypot(a,o);s.owner==null&&c<7.5&&c>.01&&(s.guided=null,s.vx+=a/c*9,s.vz+=o/c*9,s.vy=Math.max(s.vy,2))}else if(n.id==="pique")t.boost=1.5;else if(n.id==="iman")t.magnet=.9;else if(n.id==="alambrado"){const a=Math.sin(t.face),o=Math.cos(t.face),c=Se(t.x+a*3.4,-ye+3,ye-3),l=Se(t.z+o*3.4,-Xe+2.7,Xe-2.7),h=Math.atan2(a,o)+Math.PI/2,f=Math.sin(h)*2.7,u=Math.cos(h)*2.7;this.barriers.push({x1:c-f,z1:l-u,x2:c+f,z2:l+u,t:4,life:4,team:t.team}),r.x=c,r.z=l,r.ang=Math.atan2(a,o)}this.events.push(r)}updateBarriers(t){for(let e=this.barriers.length-1;e>=0;e--){const n=this.barriers[e];if(n.t-=t,n.t<=0){this.barriers.splice(e,1);continue}for(const s of this.players)Hs(s.x,s.z,n.x1,n.z1,n.x2,n.z2)<Ba+.1&&this.pushFromSegment(s,n,Ba+.1)}}pushFromSegment(t,e,n){const s=e.x2-e.x1,r=e.z2-e.z1,a=s*s+r*r,o=Se(((t.x-e.x1)*s+(t.z-e.z1)*r)/a,0,1),c=e.x1+s*o,l=e.z1+r*o;let h=t.x-c,f=t.z-l,u=Math.hypot(h,f);return u<1e-4&&(h=-r,f=s,u=Math.hypot(h,f)),h/=u,f/=u,t.x=c+h*n,t.z=l+f*n,{nx:h,nz:f}}separate(){const t=this.players;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){const s=t[e],r=t[n],a=r.x-s.x,o=r.z-s.z,c=Math.hypot(a,o),l=Ba*2;if(c<l&&c>1e-4){const h=(l-c)/2,f=a/c,u=o/c;s.x-=f*h,s.z-=u*h,r.x+=f*h,r.z+=u*h}}for(const e of t)e.x=Se(e.x,-ye+.6,ye-.6),e.z=Se(e.z,-Xe+.6,Xe-.6)}updateBall(t){const e=this.ball,n=this.phase==="play";if(e.owner!=null){const s=this.players[e.owner],a=.78+.25*Math.min(1,Math.hypot(s.vx,s.vz)/Vl),o=s.x+Math.sin(s.face)*a,c=s.z+Math.cos(s.face)*a,l=1-Math.exp(-20*t);e.x+=(o-e.x)*l,e.z+=(c-e.z)*l,e.vx=s.vx,e.vz=s.vz,e.vy=0,e.y=Qt,e.z=Se(e.z,-Xe+Qt,Xe-Qt),e.x=Se(e.x,-ye+Qt,ye-Qt),(s.stun>0||Math.hypot(e.x-s.x,e.z-s.z)>2.3)&&(e.owner=null);for(const h of this.barriers)Hs(e.x,e.z,h.x1,h.z1,h.x2,h.z2)<Qt+.12&&(e.x=s.x,e.z=s.z)}else if(e.guided){const s=e.guided;s.t+=t;const r=Math.min(s.t,s.T),a=Bl(s.x0,s.z0,s.th0,s.w,s.v,r),o=s.th0+s.w*r;e.x=a.x,e.z=a.z,e.vx=Math.sin(o)*s.v,e.vz=Math.cos(o)*s.v;const c=Math.PI*r/s.T;e.y=Qt+s.h*Math.sin(c),e.vy=s.h*Math.cos(c)*Math.PI/s.T,s.t>=s.T&&(e.guided=null,e.vx*=.5,e.vz*=.5,e.vy=0,e.y=Qt)}else{for(const s of this.players)if(s.magnet>0&&e.owner==null&&n){const r=s.x-e.x,a=s.z-e.z,o=Math.hypot(r,a);o<10&&o>.3&&(e.vx=r/o*17,e.vz=a/o*17,e.vy=0,e.y=Math.max(Qt,e.y*.8),e.guided=null)}if(e.vy-=Hl*t,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.y<Qt&&(e.y=Qt,e.vy<-2.5?(e.vy<-5&&this.events.push({type:"bounce",x:e.x,z:e.z,v:-e.vy}),e.vy=-e.vy*.5,e.vx*=.97,e.vz*=.97):e.vy=0),e.y<=Qt+.001&&e.vy===0){const s=Math.hypot(e.vx,e.vz),r=(1.5+s*.32)*t;s<=r?e.vx=e.vz=0:(e.vx*=(s-r)/s,e.vz*=(s-r)/s)}else e.vx*=1-.04*t,e.vz*=1-.04*t}this.collideBall(),n&&this.capture()}collideBall(){const t=this.ball,e=this.phase==="goal",n=Math.abs(t.z)<_n&&t.y<xn;if(e){const s=Math.sign(t.x)||1;Math.abs(t.x)>ye+kl-Qt&&(t.x=s*(ye+kl-Qt),t.vx*=-.25),Math.abs(t.z)>_n-Qt&&(t.z=Math.sign(t.z)*(_n-Qt),t.vz*=-.3),t.y>xn-Qt&&(t.y=xn-Qt,t.vy=-Math.abs(t.vy)*.3),Math.abs(t.x)<ye+.2&&(t.x=s*(ye+.2),t.vx=Math.abs(t.vx)*s),t.vx*=1-3*(1/60),t.vz*=1-3*(1/60);return}for(const s of[-1,1])for(const r of[-1,1]){const a=s*ye,o=r*_n,c=t.x-a,l=t.z-o,h=Math.hypot(c,l);if(h<Qt+.13&&t.y<xn+Qt){const f=c/(h||1),u=l/(h||1),d=t.vx*f+t.vz*u;d<0&&(t.vx-=1.75*d*f,t.vz-=1.75*d*u,t.guided&&(t.guided=null),this.events.push({type:"post",x:t.x,z:t.z,v:-d})),t.x=a+f*(Qt+.13),t.z=o+u*(Qt+.13)}}if(Math.abs(t.z)<_n&&Math.abs(Math.abs(t.x)-ye)<Qt+.1&&Math.abs(t.y-xn)<Qt+.1&&(t.vy>0||Math.abs(t.y-xn)<Qt)&&(t.vy=-Math.abs(t.vy)*.6-1,t.vx*=.6,t.guided=null,t.y=t.y>xn?xn+Qt+.1:xn-Qt-.1,this.events.push({type:"bar",x:t.x,z:t.z,v:Math.abs(t.vy)})),Math.abs(t.x)>ye-Qt&&!(n&&Math.abs(t.z)<_n-.05)){const s=Math.sign(t.x);t.vx*s>0&&(Math.abs(t.vx)>5&&this.events.push({type:"wall",x:t.x,z:t.z,v:Math.abs(t.vx)}),t.vx*=-.6,t.guided&&(t.guided=null)),t.x=s*(ye-Qt)}if(Math.abs(t.z)>Xe-Qt){const s=Math.sign(t.z);t.vz*s>0&&(Math.abs(t.vz)>5&&this.events.push({type:"wall",x:t.x,z:t.z,v:Math.abs(t.vz)}),t.vz*=-.65,t.vx*=.97,t.guided&&(t.guided=null)),t.z=s*(Xe-Qt)}for(const s of this.barriers){if(t.owner!=null)break;if(Hs(t.x,t.z,s.x1,s.z1,s.x2,s.z2)<Qt+.12&&t.y<2.6){const{nx:a,nz:o}=this.pushFromSegment(t,s,Qt+.12),c=t.vx*a+t.vz*o;c<0&&(t.vx-=1.6*c*a,t.vz-=1.6*c*o,t.guided=null,this.events.push({type:"wall",x:t.x,z:t.z,v:-c}))}}}capture(){const t=this.ball;if(t.owner!=null)return;const e=Math.hypot(t.vx,t.vz);let n=null,s=1e9;for(const r of this.players){if(r.stun>0||r.tackleT>0)continue;const a=Math.hypot(t.x-r.x,t.z-r.z);if(e<=lv){if(r.touchCd>0||t.y>1.05||a>Gl)continue;const o=t.guided&&t.guided.who===r.id?a-.6:a;o<s&&(s=o,n=r)}else if(a<.78&&t.y<1.9&&r.team!==t.lastTeam){const o=(t.x-r.x)/(a||1),c=(t.z-r.z)/(a||1),l=t.vx*o+t.vz*c;if(l<0){const h=e>30;t.vx=(t.vx-2*l*o)*.45,t.vz=(t.vz-2*l*c)*.45,t.vy=2+this.rng()*3,t.guided=null,t.lastId=r.id,t.lastTeam=r.team,r.stun=h?.9:.35,h&&(r.vx=-o*7,r.vz=-c*7),this.events.push({type:"block",id:r.id,x:r.x,z:r.z,v:e})}}}if(n){const r=t.guided;if(t.owner=n.id,t.guided=null,t.vy=0,t.y=Qt,t.lastId=n.id,r&&r.who===n.id&&r.team===n.team){const a=this.meterOf(n);a.v=Math.min(100,a.v+6),this.events.push({type:"receive",id:n.id,kind:r.kind})}t.lastTeam=n.team,n.magnet>0&&(n.magnet=0)}}checkGoal(){const t=this.ball;if(this.phase==="play"&&Math.abs(t.x)>ye&&Math.abs(t.z)<_n&&t.y<xn){const e=t.x>0?0:1;this.score[e]++,this.stats[e].goals++;const n=t.lastTeam===e?t.lastId:null;this.concede=1-e,this.phase="goal",this.phaseT=3.6,t.owner=null,t.guided=null,this.golden&&(this.over=!0),this.timeLeft<=0&&(this.over=!0);for(const s of this.players)s.charging=!1,s.charge=0,s.tackleT=0,s.team===e&&(s.celebrate=3.4);for(const s of this.players)if(s.team!==e){const r=this.meterOf(s);r.v=Math.min(100,r.v+15)}this.events.push({type:"goal",team:e,scorer:n,x:t.x,z:t.z,speed:Math.hypot(t.vx,t.vz),score:this.score.slice()})}}}const{HL:we,HW:Ue,GW:hn,GH:un,GD:On}=Xn,ge=Math.PI,ws=(i,t,e,{repeat:n,srgb:s=!0}={})=>{const r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);const a=new $n(r);return s&&(a.colorSpace=Pe),a.anisotropy=4,n&&(a.wrapS=a.wrapT=ui,a.repeat.set(n[0],n[1])),a};function uv(){const t=Math.round(2048*(Ue*2)/(we*2)),e=2048/(we*2);return ws(2048,t,(n,s,r)=>{const o=s/10;for(let u=0;u<10;u++)n.fillStyle=u%2?"#4d9a55":"#5aa862",n.fillRect(u*o,0,o+1,r);let c=7;const l=()=>(c=c*16807%2147483647)/2147483647;for(let u=0;u<900;u++)n.fillStyle=l()>.5?"rgba(255,255,255,.03)":"rgba(0,30,0,.05)",n.beginPath(),n.ellipse(l()*s,l()*r,6+l()*22,3+l()*10,l()*ge,0,ge*2),n.fill();const h=(u,d,g,v)=>{const m=n.createRadialGradient(u,d,0,u,d,Math.max(g,v));m.addColorStop(0,"rgba(170,132,86,.95)"),m.addColorStop(.6,"rgba(160,125,80,.7)"),m.addColorStop(1,"rgba(160,125,80,0)"),n.save(),n.translate(u,d),n.scale(g/Math.max(g,v),v/Math.max(g,v)),n.translate(-u,-d),n.fillStyle=m,n.beginPath(),n.arc(u,d,Math.max(g,v),0,ge*2),n.fill(),n.restore()};h(s/2,r/2,2.4*e,2.4*e),h(1.6*e,r/2,2.8*e,5*e),h(s-1.6*e,r/2,2.8*e,5*e),h(s*.3,1*e,3*e,1.6*e),h(s*.72,r-1*e,3.4*e,1.6*e),n.strokeStyle="rgba(255,255,255,.92)",n.lineWidth=.16*e,n.lineCap="round";const f=(u,d,g,v)=>{n.beginPath(),n.moveTo(u,d),n.lineTo(g,v),n.stroke()};n.strokeRect(.1*e,.1*e,s-.2*e,r-.2*e),f(s/2,0,s/2,r),n.beginPath(),n.arc(s/2,r/2,3.4*e,0,ge*2),n.stroke(),n.fillStyle="#fff",n.beginPath(),n.arc(s/2,r/2,.22*e,0,ge*2),n.fill();for(const u of[0,1]){const d=u?s:0,g=u?-1:1;n.strokeRect(u?s-6.5*e:.1*e,r/2-7*e,6.4*e,14*e),n.strokeRect(u?s-2.6*e:.1*e,r/2-3.6*e-1.2*e,2.5*e,(3.6*2+2.4)*e),n.beginPath(),n.arc(d+g*4.6*e,r/2,2.2*e,u?ge-1:-1,u?ge+1:1),n.stroke(),n.beginPath(),n.arc(d+g*4.6*e,r/2,.16*e,0,ge*2),n.fill()}n.globalCompositeOperation="destination-out";for(let u=0;u<160;u++)n.fillStyle="rgba(0,0,0,.25)",n.fillRect(l()*s,l()*r,14+l()*30,3+l()*6)})}const fv=()=>ws(128,128,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="rgba(205,215,230,.9)",i.lineWidth=3;for(let n=-e;n<t+e;n+=16)i.beginPath(),i.moveTo(n,0),i.lineTo(n+e,e),i.stroke(),i.beginPath(),i.moveTo(n+e,0),i.lineTo(n,e),i.stroke()},{repeat:[1,1]}),dv=()=>ws(64,64,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="rgba(255,255,255,.85)",i.lineWidth=3,i.strokeRect(0,0,t,e),i.beginPath(),i.moveTo(t/2,0),i.lineTo(t/2,e),i.moveTo(0,e/2),i.lineTo(t,e/2),i.stroke()}),Nr=(i,t,e)=>ws(96,64,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r),e?(n.fillStyle=t,n.fillRect(0,r/3,s,r/3),n.fillStyle="#f6b40e",n.beginPath(),n.arc(s/2,r/2,6,0,ge*2),n.fill()):(n.fillStyle=t,n.fillRect(0,0,s*.5,r))});function pv(){return ws(4,256,(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#24407a"),n.addColorStop(.45,"#4a7bc0"),n.addColorStop(.72,"#f2a76a"),n.addColorStop(.86,"#ffd28a"),n.addColorStop(1,"#ffe7b5"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function mv(i){const t=new Me;i.add(t);const e=new nt(new Jt(170,24,16),new ce({map:pv(),side:Fe,fog:!1}));t.add(e),i.fog=new tr("#e9c493",70,190),i.add(new ec("#bcd4ff","#6b7a4a",.85));const n=new js("#ffe2b0",1.5);n.position.set(-18,30,16),i.add(n);const s=new js("#9fc2ff",.45);s.position.set(20,12,-14),i.add(s);const r=new nt(new Wn(150,40),xt("#6f9a52"));r.rotation.x=-ge/2,r.position.y=-.02,t.add(r);const a=new nt(new mn(we*2+8,Ue*2+8),xt("#a7916a"));a.rotation.x=-ge/2,a.position.y=-.01,t.add(a);const o=new nt(new mn(we*2,Ue*2),new pi({map:uv(),gradientMap:xt("#fff").gradientMap}));o.rotation.x=-ge/2,t.add(o);const c=fv();new ce({map:c,transparent:!0,side:xe,depthWrite:!1,alphaTest:.05});const l=xt("#8d98aa"),h=(m,p,M,S,x,D,C)=>{const T=new nt(new Wt(m,p,M),xt(S));return T.position.set(x,D,C),t.add(T),T},f=(m,p,M,S,x,D)=>{const C=c.clone();C.needsUpdate=!0,C.repeat.set(m/2.4,p/2.4);const T=new nt(new mn(m,p),new ce({map:C,transparent:!0,side:xe,depthWrite:!1}));T.position.set(M,S,x),T.rotation.y=D,t.add(T)},u=we*2+.6;h(u,.9,.2,"#e8e4da",0,.45,-Ue-.1);for(let m=0;m<20;m++)h(2,.9,.22,m%2?"#75aadb":"#f4f1ea",-we+1+m*2,.45,-Ue-.1);f(u,3.6,0,.9+1.8,-Ue-.1,0),h(u,.55,.2,"#e8e4da",0,.275,Ue+.1);for(let m=0;m<20;m++)h(2,.55,.22,m%2?"#75aadb":"#f4f1ea",-we+1+m*2,.275,Ue+.1);for(const m of[-1,1]){const p=Ue-hn;for(const M of[-1,1])h(.2,.9,p,"#e8e4da",m*(we+.1),.45,M*(hn+p/2)),f(p,3.6,m*(we+.1),2.7,M*(hn+p/2),ge/2);h(.2,.9,.2,"#e8e4da",m*(we+.1),.45,0)}for(let m=-we;m<=we;m+=5){const p=new nt(new Ot(.07,.07,4.5,6),l);p.position.set(m,2.25,-Ue-.1),t.add(p)}for(const m of[-1,1])for(const p of[-Ue,-6,6,Ue]){const M=new nt(new Ot(.07,.07,4.5,6),l);M.position.set(m*(we+.1),2.25,p),t.add(M)}const d=[],g=dv();for(const m of[-1,1]){const p=new Me;p.position.x=m*we,t.add(p);for(const P of[-1,1]){const b=new nt(new Ot(.12,.12,un,10),xt("#ffffff"));b.position.set(0,un/2,P*hn),p.add(b);const _=new nt(new Ot(.06,.06,un,8),xt("#dfe6f0"));_.position.set(m*On,un/2,P*hn),p.add(_);const L=new nt(new Ot(.05,.05,On,8),xt("#dfe6f0"));L.rotation.z=ge/2,L.position.set(m*On/2,.05,P*hn),p.add(L)}const M=new nt(new Ot(.12,.12,hn*2+.24,10),xt("#ffffff"));M.rotation.x=ge/2,M.position.set(0,un,0),p.add(M);const S=new nt(new Ot(.05,.05,hn*2,8),xt("#dfe6f0"));S.rotation.x=ge/2,S.position.set(m*On,un,0),p.add(S);const x=new Me,D=(P,b,_,L)=>{const F=g.clone();return F.needsUpdate=!0,F.wrapS=F.wrapT=ui,F.repeat.set(_,L),new nt(new mn(P,b),new ce({map:F,transparent:!0,side:xe,depthWrite:!1,opacity:.8}))},C=D(hn*2,un,14,6);C.rotation.y=ge/2,C.position.set(m*On,un/2,0),x.add(C);const T=D(On,hn*2,6,14);T.rotation.x=ge/2,T.rotation.z=ge/2,T.position.set(m*On/2,un,0),x.add(T);for(const P of[-1,1]){const b=D(On,un,6,6);b.position.set(m*On/2,un/2,P*hn),x.add(b)}p.add(x),d.push({net:x,sx:m,pulse:0,base:p})}for(const m of[-1,1])for(const p of[-1,1]){const M=m*(we+7),S=p*(Ue+6),x=new nt(new Ot(.18,.28,13,6),xt("#5b6678"));x.position.set(M,6.5,S),t.add(x);const D=new nt(new Wt(2.6,1.2,.5),new ce({color:"#fff6d8"}));D.position.set(M,13.2,S),D.lookAt(0,8,0),t.add(D)}const v=gv(t);return vv(t),{root:t,nets:d,fans:v,pulseNet(m){const p=d.find(M=>M.sx===m);p&&(p.pulse=1)},setExcite(m){v.excite=m},update(m,p){for(const M of d){M.pulse=Math.max(0,M.pulse-m*1.4);const S=M.pulse;M.net.scale.set(1+.18*Math.sin(p*25)*S,1,1+.05*S),M.net.position.x=M.sx*.5*S*Math.abs(Math.sin(p*14))}v.update(m,p)},dispose(){i.remove(t),t.traverse(m=>{m.geometry&&m.geometry.dispose(),m.material&&m.material.dispose&&!m.material.isShared&&m.material.dispose()})}}}function gv(i){const t=new Ke(.28,.45,3,8),e=new Jt(.26,8,6),n=[],s=(_,L,F,V,Y,Q,H,et=1,G=.75)=>{for(let ht=0;ht<V;ht++){const pt=ht*et,yt=.55+ht*G,Ft=_-Y*pt,j=L-Q*pt,U=new nt(new Wt(Y?1:F,yt,Q?1:F),xt(ht%2?"#9aa3b2":"#aab2bf"));U.position.set(Ft,yt/2,j),i.add(U);const q=Math.floor(F/.95);for(let at=0;at<q;at++){const ct=-F/2+.5+at*(F/q);n.push({x:Ft+(Q?ct:0)+(Math.random()-.5)*.2,y:yt,z:j+(Y?ct:0)+(Math.random()-.5)*.2,ry:H})}}};s(0,-Ue-2.2,we*2+6,5,0,1,0),s(-we-4.8,0,Ue*2+2,3,1,0,ge/2,1,.75),s(we+4.8,0,Ue*2+2,3,-1,0,-ge/2,1,.75),s(0,Ue+1.9,we*2+6,1,0,-1,ge);const r=n.length,a=new Pi(t,new pi({gradientMap:xt("#fff").gradientMap}),r),o=new Pi(e,xt("#e3b48f"),r),c=["#75aadb","#f4f1ea","#75aadb","#c9382f","#1b3a8c","#f4f1ea","#2f8f5b","#f2c21b","#15161a","#75aadb"],l=["#f1c7a5","#e3b48f","#d39b74","#b97a50","#8a5a3c","#5e3b26"],h=new qt,f=new Float32Array(r),u=new Float32Array(r);for(let _=0;_<r;_++)h.set(c[Math.floor(Math.random()*c.length)]),a.setColorAt(_,h),h.set(l[Math.floor(Math.random()*l.length)]),o.setColorAt(_,h),f[_]=Math.random()*10,u[_]=.5+Math.random()*.8;i.add(a,o);const d=new mn(1.8,1.2,6,3),g=[Nr("#75aadb","#ffffff",!0),Nr("#c9382f","#f4f1ea",!1),Nr("#1b3a8c","#f2c21b",!1),Nr("#75aadb","#ffffff",!0)],v=[];for(let _=0;_<26;_++){const L=n[Math.floor(Math.random()*n.length)],F=new Me,V=new nt(new Ot(.03,.03,2.4,5),xt("#6b4a2a"));V.position.y=1.2,F.add(V);const Y=new nt(d,new ce({map:g[_%g.length],side:xe}));Y.position.set(.9,2,0),F.add(Y),F.position.set(L.x,L.y+.6,L.z),F.rotation.y=L.ry,i.add(F),v.push({g:F,f:Y,ph:Math.random()*6})}const m=new Tn(.28,.6,3),p=new Pi(m,new ce,80),M=["#75aadb","#ffffff","#75aadb","#f6b40e"],S=new ue,x=new di,D=new wn,C=new N(1,1,1),T=new N;for(let _=0;_<80;_++){const L=-we+.4+_*((we*2-.8)/79);T.set(L,4.2-Math.sin(_%8/8*ge)*.5,-Ue-.2),D.set(ge,0,0),x.setFromEuler(D),S.compose(T,x,C),p.setMatrixAt(_,S),p.setColorAt(_,h.set(M[_%M.length]))}i.add(p);const P=new Ae,b={excite:.2,update(_,L){const F=b.excite;for(let V=0;V<r;V++){const Y=n[V],Q=Math.max(0,Math.sin(L*(4+F*6)+f[V]))*(.05+F*.55)*u[V];P.position.set(Y.x,Y.y+.55+Q,Y.z),P.rotation.set(0,Y.ry,0),P.scale.set(1,1,1),P.updateMatrix(),a.setMatrixAt(V,P.matrix),P.position.y+=.62,P.updateMatrix(),o.setMatrixAt(V,P.matrix)}a.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0;for(const V of v)V.f.rotation.y=Math.sin(L*(3+F*4)+V.ph)*.35,V.g.rotation.z=Math.sin(L*(2+F*3)+V.ph)*.12*(.5+F)}};return b}function vv(i){const t=["#b9a68a","#c9b79d","#a79880","#d1c1a6","#9d8f7a","#c4a98c","#8f8574"],e=(d,g)=>d+Math.random()*(g-d),n=ws(64,128,(d,g,v)=>{d.fillStyle="#fff",d.fillRect(0,0,g,v),d.fillStyle="rgba(50,70,110,.55)";for(let m=8;m<v-8;m+=20)for(let p=6;p<g-6;p+=18)d.fillRect(p,m,9,12)});for(let d=0;d<42;d++){const g=ge+(d/41-.5)*ge*1.5,v=e(78,105),m=e(12,38),p=e(7,13),M=e(7,12),S=new nt(new Wt(p,m,M),new pi({color:t[d%t.length],map:n,gradientMap:xt("#fff").gradientMap}));S.material.map=n.clone(),S.material.map.needsUpdate=!0,S.material.map.wrapS=S.material.map.wrapT=ui,S.material.map.repeat.set(Math.round(p/6),Math.round(m/9)),S.position.set(Math.cos(g)*v*1,m/2,Math.sin(g)*v-0),S.position.z=-Math.abs(S.position.z)-22,S.position.x=(d/41-.5)*190,S.rotation.y=e(-.1,.1),i.add(S)}const s=new Me,r=(d,g)=>{const v=new nt(new Ot(.25,.3,14,6),xt("#8d98aa"));v.position.set(d,7,g),s.add(v)};r(-2,-2),r(2,-2),r(-2,2),r(2,2);const a=new nt(new Ot(4.6,4.6,6,16),xt("#d8d3c6"));a.position.y=17,s.add(a);const o=new nt(new Tn(4.9,2.6,16),xt("#c9382f"));o.position.y=21.3,s.add(o),s.position.set(-46,0,-70),i.add(s);for(let d=0;d<3;d++){const g=new nt(new Ot(3.4,3.4,22+d*3,14),xt("#cfd4da"));g.position.set(52+d*7.5,11+d*1.5,-78),i.add(g);const v=new nt(new Tn(3.5,2.6,14),xt("#9aa3b2"));v.position.set(52+d*7.5,23+d*3,-78),i.add(v)}const c=new Ot(.3,.4,3,6),l=new Qo(2.2,0),h=new Pi(c,xt("#6b4a2a"),40),f=new Pi(l,xt("#3f8a4c"),40),u=new Ae;for(let d=0;d<40;d++){const g=d%2?1:-1,v=e(-70,70),m=g*e(30,50)+(g>0?6:-4);u.position.set(v,1.5,m),u.scale.set(1,e(.9,1.3),1),u.updateMatrix(),h.setMatrixAt(d,u.matrix),u.position.set(v,4.4,m),u.scale.setScalar(e(.9,1.5)),u.updateMatrix(),f.setMatrixAt(d,u.matrix)}i.add(h,f)}const _v=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new $n(i);return n.colorSpace=Pe,n})(),Mn=700;class xv{constructor(t){this.scene=t,this.n=Mn,this.pos=new Float32Array(Mn*3),this.col=new Float32Array(Mn*3),this.size=new Float32Array(Mn),this.alpha=new Float32Array(Mn),this.vel=new Float32Array(Mn*3),this.life=new Float32Array(Mn),this.maxLife=new Float32Array(Mn).fill(1),this.grav=new Float32Array(Mn),this.s0=new Float32Array(Mn),this.cursor=0;const e=new Oe;e.setAttribute("position",new Ve(this.pos,3)),e.setAttribute("color",new Ve(this.col,3)),e.setAttribute("size",new Ve(this.size,1)),e.setAttribute("alpha",new Ve(this.alpha,1)),this.uniforms={uScale:{value:600},uMap:{value:_v}},this.points=new pg(e,new Yn({uniforms:this.uniforms,transparent:!0,depthWrite:!1,vertexColors:!0,vertexShader:`
        attribute float size; attribute float alpha; varying vec3 vC; varying float vA; uniform float uScale;
        void main() {
          vC = color; vA = alpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uScale / max(0.1, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D uMap; varying vec3 vC; varying float vA;
        void main() { vec4 t = texture2D(uMap, gl_PointCoord); gl_FragColor = vec4(vC, vA * t.a); }`})),this.points.frustumCulled=!1,t.add(this.points),this.rings=[];const n=new fi(.86,1,48);for(let s=0;s<8;s++){const r=new nt(n,new ce({color:"#fff",transparent:!0,opacity:0,side:xe,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.visible=!1,t.add(r),this.rings.push({m:r,t:0,dur:1,r:1,active:!1})}this.trailColor=new qt("#fff"),this.trailOn=0}setScale(t,e){this.uniforms.uScale.value=t*Math.min(devicePixelRatio||1,2)/(2*Math.tan(Hr.degToRad(e)/2))}emit(t,e,n,s,r,a,o,c,l,h=-9,f=1){const u=this.cursor;this.cursor=(this.cursor+1)%this.n;const d=new qt(o);this.pos[u*3]=t,this.pos[u*3+1]=e,this.pos[u*3+2]=n,this.vel[u*3]=s,this.vel[u*3+1]=r,this.vel[u*3+2]=a,this.col[u*3]=d.r,this.col[u*3+1]=d.g,this.col[u*3+2]=d.b,this.s0[u]=c,this.size[u]=c,this.life[u]=l,this.maxLife[u]=l,this.grav[u]=h,this.alpha[u]=f}burst(t,e,n,s,r=12,a=4,o=.5,c=.6,l=-9){for(let h=0;h<r;h++){const f=Math.random()*Math.PI*2,u=Math.random(),d=a*(.4+u*.8);this.emit(t,e,n,Math.cos(f)*d,(.3+Math.random())*a*.5,Math.sin(f)*d,s,o*(.6+Math.random()*.8),c*(.6+Math.random()*.6),l)}}dust(t,e,n=0,s=0,r=6){for(let a=0;a<r;a++)this.emit(t+(Math.random()-.5)*.6,.12,e+(Math.random()-.5)*.6,n*2+(Math.random()-.5)*1.6,.4+Math.random()*.9,s*2+(Math.random()-.5)*1.6,a%2?"#d9c7a0":"#b8a37a",.9+Math.random()*.7,.5+Math.random()*.3,-1.5,.7)}confetti(t,e,n=140){const s=["#75aadb","#ffffff","#f6b40e","#9fd0ff","#ffffff","#ffd45e"];for(let r=0;r<n;r++){const a=Math.random()*Math.PI*2,o=3+Math.random()*8;this.emit(t,1.2,e,Math.cos(a)*o,6+Math.random()*9,Math.sin(a)*o,s[r%s.length],.22+Math.random()*.2,1.8+Math.random()*1.2,-9)}}ring(t,e,n,s,r=.6,a=.1){const o=this.rings.find(c=>!c.active)||this.rings[0];o.active=!0,o.t=0,o.dur=r,o.r=s,o.m.material.color.set(n),o.m.position.set(t,a,e),o.m.visible=!0}trailStyle(t,e){this.trailColor.set(t),this.trailOn=e}update(t,e){for(let s=0;s<this.n;s++){if(this.life[s]<=0){this.alpha[s]=0;continue}this.life[s]-=t;const r=Math.max(0,this.life[s]/this.maxLife[s]);this.vel[s*3+1]+=this.grav[s]*t,this.pos[s*3]+=this.vel[s*3]*t,this.pos[s*3+1]=Math.max(.05,this.pos[s*3+1]+this.vel[s*3+1]*t),this.pos[s*3+2]+=this.vel[s*3+2]*t,this.alpha[s]=Math.min(1,r*2),this.size[s]=this.s0[s]*(.4+.6*r)}for(const s of this.rings){if(!s.active)continue;s.t+=t;const r=s.t/s.dur;if(r>=1){s.active=!1,s.m.visible=!1;continue}const a=1-(1-r)*(1-r);s.m.scale.setScalar(Math.max(.01,s.r*a)),s.m.material.opacity=(1-r)*.85}e&&this.trailOn>0&&this.emit(e.x,e.y,e.z,0,0,0,this.trailColor,.62*this.trailOn,.4,0,.85);const n=this.points.geometry;n.attributes.position.needsUpdate=!0,n.attributes.size.needsUpdate=!0,n.attributes.alpha.needsUpdate=!0,n.attributes.color.needsUpdate=!0}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose();for(const t of this.rings)this.scene.remove(t.m),t.m.material.dispose();this.rings[0].m.geometry.dispose()}}const kn=Math.PI,Mv=1.25,yv=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);return e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new $n(i)})(),Sv=new ce({map:yv,transparent:!0,depthWrite:!1}),bv=new Wn(1,20),Gh=i=>{const t=new nt(bv,Sv.clone());return t.rotation.x=-kn/2,t.position.y=.03,t.scale.setScalar(i),t};function Ev(i,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=new $n(e);n.colorSpace=Pe;const s=()=>{const r=e.getContext("2d");r.clearRect(0,0,256,64),r.fillStyle="rgba(11,20,36,.82)",r.beginPath(),r.roundRect(4,8,248,48,22),r.fill(),r.fillStyle=t,r.beginPath(),r.arc(30,32,10,0,kn*2),r.fill(),r.fillStyle="#fff",r.font="30px Anton, Impact, sans-serif",r.textBaseline="middle",r.fillText(i.toUpperCase(),52,34,190),n.needsUpdate=!0};return s(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(s),n}const ql=i=>[1,3,5].map(t=>parseInt(i.slice(t,t+2),16)),Yl=(i,t)=>{const e=ql(i),n=ql(t);return Math.hypot(e[0]-n[0],e[1]-n[1],e[2]-n[2])};function wv(i){const t=Te[i]||Te[0];let e=1,n=-1;return Te.forEach((s,r)=>{if(r===i)return;const a=Math.min(Yl(s.c1,t.c1),Yl(s.c1,t.c2))+(s.pattern==="solid"||s.pattern==="stripes10"?40:0);a>n&&(n=a,e=r)}),e}function ka(i,t){const e=Object.assign({},i);return e.of=Ri("of","kit"),e.kt=t,e.pr=Ri("pr",""),e.ex===Ri("ex","shout")&&(e.ex=Ri("ex","sing")),e}function $l(i,t=[]){const e=ic.filter(s=>!t.includes(s.id)),n=[];for(;n.length<i&&e.length;)n.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return n}class Tv{constructor(t,e,n,s){this.p=e,this.root=new Me,this.avatar=$r(n),this.avatar.userData.raise[0]=this.avatar.userData.raise[1]=0,this.avatar.scale.setScalar(Mv),this.root.add(this.avatar),this.shadow=Gh(.85),this.root.add(this.shadow),this.shadow.scale.setScalar(.95);const r=new Rh(new jo({map:Ev(e.name,s),transparent:!0,depthWrite:!1,depthTest:!1}));r.scale.set(2.5,.62,1),r.position.y=3.35,r.renderOrder=10,this.label=r,this.root.add(r),this.arrow=new nt(new Tn(.34,.6,4),new ce({color:"#f6b40e",depthTest:!1})),this.arrow.rotation.x=kn,this.arrow.position.y=3.9,this.arrow.renderOrder=11,this.arrow.visible=!1,this.root.add(this.arrow),this.ring=new nt(new fi(.95,1.1,32),new ce({color:"#f6b40e",transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-kn/2,this.ring.position.y=.05,this.ring.visible=!1,this.root.add(this.ring),this.charge=new nt(new fi(1.2,1.4,40),new ce({color:"#fff",transparent:!0,opacity:.9,depthWrite:!1})),this.charge.rotation.x=-kn/2,this.charge.position.y=.06,this.charge.visible=!1,this.root.add(this.charge),this.stars=new Me;for(let a=0;a<3;a++){const o=new nt(new tc(.17),new ce({color:"#ffe066"}));this.stars.add(o)}this.stars.position.y=2.75,this.stars.visible=!1,this.root.add(this.stars),this.aura=new nt(new Jt(1.3,14,10),new ce({color:"#75aadb",transparent:!0,opacity:0,depthWrite:!1})),this.aura.position.y=1.2,this.root.add(this.aura),t.add(this.root),this.scene=t,this.smoothSpeed=0}update(t,e,n,{controlled:s,goalPhase:r}){const a=this.root,o=this.avatar,c=o.userData;a.position.set(t.x,0,t.z),o.rotation.y=t.face;const l=Math.hypot(t.vx,t.vz)/7.6;if(this.smoothSpeed+=(l-this.smoothSpeed)*Math.min(1,n*14),sc(o,e+t.id*.7,Math.min(1.6,this.smoothSpeed*(t.boost>0?1.1:1))*(t.stun>0?.3:1)),o.position.y=0,c.body.rotation.z=0,t.kickT>0){const h=Math.sin((1-t.kickT/.32)*kn);c.legs[1].rotation.x=-1.6*h,c.legs[0].rotation.x=.5*h,c.body.rotation.x=.2*h,c.arms[0].rotation.x=.9*h,c.arms[1].rotation.x=-.6*h}if(t.charging&&(c.body.rotation.x=-.18,c.body.position.y=-.08,c.legs[1].rotation.x=.7,c.legs[0].rotation.x=-.25),t.tackleT>0?(c.body.rotation.x=-1.2,c.body.position.y=-.28,c.legs[0].rotation.x=-1.5,c.legs[1].rotation.x=-1.35,c.arms[0].rotation.x=.9,c.arms[1].rotation.x=.9):t.recover>0&&(c.body.rotation.x=.4),t.stun>0&&(c.body.rotation.z=Math.sin(e*22)*.22,c.body.rotation.x=.25,c.arms[0].rotation.x=-.4,c.arms[1].rotation.x=-.4),t.celebrate>0){const h=Math.abs(Math.sin(e*9+t.id))*.55;o.position.y=h,c.arms[0].rotation.x=c.arms[1].rotation.x=-2.7+Math.sin(e*14+t.id)*.25,c.arms[0].rotation.z=-.35,c.arms[1].rotation.z=.35,c.legs[0].rotation.x=Math.sin(e*9)*.4,c.legs[1].rotation.x=-Math.sin(e*9)*.4}else r&&t.celebrate<=0&&t.stun<=0?(c.body.rotation.x=.35,c.head.rotation.x=.4):c.head.rotation.x=0;if(this.arrow.visible=!!s,this.ring.visible=!!s,s&&(this.arrow.position.y=3.9+Math.sin(e*6)*.15,this.arrow.rotation.y=e*3),this.label.visible=!s||!0,this.charge.visible=t.charging&&t.charge>.05,this.charge.visible){const h=t.charge;this.charge.scale.setScalar(.55+h*.9),this.charge.material.color.setHSL(.1-.1*h,1,.55+.2*(1-h))}this.aura.material.opacity=t.charging&&t.charge>=.3?.25+.15*Math.sin(e*30):t.boost>0?.28:t.magnet>0?.2:0,this.aura.material.color.set(t.boost>0?"#75aadb":t.magnet>0?"#b57cf0":"#ff8a2e"),this.stars.visible=t.stun>0,this.stars.visible&&this.stars.children.forEach((h,f)=>{const u=e*6+f*(kn*2/3);h.position.set(Math.cos(u)*.5,Math.sin(e*5+f)*.08,Math.sin(u)*.5),h.rotation.y=e*4})}dispose(){Js(this.avatar),this.scene.remove(this.root),this.root.traverse(t=>{t.material&&t.material.map&&t.material.map.isCanvasTexture&&t.isSprite&&t.material.map.dispose()})}}class Av{constructor(t){const e=document.createElement("canvas");e.width=128,e.height=64;const n=e.getContext("2d");n.fillStyle="#f7f5ee",n.fillRect(0,0,128,64),n.fillStyle="#1c2230";for(const[a,o]of[[16,16],[48,44],[80,14],[112,40],[32,56],[96,58],[64,30],[4,40]])n.beginPath(),n.arc(a,o,8,0,kn*2),n.fill();const s=new $n(e);s.colorSpace=Pe,this.mesh=new nt(new Jt(Xn.R*1.08,20,14),new pi({map:s,gradientMap:xt("#fff").gradientMap}));const r=new nt(this.mesh.geometry,new ce({color:856347,side:Fe}));r.scale.setScalar(1.1),this.mesh.add(r),this.group=new Me,this.group.add(this.mesh),this.shadow=Gh(.5),this.group.add(this.shadow),t.add(this.group),this.scene=t,this.q=new di,this.axis=new N}update(t,e){this.mesh.position.set(t.x,t.y,t.z),this.shadow.position.set(t.x,.04,t.z);const n=Math.max(0,t.y-Xn.R);this.shadow.scale.setScalar(.5+Math.min(.5,n*.15)),this.shadow.material.opacity=Math.max(.25,1-n*.35);const s=Math.hypot(t.vx,t.vz);s>.05&&(this.axis.set(t.vz,0,-t.vx).normalize(),this.q.setFromAxisAngle(this.axis,s*e/Xn.R),this.mesh.quaternion.premultiply(this.q))}dispose(){this.scene.remove(this.group),this.mesh.geometry.dispose(),this.mesh.material.map.dispose()}}class Cv{constructor(t){this.mesh=new nt(new fi(.7,.9,32),new ce({color:"#75aadb",transparent:!0,opacity:.9,depthWrite:!1})),this.mesh.rotation.x=-kn/2,this.mesh.position.y=.07,this.mesh.visible=!1,t.add(this.mesh),this.scene=t}update(t,e){this.mesh.visible=!!t,t&&(this.mesh.position.x=t.x,this.mesh.position.z=t.z,this.mesh.scale.setScalar(1+.15*Math.sin(e*14)),this.mesh.material.opacity=Math.min(1,t.t*3))}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}let Gt=null,fn=null,Os=null,ri=null,cs=!1;try{cs=localStorage.getItem("potrero-mute")==="1"}catch{}const se={get muted(){return cs},setMuted(i){cs=!!i;try{localStorage.setItem("potrero-mute",cs?"1":"0")}catch{}fn&&(fn.gain.value=cs?0:.8)},unlock(){if(!Gt){const i=window.AudioContext||window.webkitAudioContext;if(!i)return;Gt=new i,fn=Gt.createGain(),fn.gain.value=cs?0:.8;const t=Gt.createDynamicsCompressor();fn.connect(t),t.connect(Gt.destination),Os=Gt.createBuffer(1,Gt.sampleRate*2,Gt.sampleRate);const e=Os.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1}Gt.state==="suspended"&&Gt.resume()},_tone(i,t,e,n,s,r=0){if(!Gt)return;const a=Gt.currentTime+r,o=Gt.createOscillator(),c=Gt.createGain();o.type=i,o.frequency.setValueAtTime(t,a),e!==t&&o.frequency.exponentialRampToValueAtTime(Math.max(20,e),a+n),c.gain.setValueAtTime(s,a),c.gain.exponentialRampToValueAtTime(8e-4,a+n),o.connect(c),c.connect(fn),o.start(a),o.stop(a+n+.02)},_noise(i,t,e,n=1,s="lowpass",r=0){if(!Gt)return;const a=Gt.currentTime+r,o=Gt.createBufferSource();o.buffer=Os;const c=Gt.createBiquadFilter();c.type=s,c.frequency.value=e,c.Q.value=n;const l=Gt.createGain();l.gain.setValueAtTime(t,a),l.gain.exponentialRampToValueAtTime(8e-4,a+i),o.connect(c),c.connect(l),l.connect(fn),o.start(a,Math.random()),o.stop(a+i+.02)},kick(i=0){this._tone("sine",190+i*40,55,.12,.5+i*.3),this._noise(.06,.25+i*.2,1800,1,"bandpass")},pass(){this._tone("sine",230,90,.08,.32),this._noise(.04,.12,2400,1,"bandpass")},through(){this._tone("sine",260,80,.1,.4),this._tone("triangle",520,880,.3,.12,.03),this._noise(.12,.1,3200,2,"bandpass")},power(){this._tone("sawtooth",120,60,.25,.3),this._tone("sine",150,40,.3,.7),this._noise(.2,.5,2200,1,"bandpass")},thud(i=8){this._tone("sine",120,50,.1,Math.min(.5,i*.03))},post(){this._tone("triangle",1100,900,.5,.35),this._tone("square",1650,1500,.25,.08)},tackle(i){this._noise(.18,i?.5:.2,i?900:1500,1,"lowpass"),i&&this._tone("sine",140,60,.15,.4)},block(){this._tone("sine",100,45,.2,.6),this._noise(.12,.3,700)},switch(){this._tone("square",880,880,.04,.05)},receive(){this._tone("sine",420,300,.05,.16)},tick(){this._tone("square",740,740,.07,.1)},whistle(i=!1){if(!Gt)return;const t=Gt.currentTime,e=i?.9:.35,n=Gt.createOscillator(),s=Gt.createGain(),r=Gt.createOscillator(),a=Gt.createGain();n.type="square",n.frequency.value=2900,r.frequency.value=28,a.gain.value=90,r.connect(a),a.connect(n.frequency),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.16,t+.02),s.gain.setValueAtTime(.16,t+e-.05),s.gain.exponentialRampToValueAtTime(8e-4,t+e),n.connect(s),s.connect(fn),n.start(t),r.start(t),n.stop(t+e+.02),r.stop(t+e+.02)},bubusela(i=.7){if(!Gt)return;const t=Gt.currentTime;for(const e of[233,466,699]){const n=Gt.createOscillator(),s=Gt.createGain();n.type="sawtooth",n.frequency.value=e,s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.12,t+.04),s.gain.setValueAtTime(.12,t+i-.1),s.gain.exponentialRampToValueAtTime(8e-4,t+i),n.connect(s),s.connect(fn),n.start(t),n.stop(t+i+.02)}},cheer(i=2.4){if(!Gt)return;const t=Gt.currentTime,e=Gt.createBufferSource();e.buffer=Os,e.loop=!0;const n=Gt.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=.6;const s=Gt.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.5,t+.25),s.gain.exponentialRampToValueAtTime(.2,t+i*.6),s.gain.exponentialRampToValueAtTime(8e-4,t+i),n.frequency.setValueAtTime(700,t),n.frequency.linearRampToValueAtTime(1300,t+.5),n.frequency.linearRampToValueAtTime(800,t+i),e.connect(n),n.connect(s),s.connect(fn),e.start(t),e.stop(t+i+.05),this.bubusela(1)},aww(){this._tone("sawtooth",380,200,.7,.07),this._noise(.6,.12,600)},crowdStart(){if(!Gt||ri)return;const i=Gt.createBufferSource();i.buffer=Os,i.loop=!0;const t=Gt.createBiquadFilter();t.type="bandpass",t.frequency.value=520,t.Q.value=.5;const e=Gt.createGain();e.gain.value=1e-4,i.connect(t),t.connect(e),e.connect(fn),i.start(),ri={s:i,g:e,f:t}},crowdLevel(i){!Gt||!ri||(ri.g.gain.setTargetAtTime(.02+i*.1,Gt.currentTime,.4),ri.f.frequency.setTargetAtTime(480+i*500,Gt.currentTime,.4))},crowdStop(){if(ri){try{ri.s.stop()}catch{}ri=null}}},{HL:Si,HW:Rv}=Xn,jl=Math.PI,Ha=1/60,os=42,Pv=[["Tranqui",.3],["Normal",.6],["Bravo",.92]],Lv=[2,3,5];function Dv({onExit:i}){const t=new $o;t.background=new qt("#e9c493");const e=new Ze(os,innerWidth/innerHeight,.5,400),n=mv(t),s=new xv(t),r=new Av(t),a=new Cv(t),o=new Map;let c=null,l=[],h="setup",f=0,u=0,d=1,g=0,v=0,m=0,p={x:0,z:0},M=0,S=0,x=os,D=0,C=0,T=!1,P=[],b="",_="",L=-1;const F={control:"team",power:"bubusela",diff:.6,minutes:3};let V=[0,1];document.getElementById("gl");const Y=new Set,Q={x:0,y:0};let H=!1;const et=matchMedia("(pointer: coarse)").matches,G=()=>innerWidth/innerHeight<.85,ht=A=>{c&&c.setInput(0,A)},pt=A=>{h==="playing"&&ht({[A]:!0})},yt=A=>{if(/INPUT|TEXTAREA|SELECT/.test(A.target&&A.target.tagName))return;const w=A.key.toLowerCase();if(w==="escape"){h==="playing"&&(A.preventDefault(),ct());return}if(h==="playing"){if(se.unlock(),["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(w)){Y.add(w),A.preventDefault();return}if(A.repeat){w===" "&&A.preventDefault();return}w==="j"?pt("pass"):w==="k"?pt("through"):w==="u"||w==="i"?pt("tackle"):w===" "?(A.preventDefault(),pt("power")):w==="l"?Y.add("l"):w==="m"&&(se.setMuted(!se.muted),Re())}},Ft=A=>Y.delete(A.key.toLowerCase()),j=()=>{Y.clear(),Q.x=Q.y=0,H=!1};addEventListener("keydown",yt),addEventListener("keyup",Ft),addEventListener("blur",j);function U(){let A=0,w=0;(Y.has("a")||Y.has("arrowleft"))&&(A-=1),(Y.has("d")||Y.has("arrowright"))&&(A+=1),(Y.has("w")||Y.has("arrowup"))&&(w-=1),(Y.has("s")||Y.has("arrowdown"))&&(w+=1);const W=Math.hypot(A,w);W>1&&(A/=W,w/=W),(Q.x||Q.y)&&(A=Q.x,w=-Q.y),G()?ht({mx:-w,mz:A,shoot:Y.has("l")||H}):ht({mx:A,mz:w,shoot:Y.has("l")||H})}function q(){for(const ut of l)ut.dispose();l=[];const A=ie.profile.look.kt,w=wv(A);V=[A,w];const W=$l(2),rt=$l(3,W.map(ut=>ut.id)),J=[];return J.push({team:0,slot:0,name:ie.profile.name||"Vos",look:ka(ie.profile.look,A)}),W.forEach(ut=>J.push({team:0,slot:F.control==="team"?0:null,name:ut.name,look:ka(ut.look,A)})),rt.forEach(ut=>J.push({team:1,slot:null,name:ut.name,look:ka(ut.look,w)})),J}function at(){se.unlock(),se.crowdStart();const A=q();c=new hv({duration:F.minutes*60,difficulty:F.diff,players:A.map(w=>({team:w.team,slot:w.slot,name:w.name,power:w.slot===0?F.power:void 0}))}),l=c.players.map((w,W)=>new Tv(t,w,A[W].look,Te[V[w.team]].c1==="#f7f7f4"?Te[V[w.team]].c2:Te[V[w.team]].c1)),o.forEach(w=>{t.remove(w)}),o.clear(),f=0,u=0,g=0,m=0,T=!1,C=0,b=_="",L=-1,M=0,x=os,h="playing",O(),Nt("Saque inicial",1.6)}function ct(){return h!=="playing"?void 0:(h="paused",j(),hi(z("div",null,z("header",{class:"dlg-head"},z("h2",{text:"Pausa"})),z("div",{class:"fb-keys"},Lt()),z("footer",null,z("button",{type:"button",class:"btn ghost",text:"Salir del partido",onclick:()=>{h="over",He(),At()}}),z("button",{type:"button",class:"btn primary",text:"Seguir",onclick:()=>He()}))),{onClose:()=>{h==="paused"&&(h="playing")}}))}let bt=!1;function At(){bt||i()}function Lt(){return z("dl",{class:"keylist"},[["WASD / flechas","Moverte"],["J","Pase corto (sin pelota: cambiás de jugador o pedís el pase)"],["K","Filtrado de tres dedos: la pelota se dobla y cae adelante del compañero"],["L","Tiro al arco. Mantené apretado para el tiro potente"],["U","Barrida para sacarle la pelota al rival"],["Espacio","Tu poder (se carga jugando)"],["M","Sonido"]].flatMap(([w,W])=>[z("dt",null,z("kbd",{text:w})),z("dd",{text:W})]))}function Yt(){const A=z("div",{class:"fb-setup"}),w=()=>{A.textContent="";const rt=(J,ut,ft,vt,I)=>z("button",{type:"button",class:"fb-card","aria-pressed":String(ft),disabled:I,onclick:vt},z("strong",{text:J}),z("span",{text:ut}));A.append(z("header",{class:"dlg-head"},z("h2",{text:"La Cancha · 3 vs 3"}),z("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>He()})),z("p",{class:"lead",text:"Cancha de potrero cerrada con alambrado: sin laterales ni córners. Gana el que meta más goles; si empatan, gol de oro."}),z("span",{class:"lab",text:"¿Cómo jugás?"}),z("div",{class:"fb-cards"},rt("Mi equipo","Manejás a los tres. Cambiás solo al más cercano a la pelota o con J.",F.control==="team",()=>{F.control="team",w()}),rt("Un jugador","Sos solo tu personaje, como en clubes pro. Tus dos compañeros son bots por ahora.",F.control==="pro",()=>{F.control="pro",w()}),rt("Online con amigos","Hasta 6 personas, cada una con su personaje. Necesita un servidor: es el próximo paso.",!1,null,!0)),z("span",{class:"lab",text:"Tu poder"}),z("div",{class:"fb-cards four"},zo.map(J=>{const ut=ps[J];return z("button",{type:"button",class:"fb-card",style:{"--c":ut.color},"aria-pressed":String(F.power===J),onclick:()=>{F.power=J,w()}},z("strong",{text:ut.name}),z("span",{text:ut.desc}))})),z("div",{class:"fb-opts"},z("div",null,z("span",{class:"lab",text:"Rivales"}),z("div",{class:"row"},Pv.map(([J,ut])=>z("button",{type:"button",class:"chip","aria-pressed":String(F.diff===ut),text:J,onclick:()=>{F.diff=ut,w()}})))),z("div",null,z("span",{class:"lab",text:"Duración"}),z("div",{class:"row"},Lv.map(J=>z("button",{type:"button",class:"chip","aria-pressed":String(F.minutes===J),text:J+" min",onclick:()=>{F.minutes=J,w()}}))))),!et&&z("details",{class:"fb-keys"},z("summary",{text:"Controles"}),Lt()),z("footer",null,z("button",{type:"button",class:"btn ghost",text:"Volver al mundo",onclick:()=>He()}),z("button",{type:"button",class:"btn primary",text:"¡A jugar!",onclick:()=>{W=!0,He(),at()}})))};let W=!1;w(),hi(A,{cls:"wide",onClose:()=>{W||At()}})}let $t=null,mt={};function O(){Li();const A=W=>z("i",{class:"fb-dot",style:{background:W}}),w=W=>Te[V[W]];mt.scoreA=z("b",{text:"0"}),mt.scoreB=z("b",{text:"0"}),mt.time=z("span",{class:"fb-time",text:"0:00"}),mt.banner=z("div",{class:"fb-banner",hidden:!0}),mt.pop=z("div",{class:"fb-pops"}),mt.meterFill=z("i"),mt.meterName=z("span"),mt.meterKey=z("kbd",{text:et?"PODER":"Espacio"}),mt.meter=z("div",{class:"fb-meter"},z("div",{class:"row"},mt.meterName,mt.meterKey),z("div",{class:"bar"},mt.meterFill)),mt.chargeFill=z("i"),mt.charge=z("div",{class:"fb-charge",hidden:!0},z("div",{class:"bar"},mt.chargeFill)),mt.mute=z("button",{type:"button",class:"btn ghost sm","aria-label":"Sonido",onclick:()=>{se.unlock(),se.setMuted(!se.muted),Re()}}),mt.pause=z("button",{type:"button",class:"btn ghost sm",text:"Pausa",onclick:()=>ct()}),mt.who=z("div",{class:"fb-who"}),$t=z("div",{class:"fb-hud"},z("div",{class:"fb-score"},z("div",{class:"tm"},A(w(0).c1),z("span",{text:w(0).name})),mt.scoreA,mt.time,mt.scoreB,z("div",{class:"tm r"},z("span",{text:w(1).name}),A(w(1).c1))),z("div",{class:"fb-top"},mt.mute,mt.pause),mt.banner,mt.pop,mt.who,mt.charge,mt.meter,!et&&z("p",{class:"fb-hint"},z("kbd",{text:"J"})," pase  ",z("kbd",{text:"K"})," filtrado  ",z("kbd",{text:"L"})," tiro (mantené: potente)  ",z("kbd",{text:"U"})," barrida  ",z("kbd",{text:"Espacio"})," poder"),et&&Kt()),er().append($t),Re()}function Re(){mt.mute&&(mt.mute.textContent=se.muted?"🔇":"🔊")}function Kt(){const A=z("i",{class:"knob"}),w=z("div",{class:"joy","aria-hidden":"true"},A);let W=null;const rt=48,J=vt=>{const I=w.getBoundingClientRect();let lt=vt.clientX-(I.left+I.width/2),$=vt.clientY-(I.top+I.height/2);const tt=Math.hypot(lt,$);tt>rt&&(lt=lt/tt*rt,$=$/tt*rt),A.style.transform=`translate(${lt}px, ${$}px)`,Q.x=lt/rt,Q.y=-$/rt},ut=()=>{W=null,Q.x=Q.y=0,A.style.transform=""};w.addEventListener("pointerdown",vt=>{W=vt.pointerId,w.setPointerCapture(vt.pointerId),J(vt)}),w.addEventListener("pointermove",vt=>{vt.pointerId===W&&J(vt)}),w.addEventListener("pointerup",ut),w.addEventListener("pointercancel",ut);const ft=(vt,I,lt,$)=>{const tt=z("button",{type:"button",class:"fb-btn "+vt},I);tt.addEventListener("pointerdown",dt=>{dt.preventDefault(),tt.setPointerCapture(dt.pointerId),se.unlock(),lt(),tt.classList.add("on")});const _t=()=>{$&&$(),tt.classList.remove("on")};return tt.addEventListener("pointerup",_t),tt.addEventListener("pointercancel",_t),tt};return z("div",{class:"fb-touch"},w,z("div",{class:"fb-btns"},ft("shoot","TIRO",()=>{H=!0},()=>{H=!1}),ft("pass","PASE",()=>pt("pass")),ft("thru","FILTRADO",()=>pt("through")),ft("tackle","BARRIDA",()=>pt("tackle")),ft("power","PODER",()=>pt("power"))))}let kt=0;function Nt(A,w=1.4,W=""){mt.banner&&(mt.banner.textContent=A,mt.banner.className="fb-banner "+W,mt.banner.hidden=!1,mt.banner.style.animation="none",mt.banner.offsetWidth,mt.banner.style.animation="",kt=w)}function Ht(A,w,W,rt,J="#fff"){if(!mt.pop)return;const ut=z("span",{class:"fb-pop",text:A,style:{color:J}});mt.pop.append(ut),P.push({n:ut,x:w,y:W,z:rt,t:1.2})}const Rt=new N;function R(A){for(let w=P.length-1;w>=0;w--){const W=P[w];if(W.t-=A,W.y+=A*1.2,W.t<=0){W.n.remove(),P.splice(w,1);continue}Rt.set(W.x,W.y,W.z).project(e),W.n.style.transform=`translate(-50%,-50%) translate(${(Rt.x*.5+.5)*innerWidth}px, ${(-Rt.y*.5+.5)*innerHeight}px)`,W.n.style.opacity=Math.min(1,W.t*2.2)}}const y=A=>c.players[A]?c.players[A].name:"";function X(A){const w=c.ball;switch(A.type){case"kick":A.kind==="pass"?se.pass():A.kind==="through"?(se.through(),u=.45,d=.5,Ht("¡Tres dedos!",w.x,2.2,w.z,"#9fd0ff")):A.kind==="power"?(se.kick(1),se.power(),g=Math.max(g,.5),s.burst(w.x,.6,w.z,"#ff9a3c",16,6,.6,.5,-6),A.power>.6&&Ht("¡Cañonazo!",w.x,2.4,w.z,"#ffb870")):(se.kick(.3),s.dust(w.x,w.z,0,0,3));break;case"receive":se.receive();break;case"switch":A.slot===0&&se.switch();break;case"call":Ht("¡Pasala!",c.players[A.id].x,3.8,c.players[A.id].z,"#f6b40e");break;case"tackle":se.tackle(A.hit),s.dust(A.x,A.z,0,0,A.hit?10:4),A.hit&&(g=Math.max(g,.2)),A.blocked&&Ht("¡No pasa!",A.x,2.6,A.z,"#9fb0cc");break;case"block":se.block(),s.burst(A.x,1.2,A.z,"#fff",10,5,.5,.4),g=Math.max(g,A.v>30?.6:.25);break;case"post":se.post(),s.burst(A.x,1.4,A.z,"#fff",12,4,.4,.5),g=Math.max(g,.3),Ht("¡AL PALO!",A.x,3,A.z,"#ffe066");break;case"bar":se.post(),s.burst(A.x,2.5,A.z,"#fff",12,4,.4,.5),g=Math.max(g,.3),Ht("¡AL TRAVESAÑO!",A.x,3.4,A.z,"#ffe066");break;case"wall":se.thud(A.v);break;case"bounce":se.thud(A.v*.6),s.dust(A.x,A.z,0,0,2);break;case"power":{se.power();const W=ps[A.power];A.power==="bubusela"?(se.bubusela(.8),s.ring(A.x,A.z,W.color,7.5,.7),s.ring(A.x,A.z,"#fff",5,.5),s.burst(A.x,1.3,A.z,W.color,24,7,.7,.7,-2),g=Math.max(g,.5),Ht("¡BUBUSELAZO!",A.x,3.6,A.z,W.color)):A.power==="pique"?(s.ring(A.x,A.z,W.color,2.6,.5),s.burst(A.x,.4,A.z,W.color,16,5,.6,.6,-2),Ht("¡Pique!",A.x,3.6,A.z,W.color)):A.power==="iman"?(s.ring(A.x,A.z,W.color,9,.8),Ht("¡Pelota pegada!",A.x,3.6,A.z,W.color)):A.power==="alambrado"&&(s.burst(A.x,.4,A.z,"#cdd7e6",20,4,.5,.6,-3),Ht("¡Alambrado!",A.x,3.6,A.z,"#cdd7e6"),g=Math.max(g,.2));break}case"kickoff":m=0,Nt(A.team===0?"Saca tu equipo":"Saca el rival",1.6),se.whistle(!1);break;case"whistle":Nt("¡Dale!",.8,"go"),se.whistle(!1);break;case"goal":{const W=A.team===0;se.whistle(!0),se.cheer(W?3:1.6),W||se.aww(),g=1,u=1.1,d=.33,m=3.4,p={x:A.x,z:A.z},s.confetti(A.x>0?Si-2:-Si+2,A.z,W?200:70),s.ring(A.x,A.z,"#fff",6,.9,.6),n.pulseNet(A.x>0?1:-1),n.setExcite(1),Nt(W?"¡GOOOL!":"Gol del rival",3.2,W?"goal":"foe"),A.scorer!=null&&Ht(y(A.scorer),c.players[A.scorer].x,4.6,c.players[A.scorer].z,"#ffd45e"),b="";break}case"overtime":Nt("¡Tiempo extra! Gol de oro",2.2,"goal"),se.whistle(!1);break;case"end":C=1.4;break}}function st(){T=!0,h="over",se.whistle(!0);const A=c.winner,w=c.score[0],W=c.score[1],J=(A===0?60:A===-1?35:25)+Math.min(30,w*6);let ut=null;try{ut=ie.addXp(J)}catch(lt){console.warn(lt)}const ft=A===0?"¡Ganaste!":A===-1?"Empate":"Perdiste",vt=c.stats,I=(lt,$,tt)=>z("tr",null,z("td",{text:String($)}),z("th",{text:lt}),z("td",{text:String(tt)}));hi(z("div",{class:"fb-result"},z("header",{class:"dlg-head"},z("h2",{text:ft})),z("p",{class:"fb-final",text:`${w}  –  ${W}`}),z("table",null,I("Tiros",vt[0].shots,vt[1].shots),I("Pases",vt[0].passes,vt[1].passes),I("Barridas ganadas",vt[0].tackles,vt[1].tackles),I("Poderes",vt[0].powers,vt[1].powers)),z("p",{class:"lead",text:`+${J} XP${ut&&ut.chests?` · ¡Subiste de nivel! ${ut.chests===1?"Ganaste un cofre.":`Ganaste ${ut.chests} cofres.`}`:""}`}),z("footer",null,z("button",{type:"button",class:"btn ghost",text:"Volver al mundo",onclick:()=>{He()}}),z("button",{type:"button",class:"btn primary",text:"Revancha",onclick:()=>{ot=!0,He(),at()}}))),{onClose:()=>{ot||At(),ot=!1}})}let ot=!1;function it(A,w){const W=innerWidth/innerHeight;e.aspect=W;const rt=Math.tan(jl/180*os/2);let J=Math.min(52,Math.max(27,17/(rt*W))),ut=0,ft=0,vt=os;if(h==="setup"||!c){D+=A*.12,e.position.set(Math.sin(D)*30,17,Math.cos(D)*26+2),e.lookAt(0,0,0),e.fov=os,e.updateProjectionMatrix();return}const I=c.ball,lt=G();lt&&(J=Math.min(60,Math.max(30,10.5/(rt*W))));const $=rt*W*J*.9,tt=lt?Math.max(0,Si+2-15):Math.max(0,Si+2-$),_t=lt?Math.max(0,Rv+1-$):0;ut=Hr.clamp(I.x*.85+I.vx*.2,-tt,tt),ft=lt?Hr.clamp(I.z*.6,-_t,_t):I.z*.18,m>0&&(m-=A,ut=Hr.clamp(p.x,-Si-1,Si+1),ft=p.z*.3,vt=36,J*=.85);const dt=1-Math.exp(-(m>0?3:4.5)*A);M+=(ut-M)*dt,S+=(ft-S)*dt,x+=(vt-x)*(1-Math.exp(-3*A)),e.fov=x,e.updateProjectionMatrix();const Ct=g>0?Math.sin(w*61+v)*g*.35:0,ee=g>0?Math.cos(w*53)*g*.25:0;lt?(e.position.set(M-J*.62+Ct,J*.8+ee,S),e.lookAt(M+1,0,S)):(e.position.set(M+Ct,J*.8+ee,S+J*.62),e.lookAt(M,0,S-1))}const Pt=(()=>{const A=document.createElement("canvas");A.width=A.height=64;const w=A.getContext("2d");w.strokeStyle="rgba(225,235,250,.95)",w.lineWidth=3;for(let rt=-64;rt<128;rt+=16)w.beginPath(),w.moveTo(rt,0),w.lineTo(rt+64,64),w.stroke(),w.beginPath(),w.moveTo(rt+64,0),w.lineTo(rt,64),w.stroke();const W=new $n(A);return W.wrapS=W.wrapT=ui,W.repeat.set(4,1.4),W})();function Mt(){for(const A of c.barriers){let w=o.get(A);if(!w){const rt=Math.hypot(A.x2-A.x1,A.z2-A.z1);w=new Me;const J=new nt(new mn(rt,2.6),new ce({map:Pt,transparent:!0,side:xe,depthWrite:!1}));J.position.y=1.3;const ut=new nt(new Wt(rt,.12,.12),new ce({color:"#cdd7e6"}));ut.position.y=2.6;for(const ft of[-1,1]){const vt=new nt(new Ot(.08,.08,2.7,6),new ce({color:"#8d98aa"}));vt.position.set(ft*rt/2,1.35,0),w.add(vt)}w.add(J,ut),w.position.set((A.x1+A.x2)/2,0,(A.z1+A.z2)/2),w.rotation.y=Math.atan2(A.x2-A.x1,A.z2-A.z1)-jl/2,t.add(w),o.set(A,w)}const W=A.life-A.t;w.scale.y=Math.min(1,W/.2),w.visible=A.t>.4||Math.floor(A.t*14)%2===0}for(const[A,w]of o)c.barriers.includes(A)||(t.remove(w),o.delete(A))}function Tt(A){if(!c)return;const w=c.score.join("-");w!==b&&(mt.scoreA.textContent=c.score[0],mt.scoreB.textContent=c.score[1],b=w);const W=Math.max(0,Math.ceil(c.timeLeft)),rt=(c.golden?"g":"")+W;rt!==_&&(mt.time.textContent=c.golden?"GOL DE ORO":`${Math.floor(W/60)}:${String(W%60).padStart(2,"0")}`,mt.time.classList.toggle("low",!c.golden&&W<=10),_=rt);const J=c.meters.s0;if(J){const vt=ps[J.power];mt.meterName.textContent=vt.name,mt.meterFill.style.width=Math.min(100,J.v)+"%",mt.meterFill.style.background=vt.color,mt.meter.classList.toggle("ready",J.v>=vt.cost&&J.cd<=0),mt.meter.style.setProperty("--cost",vt.cost+"%")}const ut=c.slots[0],ft=c.players[ut.active];ft&&(ft.charging?(mt.charge.hidden=!1,mt.chargeFill.style.width=ft.charge*100+"%",mt.chargeFill.className=ft.charge>=.3?"hot":""):mt.charge.hidden=!0,ut.active!==L&&(L=ut.active,mt.who.textContent=ft.name,mt.who.classList.remove("flash"),mt.who.offsetWidth,mt.who.classList.add("flash"))),kt>0&&(kt-=A,kt<=0&&(mt.banner.hidden=!0)),R(A)}function Zt(A,w){if(n.update(A,w),!c){s.update(A,null),s.setScale(innerHeight,e.fov),it(A,w),r.update({x:0,y:Xn.R,z:0,vx:0,vy:0,vz:0},A);return}if(h==="playing"){if(U(),c.phase!=="play"){const I=c.slots[0].input;I.pass=I.through=I.tackle=I.power=!1}let ft=1;u>0&&(u-=A,ft=d+(1-d)*Math.max(0,1-u*2.2)),f+=A*ft;let vt=0;for(;f>=Ha&&vt<6;){c.step(Ha);for(const I of c.drain())X(I);f-=Ha,vt++}vt===6&&(f=0),c.phase==="end"&&!T&&(C-=A,C<=0&&st())}g=Math.max(0,g-A*1.6);const W=n.fans.excite;n.setExcite(Math.max(c.phase==="goal"?1:.18+.25*(Math.abs(c.ball.x)/Si),W-A*.35)),se.crowdLevel(n.fans.excite);const rt=c.ball;r.update(rt,A);const J=c.slots[0];for(let ft=0;ft<l.length;ft++){const vt=c.players[ft],I=J&&(J.mode==="team"?J.active===vt.id:vt.slot===0)&&c.phase!=="end";l[ft].update(vt,w,A,{controlled:I,goalPhase:c.phase==="goal"})}a.update(c.marker&&c.marker.team===0?c.marker:null,w);const ut=Math.hypot(rt.vx,rt.vz);rt.guided&&rt.guided.kind==="through"?s.trailStyle("#8fd0ff",1):rt.speedKick>30&&ut>22?s.trailStyle("#ff9a3c",1):ut>19?s.trailStyle("#ffffff",.55):s.trailStyle("#fff",0);for(const ft of c.players)(Math.hypot(ft.vx,ft.vz)>6.5||ft.boost>0)&&Math.random()<A*9&&s.dust(ft.x-ft.vx*.05,ft.z-ft.vz*.05,-ft.vx*.1,-ft.vz*.1,1),ft.boost>0&&Math.random()<A*30&&s.emit(ft.x,.8+Math.random(),ft.z,0,.5,0,"#75aadb",.8,.4,0,.8),ft.charging&&ft.charge>=.3&&Math.random()<A*40&&s.emit(ft.x+(Math.random()-.5),.2,ft.z+(Math.random()-.5),0,3,0,"#ffb870",.5,.4,0,.9);Mt(),s.setScale(innerHeight,e.fov),s.update(A,rt),it(A,w),Tt(A)}return Li(),Yt(),{scene:t,camera:e,update:Zt,dispose(){bt=!0,removeEventListener("keydown",yt),removeEventListener("keyup",Ft),removeEventListener("blur",j),He(),se.crowdStop();for(const A of l)A.dispose();r.dispose(),a.dispose(),s.dispose(),n.dispose(),o.forEach(A=>t.remove(A)),Li()}}}const ac=new Lg(document.getElementById("gl"));function Kr(){ac.setScene(()=>Qg({onEditLook:()=>Wh(),onPlay:i=>Iv(i)}))}function Iv(i){i==="futbol"&&ac.setScene(()=>Dv({onExit:Kr}))}function Wh(){ac.setScene(()=>Vg({onDone:Kr,onCancel:Kr}))}ie.load().then(()=>{ie.hasCharacter()?Kr():Wh()});
