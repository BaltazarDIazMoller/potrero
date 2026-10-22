(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yl="170",pf=0,$l=1,mf=2,Gh=1,gf=2,hi=3,Kn=0,Ke=1,_e=2,Vi=0,ta=1,mc=2,Yl=3,Jl=4,vf=5,rs=100,xf=101,_f=102,yf=103,Mf=104,bf=200,Sf=201,wf=202,Ef=203,gc=204,vc=205,Tf=206,Af=207,Cf=208,Rf=209,Pf=210,Lf=211,Df=212,If=213,Uf=214,xc=0,_c=1,yc=2,sa=3,Mc=4,bc=5,Sc=6,wc=7,Ml=0,Nf=1,zf=2,Gi=0,kf=1,Ff=2,Of=3,Bf=4,Vf=5,Gf=6,Hf=7,Hh=300,aa=301,ra=302,Ec=303,Tc=304,oo=306,Hi=1e3,us=1001,Ac=1002,dn=1003,Wf=1004,or=1005,jn=1006,Mo=1007,hs=1008,xi=1009,Wh=1010,Xh=1011,Ka=1012,bl=1013,gs=1014,$n=1015,nr=1016,Sl=1017,wl=1018,oa=1020,qh=35902,jh=1021,$h=1022,Bn=1023,Yh=1024,Jh=1025,ea=1026,ca=1027,co=1028,El=1029,Kh=1030,Tl=1031,Al=1033,Gr=33776,Hr=33777,Wr=33778,Xr=33779,Cc=35840,Rc=35841,Pc=35842,Lc=35843,Dc=36196,Ic=37492,Uc=37496,Nc=37808,zc=37809,kc=37810,Fc=37811,Oc=37812,Bc=37813,Vc=37814,Gc=37815,Hc=37816,Wc=37817,Xc=37818,qc=37819,jc=37820,$c=37821,qr=36492,Yc=36494,Jc=36495,Zh=36283,Kc=36284,Zc=36285,Qc=36286,Xf=3200,qf=3201,lo=0,jf=1,ki="",ke="srgb",da="srgb-linear",uo="linear",Te="srgb",ws=7680,Kl=519,$f=512,Yf=513,Jf=514,Qh=515,Kf=516,Zf=517,Qf=518,tp=519,tl=35044,Zl="300 es",pi=2e3,to=2001;class fa{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const Xa=Math.PI/180,Za=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Ye(i,t,e){return Math.max(t,Math.min(e,i))}function Cl(i,t){return(i%t+t)%t}function ep(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function np(i,t,e){return i!==t?(e-i)/(t-i):0}function qa(i,t,e){return(1-e)*i+e*t}function ip(i,t,e,n){return qa(i,t,1-Math.exp(-e*n))}function sp(i,t=1){return t-Math.abs(Cl(i,t*2)-t)}function ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function op(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cp(i,t){return i+Math.random()*(t-i)}function lp(i){return i*(.5-Math.random())}function up(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hp(i){return i*Xa}function dp(i){return i*Za}function fp(i){return(i&i-1)===0&&i!==0}function pp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function mp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gp(i,t,e,n,s){const a=Math.cos,r=Math.sin,o=a(e/2),c=r(e/2),l=a((t+n)/2),h=r((t+n)/2),d=a((t-n)/2),u=r((t-n)/2),f=a((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function we(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jr={DEG2RAD:Xa,RAD2DEG:Za,generateUUID:mi,clamp:Ye,euclideanModulo:Cl,mapLinear:ep,inverseLerp:np,lerp:qa,damp:ip,pingpong:sp,smoothstep:ap,smootherstep:rp,randInt:op,randFloat:cp,randFloatSpread:lp,seededRandom:up,degToRad:hp,radToDeg:dp,isPowerOfTwo:fp,ceilPowerOfTwo:pp,floorPowerOfTwo:mp,setQuaternionFromProperEuler:gp,normalize:we,denormalize:On};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,a,r,o,c,l){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,c,l)}set(t,e,n,s,a,r,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],b=s[4],M=s[7],P=s[2],C=s[5],E=s[8];return a[0]=r*v+o*_+c*P,a[3]=r*m+o*b+c*C,a[6]=r*p+o*M+c*E,a[1]=l*v+h*_+d*P,a[4]=l*m+h*b+d*C,a[7]=l*p+h*M+d*E,a[2]=u*v+f*_+g*P,a[5]=u*m+f*b+g*C,a[8]=u*p+f*M+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*o*l-n*a*h+n*o*c+s*a*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*r-o*l,u=o*c-h*a,f=l*a-r*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*r)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*a-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(r*e-n*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+t,-s*l,s*c,-s*(-l*r+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(bo.makeScale(t,e)),this}rotate(t){return this.premultiply(bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bo=new ue;function td(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vp(){const i=eo("canvas");return i.style.display="block",i}const tu={};function Ba(i){i in tu||(tu[i]=!0,console.warn(i))}function xp(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function _p(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ve={enabled:!0,workingColorSpace:da,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Te&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Te&&(i.r=na(i.r),i.g=na(i.g),i.b=na(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?uo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const eu=[.64,.33,.3,.6,.15,.06],nu=[.2126,.7152,.0722],iu=[.3127,.329],su=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ve.define({[da]:{primaries:eu,whitePoint:iu,transfer:uo,toXYZ:su,fromXYZ:au,luminanceCoefficients:nu,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:eu,whitePoint:iu,transfer:Te,toXYZ:su,fromXYZ:au,luminanceCoefficients:nu,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let Es;class Mp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Es===void 0&&(Es=eo("canvas")),Es.width=t.width,Es.height=t.height;const n=Es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=gi(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bp=0;class ed{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(So(s[r].image)):a.push(So(s[r]))}else a=So(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sp=0;class on extends fa{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=us,s=us,a=jn,r=hs,o=Bn,c=xi,l=on.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=mi(),this.name="",this.source=new ed(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Hh;on.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,M=(f+1)/2,P=(p+1)/2,C=(h+u)/4,E=(d+v)/4,U=(g+m)/4;return b>M&&b>P?b<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(b),s=C/n,a=E/n):M>P?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=C/s,a=U/s):P<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(P),n=E/a,s=U/a),this.set(n,s,a,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wp extends fa{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ed(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends wp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nd extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=a[r+0],f=a[r+1],g=a[r+2],v=a[r+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==f||h!==g){let m=1-o;const p=c*u+l*f+h*g+d*v,_=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),C=Math.atan2(P,p*_);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const M=o*_;if(c=c*m+u*M,l=l*m+f*M,h=h*m+g*M,d=d*m+v*M,m===1-o){const P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=a[r],u=a[r+1],f=a[r+2],g=a[r+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(a/2),u=c(n/2),f=c(s/2),g=c(a/2);switch(r){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(a-l)*f,this._z=(r-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(a-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(r-s)/f,this._x=(a+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ru.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,c=t.w,l=2*(r*s-o*n),h=2*(o*e-a*s),d=2*(a*n-r*e);return this.x=e+c*l+r*d-o*h,this.y=n+c*h+o*l-a*d,this.z=s+c*d+a*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,c=e.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wo.copy(this).projectOnVector(t),this.sub(wo)}reflect(t){return this.sub(wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new B,ru=new Wi;class Xi{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ln):Ln.fromBufferAttribute(a,r),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ma),lr.subVectors(this.max,Ma),Ts.subVectors(t.a,Ma),As.subVectors(t.b,Ma),Cs.subVectors(t.c,Ma),Ti.subVectors(As,Ts),Ai.subVectors(Cs,As),Yi.subVectors(Ts,Cs);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Yi.z,Yi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Yi.z,0,-Yi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Yi.y,Yi.x,0];return!Eo(e,Ts,As,Cs,lr)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,Ts,As,Cs,lr))?!1:(ur.crossVectors(Ti,Ai),e=[ur.x,ur.y,ur.z],Eo(e,Ts,As,Cs,lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new B,new B,new B,new B,new B,new B,new B,new B],Ln=new B,cr=new Xi,Ts=new B,As=new B,Cs=new B,Ti=new B,Ai=new B,Yi=new B,Ma=new B,lr=new B,ur=new B,Ji=new B;function Eo(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Ji.fromArray(i,a);const o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),c=t.dot(Ji),l=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Tp=new Xi,ba=new B,To=new B;class pa{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Tp.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ba.subVectors(t,this.center);const e=ba.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ba,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ba.copy(t.center).add(To)),this.expandByPoint(ba.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new B,Ao=new B,hr=new B,Ci=new B,Co=new B,dr=new B,Ro=new B;class ho{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ao.copy(t).add(e).multiplyScalar(.5),hr.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(Ao);const a=t.distanceTo(e)*.5,r=-this.direction.dot(hr),o=Ci.dot(this.direction),c=-Ci.dot(hr),l=Ci.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*c-o,u=r*o-c,g=a*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+r*u+2*o)+u*(r*d+u+2*c)+l}else u=a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*c)+l;else u=-a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-c),a),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-a,-c),a),f=u*(u+2*c)+l):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-c),a),f=-d*d+u*(u+2*c)+l);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ao).addScaledVector(hr,u),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,a){Co.subVectors(e,t),dr.subVectors(n,t),Ro.crossVectors(Co,dr);let r=this.direction.dot(Ro),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ci.subVectors(this.origin,t);const c=o*this.direction.dot(dr.crossVectors(Ci,dr));if(c<0)return null;const l=o*this.direction.dot(Co.cross(Ci));if(l<0||c+l>r)return null;const h=-o*Ci.dot(Ro);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,s,a,r,o,c,l,h,d,u,f,g,v,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,c,l,h,d,u,f,g,v,m)}set(t,e,n,s,a,r,o,c,l,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),a=1/Rs.setFromMatrixColumn(t,1).length(),r=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const u=r*h,f=r*d,g=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+f*l,e[10]=r*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=r*l,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=r*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u-v*o,e[4]=-r*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=r*h,e[9]=v-u*o,e[2]=-r*l,e[6]=o,e[10]=r*c}else if(t.order==="ZYX"){const u=r*h,f=r*d,g=o*h,v=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=r*c}else if(t.order==="YZX"){const u=r*c,f=r*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=r*c,f=r*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ap,t,Cp)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ri.crossVectors(n,gn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ri.crossVectors(n,gn)),Ri.normalize(),fr.crossVectors(gn,Ri),s[0]=Ri.x,s[4]=fr.x,s[8]=gn.x,s[1]=Ri.y,s[5]=fr.y,s[9]=gn.y,s[2]=Ri.z,s[6]=fr.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],b=n[7],M=n[11],P=n[15],C=s[0],E=s[4],U=s[8],w=s[12],x=s[1],N=s[5],I=s[9],F=s[13],G=s[2],Z=s[6],H=s[10],nt=s[14],q=s[3],ht=s[7],vt=s[11],St=s[15];return a[0]=r*C+o*x+c*G+l*q,a[4]=r*E+o*N+c*Z+l*ht,a[8]=r*U+o*I+c*H+l*vt,a[12]=r*w+o*F+c*nt+l*St,a[1]=h*C+d*x+u*G+f*q,a[5]=h*E+d*N+u*Z+f*ht,a[9]=h*U+d*I+u*H+f*vt,a[13]=h*w+d*F+u*nt+f*St,a[2]=g*C+v*x+m*G+p*q,a[6]=g*E+v*N+m*Z+p*ht,a[10]=g*U+v*I+m*H+p*vt,a[14]=g*w+v*F+m*nt+p*St,a[3]=_*C+b*x+M*G+P*q,a[7]=_*E+b*N+M*Z+P*ht,a[11]=_*U+b*I+M*H+P*vt,a[15]=_*w+b*F+M*nt+P*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+a*c*d-s*l*d-a*o*u+n*l*u+s*o*f-n*c*f)+v*(+e*c*f-e*l*u+a*r*u-s*r*f+s*l*h-a*c*h)+m*(+e*l*d-e*o*f-a*r*d+n*r*f+a*o*h-n*l*h)+p*(-s*o*h-e*c*d+e*o*u+s*r*d-n*r*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=d*m*l-v*u*l+v*c*f-o*m*f-d*c*p+o*u*p,b=g*u*l-h*m*l-g*c*f+r*m*f+h*c*p-r*u*p,M=h*v*l-g*d*l+g*o*f-r*v*f-h*o*p+r*d*p,P=g*d*c-h*v*c-g*o*u+r*v*u+h*o*m-r*d*m,C=e*_+n*b+s*M+a*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/C;return t[0]=_*E,t[1]=(v*u*a-d*m*a-v*s*f+n*m*f+d*s*p-n*u*p)*E,t[2]=(o*m*a-v*c*a+v*s*l-n*m*l-o*s*p+n*c*p)*E,t[3]=(d*c*a-o*u*a-d*s*l+n*u*l+o*s*f-n*c*f)*E,t[4]=b*E,t[5]=(h*m*a-g*u*a+g*s*f-e*m*f-h*s*p+e*u*p)*E,t[6]=(g*c*a-r*m*a-g*s*l+e*m*l+r*s*p-e*c*p)*E,t[7]=(r*u*a-h*c*a+h*s*l-e*u*l-r*s*f+e*c*f)*E,t[8]=M*E,t[9]=(g*d*a-h*v*a-g*n*f+e*v*f+h*n*p-e*d*p)*E,t[10]=(r*v*a-g*o*a+g*n*l-e*v*l-r*n*p+e*o*p)*E,t[11]=(h*o*a-r*d*a-h*n*l+e*d*l+r*n*f-e*o*f)*E,t[12]=P*E,t[13]=(h*v*s-g*d*s+g*n*u-e*v*u-h*n*m+e*d*m)*E,t[14]=(g*o*s-r*v*s-g*n*c+e*v*c+r*n*m-e*o*m)*E,t[15]=(r*d*s-h*o*s+h*n*c-e*d*c-r*n*u+e*o*u)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,c=t.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,c=e._w,l=a+a,h=r+r,d=o+o,u=a*l,f=a*h,g=a*d,v=r*h,m=r*d,p=o*d,_=c*l,b=c*h,M=c*d,P=n.x,C=n.y,E=n.z;return s[0]=(1-(v+p))*P,s[1]=(f+M)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(f-M)*C,s[5]=(1-(u+p))*C,s[6]=(m+_)*C,s[7]=0,s[8]=(g+b)*E,s[9]=(m-_)*E,s[10]=(1-(u+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=Rs.set(s[0],s[1],s[2]).length();const r=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const l=1/a,h=1/r,d=1/o;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=pi){const c=this.elements,l=2*a/(e-t),h=2*a/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(o===pi)f=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===to)f=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=pi){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(r-a),u=(e+t)*l,f=(n+s)*h;let g,v;if(o===pi)g=(r+a)*d,v=-2*d;else if(o===to)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Rs=new B,Dn=new Me,Ap=new B(0,0,0),Cp=new B(1,1,1),Ri=new B,fr=new B,gn=new B,ou=new Me,cu=new Wi;class Cn{constructor(t=0,e=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ye(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ou,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rp=0;const lu=new B,Ps=new Wi,ii=new Me,pr=new B,Sa=new B,Pp=new B,Lp=new Wi,uu=new B(1,0,0),hu=new B(0,1,0),du=new B(0,0,1),fu={type:"added"},Dp={type:"removed"},Ls={type:"childadded",child:null},Po={type:"childremoved",child:null};class Be extends fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new B,e=new Cn,n=new Wi,s=new B(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new ue}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(hu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(hu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Sa,pr,this.up):ii.lookAt(pr,Sa,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(ii),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dp),Po.child=t,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,Pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,Lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];a(t.shapes,d)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(t.materials,this.material[c]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(t.animations,c))}}if(e){const o=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new B(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new B,si=new B,Lo=new B,ai=new B,Ds=new B,Is=new B,pu=new B,Do=new B,Io=new B,Uo=new B,No=new Ae,zo=new Ae,ko=new Ae;class An{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){In.subVectors(s,e),si.subVectors(n,e),Lo.subVectors(t,e);const r=In.dot(In),o=In.dot(si),c=In.dot(Lo),l=si.dot(si),h=si.dot(Lo),d=r*l-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(r*h-o*c)*u;return a.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,a,r,o,c){return this.getBarycoord(t,e,n,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ai.x),c.addScaledVector(r,ai.y),c.addScaledVector(o,ai.z),c)}static getInterpolatedAttribute(t,e,n,s,a,r){return No.setScalar(0),zo.setScalar(0),ko.setScalar(0),No.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,n),ko.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(No,a.x),r.addScaledVector(zo,a.y),r.addScaledVector(ko,a.z),r}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),si.subVectors(t,e),In.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),si.subVectors(this.a,this.b),In.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;Ds.subVectors(s,n),Is.subVectors(a,n),Do.subVectors(t,n);const c=Ds.dot(Do),l=Is.dot(Do);if(c<=0&&l<=0)return e.copy(n);Io.subVectors(t,s);const h=Ds.dot(Io),d=Is.dot(Io);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Ds,r);Uo.subVectors(t,a);const f=Ds.dot(Uo),g=Is.dot(Uo);if(g>=0&&f<=g)return e.copy(a);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Is,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return pu.subVectors(a,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(pu,o);const p=1/(m+v+u);return r=v*p,o=u*p,e.copy(n).addScaledVector(Ds,r).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=Cl(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Fo(r,a,t+1/3),this.g=Fo(r,a,t),this.b=Fo(r,a,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ve.fromWorkingColorSpace(an.copy(this),t),Math.round(Ye(an.r*255,0,255))*65536+Math.round(Ye(an.g*255,0,255))*256+Math.round(Ye(an.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(an.copy(this),e);const n=an.r,s=an.g,a=an.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case n:c=(s-a)/d+(s<a?6:0);break;case s:c=(a-n)/d+2;break;case a:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=ke){ve.fromWorkingColorSpace(an.copy(this),t);const e=an.r,n=an.g,s=an.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(mr);const n=qa(Pi.h,mr.h,e),s=qa(Pi.s,mr.s,e),a=qa(Pi.l,mr.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ee;ee.NAMES=id;let Ip=0;class bi extends fa{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=mi(),this.name="",this.blending=ta,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=vc,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gc&&(n.blendSrc=this.blendSrc),this.blendDst!==vc&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qt extends bi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new B,gr=new Ut;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),a=we(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}}class sd extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ad extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Up=0;const wn=new Me,Oo=new Be,Us=new B,vn=new Xi,wa=new Xi,qe=new B;class Ze extends fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(td(t)?ad:sd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ue().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,s=e.count;n<s;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];vn.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];wa.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(vn.min,wa.min),vn.expandByPoint(qe),qe.addVectors(vn.max,wa.max),vn.expandByPoint(qe)):(vn.expandByPoint(wa.min),vn.expandByPoint(wa.max))}vn.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)qe.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)qe.fromBufferAttribute(o,l),c&&(Us.fromBufferAttribute(t,l),qe.add(Us)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new B,c[U]=new B;const l=new B,h=new B,d=new B,u=new Ut,f=new Ut,g=new Ut,v=new B,m=new B;function p(U,w,x){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,x),u.fromBufferAttribute(a,U),f.fromBufferAttribute(a,w),g.fromBufferAttribute(a,x),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[U].add(v),o[w].add(v),o[x].add(v),c[U].add(m),c[w].add(m),c[x].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let U=0,w=_.length;U<w;++U){const x=_[U],N=x.start,I=x.count;for(let F=N,G=N+I;F<G;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new B,M=new B,P=new B,C=new B;function E(U){P.fromBufferAttribute(s,U),C.copy(P);const w=o[U];b.copy(w),b.sub(P.multiplyScalar(P.dot(w))).normalize(),M.crossVectors(C,w);const N=M.dot(c[U])<0?-1:1;r.setXYZW(U,b.x,b.y,b.z,N)}for(let U=0,w=_.length;U<w;++U){const x=_[U],N=x.start,I=x.count;for(let F=N,G=N+I;F<G;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new B,a=new B,r=new B,o=new B,c=new B,l=new B,h=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),a.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new en(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const a=t.morphAttributes;for(const l in a){const h=[],d=a[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mu=new Me,Ki=new ho,vr=new pa,gu=new B,xr=new B,_r=new B,yr=new B,Bo=new B,Mr=new B,vu=new B,br=new B;class J extends Be{constructor(t=new Ze,e=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){Mr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],d=a[c];h!==0&&(Bo.fromBufferAttribute(d,t),r?Mr.addScaledVector(Bo,h):Mr.addScaledVector(Bo.sub(e),h))}e.add(Mr)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(a),Ki.copy(t.ray).recast(t.near),!(vr.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(vr,gu)===null||Ki.origin.distanceToSquared(gu)>(t.far-t.near)**2))&&(mu.copy(a).invert(),Ki.copy(t.ray).applyMatrix4(mu),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,P=b;M<P;M+=3){const C=o.getX(M),E=o.getX(M+1),U=o.getX(M+2);s=Sr(this,p,t,n,l,h,d,C,E,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=Sr(this,r,t,n,l,h,d,_,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=r[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,P=b;M<P;M+=3){const C=M,E=M+1,U=M+2;s=Sr(this,p,t,n,l,h,d,C,E,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,b=m+1,M=m+2;s=Sr(this,r,t,n,l,h,d,_,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Np(i,t,e,n,s,a,r,o){let c;if(t.side===Ke?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,t.side===Kn,o),c===null)return null;br.copy(o),br.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(br);return l<e.near||l>e.far?null:{distance:l,point:br.clone(),object:i}}function Sr(i,t,e,n,s,a,r,o,c,l){i.getVertexPosition(o,xr),i.getVertexPosition(c,_r),i.getVertexPosition(l,yr);const h=Np(i,t,e,n,xr,_r,yr,vu);if(h){const d=new B;An.getBarycoord(vu,xr,_r,yr,d),s&&(h.uv=An.getInterpolatedAttribute(s,o,c,l,d,new Ut)),a&&(h.uv1=An.getInterpolatedAttribute(a,o,c,l,d,new Ut)),r&&(h.normal=An.getInterpolatedAttribute(r,o,c,l,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new B,materialIndex:0};An.getNormal(xr,_r,yr,u.normal),h.face=u,h.barycoord=d}return h}class Kt extends Ze{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2));function g(v,m,p,_,b,M,P,C,E,U,w){const x=M/E,N=P/U,I=M/2,F=P/2,G=C/2,Z=E+1,H=U+1;let nt=0,q=0;const ht=new B;for(let vt=0;vt<H;vt++){const St=vt*N-F;for(let Vt=0;Vt<Z;Vt++){const et=Vt*x-I;ht[v]=et*_,ht[m]=St*b,ht[p]=G,l.push(ht.x,ht.y,ht.z),ht[v]=0,ht[m]=0,ht[p]=C>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(Vt/E),d.push(1-vt/U),nt+=1}}for(let vt=0;vt<U;vt++)for(let St=0;St<E;St++){const Vt=u+St+Z*vt,et=u+St+Z*(vt+1),D=u+(St+1)+Z*(vt+1),W=u+(St+1)+Z*vt;c.push(Vt,et,W),c.push(et,D,W),q+=6}o.addGroup(f,q,w),f+=q,u+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function la(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function hn(i){const t={};for(let e=0;e<i.length;e++){const n=la(i[e]);for(const s in n)t[s]=n[s]}return t}function zp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const kp={clone:la,merge:hn};var Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends bi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=la(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class od extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new B,xu=new Ut,_u=new Ut;class Je extends od{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,xu,_u),e.subVectors(_u,xu)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ns=-90,zs=1;class Bp extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(Ns,zs,t,e);s.layers=this.layers,this.add(s);const a=new Je(Ns,zs,t,e);a.layers=this.layers,this.add(a);const r=new Je(Ns,zs,t,e);r.layers=this.layers,this.add(r);const o=new Je(Ns,zs,t,e);o.layers=this.layers,this.add(o);const c=new Je(Ns,zs,t,e);c.layers=this.layers,this.add(c);const l=new Je(Ns,zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,c]=e;for(const l of e)this.remove(l);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cd extends on{constructor(t,e,n,s,a,r,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:aa,super(t,e,n,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vp extends vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:jn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),a=new _i({name:"CubemapFromEquirect",uniforms:la(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Vi});a.uniforms.tEquirect.value=e;const r=new J(s,a),o=e.minFilter;return e.minFilter===hs&&(e.minFilter=jn),new Bp(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}const Vo=new B,Gp=new B,Hp=new ue;class ss{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vo.subVectors(n,e).cross(Gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hp.getNormalMatrix(t),s=this.coplanarPoint(Vo).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new pa,wr=new B;class Pl{constructor(t=new ss,e=new ss,n=new ss,s=new ss,a=new ss,r=new ss){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){const n=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],b=s[14],M=s[15];if(n[0].setComponents(c-a,u-l,m-f,M-p).normalize(),n[1].setComponents(c+a,u+l,m+f,M+p).normalize(),n[2].setComponents(c+r,u+h,m+g,M+_).normalize(),n[3].setComponents(c-r,u-h,m-g,M-_).normalize(),n[4].setComponents(c-o,u-d,m-v,M-b).normalize(),e===pi)n[5].setComponents(c+o,u+d,m+v,M+b).normalize();else if(e===to)n[5].setComponents(o,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(wr.x=s.normal.x>0?t.max.x:t.min.x,wr.y=s.normal.y>0?t.max.y:t.min.y,wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ld(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Wp(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class xn extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*u-r;for(let b=0;b<l;b++){const M=b*d-a;g.push(M,-_,0),v.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){const b=_+l*p,M=_+l*(p+1),P=_+1+l*(p+1),C=_+1+l*p;f.push(b,M,C),f.push(M,P,C)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,t0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s0=`#ifdef USE_IRIDESCENCE
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
#endif`,a0=`#ifdef USE_BUMPMAP
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,p0=`#define PI 3.141592653589793
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
} // validated`,m0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M0="gl_FragColor = linearToOutputTexel( gl_FragColor );",b0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D0=`#ifdef USE_GRADIENTMAP
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
}`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
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
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G0=`PhysicalMaterial material;
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
#endif`,H0=`struct PhysicalMaterial {
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
}`,W0=`
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,Zm=`#define DISTANCE
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
}`,Qm=`#define DISTANCE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,dg=`#define PHONG
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
}`,fg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,vg=`#define TOON
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
}`,xg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Mg=`uniform vec3 color;
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
}`,bg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:Xp,alphahash_pars_fragment:qp,alphamap_fragment:jp,alphamap_pars_fragment:$p,alphatest_fragment:Yp,alphatest_pars_fragment:Jp,aomap_fragment:Kp,aomap_pars_fragment:Zp,batching_pars_vertex:Qp,batching_vertex:t0,begin_vertex:e0,beginnormal_vertex:n0,bsdfs:i0,iridescence_fragment:s0,bumpmap_pars_fragment:a0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:l0,color_fragment:u0,color_pars_fragment:h0,color_pars_vertex:d0,color_vertex:f0,common:p0,cube_uv_reflection_fragment:m0,defaultnormal_vertex:g0,displacementmap_pars_vertex:v0,displacementmap_vertex:x0,emissivemap_fragment:_0,emissivemap_pars_fragment:y0,colorspace_fragment:M0,colorspace_pars_fragment:b0,envmap_fragment:S0,envmap_common_pars_fragment:w0,envmap_pars_fragment:E0,envmap_pars_vertex:T0,envmap_physical_pars_fragment:k0,envmap_vertex:A0,fog_vertex:C0,fog_pars_vertex:R0,fog_fragment:P0,fog_pars_fragment:L0,gradientmap_pars_fragment:D0,lightmap_pars_fragment:I0,lights_lambert_fragment:U0,lights_lambert_pars_fragment:N0,lights_pars_begin:z0,lights_toon_fragment:F0,lights_toon_pars_fragment:O0,lights_phong_fragment:B0,lights_phong_pars_fragment:V0,lights_physical_fragment:G0,lights_physical_pars_fragment:H0,lights_fragment_begin:W0,lights_fragment_maps:X0,lights_fragment_end:q0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:Y0,logdepthbuf_vertex:J0,map_fragment:K0,map_pars_fragment:Z0,map_particle_fragment:Q0,map_particle_pars_fragment:tm,metalnessmap_fragment:em,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:am,morphtarget_pars_vertex:rm,morphtarget_vertex:om,normal_fragment_begin:cm,normal_fragment_maps:lm,normal_pars_fragment:um,normal_pars_vertex:hm,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:vm,opaque_fragment:xm,packing:_m,premultiplied_alpha_fragment:ym,project_vertex:Mm,dithering_fragment:bm,dithering_pars_fragment:Sm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Am,shadowmap_vertex:Cm,shadowmask_pars_fragment:Rm,skinbase_vertex:Pm,skinning_pars_vertex:Lm,skinning_vertex:Dm,skinnormal_vertex:Im,specularmap_fragment:Um,specularmap_pars_fragment:Nm,tonemapping_fragment:zm,tonemapping_pars_fragment:km,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:Vm,uv_vertex:Gm,worldpos_vertex:Hm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:jm,cube_vert:$m,cube_frag:Ym,depth_vert:Jm,depth_frag:Km,distanceRGBA_vert:Zm,distanceRGBA_frag:Qm,equirect_vert:tg,equirect_frag:eg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:ag,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:cg,meshmatcap_frag:lg,meshnormal_vert:ug,meshnormal_frag:hg,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:vg,points_vert:xg,points_frag:_g,shadow_vert:yg,shadow_frag:Mg,sprite_vert:bg,sprite_frag:Sg},Ft={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},qn={basic:{uniforms:hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ee(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:hn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:hn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:hn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ee(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:hn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:hn([Ft.points,Ft.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:hn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:hn([Ft.common,Ft.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:hn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:hn([Ft.sprite,Ft.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:hn([Ft.common,Ft.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:hn([Ft.lights,Ft.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};qn.physical={uniforms:hn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Er={r:0,b:0,g:0},Qi=new Cn,wg=new Me;function Eg(i,t,e,n,s,a,r){const o=new ee(0);let c=a===!0?0:1,l,h,d=null,u=0,f=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?e:t).get(b)),b}function v(_){let b=!1;const M=g(_);M===null?p(o,c):M&&M.isColor&&(p(M,1),b=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,b){const M=g(b);M&&(M.isCubeTexture||M.mapping===oo)?(h===void 0&&(h=new J(new Kt(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:la(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qi.copy(b.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Qi)),h.material.toneMapped=ve.getTransfer(M.colorSpace)!==Te,(d!==M||u!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new J(new xn(2,2),new _i({name:"BackgroundMaterial",uniforms:la(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ve.getTransfer(M.colorSpace)!==Te,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,b){_.getRGB(Er,rd(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,b,r)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:v,addToRenderList:m}}function Tg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(x,N,I,F,G){let Z=!1;const H=d(F,I,N);a!==H&&(a=H,l(a.object)),Z=f(x,F,I,G),Z&&g(x,F,I,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,M(x,N,I,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,N,I){const F=I.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let Z=G[N.id];Z===void 0&&(Z={},G[N.id]=Z);let H=Z[F];return H===void 0&&(H=u(c()),Z[F]=H),H}function u(x){const N=[],I=[],F=[];for(let G=0;G<e;G++)N[G]=0,I[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,N,I,F){const G=a.attributes,Z=N.attributes;let H=0;const nt=I.getAttributes();for(const q in nt)if(nt[q].location>=0){const vt=G[q];let St=Z[q];if(St===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(St=x.instanceColor)),vt===void 0||vt.attribute!==St||St&&vt.data!==St.data)return!0;H++}return a.attributesNum!==H||a.index!==F}function g(x,N,I,F){const G={},Z=N.attributes;let H=0;const nt=I.getAttributes();for(const q in nt)if(nt[q].location>=0){let vt=Z[q];vt===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(vt=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(vt=x.instanceColor));const St={};St.attribute=vt,vt&&vt.data&&(St.data=vt.data),G[q]=St,H++}a.attributes=G,a.attributesNum=H,a.index=F}function v(){const x=a.newAttributes;for(let N=0,I=x.length;N<I;N++)x[N]=0}function m(x){p(x,0)}function p(x,N){const I=a.newAttributes,F=a.enabledAttributes,G=a.attributeDivisors;I[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),G[x]!==N&&(i.vertexAttribDivisor(x,N),G[x]=N)}function _(){const x=a.newAttributes,N=a.enabledAttributes;for(let I=0,F=N.length;I<F;I++)N[I]!==x[I]&&(i.disableVertexAttribArray(I),N[I]=0)}function b(x,N,I,F,G,Z,H){H===!0?i.vertexAttribIPointer(x,N,I,G,Z):i.vertexAttribPointer(x,N,I,F,G,Z)}function M(x,N,I,F){v();const G=F.attributes,Z=I.getAttributes(),H=N.defaultAttributeValues;for(const nt in Z){const q=Z[nt];if(q.location>=0){let ht=G[nt];if(ht===void 0&&(nt==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),nt==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){const vt=ht.normalized,St=ht.itemSize,Vt=t.get(ht);if(Vt===void 0)continue;const et=Vt.buffer,D=Vt.type,W=Vt.bytesPerElement,tt=D===i.INT||D===i.UNSIGNED_INT||ht.gpuType===bl;if(ht.isInterleavedBufferAttribute){const ut=ht.data,wt=ut.stride,_t=ht.offset;if(ut.isInstancedInterleavedBuffer){for(let It=0;It<q.locationSize;It++)p(q.location+It,ut.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let It=0;It<q.locationSize;It++)m(q.location+It);i.bindBuffer(i.ARRAY_BUFFER,et);for(let It=0;It<q.locationSize;It++)b(q.location+It,St/q.locationSize,D,vt,wt*W,(_t+St/q.locationSize*It)*W,tt)}else{if(ht.isInstancedBufferAttribute){for(let ut=0;ut<q.locationSize;ut++)p(q.location+ut,ht.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ut=0;ut<q.locationSize;ut++)m(q.location+ut);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ut=0;ut<q.locationSize;ut++)b(q.location+ut,St/q.locationSize,D,vt,St*W,St/q.locationSize*ut*W,tt)}}else if(H!==void 0){const vt=H[nt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(q.location,vt);break;case 3:i.vertexAttrib3fv(q.location,vt);break;case 4:i.vertexAttrib4fv(q.location,vt);break;default:i.vertexAttrib1fv(q.location,vt)}}}}_()}function P(){U();for(const x in n){const N=n[x];for(const I in N){const F=N[I];for(const G in F)h(F[G].object),delete F[G];delete N[I]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;const N=n[x.id];for(const I in N){const F=N[I];for(const G in F)h(F[G].object),delete F[G];delete N[I]}delete n[x.id]}function E(x){for(const N in n){const I=n[N];if(I[x.id]===void 0)continue;const F=I[x.id];for(const G in F)h(F[G].object),delete F[G];delete I[x.id]}}function U(){w(),r=!0,a!==s&&(a=s,l(a.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Ag(i,t,e){let n;function s(l){n=l}function a(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cg(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==Bn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const U=E===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==$n&&!U)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:P,maxSamples:C}}function Rg(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new ss,o=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):l();else{const _=a?0:n,b=_*4;let M=p.clippingState||null;c.value=M,M=h(g,u,b,f);for(let P=0;P!==b;++P)M[P]=e[P];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==v;++b,M+=4)r.copy(d[b]).applyMatrix4(_,o),r.normal.toArray(m,M),m[M+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Pg(i){let t=new WeakMap;function e(r,o){return o===Ec?r.mapping=aa:o===Tc&&(r.mapping=ra),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Ec||o===Tc)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Vp(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class ud extends od{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Js=4,yu=[.125,.215,.35,.446,.526,.582],os=20,Go=new ud,Mu=new ee;let Ho=null,Wo=0,Xo=0,qo=!1;const as=(1+Math.sqrt(5))/2,ks=1/as,bu=[new B(-as,ks,0),new B(as,ks,0),new B(-ks,0,as),new B(ks,0,as),new B(0,as,-ks),new B(0,as,ks),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Su{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ho=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho,Wo,Xo),this._renderer.xr.enabled=qo,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===aa||t.mapping===ra?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ho=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:nr,format:Bn,colorSpace:da,depthBuffer:!1},s=wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(a)),this._blurMaterial=Dg(a,t,e)}return s}_compileMaterial(t){const e=new J(this._lodPlanes[0],t);this._renderer.compile(e,Go)}_sceneToCubeUV(t,e,n,s){const o=new Je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Mu),h.toneMapping=Gi,h.autoClear=!1;const f=new qt({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),g=new J(new Kt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Mu),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;Tr(s,_*b,p>2?b:0,b,b),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===aa||t.mapping===ra;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new J(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const c=this._cubeSize;Tr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=bu[(s-a-1)%bu.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new J(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*os-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):os;m>os&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const p=[];let _=0;for(let E=0;E<os;++E){const U=E/v,w=Math.exp(-U*U/2);p.push(w),E===0?_+=w:E<m&&(_+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const M=this._sizeLods[s],P=3*M*(s>b-Js?s-b+Js:0),C=4*(this._cubeSize-M);Tr(e,P,C,3*M,2*M),c.setRenderTarget(e),c.render(d,Go)}}function Lg(i){const t=[],e=[],n=[];let s=i;const a=i-Js+1+yu.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let c=1/o;r>i-Js?c=yu[r-i+Js-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let C=0;C<f;C++){const E=C%3*2/3-1,U=C>2?0:-1,w=[E,U,0,E+2/3,U,0,E+2/3,U+1,0,E,U,0,E+2/3,U+1,0,E,U+1,0];_.set(w,v*g*C),b.set(u,m*g*C);const x=[C,C,C,C,C,C];M.set(x,p*g*C)}const P=new Ze;P.setAttribute("position",new en(_,v)),P.setAttribute("uv",new en(b,m)),P.setAttribute("faceIndex",new en(M,p)),t.push(P),s>Js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wu(i,t,e){const n=new vs(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dg(i,t,e){const n=new Float32Array(os),s=new B(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Eu(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Tu(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ll(){return`

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
	`}function Ig(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ec||c===Tc,h=c===aa||c===ra;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Su(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Su(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Ug(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ba("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,t,e,n){const s={},a=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",r),delete s[u.id];const f=a.get(u);f&&(t.remove(f),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let b=0,M=_.length;b<M;b+=3){const P=_[b+0],C=_[b+1],E=_[b+2];u.push(P,C,C,E,E,P)}}else if(g!==void 0){const _=g.array;v=g.version;for(let b=0,M=_.length/3-1;b<M;b+=3){const P=b+0,C=b+1,E=b+2;u.push(P,C,C,E,E,P)}}else return;const m=new(td(u)?ad:sd)(u,1);m.version=v;const p=a.get(d);p&&t.remove(p),a.set(d,m)}function h(d){const u=a.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function zg(i,t,e){let n;function s(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function c(u,f){i.drawElements(n,f,a,u*r),e.update(f,n,1)}function l(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,a,u*r,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/r,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,a,u,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function kg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fg(i,t,e){const n=new WeakMap,s=new Ae;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let x=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let P=o.attributes.position.count*M,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const E=new Float32Array(P*C*4*d),U=new nd(E,P,C,d);U.type=$n,U.needsUpdate=!0;const w=M*4;for(let N=0;N<d;N++){const I=p[N],F=_[N],G=b[N],Z=P*C*4*N;for(let H=0;H<I.count;H++){const nt=H*w;g===!0&&(s.fromBufferAttribute(I,H),E[Z+nt+0]=s.x,E[Z+nt+1]=s.y,E[Z+nt+2]=s.z,E[Z+nt+3]=0),v===!0&&(s.fromBufferAttribute(F,H),E[Z+nt+4]=s.x,E[Z+nt+5]=s.y,E[Z+nt+6]=s.z,E[Z+nt+7]=0),m===!0&&(s.fromBufferAttribute(G,H),E[Z+nt+8]=s.x,E[Z+nt+9]=s.y,E[Z+nt+10]=s.z,E[Z+nt+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:U,size:new Ut(P,C)},n.set(o,u),o.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function Og(i,t,e,n){let s=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:r}}class hd extends on{constructor(t,e,n,s,a,r,o,c,l,h=ea){if(h!==ea&&h!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ea&&(n=gs),n===void 0&&h===ca&&(n=oa),super(null,s,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const dd=new on,Au=new hd(1,1),fd=new nd,pd=new Ep,md=new cd,Cu=[],Ru=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Du=new Float32Array(4);function ma(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Cu[s];if(a===void 0&&(a=new Float32Array(s),Cu[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fo(i,t){let e=Ru[t];e===void 0&&(e=new Int32Array(t),Ru[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function Wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),Xe(e,n)}}function Xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Lu.set(n),i.uniformMatrix3fv(this.addr,!1,Lu),Xe(e,n)}}function qg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Pu.set(n),i.uniformMatrix4fv(this.addr,!1,Pu),Xe(e,n)}}function jg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Kg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function ev(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Au.compareFunction=Qh,a=Au):a=dd,e.setTexture2D(t||a,s)}function nv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pd,s)}function iv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||md,s)}function sv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fd,s)}function av(i){switch(i){case 5126:return Bg;case 35664:return Vg;case 35665:return Gg;case 35666:return Hg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return jg;case 35667:case 35671:return $g;case 35668:case 35672:return Yg;case 35669:case 35673:return Jg;case 5125:return Kg;case 36294:return Zg;case 36295:return Qg;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return sv}}function rv(i,t){i.uniform1fv(this.addr,t)}function ov(i,t){const e=ma(t,this.size,2);i.uniform2fv(this.addr,e)}function cv(i,t){const e=ma(t,this.size,3);i.uniform3fv(this.addr,e)}function lv(i,t){const e=ma(t,this.size,4);i.uniform4fv(this.addr,e)}function uv(i,t){const e=ma(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hv(i,t){const e=ma(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dv(i,t){const e=ma(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fv(i,t){i.uniform1iv(this.addr,t)}function pv(i,t){i.uniform2iv(this.addr,t)}function mv(i,t){i.uniform3iv(this.addr,t)}function gv(i,t){i.uniform4iv(this.addr,t)}function vv(i,t){i.uniform1uiv(this.addr,t)}function xv(i,t){i.uniform2uiv(this.addr,t)}function _v(i,t){i.uniform3uiv(this.addr,t)}function yv(i,t){i.uniform4uiv(this.addr,t)}function Mv(i,t,e){const n=this.cache,s=t.length,a=fo(e,s);We(n,a)||(i.uniform1iv(this.addr,a),Xe(n,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||dd,a[r])}function bv(i,t,e){const n=this.cache,s=t.length,a=fo(e,s);We(n,a)||(i.uniform1iv(this.addr,a),Xe(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||pd,a[r])}function Sv(i,t,e){const n=this.cache,s=t.length,a=fo(e,s);We(n,a)||(i.uniform1iv(this.addr,a),Xe(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||md,a[r])}function wv(i,t,e){const n=this.cache,s=t.length,a=fo(e,s);We(n,a)||(i.uniform1iv(this.addr,a),Xe(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||fd,a[r])}function Ev(i){switch(i){case 5126:return rv;case 35664:return ov;case 35665:return cv;case 35666:return lv;case 35674:return uv;case 35675:return hv;case 35676:return dv;case 5124:case 35670:return fv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return vv;case 36294:return xv;case 36295:return _v;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return wv}}class Tv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=av(e.type)}}class Av{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ev(e.type)}}class Cv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function Iu(i,t){i.seq.push(t),i.map[t.id]=t}function Rv(i,t,e){const n=i.name,s=n.length;for(jo.lastIndex=0;;){const a=jo.exec(n),r=jo.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){Iu(e,l===void 0?new Tv(o,i,t):new Av(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Cv(o),Iu(e,d)),e=d}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);Rv(a,r,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Uu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Pv=37297;let Lv=0;function Dv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Nu=new ue;function Iv(i){ve._getMatrix(Nu,ve.workingColorSpace,i);const t=`mat3( ${Nu.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case uo:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Dv(i.getShaderSource(t),r)}else return s}function Uv(i,t){const e=Iv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Nv(i,t){let e;switch(t){case kf:e="Linear";break;case Ff:e="Reinhard";break;case Of:e="Cineon";break;case Bf:e="ACESFilmic";break;case Gf:e="AgX";break;case Hf:e="Neutral";break;case Vf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ar=new B;function zv(){ve.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function Fv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ov(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function Va(i){return i!==""}function ku(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Bv,Gv)}const Vv=new Map;function Gv(i,t){let e=de[t];if(e===void 0){const n=Vv.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const Hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(i){return i.replace(Hv,Wv)}function Wv(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Bu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Xv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function qv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case aa:case ra:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ra:t="ENVMAP_MODE_REFRACTION";break}return t}function $v(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Nf:t="ENVMAP_BLENDING_MIX";break;case zf:t="ENVMAP_BLENDING_ADD";break}return t}function Yv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jv(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const c=Xv(e),l=qv(e),h=jv(e),d=$v(e),u=Yv(e),f=kv(e),g=Fv(a),v=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Va).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(m=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?de.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Uv("linearToOutputTexel",e.outputColorSpace),zv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Va).join(`
`)),r=el(r),r=ku(r,e),r=Fu(r,e),o=el(o),o=ku(o,e),o=Fu(o,e),r=Ou(r),o=Ou(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=_+m+r,M=_+p+o,P=Uu(s,s.VERTEX_SHADER,b),C=Uu(s,s.FRAGMENT_SHADER,M);s.attachShader(v,P),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(N){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(v).trim(),F=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(C).trim();let Z=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,C);else{const nt=zu(s,P,"vertex"),q=zu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+nt+`
`+q)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||G==="")&&(H=!1);H&&(N.diagnostics={runnable:Z,programLog:I,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(P),s.deleteShader(C),U=new $r(s,v),w=Ov(s,v)}let U;this.getUniforms=function(){return U===void 0&&E(this),U};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Pv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}let Kv=0;class Zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qv(t),e.set(t,n)),n}}class Qv{constructor(t){this.id=Kv++,this.code=t,this.usedTimes=0}}function tx(i,t,e,n,s,a,r){const o=new Rl,c=new Zv,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,x,N,I,F){const G=I.fog,Z=F.geometry,H=w.isMeshStandardMaterial?I.environment:null,nt=(w.isMeshStandardMaterial?e:t).get(w.envMap||H),q=nt&&nt.mapping===oo?nt.image.height:null,ht=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const vt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=vt!==void 0?vt.length:0;let Vt=0;Z.morphAttributes.position!==void 0&&(Vt=1),Z.morphAttributes.normal!==void 0&&(Vt=2),Z.morphAttributes.color!==void 0&&(Vt=3);let et,D,W,tt;if(ht){const Gt=qn[ht];et=Gt.vertexShader,D=Gt.fragmentShader}else et=w.vertexShader,D=w.fragmentShader,c.update(w),W=c.getVertexShaderID(w),tt=c.getFragmentShaderID(w);const ut=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),_t=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,Qt=!!w.map,Wt=!!w.matcap,mt=!!nt,z=!!w.aoMap,Y=!!w.lightMap,it=!!w.bumpMap,ft=!!w.normalMap,gt=!!w.displacementMap,Nt=!!w.emissiveMap,Ct=!!w.metalnessMap,L=!!w.roughnessMap,S=w.anisotropy>0,X=w.clearcoat>0,rt=w.dispersion>0,dt=w.iridescence>0,lt=w.sheen>0,zt=w.transmission>0,Pt=S&&!!w.anisotropyMap,kt=X&&!!w.clearcoatMap,oe=X&&!!w.clearcoatNormalMap,A=X&&!!w.clearcoatRoughnessMap,R=dt&&!!w.iridescenceMap,K=dt&&!!w.iridescenceThicknessMap,pt=lt&&!!w.sheenColorMap,ot=lt&&!!w.sheenRoughnessMap,Mt=!!w.specularMap,yt=!!w.specularColorMap,Dt=!!w.specularIntensityMap,V=zt&&!!w.transmissionMap,bt=zt&&!!w.thicknessMap,k=!!w.gradientMap,O=!!w.alphaMap,Q=w.alphaTest>0,ct=!!w.alphaHash,xt=!!w.extensions;let Et=Gi;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Et=i.toneMapping);const Jt={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:et,fragmentShader:D,defines:w.defines,customVertexShaderID:W,customFragmentShaderID:tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:_t,instancingColor:_t&&F.instanceColor!==null,instancingMorph:_t&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:da,alphaToCoverage:!!w.alphaToCoverage,map:Qt,matcap:Wt,envMap:mt,envMapMode:mt&&nt.mapping,envMapCubeUVHeight:q,aoMap:z,lightMap:Y,bumpMap:it,normalMap:ft,displacementMap:u&&gt,emissiveMap:Nt,normalMapObjectSpace:ft&&w.normalMapType===jf,normalMapTangentSpace:ft&&w.normalMapType===lo,metalnessMap:Ct,roughnessMap:L,anisotropy:S,anisotropyMap:Pt,clearcoat:X,clearcoatMap:kt,clearcoatNormalMap:oe,clearcoatRoughnessMap:A,dispersion:rt,iridescence:dt,iridescenceMap:R,iridescenceThicknessMap:K,sheen:lt,sheenColorMap:pt,sheenRoughnessMap:ot,specularMap:Mt,specularColorMap:yt,specularIntensityMap:Dt,transmission:zt,transmissionMap:V,thicknessMap:bt,gradientMap:k,opaque:w.transparent===!1&&w.blending===ta&&w.alphaToCoverage===!1,alphaMap:O,alphaTest:Q,alphaHash:ct,combine:w.combine,mapUv:Qt&&v(w.map.channel),aoMapUv:z&&v(w.aoMap.channel),lightMapUv:Y&&v(w.lightMap.channel),bumpMapUv:it&&v(w.bumpMap.channel),normalMapUv:ft&&v(w.normalMap.channel),displacementMapUv:gt&&v(w.displacementMap.channel),emissiveMapUv:Nt&&v(w.emissiveMap.channel),metalnessMapUv:Ct&&v(w.metalnessMap.channel),roughnessMapUv:L&&v(w.roughnessMap.channel),anisotropyMapUv:Pt&&v(w.anisotropyMap.channel),clearcoatMapUv:kt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:R&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:ot&&v(w.sheenRoughnessMap.channel),specularMapUv:Mt&&v(w.specularMap.channel),specularColorMapUv:yt&&v(w.specularColorMap.channel),specularIntensityMapUv:Dt&&v(w.specularIntensityMap.channel),transmissionMapUv:V&&v(w.transmissionMap.channel),thicknessMapUv:bt&&v(w.thicknessMap.channel),alphaMapUv:O&&v(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ft||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Qt||O),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:wt,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Vt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Qt&&w.map.isVideoTexture===!0&&ve.getTransfer(w.map.colorSpace)===Te,decodeVideoTextureEmissive:Nt&&w.emissiveMap.isVideoTexture===!0&&ve.getTransfer(w.emissiveMap.colorSpace)===Te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_e,flipSided:w.side===Ke,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:xt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&w.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function p(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)x.push(N),x.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(_(x,w),b(x,w),x.push(i.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function _(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function b(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),w.push(o.mask)}function M(w){const x=g[w.type];let N;if(x){const I=qn[x];N=kp.clone(I.uniforms)}else N=w.uniforms;return N}function P(w,x){let N;for(let I=0,F=h.length;I<F;I++){const G=h[I];if(G.cacheKey===x){N=G,++N.usedTimes;break}}return N===void 0&&(N=new Jv(i,x,w,a),h.push(N)),N}function C(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function E(w){c.remove(w)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:C,releaseShaderCache:E,programs:h,dispose:U}}function ex(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function nx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gu(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(d,u,f,g,v,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,u,f,g,v,m){const p=r(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(d,u,f,g,v,m){const p=r(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||nx),n.length>1&&n.sort(u||Vu),s.length>1&&s.sort(u||Vu)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function ix(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new Gu,i.set(n,[r])):s>=a.length?(r=new Gu,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function sx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new ee};break;case"SpotLight":e={position:new B,direction:new B,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function ax(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rx=0;function ox(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cx(i){const t=new sx,e=ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const s=new B,a=new Me,r=new Me;function o(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,b=0,M=0,P=0,C=0,E=0;l.sort(ox);for(let w=0,x=l.length;w<x;w++){const N=l[w],I=N.color,F=N.intensity,G=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=I.r*F,d+=I.g*F,u+=I.b*F;else if(N.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(N.sh.coefficients[H],F);E++}else if(N.isDirectionalLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const nt=N.shadow,q=e.get(N);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=N.shadow.matrix,_++}n.directional[f]=H,f++}else if(N.isSpotLight){const H=t.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(I).multiplyScalar(F),H.distance=G,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,n.spot[v]=H;const nt=N.shadow;if(N.map&&(n.spotLightMap[P]=N.map,P++,nt.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[v]=nt.matrix,N.castShadow){const q=e.get(N);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=Z,M++}v++}else if(N.isRectAreaLight){const H=t.get(N);H.color.copy(I).multiplyScalar(F),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=H,m++}else if(N.isPointLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){const nt=N.shadow,q=e.get(N);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=H,g++}else if(N.isHemisphereLight){const H=t.get(N);H.skyColor.copy(N.color).multiplyScalar(F),H.groundColor.copy(N.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==_||U.numPointShadows!==b||U.numSpotShadows!==M||U.numSpotMaps!==P||U.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,U.directionalLength=f,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=_,U.numPointShadows=b,U.numSpotShadows=M,U.numSpotMaps=P,U.numLightProbes=E,n.version=rx++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const b=l[p];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),r.identity(),a.copy(b.matrixWorld),a.premultiply(m),r.extractRotation(a),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function Hu(i){const t=new cx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function lx(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Hu(i),t.set(s,[o])):a>=r.length?(o=new Hu(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class ux extends bi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hx extends bi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function px(i,t,e){let n=new Pl;const s=new Ut,a=new Ut,r=new Ae,o=new ux({depthPacking:qf}),c=new hx,l={},h=e.maxTextureSize,d={[Kn]:Ke,[Ke]:Kn,[_e]:_e},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new J(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(C,E,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),x=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Vi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==hi&&this.type===hi,G=p===hi&&this.type!==hi;for(let Z=0,H=C.length;Z<H;Z++){const nt=C[Z],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ht=q.getFrameExtents();if(s.multiply(ht),a.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ht.x),s.x=a.x*ht.x,q.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ht.y),s.y=a.y*ht.y,q.mapSize.y=a.y)),q.map===null||F===!0||G===!0){const St=this.type!==hi?{minFilter:dn,magFilter:dn}:{};q.map!==null&&q.map.dispose(),q.map=new vs(s.x,s.y,St),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const vt=q.getViewportCount();for(let St=0;St<vt;St++){const Vt=q.getViewport(St);r.set(a.x*Vt.x,a.y*Vt.y,a.x*Vt.z,a.y*Vt.w),I.viewport(r),q.updateMatrices(nt,St),n=q.getFrustum(),M(E,U,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===hi&&_(q,U),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,x,N)};function _(C,E){const U=t.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vs(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(E,null,U,u,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(E,null,U,f,v,null)}function b(C,E,U,w){let x=null;const N=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)x=N;else if(x=U.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=x.uuid,F=E.uuid;let G=l[I];G===void 0&&(G={},l[I]=G);let Z=G[F];Z===void 0&&(Z=x.clone(),G[F]=Z,E.addEventListener("dispose",P)),x=Z}if(x.visible=E.visible,x.wireframe=E.wireframe,w===hi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:d[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=i.properties.get(x);I.light=U}return x}function M(C,E,U,w,x){if(C.visible===!1)return;if(C.layers.test(E.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===hi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const F=t.update(C),G=C.material;if(Array.isArray(G)){const Z=F.groups;for(let H=0,nt=Z.length;H<nt;H++){const q=Z[H],ht=G[q.materialIndex];if(ht&&ht.visible){const vt=b(C,ht,w,x);C.onBeforeShadow(i,C,E,U,F,vt,q),i.renderBufferDirect(U,null,F,vt,C,q),C.onAfterShadow(i,C,E,U,F,vt,q)}}}else if(G.visible){const Z=b(C,G,w,x);C.onBeforeShadow(i,C,E,U,F,Z,null),i.renderBufferDirect(U,null,F,Z,C,null),C.onAfterShadow(i,C,E,U,F,Z,null)}}const I=C.children;for(let F=0,G=I.length;F<G;F++)M(I[F],E,U,w,x)}function P(C){C.target.removeEventListener("dispose",P);for(const U in l){const w=l[U],x=C.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}const mx={[xc]:_c,[yc]:Sc,[Mc]:wc,[sa]:bc,[_c]:xc,[Sc]:yc,[wc]:Mc,[bc]:sa};function gx(i,t){function e(){let V=!1;const bt=new Ae;let k=null;const O=new Ae(0,0,0,0);return{setMask:function(Q){k!==Q&&!V&&(i.colorMask(Q,Q,Q,Q),k=Q)},setLocked:function(Q){V=Q},setClear:function(Q,ct,xt,Et,Jt){Jt===!0&&(Q*=Et,ct*=Et,xt*=Et),bt.set(Q,ct,xt,Et),O.equals(bt)===!1&&(i.clearColor(Q,ct,xt,Et),O.copy(bt))},reset:function(){V=!1,k=null,O.set(-1,0,0,0)}}}function n(){let V=!1,bt=!1,k=null,O=null,Q=null;return{setReversed:function(ct){if(bt!==ct){const xt=t.get("EXT_clip_control");bt?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT);const Et=Q;Q=null,this.setClear(Et)}bt=ct},getReversed:function(){return bt},setTest:function(ct){ct?ut(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ct){k!==ct&&!V&&(i.depthMask(ct),k=ct)},setFunc:function(ct){if(bt&&(ct=mx[ct]),O!==ct){switch(ct){case xc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case sa:i.depthFunc(i.LEQUAL);break;case Mc:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=ct}},setLocked:function(ct){V=ct},setClear:function(ct){Q!==ct&&(bt&&(ct=1-ct),i.clearDepth(ct),Q=ct)},reset:function(){V=!1,k=null,O=null,Q=null,bt=!1}}}function s(){let V=!1,bt=null,k=null,O=null,Q=null,ct=null,xt=null,Et=null,Jt=null;return{setTest:function(Gt){V||(Gt?ut(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(Gt){bt!==Gt&&!V&&(i.stencilMask(Gt),bt=Gt)},setFunc:function(Gt,he,se){(k!==Gt||O!==he||Q!==se)&&(i.stencilFunc(Gt,he,se),k=Gt,O=he,Q=se)},setOp:function(Gt,he,se){(ct!==Gt||xt!==he||Et!==se)&&(i.stencilOp(Gt,he,se),ct=Gt,xt=he,Et=se)},setLocked:function(Gt){V=Gt},setClear:function(Gt){Jt!==Gt&&(i.clearStencil(Gt),Jt=Gt)},reset:function(){V=!1,bt=null,k=null,O=null,Q=null,ct=null,xt=null,Et=null,Jt=null}}}const a=new e,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,b=null,M=null,P=null,C=null,E=new ee(0,0,0),U=0,w=!1,x=null,N=null,I=null,F=null,G=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,nt=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=nt>=2);let ht=null,vt={};const St=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),et=new Ae().fromArray(St),D=new Ae().fromArray(Vt);function W(V,bt,k,O){const Q=new Uint8Array(4),ct=i.createTexture();i.bindTexture(V,ct),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<k;xt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(bt+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return ct}const tt={};tt[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),r.setFunc(sa),it(!1),ft($l),ut(i.CULL_FACE),z(Vi);function ut(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function wt(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function _t(V,bt){return d[V]!==bt?(i.bindFramebuffer(V,bt),d[V]=bt,V===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=bt),V===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function It(V,bt){let k=f,O=!1;if(V){k=u.get(bt),k===void 0&&(k=[],u.set(bt,k));const Q=V.textures;if(k.length!==Q.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,xt=Q.length;ct<xt;ct++)k[ct]=i.COLOR_ATTACHMENT0+ct;k.length=Q.length,O=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,O=!0);O&&i.drawBuffers(k)}function Qt(V){return g!==V?(i.useProgram(V),g=V,!0):!1}const Wt={[rs]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[_f]:i.FUNC_REVERSE_SUBTRACT};Wt[yf]=i.MIN,Wt[Mf]=i.MAX;const mt={[bf]:i.ZERO,[Sf]:i.ONE,[wf]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Pf]:i.SRC_ALPHA_SATURATE,[Cf]:i.DST_COLOR,[Tf]:i.DST_ALPHA,[Ef]:i.ONE_MINUS_SRC_COLOR,[vc]:i.ONE_MINUS_SRC_ALPHA,[Rf]:i.ONE_MINUS_DST_COLOR,[Af]:i.ONE_MINUS_DST_ALPHA,[Lf]:i.CONSTANT_COLOR,[Df]:i.ONE_MINUS_CONSTANT_COLOR,[If]:i.CONSTANT_ALPHA,[Uf]:i.ONE_MINUS_CONSTANT_ALPHA};function z(V,bt,k,O,Q,ct,xt,Et,Jt,Gt){if(V===Vi){v===!0&&(wt(i.BLEND),v=!1);return}if(v===!1&&(ut(i.BLEND),v=!0),V!==vf){if(V!==m||Gt!==w){if((p!==rs||M!==rs)&&(i.blendEquation(i.FUNC_ADD),p=rs,M=rs),Gt)switch(V){case ta:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,b=null,P=null,C=null,E.set(0,0,0),U=0,m=V,w=Gt}return}Q=Q||bt,ct=ct||k,xt=xt||O,(bt!==p||Q!==M)&&(i.blendEquationSeparate(Wt[bt],Wt[Q]),p=bt,M=Q),(k!==_||O!==b||ct!==P||xt!==C)&&(i.blendFuncSeparate(mt[k],mt[O],mt[ct],mt[xt]),_=k,b=O,P=ct,C=xt),(Et.equals(E)===!1||Jt!==U)&&(i.blendColor(Et.r,Et.g,Et.b,Jt),E.copy(Et),U=Jt),m=V,w=!1}function Y(V,bt){V.side===_e?wt(i.CULL_FACE):ut(i.CULL_FACE);let k=V.side===Ke;bt&&(k=!k),it(k),V.blending===ta&&V.transparent===!1?z(Vi):z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),a.setMask(V.colorWrite);const O=V.stencilWrite;o.setTest(O),O&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Nt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(V){x!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),x=V)}function ft(V){V!==pf?(ut(i.CULL_FACE),V!==N&&(V===$l?i.cullFace(i.BACK):V===mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),N=V}function gt(V){V!==I&&(H&&i.lineWidth(V),I=V)}function Nt(V,bt,k){V?(ut(i.POLYGON_OFFSET_FILL),(F!==bt||G!==k)&&(i.polygonOffset(bt,k),F=bt,G=k)):wt(i.POLYGON_OFFSET_FILL)}function Ct(V){V?ut(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function L(V){V===void 0&&(V=i.TEXTURE0+Z-1),ht!==V&&(i.activeTexture(V),ht=V)}function S(V,bt,k){k===void 0&&(ht===null?k=i.TEXTURE0+Z-1:k=ht);let O=vt[k];O===void 0&&(O={type:void 0,texture:void 0},vt[k]=O),(O.type!==V||O.texture!==bt)&&(ht!==k&&(i.activeTexture(k),ht=k),i.bindTexture(V,bt||tt[V]),O.type=V,O.texture=bt)}function X(){const V=vt[ht];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function A(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function R(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(V){et.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),et.copy(V))}function ot(V){D.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),D.copy(V))}function Mt(V,bt){let k=l.get(bt);k===void 0&&(k=new WeakMap,l.set(bt,k));let O=k.get(V);O===void 0&&(O=i.getUniformBlockIndex(bt,V.name),k.set(V,O))}function yt(V,bt){const O=l.get(bt).get(V);c.get(bt)!==O&&(i.uniformBlockBinding(bt,O,V.__bindingPointIndex),c.set(bt,O))}function Dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,vt={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,b=null,M=null,P=null,C=null,E=new ee(0,0,0),U=0,w=!1,x=null,N=null,I=null,F=null,G=null,et.set(0,0,i.canvas.width,i.canvas.height),D.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ut,disable:wt,bindFramebuffer:_t,drawBuffers:It,useProgram:Qt,setBlending:z,setMaterial:Y,setFlipSided:it,setCullFace:ft,setLineWidth:gt,setPolygonOffset:Nt,setScissorTest:Ct,activeTexture:L,bindTexture:S,unbindTexture:X,compressedTexImage2D:rt,compressedTexImage3D:dt,texImage2D:R,texImage3D:K,updateUBOMapping:Mt,uniformBlockBinding:yt,texStorage2D:oe,texStorage3D:A,texSubImage2D:lt,texSubImage3D:zt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:kt,scissor:pt,viewport:ot,reset:Dt}}function Wu(i,t,e,n){const s=vx(n);switch(e){case jh:return i*t;case Yh:return i*t;case Jh:return i*t*2;case co:return i*t/s.components*s.byteLength;case El:return i*t/s.components*s.byteLength;case Kh:return i*t*2/s.components*s.byteLength;case Tl:return i*t*2/s.components*s.byteLength;case $h:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Al:return i*t*4/s.components*s.byteLength;case Gr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rc:case Lc:return Math.max(i,16)*Math.max(t,8)/4;case Cc:case Pc:return Math.max(i,8)*Math.max(t,8)/2;case Dc:case Ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qr:case Yc:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Zh:case Kc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zc:case Qc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vx(i){switch(i){case xi:case Wh:return{byteLength:1,components:1};case Ka:case Xh:case nr:return{byteLength:2,components:1};case Sl:case wl:return{byteLength:2,components:4};case gs:case bl:case $n:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xx(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return f?new OffscreenCanvas(L,S):eo("canvas")}function v(L,S,X){let rt=1;const dt=Ct(L);if((dt.width>X||dt.height>X)&&(rt=X/Math.max(dt.width,dt.height)),rt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const lt=Math.floor(rt*dt.width),zt=Math.floor(rt*dt.height);d===void 0&&(d=g(lt,zt));const Pt=S?g(lt,zt):d;return Pt.width=lt,Pt.height=zt,Pt.getContext("2d").drawImage(L,0,0,lt,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+zt+")."),Pt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(L,S,X,rt,dt=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt=S;if(S===i.RED&&(X===i.FLOAT&&(lt=i.R32F),X===i.HALF_FLOAT&&(lt=i.R16F),X===i.UNSIGNED_BYTE&&(lt=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(lt=i.R8UI),X===i.UNSIGNED_SHORT&&(lt=i.R16UI),X===i.UNSIGNED_INT&&(lt=i.R32UI),X===i.BYTE&&(lt=i.R8I),X===i.SHORT&&(lt=i.R16I),X===i.INT&&(lt=i.R32I)),S===i.RG&&(X===i.FLOAT&&(lt=i.RG32F),X===i.HALF_FLOAT&&(lt=i.RG16F),X===i.UNSIGNED_BYTE&&(lt=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(lt=i.RG8UI),X===i.UNSIGNED_SHORT&&(lt=i.RG16UI),X===i.UNSIGNED_INT&&(lt=i.RG32UI),X===i.BYTE&&(lt=i.RG8I),X===i.SHORT&&(lt=i.RG16I),X===i.INT&&(lt=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),X===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),X===i.UNSIGNED_INT&&(lt=i.RGB32UI),X===i.BYTE&&(lt=i.RGB8I),X===i.SHORT&&(lt=i.RGB16I),X===i.INT&&(lt=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),X===i.UNSIGNED_INT&&(lt=i.RGBA32UI),X===i.BYTE&&(lt=i.RGBA8I),X===i.SHORT&&(lt=i.RGBA16I),X===i.INT&&(lt=i.RGBA32I)),S===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),S===i.RGBA){const zt=dt?uo:ve.getTransfer(rt);X===i.FLOAT&&(lt=i.RGBA32F),X===i.HALF_FLOAT&&(lt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(lt=zt===Te?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function M(L,S){let X;return L?S===null||S===gs||S===oa?X=i.DEPTH24_STENCIL8:S===$n?X=i.DEPTH32F_STENCIL8:S===Ka&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gs||S===oa?X=i.DEPTH_COMPONENT24:S===$n?X=i.DEPTH_COMPONENT32F:S===Ka&&(X=i.DEPTH_COMPONENT16),X}function P(L,S){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==dn&&L.minFilter!==jn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function C(L){const S=L.target;S.removeEventListener("dispose",C),U(S),S.isVideoTexture&&h.delete(S)}function E(L){const S=L.target;S.removeEventListener("dispose",E),x(S)}function U(L){const S=n.get(L);if(S.__webglInit===void 0)return;const X=L.source,rt=u.get(X);if(rt){const dt=rt[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(L),Object.keys(rt).length===0&&u.delete(X)}n.remove(L)}function w(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const X=L.source,rt=u.get(X);delete rt[S.__cacheKey],r.memory.textures--}function x(L){const S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let dt=0;dt<S.__webglFramebuffer[rt].length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[rt][dt]);else i.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[rt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=L.textures;for(let rt=0,dt=X.length;rt<dt;rt++){const lt=n.get(X[rt]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),r.memory.textures--),n.remove(X[rt])}n.remove(L)}let N=0;function I(){N=0}function F(){const L=N;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),N+=1,L}function G(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function Z(L,S){const X=n.get(L);if(L.isVideoTexture&&gt(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const rt=L.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(X,L,S);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function H(L,S){const X=n.get(L);if(L.version>0&&X.__version!==L.version){D(X,L,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function nt(L,S){const X=n.get(L);if(L.version>0&&X.__version!==L.version){D(X,L,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function q(L,S){const X=n.get(L);if(L.version>0&&X.__version!==L.version){W(X,L,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const ht={[Hi]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[Ac]:i.MIRRORED_REPEAT},vt={[dn]:i.NEAREST,[Wf]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},St={[$f]:i.NEVER,[tp]:i.ALWAYS,[Yf]:i.LESS,[Qh]:i.LEQUAL,[Jf]:i.EQUAL,[Qf]:i.GEQUAL,[Kf]:i.GREATER,[Zf]:i.NOTEQUAL};function Vt(L,S){if(S.type===$n&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===jn||S.magFilter===Mo||S.magFilter===or||S.magFilter===hs||S.minFilter===jn||S.minFilter===Mo||S.minFilter===or||S.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ht[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ht[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ht[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,vt[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,vt[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,St[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===dn||S.minFilter!==or&&S.minFilter!==hs||S.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function et(L,S){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",C));const rt=S.source;let dt=u.get(rt);dt===void 0&&(dt={},u.set(rt,dt));const lt=G(S);if(lt!==L.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,X=!0),dt[lt].usedTimes++;const zt=dt[L.__cacheKey];zt!==void 0&&(dt[L.__cacheKey].usedTimes--,zt.usedTimes===0&&w(S)),L.__cacheKey=lt,L.__webglTexture=dt[lt].texture}return X}function D(L,S,X){let rt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=i.TEXTURE_3D);const dt=et(L,S),lt=S.source;e.bindTexture(rt,L.__webglTexture,i.TEXTURE0+X);const zt=n.get(lt);if(lt.version!==zt.__version||dt===!0){e.activeTexture(i.TEXTURE0+X);const Pt=ve.getPrimaries(ve.workingColorSpace),kt=S.colorSpace===ki?null:ve.getPrimaries(S.colorSpace),oe=S.colorSpace===ki||Pt===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let A=v(S.image,!1,s.maxTextureSize);A=Nt(S,A);const R=a.convert(S.format,S.colorSpace),K=a.convert(S.type);let pt=b(S.internalFormat,R,K,S.colorSpace,S.isVideoTexture);Vt(rt,S);let ot;const Mt=S.mipmaps,yt=S.isVideoTexture!==!0,Dt=zt.__version===void 0||dt===!0,V=lt.dataReady,bt=P(S,A);if(S.isDepthTexture)pt=M(S.format===ca,S.type),Dt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,pt,A.width,A.height):e.texImage2D(i.TEXTURE_2D,0,pt,A.width,A.height,0,R,K,null));else if(S.isDataTexture)if(Mt.length>0){yt&&Dt&&e.texStorage2D(i.TEXTURE_2D,bt,pt,Mt[0].width,Mt[0].height);for(let k=0,O=Mt.length;k<O;k++)ot=Mt[k],yt?V&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ot.width,ot.height,R,K,ot.data):e.texImage2D(i.TEXTURE_2D,k,pt,ot.width,ot.height,0,R,K,ot.data);S.generateMipmaps=!1}else yt?(Dt&&e.texStorage2D(i.TEXTURE_2D,bt,pt,A.width,A.height),V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,R,K,A.data)):e.texImage2D(i.TEXTURE_2D,0,pt,A.width,A.height,0,R,K,A.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){yt&&Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,pt,Mt[0].width,Mt[0].height,A.depth);for(let k=0,O=Mt.length;k<O;k++)if(ot=Mt[k],S.format!==Bn)if(R!==null)if(yt){if(V)if(S.layerUpdates.size>0){const Q=Wu(ot.width,ot.height,S.format,S.type);for(const ct of S.layerUpdates){const xt=ot.data.subarray(ct*Q/ot.data.BYTES_PER_ELEMENT,(ct+1)*Q/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,ct,ot.width,ot.height,1,R,xt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ot.width,ot.height,A.depth,R,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,pt,ot.width,ot.height,A.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,ot.width,ot.height,A.depth,R,K,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,pt,ot.width,ot.height,A.depth,0,R,K,ot.data)}else{yt&&Dt&&e.texStorage2D(i.TEXTURE_2D,bt,pt,Mt[0].width,Mt[0].height);for(let k=0,O=Mt.length;k<O;k++)ot=Mt[k],S.format!==Bn?R!==null?yt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,ot.width,ot.height,R,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,k,pt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?V&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,ot.width,ot.height,R,K,ot.data):e.texImage2D(i.TEXTURE_2D,k,pt,ot.width,ot.height,0,R,K,ot.data)}else if(S.isDataArrayTexture)if(yt){if(Dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,pt,A.width,A.height,A.depth),V)if(S.layerUpdates.size>0){const k=Wu(A.width,A.height,S.format,S.type);for(const O of S.layerUpdates){const Q=A.data.subarray(O*k/A.data.BYTES_PER_ELEMENT,(O+1)*k/A.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,O,A.width,A.height,1,R,K,Q)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,A.width,A.height,A.depth,R,K,A.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,A.width,A.height,A.depth,0,R,K,A.data);else if(S.isData3DTexture)yt?(Dt&&e.texStorage3D(i.TEXTURE_3D,bt,pt,A.width,A.height,A.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,A.width,A.height,A.depth,R,K,A.data)):e.texImage3D(i.TEXTURE_3D,0,pt,A.width,A.height,A.depth,0,R,K,A.data);else if(S.isFramebufferTexture){if(Dt)if(yt)e.texStorage2D(i.TEXTURE_2D,bt,pt,A.width,A.height);else{let k=A.width,O=A.height;for(let Q=0;Q<bt;Q++)e.texImage2D(i.TEXTURE_2D,Q,pt,k,O,0,R,K,null),k>>=1,O>>=1}}else if(Mt.length>0){if(yt&&Dt){const k=Ct(Mt[0]);e.texStorage2D(i.TEXTURE_2D,bt,pt,k.width,k.height)}for(let k=0,O=Mt.length;k<O;k++)ot=Mt[k],yt?V&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,R,K,ot):e.texImage2D(i.TEXTURE_2D,k,pt,R,K,ot);S.generateMipmaps=!1}else if(yt){if(Dt){const k=Ct(A);e.texStorage2D(i.TEXTURE_2D,bt,pt,k.width,k.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,R,K,A)}else e.texImage2D(i.TEXTURE_2D,0,pt,R,K,A);m(S)&&p(rt),zt.__version=lt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function W(L,S,X){if(S.image.length!==6)return;const rt=et(L,S),dt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const lt=n.get(dt);if(dt.version!==lt.__version||rt===!0){e.activeTexture(i.TEXTURE0+X);const zt=ve.getPrimaries(ve.workingColorSpace),Pt=S.colorSpace===ki?null:ve.getPrimaries(S.colorSpace),kt=S.colorSpace===ki||zt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const oe=S.isCompressedTexture||S.image[0].isCompressedTexture,A=S.image[0]&&S.image[0].isDataTexture,R=[];for(let O=0;O<6;O++)!oe&&!A?R[O]=v(S.image[O],!0,s.maxCubemapSize):R[O]=A?S.image[O].image:S.image[O],R[O]=Nt(S,R[O]);const K=R[0],pt=a.convert(S.format,S.colorSpace),ot=a.convert(S.type),Mt=b(S.internalFormat,pt,ot,S.colorSpace),yt=S.isVideoTexture!==!0,Dt=lt.__version===void 0||rt===!0,V=dt.dataReady;let bt=P(S,K);Vt(i.TEXTURE_CUBE_MAP,S);let k;if(oe){yt&&Dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Mt,K.width,K.height);for(let O=0;O<6;O++){k=R[O].mipmaps;for(let Q=0;Q<k.length;Q++){const ct=k[Q];S.format!==Bn?pt!==null?yt?V&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q,0,0,ct.width,ct.height,pt,ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q,Mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q,0,0,ct.width,ct.height,pt,ot,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q,Mt,ct.width,ct.height,0,pt,ot,ct.data)}}}else{if(k=S.mipmaps,yt&&Dt){k.length>0&&bt++;const O=Ct(R[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Mt,O.width,O.height)}for(let O=0;O<6;O++)if(A){yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,R[O].width,R[O].height,pt,ot,R[O].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Mt,R[O].width,R[O].height,0,pt,ot,R[O].data);for(let Q=0;Q<k.length;Q++){const xt=k[Q].image[O].image;yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q+1,0,0,xt.width,xt.height,pt,ot,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q+1,Mt,xt.width,xt.height,0,pt,ot,xt.data)}}else{yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,pt,ot,R[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Mt,pt,ot,R[O]);for(let Q=0;Q<k.length;Q++){const ct=k[Q];yt?V&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q+1,0,0,pt,ot,ct.image[O]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q+1,Mt,pt,ot,ct.image[O])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),lt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function tt(L,S,X,rt,dt,lt){const zt=a.convert(X.format,X.colorSpace),Pt=a.convert(X.type),kt=b(X.internalFormat,zt,Pt,X.colorSpace),oe=n.get(S),A=n.get(X);if(A.__renderTarget=S,!oe.__hasExternalTextures){const R=Math.max(1,S.width>>lt),K=Math.max(1,S.height>>lt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,lt,kt,R,K,S.depth,0,zt,Pt,null):e.texImage2D(dt,lt,kt,R,K,0,zt,Pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,dt,A.__webglTexture,0,it(S)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,dt,A.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(L,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){const rt=S.depthTexture,dt=rt&&rt.isDepthTexture?rt.type:null,lt=M(S.stencilBuffer,dt),zt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=it(S);ft(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,lt,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,lt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,lt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,L)}else{const rt=S.textures;for(let dt=0;dt<rt.length;dt++){const lt=rt[dt],zt=a.convert(lt.format,lt.colorSpace),Pt=a.convert(lt.type),kt=b(lt.internalFormat,zt,Pt,lt.colorSpace),oe=it(S);X&&ft(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,kt,S.width,S.height):ft(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,kt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,kt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(S.depthTexture);rt.__renderTarget=S,(!rt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const dt=rt.__webglTexture,lt=it(S);if(S.depthTexture.format===ea)ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(S.depthTexture.format===ca)ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function _t(L){const S=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const rt=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),rt){const dt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,rt.removeEventListener("dispose",dt)};rt.addEventListener("dispose",dt),S.__depthDisposeCallback=dt}S.__boundDepthTexture=rt}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");wt(S.__webglFramebuffer,L)}else if(X){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]===void 0)S.__webglDepthbuffer[rt]=i.createRenderbuffer(),ut(S.__webglDepthbuffer[rt],L,!1);else{const dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=S.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ut(S.__webglDepthbuffer,L,!1);else{const rt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(L,S,X){const rt=n.get(L);S!==void 0&&tt(rt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&_t(L)}function Qt(L){const S=L.texture,X=n.get(L),rt=n.get(S);L.addEventListener("dispose",E);const dt=L.textures,lt=L.isWebGLCubeRenderTarget===!0,zt=dt.length>1;if(zt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=S.version,r.memory.textures++),lt){X.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[Pt]=[];for(let kt=0;kt<S.mipmaps.length;kt++)X.__webglFramebuffer[Pt][kt]=i.createFramebuffer()}else X.__webglFramebuffer[Pt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let Pt=0;Pt<S.mipmaps.length;Pt++)X.__webglFramebuffer[Pt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(zt)for(let Pt=0,kt=dt.length;Pt<kt;Pt++){const oe=n.get(dt[Pt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),r.memory.textures++)}if(L.samples>0&&ft(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Pt=0;Pt<dt.length;Pt++){const kt=dt[Pt];X.__webglColorRenderbuffer[Pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Pt]);const oe=a.convert(kt.format,kt.colorSpace),A=a.convert(kt.type),R=b(kt.internalFormat,oe,A,kt.colorSpace,L.isXRRenderTarget===!0),K=it(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,R,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,X.__webglColorRenderbuffer[Pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,S);for(let Pt=0;Pt<6;Pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let kt=0;kt<S.mipmaps.length;kt++)tt(X.__webglFramebuffer[Pt][kt],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,kt);else tt(X.__webglFramebuffer[Pt],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let Pt=0,kt=dt.length;Pt<kt;Pt++){const oe=dt[Pt],A=n.get(oe);e.bindTexture(i.TEXTURE_2D,A.__webglTexture),Vt(i.TEXTURE_2D,oe),tt(X.__webglFramebuffer,L,oe,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,0),m(oe)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Pt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,rt.__webglTexture),Vt(Pt,S),S.mipmaps&&S.mipmaps.length>0)for(let kt=0;kt<S.mipmaps.length;kt++)tt(X.__webglFramebuffer[kt],L,S,i.COLOR_ATTACHMENT0,Pt,kt);else tt(X.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,Pt,0);m(S)&&p(Pt),e.unbindTexture()}L.depthBuffer&&_t(L)}function Wt(L){const S=L.textures;for(let X=0,rt=S.length;X<rt;X++){const dt=S[X];if(m(dt)){const lt=_(L),zt=n.get(dt).__webglTexture;e.bindTexture(lt,zt),p(lt),e.unbindTexture()}}}const mt=[],z=[];function Y(L){if(L.samples>0){if(ft(L)===!1){const S=L.textures,X=L.width,rt=L.height;let dt=i.COLOR_BUFFER_BIT;const lt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(L),Pt=S.length>1;if(Pt)for(let kt=0;kt<S.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let kt=0;kt<S.length;kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[kt]);const oe=n.get(S[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,X,rt,0,0,X,rt,dt,i.NEAREST),c===!0&&(mt.length=0,z.length=0,mt.push(i.COLOR_ATTACHMENT0+kt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(mt.push(lt),z.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pt)for(let kt=0;kt<S.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[kt]);const oe=n.get(S[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function it(L){return Math.min(s.maxSamples,L.samples)}function ft(L){const S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(L){const S=r.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function Nt(L,S){const X=L.colorSpace,rt=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==da&&X!==ki&&(ve.getTransfer(X)===Te?(rt!==Bn||dt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),S}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=nt,this.setTextureCube=q,this.rebindTextures=It,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=ft}function _x(i,t){function e(n,s=ki){let a;const r=ve.getTransfer(s);if(n===xi)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return i.BYTE;if(n===Xh)return i.SHORT;if(n===Ka)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===gs)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===$h)return i.RGB;if(n===Bn)return i.RGBA;if(n===Yh)return i.LUMINANCE;if(n===Jh)return i.LUMINANCE_ALPHA;if(n===ea)return i.DEPTH_COMPONENT;if(n===ca)return i.DEPTH_STENCIL;if(n===co)return i.RED;if(n===El)return i.RED_INTEGER;if(n===Kh)return i.RG;if(n===Tl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===Gr||n===Hr||n===Wr||n===Xr)if(r===Te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Gr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Gr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Rc||n===Pc||n===Lc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Cc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dc||n===Ic||n===Uc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Dc||n===Ic)return r===Te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Uc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nc||n===zc||n===kc||n===Fc||n===Oc||n===Bc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===jc||n===$c)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Nc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return r===Te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===Yc||n===Jc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===qr)return r===Te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zh||n===Kc||n===Zc||n===Qc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===qr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Kc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===oa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class yx extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mx={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sx=`
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

}`;class wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new on,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _i({vertexShader:bx,fragmentShader:Sx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ex extends fa{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const v=new wx,m=e.getContextAttributes();let p=null,_=null;const b=[],M=[],P=new Ut;let C=null;const E=new Je;E.viewport=new Ae;const U=new Je;U.viewport=new Ae;const w=[E,U],x=new yx;let N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let W=b[D];return W===void 0&&(W=new $o,b[D]=W),W.getTargetRaySpace()},this.getControllerGrip=function(D){let W=b[D];return W===void 0&&(W=new $o,b[D]=W),W.getGripSpace()},this.getHand=function(D){let W=b[D];return W===void 0&&(W=new $o,b[D]=W),W.getHandSpace()};function F(D){const W=M.indexOf(D.inputSource);if(W===-1)return;const tt=b[W];tt!==void 0&&(tt.update(D.inputSource,D.frame,l||r),tt.dispatchEvent({type:D.type,data:D.inputSource}))}function G(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let D=0;D<b.length;D++){const W=M[D];W!==null&&(M[D]=null,b[D].disconnect(W))}N=null,I=null,v.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,_=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(D){if(s=D,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new vs(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,tt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=m.stencil?ca:ea,tt=m.stencil?oa:gs);const wt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:a};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new vs(u.textureWidth,u.textureHeight,{format:Bn,type:xi,depthTexture:new hd(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(D){for(let W=0;W<D.removed.length;W++){const tt=D.removed[W],ut=M.indexOf(tt);ut>=0&&(M[ut]=null,b[ut].disconnect(tt))}for(let W=0;W<D.added.length;W++){const tt=D.added[W];let ut=M.indexOf(tt);if(ut===-1){for(let _t=0;_t<b.length;_t++)if(_t>=M.length){M.push(tt),ut=_t;break}else if(M[_t]===null){M[_t]=tt,ut=_t;break}if(ut===-1)break}const wt=b[ut];wt&&wt.connect(tt)}}const H=new B,nt=new B;function q(D,W,tt){H.setFromMatrixPosition(W.matrixWorld),nt.setFromMatrixPosition(tt.matrixWorld);const ut=H.distanceTo(nt),wt=W.projectionMatrix.elements,_t=tt.projectionMatrix.elements,It=wt[14]/(wt[10]-1),Qt=wt[14]/(wt[10]+1),Wt=(wt[9]+1)/wt[5],mt=(wt[9]-1)/wt[5],z=(wt[8]-1)/wt[0],Y=(_t[8]+1)/_t[0],it=It*z,ft=It*Y,gt=ut/(-z+Y),Nt=gt*-z;if(W.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Nt),D.translateZ(gt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),wt[10]===-1)D.projectionMatrix.copy(W.projectionMatrix),D.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const Ct=It+gt,L=Qt+gt,S=it-Nt,X=ft+(ut-Nt),rt=Wt*Qt/L*Ct,dt=mt*Qt/L*Ct;D.projectionMatrix.makePerspective(S,X,rt,dt,Ct,L),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function ht(D,W){W===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(W.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(s===null)return;let W=D.near,tt=D.far;v.texture!==null&&(v.depthNear>0&&(W=v.depthNear),v.depthFar>0&&(tt=v.depthFar)),x.near=U.near=E.near=W,x.far=U.far=E.far=tt,(N!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),N=x.near,I=x.far),E.layers.mask=D.layers.mask|2,U.layers.mask=D.layers.mask|4,x.layers.mask=E.layers.mask|U.layers.mask;const ut=D.parent,wt=x.cameras;ht(x,ut);for(let _t=0;_t<wt.length;_t++)ht(wt[_t],ut);wt.length===2?q(x,E,U):x.projectionMatrix.copy(E.projectionMatrix),vt(D,x,ut)};function vt(D,W,tt){tt===null?D.matrix.copy(W.matrixWorld):(D.matrix.copy(tt.matrixWorld),D.matrix.invert(),D.matrix.multiply(W.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(W.projectionMatrix),D.projectionMatrixInverse.copy(W.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Za*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(D){c=D,u!==null&&(u.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let St=null;function Vt(D,W){if(h=W.getViewerPose(l||r),g=W,h!==null){const tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let ut=!1;tt.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let _t=0;_t<tt.length;_t++){const It=tt[_t];let Qt=null;if(f!==null)Qt=f.getViewport(It);else{const mt=d.getViewSubImage(u,It);Qt=mt.viewport,_t===0&&(t.setRenderTargetTextures(_,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(_))}let Wt=w[_t];Wt===void 0&&(Wt=new Je,Wt.layers.enable(_t),Wt.viewport=new Ae,w[_t]=Wt),Wt.matrix.fromArray(It.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(It.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),_t===0&&(x.matrix.copy(Wt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(Wt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const _t=d.getDepthInformation(tt[0]);_t&&_t.isValid&&_t.texture&&v.init(t,_t,s.renderState)}}for(let tt=0;tt<b.length;tt++){const ut=M[tt],wt=b[tt];ut!==null&&wt!==void 0&&wt.update(ut,W,l||r)}St&&St(D,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}const et=new ld;et.setAnimationLoop(Vt),this.setAnimationLoop=function(D){St=D},this.dispose=function(){}}}const ts=new Cn,Tx=new Me;function Ax(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p)):p.isMeshStandardMaterial?(a(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),b=_.envMap,M=_.envMapRotation;b&&(m.envMap.value=b,ts.copy(M),ts.x*=-1,ts.y*=-1,ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(ts)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cx(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){const M=b.program;n.uniformBlockBinding(_,M)}function l(_,b){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(_,P);const C=t.render.frame;a[_.id]!==C&&(u(_),a[_.id]=C)}function h(_){const b=d();_.__bindingPointIndex=b;const M=i.createBuffer(),P=_.__size,C=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let _=0;_<o;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const b=s[_.id],M=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,E=M.length;C<E;C++){const U=Array.isArray(M[C])?M[C]:[M[C]];for(let w=0,x=U.length;w<x;w++){const N=U[w];if(f(N,C,w,P)===!0){const I=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let G=0;for(let Z=0;Z<F.length;Z++){const H=F[Z],nt=v(H);typeof H=="number"||typeof H=="boolean"?(N.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,I+G,N.__data)):H.isMatrix3?(N.__data[0]=H.elements[0],N.__data[1]=H.elements[1],N.__data[2]=H.elements[2],N.__data[3]=0,N.__data[4]=H.elements[3],N.__data[5]=H.elements[4],N.__data[6]=H.elements[5],N.__data[7]=0,N.__data[8]=H.elements[6],N.__data[9]=H.elements[7],N.__data[10]=H.elements[8],N.__data[11]=0):(H.toArray(N.__data,G),G+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,M,P){const C=_.value,E=b+"_"+M;if(P[E]===void 0)return typeof C=="number"||typeof C=="boolean"?P[E]=C:P[E]=C.clone(),!0;{const U=P[E];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return P[E]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(_){const b=_.uniforms;let M=0;const P=16;for(let E=0,U=b.length;E<U;E++){const w=Array.isArray(b[E])?b[E]:[b[E]];for(let x=0,N=w.length;x<N;x++){const I=w[x],F=Array.isArray(I.value)?I.value:[I.value];for(let G=0,Z=F.length;G<Z;G++){const H=F[G],nt=v(H),q=M%P,ht=q%nt.boundary,vt=q+ht;M+=ht,vt!==0&&P-vt<nt.storage&&(M+=P-vt),I.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=nt.storage}}}const C=M%P;return C>0&&(M+=P-C),_.__size=M,_.__cache={},this}function v(_){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){const b=_.target;b.removeEventListener("dispose",m);const M=r.indexOf(b.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);r=[],s={},a={}}return{bind:c,update:l,dispose:p}}class Rx{constructor(t={}){const{canvas:e=vp(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Gi,this.toneMappingExposure=1;const M=this;let P=!1,C=0,E=0,U=null,w=-1,x=null;const N=new Ae,I=new Ae;let F=null;const G=new ee(0);let Z=0,H=e.width,nt=e.height,q=1,ht=null,vt=null;const St=new Ae(0,0,H,nt),Vt=new Ae(0,0,H,nt);let et=!1;const D=new Pl;let W=!1,tt=!1;const ut=new Me,wt=new Me,_t=new B,It=new Ae,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function mt(){return U===null?q:1}let z=n;function Y(T,j){return e.getContext(T,j)}try{const T={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yl}`),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",ct,!1),z===null){const j="webgl2";if(z=Y(j,T),z===null)throw Y(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let it,ft,gt,Nt,Ct,L,S,X,rt,dt,lt,zt,Pt,kt,oe,A,R,K,pt,ot,Mt,yt,Dt,V;function bt(){it=new Ug(z),it.init(),yt=new _x(z,it),ft=new Cg(z,it,t,yt),gt=new gx(z,it),ft.reverseDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),Nt=new kg(z),Ct=new ex,L=new xx(z,it,gt,Ct,ft,yt,Nt),S=new Pg(M),X=new Ig(M),rt=new Wp(z),Dt=new Tg(z,rt),dt=new Ng(z,rt,Nt,Dt),lt=new Og(z,dt,rt,Nt),pt=new Fg(z,ft,L),A=new Rg(Ct),zt=new tx(M,S,X,it,ft,Dt,A),Pt=new Ax(M,Ct),kt=new ix,oe=new lx(it),K=new Eg(M,S,X,gt,lt,f,c),R=new px(M,lt,ft),V=new Cx(z,Nt,ft,gt),ot=new Ag(z,it,Nt),Mt=new zg(z,it,Nt),Nt.programs=zt.programs,M.capabilities=ft,M.extensions=it,M.properties=Ct,M.renderLists=kt,M.shadowMap=R,M.state=gt,M.info=Nt}bt();const k=new Ex(M,z);this.xr=k,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(H,nt,!1))},this.getSize=function(T){return T.set(H,nt)},this.setSize=function(T,j,st=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,nt=j,e.width=Math.floor(T*q),e.height=Math.floor(j*q),st===!0&&(e.style.width=T+"px",e.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(H*q,nt*q).floor()},this.setDrawingBufferSize=function(T,j,st){H=T,nt=j,q=st,e.width=Math.floor(T*st),e.height=Math.floor(j*st),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(St)},this.setViewport=function(T,j,st,at){T.isVector4?St.set(T.x,T.y,T.z,T.w):St.set(T,j,st,at),gt.viewport(N.copy(St).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Vt)},this.setScissor=function(T,j,st,at){T.isVector4?Vt.set(T.x,T.y,T.z,T.w):Vt.set(T,j,st,at),gt.scissor(I.copy(Vt).multiplyScalar(q).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){gt.setScissorTest(et=T)},this.setOpaqueSort=function(T){ht=T},this.setTransparentSort=function(T){vt=T},this.getClearColor=function(T){return T.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(T=!0,j=!0,st=!0){let at=0;if(T){let $=!1;if(U!==null){const Lt=U.texture.format;$=Lt===Al||Lt===Tl||Lt===El}if($){const Lt=U.texture.type,Bt=Lt===xi||Lt===gs||Lt===Ka||Lt===oa||Lt===Sl||Lt===wl,jt=K.getClearColor(),$t=K.getClearAlpha(),ae=jt.r,ce=jt.g,Yt=jt.b;Bt?(g[0]=ae,g[1]=ce,g[2]=Yt,g[3]=$t,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=ae,v[1]=ce,v[2]=Yt,v[3]=$t,z.clearBufferiv(z.COLOR,0,v))}else at|=z.COLOR_BUFFER_BIT}j&&(at|=z.DEPTH_BUFFER_BIT),st&&(at|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),kt.dispose(),oe.dispose(),Ct.dispose(),S.dispose(),X.dispose(),lt.dispose(),Dt.dispose(),V.dispose(),zt.dispose(),k.dispose(),k.removeEventListener("sessionstart",Xt),k.removeEventListener("sessionend",ne),Re.stop()};function O(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const T=Nt.autoReset,j=R.enabled,st=R.autoUpdate,at=R.needsUpdate,$=R.type;bt(),Nt.autoReset=T,R.enabled=j,R.autoUpdate=st,R.needsUpdate=at,R.type=$}function ct(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xt(T){const j=T.target;j.removeEventListener("dispose",xt),Et(j)}function Et(T){Jt(T),Ct.remove(T)}function Jt(T){const j=Ct.get(T).programs;j!==void 0&&(j.forEach(function(st){zt.releaseProgram(st)}),T.isShaderMaterial&&zt.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,st,at,$,Lt){j===null&&(j=Qt);const Bt=$.isMesh&&$.matrixWorld.determinant()<0,jt=hf(T,j,st,at,$);gt.setMaterial(at,Bt);let $t=st.index,ae=1;if(at.wireframe===!0){if($t=dt.getWireframeAttribute(st),$t===void 0)return;ae=2}const ce=st.drawRange,Yt=st.attributes.position;let xe=ce.start*ae,Pe=(ce.start+ce.count)*ae;Lt!==null&&(xe=Math.max(xe,Lt.start*ae),Pe=Math.min(Pe,(Lt.start+Lt.count)*ae)),$t!==null?(xe=Math.max(xe,0),Pe=Math.min(Pe,$t.count)):Yt!=null&&(xe=Math.max(xe,0),Pe=Math.min(Pe,Yt.count));const De=Pe-xe;if(De<0||De===1/0)return;Dt.setup($,at,jt,st,$t);let fn,be=ot;if($t!==null&&(fn=rt.get($t),be=Mt,be.setIndex(fn)),$.isMesh)at.wireframe===!0?(gt.setLineWidth(at.wireframeLinewidth*mt()),be.setMode(z.LINES)):be.setMode(z.TRIANGLES);else if($.isLine){let Zt=at.linewidth;Zt===void 0&&(Zt=1),gt.setLineWidth(Zt*mt()),$.isLineSegments?be.setMode(z.LINES):$.isLineLoop?be.setMode(z.LINE_LOOP):be.setMode(z.LINE_STRIP)}else $.isPoints?be.setMode(z.POINTS):$.isSprite&&be.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)be.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))be.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Zt=$._multiDrawStarts,ti=$._multiDrawCounts,Se=$._multiDrawCount,Pn=$t?rt.get($t).bytesPerElement:1,Ss=Ct.get(at).currentProgram.getUniforms();for(let mn=0;mn<Se;mn++)Ss.setValue(z,"_gl_DrawID",mn),be.render(Zt[mn]/Pn,ti[mn])}else if($.isInstancedMesh)be.renderInstances(xe,De,$.count);else if(st.isInstancedBufferGeometry){const Zt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,ti=Math.min(st.instanceCount,Zt);be.renderInstances(xe,De,ti)}else be.render(xe,De)};function Gt(T,j,st){T.transparent===!0&&T.side===_e&&T.forceSinglePass===!1?(T.side=Ke,T.needsUpdate=!0,rr(T,j,st),T.side=Kn,T.needsUpdate=!0,rr(T,j,st),T.side=_e):rr(T,j,st)}this.compile=function(T,j,st=null){st===null&&(st=T),p=oe.get(st),p.init(j),b.push(p),st.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),T!==st&&T.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const at=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Lt=$.material;if(Lt)if(Array.isArray(Lt))for(let Bt=0;Bt<Lt.length;Bt++){const jt=Lt[Bt];Gt(jt,st,$),at.add(jt)}else Gt(Lt,st,$),at.add(Lt)}),b.pop(),p=null,at},this.compileAsync=function(T,j,st=null){const at=this.compile(T,j,st);return new Promise($=>{function Lt(){if(at.forEach(function(Bt){Ct.get(Bt).currentProgram.isReady()&&at.delete(Bt)}),at.size===0){$(T);return}setTimeout(Lt,10)}it.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let he=null;function se(T){he&&he(T)}function Xt(){Re.stop()}function ne(){Re.start()}const Re=new ld;Re.setAnimationLoop(se),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(T){he=T,k.setAnimationLoop(T),T===null?Re.stop():Re.start()},k.addEventListener("sessionstart",Xt),k.addEventListener("sessionend",ne),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(j),j=k.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,j,U),p=oe.get(T,b.length),p.init(j),b.push(p),wt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),D.setFromProjectionMatrix(wt),tt=this.localClippingEnabled,W=A.init(this.clippingPlanes,tt),m=kt.get(T,_.length),m.init(),_.push(m),k.enabled===!0&&k.isPresenting===!0){const Lt=M.xr.getDepthSensingMesh();Lt!==null&&cn(Lt,j,-1/0,M.sortObjects)}cn(T,j,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ht,vt),Wt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Wt&&K.addToRenderList(m,T),this.info.render.frame++,W===!0&&A.beginShadows();const st=p.state.shadowsArray;R.render(st,T,j),W===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=m.opaque,$=m.transmissive;if(p.setupLights(),j.isArrayCamera){const Lt=j.cameras;if($.length>0)for(let Bt=0,jt=Lt.length;Bt<jt;Bt++){const $t=Lt[Bt];Si(at,$,T,$t)}Wt&&K.render(T);for(let Bt=0,jt=Lt.length;Bt<jt;Bt++){const $t=Lt[Bt];xa(m,T,$t,$t.viewport)}}else $.length>0&&Si(at,$,T,j),Wt&&K.render(T),xa(m,T,j);U!==null&&(L.updateMultisampleRenderTarget(U),L.updateRenderTargetMipmap(U)),T.isScene===!0&&T.onAfterRender(M,T,j),Dt.resetDefaultState(),w=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],W===!0&&A.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function cn(T,j,st,at){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)st=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||D.intersectsSprite(T)){at&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);const Bt=lt.update(T),jt=T.material;jt.visible&&m.push(T,Bt,jt,st,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||D.intersectsObject(T))){const Bt=lt.update(T),jt=T.material;if(at&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),It.copy(Bt.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(wt)),Array.isArray(jt)){const $t=Bt.groups;for(let ae=0,ce=$t.length;ae<ce;ae++){const Yt=$t[ae],xe=jt[Yt.materialIndex];xe&&xe.visible&&m.push(T,Bt,xe,st,It.z,Yt)}}else jt.visible&&m.push(T,Bt,jt,st,It.z,null)}}const Lt=T.children;for(let Bt=0,jt=Lt.length;Bt<jt;Bt++)cn(Lt[Bt],j,st,at)}function xa(T,j,st,at){const $=T.opaque,Lt=T.transmissive,Bt=T.transparent;p.setupLightsView(st),W===!0&&A.setGlobalState(M.clippingPlanes,st),at&&gt.viewport(N.copy(at)),$.length>0&&ar($,j,st),Lt.length>0&&ar(Lt,j,st),Bt.length>0&&ar(Bt,j,st),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Si(T,j,st,at){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[at.id]===void 0&&(p.state.transmissionRenderTarget[at.id]=new vs(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?nr:xi,minFilter:hs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));const Lt=p.state.transmissionRenderTarget[at.id],Bt=at.viewport||N;Lt.setSize(Bt.z,Bt.w);const jt=M.getRenderTarget();M.setRenderTarget(Lt),M.getClearColor(G),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Wt&&K.render(st);const $t=M.toneMapping;M.toneMapping=Gi;const ae=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),p.setupLightsView(at),W===!0&&A.setGlobalState(M.clippingPlanes,at),ar(T,st,at),L.updateMultisampleRenderTarget(Lt),L.updateRenderTargetMipmap(Lt),it.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Yt=0,xe=j.length;Yt<xe;Yt++){const Pe=j[Yt],De=Pe.object,fn=Pe.geometry,be=Pe.material,Zt=Pe.group;if(be.side===_e&&De.layers.test(at.layers)){const ti=be.side;be.side=Ke,be.needsUpdate=!0,Wl(De,st,at,fn,be,Zt),be.side=ti,be.needsUpdate=!0,ce=!0}}ce===!0&&(L.updateMultisampleRenderTarget(Lt),L.updateRenderTargetMipmap(Lt))}M.setRenderTarget(jt),M.setClearColor(G,Z),ae!==void 0&&(at.viewport=ae),M.toneMapping=$t}function ar(T,j,st){const at=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Lt=T.length;$<Lt;$++){const Bt=T[$],jt=Bt.object,$t=Bt.geometry,ae=at===null?Bt.material:at,ce=Bt.group;jt.layers.test(st.layers)&&Wl(jt,j,st,$t,ae,ce)}}function Wl(T,j,st,at,$,Lt){T.onBeforeRender(M,j,st,at,$,Lt),T.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(M,j,st,at,T,Lt),$.transparent===!0&&$.side===_e&&$.forceSinglePass===!1?($.side=Ke,$.needsUpdate=!0,M.renderBufferDirect(st,j,at,$,T,Lt),$.side=Kn,$.needsUpdate=!0,M.renderBufferDirect(st,j,at,$,T,Lt),$.side=_e):M.renderBufferDirect(st,j,at,$,T,Lt),T.onAfterRender(M,j,st,at,$,Lt)}function rr(T,j,st){j.isScene!==!0&&(j=Qt);const at=Ct.get(T),$=p.state.lights,Lt=p.state.shadowsArray,Bt=$.state.version,jt=zt.getParameters(T,$.state,Lt,j,st),$t=zt.getProgramCacheKey(jt);let ae=at.programs;at.environment=T.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(T.isMeshStandardMaterial?X:S).get(T.envMap||at.environment),at.envMapRotation=at.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,ae===void 0&&(T.addEventListener("dispose",xt),ae=new Map,at.programs=ae);let ce=ae.get($t);if(ce!==void 0){if(at.currentProgram===ce&&at.lightsStateVersion===Bt)return ql(T,jt),ce}else jt.uniforms=zt.getUniforms(T),T.onBeforeCompile(jt,M),ce=zt.acquireProgram(jt,$t),ae.set($t,ce),at.uniforms=jt.uniforms;const Yt=at.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Yt.clippingPlanes=A.uniform),ql(T,jt),at.needsLights=ff(T),at.lightsStateVersion=Bt,at.needsLights&&(Yt.ambientLightColor.value=$.state.ambient,Yt.lightProbe.value=$.state.probe,Yt.directionalLights.value=$.state.directional,Yt.directionalLightShadows.value=$.state.directionalShadow,Yt.spotLights.value=$.state.spot,Yt.spotLightShadows.value=$.state.spotShadow,Yt.rectAreaLights.value=$.state.rectArea,Yt.ltc_1.value=$.state.rectAreaLTC1,Yt.ltc_2.value=$.state.rectAreaLTC2,Yt.pointLights.value=$.state.point,Yt.pointLightShadows.value=$.state.pointShadow,Yt.hemisphereLights.value=$.state.hemi,Yt.directionalShadowMap.value=$.state.directionalShadowMap,Yt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Yt.spotShadowMap.value=$.state.spotShadowMap,Yt.spotLightMatrix.value=$.state.spotLightMatrix,Yt.spotLightMap.value=$.state.spotLightMap,Yt.pointShadowMap.value=$.state.pointShadowMap,Yt.pointShadowMatrix.value=$.state.pointShadowMatrix),at.currentProgram=ce,at.uniformsList=null,ce}function Xl(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=$r.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function ql(T,j){const st=Ct.get(T);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function hf(T,j,st,at,$){j.isScene!==!0&&(j=Qt),L.resetTextureUnits();const Lt=j.fog,Bt=at.isMeshStandardMaterial?j.environment:null,jt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:da,$t=(at.isMeshStandardMaterial?X:S).get(at.envMap||Bt),ae=at.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ce=!!st.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Yt=!!st.morphAttributes.position,xe=!!st.morphAttributes.normal,Pe=!!st.morphAttributes.color;let De=Gi;at.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(De=M.toneMapping);const fn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,be=fn!==void 0?fn.length:0,Zt=Ct.get(at),ti=p.state.lights;if(W===!0&&(tt===!0||T!==x)){const Sn=T===x&&at.id===w;A.setState(at,T,Sn)}let Se=!1;at.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==ti.state.version||Zt.outputColorSpace!==jt||$.isBatchedMesh&&Zt.batching===!1||!$.isBatchedMesh&&Zt.batching===!0||$.isBatchedMesh&&Zt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Zt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Zt.instancing===!1||!$.isInstancedMesh&&Zt.instancing===!0||$.isSkinnedMesh&&Zt.skinning===!1||!$.isSkinnedMesh&&Zt.skinning===!0||$.isInstancedMesh&&Zt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Zt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Zt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Zt.instancingMorph===!1&&$.morphTexture!==null||Zt.envMap!==$t||at.fog===!0&&Zt.fog!==Lt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==A.numPlanes||Zt.numIntersection!==A.numIntersection)||Zt.vertexAlphas!==ae||Zt.vertexTangents!==ce||Zt.morphTargets!==Yt||Zt.morphNormals!==xe||Zt.morphColors!==Pe||Zt.toneMapping!==De||Zt.morphTargetsCount!==be)&&(Se=!0):(Se=!0,Zt.__version=at.version);let Pn=Zt.currentProgram;Se===!0&&(Pn=rr(at,j,$));let Ss=!1,mn=!1,_a=!1;const Ie=Pn.getUniforms(),Vn=Zt.uniforms;if(gt.useProgram(Pn.program)&&(Ss=!0,mn=!0,_a=!0),at.id!==w&&(w=at.id,mn=!0),Ss||x!==T){gt.buffers.depth.getReversed()?(ut.copy(T.projectionMatrix),_p(ut),yp(ut),Ie.setValue(z,"projectionMatrix",ut)):Ie.setValue(z,"projectionMatrix",T.projectionMatrix),Ie.setValue(z,"viewMatrix",T.matrixWorldInverse);const wi=Ie.map.cameraPosition;wi!==void 0&&wi.setValue(z,_t.setFromMatrixPosition(T.matrixWorld)),ft.logarithmicDepthBuffer&&Ie.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,mn=!0,_a=!0)}if($.isSkinnedMesh){Ie.setOptional(z,$,"bindMatrix"),Ie.setOptional(z,$,"bindMatrixInverse");const Sn=$.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ie.setValue(z,"boneTexture",Sn.boneTexture,L))}$.isBatchedMesh&&(Ie.setOptional(z,$,"batchingTexture"),Ie.setValue(z,"batchingTexture",$._matricesTexture,L),Ie.setOptional(z,$,"batchingIdTexture"),Ie.setValue(z,"batchingIdTexture",$._indirectTexture,L),Ie.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Ie.setValue(z,"batchingColorTexture",$._colorsTexture,L));const ya=st.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&pt.update($,st,Pn),(mn||Zt.receiveShadow!==$.receiveShadow)&&(Zt.receiveShadow=$.receiveShadow,Ie.setValue(z,"receiveShadow",$.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Vn.envMap.value=$t,Vn.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(Vn.envMapIntensity.value=j.environmentIntensity),mn&&(Ie.setValue(z,"toneMappingExposure",M.toneMappingExposure),Zt.needsLights&&df(Vn,_a),Lt&&at.fog===!0&&Pt.refreshFogUniforms(Vn,Lt),Pt.refreshMaterialUniforms(Vn,at,q,nt,p.state.transmissionRenderTarget[T.id]),$r.upload(z,Xl(Zt),Vn,L)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&($r.upload(z,Xl(Zt),Vn,L),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(z,"center",$.center),Ie.setValue(z,"modelViewMatrix",$.modelViewMatrix),Ie.setValue(z,"normalMatrix",$.normalMatrix),Ie.setValue(z,"modelMatrix",$.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Sn=at.uniformsGroups;for(let wi=0,Ei=Sn.length;wi<Ei;wi++){const jl=Sn[wi];V.update(jl,Pn),V.bind(jl,Pn)}}return Pn}function df(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function ff(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,j,st){Ct.get(T.texture).__webglTexture=j,Ct.get(T.depthTexture).__webglTexture=st;const at=Ct.get(T);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=st===void 0,at.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,j){const st=Ct.get(T);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(T,j=0,st=0){U=T,C=j,E=st;let at=!0,$=null,Lt=!1,Bt=!1;if(T){const $t=Ct.get(T);if($t.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(z.FRAMEBUFFER,null),at=!1;else if($t.__webglFramebuffer===void 0)L.setupRenderTarget(T);else if($t.__hasExternalTextures)L.rebindTextures(T,Ct.get(T.texture).__webglTexture,Ct.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Yt=T.depthTexture;if($t.__boundDepthTexture!==Yt){if(Yt!==null&&Ct.has(Yt)&&(T.width!==Yt.image.width||T.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(T)}}const ae=T.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Bt=!0);const ce=Ct.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ce[j])?$=ce[j][st]:$=ce[j],Lt=!0):T.samples>0&&L.useMultisampledRTT(T)===!1?$=Ct.get(T).__webglMultisampledFramebuffer:Array.isArray(ce)?$=ce[st]:$=ce,N.copy(T.viewport),I.copy(T.scissor),F=T.scissorTest}else N.copy(St).multiplyScalar(q).floor(),I.copy(Vt).multiplyScalar(q).floor(),F=et;if(gt.bindFramebuffer(z.FRAMEBUFFER,$)&&at&&gt.drawBuffers(T,$),gt.viewport(N),gt.scissor(I),gt.setScissorTest(F),Lt){const $t=Ct.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,$t.__webglTexture,st)}else if(Bt){const $t=Ct.get(T.texture),ae=j||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,$t.__webglTexture,st||0,ae)}w=-1},this.readRenderTargetPixels=function(T,j,st,at,$,Lt,Bt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(jt=jt[Bt]),jt){gt.bindFramebuffer(z.FRAMEBUFFER,jt);try{const $t=T.texture,ae=$t.format,ce=$t.type;if(!ft.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-at&&st>=0&&st<=T.height-$&&z.readPixels(j,st,at,$,yt.convert(ae),yt.convert(ce),Lt)}finally{const $t=U!==null?Ct.get(U).__webglFramebuffer:null;gt.bindFramebuffer(z.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(T,j,st,at,$,Lt,Bt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=Ct.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(jt=jt[Bt]),jt){const $t=T.texture,ae=$t.format,ce=$t.type;if(!ft.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=T.width-at&&st>=0&&st<=T.height-$){gt.bindFramebuffer(z.FRAMEBUFFER,jt);const Yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),z.readPixels(j,st,at,$,yt.convert(ae),yt.convert(ce),0);const xe=U!==null?Ct.get(U).__webglFramebuffer:null;gt.bindFramebuffer(z.FRAMEBUFFER,xe);const Pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await xp(z,Pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.deleteBuffer(Yt),z.deleteSync(Pe),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,j=null,st=0){T.isTexture!==!0&&(Ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1]);const at=Math.pow(2,-st),$=Math.floor(T.image.width*at),Lt=Math.floor(T.image.height*at),Bt=j!==null?j.x:0,jt=j!==null?j.y:0;L.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,Bt,jt,$,Lt),gt.unbindTexture()},this.copyTextureToTexture=function(T,j,st=null,at=null,$=0){T.isTexture!==!0&&(Ba("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,T=arguments[1],j=arguments[2],$=arguments[3]||0,st=null);let Lt,Bt,jt,$t,ae,ce,Yt,xe,Pe;const De=T.isCompressedTexture?T.mipmaps[$]:T.image;st!==null?(Lt=st.max.x-st.min.x,Bt=st.max.y-st.min.y,jt=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,ae=st.min.y,ce=st.isBox3?st.min.z:0):(Lt=De.width,Bt=De.height,jt=De.depth||1,$t=0,ae=0,ce=0),at!==null?(Yt=at.x,xe=at.y,Pe=at.z):(Yt=0,xe=0,Pe=0);const fn=yt.convert(j.format),be=yt.convert(j.type);let Zt;j.isData3DTexture?(L.setTexture3D(j,0),Zt=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),Zt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),Zt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const ti=z.getParameter(z.UNPACK_ROW_LENGTH),Se=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Pn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ss=z.getParameter(z.UNPACK_SKIP_ROWS),mn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,De.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,De.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,ae),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ce);const _a=T.isDataArrayTexture||T.isData3DTexture,Ie=j.isDataArrayTexture||j.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Vn=Ct.get(T),ya=Ct.get(j),Sn=Ct.get(Vn.__renderTarget),wi=Ct.get(ya.__renderTarget);gt.bindFramebuffer(z.READ_FRAMEBUFFER,Sn.__webglFramebuffer),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Ei=0;Ei<jt;Ei++)_a&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ct.get(T).__webglTexture,$,ce+Ei),T.isDepthTexture?(Ie&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ct.get(j).__webglTexture,$,Pe+Ei),z.blitFramebuffer($t,ae,Lt,Bt,Yt,xe,Lt,Bt,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ie?z.copyTexSubImage3D(Zt,$,Yt,xe,Pe+Ei,$t,ae,Lt,Bt):z.copyTexSubImage2D(Zt,$,Yt,xe,Pe+Ei,$t,ae,Lt,Bt);gt.bindFramebuffer(z.READ_FRAMEBUFFER,null),gt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ie?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Zt,$,Yt,xe,Pe,Lt,Bt,jt,fn,be,De.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Zt,$,Yt,xe,Pe,Lt,Bt,jt,fn,De.data):z.texSubImage3D(Zt,$,Yt,xe,Pe,Lt,Bt,jt,fn,be,De):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$,Yt,xe,Lt,Bt,fn,be,De.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$,Yt,xe,De.width,De.height,fn,De.data):z.texSubImage2D(z.TEXTURE_2D,$,Yt,xe,Lt,Bt,fn,be,De);z.pixelStorei(z.UNPACK_ROW_LENGTH,ti),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Se),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ss),z.pixelStorei(z.UNPACK_SKIP_IMAGES,mn),$===0&&j.generateMipmaps&&z.generateMipmap(Zt),gt.unbindTexture()},this.copyTextureToTexture3D=function(T,j,st=null,at=null,$=0){return T.isTexture!==!0&&(Ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,at=arguments[1]||null,T=arguments[2],j=arguments[3],$=arguments[4]||0),Ba('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,j,st,at,$)},this.initRenderTarget=function(T){Ct.get(T).__webglFramebuffer===void 0&&L.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),gt.unbindTexture()},this.resetState=function(){C=0,E=0,U=null,gt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}class qi{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new qi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ga extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Px{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new B;class no{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),n=we(n,this.array),s=we(s,this.array),a=we(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new no(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ir extends bi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fs;const Ea=new B,Os=new B,Bs=new B,Vs=new Ut,Ta=new Ut,gd=new Me,Cr=new B,Aa=new B,Rr=new B,Xu=new Ut,Yo=new Ut,qu=new Ut;class po extends Be{constructor(t=new ir){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new Ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Px(e,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new no(n,3,0,!1)),Fs.setAttribute("uv",new no(n,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),gd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;Pr(Cr.set(-.5,-.5,0),Bs,r,Os,s,a),Pr(Aa.set(.5,-.5,0),Bs,r,Os,s,a),Pr(Rr.set(.5,.5,0),Bs,r,Os,s,a),Xu.set(0,0),Yo.set(1,0),qu.set(1,1);let o=t.ray.intersectTriangle(Cr,Aa,Rr,!1,Ea);if(o===null&&(Pr(Aa.set(-.5,.5,0),Bs,r,Os,s,a),Yo.set(0,1),o=t.ray.intersectTriangle(Cr,Rr,Aa,!1,Ea),o===null))return;const c=t.ray.origin.distanceTo(Ea);c<t.near||c>t.far||e.push({distance:c,point:Ea.clone(),uv:An.getInterpolation(Ea,Cr,Aa,Rr,Xu,Yo,qu,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Pr(i,t,e,n,s,a){Vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ta.x=a*Vs.x-s*Vs.y,Ta.y=s*Vs.x+a*Vs.y):Ta.copy(Vs),i.copy(t),i.x+=Ta.x,i.y+=Ta.y,i.applyMatrix4(gd)}class vd extends on{constructor(t=null,e=1,n=1,s,a,r,o,c,l=dn,h=dn,d,u){super(null,r,o,c,l,h,s,a,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gs=new Me,$u=new Me,Lr=[],Yu=new Xi,Lx=new Me,Ca=new J,Ra=new pa;class ps extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ju(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Yu.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Yu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pa),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gs),Ra.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ra)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ca.geometry=this.geometry,Ca.material=this.material,Ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(n),t.ray.intersectsSphere(Ra)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Gs),$u.multiplyMatrices(n,Gs),Ca.matrixWorld=$u,Ca.raycast(t,Lr);for(let r=0,o=Lr.length;r<o;r++){const c=Lr[r];c.instanceId=a,c.object=this,e.push(c)}Lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ju(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vd(new Float32Array(s*this.count),s,this.count,co,$n));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*t;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xd extends bi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ju=new Me,nl=new ho,Dr=new pa,Ir=new B;class _d extends Be{constructor(t=new Ze,e=new xd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=a,t.ray.intersectsSphere(Dr)===!1)return;Ju.copy(s).invert(),nl.copy(t.ray).applyMatrix4(Ju);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=u,v=f;g<v;g++){const m=l.getX(g);Ir.fromBufferAttribute(d,m),Ku(Ir,m,c,s,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,v=f;g<v;g++)Ir.fromBufferAttribute(d,g),Ku(Ir,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ku(i,t,e,n,s,a,r){const o=nl.distanceSqToPoint(i);if(o<e){const c=new B;nl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Rn extends on{constructor(t,e,n,s,a,r,o,c,l){super(t,e,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,c=a-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-r,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(a-1);const h=n[s],u=n[s+1]-h,f=(r-h)/u;return(s+f)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),c=e||(r.isVector2?new Ut:new B);return c.copy(o).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new B,s=[],a=[],r=[],o=new B,c=new Me;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new B)}a[0]=new B,r[0]=new B;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=t;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ye(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(c.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(e===!0){let f=Math.acos(Ye(a[0].dot(a[t]),-1,1));f/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(f=-f);for(let g=1;g<=t;g++)a[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dl extends Qn{constructor(t=0,e=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Ut){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dx extends Dl{constructor(t,e,n,s,a,r){super(t,e,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Il(){let i=0,t=0,e=0,n=0;function s(a,r,o,c){i=a,t=o,e=-3*a+3*r-2*o-c,n=2*a-2*r+o+c}return{initCatmullRom:function(a,r,o,c,l){s(r,o,l*(o-a),l*(c-r))},initNonuniformCatmullRom:function(a,r,o,c,l,h,d){let u=(r-a)/l-(o-a)/(l+h)+(o-r)/h,f=(o-r)/h-(c-r)/(h+d)+(c-o)/d;u*=h,f*=h,s(r,o,u,f)},calc:function(a){const r=a*a,o=r*a;return i+t*a+e*r+n*o}}}const Ur=new B,Jo=new Il,Ko=new Il,Zo=new Il;class Ix extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%a]:(Ur.subVectors(s[0],s[1]).add(s[0]),l=Ur);const d=s[o%a],u=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(Ur.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Jo.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,m),Ko.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,m),Zo.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Ko.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Zo.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Jo.calc(c),Ko.calc(c),Zo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zu(i,t,e,n,s){const a=(n-t)*.5,r=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+a+r)*c+(-3*e+3*n-2*a-r)*o+a*i+e}function Ux(i,t){const e=1-i;return e*e*t}function Nx(i,t){return 2*(1-i)*i*t}function zx(i,t){return i*i*t}function ja(i,t,e,n){return Ux(i,t)+Nx(i,e)+zx(i,n)}function kx(i,t){const e=1-i;return e*e*e*t}function Fx(i,t){const e=1-i;return 3*e*e*i*t}function Ox(i,t){return 3*(1-i)*i*i*t}function Bx(i,t){return i*i*i*t}function $a(i,t,e,n,s){return kx(i,t)+Fx(i,e)+Ox(i,n)+Bx(i,s)}class yd extends Qn{constructor(t=new Ut,e=new Ut,n=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ut){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set($a(t,s.x,a.x,r.x,o.x),$a(t,s.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vx extends Qn{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set($a(t,s.x,a.x,r.x,o.x),$a(t,s.y,a.y,r.y,o.y),$a(t,s.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Md extends Qn{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gx extends Qn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bd extends Qn{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(ja(t,s.x,a.x,r.x),ja(t,s.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hx extends Qn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set(ja(t,s.x,a.x,r.x),ja(t,s.y,a.y,r.y),ja(t,s.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sd extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){const n=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(Zu(o,c.x,l.x,h.x,d.x),Zu(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Ut().fromArray(s))}return this}}var Qu=Object.freeze({__proto__:null,ArcCurve:Dx,CatmullRomCurve3:Ix,CubicBezierCurve:yd,CubicBezierCurve3:Vx,EllipseCurve:Dl,LineCurve:Md,LineCurve3:Gx,QuadraticBezierCurve:bd,QuadraticBezierCurve3:Hx,SplineCurve:Sd});class Wx extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Qu[s.type]().fromJSON(s))}return this}}class Xx extends Wx{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Md(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new bd(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,r){const o=new yd(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s),new Ut(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,r){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,a,r),this}absarc(t,e,n,s,a,r){return this.absellipse(t,e,n,n,s,a,r),this}ellipse(t,e,n,s,a,r,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,a,r,o,c),this}absellipse(t,e,n,s,a,r,o,c){const l=new Dl(t,e,n,s,a,r,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ul extends Ze{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ye(s,0,Math.PI*2);const a=[],r=[],o=[],c=[],l=[],h=1/e,d=new B,u=new Ut,f=new B,g=new B,v=new B;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=e;_++){const b=n+_*h*s,M=Math.sin(b),P=Math.cos(b);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*M,d.y=t[C].y,d.z=t[C].x*P,r.push(d.x,d.y,d.z),u.x=_/e,u.y=C/(t.length-1),o.push(u.x,u.y);const E=c[3*C+0]*M,U=c[3*C+1],w=c[3*C+0]*P;l.push(E,U,w)}}for(let _=0;_<e;_++)for(let b=0;b<t.length-1;b++){const M=b+_*t.length,P=M,C=M+t.length,E=M+t.length+1,U=M+1;a.push(P,C,U),a.push(E,U,C)}this.setIndex(a),this.setAttribute("position",new Ce(r,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.points,t.segments,t.phiStart,t.phiLength)}}class pn extends Ul{constructor(t=1,e=1,n=4,s=8){const a=new Xx;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new pn(t.radius,t.length,t.capSegments,t.radialSegments)}}class nn extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const a=[],r=[],o=[],c=[],l=new B,h=new Ut;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class te extends Ze{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(f,2));function _(){const M=new B,P=new B;let C=0;const E=(e-t)/n;for(let U=0;U<=a;U++){const w=[],x=U/a,N=x*(e-t)+t;for(let I=0;I<=s;I++){const F=I/s,G=F*c+o,Z=Math.sin(G),H=Math.cos(G);P.x=N*Z,P.y=-x*n+m,P.z=N*H,d.push(P.x,P.y,P.z),M.set(Z,E,H).normalize(),u.push(M.x,M.y,M.z),f.push(F,1-x),w.push(g++)}v.push(w)}for(let U=0;U<s;U++)for(let w=0;w<a;w++){const x=v[w][U],N=v[w+1][U],I=v[w+1][U+1],F=v[w][U+1];(t>0||w!==0)&&(h.push(x,N,F),C+=3),(e>0||w!==a-1)&&(h.push(N,I,F),C+=3)}l.addGroup(p,C,0),p+=C}function b(M){const P=g,C=new Ut,E=new B;let U=0;const w=M===!0?t:e,x=M===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*x,0),u.push(0,x,0),f.push(.5,.5),g++;const N=g;for(let I=0;I<=s;I++){const G=I/s*c+o,Z=Math.cos(G),H=Math.sin(G);E.x=w*H,E.y=m*x,E.z=w*Z,d.push(E.x,E.y,E.z),u.push(0,x,0),C.x=Z*.5+.5,C.y=H*.5*x+.5,f.push(C.x,C.y),g++}for(let I=0;I<s;I++){const F=P+I,G=N+I;M===!0?h.push(G,G+1,F):h.push(G+1,G,F),U+=3}l.addGroup(p,U,M===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mn extends te{constructor(t=1,e=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Mn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mo extends Ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],r=[];o(s),l(n),h(),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(a.slice(),3)),this.setAttribute("uv",new Ce(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const b=new B,M=new B,P=new B;for(let C=0;C<e.length;C+=3)f(e[C+0],b),f(e[C+1],M),f(e[C+2],P),c(b,M,P,_)}function c(_,b,M,P){const C=P+1,E=[];for(let U=0;U<=C;U++){E[U]=[];const w=_.clone().lerp(M,U/C),x=b.clone().lerp(M,U/C),N=C-U;for(let I=0;I<=N;I++)I===0&&U===C?E[U][I]=w:E[U][I]=w.clone().lerp(x,I/N)}for(let U=0;U<C;U++)for(let w=0;w<2*(C-U)-1;w++){const x=Math.floor(w/2);w%2===0?(u(E[U][x+1]),u(E[U+1][x]),u(E[U][x])):(u(E[U][x+1]),u(E[U+1][x+1]),u(E[U+1][x]))}}function l(_){const b=new B;for(let M=0;M<a.length;M+=3)b.x=a[M+0],b.y=a[M+1],b.z=a[M+2],b.normalize().multiplyScalar(_),a[M+0]=b.x,a[M+1]=b.y,a[M+2]=b.z}function h(){const _=new B;for(let b=0;b<a.length;b+=3){_.x=a[b+0],_.y=a[b+1],_.z=a[b+2];const M=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;r.push(M,1-P)}g(),d()}function d(){for(let _=0;_<r.length;_+=6){const b=r[_+0],M=r[_+2],P=r[_+4],C=Math.max(b,M,P),E=Math.min(b,M,P);C>.9&&E<.1&&(b<.2&&(r[_+0]+=1),M<.2&&(r[_+2]+=1),P<.2&&(r[_+4]+=1))}}function u(_){a.push(_.x,_.y,_.z)}function f(_,b){const M=_*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function g(){const _=new B,b=new B,M=new B,P=new B,C=new Ut,E=new Ut,U=new Ut;for(let w=0,x=0;w<a.length;w+=9,x+=6){_.set(a[w+0],a[w+1],a[w+2]),b.set(a[w+3],a[w+4],a[w+5]),M.set(a[w+6],a[w+7],a[w+8]),C.set(r[x+0],r[x+1]),E.set(r[x+2],r[x+3]),U.set(r[x+4],r[x+5]),P.copy(_).add(b).add(M).divideScalar(3);const N=m(P);v(C,x+0,_,N),v(E,x+2,b,N),v(U,x+4,M,N)}}function v(_,b,M,P){P<0&&_.x===1&&(r[b]=_.x-1),M.x===0&&M.z===0&&(r[b]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.vertices,t.indices,t.radius,t.details)}}class go extends mo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new go(t.radius,t.detail)}}class vo extends mo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vo(t.radius,t.detail)}}class bn extends Ze{constructor(t=.5,e=1,n=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:a,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let d=t;const u=(e-t)/s,f=new B,g=new Ut;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=a+m/n*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const _=p+m,b=_,M=_+n+1,P=_+n+2,C=_+1;o.push(b,M,C),o.push(M,P,C)}}this.setIndex(o),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class re extends Ze{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],d=new B,u=new B,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],b=p/n;let M=0;p===0&&r===0?M=.5/e:p===n&&c===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const C=P/e;d.x=-t*Math.cos(s+C*a)*Math.sin(r+b*o),d.y=t*Math.cos(r+b*o),d.z=t*Math.sin(s+C*a)*Math.sin(r+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(C+M,1-b),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const b=h[p][_+1],M=h[p][_],P=h[p+1][_],C=h[p+1][_+1];(p!==0||r>0)&&f.push(b,M,C),(p!==n-1||c<Math.PI)&&f.push(M,P,C)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class je extends Ze{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],c=[],l=[],h=new B,d=new B,u=new B;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*a,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;r.push(v,m,_),r.push(m,p,_)}this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qx extends bi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ji extends bi{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ee(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class di extends bi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lo,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xo extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class sr extends xo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qo=new Me,th=new B,eh=new B;class wd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;th.setFromMatrixPosition(t.matrixWorld),e.position.copy(th),eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eh),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nh=new Me,Pa=new B,tc=new B;class jx extends wd{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new Ae(2,1,1,1),new Ae(0,1,1,1),new Ae(3,1,1,1),new Ae(1,1,1,1),new Ae(3,0,1,1),new Ae(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Pa.setFromMatrixPosition(t.matrixWorld),n.position.copy(Pa),tc.copy(n.position),tc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(tc),n.updateMatrixWorld(),s.makeTranslation(-Pa.x,-Pa.y,-Pa.z),nh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh)}}class ih extends xo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $x extends wd{constructor(){super(new ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yi extends xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new $x}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ed extends xo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const sh=new Me;class Yx{constructor(t,e,n=0,s=1/0){this.ray=new ho(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(t,e=!0,n=[]){return il(t,this,n,e),n.sort(ah),n}intersectObjects(t,e=!0,n=[]){for(let s=0,a=t.length;s<a;s++)il(t[s],this,n,e);return n.sort(ah),n}}function ah(i,t){return i.distance-t.distance}function il(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const a=i.children;for(let r=0,o=a.length;r<o;r++)il(a[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);class Jx{constructor(t){this.canvas=t,this.renderer=new Rx({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.current=null,this.t=0,this.last=performance.now(),this.running=!0,addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{this.last=performance.now()}),this.resize(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}resize(){const t=innerWidth,e=innerHeight;if(this.renderer.setSize(t,e,!1),this.current){const n=this.current.camera;n&&n.isPerspectiveCamera&&(n.aspect=t/e,n.updateProjectionMatrix()),this.current.resize&&this.current.resize(t,e)}}setScene(t){this.current&&this.current.dispose&&this.current.dispose(),this.current=null,this.current=t(),this.resize()}loop(t){requestAnimationFrame(this.loop);const e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.t+=e;const n=this.current;n&&(n.update(e,this.t),this.renderer.render(n.scene,n.camera))}}const Kx="https://juanbracco2001-eng.github.io/Cachetazo/",Td="potrero-perfil-v1",Oe=[{id:"albiceleste",name:"Albiceleste",pattern:"stripes10",c1:"#75aadb",c2:"#f7f7f4",sleeve:"#75aadb",rarity:"comun",unlock:{type:"start"}},{id:"rojo",name:"Rojo liso",pattern:"solid",c1:"#c9382f",c2:"#f7f7f4",sleeve:"#c9382f",rarity:"comun",unlock:{type:"start"}},{id:"azul-franja",name:"Azul con franja",pattern:"band",c1:"#1b3a8c",c2:"#f2c21b",sleeve:"#1b3a8c",rarity:"comun",unlock:{type:"start"}},{id:"banda-roja",name:"Banda roja",pattern:"sash",c1:"#f7f7f4",c2:"#c9382f",sleeve:"#f7f7f4",rarity:"rara",unlock:{type:"level",level:2}},{id:"rojiblanca",name:"Rojiblanca",pattern:"stripes10",c1:"#c9382f",c2:"#f7f7f4",sleeve:"#c9382f",rarity:"rara",unlock:{type:"level",level:3}},{id:"rojinegra",name:"Rojinegra",pattern:"stripes6",c1:"#c9382f",c2:"#15161a",sleeve:"#15161a",rarity:"comun",unlock:{type:"chest"}},{id:"azulgrana",name:"Azulgrana",pattern:"stripes6",c1:"#1d3f8f",c2:"#8c1d2f",sleeve:"#8c1d2f",rarity:"rara",unlock:{type:"chest"}},{id:"granate",name:"Granate",pattern:"solid",c1:"#7a1a2b",c2:"#f7f7f4",sleeve:"#7a1a2b",rarity:"comun",unlock:{type:"chest"}},{id:"verdiblanca",name:"Verdiblanca",pattern:"stripes10",c1:"#2f8f5b",c2:"#f7f7f4",sleeve:"#2f8f5b",rarity:"rara",unlock:{type:"chest"}},{id:"blanquinegra",name:"Blanquinegra",pattern:"stripes10",c1:"#f7f7f4",c2:"#15161a",sleeve:"#15161a",rarity:"rara",unlock:{type:"chest"}},{id:"celeste-liso",name:"Celeste liso",pattern:"solid",c1:"#8ec5f0",c2:"#f7f7f4",sleeve:"#8ec5f0",rarity:"comun",unlock:{type:"chest"}},{id:"azul-amarilla",name:"Azul y amarilla",pattern:"stripes6",c1:"#1b3a8c",c2:"#f2c21b",sleeve:"#f2c21b",rarity:"epica",unlock:{type:"tournament",wins:1}},{id:"retro-aros",name:"Retro de aros",pattern:"hoops",c1:"#c9382f",c2:"#f7f7f4",sleeve:"#c9382f",rarity:"epica",unlock:{type:"level",level:8}},{id:"dorada",name:"Dorada",pattern:"solid",c1:"#e0a912",c2:"#f7f7f4",sleeve:"#e0a912",rarity:"legendaria",unlock:{type:"tournament",wins:3}},{id:"suplente",name:"Suplente negra",pattern:"band",c1:"#15161a",c2:"#75aadb",sleeve:"#15161a",rarity:"legendaria",unlock:{type:"level",level:10}}],Qa={comun:{name:"Común",weight:6,color:"#9fb0cc"},rara:{name:"Rara",weight:3,color:"#75aadb"},epica:{name:"Épica",weight:1.2,color:"#b57cf0"},legendaria:{name:"Legendaria",weight:.4,color:"#f6b40e"}},Ad=i=>Math.max(0,Oe.findIndex(t=>t.id===i)),Zx=Oe.filter(i=>i.unlock.type==="start").map(i=>i.id);function io(i){const t=i.unlock;return t.type==="start"?"La tenés desde el inicio":t.type==="level"?`Nivel ${t.level}`:t.type==="tournament"?t.wins===1?"Ganá 1 torneo":`Ganá ${t.wins} torneos`:"Sale de los cofres"}const Ms=[{key:"sk",title:"Piel",color:!0,items:["#f1c7a5","#e3b48f","#d39b74","#b97a50","#8a5a3c","#5e3b26"]},{key:"hs",title:"Pelo",items:[["buzz","Corto"],["bald","Pelado"],["fade","Degradé"],["swept","Peinado"],["long","Largo"],["dreads","Rastas"],["bob","Melena"],["slick","Engominado"],["curly","Rulos"],["bun","Rodete"]]},{key:"hc",title:"Color de pelo",color:!0,items:["#110c0b","#3a2418","#7a4a22","#b5541c","#d9b25c","#d9d3c9","#2f5fd0","#d0306a"]},{key:"bd",title:"Barba",items:[["none","Sin barba"],["full","Completa"],["trim","Candado"],["mustache","Bigote"],["fumanchu","Bigote largo"],["goatee","Chivita"]]},{key:"of",title:"Ropa",items:[["tee","Remera"],["kit","Casaca"],["poncho","Poncho"],["jacket","Campera"],["apron","Delantal"]]},{key:"kt",title:"Casaca",kit:!0,items:Oe.map(i=>[i.id,i.name])},{key:"sh",title:"Color de ropa",color:!0,items:["#e8e4da","#1c2a4a","#c9382f","#2f8f5b","#e6a817","#6a3fa0","#2a2a30","#e07b39"]},{key:"ht",title:"En la cabeza",items:[["","Nada"],["beret","Boina"],["cap","Gorra"],["beanie","Gorro"],["hincha","Gorro de hincha"],["chullo","Chullo"],["gaucho","Sombrero"],["vincha","Vincha"]]},{key:"sf",title:"Bufanda",items:[["","Sin bufanda"],["scarf","Bufanda de hincha"]]},{key:"pr",title:"En la mano",items:[["","Nada"],["pizza","Pizza"],["beer","Cerveza",!0],["fernet","Fernet",!0],["mate","Mate"],["choripan","Choripán"],["vuvu","Bubusela"],["flag","Bandera"],["faso","Faso",!0]]},{key:"ex",title:"Cara",items:[["calm","Tranqui"],["shout","Gritando el gol"],["cry","Llorando de emoción"],["sing","Cantando"]]}],Nl={sk:2,hs:3,hc:1,bd:0,of:1,kt:0,sh:0,ht:0,sf:0,pr:0,ex:1},Cd=i=>Array.isArray(i)?i[0]:i,rh=(i,t)=>{const e=Ms.find(s=>s.key===i),n=e&&e.items[t];return Array.isArray(n)?n[1]:n},Gn=(i,t)=>{const e=Ms.find(n=>n.key===i);return e?Cd(e.items[t]):void 0};function Bi(i,t){const e=Ms.find(s=>s.key===i),n=e?e.items.findIndex(s=>Cd(s)===t):-1;return n<0?Nl[i]:n}const sl=(i,t)=>{const e=Ms.find(s=>s.key===i),n=e&&e.items[t];return Array.isArray(n)&&n[2]===!0};function Rd(i){const t={};for(const e of Ms){const n=Math.floor(Number(i&&i[e.key]));t[e.key]=Number.isFinite(n)&&n>=0&&n<e.items.length?n:Nl[e.key]}return t}function Qx(i,t=!0){const e={};for(const n of Ms){let s=n.items.map((a,r)=>r);n.key==="kt"&&i&&i.length&&(s=i),t||(s=s.filter(a=>!sl(n.key,a))),e[n.key]=s[Math.floor(Math.random()*s.length)]}return e}const ri=i=>{const t={};for(const e in i)t[e]=Bi(e,i[e]);return t},zl=[{id:"jujeno",name:"El Jujeño",region:"Jujuy · NOA",tag:"Baja de la quebrada con la bubusela y el aguante de siempre.",look:ri({sk:"#8a5a3c",hs:"bob",hc:"#110c0b",bd:"none",of:"kit",kt:"albiceleste",ht:"chullo",sf:"scarf",pr:"vuvu",ex:"shout"})},{id:"cordobesa",name:"La Cordobesa",region:"Córdoba",tag:"Fernet, cuarteto y cantar los noventa minutos.",look:ri({sk:"#e3b48f",hs:"long",hc:"#3a2418",bd:"none",of:"kit",kt:"azul-franja",ht:"vincha",sh:"#c9382f",sf:"",pr:"fernet",ex:"sing"})},{id:"correntino",name:"El Correntino",region:"Corrientes · Litoral",tag:"Mate en mano y chamamé en la tribuna.",look:ri({sk:"#b97a50",hs:"slick",hc:"#110c0b",bd:"fumanchu",of:"kit",kt:"rojo",ht:"gaucho",sh:"#3a2418",sf:"",pr:"mate",ex:"sing"})},{id:"rosarina",name:"La Rosarina",region:"Rosario · Santa Fe",tag:"Llora, grita y abraza a medio estadio, rival incluido.",look:ri({sk:"#d39b74",hs:"bun",hc:"#b5541c",bd:"none",of:"kit",kt:"rojo",ht:"",sf:"scarf",pr:"choripan",ex:"cry"})},{id:"cacho",name:"Cacho",region:"Conurbano · Buenos Aires",tag:"Birra, bombo y aguante desde la popular.",look:ri({sk:"#d39b74",hs:"buzz",hc:"#3a2418",bd:"goatee",of:"kit",kt:"albiceleste",ht:"cap",sf:"",pr:"beer",ex:"shout"})},{id:"oso",name:"Oso",region:"Chubut · Patagonia",tag:"Con el viento de frente y la campera puesta: no hay clima que lo calle.",look:ri({sk:"#f1c7a5",hs:"long",hc:"#7a4a22",bd:"full",of:"jacket",sh:"#2f8f5b",ht:"beanie",sf:"scarf",pr:"mate",ex:"shout"})},{id:"tano",name:"El Tano",region:"Buenos Aires · herencia italiana",tag:"Pizza en una mano, el puño en la otra.",look:ri({sk:"#e3b48f",hs:"slick",hc:"#d9d3c9",bd:"mustache",of:"kit",kt:"azul-franja",ht:"beret",sf:"",pr:"pizza",ex:"shout"})},{id:"mendocina",name:"La Mendocina",region:"Mendoza · Cuyo",tag:"Bandera arriba hasta que se canse el brazo.",look:ri({sk:"#b97a50",hs:"curly",hc:"#110c0b",bd:"none",of:"kit",kt:"rojo",ht:"hincha",sf:"scarf",pr:"flag",ex:"shout"})},{id:"tucumano",name:"El Tucumano",region:"Tucumán · NOA",tag:"Nervioso, apasionado y con el fasito en la boca hasta en los penales.",look:ri({sk:"#d39b74",hs:"curly",hc:"#110c0b",bd:"trim",of:"kit",kt:"albiceleste",ht:"cap",sf:"",pr:"faso",ex:"cry"})}],kl=[{id:"papa",name:"Papa",seed:8,sell:17,mins:1.5,lvl:1,color:"#c9a36a",xp:1},{id:"maiz",name:"Maíz",seed:10,sell:24,mins:2.5,lvl:1,color:"#f2c230",xp:1},{id:"tomate",name:"Tomate",seed:15,sell:38,mins:4,lvl:2,color:"#d9402f",xp:2},{id:"girasol",name:"Girasol",seed:22,sell:58,mins:6,lvl:3,color:"#f6b40e",xp:2},{id:"trigo",name:"Trigo",seed:28,sell:74,mins:9,lvl:4,color:"#d9b25c",xp:3},{id:"uva",name:"Uva",seed:45,sell:125,mins:14,lvl:6,color:"#7a3b8f",xp:4},{id:"yerba",name:"Yerba mate",seed:70,sell:210,mins:22,lvl:8,color:"#3f7a3a",xp:5}],Pd=kl.map(i=>i.id),ms=i=>kl.find(t=>t.id===i)||null,xs={id:"huevo",name:"Huevo",sell:12},t_=[...Pd,xs.id],ec=i=>i===xs.id?xs.name:(ms(i)||{}).name||i,_o={parcelas:{name:"Más parcelas",desc:"+3 parcelas para sembrar",costs:[120,300,600],max:3},riego:{name:"Regadera grande",desc:"Cada riego adelanta más el cultivo",costs:[80,200,400],max:3},semillas:{name:"Semillas mejoradas",desc:"Los cultivos crecen un 10% más rápido",costs:[150,400,900],max:3},gallinas:{name:"Gallinero",desc:"Suma una gallina: pone huevos solita",costs:[100,160,240,320],max:4}},Ld=Object.keys(_o),Yr=250,e_=40,n_=8,i_=4,Fl=2,Hs=(i,t,e,n=t)=>{const s=Math.floor(Number(i));return Number.isFinite(s)?Math.min(e,Math.max(t,s)):n},Dd=i=>6+3*i.parcelas,s_=i=>Math.floor(i/100)+1;function a_(i){const t=i&&typeof i=="object"?i:{},e={};for(const o of Ld)e[o]=Hs(t.up&&t.up[o],0,_o[o].max,0);const n=Dd(e),s=Array.from({length:n},(o,c)=>{const l=t.plots&&t.plots[c],h=l&&Pd.includes(l.c)?l.c:"";return h?{c:h,t:Hs(l.t,0,4e12,0),w:Hs(l.w,0,Fl,0)}:{c:"",t:0,w:0}}),a={};for(const o of t_){const c=Hs(t.inv&&t.inv[o],0,999999,0);c&&(a[o]=c)}const r={n:Hs(t.eggs&&t.eggs.n,0,99,0),t:Hs(t.eggs&&t.eggs.t,0,4e12,0)};return{started:t.started===!0,plots:s,inv:a,up:e,eggs:r}}const Id=(i,t)=>i.mins*6e4*(1-.1*t.semillas),r_=(i,t)=>Id(i,t)*(.12+.08*t.riego);function Ya(i,t,e){const n=i.plots[t];if(!n||!n.c)return{empty:!0};const s=ms(n.c),a=Id(s,i.up),r=Math.max(0,e-n.t)+n.w*r_(s,i.up),o=Math.min(1,r/a);return{empty:!1,crop:s,prog:o,ready:o>=1,remaining:Math.max(0,a-r),water:n.w,canWater:n.w<Fl&&o<1}}function o_(i){return i.farm.started?!1:(i.farm.started=!0,i.coins+=e_,!0)}function oh(i,t,e,n){const s=i.farm,a=ms(e),r=s.plots[t];return!r||!a?{ok:!1,reason:"No se puede sembrar acá"}:r.c?{ok:!1,reason:"Ya hay algo sembrado"}:s_(i.xp)<a.lvl?{ok:!1,reason:`${a.name} se desbloquea en el nivel ${a.lvl}`}:i.coins<a.seed?{ok:!1,reason:`Te faltan monedas (${a.seed})`}:(i.coins-=a.seed,s.plots[t]={c:a.id,t:n,w:0},{ok:!0,crop:a})}function Ud(i,t,e){const n=Ya(i.farm,t,e);return n.empty?{ok:!1,reason:"Nada que regar"}:n.ready?{ok:!1,reason:"Ya está listo para cosechar"}:n.canWater?(i.farm.plots[t].w+=1,{ok:!0}):{ok:!1,reason:"Ya está bien regado"}}function Nd(i,t,e){const n=Ya(i.farm,t,e);if(n.empty)return{ok:!1,reason:"Nada que cosechar"};if(!n.ready)return{ok:!1,reason:"Todavía no está listo"};const s=n.crop.id;return i.farm.inv[s]=(i.farm.inv[s]||0)+1,i.farm.plots[t]={c:"",t:0,w:0},i.xp+=n.crop.xp,{ok:!0,crop:n.crop,xp:n.crop.xp}}function c_(i,t){const e={};let n=0,s=0;for(let a=0;a<i.farm.plots.length;a++){const r=Nd(i,a,t);r.ok&&(e[r.crop.id]=(e[r.crop.id]||0)+1,n++,s+=r.xp)}return{ok:n>0,n,got:e,xp:s,reason:n?"":"No hay nada listo para cosechar"}}function l_(i,t){let e=0;for(let n=0;n<i.farm.plots.length;n++)Ud(i,n,t).ok&&e++;return{ok:e>0,n:e,reason:e?"":"No hay nada para regar"}}function u_(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function h_(i){const t=new Date(i);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}function zd(i,t){return .8+u_(i+h_(t))%46/100}function al(i,t){const e=i===xs.id?xs.sell:(ms(i)||{sell:0}).sell;return Math.max(1,Math.round(e*zd(i,t)))}function rl(i,t,e,n){const s=i.farm.inv[t]||0,a=n==null?s:Math.min(s,n);if(a<1)return{ok:!1,reason:"No tenés de eso"};const r=a*al(t,e);return i.farm.inv[t]=s-a,i.farm.inv[t]||delete i.farm.inv[t],i.coins+=r,{ok:!0,n:a,gain:r}}function d_(i,t){let e=0,n=0;for(const s of Object.keys(i.farm.inv)){const a=rl(i,s,t);a.ok&&(e+=a.gain,n+=a.n)}return{ok:n>0,n,gain:e,reason:n?"":"No tenés nada para vender"}}function kd(i,t){const e=_o[t],n=i.up[t];return n>=e.max?null:e.costs[n]}function f_(i,t,e){const n=kd(i.farm,t);if(n==null)return{ok:!1,reason:"Ya está al máximo"};if(i.coins<n)return{ok:!1,reason:`Te faltan monedas (${n})`};if(Ol(i.farm,e),i.coins-=n,i.farm.up[t]+=1,t==="parcelas")for(;i.farm.plots.length<Dd(i.farm.up);)i.farm.plots.push({c:"",t:0,w:0});return t==="gallinas"&&i.farm.up.gallinas===1&&(i.farm.eggs.t=e),{ok:!0,cost:n}}const p_=i=>i.up.gallinas*i_;function Ol(i,t){const e=i.up.gallinas;if(!e){i.eggs.n=0,i.eggs.t=t;return}const n=n_*6e4/e,s=p_(i);if(i.eggs.n>=s){i.eggs.n=s,i.eggs.t=t;return}const a=Math.floor(Math.max(0,t-i.eggs.t)/n);a>0&&(i.eggs.n=Math.min(s,i.eggs.n+a),i.eggs.t=i.eggs.n>=s?t:i.eggs.t+a*n)}function m_(i,t){Ol(i.farm,t);const e=i.farm.eggs.n;return e?(i.farm.inv[xs.id]=(i.farm.inv[xs.id]||0)+e,i.farm.eggs.n=0,i.farm.eggs.t=t,{ok:!0,n:e}):{ok:!1,reason:"Todavía no pusieron huevos"}}function g_(i){return i.coins<Yr?{ok:!1,reason:`Te faltan monedas (${Yr})`}:(i.coins-=Yr,i.chests+=1,{ok:!0})}const ch=i=>{const t=Math.ceil(i/1e3);return t>=3600?`${Math.floor(t/3600)} h ${Math.floor(t%3600/60)} min`:t>=60?`${Math.floor(t/60)} min ${t%60} s`:`${t} s`},kn=6,ds=[{id:"rosario",name:"Rosario",country:"Argentina",lat:-32.95,lon:-60.64,home:!0,landmark:"Monumento a la Bandera",blurb:"Tu ciudad. La cuna de la bandera, a orillas del Paraná.",fact:"El Monumento a la Bandera mide 70 metros y tiene forma de proa de barco mirando al río.",sky:"#8cc8ee",ground:"#8bb86a",accent:"#75aadb",souvenirs:[["Mate","cyl","#5a8f3a"],["Alfajor","disc","#6b4226"],["Banderita","box","#75aadb"],["Surubí","cone","#8a8f99"],["Vinilo","disc","#1c1c24"],["Barquito","box","#e8e4da"]],music:{bpm:100,scale:"major",root:7,inst:"guitar",drums:"cumbia",bass:"raices",lead:"pregunta",swing:.1}},{id:"buenosaires",name:"Buenos Aires",country:"Argentina",lat:-34.6,lon:-58.4,landmark:"El Obelisco",blurb:"La Avenida 9 de Julio, el Obelisco y una pizzería en cada esquina.",fact:"La 9 de Julio es una de las avenidas más anchas del mundo: tiene hasta 16 carriles.",sky:"#9fb4d6",ground:"#9a9fa8",accent:"#e07b39",souvenirs:[["Medialuna","torus","#e0a64a"],["Bandoneón","box","#2a2a34"],["Fugazzeta","disc","#f2c230"],["Colectivo","box","#d9402f"],["Facturas","torus","#e8c9a0"],["Libro","box","#7a3b8f"]],music:{bpm:92,scale:"phrygian",root:9,inst:"piano",drums:"boombap",bass:"raices",lead:"escalera",swing:.2}},{id:"mendoza",name:"Mendoza",country:"Argentina",lat:-32.9,lon:-68.8,landmark:"Bodega y cordillera",blurb:"Viñedos al pie de la cordillera, con el Aconcagua de fondo.",fact:"El Aconcagua, con casi 7.000 metros, es la montaña más alta fuera de Asia.",sky:"#8ec3ea",ground:"#b5a77a",accent:"#7a3b8f",souvenirs:[["Malbec","bottle","#5a1530"],["Uvas","sphere","#7a3b8f"],["Aceitunas","sphere","#5d6b2a"],["Sombrero","cone","#c9a36a"],["Copo de nieve","star","#e8f1fa"],["Aceite","bottle","#c9c43a"]],music:{bpm:84,scale:"pentMaj",root:2,inst:"guitar",drums:"cumbia",bass:"808",lead:"arpegio",swing:0}},{id:"rio",name:"Río de Janeiro",country:"Brasil",lat:-22.9,lon:-43.2,landmark:"Cristo Redentor",blurb:"Playa, samba y el Cristo mirando desde el Corcovado.",fact:"El Cristo Redentor mide 30 metros y es una de las siete maravillas del mundo moderno.",sky:"#7ed0f0",ground:"#e6d29a",accent:"#2fa05a",souvenirs:[["Pandeiro","disc","#d9b25c"],["Caipirinha","cyl","#9bd44a"],["Pelota","sphere","#e8e4da"],["Coco","sphere","#6b4a2a"],["Ojotas","box","#2fa05a"],["Tamborim","disc","#d9402f"]],music:{bpm:104,scale:"major",root:0,inst:"guitar",drums:"dembow",bass:"caminante",lead:"arpegio",swing:.15}},{id:"paris",name:"París",country:"Francia",lat:48.86,lon:2.35,landmark:"Torre Eiffel",blurb:"Boulevares, cafés y una torre de hierro que se ve desde todos lados.",fact:"La Torre Eiffel se hizo para una exposición universal en 1889 y se pensó desmontarla a los 20 años.",sky:"#b8cbe6",ground:"#b9c28c",accent:"#d9402f",souvenirs:[["Baguette","cyl","#d9a85c"],["Croissant","torus","#e0a64a"],["Boina","disc","#2a2a34"],["Torre mini","cone","#6b6b7a"],["Macaron","disc","#f08fb0"],["Pincel","cyl","#3f7ac0"]],music:{bpm:112,scale:"major",root:5,inst:"piano",drums:"boombap",bass:"raices",lead:"arpegio",swing:.1}},{id:"roma",name:"Roma",country:"Italia",lat:41.9,lon:12.5,landmark:"El Coliseo",blurb:"Dos mil años de historia a cada paso. Y helado.",fact:"El Coliseo entraba a unas 50.000 personas y tenía un sistema de toldos para el sol.",sky:"#a9cdf0",ground:"#c9b98a",accent:"#c9382f",souvenirs:[["Pizza","disc","#e07b39"],["Gelato","cone","#f6d6a0"],["Moneda","disc","#f6b40e"],["Casco","sphere","#b0762f"],["Pasta","torus","#f2dd8a"],["Vespa","box","#75aadb"]],music:{bpm:100,scale:"dorian",root:2,inst:"piano",drums:"boombap",bass:"caminante",lead:"pregunta",swing:.05}},{id:"tokio",name:"Tokio",country:"Japón",lat:35.7,lon:139.7,landmark:"Pagoda y el Fuji",blurb:"Neón, templos y trenes puntualísimos, con el Fuji de fondo.",fact:"Los cerezos florecen unos pocos días por año y se les festeja con picnics bajo las flores.",sky:"#c7d9f2",ground:"#9cb87a",accent:"#f08fb0",souvenirs:[["Sushi","box","#e8e4da"],["Ramen","cyl","#e07b39"],["Gato de la suerte","sphere","#f6f0e0"],["Origami","cone","#f08fb0"],["Abanico","disc","#d9402f"],["Sakura","star","#f8b8d0"]],music:{bpm:128,scale:"pentMaj",root:7,inst:"synth",drums:"trap",bass:"808",lead:"arpegio",swing:0}},{id:"cairo",name:"El Cairo",country:"Egipto",lat:30,lon:31.2,landmark:"Pirámides y Esfinge",blurb:"Desierto, camellos y tres pirámides que ya estaban ahí hace 4.500 años.",fact:"La Gran Pirámide fue el edificio más alto del mundo durante casi 4.000 años.",sky:"#f0d9a8",ground:"#e3c585",accent:"#c9a227",souvenirs:[["Papiro","box","#e8d9a0"],["Escarabajo","sphere","#2f6f8a"],["Té de menta","cyl","#5a8f3a"],["Máscara","cone","#c9a227"],["Camellito","box","#b0762f"],["Ankh","star","#c9a227"]],music:{bpm:96,scale:"phrygian",root:4,inst:"synth",drums:"dembow",bass:"raices",lead:"escalera",swing:0}}],cs=i=>ds.find(t=>t.id===i)||null;function v_(i){const t={},e=i&&typeof i=="object"?i:{};for(const n of ds){const s=e[n.id];if(!s||typeof s!="object")continue;const a=[...new Set((Array.isArray(s.got)?s.got:[]).map(Number).filter(c=>Number.isInteger(c)&&c>=0&&c<kn))].sort(),r=s.photo===!0,o=s.stamp===!0&&r&&a.length===kn;(a.length||r||o)&&(t[n.id]={got:a,photo:r,stamp:o})}return t}const Fd=i=>Object.values(i).filter(t=>t.stamp).length,ol=100,lh=40,uh=60,Ws=(i,t,e)=>{const n=Math.floor(Number(i));return Number.isFinite(n)&&n>=0?Math.min(n,e):t},Od=i=>Math.floor(i/ol)+1,cl=i=>typeof i=="string"?i.replace(/[\u0000-\u001f​-‏‪-‮]/g,"").trim().slice(0,14):"",hh=()=>{const i=new Date;return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`};function tr(i){const t=i&&typeof i=="object"?i:{},e=new Set(Oe.map(r=>r.id)),n=[...new Set([...Zx,...(Array.isArray(t.kits)?t.kits:[]).filter(r=>e.has(r))])],s=Rd(t.look||Nl);n.includes(Oe[s.kt].id)||(s.kt=Ad("albiceleste"));const a=Ws(t.xp,0,1e9);return{v:2,name:cl(t.name),created:t.created===!0,look:s,hincha:zl.some(r=>r.id===t.hincha)?t.hincha:"",coins:Ws(t.coins,0,1e9),xp:a,kits:n,chests:Ws(t.chests,0,9999),wins:Ws(t.wins,0,1e6),rewardedLevel:Math.max(1,Ws(t.rewardedLevel,1,9999)),lastDaily:typeof t.lastDaily=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(t.lastDaily)?t.lastDaily:"",farm:a_(t.farm),passport:v_(t.passport),adultProps:t.adultProps!==!1,updatedAt:Ws(t.updatedAt,0,1e15)}}let Qe=tr(null),Bd="local";const ll=new Set,x_=()=>ll.forEach(i=>{try{i(Qe,Bd)}catch(t){console.error(t)}});function __(){try{localStorage.setItem(Td,JSON.stringify(Qe))}catch{}}function y_(){try{return tr(JSON.parse(localStorage.getItem(Td)||"null"))}catch{return tr(null)}}function oi(i){const t=tr(Qe),e=i(t)||{};return Qe=tr(Object.assign(t,{updatedAt:Date.now()})),__(),x_(),e}function La(i){const t=[];for(const e of Oe){if(i.kits.includes(e.id))continue;const n=e.unlock;(n.type==="level"&&i.rewardedLevel>=n.level||n.type==="tournament"&&i.wins>=n.wins)&&(i.kits.push(e.id),t.push(e))}return t}function Da(i){const t=Od(i.xp),e=Math.max(0,t-i.rewardedLevel);return e&&(i.chests+=e,i.rewardedLevel=t),e?t:0}const Ot={get profile(){return Qe},get status(){return Bd},get level(){return Od(Qe.xp)},get levelProgress(){return Qe.xp%ol/ol},hasCharacter:()=>Qe.created,owns:i=>Qe.kits.includes(i),on(i){return ll.add(i),()=>ll.delete(i)},async syncNow(){},async load(){return Qe=y_(),this.syncNow(),Qe},update(i){oi(t=>{Object.assign(t,i)})},edit(i){return oi(t=>{const e=i(t)||{},n=Da(t),s=La(t);return Object.assign({},e,{level:n,kits:s})})},collectSouvenir(i,t){return!cs(i)||!(t>=0&&t<kn)||Qe.passport[i]&&Qe.passport[i].got.includes(t)?!1:(oi(e=>{(e.passport[i]||(e.passport[i]={got:[],photo:!1,stamp:!1})).got.push(t),e.xp+=3,e.coins+=5,Da(e)}),!0)},takePhoto(i){return cs(i)?oi(t=>{const e=t.passport[i]||(t.passport[i]={got:[],photo:!1,stamp:!1});e.photo||(e.photo=!0,t.xp+=10);let n=!1,s=!1;if(!e.stamp&&e.photo&&e.got.length===kn){const r=Fd(t.passport)===0;e.stamp=!0,n=!0,t.xp+=40,t.coins+=80,r&&(t.chests+=1,s=!0)}const a=Da(t);return{stamped:n,chest:s,level:a,kits:La(t)}}):null},addXp(i){return oi(t=>{const e=t.chests;t.xp+=i;const n=Da(t),s=La(t);return{level:n,chests:t.chests-e,kits:s}})},recordTournamentWin(){return oi(i=>(i.wins+=1,i.chests+=1,{level:0,chests:1,kits:La(i)}))},canClaimDaily(){return Qe.created&&Qe.lastDaily!==hh()},claimDaily(){return this.canClaimDaily()?oi(i=>(i.lastDaily=hh(),i.xp+=lh,i.chests+=1,{level:Da(i),chests:1,xp:lh,kits:La(i)})):null},openChest(){return Qe.chests<1?null:oi(i=>{i.chests-=1;const t=Oe.filter(a=>a.unlock.type==="chest"&&!i.kits.includes(a.id));if(!t.length)return i.coins+=uh,{type:"coins",amount:uh};const e=t.reduce((a,r)=>a+Qa[r.rarity].weight,0);let n=Math.random()*e,s=t[t.length-1];for(const a of t)if(n-=Qa[a.rarity].weight,n<=0){s=a;break}return i.kits.push(s.id),{type:"kit",kit:s}})},equipKit(i){return Qe.kits.includes(i)?(oi(t=>{t.look=Object.assign({},t.look,{kt:Ad(i),of:Bi("of","kit")})}),!0):!1}},M_="#1c2230",Ia="#efece4",pe=Math.PI,_s=new vd(Uint8Array.from([70,140,210,255]),4,1,co);_s.minFilter=_s.magFilter=dn;_s.generateMipmaps=!1;_s.needsUpdate=!0;const b_=new qt({color:856347,side:Ke}),dh=new Map;function Tt(i,t){const e=i+(t||"");let n=dh.get(e);return n||(n=new ji({color:i,gradientMap:_s,side:t||Kn}),dh.set(e,n)),n}const Di=(i,t)=>new qt({color:i,transparent:t!=null,opacity:t??1}),fh=new Map;function ph(i,t){const e=i.pattern+i.c1+i.c2+(t||"");let n=fh.get(e);if(n)return n;const s=document.createElement("canvas");s.width=64,s.height=32;const a=s.getContext("2d");if(a.fillStyle=i.c1,a.fillRect(0,0,64,32),a.fillStyle=i.c2,i.pattern==="stripes10"||i.pattern==="stripes6"){const o=i.pattern==="stripes10"?10:6,c=64/o;for(let l=1;l<o;l+=2)a.fillRect(l*c,0,c,32)}else if(i.pattern==="hoops")for(let o=1;o<8;o+=2)a.fillRect(0,o*4,64,4);else i.pattern==="band"&&a.fillRect(0,11,64,9);const r=new Rn(s);return r.colorSpace=ke,r.magFilter=r.minFilter=dn,r.generateMipmaps=!1,r.wrapS=Hi,n=new ji({map:r,gradientMap:_s,side:t||Kn}),fh.set(e,n),n}let Nr=null;function S_(){if(Nr)return Nr;const i=document.createElement("canvas");i.width=90,i.height=56;const t=i.getContext("2d");t.fillStyle="#75aadb",t.fillRect(0,0,90,56),t.fillStyle="#ffffff",t.fillRect(0,19,90,18),t.fillStyle="#f6b40e",t.beginPath(),t.arc(45,28,7,0,pe*2),t.fill();const e=new Rn(i);return e.colorSpace=ke,Nr=new ji({map:e,gradientMap:_s,side:_e}),Nr}function ci(i,t,e,n=1.07){const s=new J(i,t);if(e){const a=new J(i,b_);a.scale.setScalar(n),s.add(a)}return s}const mh={pizza:-1.3,beer:-2.5,fernet:-2.3,mate:-1.25,choripan:-1.3,vuvu:-2.4,flag:-2.7},gh=-2.7;function Mi(i){const t=Rd(i),e=Gn("sk",t.sk),n=Gn("hc",t.hc),s=Gn("sh",t.sh),a=Gn("hs",t.hs),r=Gn("bd",t.bd),o=Gn("of",t.of),c=Gn("ht",t.ht),l=Gn("sf",t.sf),h=Gn("pr",t.pr),d=Gn("ex",t.ex),u=Oe[t.kt]||Oe[0],f=[],g=et=>(f.push(et),et),v=new At,m=new At;v.add(m);const p=.55,_=[-1,1].map(et=>{const D=new At;D.position.set(et*.14,p,0);const W=ci(g(new pn(.11,.3,4,10)),Tt(M_),!0);W.position.y=-.2;const tt=ci(g(new re(.14,12,10)),Tt(Ia),!0);return tt.scale.set(1,.7,1.35),tt.position.set(0,-.43,.05),D.add(W,tt),m.add(D),D}),b=o==="kit"?ph(u):Tt(o==="jacket"||o==="tee"?s:Ia),M=ci(g(new pn(.25,.15,6,14)),b,!0);if(M.position.y=.93,m.add(M),o==="kit"&&u.pattern==="sash"){const et=new J(g(new Kt(.14,.46,.54)),Tt(u.c2));et.position.y=.95,et.rotation.z=.6,m.add(et)}if(o==="apron"){const et=ci(g(new Kt(.38,.52,.05)),Tt(s),!1);et.position.set(0,.86,.245),m.add(et)}if(o==="poncho"){const et=new J(g(new te(.3,.6,.6,18,1,!0)),Tt(s,_e));et.position.y=1;const D=new J(g(new je(.6,.03,6,28)),Tt(Ia));D.rotation.x=pe/2,D.position.y=.72;const W=new J(g(new je(.5,.025,6,28)),Tt("#c9382f"));W.rotation.x=pe/2,W.position.y=.82,m.add(et,D,W)}if(l==="scarf"){const et=new J(g(new je(.215,.065,8,22)),Tt(u.c1));et.rotation.x=pe/2,et.position.y=1.19;const D=new J(g(new je(.205,.045,8,22)),Tt(u.c2));D.rotation.x=pe/2,D.position.y=1.25;const W=new J(g(new Kt(.11,.38,.04)),Tt(u.c1));W.position.set(-.1,.98,.265),W.rotation.z=.08;const tt=new J(g(new Kt(.115,.07,.045)),Tt(u.c2));tt.position.set(-.1,.9,.268),tt.rotation.z=.08,m.add(et,D,W,tt)}const P=o==="jacket",C=o==="kit"?u.sleeve:s,E=[d==="shout"?gh:0,h&&mh[h]!==void 0?mh[h]:d==="shout"?gh:0],U=[-1,1].map(et=>{const D=new At;D.position.set(et*.33,1.14,0);const W=ci(g(new pn(.085,.26,4,8)),Tt(P?s:e),!0);if(W.position.y=-.2,D.add(W),!P&&o!=="poncho"&&o!=="apron"){const ut=ci(g(new pn(.1,.08,4,8)),Tt(C),!0,1.05);ut.position.y=-.1,D.add(ut)}const tt=ci(g(new re(.095,10,8)),Tt(e),!0);return tt.position.y=-.46,D.add(tt),m.add(D),D});let w=null;if(h&&h!=="faso"){const et=new At;et.position.set(0,-.46,0),et.rotation.x=-E[1];const D=(W,tt,ut,wt,_t,It)=>{const Qt=new J(g(W),typeof tt=="string"?Tt(tt):tt);return Qt.position.set(ut,wt,_t),It&&Qt.rotation.set(It[0]||0,It[1]||0,It[2]||0),et.add(Qt),Qt};switch(h){case"pizza":{const W=D(new te(.26,.26,.04,3),"#f2c21b",0,.16,.1,[-1.05,0,0]);W.rotation.y=pe/2;for(const[tt,ut,wt]of[[-.07,.2,.17],[.07,.17,.12],[0,.26,.21]])D(new te(.04,.04,.02,10),"#b3261e",tt,ut,wt,[-1.05,0,0]);break}case"beer":{D(new te(.085,.07,.24,14),"#e3a21a",0,.12,0),D(new te(.09,.087,.06,14),"#ffffff",0,.27,0),D(new je(.06,.014,6,12),"#cfd6e2",.1,.12,0,[0,pe/2,0]);break}case"fernet":{D(new te(.07,.075,.26,12),"#2b1a12",0,.13,0),D(new te(.032,.05,.12,10),"#2b1a12",0,.32,0),D(new te(.036,.036,.03,10),"#c9382f",0,.4,0),D(new Kt(.1,.1,.02),"#c9382f",0,.12,.072);break}case"mate":{const W=D(new re(.085,12,10),"#6b4a2f",0,.09,0);W.scale.y=1.15,D(new te(.055,.055,.015,12),"#5a7a2a",0,.185,0),D(new te(.008,.008,.22,6),"#cfd6e2",.02,.28,0,[0,0,-.25]);break}case"choripan":{D(new pn(.06,.2,4,8),"#d9a85a",0,.09,0,[0,0,pe/2]),D(new pn(.04,.27,4,8),"#a8412a",0,.12,0,[0,0,pe/2]);break}case"vuvu":{D(new te(.02,.02,.06,8),"#f4f1ea",0,.03,0),D(new te(.14,.03,.8,14,1,!0),Tt(u.c1,_e),0,.46,0),D(new je(.14,.02,6,16),Tt(u.c2),0,.86,0,[pe/2,0,0]);break}case"flag":{D(new te(.018,.018,1.15,6),"#d8d2c4",0,.5,0);const W=D(new Kt(.66,.42,.012),S_(),.34,.95,0);W.userData.wave=!0;break}}U[1].add(et),w=et}const x=new At;x.position.y=1.66,m.add(x),x.add(ci(g(new re(.42,26,20)),Tt(e),!0,1.05));const N={calm:.05,shout:.5,cry:-.45,sing:-.12}[d],I=d==="shout"?.15:.17;for(const et of[-1,1]){const D=ci(g(new re(.075,10,8)),Tt(e),!0);D.position.set(et*.41,-.02,0),x.add(D);const W=new J(g(new re(.1,14,12)),Tt("#ffffff"));W.scale.set(1,d==="shout"?1.1:1.25,.5),W.position.set(et*.15,.02,.375);const tt=new J(g(new re(.062,12,10)),Tt("#1a1420"));tt.scale.set(1,1.2,.5),tt.position.set(et*.15,.015,.405);const ut=new J(g(new re(.02,8,6)),Di(16777215));ut.position.set(et*.15+.022,.05,.43);const wt=new J(g(new Kt(.16,.03,.03)),Tt(n));if(wt.position.set(et*.15,I,.378),wt.rotation.z=et*N,x.add(W,tt,ut,wt),d==="shout"||d==="cry"){const _t=new J(g(new nn(.065,14)),Di(14704730,.4)),It=new B(et*.24,-.08,.33).normalize().multiplyScalar(.425);_t.position.copy(It),_t.quaternion.setFromUnitVectors(new B(0,0,1),It.clone().normalize()),x.add(_t)}if(d==="cry"){const _t=new J(g(new pn(.02,.13,3,6)),Di(8376575,.9));_t.position.set(et*.19,-.1,.385),x.add(_t)}}const F=new J(g(new re(.035,8,6)),Tt(e));F.position.set(0,-.06,.415),x.add(F);const G=r==="full"?.43:.395;if(d==="calm"){const et=new J(g(new je(.055,.012,6,14,pe)),Di(8005168));et.rotation.z=pe,et.position.set(0,-.14,G),x.add(et)}else{const et=d==="sing"?.6:d==="cry"?1.25:1.1,D=d==="sing"?1.2:d==="cry"?.85:1,W=new J(g(new re(.085,14,10)),Di(4853532));W.scale.set(et,D,.4),W.position.set(0,-.15,G-.005);const tt=new J(g(new re(.05,10,8)),Di(14243434));if(tt.scale.set(et*.9,.55,.4),tt.position.set(0,-.19-(D-1)*.02,G+.004),x.add(W,tt),d!=="sing"){const ut=new J(g(new Kt(.1*et,.022,.02)),Di(16777215));ut.position.set(0,-.1,G+.008),x.add(ut)}}if(h==="faso"){const et=new At;et.position.set(.09,-.155,G+.01);const D=new J(g(new te(.017,.017,.15,6)),Tt("#f4f1ea"));D.rotation.x=pe/2,D.position.z=.06;const W=new J(g(new re(.022,6,5)),Di(14710058));W.position.z=.14,et.add(D,W),et.rotation.y=.35,x.add(et)}const Z=Tt(n,_e),H=(et=.445,D=-.32,W=.02)=>{const tt=new J(g(new re(et,24,14,0,pe*2,0,pe/2)),Z);return tt.rotation.x=D,tt.position.y=W,tt.userData.top=!0,tt},nt=(et,D,W,tt=pe*.4,ut=pe*1.2)=>{const wt=new J(g(new te(D,D*.9,et,18,1,!0,tt,ut)),Z);return wt.position.set(0,W,0),wt},q=(et,D,W,tt,ut,wt,_t=0,It=0)=>{const Qt=new J(g(new Kt(et,D,W)),Z);return Qt.position.set(tt,ut,wt),Qt.rotation.set(It,0,_t),Qt.userData.top=!0,Qt};switch(a){case"buzz":x.add(H(.43));break;case"fade":x.add(H(.43,-.4),q(.36,.1,.4,0,.42,.02));break;case"swept":x.add(H(),q(.5,.13,.3,.05,.4,.17,-.18,.25));break;case"long":x.add(H(),nt(.8,.45,-.28));break;case"bob":x.add(H(),nt(.46,.47,-.07),q(.5,.12,.2,0,.38,.25,0,.3));break;case"slick":x.add(H(.435,-.5),q(.3,.08,.4,0,.44,-.06));break;case"bun":{x.add(H());const et=new J(g(new re(.16,12,10)),Tt(n));et.position.set(0,.5,-.14),et.userData.top=!0,x.add(et);break}case"dreads":{x.add(H());for(let et=0;et<9;et++){const D=pe*.35+et/8*pe*1.3,W=new J(g(new pn(.045,.5,3,6)),Tt(n));W.position.set(Math.sin(D)*.42,-.22,Math.cos(D)*.42),W.rotation.set(Math.cos(D)*.12,0,-Math.sin(D)*.12),x.add(W)}break}case"curly":{for(let D=0;D<22;D++){const W=.3+D/22*.7,tt=D*2.4,ut=Math.sqrt(1-W*W)*.43,wt=Math.cos(tt)*ut,_t=Math.sin(tt)*ut;if(wt>.2&&W<.55)continue;const It=new J(g(new re(.14,10,8)),Tt(n));It.position.set(_t,W*.43,wt),W*.43>.12&&(It.userData.top=!0),x.add(It)}break}}["beanie","hincha","chullo","gaucho","cap","beret"].includes(c)&&x.children.filter(et=>et.userData.top).forEach(et=>x.remove(et));const ht=Tt(n),vt=(et=.17)=>{const D=new J(g(new pn(.03,et,4,8)),ht);return D.rotation.z=pe/2,D.position.set(0,-.105,.405),D};switch(r){case"full":{const et=new J(g(new re(.44,22,12,0,pe,pe*.62,pe*.38)),Tt(n,_e));x.add(et);break}case"trim":{const et=new J(g(new re(.07,10,8)),ht);et.scale.set(1,1.4,.8),et.position.set(0,-.31,.35),x.add(vt(),et);break}case"mustache":x.add(vt());break;case"fumanchu":{x.add(vt(.2));for(const et of[-1,1]){const D=new J(g(new pn(.026,.34,4,8)),ht);D.position.set(et*.115,-.32,.385),D.rotation.z=et*.08,x.add(D)}break}case"goatee":{const et=new J(g(new re(.07,10,8)),ht);et.scale.set(1,1.5,.8),et.position.set(0,-.31,.35),x.add(et);break}}const St=Tt(s,_e),Vt={pattern:"stripes10",c1:u.c1,c2:u.c2};if(c==="beret"){const et=new J(g(new re(.4,18,12)),St);et.scale.set(1.02,.34,1.02),et.position.set(.03,.4,0),et.rotation.z=-.18;const D=new J(g(new te(.02,.02,.06,6)),St);D.position.set(.03,.55,0),x.add(et,D)}else if(c==="cap"){const et=new J(g(new re(.46,20,12,0,pe*2,0,pe/2)),St);et.rotation.x=-.45,et.position.y=.06;const D=new J(g(new Kt(.46,.04,.32)),Tt(u.c1));D.position.set(0,.27,.5),D.rotation.x=.1,x.add(et,D)}else if(c==="beanie"){const et=new J(g(new re(.47,20,12,0,pe*2,0,pe*.42)),St);et.position.y=.04;const D=new J(g(new je(.435,.05,8,24)),Tt(Ia));D.rotation.x=pe/2,D.position.y=.2;const W=new J(g(new re(.09,10,8)),Tt(Ia));W.position.y=.55,x.add(et,D,W)}else if(c==="hincha"){const et=new J(g(new re(.47,24,12,0,pe*2,0,pe*.42)),ph(Vt,_e));et.position.y=.04;const D=new J(g(new je(.435,.05,8,24)),Tt(u.c2));D.rotation.x=pe/2,D.position.y=.2;const W=new J(g(new re(.1,10,8)),Tt(u.c1));W.position.y=.56,x.add(et,D,W)}else if(c==="chullo"){const et="#c9382f",D=new J(g(new re(.47,20,12,0,pe*2,0,pe*.46)),Tt(et,_e));D.position.y=.04;const W=new J(g(new je(.45,.032,6,24)),Tt("#f2c21b"));W.rotation.x=pe/2,W.position.y=.15;const tt=new J(g(new je(.42,.032,6,24)),Tt("#2f8f5b"));tt.rotation.x=pe/2,tt.position.y=.24,x.add(D,W,tt);for(const wt of[-1,1]){const _t=new J(g(new pn(.075,.22,4,8)),Tt(et));_t.position.set(wt*.4,-.12,.05),_t.rotation.z=wt*.12;const It=new J(g(new re(.05,8,6)),Tt("#f2c21b"));It.position.set(wt*.43,-.34,.05),x.add(_t,It)}const ut=new J(g(new re(.07,8,6)),Tt("#f2c21b"));ut.position.y=.52,x.add(ut)}else if(c==="gaucho"){const et=new J(g(new te(.25,.27,.26,18)),Tt("#2d2118"));et.position.y=.5;const D=new J(g(new te(.62,.62,.04,28)),Tt("#2d2118"));D.position.y=.36;const W=new J(g(new je(.265,.025,6,24)),Tt("#c9382f"));W.rotation.x=pe/2,W.position.y=.41,x.add(et,D,W)}else if(c==="vincha"){const et=new J(g(new je(.43,.04,6,28)),Tt(s));et.rotation.x=pe/2-.15,et.position.y=.2;const D=new J(g(new re(.07,8,6)),Tt(s));D.position.set(0,.15,-.43),x.add(et,D)}return v.userData={body:m,legs:_,arms:U,head:x,geos:f,raise:E,holder:w},v}function ys(i,t,e=0){const n=i.userData,s=Math.min(1,e),a=Math.sin(t*11)*.9*s,r=(o,c)=>o?Math.sin(t*7+c)*.15*(1-s):0;if(n.legs[0].rotation.x=a,n.legs[1].rotation.x=-a,n.arms[0].rotation.x=-a*.8+n.raise[0]+r(n.raise[0],0),n.arms[1].rotation.x=a*.8+n.raise[1]+r(n.raise[1],1.7),n.arms[0].rotation.z=-.09-Math.sin(t*1.7)*.02*(1-s)-(n.raise[0]?.12:0),n.arms[1].rotation.z=.09+Math.sin(t*1.7)*.02*(1-s)+(n.raise[1]?.12:0),n.body.position.y=Math.abs(Math.sin(t*11))*.07*s+Math.sin(t*2)*.012*(1-s),n.body.rotation.x=.12*s,n.head.rotation.y=Math.sin(t*.8)*.12*(1-s),n.holder){const o=n.holder.children.find(c=>c.userData.wave);o&&(o.rotation.y=Math.sin(t*5)*.25)}}function Zn(i){i&&(i.userData.geos.forEach(t=>t.dispose()),i.removeFromParent())}function y(i,t,...e){const n=document.createElement(i);if(t)for(const s in t){const a=t[s];if(!(a==null||a===!1))if(s==="class")n.className=a;else if(s==="text")n.textContent=a;else if(s==="style")for(const r in a)r.startsWith("--")?n.style.setProperty(r,a[r]):n.style[r]=a[r];else s.startsWith("on")&&typeof a=="function"?n.addEventListener(s.slice(2).toLowerCase(),a):n.setAttribute(s,a===!0?"":String(a))}for(const s of e.flat())s!=null&&s!==!1&&n.append(s.nodeType?s:document.createTextNode(String(s)));return n}const Jn=()=>document.getElementById("ui");function _n(){const i=Jn();for(;i.firstChild;)i.removeChild(i.firstChild)}let vh=0;function ge(i){const t=document.getElementById("toast");t.textContent=i,t.hidden=!1,clearTimeout(vh),vh=setTimeout(()=>{t.hidden=!0},2600)}function w_(i){const t=(e,n="90deg")=>{const s=100/e;return`repeating-linear-gradient(${n}, ${i.c1} 0 ${s}%, ${i.c2} ${s}% ${s*2}%)`};switch(i.pattern){case"stripes10":return t(10);case"stripes6":return t(6);case"hoops":return t(8,"0deg");case"band":return`linear-gradient(0deg, ${i.c1} 0 36%, ${i.c2} 36% 64%, ${i.c1} 64%)`;case"sash":return`linear-gradient(135deg, ${i.c1} 0 36%, ${i.c2} 36% 64%, ${i.c1} 64%)`;default:return i.c1}}const ul=i=>y("i",{class:"kit-sw",style:{background:w_(i)},"aria-hidden":"true"});function E_({onDone:i,onCancel:t}){const e=new ga;e.background=new ee("#0b1424"),e.fog=new qi("#0b1424",9,20);const n=new Je(36,innerWidth/innerHeight,.1,60);e.add(new sr("#cfe6ff","#26314a",.8));const s=new yi("#ffffff",1.3);s.position.set(3,5,4);const a=new yi("#75aadb",1);a.position.set(-4,3,-3),e.add(s,a);const r=new At,o=new J(new te(1.5,1.6,.25,40),new ji({color:"#f4f1ea"}));o.position.y=-.125;const c=new J(new je(1.5,.05,8,48),new qt({color:"#75aadb"}));c.rotation.x=Math.PI/2;const l=new J(new nn(.55,24),new qt({color:"#f6b40e"}));l.rotation.x=-Math.PI/2,l.position.y=.005,r.add(o,c,l),e.add(r);let h=Object.assign({},Ot.profile.look),d=Ot.profile.hincha,u=null,f=-.35,g=!0,v=null;const m=()=>Ot.profile.adultProps,p=()=>Oe.map((H,nt)=>Ot.owns(H.id)?nt:-1).filter(H=>H>=0),_=()=>{!m()&&sl("pr",h.pr)&&(h.pr=0)};function b(){Zn(u),u=Mi(h),r.add(u)}const M=document.getElementById("gl"),P=H=>{v=H.clientX,g=!1},C=H=>{v!=null&&(f+=(H.clientX-v)*.012,v=H.clientX)},E=()=>{v=null};M.addEventListener("pointerdown",P),addEventListener("pointermove",C),addEventListener("pointerup",E),addEventListener("pointercancel",E),_n();const U=y("input",{id:"cr-name",type:"text",maxlength:14,autocomplete:"off",spellcheck:"false",placeholder:"Tu nombre",value:Ot.profile.name}),w=y("div",{class:"hincha-grid"}),x=y("div",{class:"cr-opts"});function N(H){H(),_(),g=!1,b(),G()}function I(){w.textContent="";for(const H of zl)w.append(y("button",{type:"button",class:"hincha","aria-pressed":String(d===H.id),title:H.tag,onclick:()=>N(()=>{h=Object.assign({},H.look),d=H.id,cl(U.value)||(U.value=H.name)})},y("strong",{text:H.name}),y("small",{text:H.region})))}function F(){x.textContent="";for(const H of Ms){const nt=y("div",{class:"cr-row"});H.kit?Oe.forEach((q,ht)=>{const vt=Ot.owns(q.id),St=h.kt===ht;nt.append(y("button",{type:"button",class:"chip kit"+(vt?"":" locked"),"aria-pressed":String(St),disabled:!vt,title:vt?q.name:`${q.name}: ${io(q)}`,onclick:()=>N(()=>{h.kt=ht,h.of=Bi("of","kit")})},ul(q),y("span",null,y("b",{text:q.name}),y("small",{text:vt?Qa[q.rarity].name:io(q)}))))}):H.items.forEach((q,ht)=>{if(H.key==="pr"&&!m()&&sl("pr",ht))return;const vt=h[H.key]===ht,St=H.color?`${H.title} ${ht+1}`:rh(H.key,ht);nt.append(y("button",{type:"button",class:H.color?"chip sw":"chip","aria-pressed":String(vt),"aria-label":St,title:St,onclick:()=>N(()=>{h[H.key]=ht})},H.color?y("i",{style:{background:q}}):rh(H.key,ht)))}),x.append(y("span",{class:"lab",text:H.title}),nt)}}function G(){I(),F()}const Z=y("section",{class:"cr-panel","aria-label":"Creador de personaje"},y("header",null,y("p",{class:"kicker",text:Ot.hasCharacter()?"Tu personaje":"Bienvenido"}),y("h1",{text:Ot.hasCharacter()?"Cambiá tu look":"Creá tu hincha"})),y("label",{class:"lab",for:"cr-name",text:"Nombre"}),U,y("span",{class:"lab",text:"Hinchas de la casa"}),w,x,y("footer",null,y("button",{type:"button",class:"btn ghost",text:"Al azar",onclick:()=>N(()=>{h=Qx(p(),m()),d=""})}),Ot.hasCharacter()&&y("button",{type:"button",class:"btn ghost",text:"Volver",onclick:()=>t&&t()}),y("button",{type:"button",class:"btn primary",text:Ot.hasCharacter()?"Guardar":"Entrar al mundo",onclick:()=>{const H=cl(U.value);if(!H){U.focus(),ge("Ponele un nombre a tu personaje.");return}Ot.update({name:H,look:h,hincha:d,created:!0}),i()}})));return Jn().append(Z),_(),G(),b(),{scene:e,camera:n,update(H,nt){g&&(f+=H*.5),r.rotation.y=f,ys(u,nt,0);const q=innerWidth/innerHeight<.9;n.position.set(q?0:1.15,q?1:1.6,q?9.4:5.6),n.lookAt(q?0:1.15,q?-.4:1.05,0)},dispose(){M.removeEventListener("pointerdown",P),removeEventListener("pointermove",C),removeEventListener("pointerup",E),removeEventListener("pointercancel",E),Zn(u),_n()}}}const zr=Math.PI,Xs="#f4f1ea",kr="#1c2230",me=(i,t,e,n=0,s=0,a=0)=>{const r=new J(t,typeof e=="string"?Tt(e):e);return r.position.set(n,s,a),i.add(r),r},xh={ring(i,t){me(i,new Kt(4.2,.4,4.2),Xs,0,.2,0),me(i,new Kt(4.4,.12,4.4),t.color,0,.06,0);for(const e of[-1,1])for(const n of[-1,1])me(i,new te(.1,.1,1.7,8),kr,e*1.95,1.25,n*1.95);for(const e of[.9,1.35,1.8])me(i,new Kt(3.9,.06,.06),t.color,0,e,1.95),me(i,new Kt(3.9,.06,.06),t.color,0,e,-1.95),me(i,new Kt(.06,.06,3.9),t.color,1.95,e,0),me(i,new Kt(.06,.06,3.9),t.color,-1.95,e,0)},goal(i,t){me(i,new Kt(7,.05,5),t.color,0,.03,.5),me(i,new Kt(6.6,.06,.08),Xs,0,.06,2.9);for(const s of[-1,1])me(i,new te(.09,.09,2.3,8),Xs,s*2.2,1.15,-.8);me(i,new Kt(4.5,.16,.16),Xs,0,2.3,-.8);const e=new J(new xn(4.4,2.2),new qt({color:"#ffffff",transparent:!0,opacity:.22,side:_e}));e.position.set(0,1.15,-1.3),i.add(e);const n=me(i,new re(.32,16,12),Xs,.4,.34,1.4);n.userData.spin=!0},booth(i,t){me(i,new Kt(3.4,1,1.3),kr,0,.5,0),me(i,new Kt(3.5,.08,1.4),t.color,0,1.04,0);for(const e of[-1,1]){const n=me(i,new te(.46,.46,.06,20),"#0d111b",e*.8,1.11,.05);n.userData.disc=!0,me(i,new te(.14,.14,.08,12),t.accent,e*.8,1.13,.05),me(i,new Kt(.9,1.9,.9),kr,e*2.4,.95,-.2),me(i,new te(.3,.3,.06,16),"#2a3347",e*2.4,.7,.27).rotation.x=zr/2}me(i,new Kt(4.6,.12,.12),new qt({color:t.color}),0,2.3,-.5)},globe(i,t){me(i,new te(.9,1.1,.5,16),Xs,0,.25,0);const e=me(i,new re(1.15,20,16),t.color,0,1.9,0);e.userData.spin=!0;for(const[s,a,r]of[[.6,2.3,.85],[-.8,1.7,.7],[.2,1.3,1.1],[-.3,2.5,-.9]])me(e,new re(.32,8,6),"#5fb36b",s,a-1.9,r);me(i,new je(1.45,.04,6,36),"#f6b40e",0,1.9,0).rotation.set(zr/2.6,0,.4),me(i,new te(.06,.06,2.4,6),kr,2.3,1.2,.6);for(const[s,a]of[[2.1,.2],[1.7,-.3]]){const r=me(i,new Kt(1.1,.3,.06),t.accent,2.7,s,.6);r.rotation.y=a}},farm(i,t){me(i,new Kt(5.4,.12,3.8),"#6b4a2f",-.4,.06,.6);for(let n=0;n<4;n++){me(i,new Kt(5,.16,.3),"#5a3d26",-.4,.16,-.7+n*.8);for(let s=0;s<5;s++){const a=me(i,new Mn(.17,.5,6),t.color,-2.4+s*1,.45,-.7+n*.8);a.userData.sway=s+n}}me(i,new Kt(2,1.5,1.6),"#b98957",3.1,.75,-.6);const e=me(i,new Mn(1.7,.9,4),"#8a3d2c",3.1,1.95,-.6);e.rotation.y=zr/4},mill(i,t){me(i,new Kt(5,2.1,3.2),t.accent,0,1.05,-.6);for(let e=0;e<3;e++){const n=me(i,new Kt(1.7,.1,3.3),t.color,-1.65+e*1.65,2.35,-.6);n.rotation.z=.5}me(i,new te(.32,.4,3.4,10),"#8a3d2c",2.7,1.7,-1.4),me(i,new Kt(1.2,1.1,.06),"#2a3347",-1.1,1,1.02),me(i,new Kt(1,1.4,.06),"#2a3347",1.2,.7,1.02),["#c9382f","#2f8f5b","#e6a817"].forEach((e,n)=>{const s=me(i,new te(.28,.28,1.3,12),e,-1.6+n*.75,.3,2);s.rotation.z=zr/2})}};function T_(i){const t=new At;return(xh[i.shape]||xh.ring)(t,i),t}function Bl(i,t,e,n){const s=document.createElement("canvas");s.width=512,s.height=160;const a=new Rn(s);a.colorSpace=ke;const r=()=>{const c=s.getContext("2d");c.clearRect(0,0,s.width,s.height),c.fillStyle=n?"rgba(14,20,34,0.78)":"rgba(14,20,34,0.92)",c.beginPath(),c.roundRect(8,8,496,144,28),c.fill(),c.fillStyle=e,c.fillRect(8,8,18,144),c.fillStyle="#ffffff",c.font="64px Anton, Impact, sans-serif",c.textBaseline="middle",c.fillText(i.toUpperCase(),50,62,440),c.fillStyle=n?"#9fb0cc":"#ffd98a",c.font='600 34px "Barlow Condensed", Arial Narrow, sans-serif',c.fillText(t,50,120,440),a.needsUpdate=!0};r(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(r);const o=new po(new ir({map:a,transparent:!0,depthWrite:!1}));return o.scale.set(3.9,1.22,1),o.userData.tex=a,o}const hl=[{id:"peleas",name:"El Ring",title:"Peleas",status:"live",kind:"embed",url:Kx,tag:"Cachetazo: duelos 1 contra 1 a mano abierta, con salas y torneos.",plan:["Salas con código de 4 letras","Torneo, 2 vs 2 y 3 vs 3","Más de 65 personajes, pase de batalla y cofres"],color:"#c9382f",accent:"#ffd9d4",shape:"ring"},{id:"futbol",name:"La Cancha",title:"Fútbol",status:"live",kind:"scene",stage:"Etapa 2",tag:"Fútbol 3 vs 3 de potrero: pase corto, filtrado de tres dedos, tiro potente y poderes.",plan:["Partidos online con hasta 6 jugadores (falta el servidor)","Más poderes y estrellas con onda anime","Torneos que dan cofres y casacas"],color:"#2f8f5b",accent:"#d7f2e2",shape:"goal"},{id:"dj",name:"La Cabina",title:"DJ y canciones",status:"live",kind:"scene",stage:"Etapa 3",tag:"Armá tu propio tema paso a paso (ritmo, bajo, melodía), mezclalo y pasalo en un set de DJ con dos bandejas.",plan:["Compartir tus temas en la sala","Más sonidos y estilos (guitarra eléctrica, cuerdas)","Pedir temas y bailar con otros jugadores"],color:"#6a3fa0",accent:"#e6dcf5",shape:"booth"},{id:"viajes",name:"La Terminal",title:"Viajar por el mundo",status:"live",kind:"scene",stage:"Etapa 4",tag:"Elegí un destino en el globo, juntá souvenirs, sacate la foto en el monumento y completá tu pasaporte.",plan:["Más ciudades y regiones de Argentina","Viajar con amigos","Misiones y coleccionables especiales"],color:"#2a7fb5",accent:"#d5ebf8",shape:"globe"},{id:"chacra",name:"La Chacra",title:"Cultivo",status:"live",kind:"scene",stage:"Etapa 4",tag:"Sembrá, regá y cosechá en tiempo real, vendé en la feria y mejorá tu campo.",plan:["Más cultivos y animales","Ver la chacra de tus amigos","Pedidos y mercado compartido entre jugadores"],color:"#7a9a2f",accent:"#eaf2cf",shape:"farm"},{id:"taller",name:"El Taller",title:"Oficios",status:"soon",stage:"Etapa 5",tag:"Diseñador industrial, de autos, de moda, ingeniero, industria textil.",plan:["Profesiones con sus propios minijuegos","Industria textil y cadena de producción","Economía compartida con el resto de los modos"],color:"#e07b39",accent:"#fbe3d1",shape:"mill"}];let Fi=null;function yn(i,{onClose:t,cls:e=""}={}){Fi&&Fi.close();const n=y("div",{class:"dlg-back"+(e==="full"?" full-back":""),role:"dialog","aria-modal":"true"}),s=y("div",{class:"dlg "+e},i);n.append(s);const a=o=>{o.key==="Escape"&&r.close()};n.addEventListener("pointerdown",o=>{o.target===n&&r.close()}),addEventListener("keydown",a),Jn().append(n);const r={close(){Fi===r&&(Fi=null,removeEventListener("keydown",a),n.remove(),t&&t())}};return Fi=r,r}const Ee=()=>{Fi&&Fi.close()},A_=()=>!!Fi,Vd=i=>y("span",{class:"pill "+i.status,text:i.status==="live"?"Disponible":`${i.stage} · Próximamente`});function C_({onPick:i,onClose:t}){const e=y("div",{class:"mode-grid"},hl.map(n=>y("button",{type:"button",class:"mode-card "+n.status,style:{"--c":n.color},onclick:()=>i(n)},y("span",{class:"mc-title",text:n.title}),y("span",{class:"mc-tag",text:n.tag}),Vd(n))));return yn(y("div",null,y("header",{class:"dlg-head"},y("h2",{text:"Elegí a qué jugar"}),y("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>Ee()})),e),{onClose:t,cls:"wide"})}function R_(i,{onClose:t}){return yn(y("div",{style:{"--c":i.color}},y("header",{class:"dlg-head"},y("h2",{text:i.title}),y("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>Ee()})),Vd(i),y("p",{class:"lead",text:i.tag}),y("p",{class:"lab",text:"Lo que va a tener"}),y("ul",{class:"plan"},i.plan.map(e=>y("li",{text:e}))),y("footer",null,y("button",{type:"button",class:"btn primary",text:"Entendido",onclick:()=>Ee()}))),{onClose:t})}function P_(i,{onClose:t}){const e=y("iframe",{class:"embed-frame",src:i.url,title:i.title,allow:"fullscreen; autoplay",referrerpolicy:"no-referrer",sandbox:"allow-scripts allow-same-origin allow-forms allow-popups"});e.addEventListener("load",()=>e.focus());const n=y("div",{class:"embed"},y("header",{class:"embed-bar"},y("strong",{text:i.title}),y("button",{type:"button",class:"btn ghost",text:"Volver al mundo",onclick:()=>Ee()})),e);return yn(n,{onClose:t,cls:"full"})}const L_={local:"Tu progreso se guarda solo en este dispositivo.","cloud-pending":"Conectando con la nube…","cloud-ok":"Tu progreso se guarda en la nube.","cloud-error":"No pude conectar con la nube. Por ahora se guarda en este dispositivo."};function D_({onClose:i,onEditLook:t}){const e=Ot.profile,n=y("p",{class:"lead",text:L_[Ot.status]||""}),s=y("p",{class:"muted",text:""}),a=y("div",{class:"row-actions"},y("button",{type:"button",class:"btn ghost",text:"Cambiar personaje",onclick:()=>{Ee(),t()}}));s.textContent="La nube se activa con un proyecto de Firebase propio (los pasos están en el README).";const r=y("label",{class:"toggle"},y("input",{type:"checkbox",checked:e.adultProps,onchange:o=>Ot.update({adultProps:o.target.checked})}),y("span",{text:"Mostrar cerveza, fernet y fasos en los personajes"}));return yn(y("div",null,y("header",{class:"dlg-head"},y("h2",{text:e.name||"Jugador"}),y("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>Ee()})),y("p",{class:"lead",text:`Nivel ${Ot.level} · ${e.coins} monedas`}),n,s,r,a),{onClose:i})}function I_({onClose:i}){const t=y("div");let e=null;function n(){const r=Ot.openChest();r&&(e=r),a()}function s(){if(!e)return null;if(e.type==="coins")return y("div",{class:"reveal pop"},y("strong",{text:"¡Ya tenés todas las casacas de cofre!"}),y("span",{text:`Te llevás ${e.amount} monedas.`}));const r=e.kit,o=Qa[r.rarity];return y("div",{class:"reveal pop",style:{"--r":o.color}},y("span",{class:"rar",text:o.name}),ul(r),y("strong",{text:r.name}),y("span",{text:"¡Casaca nueva!"}),y("button",{type:"button",class:"btn primary",text:"Ponérmela",onclick:()=>{Ot.equipKit(r.id),ge("Casaca puesta."),a()}}))}function a(){t.textContent="";const r=Ot.profile,o=Oe.filter(c=>r.kits.includes(c.id)).length;t.append(y("header",{class:"dlg-head"},y("h2",{text:"Cofres y casacas"}),y("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>Ee()})),y("div",{class:"chest-row"},y("div",{class:"chest-art","aria-hidden":"true"}),y("div",null,y("p",{class:"lead",text:r.chests===1?"Tenés 1 cofre":`Tenés ${r.chests} cofres`}),y("p",{class:"muted",text:"Ganás uno por cada nivel que subís, por el regalo del día y por cada torneo que ganás."}),y("button",{type:"button",class:"btn primary",text:"Abrir cofre",disabled:r.chests<1,onclick:n}))),s(),y("span",{class:"lab",text:`Tus casacas (${o} de ${Oe.length})`}),y("div",{class:"kit-list"},Oe.map((c,l)=>{const h=r.kits.includes(c.id);return y("button",{type:"button",class:"chip kit"+(h?"":" locked"),disabled:!h,"aria-pressed":String(h&&r.look.kt===l),title:h?`Usar ${c.name}`:`${c.name}: ${io(c)}`,onclick:()=>{Ot.equipKit(c.id),a()}},ul(c),y("span",null,y("b",{text:c.name}),y("small",{text:h?Qa[c.rarity].name:io(c)})))})))}return a(),yn(t,{onClose:i,cls:"wide"})}const li=Math.PI,_h=6.2,Ii=17,yh=13,nc=5.4,ic=36;function U_(i){let t=i;return()=>(t=t*16807%2147483647)/2147483647}function N_({onEditLook:i,onPlay:t}){const e=new ga,n="#a9d6f5";e.background=new ee(n),e.fog=new qi(n,38,80);const s=new Je(48,innerWidth/innerHeight,.1,160);e.add(new sr("#ffffff","#6f9a63",.85));const a=new yi("#fff4dc",1.25);a.position.set(18,30,12),e.add(a);const r=[],o=R=>(r.push(R),R),c=new J(o(new nn(90,48)),Tt("#5fa665"));c.rotation.x=-li/2,e.add(c);const l=new J(o(new nn(Ii,64)),Tt("#efe6d2"));l.rotation.x=-li/2,l.position.y=.02,e.add(l),[[Ii-.9,Ii,"#75aadb"],[Ii-1.8,Ii-.9,"#ffffff"],[Ii-2.7,Ii-1.8,"#75aadb"]].forEach(([R,K,pt],ot)=>{const Mt=new J(o(new bn(R,K,64)),Tt(pt));Mt.rotation.x=-li/2,Mt.position.y=.03+ot*.001,e.add(Mt)});const h=new At;h.add(new J(o(new te(1.9,2.2,.9,24)),Tt("#f4f1ea"))),h.children[0].position.y=.45;const d=new At;d.position.y=2.3,d.add(new J(o(new re(.85,20,16)),new qt({color:"#f6b40e"})));const u=o(new Mn(.14,.75,6));for(let R=0;R<16;R++){const K=R/16*li*2,pt=new J(u,new qt({color:R%2?"#f6b40e":"#e08a00"}));pt.position.set(Math.cos(K)*1.3,Math.sin(K)*1.3,0),pt.rotation.z=K-li/2,d.add(pt)}h.add(d),e.add(h);{const R=U_(20261022),K=70,pt=o(new te(.22,.3,1.5,6)),ot=o(new Mn(1.5,3.6,7)),Mt=new ps(pt,Tt("#7a5230"),K),yt=new ps(ot,Tt("#3f8a4c"),K),Dt=new Me,V=new Wi,bt=new B,k=new B;for(let O=0;O<K;O++){const Q=R()*li*2,ct=Ii+3+R()*40,xt=.8+R()*.9;k.set(Math.cos(Q)*ct,.75*xt,Math.sin(Q)*ct),bt.set(xt,xt,xt),Dt.compose(k,V,bt),Mt.setMatrixAt(O,Dt),k.y=(1.5+1.8)*xt,Dt.compose(k,V,bt),yt.setMatrixAt(O,Dt)}e.add(Mt,yt)}const f=hl.map((R,K)=>{const pt=K/hl.length*li*2,ot=Math.cos(pt)*yh,Mt=Math.sin(pt)*yh,yt=T_(R);yt.position.set(ot,0,Mt),yt.rotation.y=Math.atan2(-ot,-Mt),e.add(yt);const Dt=new J(o(new te(4.6,4.6,.08,36)),Tt(R.accent));Dt.position.set(ot,.05,Mt),e.add(Dt);const V=new J(o(new bn(4.2,4.6,48)),new qt({color:R.status==="live"?"#f6b40e":R.color,transparent:!0,opacity:.6,side:_e}));V.rotation.x=-li/2,V.position.set(ot,.11,Mt),e.add(V);const bt=Bl(R.name,R.status==="live"?"Disponible · "+R.title:R.stage+" · "+R.title,R.color,R.status!=="live");return bt.position.set(ot,4.2,Mt),e.add(bt),o({dispose:()=>bt.userData.tex.dispose()}),yt.traverse(k=>{k.geometry&&o(k.geometry)}),{mode:R,x:ot,z:Mt,g:yt,glow:V,pad:Dt}}),g=[{x:0,z:0,r:2.5},...f.map(R=>({x:R.x,z:R.z,r:2.6}))];let v=Mi(Ot.profile.look);v.position.set(0,0,5),e.add(v);let m=JSON.stringify(Ot.profile.look);function p(){const R=JSON.stringify(Ot.profile.look);if(R===m)return;m=R;const K=v;v=Mi(Ot.profile.look),v.position.copy(K.position),v.rotation.y=K.rotation.y,e.add(v),Zn(K)}const _=new J(o(new nn(.55,20)),new qt({color:0,transparent:!0,opacity:.25}));_.rotation.x=-li/2,_.position.y=.06,e.add(_);const b=new Ut;let M=0,P=0,C=.74,E=11.5;const U=new B(0,1.4,5);s.position.set(0,8,16);const w=new Set,x={x:0,y:0};let N=null,I=!1;const F=R=>R.target&&/INPUT|TEXTAREA|SELECT/.test(R.target.tagName),G=R=>{if(F(R)||I)return;const K=R.key.toLowerCase();if(K==="e"||K==="enter"){N&&!R.repeat&&(R.preventDefault(),dt(N.mode));return}if(K==="m"){rt();return}["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(K)&&(w.add(K),R.preventDefault())},Z=R=>w.delete(R.key.toLowerCase()),H=()=>w.clear();addEventListener("keydown",G),addEventListener("keyup",Z),addEventListener("blur",H);const nt=document.getElementById("gl");let q=null;const ht=R=>{q={id:R.pointerId,x:R.clientX,y:R.clientY}},vt=R=>{!q||R.pointerId!==q.id||(P-=(R.clientX-q.x)*.006,C=Math.max(.25,Math.min(1.2,C+(R.clientY-q.y)*.004)),q.x=R.clientX,q.y=R.clientY)},St=R=>{q&&R.pointerId===q.id&&(q=null)},Vt=R=>{E=Math.max(7,Math.min(28,E+R.deltaY*.012))};nt.addEventListener("pointerdown",ht),addEventListener("pointermove",vt),addEventListener("pointerup",St),addEventListener("pointercancel",St),nt.addEventListener("wheel",Vt,{passive:!0}),_n();const et=y("strong",{class:"hud-name"}),D=y("span",{class:"hud-lvl"}),W=y("span",{class:"hud-coins"}),tt=y("i"),ut=y("button",{type:"button",class:"hud-card","aria-label":"Tu cuenta",onclick:()=>zt()},et,y("span",{class:"hud-sub"},D,W),y("span",{class:"bar"},tt)),wt=y("b",{class:"badge",text:"0"}),_t=y("button",{type:"button",class:"btn gold",hidden:!0,text:"Regalo del día",onclick:()=>ft()}),It=y("div",{class:"hud-actions"},_t,y("button",{type:"button",class:"btn primary",onclick:()=>rt()},"Modos ",y("kbd",{text:"M"})),y("button",{type:"button",class:"btn ghost",onclick:()=>lt()},"Cofres ",wt),y("button",{type:"button",class:"btn ghost",text:"Personaje",onclick:()=>{i()}})),Qt=y("button",{type:"button",class:"prompt",hidden:!0,onclick:()=>N&&dt(N.mode)}),Wt=y("i",{class:"knob"}),mt=y("div",{class:"joy","aria-hidden":"true"},Wt),z=y("p",{class:"help",text:"WASD o flechas para caminar · arrastrá para girar la cámara"});Jn().append(y("div",{class:"hud-top"},ut,It),Qt,mt,z);function Y(){const R=Ot.profile;et.textContent=R.name||"Jugador",D.textContent=`Nivel ${Ot.level}`,W.textContent=`${R.coins} monedas`,tt.style.width=Math.round(Ot.levelProgress*100)+"%",wt.textContent=String(R.chests),wt.classList.toggle("has",R.chests>0),_t.hidden=!Ot.canClaimDaily(),p()}function it(R){const K=[];R.xp&&K.push(`+${R.xp} XP`),R.level&&K.push(`¡Nivel ${R.level}!`),R.chests&&K.push(R.chests===1?"+1 cofre":`+${R.chests} cofres`),R.kits&&R.kits.length&&K.push("Casaca nueva: "+R.kits.map(pt=>pt.name).join(", ")),K.length&&ge(K.join(" · "))}function ft(){const R=Ot.claimDaily();R&&it(R)}Y();const gt=Ot.on(Y);let Nt=null;const Ct=48,L=R=>{const K=mt.getBoundingClientRect();let pt=R.clientX-(K.left+K.width/2),ot=R.clientY-(K.top+K.height/2);const Mt=Math.hypot(pt,ot);Mt>Ct&&(pt*=Ct/Mt,ot*=Ct/Mt),Wt.style.transform=`translate(${pt}px, ${ot}px)`,x.x=pt/Ct,x.y=-ot/Ct},S=()=>{Nt=null,x.x=x.y=0,Wt.style.transform=""};mt.addEventListener("pointerdown",R=>{Nt=R.pointerId,mt.setPointerCapture(R.pointerId),L(R),R.stopPropagation()}),mt.addEventListener("pointermove",R=>{R.pointerId===Nt&&L(R)}),mt.addEventListener("pointerup",S),mt.addEventListener("pointercancel",S);const X=()=>{I=!1};function rt(){I=!0,w.clear(),S(),C_({onPick:dt,onClose:X})}function dt(R){I=!0,w.clear(),S(),R.status==="live"&&R.kind==="embed"?P_(R,{onClose:X}):R.status==="live"&&R.kind==="scene"&&t?t(R.id):R_(R,{onClose:X})}function lt(){I=!0,w.clear(),S(),I_({onClose:X})}function zt(){I=!0,w.clear(),S(),D_({onClose:X,onEditLook:()=>i()})}const Pt=new Ut,kt=new B;let oe=null;function A(R,K){let pt=0,ot=0;I||((w.has("w")||w.has("arrowup"))&&(pt+=1),(w.has("s")||w.has("arrowdown"))&&(pt-=1),(w.has("d")||w.has("arrowright"))&&(ot+=1),(w.has("a")||w.has("arrowleft"))&&(ot-=1),pt+=x.y,ot+=x.x);const Mt=Math.min(1,Math.hypot(pt,ot)),yt=Math.sin(P),Dt=Math.cos(P);Pt.set(-yt*pt+Dt*ot,-Dt*pt-yt*ot),Pt.lengthSq()>0&&Pt.normalize().multiplyScalar(Mt*_h),b.lerp(Pt,1-Math.exp(-14*R)),v.position.x+=b.x*R,v.position.z+=b.y*R;for(const ct of g){const xt=v.position.x-ct.x,Et=v.position.z-ct.z,Jt=Math.hypot(xt,Et),Gt=ct.r+.4;Jt<Gt&&Jt>1e-4&&(v.position.x=ct.x+xt/Jt*Gt,v.position.z=ct.z+Et/Jt*Gt)}const V=Math.hypot(v.position.x,v.position.z);V>ic&&(v.position.x*=ic/V,v.position.z*=ic/V);const bt=b.length();if(bt>.3){let xt=Math.atan2(b.x,b.y)-M;xt=Math.atan2(Math.sin(xt),Math.cos(xt)),M+=xt*(1-Math.exp(-12*R))}v.rotation.y=M,ys(v,K,bt/_h),_.position.x=v.position.x,_.position.z=v.position.z,U.lerp(kt.set(v.position.x,1.4,v.position.z),1-Math.exp(-8*R)),s.position.set(U.x+Math.sin(P)*Math.cos(C)*E,U.y+Math.sin(C)*E,U.z+Math.cos(P)*Math.cos(C)*E),s.lookAt(U),d.rotation.z+=R*.4,h.rotation.y+=R*.2;let k=null,O=nc;for(const ct of f){const xt=Math.hypot(v.position.x-ct.x,v.position.z-ct.z);xt<O&&(k=ct,O=xt),ct.glow.material.opacity=.45+.35*Math.sin(K*3+ct.x)*(xt<nc?1:.4),ct.glow.scale.setScalar(xt<nc?1.04+Math.sin(K*5)*.02:1),ct.g.traverse(Et=>{Et.userData.spin&&(Et.rotation.y+=R*.8),Et.userData.disc&&(Et.rotation.y+=R*4),Et.userData.sway!==void 0&&(Et.rotation.z=Math.sin(K*2+Et.userData.sway)*.08)})}N=k;const Q=N?N.mode.id:null;Q!==oe&&(oe=Q,Qt.hidden=!N,N&&(Qt.textContent="",Qt.append(y("kbd",{text:"E"}),` Entrar a ${N.mode.name}`)))}return{scene:e,camera:s,update:A,dispose(){removeEventListener("keydown",G),removeEventListener("keyup",Z),removeEventListener("blur",H),removeEventListener("pointermove",vt),removeEventListener("pointerup",St),removeEventListener("pointercancel",St),nt.removeEventListener("pointerdown",ht),nt.removeEventListener("wheel",Vt),gt(),A_()&&Ee(),Zn(v),r.forEach(R=>R.dispose()),_n()}}}const vi={HL:20,HW:12,GW:3.6,GH:2.5,GD:3,R:.34},{HL:z_}=vi,ia={bubusela:{id:"bubusela",name:"Bubuselazo",cost:50,color:"#ffb02e",desc:"Una onda de bubusela tira para atrás a los rivales cercanos y les saca la pelota."},pique:{id:"pique",name:"Pique de potrero",cost:35,color:"#75aadb",desc:"Salís disparado con la pelota pegada y nadie te la puede sacar."},iman:{id:"iman",name:"Pelota pegada",cost:45,color:"#b57cf0",desc:"La pelota viene sola hacia vos, incluso si la tiene un rival."},alambrado:{id:"alambrado",name:"Alambrado",cost:45,color:"#9fb0cc",desc:"Levantás un paredón de alambre adelante tuyo que frena jugadores y pelota."}},dl=Object.keys(ia),ze=(i,t,e)=>i<t?t:i>e?e:i,Ks=i=>i===0?1:-1,k_=i=>Ks(i)*z_,Mh=(i,t)=>{let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};function F_(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ga(i,t,e,n,s,a){const r=s-e,o=a-n,c=r*r+o*o,l=c<1e-9?0:ze(((i-e)*r+(t-n)*o)/c,0,1);return Math.hypot(i-(e+r*l),t-(n+o*l))}function bh(i,t,e,n,s,a){return Math.abs(n)<.001?{x:i+s*Math.sin(e)*a,z:t+s*Math.cos(e)*a}:{x:i+s/n*(Math.cos(e)-Math.cos(e+n*a)),z:t+s/n*(Math.sin(e+n*a)-Math.sin(e))}}const{HL:Jr,HW:so,GW:fl}=vi;function O_(i,t,e){const n=t.ai,s=n.inp;if(s.pass=s.through=s.tackle=s.power=!1,s.target=null,s.aimZ=void 0,i.phase!=="play")return s.mx=s.mz=0,s.shoot=!1,s;const a=i.cfg.difficulty;n.t-=e,n.t<=0&&(n.t=.34-.2*a+i.rng()*.12,B_(i,t,n,a,s)),n.hold>0?(n.hold-=e,s.shoot=n.hold>0,s.aimZ=n.aimZ):s.shoot=!1;const r=n.tx-t.x,o=n.tz-t.z,c=Math.hypot(r,o),l=.84+.16*a;return c>n.stop?(s.mx=r/c*l,s.mz=o/c*l):(s.mx=0,s.mz=0),s}function B_(i,t,e,n,s){const a=i.ball,r=Ks(t.team),o=-r*Jr,c=k_(t.team),l=i.ownerPlayer(),h=l&&l.id===t.id,d=l&&l.team===t.team;e.stop=.4;const u=t.role===1?-5.5:t.role===2?5.5:0;if(t.runTo&&t.runT>0&&!h){e.tx=t.runTo.x,e.tz=t.runTo.z,e.mode="run",e.stop=.2;return}if(h){V_(i,t,e,n,s,r,c);return}if(d){e.mode="support";let P=ze(l.x+r*(6+t.role*1.5),-Jr+3,Jr-3),C=u!==0?u*1.25:ze(-l.z*.6,-6,6);for(const E of i.mateList(t))E.id!==l.id&&Math.hypot(E.x-P,E.z-C)<4&&(C+=(C>=E.z?1:-1)*3);e.tx=P,e.tz=ze(C,-so+1.5,so-1.5),e.stop=.8;return}const f=i.players.filter(P=>P.team===t.team),g=Math.hypot(a.x-t.x,a.z-t.z),v=f.filter(P=>P.id!==t.id&&Math.hypot(a.x-P.x,a.z-P.z)<g-.5),m=v.length===0||v.length===1&&g<3.2,p=f.filter(P=>P.id!==t.id&&P.id!==(v.length?v[0].id:-1)),_=!m&&p.every(P=>Math.abs(t.x-o)<=Math.abs(P.x-o));if(m){if(e.mode="chase",e.tx=a.x+a.vx*.25,e.tz=a.z+a.vz*.25,e.stop=.2,l&&l.team!==t.team){const P=Math.hypot(l.x-t.x,l.z-t.z),C=Math.cos(Math.atan2(l.x-t.x,l.z-t.z)-t.face)>.5;P<1.9&&t.tackleCd<=0&&C&&i.rng()<.12+.28*n&&(s.tackle=!0,s.mx=(l.x-t.x)/P,s.mz=(l.z-t.z)/P),P<6&&Ja(i,t,["bubusela","iman"],n,.45)&&(s.power=!0)}else!l&&Ja(i,t,["iman"],n,.1)&&g<8&&(s.power=!0);return}e.mode="defend";const b={x:a.x-o,z:a.z};if(_){const P=Math.hypot(b.x,b.z)||1;e.tx=o+b.x/P*4.2,e.tz=ze(b.z/P*4.2,-fl+.6,fl-.6)}else{let P=null,C=1e9;for(const E of i.foeList(t)){if(l&&E.id===l.id)continue;const U=Math.hypot(E.x-t.x,E.z-t.z)+Math.abs(E.z-u)*.3;U<C&&(C=U,P=E)}P?(e.tx=P.x*.6+o*.4,e.tz=P.z*.8):(e.tx=o+(a.x-o)*.45,e.tz=u*.7)}e.stop=.7}function Ja(i,t,e,n,s){const a=i.meterOf(t);return!a||a.cd>0||!e.includes(a.power)||a.v<ia[a.power].cost?!1:i.rng()<s*(.4+n)}function V_(i,t,e,n,s,a,r){i.ball,e.mode="carry",e.stop=.1;const o=Math.abs(r-t.x),c=i.minOppDist(t.x,t.z,t.team),l=i.callFor&&i.callFor.team===t.team&&i.callFor.id!==t.id?i.players[i.callFor.id]:null,h=11+5*n;if(o<h&&Math.abs(t.z)<so-1.5){const M=(t.z>=0?-1:1)*(fl-.9)*(.7+i.rng()*.3);if(i.laneClear(t.x,t.z,r,M,t.team)>1.4-.4*n||c>4){e.aimZ=M,o>7.5&&i.rng()<.45+.3*n?e.hold=.55+i.rng()*.25:e.hold=.12,e.tx=r,e.tz=0;return}}const d=i.mateList(t),u=c<2.4;let f=null,g=-1e9;for(const M of d){const P=(M.x-t.x)*a,C=Math.hypot(M.x-t.x,M.z-t.z);if(C<3)continue;const E=i.laneClear(t.x,t.z,M.x,M.z,t.team),U=i.minOppDist(M.x,M.z,t.team);if(E<1.3)continue;let w=P*.35+U*.6+E*.4-C*.05;l&&l.id===M.id&&(w+=2.5),w>g&&(g=w,f=M)}if(f&&(u||l&&l.id===f.id&&i.rng()<.7||(f.x-t.x)*a>5&&i.minOppDist(f.x,f.z,t.team)>3.2&&i.rng()<.3+.25*n)){const M=(f.x-t.x)*a;s.target=f.id,M>6&&i.rng()<.35+.35*n?s.through=!0:s.pass=!0,e.tx=t.x,e.tz=t.z;return}c>3.5&&o>9&&Ja(i,t,["pique"],n,.35)&&(s.power=!0);let m=0;for(const M of i.foeList(t))Math.hypot(M.x-t.x,M.z-t.z)<5&&m++;m>=2&&Ja(i,t,["bubusela"],n,.6)&&(s.power=!0),m>=1&&o<14&&Ja(i,t,["alambrado"],n,.12)&&(s.power=!0);const p=Math.atan2(r-t.x,-t.z*.4);let _=p,b=-1e9;for(let M=-4;M<=4;M++){const P=p+M*.28,C=t.x+Math.sin(P)*5,E=t.z+Math.cos(P)*5;if(Math.abs(E)>so-1.2||Math.abs(C)>Jr-1)continue;let U=-Math.abs(M)*.35;for(const w of i.foeList(t)){const x=Ga(w.x,w.z,t.x,t.z,C,E);U-=Math.max(0,2.6-x)*2.2}U>b&&(b=U,_=P)}e.tx=t.x+Math.sin(_)*6,e.tz=t.z+Math.cos(_)*6}const{HL:Ne,HW:un,GW:Hn,GH:Wn,GD:Sh,R:fe}=vi,wh=24,Eh=7.6,G_=44,H_=64,W_=15,X_=17,Th=.98,sc=.52,Ah=12.5,Ch=()=>({mx:0,mz:0,shoot:!1,pass:!1,through:!1,tackle:!1,power:!1,target:null,aimZ:void 0});class q_{constructor(t){this.cfg=Object.assign({duration:180,difficulty:.6,seed:Date.now()&2147483647},t),this.rng=F_(this.cfg.seed),this.time=0,this.score=[0,0],this.timeLeft=this.cfg.duration,this.golden=!1,this.over=!1,this.winner=-1,this.events=[],this.barriers=[],this.marker=null,this.callFor=null,this.stats=[0,1].map(()=>({shots:0,passes:0,tackles:0,powers:0,goals:0})),this.meters={},this.slots={};const e=[0,0];this.players=this.cfg.players.map((n,s)=>{const a=e[n.team]++;return{id:s,team:n.team,role:a,slot:n.slot==null?null:n.slot,name:n.name||"Jugador",hincha:n.hincha||null,power:n.power||dl[Math.floor(this.rng()*dl.length)],x:0,z:0,vx:0,vz:0,face:n.team===0?Math.PI/2:-Math.PI/2,stun:0,tackleT:0,tackleCd:0,recover:0,touchCd:0,actCd:0,kickT:0,charge:0,charging:!1,boost:0,magnet:0,runTo:null,runT:0,celebrate:0,lx:0,lz:0,lastInp:null,ai:{t:this.rng()*.3,tx:0,tz:0,mode:"idle",hold:0,aimZ:0,inp:Ch(),seed:this.rng()}}});for(const n of this.players)n.slot!=null&&(this.slots[n.slot]||(this.slots[n.slot]={team:n.team,ids:[],active:n.id,input:Ch(),autoT:0,lock:0,power:n.power})).ids.push(n.id);for(const n in this.slots){const s=this.slots[n];s.mode=s.ids.length>1?"team":"pro",s.active=s.ids[0],this.meters["s"+n]={v:40,cd:0,power:s.power}}for(const n of this.players)n.slot==null&&(this.meters["p"+n.id]={v:25+this.rng()*20,cd:0,power:n.power});this.ball={x:0,y:fe,z:0,vx:0,vy:0,vz:0,owner:null,lastId:null,lastTeam:0,guided:null,spin:0,speedKick:0},this.placeKickoff(0)}mateList(t){return this.players.filter(e=>e.team===t.team&&e.id!==t.id)}foeList(t){return this.players.filter(e=>e.team!==t.team)}meterOf(t){return this.meters[t.slot!=null?"s"+t.slot:"p"+t.id]}minOppDist(t,e,n){let s=99;for(const a of this.players)a.team!==n&&(s=Math.min(s,Math.hypot(a.x-t,a.z-e)));return s}laneClear(t,e,n,s,a,r){let o=99;for(const c of this.players)c.team===a||c.id===r||(o=Math.min(o,Ga(c.x,c.z,t,e,n,s)));return o}drain(){const t=this.events;return this.events=[],t}ownerPlayer(){return this.ball.owner==null?null:this.players[this.ball.owner]}setInput(t,e){const n=this.slots[t];n&&Object.assign(n.input,e)}placeKickoff(t){this.phase="kickoff",this.phaseT=2.4,this.kickTeam=t,this.barriers.length=0,this.marker=null;for(const n of this.players){const s=Ks(n.team);n.x=-s*(n.role===0?3.4:9.5),n.z=n.role===0?0:n.role===1?-6.2:6.2,n.team===t&&n.role===0&&(n.x=-s*1.3),n.vx=n.vz=0,n.face=s>0?Math.PI/2:-Math.PI/2,n.stun=n.tackleT=n.tackleCd=n.recover=n.touchCd=n.actCd=n.kickT=0,n.charge=0,n.charging=!1,n.boost=0,n.magnet=0,n.runTo=null,n.celebrate=0,n.ai.hold=0,n.ai.mode="idle"}const e=this.ball;e.x=0,e.y=fe,e.z=0,e.vx=e.vy=e.vz=0,e.owner=null,e.guided=null,e.lastId=null;for(const n in this.slots){const s=this.slots[n];s.active=s.ids[0]}this.events.push({type:"kickoff",team:t})}step(t){if(this.time+=t,this.phase==="end"){this.idlePlayers(t);return}if(this.phase==="kickoff"){this.phaseT-=t;for(const e of this.players)e.vx=e.vz=0;if(this.phaseT<=0){this.phase="play";const e=this.players.find(n=>n.team===this.kickTeam&&n.role===0);this.ball.x=e.x+Math.sin(e.face)*.8,this.ball.z=e.z+Math.cos(e.face)*.8,this.ball.owner=e.id,this.ball.lastId=e.id,this.ball.lastTeam=e.team,this.events.push({type:"whistle",kind:"start"})}return}if(this.phase==="goal"){this.phaseT-=t,this.idlePlayers(t),this.updateBall(t),this.decayTimers(t),this.phaseT<=0&&(this.over?this.finish():this.placeKickoff(this.concede));return}this.timeLeft-=t,this.decayTimers(t),this.updateSlots(t);for(const e of this.players){const n=this.inputOf(e,t);e.lastInp=n,this.updatePlayer(e,n,t)}this.separate(),this.updateBarriers(t),this.updateBall(t),this.checkGoal();for(const e in this.slots){const n=this.slots[e].input;n.pass=n.through=n.tackle=n.power=!1}this.phase==="play"&&this.timeLeft<=0&&(this.score[0]!==this.score[1]?this.finish():this.golden?this.finish():(this.golden=!0,this.timeLeft=60,this.events.push({type:"overtime"})))}finish(){this.phase="end",this.over=!0,this.timeLeft=Math.max(0,this.timeLeft),this.winner=this.score[0]>this.score[1]?0:this.score[1]>this.score[0]?1:-1,this.events.push({type:"end",winner:this.winner})}decayTimers(t){for(const e in this.meters){const n=this.meters[e];n.cd=Math.max(0,n.cd-t),this.phase==="play"&&(n.v=Math.min(100,n.v+(e[0]==="s"?2.8:1.5)*t))}this.callFor&&(this.callFor.t-=t,this.callFor.t<=0&&(this.callFor=null)),this.marker&&(this.marker.t-=t,this.marker.t<=0&&(this.marker=null));for(const e of this.players)e.celebrate=Math.max(0,e.celebrate-t),e.kickT=Math.max(0,e.kickT-t)}idlePlayers(t){for(const e of this.players)e.vx*=Math.exp(-8*t),e.vz*=Math.exp(-8*t),e.x+=e.vx*t,e.z+=e.vz*t,e.charging=!1,e.charge=0}updateSlots(t){this.ball;for(const e in this.slots){const n=this.slots[e];if(n.autoT=Math.max(0,n.autoT-t),n.lock=Math.max(0,n.lock-t),n.mode!=="team")continue;const s=this.players[n.active];if(n.input.pass&&!this.canKick(s)){const r=n.ids.slice().sort((c,l)=>this.dist2Ball(this.players[c])-this.dist2Ball(this.players[l])),o=r.indexOf(n.active);n.active=r[(o+1)%r.length],n.input.pass=!1,n.lock=.5,this.events.push({type:"switch",slot:+e,id:n.active});continue}if(n.lock>0)continue;const a=this.ownerPlayer();if(a&&a.team===n.team)n.active!==a.id&&(n.active=a.id,this.events.push({type:"switch",slot:+e,id:n.active}));else if(n.autoT<=0){let r=n.active,o=this.dist2Ball(this.players[n.active])-4;for(const c of n.ids){const l=this.dist2Ball(this.players[c]);l<o&&(o=l,r=c)}r!==n.active&&(n.active=r,n.autoT=.35,this.events.push({type:"switch",slot:+e,id:r}))}}}dist2Ball(t){const e=this.ball;return(t.x-e.x)**2+(t.z-e.z)**2}inputOf(t,e){if(t.slot!=null){const n=this.slots[t.slot];if(n.mode==="pro"||n.active===t.id)return n.input}return O_(this,t,e)}canKick(t){const e=this.ball;return t.stun>0||t.tackleT>0?!1:e.owner===t.id?!0:e.owner!=null?!1:t.touchCd<=0&&e.y<1.3&&Math.hypot(e.x-t.x,e.z-t.z)<Th+.25}updatePlayer(t,e,n){const s=this.ball;t.stun=Math.max(0,t.stun-n),t.tackleCd=Math.max(0,t.tackleCd-n),t.recover=Math.max(0,t.recover-n),t.touchCd=Math.max(0,t.touchCd-n),t.actCd=Math.max(0,t.actCd-n),t.boost=Math.max(0,t.boost-n),t.magnet=Math.max(0,t.magnet-n),t.runT>0&&(t.runT-=n,t.runT<=0&&(t.runTo=null));let a=e.mx,r=e.mz;const o=Math.hypot(a,r);o>1&&(a/=o,r/=o);const c=s.owner===t.id;let l=Eh*(c?.9:1);if(t.boost>0&&(l*=1.8),t.charging&&(l*=.5),t.recover>0&&(l*=.45),t.tackleT>0)t.tackleT-=n,t.vx=t.lx*Ah*(.4+t.tackleT/.34),t.vz=t.lz*Ah*(.4+t.tackleT/.34),this.tackleHit(t),t.tackleT<=0&&(t.recover=.4);else if(t.stun>0)t.vx*=Math.exp(-5*n),t.vz*=Math.exp(-5*n);else{const h=a*l,d=r*l,u=h-t.vx,f=d-t.vz,g=Math.hypot(u,f),v=(o<.05?H_:G_)*n;g<=v?(t.vx=h,t.vz=d):(t.vx+=u/g*v,t.vz+=f/g*v),o>.15&&(t.face+=Mh(t.face,Math.atan2(a,r))*Math.min(1,W_*n))}t.x=ze(t.x+t.vx*n,-Ne+.6,Ne-.6),t.z=ze(t.z+t.vz*n,-un+.6,un-.6),this.handleActions(t,e,n)}handleActions(t,e,n){const s=this.ball;if(t.stun>0||t.tackleT>0){t.charging=!1,t.charge=0;return}const a=this.canKick(t);if(e.shoot&&a)t.charging=!0,t.charge=Math.min(1,t.charge+n/.85);else if(t.charging){const r=t.charge;t.charging=!1,t.charge=0,a&&this.doShot(t,r,e)}e.pass&&t.actCd<=0&&(a?this.doPass(t,e):this.slots[t.slot]&&this.slots[t.slot].mode==="pro"&&(this.callFor={id:t.id,team:t.team,t:1.3},t.actCd=.5,this.events.push({type:"call",id:t.id}))),e.through&&t.actCd<=0&&a&&this.doThrough(t,e),e.tackle&&t.tackleCd<=0&&t.recover<=0&&s.owner!==t.id&&this.startTackle(t,e),e.power&&this.usePower(t)}pickMate(t,e,n){const s=e.mx,a=e.mz,r=Math.hypot(s,a),o=r>.3,c=o?s/r:Math.sin(t.face),l=o?a/r:Math.cos(t.face),h=o?.5:.25,d=Ks(t.team);let u=null,f=-1e9;for(const g of this.mateList(t)){const v=g.x-t.x,m=g.z-t.z,p=Math.hypot(v,m);if(p<2)continue;const _=(v*c+m*l)/p;if(_<h)continue;const b=this.laneClear(t.x,t.z,g.x,g.z,t.team);let M=_*3-p*.035+Math.min(b,3)*.5;n&&(M+=(g.x-t.x)*d*.12),M>f&&(f=M,u=g)}return u}kickBase(t,e){const n=this.ball;n.owner=null,n.guided=null,n.lastId=t.id,n.lastTeam=t.team,t.touchCd=.45,t.kickT=.28,t.actCd=.18,t.charging=!1,t.charge=0,t.face=t.face,this.events.push({type:"kick",kind:e,id:t.id,x:n.x,z:n.z})}doPass(t,e){const n=this.ball;let s=e.target!=null?this.players[e.target]:this.pickMate(t,e,!1);s&&s.team!==t.team&&(s=null);let a,r;if(s)a=s.x+s.vx*.4,r=s.z+s.vz*.4;else{const d=Math.hypot(e.mx,e.mz),u=d>.3?e.mx/d:Math.sin(t.face),f=d>.3?e.mz/d:Math.cos(t.face);a=n.x+u*9,r=n.z+f*9}a=ze(a,-Ne+1,Ne-1),r=ze(r,-un+1,un-1);const o=a-n.x,c=r-n.z,l=Math.max(.5,Math.hypot(o,c)),h=ze(l/17+.12,.28,.85);this.kickBase(t,"pass"),this.startGuide({kind:"pass",x0:n.x,z0:n.z,th0:Math.atan2(o,c),w:0,v:l/h,T:h,h:0,who:s?s.id:null,team:t.team}),s&&this.onPassTarget(t,s,a,r,h),this.stats[t.team].passes++}doThrough(t,e){const n=this.ball,s=Ks(t.team),a=e.target!=null?this.players[e.target]:this.pickMate(t,e,!0);let r,o;if(a&&a.team===t.team){const b=Math.hypot(a.vx,a.vz);r=a.x+a.vx*.95+s*(b<2?3.2:1.6),o=a.z+a.vz*.95}else{const b=Math.hypot(e.mx,e.mz),M=b>.3?e.mx/b:Math.sin(t.face),P=b>.3?e.mz/b:Math.cos(t.face);r=n.x+M*14,o=n.z+P*14}r=ze(r,-Ne+1.5,Ne-1.5),o=ze(o,-un+1.4,un-1.4);const c=r-n.x,l=o-n.z,h=Math.hypot(c,l);if(h<4){this.doPass(t,e);return}const d=ze(h/15+.5,.85,1.5),u=.8+Math.min(.5,h*.02),f=Math.atan2(c,l);let g=1,v=-1e9;for(const b of[-1,1]){const M=b*u/d,P=f-b*u/2,C=h*Math.abs(M)/(2*Math.sin(u/2)),E=bh(n.x,n.z,P,M,C,d/2);let U=Math.min(this.minOppDist(E.x,E.z,t.team),6);(Math.abs(E.z)>un-1||Math.abs(E.x)>Ne-1)&&(U-=5),U>v&&(v=U,g=b)}const m=g*u/d,p=f-g*u/2,_=h*Math.abs(m)/(2*Math.sin(u/2));this.kickBase(t,"through"),t.actCd=.3,this.startGuide({kind:"through",x0:n.x,z0:n.z,th0:p,w:m,v:_,T:d,h:.7+Math.min(.5,h*.025),who:a?a.id:null,team:t.team,side:g}),a&&a.team===t.team&&this.onPassTarget(t,a,r,o,d),this.marker={x:r,z:o,team:t.team,t:d+.2},this.stats[t.team].passes++}startGuide(t){t.t=0,this.ball.guided=t}onPassTarget(t,e,n,s,a){e.runTo={x:n,z:s},e.runT=a+.35;const r=e.slot!=null?this.slots[e.slot]:null;r&&r.mode==="team"&&r.active!==e.id&&(r.active=e.id,r.lock=.9,this.events.push({type:"switch",slot:e.slot,id:e.id}))}doShot(t,e,n){const s=this.ball,a=Ks(t.team),r=a*Ne,o=e>=.3,c={x:Math.sin(t.face),z:Math.cos(t.face)},l=Math.atan2(r-s.x,0-s.z),h=Math.abs(Mh(t.face,l))<Math.PI*.55,d=Math.max(1,Math.hypot(r-s.x,s.z));let u;if(n.aimZ!==void 0)u=n.aimZ;else if(Math.abs(n.mz)>.35)u=ze(n.mz*3,-Hn+.7,Hn-.7);else{let P=0,C=99;for(const E of this.foeList(t)){const U=Math.hypot(E.x-s.x,E.z-s.z);U<C&&(E.x-s.x)*a>0&&(C=U,P=E.z)}u=P>=0?-2.7:Hn-.9}const f=o?25+15*e:20.5,g=(o?.35:.55)+d*(o?.045:.06);let v=u+(this.rng()+this.rng()-1)*g,m=o?.45+this.rng()*1.2:.4+this.rng()*1.2,p=r-s.x,_=v-s.z;h||(p=c.x*10,_=c.z*10,m=.3);const b=Math.max(1,Math.hypot(p,_)),M=b/f;this.kickBase(t,o?"power":"shot"),t.kickT=.35,s.vx=p/b*f,s.vz=_/b*f,s.vy=(m-s.y)/M+.5*wh*M,s.vy=ze(s.vy,0,14),s.y=Math.max(s.y,fe+.05),s.speedKick=f,this.stats[t.team].shots++,this.events[this.events.length-1].power=e}startTackle(t,e){const n=Math.hypot(e.mx,e.mz),s=n>.3?e.mx/n:Math.sin(t.face),a=n>.3?e.mz/n:Math.cos(t.face);t.lx=s,t.lz=a,t.face=Math.atan2(s,a),t.tackleT=.34,t.tackleCd=1.35,t.tackleHit=!1,t.charging=!1,t.charge=0,this.events.push({type:"tackle",id:t.id,x:t.x,z:t.z,hit:!1})}tackleHit(t){const e=this.ball;if(t.tackleHit)return;const n=this.ownerPlayer();if(n&&n.team!==t.team&&Math.hypot(n.x-t.x,n.z-t.z)<1.35){if(t.tackleHit=!0,n.boost>0){t.stun=.7,t.tackleT=0,t.recover=.4,t.vx*=.2,t.vz*=.2,this.events.push({type:"tackle",id:t.id,victim:n.id,hit:!1,blocked:!0,x:t.x,z:t.z});return}e.owner=null,e.guided=null,e.vx=t.lx*6+n.vx*.3,e.vz=t.lz*6+n.vz*.3,e.vy=2.2,e.lastId=t.id,e.lastTeam=t.team,n.stun=.6,t.touchCd=0,this.stats[t.team].tackles++;const s=this.meterOf(t);s.v=Math.min(100,s.v+10),this.events.push({type:"tackle",id:t.id,victim:n.id,hit:!0,x:n.x,z:n.z})}else!n&&Math.hypot(e.x-t.x,e.z-t.z)<1.4&&e.y<1&&(t.tackleHit=!0,e.vx=t.lx*11,e.vz=t.lz*11,e.guided=null,e.vy=1.5,e.lastId=t.id,e.lastTeam=t.team,this.events.push({type:"tackle",id:t.id,hit:!0,x:e.x,z:e.z}));t.tackleT<=0&&(t.tackleHit=!1)}usePower(t){const e=this.meterOf(t),n=ia[e.power];if(!n||e.v<n.cost||e.cd>0)return;e.v-=n.cost,e.cd=2,this.stats[t.team].powers++;const s=this.ball,a={type:"power",id:t.id,power:n.id,x:t.x,z:t.z,ang:t.face};if(n.id==="bubusela"){for(const l of this.foeList(t)){const h=l.x-t.x,d=l.z-t.z,u=Math.hypot(h,d);if(u>7.5)continue;const f=1-u/9,g=u<.01?1:h/u,v=u<.01?0:d/u;l.vx+=g*18*f+g*4,l.vz+=v*18*f+v*4,l.stun=.7+.8*f,l.tackleT=0,l.charging=!1,l.charge=0,s.owner===l.id&&(s.owner=null,s.vx=g*8,s.vz=v*8,s.vy=3,s.lastId=t.id,s.lastTeam=t.team)}const r=s.x-t.x,o=s.z-t.z,c=Math.hypot(r,o);s.owner==null&&c<7.5&&c>.01&&(s.guided=null,s.vx+=r/c*9,s.vz+=o/c*9,s.vy=Math.max(s.vy,2))}else if(n.id==="pique")t.boost=1.5;else if(n.id==="iman")t.magnet=.9;else if(n.id==="alambrado"){const r=Math.sin(t.face),o=Math.cos(t.face),c=ze(t.x+r*3.4,-Ne+3,Ne-3),l=ze(t.z+o*3.4,-un+2.7,un-2.7),h=Math.atan2(r,o)+Math.PI/2,d=Math.sin(h)*2.7,u=Math.cos(h)*2.7;this.barriers.push({x1:c-d,z1:l-u,x2:c+d,z2:l+u,t:4,life:4,team:t.team}),a.x=c,a.z=l,a.ang=Math.atan2(r,o)}this.events.push(a)}updateBarriers(t){for(let e=this.barriers.length-1;e>=0;e--){const n=this.barriers[e];if(n.t-=t,n.t<=0){this.barriers.splice(e,1);continue}for(const s of this.players)Ga(s.x,s.z,n.x1,n.z1,n.x2,n.z2)<sc+.1&&this.pushFromSegment(s,n,sc+.1)}}pushFromSegment(t,e,n){const s=e.x2-e.x1,a=e.z2-e.z1,r=s*s+a*a,o=ze(((t.x-e.x1)*s+(t.z-e.z1)*a)/r,0,1),c=e.x1+s*o,l=e.z1+a*o;let h=t.x-c,d=t.z-l,u=Math.hypot(h,d);return u<1e-4&&(h=-a,d=s,u=Math.hypot(h,d)),h/=u,d/=u,t.x=c+h*n,t.z=l+d*n,{nx:h,nz:d}}separate(){const t=this.players;for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){const s=t[e],a=t[n],r=a.x-s.x,o=a.z-s.z,c=Math.hypot(r,o),l=sc*2;if(c<l&&c>1e-4){const h=(l-c)/2,d=r/c,u=o/c;s.x-=d*h,s.z-=u*h,a.x+=d*h,a.z+=u*h}}for(const e of t)e.x=ze(e.x,-Ne+.6,Ne-.6),e.z=ze(e.z,-un+.6,un-.6)}updateBall(t){const e=this.ball,n=this.phase==="play";if(e.owner!=null){const s=this.players[e.owner],r=.78+.25*Math.min(1,Math.hypot(s.vx,s.vz)/Eh),o=s.x+Math.sin(s.face)*r,c=s.z+Math.cos(s.face)*r,l=1-Math.exp(-20*t);e.x+=(o-e.x)*l,e.z+=(c-e.z)*l,e.vx=s.vx,e.vz=s.vz,e.vy=0,e.y=fe,e.z=ze(e.z,-un+fe,un-fe),e.x=ze(e.x,-Ne+fe,Ne-fe),(s.stun>0||Math.hypot(e.x-s.x,e.z-s.z)>2.3)&&(e.owner=null);for(const h of this.barriers)Ga(e.x,e.z,h.x1,h.z1,h.x2,h.z2)<fe+.12&&(e.x=s.x,e.z=s.z)}else if(e.guided){const s=e.guided;s.t+=t;const a=Math.min(s.t,s.T),r=bh(s.x0,s.z0,s.th0,s.w,s.v,a),o=s.th0+s.w*a;e.x=r.x,e.z=r.z,e.vx=Math.sin(o)*s.v,e.vz=Math.cos(o)*s.v;const c=Math.PI*a/s.T;e.y=fe+s.h*Math.sin(c),e.vy=s.h*Math.cos(c)*Math.PI/s.T,s.t>=s.T&&(e.guided=null,e.vx*=.5,e.vz*=.5,e.vy=0,e.y=fe)}else{for(const s of this.players)if(s.magnet>0&&e.owner==null&&n){const a=s.x-e.x,r=s.z-e.z,o=Math.hypot(a,r);o<10&&o>.3&&(e.vx=a/o*17,e.vz=r/o*17,e.vy=0,e.y=Math.max(fe,e.y*.8),e.guided=null)}if(e.vy-=wh*t,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t,e.y<fe&&(e.y=fe,e.vy<-2.5?(e.vy<-5&&this.events.push({type:"bounce",x:e.x,z:e.z,v:-e.vy}),e.vy=-e.vy*.5,e.vx*=.97,e.vz*=.97):e.vy=0),e.y<=fe+.001&&e.vy===0){const s=Math.hypot(e.vx,e.vz),a=(1.5+s*.32)*t;s<=a?e.vx=e.vz=0:(e.vx*=(s-a)/s,e.vz*=(s-a)/s)}else e.vx*=1-.04*t,e.vz*=1-.04*t}this.collideBall(),n&&this.capture()}collideBall(){const t=this.ball,e=this.phase==="goal",n=Math.abs(t.z)<Hn&&t.y<Wn;if(e){const s=Math.sign(t.x)||1;Math.abs(t.x)>Ne+Sh-fe&&(t.x=s*(Ne+Sh-fe),t.vx*=-.25),Math.abs(t.z)>Hn-fe&&(t.z=Math.sign(t.z)*(Hn-fe),t.vz*=-.3),t.y>Wn-fe&&(t.y=Wn-fe,t.vy=-Math.abs(t.vy)*.3),Math.abs(t.x)<Ne+.2&&(t.x=s*(Ne+.2),t.vx=Math.abs(t.vx)*s),t.vx*=1-3*(1/60),t.vz*=1-3*(1/60);return}for(const s of[-1,1])for(const a of[-1,1]){const r=s*Ne,o=a*Hn,c=t.x-r,l=t.z-o,h=Math.hypot(c,l);if(h<fe+.13&&t.y<Wn+fe){const d=c/(h||1),u=l/(h||1),f=t.vx*d+t.vz*u;f<0&&(t.vx-=1.75*f*d,t.vz-=1.75*f*u,t.guided&&(t.guided=null),this.events.push({type:"post",x:t.x,z:t.z,v:-f})),t.x=r+d*(fe+.13),t.z=o+u*(fe+.13)}}if(Math.abs(t.z)<Hn&&Math.abs(Math.abs(t.x)-Ne)<fe+.1&&Math.abs(t.y-Wn)<fe+.1&&(t.vy>0||Math.abs(t.y-Wn)<fe)&&(t.vy=-Math.abs(t.vy)*.6-1,t.vx*=.6,t.guided=null,t.y=t.y>Wn?Wn+fe+.1:Wn-fe-.1,this.events.push({type:"bar",x:t.x,z:t.z,v:Math.abs(t.vy)})),Math.abs(t.x)>Ne-fe&&!(n&&Math.abs(t.z)<Hn-.05)){const s=Math.sign(t.x);t.vx*s>0&&(Math.abs(t.vx)>5&&this.events.push({type:"wall",x:t.x,z:t.z,v:Math.abs(t.vx)}),t.vx*=-.6,t.guided&&(t.guided=null)),t.x=s*(Ne-fe)}if(Math.abs(t.z)>un-fe){const s=Math.sign(t.z);t.vz*s>0&&(Math.abs(t.vz)>5&&this.events.push({type:"wall",x:t.x,z:t.z,v:Math.abs(t.vz)}),t.vz*=-.65,t.vx*=.97,t.guided&&(t.guided=null)),t.z=s*(un-fe)}for(const s of this.barriers){if(t.owner!=null)break;if(Ga(t.x,t.z,s.x1,s.z1,s.x2,s.z2)<fe+.12&&t.y<2.6){const{nx:r,nz:o}=this.pushFromSegment(t,s,fe+.12),c=t.vx*r+t.vz*o;c<0&&(t.vx-=1.6*c*r,t.vz-=1.6*c*o,t.guided=null,this.events.push({type:"wall",x:t.x,z:t.z,v:-c}))}}}capture(){const t=this.ball;if(t.owner!=null)return;const e=Math.hypot(t.vx,t.vz);let n=null,s=1e9;for(const a of this.players){if(a.stun>0||a.tackleT>0)continue;const r=Math.hypot(t.x-a.x,t.z-a.z);if(e<=X_){if(a.touchCd>0||t.y>1.05||r>Th)continue;const o=t.guided&&t.guided.who===a.id?r-.6:r;o<s&&(s=o,n=a)}else if(r<.78&&t.y<1.9&&a.team!==t.lastTeam){const o=(t.x-a.x)/(r||1),c=(t.z-a.z)/(r||1),l=t.vx*o+t.vz*c;if(l<0){const h=e>30;t.vx=(t.vx-2*l*o)*.45,t.vz=(t.vz-2*l*c)*.45,t.vy=2+this.rng()*3,t.guided=null,t.lastId=a.id,t.lastTeam=a.team,a.stun=h?.9:.35,h&&(a.vx=-o*7,a.vz=-c*7),this.events.push({type:"block",id:a.id,x:a.x,z:a.z,v:e})}}}if(n){const a=t.guided;if(t.owner=n.id,t.guided=null,t.vy=0,t.y=fe,t.lastId=n.id,a&&a.who===n.id&&a.team===n.team){const r=this.meterOf(n);r.v=Math.min(100,r.v+6),this.events.push({type:"receive",id:n.id,kind:a.kind})}t.lastTeam=n.team,n.magnet>0&&(n.magnet=0)}}checkGoal(){const t=this.ball;if(this.phase==="play"&&Math.abs(t.x)>Ne&&Math.abs(t.z)<Hn&&t.y<Wn){const e=t.x>0?0:1;this.score[e]++,this.stats[e].goals++;const n=t.lastTeam===e?t.lastId:null;this.concede=1-e,this.phase="goal",this.phaseT=3.6,t.owner=null,t.guided=null,this.golden&&(this.over=!0),this.timeLeft<=0&&(this.over=!0);for(const s of this.players)s.charging=!1,s.charge=0,s.tackleT=0,s.team===e&&(s.celebrate=3.4);for(const s of this.players)if(s.team!==e){const a=this.meterOf(s);a.v=Math.min(100,a.v+15)}this.events.push({type:"goal",team:e,scorer:n,x:t.x,z:t.z,speed:Math.hypot(t.vx,t.vz),score:this.score.slice()})}}}const{HL:Fe,HW:$e,GW:Un,GH:Nn,GD:ui}=vi,Le=Math.PI,va=(i,t,e,{repeat:n,srgb:s=!0}={})=>{const a=document.createElement("canvas");a.width=i,a.height=t,e(a.getContext("2d"),i,t);const r=new Rn(a);return s&&(r.colorSpace=ke),r.anisotropy=4,n&&(r.wrapS=r.wrapT=Hi,r.repeat.set(n[0],n[1])),r};function j_(){const t=Math.round(2048*($e*2)/(Fe*2)),e=2048/(Fe*2);return va(2048,t,(n,s,a)=>{const o=s/10;for(let u=0;u<10;u++)n.fillStyle=u%2?"#4d9a55":"#5aa862",n.fillRect(u*o,0,o+1,a);let c=7;const l=()=>(c=c*16807%2147483647)/2147483647;for(let u=0;u<900;u++)n.fillStyle=l()>.5?"rgba(255,255,255,.03)":"rgba(0,30,0,.05)",n.beginPath(),n.ellipse(l()*s,l()*a,6+l()*22,3+l()*10,l()*Le,0,Le*2),n.fill();const h=(u,f,g,v)=>{const m=n.createRadialGradient(u,f,0,u,f,Math.max(g,v));m.addColorStop(0,"rgba(170,132,86,.95)"),m.addColorStop(.6,"rgba(160,125,80,.7)"),m.addColorStop(1,"rgba(160,125,80,0)"),n.save(),n.translate(u,f),n.scale(g/Math.max(g,v),v/Math.max(g,v)),n.translate(-u,-f),n.fillStyle=m,n.beginPath(),n.arc(u,f,Math.max(g,v),0,Le*2),n.fill(),n.restore()};h(s/2,a/2,2.4*e,2.4*e),h(1.6*e,a/2,2.8*e,5*e),h(s-1.6*e,a/2,2.8*e,5*e),h(s*.3,1*e,3*e,1.6*e),h(s*.72,a-1*e,3.4*e,1.6*e),n.strokeStyle="rgba(255,255,255,.92)",n.lineWidth=.16*e,n.lineCap="round";const d=(u,f,g,v)=>{n.beginPath(),n.moveTo(u,f),n.lineTo(g,v),n.stroke()};n.strokeRect(.1*e,.1*e,s-.2*e,a-.2*e),d(s/2,0,s/2,a),n.beginPath(),n.arc(s/2,a/2,3.4*e,0,Le*2),n.stroke(),n.fillStyle="#fff",n.beginPath(),n.arc(s/2,a/2,.22*e,0,Le*2),n.fill();for(const u of[0,1]){const f=u?s:0,g=u?-1:1;n.strokeRect(u?s-6.5*e:.1*e,a/2-7*e,6.4*e,14*e),n.strokeRect(u?s-2.6*e:.1*e,a/2-3.6*e-1.2*e,2.5*e,(3.6*2+2.4)*e),n.beginPath(),n.arc(f+g*4.6*e,a/2,2.2*e,u?Le-1:-1,u?Le+1:1),n.stroke(),n.beginPath(),n.arc(f+g*4.6*e,a/2,.16*e,0,Le*2),n.fill()}n.globalCompositeOperation="destination-out";for(let u=0;u<160;u++)n.fillStyle="rgba(0,0,0,.25)",n.fillRect(l()*s,l()*a,14+l()*30,3+l()*6)})}const $_=()=>va(128,128,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="rgba(205,215,230,.9)",i.lineWidth=3;for(let n=-e;n<t+e;n+=16)i.beginPath(),i.moveTo(n,0),i.lineTo(n+e,e),i.stroke(),i.beginPath(),i.moveTo(n+e,0),i.lineTo(n,e),i.stroke()},{repeat:[1,1]}),Y_=()=>va(64,64,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="rgba(255,255,255,.85)",i.lineWidth=3,i.strokeRect(0,0,t,e),i.beginPath(),i.moveTo(t/2,0),i.lineTo(t/2,e),i.moveTo(0,e/2),i.lineTo(t,e/2),i.stroke()}),Fr=(i,t,e)=>va(96,64,(n,s,a)=>{n.fillStyle=i,n.fillRect(0,0,s,a),e?(n.fillStyle=t,n.fillRect(0,a/3,s,a/3),n.fillStyle="#f6b40e",n.beginPath(),n.arc(s/2,a/2,6,0,Le*2),n.fill()):(n.fillStyle=t,n.fillRect(0,0,s*.5,a))});function J_(){return va(4,256,(i,t,e)=>{const n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"#24407a"),n.addColorStop(.45,"#4a7bc0"),n.addColorStop(.72,"#f2a76a"),n.addColorStop(.86,"#ffd28a"),n.addColorStop(1,"#ffe7b5"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function K_(i){const t=new At;i.add(t);const e=new J(new re(170,24,16),new qt({map:J_(),side:Ke,fog:!1}));t.add(e),i.fog=new qi("#e9c493",70,190),i.add(new sr("#bcd4ff","#6b7a4a",.85));const n=new yi("#ffe2b0",1.5);n.position.set(-18,30,16),i.add(n);const s=new yi("#9fc2ff",.45);s.position.set(20,12,-14),i.add(s);const a=new J(new nn(150,40),Tt("#6f9a52"));a.rotation.x=-Le/2,a.position.y=-.02,t.add(a);const r=new J(new xn(Fe*2+8,$e*2+8),Tt("#a7916a"));r.rotation.x=-Le/2,r.position.y=-.01,t.add(r);const o=new J(new xn(Fe*2,$e*2),new ji({map:j_(),gradientMap:Tt("#fff").gradientMap}));o.rotation.x=-Le/2,t.add(o);const c=$_();new qt({map:c,transparent:!0,side:_e,depthWrite:!1,alphaTest:.05});const l=Tt("#8d98aa"),h=(m,p,_,b,M,P,C)=>{const E=new J(new Kt(m,p,_),Tt(b));return E.position.set(M,P,C),t.add(E),E},d=(m,p,_,b,M,P)=>{const C=c.clone();C.needsUpdate=!0,C.repeat.set(m/2.4,p/2.4);const E=new J(new xn(m,p),new qt({map:C,transparent:!0,side:_e,depthWrite:!1}));E.position.set(_,b,M),E.rotation.y=P,t.add(E)},u=Fe*2+.6;h(u,.9,.2,"#e8e4da",0,.45,-$e-.1);for(let m=0;m<20;m++)h(2,.9,.22,m%2?"#75aadb":"#f4f1ea",-Fe+1+m*2,.45,-$e-.1);d(u,3.6,0,.9+1.8,-$e-.1,0),h(u,.55,.2,"#e8e4da",0,.275,$e+.1);for(let m=0;m<20;m++)h(2,.55,.22,m%2?"#75aadb":"#f4f1ea",-Fe+1+m*2,.275,$e+.1);for(const m of[-1,1]){const p=$e-Un;for(const _ of[-1,1])h(.2,.9,p,"#e8e4da",m*(Fe+.1),.45,_*(Un+p/2)),d(p,3.6,m*(Fe+.1),2.7,_*(Un+p/2),Le/2);h(.2,.9,.2,"#e8e4da",m*(Fe+.1),.45,0)}for(let m=-Fe;m<=Fe;m+=5){const p=new J(new te(.07,.07,4.5,6),l);p.position.set(m,2.25,-$e-.1),t.add(p)}for(const m of[-1,1])for(const p of[-$e,-6,6,$e]){const _=new J(new te(.07,.07,4.5,6),l);_.position.set(m*(Fe+.1),2.25,p),t.add(_)}const f=[],g=Y_();for(const m of[-1,1]){const p=new At;p.position.x=m*Fe,t.add(p);for(const U of[-1,1]){const w=new J(new te(.12,.12,Nn,10),Tt("#ffffff"));w.position.set(0,Nn/2,U*Un),p.add(w);const x=new J(new te(.06,.06,Nn,8),Tt("#dfe6f0"));x.position.set(m*ui,Nn/2,U*Un),p.add(x);const N=new J(new te(.05,.05,ui,8),Tt("#dfe6f0"));N.rotation.z=Le/2,N.position.set(m*ui/2,.05,U*Un),p.add(N)}const _=new J(new te(.12,.12,Un*2+.24,10),Tt("#ffffff"));_.rotation.x=Le/2,_.position.set(0,Nn,0),p.add(_);const b=new J(new te(.05,.05,Un*2,8),Tt("#dfe6f0"));b.rotation.x=Le/2,b.position.set(m*ui,Nn,0),p.add(b);const M=new At,P=(U,w,x,N)=>{const I=g.clone();return I.needsUpdate=!0,I.wrapS=I.wrapT=Hi,I.repeat.set(x,N),new J(new xn(U,w),new qt({map:I,transparent:!0,side:_e,depthWrite:!1,opacity:.8}))},C=P(Un*2,Nn,14,6);C.rotation.y=Le/2,C.position.set(m*ui,Nn/2,0),M.add(C);const E=P(ui,Un*2,6,14);E.rotation.x=Le/2,E.rotation.z=Le/2,E.position.set(m*ui/2,Nn,0),M.add(E);for(const U of[-1,1]){const w=P(ui,Nn,6,6);w.position.set(m*ui/2,Nn/2,U*Un),M.add(w)}p.add(M),f.push({net:M,sx:m,pulse:0,base:p})}for(const m of[-1,1])for(const p of[-1,1]){const _=m*(Fe+7),b=p*($e+6),M=new J(new te(.18,.28,13,6),Tt("#5b6678"));M.position.set(_,6.5,b),t.add(M);const P=new J(new Kt(2.6,1.2,.5),new qt({color:"#fff6d8"}));P.position.set(_,13.2,b),P.lookAt(0,8,0),t.add(P)}const v=Z_(t);return Q_(t),{root:t,nets:f,fans:v,pulseNet(m){const p=f.find(_=>_.sx===m);p&&(p.pulse=1)},setExcite(m){v.excite=m},update(m,p){for(const _ of f){_.pulse=Math.max(0,_.pulse-m*1.4);const b=_.pulse;_.net.scale.set(1+.18*Math.sin(p*25)*b,1,1+.05*b),_.net.position.x=_.sx*.5*b*Math.abs(Math.sin(p*14))}v.update(m,p)},dispose(){i.remove(t),t.traverse(m=>{m.geometry&&m.geometry.dispose(),m.material&&m.material.dispose&&!m.material.isShared&&m.material.dispose()})}}}function Z_(i){const t=new pn(.28,.45,3,8),e=new re(.26,8,6),n=[],s=(x,N,I,F,G,Z,H,nt=1,q=.75)=>{for(let ht=0;ht<F;ht++){const vt=ht*nt,St=.55+ht*q,Vt=x-G*vt,et=N-Z*vt,D=new J(new Kt(G?1:I,St,Z?1:I),Tt(ht%2?"#9aa3b2":"#aab2bf"));D.position.set(Vt,St/2,et),i.add(D);const W=Math.floor(I/.95);for(let tt=0;tt<W;tt++){const ut=-I/2+.5+tt*(I/W);n.push({x:Vt+(Z?ut:0)+(Math.random()-.5)*.2,y:St,z:et+(G?ut:0)+(Math.random()-.5)*.2,ry:H})}}};s(0,-$e-2.2,Fe*2+6,5,0,1,0),s(-Fe-4.8,0,$e*2+2,3,1,0,Le/2,1,.75),s(Fe+4.8,0,$e*2+2,3,-1,0,-Le/2,1,.75),s(0,$e+1.9,Fe*2+6,1,0,-1,Le);const a=n.length,r=new ps(t,new ji({gradientMap:Tt("#fff").gradientMap}),a),o=new ps(e,Tt("#e3b48f"),a),c=["#75aadb","#f4f1ea","#75aadb","#c9382f","#1b3a8c","#f4f1ea","#2f8f5b","#f2c21b","#15161a","#75aadb"],l=["#f1c7a5","#e3b48f","#d39b74","#b97a50","#8a5a3c","#5e3b26"],h=new ee,d=new Float32Array(a),u=new Float32Array(a);for(let x=0;x<a;x++)h.set(c[Math.floor(Math.random()*c.length)]),r.setColorAt(x,h),h.set(l[Math.floor(Math.random()*l.length)]),o.setColorAt(x,h),d[x]=Math.random()*10,u[x]=.5+Math.random()*.8;i.add(r,o);const f=new xn(1.8,1.2,6,3),g=[Fr("#75aadb","#ffffff",!0),Fr("#c9382f","#f4f1ea",!1),Fr("#1b3a8c","#f2c21b",!1),Fr("#75aadb","#ffffff",!0)],v=[];for(let x=0;x<26;x++){const N=n[Math.floor(Math.random()*n.length)],I=new At,F=new J(new te(.03,.03,2.4,5),Tt("#6b4a2a"));F.position.y=1.2,I.add(F);const G=new J(f,new qt({map:g[x%g.length],side:_e}));G.position.set(.9,2,0),I.add(G),I.position.set(N.x,N.y+.6,N.z),I.rotation.y=N.ry,i.add(I),v.push({g:I,f:G,ph:Math.random()*6})}const m=new Mn(.28,.6,3),p=new ps(m,new qt,80),_=["#75aadb","#ffffff","#75aadb","#f6b40e"],b=new Me,M=new Wi,P=new Cn,C=new B(1,1,1),E=new B;for(let x=0;x<80;x++){const N=-Fe+.4+x*((Fe*2-.8)/79);E.set(N,4.2-Math.sin(x%8/8*Le)*.5,-$e-.2),P.set(Le,0,0),M.setFromEuler(P),b.compose(E,M,C),p.setMatrixAt(x,b),p.setColorAt(x,h.set(_[x%_.length]))}i.add(p);const U=new Be,w={excite:.2,update(x,N){const I=w.excite;for(let F=0;F<a;F++){const G=n[F],Z=Math.max(0,Math.sin(N*(4+I*6)+d[F]))*(.05+I*.55)*u[F];U.position.set(G.x,G.y+.55+Z,G.z),U.rotation.set(0,G.ry,0),U.scale.set(1,1,1),U.updateMatrix(),r.setMatrixAt(F,U.matrix),U.position.y+=.62,U.updateMatrix(),o.setMatrixAt(F,U.matrix)}r.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0;for(const F of v)F.f.rotation.y=Math.sin(N*(3+I*4)+F.ph)*.35,F.g.rotation.z=Math.sin(N*(2+I*3)+F.ph)*.12*(.5+I)}};return w}function Q_(i){const t=["#b9a68a","#c9b79d","#a79880","#d1c1a6","#9d8f7a","#c4a98c","#8f8574"],e=(f,g)=>f+Math.random()*(g-f),n=va(64,128,(f,g,v)=>{f.fillStyle="#fff",f.fillRect(0,0,g,v),f.fillStyle="rgba(50,70,110,.55)";for(let m=8;m<v-8;m+=20)for(let p=6;p<g-6;p+=18)f.fillRect(p,m,9,12)});for(let f=0;f<42;f++){const g=Le+(f/41-.5)*Le*1.5,v=e(78,105),m=e(12,38),p=e(7,13),_=e(7,12),b=new J(new Kt(p,m,_),new ji({color:t[f%t.length],map:n,gradientMap:Tt("#fff").gradientMap}));b.material.map=n.clone(),b.material.map.needsUpdate=!0,b.material.map.wrapS=b.material.map.wrapT=Hi,b.material.map.repeat.set(Math.round(p/6),Math.round(m/9)),b.position.set(Math.cos(g)*v*1,m/2,Math.sin(g)*v-0),b.position.z=-Math.abs(b.position.z)-22,b.position.x=(f/41-.5)*190,b.rotation.y=e(-.1,.1),i.add(b)}const s=new At,a=(f,g)=>{const v=new J(new te(.25,.3,14,6),Tt("#8d98aa"));v.position.set(f,7,g),s.add(v)};a(-2,-2),a(2,-2),a(-2,2),a(2,2);const r=new J(new te(4.6,4.6,6,16),Tt("#d8d3c6"));r.position.y=17,s.add(r);const o=new J(new Mn(4.9,2.6,16),Tt("#c9382f"));o.position.y=21.3,s.add(o),s.position.set(-46,0,-70),i.add(s);for(let f=0;f<3;f++){const g=new J(new te(3.4,3.4,22+f*3,14),Tt("#cfd4da"));g.position.set(52+f*7.5,11+f*1.5,-78),i.add(g);const v=new J(new Mn(3.5,2.6,14),Tt("#9aa3b2"));v.position.set(52+f*7.5,23+f*3,-78),i.add(v)}const c=new te(.3,.4,3,6),l=new go(2.2,0),h=new ps(c,Tt("#6b4a2a"),40),d=new ps(l,Tt("#3f8a4c"),40),u=new Be;for(let f=0;f<40;f++){const g=f%2?1:-1,v=e(-70,70),m=g*e(30,50)+(g>0?6:-4);u.position.set(v,1.5,m),u.scale.set(1,e(.9,1.3),1),u.updateMatrix(),h.setMatrixAt(f,u.matrix),u.position.set(v,4.4,m),u.scale.setScalar(e(.9,1.5)),u.updateMatrix(),d.setMatrixAt(f,u.matrix)}i.add(h,d)}const t1=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.45,"rgba(255,255,255,.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=new Rn(i);return n.colorSpace=ke,n})(),Xn=700;class e1{constructor(t){this.scene=t,this.n=Xn,this.pos=new Float32Array(Xn*3),this.col=new Float32Array(Xn*3),this.size=new Float32Array(Xn),this.alpha=new Float32Array(Xn),this.vel=new Float32Array(Xn*3),this.life=new Float32Array(Xn),this.maxLife=new Float32Array(Xn).fill(1),this.grav=new Float32Array(Xn),this.s0=new Float32Array(Xn),this.cursor=0;const e=new Ze;e.setAttribute("position",new en(this.pos,3)),e.setAttribute("color",new en(this.col,3)),e.setAttribute("size",new en(this.size,1)),e.setAttribute("alpha",new en(this.alpha,1)),this.uniforms={uScale:{value:600},uMap:{value:t1}},this.points=new _d(e,new _i({uniforms:this.uniforms,transparent:!0,depthWrite:!1,vertexColors:!0,vertexShader:`
        attribute float size; attribute float alpha; varying vec3 vC; varying float vA; uniform float uScale;
        void main() {
          vC = color; vA = alpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * uScale / max(0.1, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D uMap; varying vec3 vC; varying float vA;
        void main() { vec4 t = texture2D(uMap, gl_PointCoord); gl_FragColor = vec4(vC, vA * t.a); }`})),this.points.frustumCulled=!1,t.add(this.points),this.rings=[];const n=new bn(.86,1,48);for(let s=0;s<8;s++){const a=new J(n,new qt({color:"#fff",transparent:!0,opacity:0,side:_e,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.visible=!1,t.add(a),this.rings.push({m:a,t:0,dur:1,r:1,active:!1})}this.trailColor=new ee("#fff"),this.trailOn=0}setScale(t,e){this.uniforms.uScale.value=t*Math.min(devicePixelRatio||1,2)/(2*Math.tan(jr.degToRad(e)/2))}emit(t,e,n,s,a,r,o,c,l,h=-9,d=1){const u=this.cursor;this.cursor=(this.cursor+1)%this.n;const f=new ee(o);this.pos[u*3]=t,this.pos[u*3+1]=e,this.pos[u*3+2]=n,this.vel[u*3]=s,this.vel[u*3+1]=a,this.vel[u*3+2]=r,this.col[u*3]=f.r,this.col[u*3+1]=f.g,this.col[u*3+2]=f.b,this.s0[u]=c,this.size[u]=c,this.life[u]=l,this.maxLife[u]=l,this.grav[u]=h,this.alpha[u]=d}burst(t,e,n,s,a=12,r=4,o=.5,c=.6,l=-9){for(let h=0;h<a;h++){const d=Math.random()*Math.PI*2,u=Math.random(),f=r*(.4+u*.8);this.emit(t,e,n,Math.cos(d)*f,(.3+Math.random())*r*.5,Math.sin(d)*f,s,o*(.6+Math.random()*.8),c*(.6+Math.random()*.6),l)}}dust(t,e,n=0,s=0,a=6){for(let r=0;r<a;r++)this.emit(t+(Math.random()-.5)*.6,.12,e+(Math.random()-.5)*.6,n*2+(Math.random()-.5)*1.6,.4+Math.random()*.9,s*2+(Math.random()-.5)*1.6,r%2?"#d9c7a0":"#b8a37a",.9+Math.random()*.7,.5+Math.random()*.3,-1.5,.7)}confetti(t,e,n=140){const s=["#75aadb","#ffffff","#f6b40e","#9fd0ff","#ffffff","#ffd45e"];for(let a=0;a<n;a++){const r=Math.random()*Math.PI*2,o=3+Math.random()*8;this.emit(t,1.2,e,Math.cos(r)*o,6+Math.random()*9,Math.sin(r)*o,s[a%s.length],.22+Math.random()*.2,1.8+Math.random()*1.2,-9)}}ring(t,e,n,s,a=.6,r=.1){const o=this.rings.find(c=>!c.active)||this.rings[0];o.active=!0,o.t=0,o.dur=a,o.r=s,o.m.material.color.set(n),o.m.position.set(t,r,e),o.m.visible=!0}trailStyle(t,e){this.trailColor.set(t),this.trailOn=e}update(t,e){for(let s=0;s<this.n;s++){if(this.life[s]<=0){this.alpha[s]=0;continue}this.life[s]-=t;const a=Math.max(0,this.life[s]/this.maxLife[s]);this.vel[s*3+1]+=this.grav[s]*t,this.pos[s*3]+=this.vel[s*3]*t,this.pos[s*3+1]=Math.max(.05,this.pos[s*3+1]+this.vel[s*3+1]*t),this.pos[s*3+2]+=this.vel[s*3+2]*t,this.alpha[s]=Math.min(1,a*2),this.size[s]=this.s0[s]*(.4+.6*a)}for(const s of this.rings){if(!s.active)continue;s.t+=t;const a=s.t/s.dur;if(a>=1){s.active=!1,s.m.visible=!1;continue}const r=1-(1-a)*(1-a);s.m.scale.setScalar(Math.max(.01,s.r*r)),s.m.material.opacity=(1-a)*.85}e&&this.trailOn>0&&this.emit(e.x,e.y,e.z,0,0,0,this.trailColor,.62*this.trailOn,.4,0,.85);const n=this.points.geometry;n.attributes.position.needsUpdate=!0,n.attributes.size.needsUpdate=!0,n.attributes.alpha.needsUpdate=!0,n.attributes.color.needsUpdate=!0}dispose(){this.scene.remove(this.points),this.points.geometry.dispose(),this.points.material.dispose();for(const t of this.rings)this.scene.remove(t.m),t.m.material.dispose();this.rings[0].m.geometry.dispose()}}const fi=Math.PI,n1=1.25,i1=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);return e.addColorStop(0,"rgba(0,0,0,.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Rn(i)})(),s1=new qt({map:i1,transparent:!0,depthWrite:!1}),a1=new nn(1,20),Gd=i=>{const t=new J(a1,s1.clone());return t.rotation.x=-fi/2,t.position.y=.03,t.scale.setScalar(i),t};function r1(i,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=new Rn(e);n.colorSpace=ke;const s=()=>{const a=e.getContext("2d");a.clearRect(0,0,256,64),a.fillStyle="rgba(11,20,36,.82)",a.beginPath(),a.roundRect(4,8,248,48,22),a.fill(),a.fillStyle=t,a.beginPath(),a.arc(30,32,10,0,fi*2),a.fill(),a.fillStyle="#fff",a.font="30px Anton, Impact, sans-serif",a.textBaseline="middle",a.fillText(i.toUpperCase(),52,34,190),n.needsUpdate=!0};return s(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(s),n}const Rh=i=>[1,3,5].map(t=>parseInt(i.slice(t,t+2),16)),Ph=(i,t)=>{const e=Rh(i),n=Rh(t);return Math.hypot(e[0]-n[0],e[1]-n[1],e[2]-n[2])};function o1(i){const t=Oe[i]||Oe[0];let e=1,n=-1;return Oe.forEach((s,a)=>{if(a===i)return;const r=Math.min(Ph(s.c1,t.c1),Ph(s.c1,t.c2))+(s.pattern==="solid"||s.pattern==="stripes10"?40:0);r>n&&(n=r,e=a)}),e}function ac(i,t){const e=Object.assign({},i);return e.of=Bi("of","kit"),e.kt=t,e.pr=Bi("pr",""),e.ex===Bi("ex","shout")&&(e.ex=Bi("ex","sing")),e}function pl(i,t=[]){const e=zl.filter(s=>!t.includes(s.id)),n=[];for(;n.length<i&&e.length;)n.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);return n}class c1{constructor(t,e,n,s){this.p=e,this.root=new At,this.avatar=Mi(n),this.avatar.userData.raise[0]=this.avatar.userData.raise[1]=0,this.avatar.scale.setScalar(n1),this.root.add(this.avatar),this.shadow=Gd(.85),this.root.add(this.shadow),this.shadow.scale.setScalar(.95);const a=new po(new ir({map:r1(e.name,s),transparent:!0,depthWrite:!1,depthTest:!1}));a.scale.set(2.5,.62,1),a.position.y=3.35,a.renderOrder=10,this.label=a,this.root.add(a),this.arrow=new J(new Mn(.34,.6,4),new qt({color:"#f6b40e",depthTest:!1})),this.arrow.rotation.x=fi,this.arrow.position.y=3.9,this.arrow.renderOrder=11,this.arrow.visible=!1,this.root.add(this.arrow),this.ring=new J(new bn(.95,1.1,32),new qt({color:"#f6b40e",transparent:!0,opacity:.9,depthWrite:!1})),this.ring.rotation.x=-fi/2,this.ring.position.y=.05,this.ring.visible=!1,this.root.add(this.ring),this.charge=new J(new bn(1.2,1.4,40),new qt({color:"#fff",transparent:!0,opacity:.9,depthWrite:!1})),this.charge.rotation.x=-fi/2,this.charge.position.y=.06,this.charge.visible=!1,this.root.add(this.charge),this.stars=new At;for(let r=0;r<3;r++){const o=new J(new vo(.17),new qt({color:"#ffe066"}));this.stars.add(o)}this.stars.position.y=2.75,this.stars.visible=!1,this.root.add(this.stars),this.aura=new J(new re(1.3,14,10),new qt({color:"#75aadb",transparent:!0,opacity:0,depthWrite:!1})),this.aura.position.y=1.2,this.root.add(this.aura),t.add(this.root),this.scene=t,this.smoothSpeed=0}update(t,e,n,{controlled:s,goalPhase:a}){const r=this.root,o=this.avatar,c=o.userData;r.position.set(t.x,0,t.z),o.rotation.y=t.face;const l=Math.hypot(t.vx,t.vz)/7.6;if(this.smoothSpeed+=(l-this.smoothSpeed)*Math.min(1,n*14),ys(o,e+t.id*.7,Math.min(1.6,this.smoothSpeed*(t.boost>0?1.1:1))*(t.stun>0?.3:1)),o.position.y=0,c.body.rotation.z=0,t.kickT>0){const h=Math.sin((1-t.kickT/.32)*fi);c.legs[1].rotation.x=-1.6*h,c.legs[0].rotation.x=.5*h,c.body.rotation.x=.2*h,c.arms[0].rotation.x=.9*h,c.arms[1].rotation.x=-.6*h}if(t.charging&&(c.body.rotation.x=-.18,c.body.position.y=-.08,c.legs[1].rotation.x=.7,c.legs[0].rotation.x=-.25),t.tackleT>0?(c.body.rotation.x=-1.2,c.body.position.y=-.28,c.legs[0].rotation.x=-1.5,c.legs[1].rotation.x=-1.35,c.arms[0].rotation.x=.9,c.arms[1].rotation.x=.9):t.recover>0&&(c.body.rotation.x=.4),t.stun>0&&(c.body.rotation.z=Math.sin(e*22)*.22,c.body.rotation.x=.25,c.arms[0].rotation.x=-.4,c.arms[1].rotation.x=-.4),t.celebrate>0){const h=Math.abs(Math.sin(e*9+t.id))*.55;o.position.y=h,c.arms[0].rotation.x=c.arms[1].rotation.x=-2.7+Math.sin(e*14+t.id)*.25,c.arms[0].rotation.z=-.35,c.arms[1].rotation.z=.35,c.legs[0].rotation.x=Math.sin(e*9)*.4,c.legs[1].rotation.x=-Math.sin(e*9)*.4}else a&&t.celebrate<=0&&t.stun<=0?(c.body.rotation.x=.35,c.head.rotation.x=.4):c.head.rotation.x=0;if(this.arrow.visible=!!s,this.ring.visible=!!s,s&&(this.arrow.position.y=3.9+Math.sin(e*6)*.15,this.arrow.rotation.y=e*3),this.label.visible=!s||!0,this.charge.visible=t.charging&&t.charge>.05,this.charge.visible){const h=t.charge;this.charge.scale.setScalar(.55+h*.9),this.charge.material.color.setHSL(.1-.1*h,1,.55+.2*(1-h))}this.aura.material.opacity=t.charging&&t.charge>=.3?.25+.15*Math.sin(e*30):t.boost>0?.28:t.magnet>0?.2:0,this.aura.material.color.set(t.boost>0?"#75aadb":t.magnet>0?"#b57cf0":"#ff8a2e"),this.stars.visible=t.stun>0,this.stars.visible&&this.stars.children.forEach((h,d)=>{const u=e*6+d*(fi*2/3);h.position.set(Math.cos(u)*.5,Math.sin(e*5+d)*.08,Math.sin(u)*.5),h.rotation.y=e*4})}dispose(){Zn(this.avatar),this.scene.remove(this.root),this.root.traverse(t=>{t.material&&t.material.map&&t.material.map.isCanvasTexture&&t.isSprite&&t.material.map.dispose()})}}class l1{constructor(t){const e=document.createElement("canvas");e.width=128,e.height=64;const n=e.getContext("2d");n.fillStyle="#f7f5ee",n.fillRect(0,0,128,64),n.fillStyle="#1c2230";for(const[r,o]of[[16,16],[48,44],[80,14],[112,40],[32,56],[96,58],[64,30],[4,40]])n.beginPath(),n.arc(r,o,8,0,fi*2),n.fill();const s=new Rn(e);s.colorSpace=ke,this.mesh=new J(new re(vi.R*1.08,20,14),new ji({map:s,gradientMap:Tt("#fff").gradientMap}));const a=new J(this.mesh.geometry,new qt({color:856347,side:Ke}));a.scale.setScalar(1.1),this.mesh.add(a),this.group=new At,this.group.add(this.mesh),this.shadow=Gd(.5),this.group.add(this.shadow),t.add(this.group),this.scene=t,this.q=new Wi,this.axis=new B}update(t,e){this.mesh.position.set(t.x,t.y,t.z),this.shadow.position.set(t.x,.04,t.z);const n=Math.max(0,t.y-vi.R);this.shadow.scale.setScalar(.5+Math.min(.5,n*.15)),this.shadow.material.opacity=Math.max(.25,1-n*.35);const s=Math.hypot(t.vx,t.vz);s>.05&&(this.axis.set(t.vz,0,-t.vx).normalize(),this.q.setFromAxisAngle(this.axis,s*e/vi.R),this.mesh.quaternion.premultiply(this.q))}dispose(){this.scene.remove(this.group),this.mesh.geometry.dispose(),this.mesh.material.map.dispose()}}class u1{constructor(t){this.mesh=new J(new bn(.7,.9,32),new qt({color:"#75aadb",transparent:!0,opacity:.9,depthWrite:!1})),this.mesh.rotation.x=-fi/2,this.mesh.position.y=.07,this.mesh.visible=!1,t.add(this.mesh),this.scene=t}update(t,e){this.mesh.visible=!!t,t&&(this.mesh.position.x=t.x,this.mesh.position.z=t.z,this.mesh.scale.setScalar(1+.15*Math.sin(e*14)),this.mesh.material.opacity=Math.min(1,t.t*3))}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}let le=null,zn=null,Ua=null,Ui=null,Ys=!1;try{Ys=localStorage.getItem("potrero-mute")==="1"}catch{}const Ht={get muted(){return Ys},setMuted(i){Ys=!!i;try{localStorage.setItem("potrero-mute",Ys?"1":"0")}catch{}zn&&(zn.gain.value=Ys?0:.8)},unlock(){if(!le){const i=window.AudioContext||window.webkitAudioContext;if(!i)return;le=new i,zn=le.createGain(),zn.gain.value=Ys?0:.8;const t=le.createDynamicsCompressor();zn.connect(t),t.connect(le.destination),Ua=le.createBuffer(1,le.sampleRate*2,le.sampleRate);const e=Ua.getChannelData(0);for(let n=0;n<e.length;n++)e[n]=Math.random()*2-1}le.state==="suspended"&&le.resume()},_tone(i,t,e,n,s,a=0){if(!le)return;const r=le.currentTime+a,o=le.createOscillator(),c=le.createGain();o.type=i,o.frequency.setValueAtTime(t,r),e!==t&&o.frequency.exponentialRampToValueAtTime(Math.max(20,e),r+n),c.gain.setValueAtTime(s,r),c.gain.exponentialRampToValueAtTime(8e-4,r+n),o.connect(c),c.connect(zn),o.start(r),o.stop(r+n+.02)},_noise(i,t,e,n=1,s="lowpass",a=0){if(!le)return;const r=le.currentTime+a,o=le.createBufferSource();o.buffer=Ua;const c=le.createBiquadFilter();c.type=s,c.frequency.value=e,c.Q.value=n;const l=le.createGain();l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(8e-4,r+i),o.connect(c),c.connect(l),l.connect(zn),o.start(r,Math.random()),o.stop(r+i+.02)},kick(i=0){this._tone("sine",190+i*40,55,.12,.5+i*.3),this._noise(.06,.25+i*.2,1800,1,"bandpass")},pass(){this._tone("sine",230,90,.08,.32),this._noise(.04,.12,2400,1,"bandpass")},through(){this._tone("sine",260,80,.1,.4),this._tone("triangle",520,880,.3,.12,.03),this._noise(.12,.1,3200,2,"bandpass")},power(){this._tone("sawtooth",120,60,.25,.3),this._tone("sine",150,40,.3,.7),this._noise(.2,.5,2200,1,"bandpass")},thud(i=8){this._tone("sine",120,50,.1,Math.min(.5,i*.03))},post(){this._tone("triangle",1100,900,.5,.35),this._tone("square",1650,1500,.25,.08)},tackle(i){this._noise(.18,i?.5:.2,i?900:1500,1,"lowpass"),i&&this._tone("sine",140,60,.15,.4)},block(){this._tone("sine",100,45,.2,.6),this._noise(.12,.3,700)},switch(){this._tone("square",880,880,.04,.05)},receive(){this._tone("sine",420,300,.05,.16)},coin(){this._tone("square",988,988,.07,.07),this._tone("square",1319,1319,.16,.07,.07)},pop(){this._tone("sine",520,760,.07,.18)},splash(){this._noise(.25,.22,2600,.8,"highpass"),this._tone("sine",700,380,.12,.08)},dig(){this._noise(.12,.25,600,1,"lowpass"),this._tone("sine",150,90,.08,.2)},pick(){this._tone("triangle",600,900,.1,.2),this._tone("triangle",900,1200,.12,.15,.08)},nope(){this._tone("square",180,140,.14,.09)},chime(){[523,659,784,1047].forEach((i,t)=>this._tone("triangle",i,i,.35,.16,t*.09))},stamp(){this._tone("sine",110,50,.18,.7),this._noise(.1,.4,900,1,"lowpass"),this._tone("triangle",784,1175,.4,.14,.12)},tick(){this._tone("square",740,740,.07,.1)},whistle(i=!1){if(!le)return;const t=le.currentTime,e=i?.9:.35,n=le.createOscillator(),s=le.createGain(),a=le.createOscillator(),r=le.createGain();n.type="square",n.frequency.value=2900,a.frequency.value=28,r.gain.value=90,a.connect(r),r.connect(n.frequency),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.16,t+.02),s.gain.setValueAtTime(.16,t+e-.05),s.gain.exponentialRampToValueAtTime(8e-4,t+e),n.connect(s),s.connect(zn),n.start(t),a.start(t),n.stop(t+e+.02),a.stop(t+e+.02)},bubusela(i=.7){if(!le)return;const t=le.currentTime;for(const e of[233,466,699]){const n=le.createOscillator(),s=le.createGain();n.type="sawtooth",n.frequency.value=e,s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.12,t+.04),s.gain.setValueAtTime(.12,t+i-.1),s.gain.exponentialRampToValueAtTime(8e-4,t+i),n.connect(s),s.connect(zn),n.start(t),n.stop(t+i+.02)}},cheer(i=2.4){if(!le)return;const t=le.currentTime,e=le.createBufferSource();e.buffer=Ua,e.loop=!0;const n=le.createBiquadFilter();n.type="bandpass",n.frequency.value=900,n.Q.value=.6;const s=le.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.5,t+.25),s.gain.exponentialRampToValueAtTime(.2,t+i*.6),s.gain.exponentialRampToValueAtTime(8e-4,t+i),n.frequency.setValueAtTime(700,t),n.frequency.linearRampToValueAtTime(1300,t+.5),n.frequency.linearRampToValueAtTime(800,t+i),e.connect(n),n.connect(s),s.connect(zn),e.start(t),e.stop(t+i+.05),this.bubusela(1)},aww(){this._tone("sawtooth",380,200,.7,.07),this._noise(.6,.12,600)},crowdStart(){if(!le||Ui)return;const i=le.createBufferSource();i.buffer=Ua,i.loop=!0;const t=le.createBiquadFilter();t.type="bandpass",t.frequency.value=520,t.Q.value=.5;const e=le.createGain();e.gain.value=1e-4,i.connect(t),t.connect(e),e.connect(zn),i.start(),Ui={s:i,g:e,f:t}},crowdLevel(i){!le||!Ui||(Ui.g.gain.setTargetAtTime(.02+i*.1,le.currentTime,.4),Ui.f.frequency.setTargetAtTime(480+i*500,le.currentTime,.4))},crowdStop(){if(Ui){try{Ui.s.stop()}catch{}Ui=null}}},{HL:es,HW:h1}=vi,Lh=Math.PI,rc=1/60,qs=42,d1=[["Tranqui",.3],["Normal",.6],["Bravo",.92]],f1=[2,3,5];function p1({onExit:i}){const t=new ga;t.background=new ee("#e9c493");const e=new Je(qs,innerWidth/innerHeight,.5,400),n=K_(t),s=new e1(t),a=new l1(t),r=new u1(t),o=new Map;let c=null,l=[],h="setup",d=0,u=0,f=1,g=0,v=0,m=0,p={x:0,z:0},_=0,b=0,M=qs,P=0,C=0,E=!1,U=[],w="",x="",N=-1;const I={control:"team",power:"bubusela",diff:.6,minutes:3};let F=[0,1];document.getElementById("gl");const G=new Set,Z={x:0,y:0};let H=!1;const nt=matchMedia("(pointer: coarse)").matches,q=()=>innerWidth/innerHeight<.85,ht=A=>{c&&c.setInput(0,A)},vt=A=>{h==="playing"&&ht({[A]:!0})},St=A=>{if(/INPUT|TEXTAREA|SELECT/.test(A.target&&A.target.tagName))return;const R=A.key.toLowerCase();if(R==="escape"){h==="playing"&&(A.preventDefault(),ut());return}if(h==="playing"){if(Ht.unlock(),["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(R)){G.add(R),A.preventDefault();return}if(A.repeat){R===" "&&A.preventDefault();return}R==="j"?vt("pass"):R==="k"?vt("through"):R==="u"||R==="i"?vt("tackle"):R===" "?(A.preventDefault(),vt("power")):R==="l"?G.add("l"):R==="m"&&(Ht.setMuted(!Ht.muted),Y())}},Vt=A=>G.delete(A.key.toLowerCase()),et=()=>{G.clear(),Z.x=Z.y=0,H=!1};addEventListener("keydown",St),addEventListener("keyup",Vt),addEventListener("blur",et);function D(){let A=0,R=0;(G.has("a")||G.has("arrowleft"))&&(A-=1),(G.has("d")||G.has("arrowright"))&&(A+=1),(G.has("w")||G.has("arrowup"))&&(R-=1),(G.has("s")||G.has("arrowdown"))&&(R+=1);const K=Math.hypot(A,R);K>1&&(A/=K,R/=K),(Z.x||Z.y)&&(A=Z.x,R=-Z.y),q()?ht({mx:-R,mz:A,shoot:G.has("l")||H}):ht({mx:A,mz:R,shoot:G.has("l")||H})}function W(){for(const Mt of l)Mt.dispose();l=[];const A=Ot.profile.look.kt,R=o1(A);F=[A,R];const K=pl(2),pt=pl(3,K.map(Mt=>Mt.id)),ot=[];return ot.push({team:0,slot:0,name:Ot.profile.name||"Vos",look:ac(Ot.profile.look,A)}),K.forEach(Mt=>ot.push({team:0,slot:I.control==="team"?0:null,name:Mt.name,look:ac(Mt.look,A)})),pt.forEach(Mt=>ot.push({team:1,slot:null,name:Mt.name,look:ac(Mt.look,R)})),ot}function tt(){Ht.unlock(),Ht.crowdStart();const A=W();c=new q_({duration:I.minutes*60,difficulty:I.diff,players:A.map(R=>({team:R.team,slot:R.slot,name:R.name,power:R.slot===0?I.power:void 0}))}),l=c.players.map((R,K)=>new c1(t,R,A[K].look,Oe[F[R.team]].c1==="#f7f7f4"?Oe[F[R.team]].c2:Oe[F[R.team]].c1)),o.forEach(R=>{t.remove(R)}),o.clear(),d=0,u=0,g=0,m=0,E=!1,C=0,w=x="",N=-1,_=0,M=qs,h="playing",z(),gt("Saque inicial",1.6)}function ut(){return h!=="playing"?void 0:(h="paused",et(),yn(y("div",null,y("header",{class:"dlg-head"},y("h2",{text:"Pausa"})),y("div",{class:"fb-keys"},It()),y("footer",null,y("button",{type:"button",class:"btn ghost",text:"Salir del partido",onclick:()=>{h="over",Ee(),_t()}}),y("button",{type:"button",class:"btn primary",text:"Seguir",onclick:()=>Ee()}))),{onClose:()=>{h==="paused"&&(h="playing")}}))}let wt=!1;function _t(){wt||i()}function It(){return y("dl",{class:"keylist"},[["WASD / flechas","Moverte"],["J","Pase corto (sin pelota: cambiás de jugador o pedís el pase)"],["K","Filtrado de tres dedos: la pelota se dobla y cae adelante del compañero"],["L","Tiro al arco. Mantené apretado para el tiro potente"],["U","Barrida para sacarle la pelota al rival"],["Espacio","Tu poder (se carga jugando)"],["M","Sonido"]].flatMap(([R,K])=>[y("dt",null,y("kbd",{text:R})),y("dd",{text:K})]))}function Qt(){const A=y("div",{class:"fb-setup"}),R=()=>{A.textContent="";const pt=(ot,Mt,yt,Dt,V)=>y("button",{type:"button",class:"fb-card","aria-pressed":String(yt),disabled:V,onclick:Dt},y("strong",{text:ot}),y("span",{text:Mt}));A.append(y("header",{class:"dlg-head"},y("h2",{text:"La Cancha · 3 vs 3"}),y("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>Ee()})),y("p",{class:"lead",text:"Cancha de potrero cerrada con alambrado: sin laterales ni córners. Gana el que meta más goles; si empatan, gol de oro."}),y("span",{class:"lab",text:"¿Cómo jugás?"}),y("div",{class:"fb-cards"},pt("Mi equipo","Manejás a los tres. Cambiás solo al más cercano a la pelota o con J.",I.control==="team",()=>{I.control="team",R()}),pt("Un jugador","Sos solo tu personaje, como en clubes pro. Tus dos compañeros son bots por ahora.",I.control==="pro",()=>{I.control="pro",R()}),pt("Online con amigos","Hasta 6 personas, cada una con su personaje. Necesita un servidor: es el próximo paso.",!1,null,!0)),y("span",{class:"lab",text:"Tu poder"}),y("div",{class:"fb-cards four"},dl.map(ot=>{const Mt=ia[ot];return y("button",{type:"button",class:"fb-card",style:{"--c":Mt.color},"aria-pressed":String(I.power===ot),onclick:()=>{I.power=ot,R()}},y("strong",{text:Mt.name}),y("span",{text:Mt.desc}))})),y("div",{class:"fb-opts"},y("div",null,y("span",{class:"lab",text:"Rivales"}),y("div",{class:"row"},d1.map(([ot,Mt])=>y("button",{type:"button",class:"chip","aria-pressed":String(I.diff===Mt),text:ot,onclick:()=>{I.diff=Mt,R()}})))),y("div",null,y("span",{class:"lab",text:"Duración"}),y("div",{class:"row"},f1.map(ot=>y("button",{type:"button",class:"chip","aria-pressed":String(I.minutes===ot),text:ot+" min",onclick:()=>{I.minutes=ot,R()}}))))),!nt&&y("details",{class:"fb-keys"},y("summary",{text:"Controles"}),It()),y("footer",null,y("button",{type:"button",class:"btn ghost",text:"Volver al mundo",onclick:()=>Ee()}),y("button",{type:"button",class:"btn primary",text:"¡A jugar!",onclick:()=>{K=!0,Ee(),tt()}})))};let K=!1;R(),yn(A,{cls:"wide",onClose:()=>{K||_t()}})}let Wt=null,mt={};function z(){_n();const A=K=>y("i",{class:"fb-dot",style:{background:K}}),R=K=>Oe[F[K]];mt.scoreA=y("b",{text:"0"}),mt.scoreB=y("b",{text:"0"}),mt.time=y("span",{class:"fb-time",text:"0:00"}),mt.banner=y("div",{class:"fb-banner",hidden:!0}),mt.pop=y("div",{class:"fb-pops"}),mt.meterFill=y("i"),mt.meterName=y("span"),mt.meterKey=y("kbd",{text:nt?"PODER":"Espacio"}),mt.meter=y("div",{class:"fb-meter"},y("div",{class:"row"},mt.meterName,mt.meterKey),y("div",{class:"bar"},mt.meterFill)),mt.chargeFill=y("i"),mt.charge=y("div",{class:"fb-charge",hidden:!0},y("div",{class:"bar"},mt.chargeFill)),mt.mute=y("button",{type:"button",class:"btn ghost sm","aria-label":"Sonido",onclick:()=>{Ht.unlock(),Ht.setMuted(!Ht.muted),Y()}}),mt.pause=y("button",{type:"button",class:"btn ghost sm",text:"Pausa",onclick:()=>ut()}),mt.who=y("div",{class:"fb-who"}),Wt=y("div",{class:"fb-hud"},y("div",{class:"fb-score"},y("div",{class:"tm"},A(R(0).c1),y("span",{text:R(0).name})),mt.scoreA,mt.time,mt.scoreB,y("div",{class:"tm r"},y("span",{text:R(1).name}),A(R(1).c1))),y("div",{class:"fb-top"},mt.mute,mt.pause),mt.banner,mt.pop,mt.who,mt.charge,mt.meter,!nt&&y("p",{class:"fb-hint"},y("kbd",{text:"J"})," pase  ",y("kbd",{text:"K"})," filtrado  ",y("kbd",{text:"L"})," tiro (mantené: potente)  ",y("kbd",{text:"U"})," barrida  ",y("kbd",{text:"Espacio"})," poder"),nt&&it()),Jn().append(Wt),Y()}function Y(){mt.mute&&(mt.mute.textContent=Ht.muted?"🔇":"🔊")}function it(){const A=y("i",{class:"knob"}),R=y("div",{class:"joy","aria-hidden":"true"},A);let K=null;const pt=48,ot=Dt=>{const V=R.getBoundingClientRect();let bt=Dt.clientX-(V.left+V.width/2),k=Dt.clientY-(V.top+V.height/2);const O=Math.hypot(bt,k);O>pt&&(bt=bt/O*pt,k=k/O*pt),A.style.transform=`translate(${bt}px, ${k}px)`,Z.x=bt/pt,Z.y=-k/pt},Mt=()=>{K=null,Z.x=Z.y=0,A.style.transform=""};R.addEventListener("pointerdown",Dt=>{K=Dt.pointerId,R.setPointerCapture(Dt.pointerId),ot(Dt)}),R.addEventListener("pointermove",Dt=>{Dt.pointerId===K&&ot(Dt)}),R.addEventListener("pointerup",Mt),R.addEventListener("pointercancel",Mt);const yt=(Dt,V,bt,k)=>{const O=y("button",{type:"button",class:"fb-btn "+Dt},V);O.addEventListener("pointerdown",ct=>{ct.preventDefault(),O.setPointerCapture(ct.pointerId),Ht.unlock(),bt(),O.classList.add("on")});const Q=()=>{k&&k(),O.classList.remove("on")};return O.addEventListener("pointerup",Q),O.addEventListener("pointercancel",Q),O};return y("div",{class:"fb-touch"},R,y("div",{class:"fb-btns"},yt("shoot","TIRO",()=>{H=!0},()=>{H=!1}),yt("pass","PASE",()=>vt("pass")),yt("thru","FILTRADO",()=>vt("through")),yt("tackle","BARRIDA",()=>vt("tackle")),yt("power","PODER",()=>vt("power"))))}let ft=0;function gt(A,R=1.4,K=""){mt.banner&&(mt.banner.textContent=A,mt.banner.className="fb-banner "+K,mt.banner.hidden=!1,mt.banner.style.animation="none",mt.banner.offsetWidth,mt.banner.style.animation="",ft=R)}function Nt(A,R,K,pt,ot="#fff"){if(!mt.pop)return;const Mt=y("span",{class:"fb-pop",text:A,style:{color:ot}});mt.pop.append(Mt),U.push({n:Mt,x:R,y:K,z:pt,t:1.2})}const Ct=new B;function L(A){for(let R=U.length-1;R>=0;R--){const K=U[R];if(K.t-=A,K.y+=A*1.2,K.t<=0){K.n.remove(),U.splice(R,1);continue}Ct.set(K.x,K.y,K.z).project(e),K.n.style.transform=`translate(-50%,-50%) translate(${(Ct.x*.5+.5)*innerWidth}px, ${(-Ct.y*.5+.5)*innerHeight}px)`,K.n.style.opacity=Math.min(1,K.t*2.2)}}const S=A=>c.players[A]?c.players[A].name:"";function X(A){const R=c.ball;switch(A.type){case"kick":A.kind==="pass"?Ht.pass():A.kind==="through"?(Ht.through(),u=.45,f=.5,Nt("¡Tres dedos!",R.x,2.2,R.z,"#9fd0ff")):A.kind==="power"?(Ht.kick(1),Ht.power(),g=Math.max(g,.5),s.burst(R.x,.6,R.z,"#ff9a3c",16,6,.6,.5,-6),A.power>.6&&Nt("¡Cañonazo!",R.x,2.4,R.z,"#ffb870")):(Ht.kick(.3),s.dust(R.x,R.z,0,0,3));break;case"receive":Ht.receive();break;case"switch":A.slot===0&&Ht.switch();break;case"call":Nt("¡Pasala!",c.players[A.id].x,3.8,c.players[A.id].z,"#f6b40e");break;case"tackle":Ht.tackle(A.hit),s.dust(A.x,A.z,0,0,A.hit?10:4),A.hit&&(g=Math.max(g,.2)),A.blocked&&Nt("¡No pasa!",A.x,2.6,A.z,"#9fb0cc");break;case"block":Ht.block(),s.burst(A.x,1.2,A.z,"#fff",10,5,.5,.4),g=Math.max(g,A.v>30?.6:.25);break;case"post":Ht.post(),s.burst(A.x,1.4,A.z,"#fff",12,4,.4,.5),g=Math.max(g,.3),Nt("¡AL PALO!",A.x,3,A.z,"#ffe066");break;case"bar":Ht.post(),s.burst(A.x,2.5,A.z,"#fff",12,4,.4,.5),g=Math.max(g,.3),Nt("¡AL TRAVESAÑO!",A.x,3.4,A.z,"#ffe066");break;case"wall":Ht.thud(A.v);break;case"bounce":Ht.thud(A.v*.6),s.dust(A.x,A.z,0,0,2);break;case"power":{Ht.power();const K=ia[A.power];A.power==="bubusela"?(Ht.bubusela(.8),s.ring(A.x,A.z,K.color,7.5,.7),s.ring(A.x,A.z,"#fff",5,.5),s.burst(A.x,1.3,A.z,K.color,24,7,.7,.7,-2),g=Math.max(g,.5),Nt("¡BUBUSELAZO!",A.x,3.6,A.z,K.color)):A.power==="pique"?(s.ring(A.x,A.z,K.color,2.6,.5),s.burst(A.x,.4,A.z,K.color,16,5,.6,.6,-2),Nt("¡Pique!",A.x,3.6,A.z,K.color)):A.power==="iman"?(s.ring(A.x,A.z,K.color,9,.8),Nt("¡Pelota pegada!",A.x,3.6,A.z,K.color)):A.power==="alambrado"&&(s.burst(A.x,.4,A.z,"#cdd7e6",20,4,.5,.6,-3),Nt("¡Alambrado!",A.x,3.6,A.z,"#cdd7e6"),g=Math.max(g,.2));break}case"kickoff":m=0,gt(A.team===0?"Saca tu equipo":"Saca el rival",1.6),Ht.whistle(!1);break;case"whistle":gt("¡Dale!",.8,"go"),Ht.whistle(!1);break;case"goal":{const K=A.team===0;Ht.whistle(!0),Ht.cheer(K?3:1.6),K||Ht.aww(),g=1,u=1.1,f=.33,m=3.4,p={x:A.x,z:A.z},s.confetti(A.x>0?es-2:-es+2,A.z,K?200:70),s.ring(A.x,A.z,"#fff",6,.9,.6),n.pulseNet(A.x>0?1:-1),n.setExcite(1),gt(K?"¡GOOOL!":"Gol del rival",3.2,K?"goal":"foe"),A.scorer!=null&&Nt(S(A.scorer),c.players[A.scorer].x,4.6,c.players[A.scorer].z,"#ffd45e"),w="";break}case"overtime":gt("¡Tiempo extra! Gol de oro",2.2,"goal"),Ht.whistle(!1);break;case"end":C=1.4;break}}function rt(){E=!0,h="over",Ht.whistle(!0);const A=c.winner,R=c.score[0],K=c.score[1],ot=(A===0?60:A===-1?35:25)+Math.min(30,R*6);let Mt=null;try{Mt=Ot.addXp(ot)}catch(bt){console.warn(bt)}const yt=A===0?"¡Ganaste!":A===-1?"Empate":"Perdiste",Dt=c.stats,V=(bt,k,O)=>y("tr",null,y("td",{text:String(k)}),y("th",{text:bt}),y("td",{text:String(O)}));yn(y("div",{class:"fb-result"},y("header",{class:"dlg-head"},y("h2",{text:yt})),y("p",{class:"fb-final",text:`${R}  –  ${K}`}),y("table",null,V("Tiros",Dt[0].shots,Dt[1].shots),V("Pases",Dt[0].passes,Dt[1].passes),V("Barridas ganadas",Dt[0].tackles,Dt[1].tackles),V("Poderes",Dt[0].powers,Dt[1].powers)),y("p",{class:"lead",text:`+${ot} XP${Mt&&Mt.chests?` · ¡Subiste de nivel! ${Mt.chests===1?"Ganaste un cofre.":`Ganaste ${Mt.chests} cofres.`}`:""}`}),y("footer",null,y("button",{type:"button",class:"btn ghost",text:"Volver al mundo",onclick:()=>{Ee()}}),y("button",{type:"button",class:"btn primary",text:"Revancha",onclick:()=>{dt=!0,Ee(),tt()}}))),{onClose:()=>{dt||_t(),dt=!1}})}let dt=!1;function lt(A,R){const K=innerWidth/innerHeight;e.aspect=K;const pt=Math.tan(Lh/180*qs/2);let ot=Math.min(52,Math.max(27,17/(pt*K))),Mt=0,yt=0,Dt=qs;if(h==="setup"||!c){P+=A*.12,e.position.set(Math.sin(P)*30,17,Math.cos(P)*26+2),e.lookAt(0,0,0),e.fov=qs,e.updateProjectionMatrix();return}const V=c.ball,bt=q();bt&&(ot=Math.min(60,Math.max(30,10.5/(pt*K))));const k=pt*K*ot*.9,O=bt?Math.max(0,es+2-15):Math.max(0,es+2-k),Q=bt?Math.max(0,h1+1-k):0;Mt=jr.clamp(V.x*.85+V.vx*.2,-O,O),yt=bt?jr.clamp(V.z*.6,-Q,Q):V.z*.18,m>0&&(m-=A,Mt=jr.clamp(p.x,-es-1,es+1),yt=p.z*.3,Dt=36,ot*=.85);const ct=1-Math.exp(-(m>0?3:4.5)*A);_+=(Mt-_)*ct,b+=(yt-b)*ct,M+=(Dt-M)*(1-Math.exp(-3*A)),e.fov=M,e.updateProjectionMatrix();const xt=g>0?Math.sin(R*61+v)*g*.35:0,Et=g>0?Math.cos(R*53)*g*.25:0;bt?(e.position.set(_-ot*.62+xt,ot*.8+Et,b),e.lookAt(_+1,0,b)):(e.position.set(_+xt,ot*.8+Et,b+ot*.62),e.lookAt(_,0,b-1))}const zt=(()=>{const A=document.createElement("canvas");A.width=A.height=64;const R=A.getContext("2d");R.strokeStyle="rgba(225,235,250,.95)",R.lineWidth=3;for(let pt=-64;pt<128;pt+=16)R.beginPath(),R.moveTo(pt,0),R.lineTo(pt+64,64),R.stroke(),R.beginPath(),R.moveTo(pt+64,0),R.lineTo(pt,64),R.stroke();const K=new Rn(A);return K.wrapS=K.wrapT=Hi,K.repeat.set(4,1.4),K})();function Pt(){for(const A of c.barriers){let R=o.get(A);if(!R){const pt=Math.hypot(A.x2-A.x1,A.z2-A.z1);R=new At;const ot=new J(new xn(pt,2.6),new qt({map:zt,transparent:!0,side:_e,depthWrite:!1}));ot.position.y=1.3;const Mt=new J(new Kt(pt,.12,.12),new qt({color:"#cdd7e6"}));Mt.position.y=2.6;for(const yt of[-1,1]){const Dt=new J(new te(.08,.08,2.7,6),new qt({color:"#8d98aa"}));Dt.position.set(yt*pt/2,1.35,0),R.add(Dt)}R.add(ot,Mt),R.position.set((A.x1+A.x2)/2,0,(A.z1+A.z2)/2),R.rotation.y=Math.atan2(A.x2-A.x1,A.z2-A.z1)-Lh/2,t.add(R),o.set(A,R)}const K=A.life-A.t;R.scale.y=Math.min(1,K/.2),R.visible=A.t>.4||Math.floor(A.t*14)%2===0}for(const[A,R]of o)c.barriers.includes(A)||(t.remove(R),o.delete(A))}function kt(A){if(!c)return;const R=c.score.join("-");R!==w&&(mt.scoreA.textContent=c.score[0],mt.scoreB.textContent=c.score[1],w=R);const K=Math.max(0,Math.ceil(c.timeLeft)),pt=(c.golden?"g":"")+K;pt!==x&&(mt.time.textContent=c.golden?"GOL DE ORO":`${Math.floor(K/60)}:${String(K%60).padStart(2,"0")}`,mt.time.classList.toggle("low",!c.golden&&K<=10),x=pt);const ot=c.meters.s0;if(ot){const Dt=ia[ot.power];mt.meterName.textContent=Dt.name,mt.meterFill.style.width=Math.min(100,ot.v)+"%",mt.meterFill.style.background=Dt.color,mt.meter.classList.toggle("ready",ot.v>=Dt.cost&&ot.cd<=0),mt.meter.style.setProperty("--cost",Dt.cost+"%")}const Mt=c.slots[0],yt=c.players[Mt.active];yt&&(yt.charging?(mt.charge.hidden=!1,mt.chargeFill.style.width=yt.charge*100+"%",mt.chargeFill.className=yt.charge>=.3?"hot":""):mt.charge.hidden=!0,Mt.active!==N&&(N=Mt.active,mt.who.textContent=yt.name,mt.who.classList.remove("flash"),mt.who.offsetWidth,mt.who.classList.add("flash"))),ft>0&&(ft-=A,ft<=0&&(mt.banner.hidden=!0)),L(A)}function oe(A,R){if(n.update(A,R),!c){s.update(A,null),s.setScale(innerHeight,e.fov),lt(A,R),a.update({x:0,y:vi.R,z:0,vx:0,vy:0,vz:0},A);return}if(h==="playing"){if(D(),c.phase!=="play"){const V=c.slots[0].input;V.pass=V.through=V.tackle=V.power=!1}let yt=1;u>0&&(u-=A,yt=f+(1-f)*Math.max(0,1-u*2.2)),d+=A*yt;let Dt=0;for(;d>=rc&&Dt<6;){c.step(rc);for(const V of c.drain())X(V);d-=rc,Dt++}Dt===6&&(d=0),c.phase==="end"&&!E&&(C-=A,C<=0&&rt())}g=Math.max(0,g-A*1.6);const K=n.fans.excite;n.setExcite(Math.max(c.phase==="goal"?1:.18+.25*(Math.abs(c.ball.x)/es),K-A*.35)),Ht.crowdLevel(n.fans.excite);const pt=c.ball;a.update(pt,A);const ot=c.slots[0];for(let yt=0;yt<l.length;yt++){const Dt=c.players[yt],V=ot&&(ot.mode==="team"?ot.active===Dt.id:Dt.slot===0)&&c.phase!=="end";l[yt].update(Dt,R,A,{controlled:V,goalPhase:c.phase==="goal"})}r.update(c.marker&&c.marker.team===0?c.marker:null,R);const Mt=Math.hypot(pt.vx,pt.vz);pt.guided&&pt.guided.kind==="through"?s.trailStyle("#8fd0ff",1):pt.speedKick>30&&Mt>22?s.trailStyle("#ff9a3c",1):Mt>19?s.trailStyle("#ffffff",.55):s.trailStyle("#fff",0);for(const yt of c.players)(Math.hypot(yt.vx,yt.vz)>6.5||yt.boost>0)&&Math.random()<A*9&&s.dust(yt.x-yt.vx*.05,yt.z-yt.vz*.05,-yt.vx*.1,-yt.vz*.1,1),yt.boost>0&&Math.random()<A*30&&s.emit(yt.x,.8+Math.random(),yt.z,0,.5,0,"#75aadb",.8,.4,0,.8),yt.charging&&yt.charge>=.3&&Math.random()<A*40&&s.emit(yt.x+(Math.random()-.5),.2,yt.z+(Math.random()-.5),0,3,0,"#ffb870",.5,.4,0,.9);Pt(),s.setScale(innerHeight,e.fov),s.update(A,pt),lt(A,R),kt(A)}return _n(),Qt(),{scene:t,camera:e,update:oe,dispose(){wt=!0,removeEventListener("keydown",St),removeEventListener("keyup",Vt),removeEventListener("blur",et),Ee(),Ht.crowdStop();for(const A of l)A.dispose();a.dispose(),r.dispose(),s.dispose(),n.dispose(),o.forEach(A=>t.remove(A)),_n()}}}const oc=["Do","Do#","Re","Re#","Mi","Fa","Fa#","Sol","Sol#","La","La#","Si"],Yn={minor:{name:"Menor natural",steps:[0,2,3,5,7,8,10],mood:"Oscura y seria. Es la base del trap y del rap."},major:{name:"Mayor",steps:[0,2,4,5,7,9,11],mood:"Alegre y brillante. Pop, cumbia, fiesta."},pentMin:{name:"Pentatónica menor",steps:[0,3,5,7,10],mood:"Cinco notas: casi imposible desafinar. Rock y blues."},pentMaj:{name:"Pentatónica mayor",steps:[0,2,4,7,9],mood:"Cinco notas, sonido abierto y folclórico."},blues:{name:"Blues",steps:[0,3,5,6,7,10],mood:'Menor pentatónica con una nota "sucia" que da tensión.'},dorian:{name:"Dórica",steps:[0,2,3,5,7,9,10],mood:"Menor pero con un toque luminoso. Funk y jazz."},phrygian:{name:"Frigia",steps:[0,1,3,5,7,8,10],mood:"Española y dramática. Flamenco y metal."}},m1=Object.keys(Yn),Ue=16,g1=36,v1=60,Kr=i=>(Yn[i]||Yn.minor).steps.length*2+1;function Hd(i,t){const e=(Yn[i]||Yn.minor).steps,n=e.length;return e[(t%n+n)%n]+12*Math.floor(t/n)}const Wd=(i,t,e)=>e+i.root+Hd(i.scale,t),yo=i=>440*Math.pow(2,(i-69)/12),rn=i=>i.split("").map(t=>t==="."?0:+t),Xd=[{id:"trap",name:"Trap",bpm:140,swing:0,tip:"Caja solo en el 3 y hi-hats con ráfagas.",drums:{kick:rn("1......1..1....."),snare:rn("........1......."),hat:rn("1.1.1.121.1.1.22"),perc:rn("........1.......")}},{id:"boombap",name:"Boom bap",bpm:90,swing:.25,tip:"Clásico del hip hop: bombo y caja bien marcados, con swing.",drums:{kick:rn("1.....1...1....."),snare:rn("....1.......1..."),hat:rn("1.1.1.1.1.1.1.3."),perc:rn("................")}},{id:"dembow",name:"Dembow",bpm:95,swing:0,tip:'El ritmo del reggaetón: bombo en los cuatro tiempos y la caja "3 + 3 + 2".',drums:{kick:rn("1...1...1...1..."),snare:rn("...1..1....1..1."),hat:rn("1.1.1.1.1.1.1.1."),perc:rn("................")}},{id:"cumbia",name:"Cumbia",bpm:100,swing:.1,tip:"Bombo caminando, aro en los tiempos 2 y 4 y hi-hat sin parar.",drums:{kick:rn("1.....1.1.....1."),snare:rn("....1.......1..."),hat:rn("1111111111111111"),perc:rn("..1...1...1...1.")}}],qd=[{id:"808",name:"808 de trap",notes:[[0,0,3],[6,0,2],[10,2,4]],tip:"Notas largas que arrancan con el bombo."},{id:"raices",name:"Raíces",notes:[[0,0,2],[4,0,2],[8,3,2],[12,4,2]],tip:"Una nota por tiempo, siguiendo los acordes."},{id:"caminante",name:"Caminante",notes:[[0,0,2],[2,2,2],[4,4,2],[6,3,2],[8,2,2],[10,0,2],[12,4,2],[14,3,2]],tip:"Sube y baja por la escala."}],Ha=[{id:"arpegio",name:"Arpegio",notes:[[0,5,1],[2,7,1],[4,9,1],[6,7,1],[8,5,1],[10,7,1],[12,9,1],[14,10,1]],tip:"Notas del acorde una por una."},{id:"pregunta",name:"Pregunta y respuesta",notes:[[0,7,2],[3,8,1],[4,9,4],[10,8,1],[12,7,1],[14,5,2]],tip:"Primero sube (pregunta), después baja y cierra en la raíz (respuesta)."},{id:"escalera",name:"Escalera",notes:[[0,4,1],[2,5,1],[4,6,1],[6,7,1],[8,8,1],[10,7,1],[12,6,1],[14,5,1]],tip:"Subís y bajás por la escala."}],x1={ritmo:"El bombo (kick) marca el pulso. La caja (snare) va en los tiempos 2 y 4, o solo en el 3 si es trap. Los hi-hats rellenan: tocá un cuadradito varias veces y pasa de cerrado a ráfaga a abierto.",bajo:"El bajo sigue al bombo: casi siempre arranca donde pega el kick. Si tocás de nuevo una nota, se alarga: las notas largas son el sonido 808.",melodia:'Todas las filas son notas de la escala que elegiste, así que cualquiera que pongas suena bien. Las filas marcadas son la raíz: terminá la frase ahí y suena "cerrada".',mezcla:"Si el bajo y el bombo se pisan, subí el sidechain: el bajo se agacha cada vez que pega el bombo. El filtro DJ: a la izquierda apaga los agudos, a la derecha los graves.",armar:"Armá los bloques A, B, C y D (por ejemplo A = intro, B = estribillo) y ordenalos acá para formar la canción completa. Después guardala o exportala.",set:"Cargá dos temas, uno en cada bandeja, y pasá de uno al otro con el crossfader. Los dos se sincronizan al mismo BPM."},ua=(i,t)=>60/(t||i.bpm)/4,Dh=new WeakMap;function _1(i){let t=Dh.get(i);if(!t){t=i.createBuffer(1,i.sampleRate*2,i.sampleRate);const e=t.getChannelData(0);let n=12345;for(let s=0;s<e.length;s++)n=n*1664525+1013904223>>>0,e[s]=n/2147483648-1;Dh.set(i,t)}return t}const Ih=new WeakMap;function y1(i){let t=Ih.get(i);if(!t){t=new Float32Array(1024);for(let e=0;e<1024;e++){const n=e/511.5-1;t[e]=Math.tanh(n*2.2)}Ih.set(i,t)}return t}const Uh=new Map;function M1(i,t){const e=i.sampleRate+":"+t;let n=Uh.get(e);if(!n){const s=i.sampleRate,a=yo(t),r=Math.floor(s*2.2),o=Math.max(2,Math.round(s/a)),c=new Float32Array(r);let l=987+t,h=0;for(let f=0;f<o;f++){l=l*1664525+1013904223>>>0;const g=l/2147483648-1;h=h*.45+g*.55,c[f]=h}const d=.9965-Math.min(.0025,a/4e5);for(let f=o;f<r;f++)c[f]=d*.5*(c[f-o]+c[f-o+1]);const u=i.createBuffer(1,r,s);u.copyToChannel(c,0),n={buf:u,rate:s/o/a},Uh.set(e,n)}return n}function jd(i){const t=i.createGain(),e=i.createDynamicsCompressor();e.threshold.value=-16,e.knee.value=14,e.ratio.value=4,e.attack.value=.004,e.release.value=.2;const n=i.createGain();return n.gain.value=.9,t.connect(e),e.connect(n),n.connect(i.destination),{input:t,out:n}}class $d{constructor(t,e){this.ctx=t,this.cue=null,this.sampleBuffer=null,this.mix={sidechain:.4};const n=()=>t.createGain();this.bus=n(),this.duck=n(),this.hp=t.createBiquadFilter(),this.hp.type="highpass",this.hp.frequency.value=10,this.lp=t.createBiquadFilter(),this.lp.type="lowpass",this.lp.frequency.value=2e4,this.out=n(),this.deck=n(),this.bus.connect(this.hp),this.duck.connect(this.hp),this.hp.connect(this.lp),this.lp.connect(this.out),this.out.connect(this.deck),this.deck.connect(e),this.g={};for(const s of["kick","snare","hat","perc","sample"])this.g[s]=n(),this.g[s].connect(this.bus);for(const s of["bass","lead"])this.g[s]=n(),this.g[s].connect(this.duck)}apply(t){const e=this.ctx.currentTime;this.mix=t;for(const r in this.g)this.g[r].gain.setTargetAtTime(t[r]==null?.8:t[r],e,.02);this.out.gain.setTargetAtTime(t.master==null?.85:t.master,e,.02);const n=t.filter==null?.5:t.filter;let s=2e4,a=10;n<.48?s=Math.max(140,2e4*Math.pow(n/.48,3)):n>.52&&(a=10+Math.pow((n-.52)/.48,2)*5e3),this.lp.frequency.setTargetAtTime(s,e,.03),this.hp.frequency.setTargetAtTime(a,e,.03)}}function b1(i,t,e=1){const n=i.ctx,s=n.createOscillator(),a=n.createGain();s.type="sine",s.frequency.setValueAtTime(170,t),s.frequency.exponentialRampToValueAtTime(42,t+.13),a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(.001,t+.5),s.connect(a),a.connect(i.g.kick),s.start(t),s.stop(t+.55);const r=n.createOscillator(),o=n.createGain();r.type="triangle",r.frequency.setValueAtTime(900,t),r.frequency.exponentialRampToValueAtTime(120,t+.02),o.gain.setValueAtTime(.25*e,t),o.gain.exponentialRampToValueAtTime(.001,t+.03),r.connect(o),o.connect(i.g.kick),r.start(t),r.stop(t+.05)}function Vl(i,t,e,{hp:n=0,bp:s=0,q:a=1,vel:r=1,dur:o=.1}){const c=i.ctx,l=c.createBufferSource(),h=c.createGain();l.buffer=_1(c);let d=l;if(n){const u=c.createBiquadFilter();u.type="highpass",u.frequency.value=n,d.connect(u),d=u}if(s){const u=c.createBiquadFilter();u.type="bandpass",u.frequency.value=s,u.Q.value=a,d.connect(u),d=u}h.gain.setValueAtTime(r,e),h.gain.exponentialRampToValueAtTime(.001,e+o),d.connect(h),h.connect(t),l.start(e,e*7.31%1.5),l.stop(e+o+.02)}function S1(i,t,e=1){Vl(i,i.g.snare,t,{hp:1400,vel:.8*e,dur:.2});const n=i.ctx,s=n.createOscillator(),a=n.createGain();s.type="triangle",s.frequency.setValueAtTime(220,t),s.frequency.exponentialRampToValueAtTime(130,t+.1),a.gain.setValueAtTime(.55*e,t),a.gain.exponentialRampToValueAtTime(.001,t+.13),s.connect(a),a.connect(i.g.snare),s.start(t),s.stop(t+.16)}function Na(i,t,e,n=.6){Vl(i,i.g.hat,t,{hp:7500,vel:n,dur:e?.3:.05})}function w1(i,t,e=1){for(let n=0;n<3;n++)Vl(i,i.g.perc,t+n*.011,{bp:1500,q:.8,vel:.7*e,dur:n===2?.16:.03})}function E1(i,t,e,n){const s=i.ctx,a=yo(e),r=s.createOscillator(),o=s.createOscillator(),c=s.createGain(),l=s.createWaveShaper(),h=s.createGain();r.type="sine",o.type="triangle",r.frequency.setValueAtTime(a*1.6,t),r.frequency.exponentialRampToValueAtTime(a,t+.05),o.frequency.value=a,h.gain.value=.22,l.curve=y1(s),l.oversample="2x";const d=t+Math.max(.12,n);c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(.9,t+.006),c.gain.setValueAtTime(.9,Math.max(t+.01,d-.04)),c.gain.exponentialRampToValueAtTime(8e-4,d+.1),r.connect(c),o.connect(h),h.connect(c),c.connect(l),l.connect(i.g.bass),r.start(t),o.start(t),r.stop(d+.12),o.stop(d+.12)}function Yd(i,t,e,n,s=.8){const a=i.ctx,r=yo(e),o=a.createGain();o.connect(i.g.lead);const c=Math.min(2.4,Math.max(.6,2.8-r/500));[[1,1],[2,.5],[3,.28],[4,.14],[5,.07],[6,.04]].forEach(([h,d],u)=>{for(const f of u===0?[-3,3]:[0]){const g=a.createOscillator(),v=a.createGain();g.type="sine",g.frequency.value=r*h,g.detune.value=f,v.gain.setValueAtTime(1e-4,t),v.gain.linearRampToValueAtTime(d*s*.2,t+.004),v.gain.exponentialRampToValueAtTime(8e-4,t+c/Math.sqrt(h)),g.connect(v),v.connect(o),g.start(t),g.stop(t+n+.3)}}),o.gain.setValueAtTime(1,t+n),o.gain.exponentialRampToValueAtTime(1e-4,t+n+.18)}function T1(i,t,e,n,s=.8){const a=i.ctx,r=M1(a,e),o=a.createBufferSource(),c=a.createGain();o.buffer=r.buf,o.playbackRate.value=r.rate,c.gain.setValueAtTime(s*.9,t);const l=Math.max(.25,n);c.gain.setValueAtTime(s*.9,t+l),c.gain.exponentialRampToValueAtTime(8e-4,t+l+.35),o.connect(c),c.connect(i.g.lead),o.start(t),o.stop(t+l+.4)}function A1(i,t,e,n,s=.8){const a=i.ctx,r=yo(e),o=a.createOscillator(),c=a.createOscillator(),l=a.createBiquadFilter(),h=a.createGain();o.type="sawtooth",c.type="square",o.frequency.value=r,c.frequency.value=r*1.005,l.type="lowpass",l.Q.value=4,l.frequency.setValueAtTime(3800,t),l.frequency.exponentialRampToValueAtTime(700,t+Math.max(.15,n));const d=t+Math.max(.1,n);h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(.28*s,t+.01),h.gain.setValueAtTime(.28*s,d),h.gain.exponentialRampToValueAtTime(8e-4,d+.12),o.connect(l),c.connect(l),l.connect(h),h.connect(i.g.lead),o.start(t),c.start(t),o.stop(d+.15),c.stop(d+.15)}const C1={piano:Yd,guitar:T1,synth:A1};function Jd(i,t,e,n,s){(C1[t.inst]||Yd)(i,n,Wd(t,e,v1),s)}function Kd(i,t,e,n,s){E1(i,n,Wd(t,e,g1),s)}function Gl(i,t,e,n,s,a){const r=e.drums;if(r.kick[n]){b1(i,s);const h=1-.9*(i.mix.sidechain||0);if(h<.99){const d=i.duck.gain;d.setValueAtTime(h,s),d.linearRampToValueAtTime(1,s+.17)}i.cue&&i.cue("kick",s)}r.snare[n]&&(S1(i,s),i.cue&&i.cue("snare",s));const o=r.hat[n];o===1?Na(i,s,!1,.6):o===2?(Na(i,s,!1,.4),Na(i,s+a/3,!1,.55),Na(i,s+2*a/3,!1,.7)):o===3&&Na(i,s,!0,.55),r.perc[n]&&w1(i,s);const c=e.bass[n];c&&Kd(i,t,c.d,s,c.l*a*.97);const l=e.lead[n];if(l&&(Jd(i,t,l.d,s,l.l*a*.97),i.cue&&i.cue("note",s)),e.sample[n]&&i.sampleBuffer){const h=i.ctx,d=h.createBufferSource();d.buffer=i.sampleBuffer,d.connect(i.g.sample),d.start(s)}}class Zd{constructor(){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=jd(this.ctx),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=128,this.analyser.smoothingTimeConstant=.7,this.master.out.connect(this.analyser),this.cues=[],this.players=[],this.bpm=100,this.timer=setInterval(()=>this.tick(),25),this.previewRack=this.rack(),this.sampleBuffer=null}setSample(t){this.sampleBuffer=t,this.previewRack.sampleBuffer=t;for(const e of this.players)e.rack.sampleBuffer=t}rack(){const t=new $d(this.ctx,this.master.input);return t.cue=(e,n)=>{this.cues.push({type:e,time:n}),this.cues.length>300&&this.cues.splice(0,100)},t}resume(){this.ctx.state!=="running"&&this.ctx.resume()}tick(){for(const t of this.players)t.tick()}preview(t,e,n){this.resume();const s=this.previewRack;s.apply(t.mix);const a=this.ctx.currentTime+.02;e==="bass"?Kd(s,t,n,a,.45):Jd(s,t,n,a,.45)}previewDrum(t,e,n=1){this.resume();const s=this.previewRack;s.apply(t.mix);const a={drums:{kick:[0],snare:[0],hat:[0],perc:[0]},bass:[null],lead:[null],sample:[0]};e==="sample"?a.sample[0]=1:a.drums[e][0]=n,Gl(s,t,a,0,this.ctx.currentTime+.02,ua(t))}popCues(t){const e=[];for(;this.cues.length&&this.cues[0].time<=t;)e.push(this.cues.shift());return e}close(){clearInterval(this.timer),this.players.length=0;try{this.ctx.close()}catch{}}}class Zr{constructor(t,{bpm:e}={}){this.live=t,this.rack=t.rack(),this.rack.sampleBuffer=t.sampleBuffer,this.bpmFn=e||null,this.song=null,this.mode="song",this.pat=0,this.playing=!1,this.arrPos=0,this.step=0,this.nextTime=0,this.events=[],t.players.push(this)}load(t){this.song=t,this.rack.apply(t.mix)}start(t){this.live.resume(),this.playing=!0,this.arrPos=0,this.step=0,this.nextTime=t??this.live.ctx.currentTime+.07,this.events=[]}stop(){this.playing=!1}nextBarTime(){return!this.playing||!this.song?this.live.ctx.currentTime+.07:this.nextTime+(Ue-this.step)%Ue*ua(this.song,this.bpmFn&&this.bpmFn())}tick(){if(!this.playing||!this.song)return;const t=this.live.ctx.currentTime+.16;let e=0;for(;this.nextTime<t&&e++<8;)this.scheduleOne()}scheduleOne(){const t=this.song,e=ua(t,this.bpmFn&&this.bpmFn()),n=this.mode==="pattern"?this.pat:t.arrangement[this.arrPos%t.arrangement.length],s=t.patterns[n],a=this.step%2===1?t.swing*e*.5:0;Gl(this.rack,t,s,this.step,this.nextTime+a,e),this.events.push({time:this.nextTime,step:this.step,arrPos:this.arrPos,pat:n}),this.events.length>48&&this.events.splice(0,16),this.nextTime+=e,this.step++,this.step>=Ue&&(this.step=0,this.mode==="song"&&(this.arrPos=(this.arrPos+1)%t.arrangement.length))}position(){const t=this.live.ctx.currentTime;let e=null;for(const n of this.events)if(n.time<=t)e=n;else break;return e}}async function R1(i,t){const n=ua(i),s=i.arrangement.length*Ue*n+2.5,a=new OfflineAudioContext(2,Math.ceil(s*44100),44100),r=jd(a),o=new $d(a,r.input);o.sampleBuffer=t||null,o.apply(i.mix);let c=.05;for(const h of i.arrangement)for(let d=0;d<Ue;d++)Gl(o,i,i.patterns[h],d,c+(d%2?i.swing*n*.5:0),n),c+=n;const l=await a.startRendering();return P1(l)}function P1(i){const t=i.numberOfChannels,e=i.length,n=i.sampleRate,s=[];let a=1e-4;for(let h=0;h<t;h++){const d=i.getChannelData(h);s.push(d);for(let u=0;u<e;u++)a=Math.max(a,Math.abs(d[u]))}const r=Math.min(1,.95/a),o=new DataView(new ArrayBuffer(44+e*t*2)),c=(h,d)=>{for(let u=0;u<d.length;u++)o.setUint8(h+u,d.charCodeAt(u))};c(0,"RIFF"),o.setUint32(4,36+e*t*2,!0),c(8,"WAVE"),c(12,"fmt "),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,t,!0),o.setUint32(24,n,!0),o.setUint32(28,n*t*2,!0),o.setUint16(32,t*2,!0),o.setUint16(34,16,!0),c(36,"data"),o.setUint32(40,e*t*2,!0);let l=44;for(let h=0;h<e;h++)for(let d=0;d<t;d++){const u=Math.max(-1,Math.min(1,s[d][h]*r));o.setInt16(l,u<0?u*32768:u*32767,!0),l+=2}return new Blob([o],{type:"audio/wav"})}const Ni=Math.PI,Nh=9,zh=6,Or=1.5,js=26,En=(i,t=1,e=.55)=>new ee().setHSL((i%1+1)%1,t,e);function L1(i,t){const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.clearRect(0,0,512,128),n.font='86px Anton, Impact, "Arial Narrow", sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor=t,n.shadowBlur=26,n.fillStyle=t,n.fillText(i,256,68),n.shadowBlur=8,n.fillStyle="#fff",n.fillText(i,256,68);const s=new Rn(e);return s.colorSpace=ke,s}function D1(i,{djLook:t,dancers:e=6}){const n=new At;i.add(n),i.background=new ee("#07040f"),i.fog=new qi("#07040f",14,34);const s=new Ed("#6b5a9a",1.15),a=new ih("#ff4fa0",28,18,1.6);a.position.set(-4,4,3);const r=new ih("#3fd0ff",28,18,1.6);r.position.set(4,4,3);const o=new yi("#ffffff",1.1);o.position.set(0,4,8),n.add(s,a,r,o);const c=[],l=new Kt(Or*.94,.12,Or*.94);for(let D=0;D<Nh;D++)for(let W=0;W<zh;W++){const tt=new qt({color:"#1a1030"}),ut=new J(l,tt);ut.position.set((D-(Nh-1)/2)*Or,-.06,1.4-W*Or+1.5),n.add(ut),c.push({m:tt,i:D,j:W})}const h=new J(new Kt(24,11,.4),new di({color:"#120a22"}));h.position.set(0,5.5,-8.6),n.add(h);const d=[],u=new Kt(.34,1,.2);u.translate(0,.5,0);for(let D=0;D<js;D++){const W=new qt({color:En(D/js)}),tt=new J(u,W);tt.position.set((D-(js-1)/2)*.62,.05,-8.3),tt.scale.y=.2,n.add(tt),d.push({b:tt,m:W})}const f=new ir({map:L1("LA CABINA","#ff4fa0"),transparent:!0,depthWrite:!1}),g=new po(f);g.scale.set(7.2,1.8,1),g.position.set(0,7.2,-8.2),n.add(g);const v=new J(new Kt(14,.18,.18),new di({color:"#2a2540"}));v.position.set(0,7,-3),n.add(v);const m=[],p=new Mn(1,9,18,1,!0);p.translate(0,-4.5,0);for(let D=0;D<6;D++){const W=new At;W.position.set((D-2.5)*2.5,7,-3);const tt=new qt({color:En(D/6),transparent:!0,opacity:.1,blending:mc,depthWrite:!1,side:_e});W.add(new J(p,tt));const ut=new J(new re(.2,8,6),new qt({color:En(D/6,1,.7)}));W.add(ut),n.add(W),m.push({g:W,mat:tt,lamp:ut,ph:D*1.1})}const _=new J(new go(.7,1),new qx({color:"#cfd6ff",metalness:.7,roughness:.25,flatShading:!0}));_.position.set(0,5.6,.5),n.add(_);const b=new J(new te(.02,.02,1.8,4),new qt({color:"#666"}));b.position.set(0,6.8,.5),n.add(b);const M=[];for(const D of[-1,1]){const W=new J(new Kt(1.7,3.4,1.4),new di({color:"#17131f"}));W.position.set(D*6.2,1.7,-4.6),W.rotation.y=-D*.3,n.add(W);for(const[tt,ut]of[[.95,.5],[-.7,.18]]){const wt=new J(new nn(ut*1.3,24),new qt({color:"#2b2640"})),_t=new J(new nn(ut,20),new qt({color:"#4a4468"})),It=new At;It.add(wt),_t.position.z=.01,It.add(_t),It.position.set(0,tt,.71),W.add(It),M.push({g:It,r:ut})}}const P=new At;P.position.set(0,0,-2),n.add(P);const C=new J(new Kt(5,1.05,1.5),new di({color:"#1b1530"}));C.position.y=.525,P.add(C);const E=new J(new Kt(5.05,.08,.08),new qt({color:"#ff4fa0"}));E.position.set(0,1.04,.76),P.add(E);const U=E.clone();U.material=new qt({color:"#3fd0ff"}),U.position.set(0,.06,.76),P.add(U);const w=[];for(let D=0;D<16;D++){const W=new qt({color:"#2a2240"}),tt=new J(new Kt(.2,.12,.04),W);tt.position.set((D-7.5)*.29,.55,.77),P.add(tt),w.push(W)}const x=[];for(const D of[-1,1]){const W=new J(new Kt(1.7,.1,1.25),new di({color:"#2c2748"}));W.position.set(D*1.6,1.1,0),P.add(W);const tt=new At;tt.position.set(D*1.6,1.2,0);const ut=new J(new te(.55,.55,.07,36),new di({color:"#0e0b16"}));tt.add(ut);for(const Qt of[.45,.36,.28]){const Wt=new J(new bn(Qt,Qt+.012,40),new qt({color:"#3a3358",side:_e}));Wt.rotation.x=-Ni/2,Wt.position.y=.041,tt.add(Wt)}const wt=new J(new te(.17,.17,.08,20),new qt({color:D<0?"#ff4fa0":"#3fd0ff"}));tt.add(wt);const _t=new J(new Kt(.05,.02,.2),new qt({color:"#fff"}));_t.position.set(0,.05,.4),tt.add(_t),P.add(tt);const It=new J(new Kt(.04,.04,.7),new di({color:"#bbb"}));It.position.set(D*1.6+.55,1.22,-.1),It.rotation.y=.5,P.add(It),x.push({plat:tt,label:wt,spin:0})}const N=new J(new Kt(1.05,.14,1.25),new di({color:"#15101f"}));N.position.set(0,1.12,0),P.add(N);const I=[];for(let D=0;D<6;D++){const W=new J(new te(.06,.06,.06,10),new qt({color:D<3?"#ff4fa0":"#3fd0ff"}));W.position.set((D%3-1)*.28,1.22,-.3+Math.floor(D/3)*.28),P.add(W),I.push(W)}const F=new J(new Kt(.8,.02,.07),new qt({color:"#000"}));F.position.set(0,1.2,.45),P.add(F);const G=new J(new Kt(.12,.08,.16),new qt({color:"#f6b40e"}));G.position.set(0,1.25,.45),P.add(G);const Z=Mi(t);Z.scale.setScalar(1.2),Z.position.set(0,0,-3.4),n.add(Z);const H=[],nt=pl(e),q=[[-3.9,.4],[4,.2],[-6,-1.2],[6.1,-1],[-2.6,2.4],[2.7,2.6],[-5.2,2.2],[5.3,2]];nt.forEach((D,W)=>{const tt=Mi(Object.assign({},D.look,{pr:0}));tt.scale.setScalar(.95);const[ut,wt]=q[W%q.length];tt.position.set(ut,0,wt),tt.rotation.y=Math.atan2(-ut*.5,4-wt),n.add(tt),H.push({av:tt,x:ut,z:wt,style:W%3,ph:Math.random()*6})});let ht=0,vt=0,St=0,Vt=.9;return{hit(D){D==="kick"?ht=1:D==="snare"?vt=1:D==="note"&&(St=1)},update(D,W,tt){ht=Math.max(0,ht-D*5.5),vt=Math.max(0,vt-D*6),St=Math.max(0,St-D*4);const ut=!!tt.playing,wt=ut?tt.beat:W*1.6,_t=ut?1:.25;Vt+=D*.03*(.4+_t),a.color.copy(En(Vt)),r.color.copy(En(Vt+.5)),a.intensity=18+40*ht*_t,r.intensity=18+40*vt*_t+20*St,s.intensity=.95+.5*ht*_t,E.material.color.copy(En(Vt)),f.color.copy(En(Vt+.12,1,.85)),g.scale.setScalar(1+.04*ht),g.scale.set(7.2*(1+.04*ht),1.8*(1+.04*ht),1);for(const Y of c){const ft=.12+.35*(.5+.5*Math.sin(wt*Ni*.5+Y.i*.7+Y.j*.9))*_t+.5*ht*_t*(1-Y.j/zh*.5);Y.m.color.copy(En(Vt+Y.i*.05+Y.j*.04,.9,Math.min(.62,ft*.7)))}const It=tt.spectrum;for(let Y=0;Y<js;Y++){let it;if(It&&ut){const gt=Math.min(It.length-1,Math.floor(Math.pow(Y/js,1.6)*It.length*.8));it=It[gt]/255}else it=.12+.05*Math.sin(W*2+Y);const ft=d[Y].b.scale.y;d[Y].b.scale.y=ft+(.2+it*6.5-ft)*Math.min(1,D*18),d[Y].m.color.copy(En(Vt+Y/js*.8,1,.5+it*.2))}m.forEach((Y,it)=>{Y.g.rotation.z=Math.sin(W*.8+Y.ph)*.55,Y.g.rotation.x=Math.cos(W*.6+Y.ph*1.3)*.35+.1,Y.mat.color.copy(En(Vt+it*.16)),Y.lamp.material.color.copy(En(Vt+it*.16,1,.7)),Y.mat.opacity=.05+(ut?.07:.01)+.12*ht*_t}),_.rotation.y+=D*.6,_.scale.setScalar(1+.05*ht);for(const Y of M)Y.g.scale.setScalar(1+.12*ht*(Y.r>.3?1:.3));const Qt=tt.step==null?-1:tt.step;w.forEach((Y,it)=>{Y.color.set(Qt===it?"#ffffff":it%4===0?"#5b3f8a":"#2a2240")});const Wt=tt.decks||[!1,!1];x.forEach((Y,it)=>{const ft=Wt[it]?3.4:0;Y.spin+=(ft-Y.spin)*Math.min(1,D*3),Y.plat.rotation.y-=Y.spin*D,Y.label.material.color.copy(En(Vt+it*.5,1,.6))}),G.position.x=((tt.fader==null?.5:tt.fader)-.5)*.72,I.forEach((Y,it)=>{Y.rotation.y=(tt.knob==null?.5:tt.knob)*4+it});const mt=Z.userData;ys(Z,W,0);const z=Math.sin(wt*Ni*2);mt.body.position.y=Math.abs(z)*.06*_t,mt.body.rotation.x=.12+(ut?.12*ht:.03),mt.head.rotation.x=.1+.25*ht*_t,mt.head.rotation.y=Math.sin(wt*Ni*.5)*.35*_t,mt.arms[0].rotation.x=-1.2+Math.sin(wt*Ni*2+.5)*.22*_t,mt.arms[1].rotation.x=-1.2+Math.cos(wt*Ni*2)*.22*_t,mt.arms[0].rotation.z=-.35,mt.arms[1].rotation.z=.35;for(const Y of H){const it=Y.av.userData;ys(Y.av,W+Y.ph,0);const ft=wt*Ni*2+Y.ph,gt=Math.abs(Math.sin(wt*Ni+Y.ph*.2));Y.av.position.y=gt*.3*_t,it.body.rotation.z=Math.sin(ft*.5)*.12*_t,Y.style===0?(it.arms[0].rotation.x=-2.7+Math.sin(ft)*.35*_t,it.arms[1].rotation.x=-2.7+Math.cos(ft)*.35*_t,it.arms[0].rotation.z=-.25,it.arms[1].rotation.z=.25):Y.style===1?(it.arms[0].rotation.x=-.6+Math.sin(ft)*.8*_t,it.arms[1].rotation.x=-.6-Math.sin(ft)*.8*_t,Y.av.rotation.y+=Math.sin(ft*.25)*D*.8*_t):(it.arms[0].rotation.x=-2.4*(.4+.6*ht)*_t,it.arms[1].rotation.x=Math.sin(ft)*1.2*_t,it.legs[0].rotation.x=Math.sin(ft)*.5*_t,it.legs[1].rotation.x=-Math.sin(ft)*.5*_t),it.head.rotation.x=.15*ht*_t}},dispose(){Zn(Z);for(const D of H)Zn(D.av);i.remove(n),n.traverse(D=>{D.geometry&&D.geometry.dispose(),D.material&&(D.material.map&&D.material.map.dispose(),D.material.dispose())}),i.fog=null}}}const cc="potrero-temas-v1",kh="potrero-tema-borrador-v1",Fh={kick:"Bombo",snare:"Caja",hat:"Hi-hat",perc:"Aro",bass:"Bajo",lead:"Melodía",sample:"Sample"},I1=[["piano","Piano"],["guitar","Guitarra"],["synth","Sinte"]],Qd=16,ml=4,Oi=(i,t,e)=>Math.min(e,Math.max(t,i)),ls=(i,t)=>Number.isFinite(+i)?+i:t,Hl=()=>({drums:{kick:Array(Ue).fill(0),snare:Array(Ue).fill(0),hat:Array(Ue).fill(0),perc:Array(Ue).fill(0)},bass:Array(Ue).fill(null),lead:Array(Ue).fill(null),sample:Array(Ue).fill(0)});function ao(){return{id:"t"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),name:"Mi tema",folder:"Sin carpeta",bpm:100,swing:0,root:0,scale:"minor",inst:"piano",mix:{kick:.9,snare:.75,hat:.55,perc:.6,bass:.8,lead:.7,sample:.8,master:.85,sidechain:.4,filter:.5},patterns:Array.from({length:ml},Hl),arrangement:[0,0,1,1],xpGiven:!1}}const Oh=(i,t)=>Array.from({length:Ue},(e,n)=>{const s=i&&i[n];return!s||!Number.isFinite(+s.d)?null:{d:Oi(Math.round(+s.d),0,t-1),l:Oi(Math.round(ls(s.l,1)),1,8)}}),lc=(i,t)=>Array.from({length:Ue},(e,n)=>Oi(Math.round(ls(i&&i[n],0)),0,t));function ha(i){const t=ao();if(!i||typeof i!="object")return t;const e=t;e.id=typeof i.id=="string"&&/^[\w-]{1,40}$/.test(i.id)?i.id:t.id,e.name=String(i.name||"Mi tema").slice(0,30),e.folder=String(i.folder||"Sin carpeta").slice(0,24),e.bpm=Oi(Math.round(ls(i.bpm,100)),60,180),e.swing=Oi(ls(i.swing,0),0,.6),e.root=Oi(Math.round(ls(i.root,0)),0,11),e.scale=Yn[i.scale]?i.scale:"minor",e.inst=["piano","guitar","synth"].includes(i.inst)?i.inst:"piano",e.xpGiven=!!i.xpGiven;for(const a in e.mix)e.mix[a]=Oi(ls(i.mix&&i.mix[a],e.mix[a]),0,1);const n=Kr(e.scale);e.patterns=Array.from({length:ml},(a,r)=>{const o=i.patterns&&i.patterns[r],c=Hl();if(!o)return c;for(const l of["kick","snare","perc"])c.drums[l]=lc(o.drums&&o.drums[l],1);return c.drums.hat=lc(o.drums&&o.drums.hat,3),c.bass=Oh(o.bass,n),c.lead=Oh(o.lead,n),c.sample=lc(o.sample,1),c});const s=Array.isArray(i.arrangement)?i.arrangement:e.arrangement;return e.arrangement=s.map(a=>Oi(Math.round(ls(a,0)),0,ml-1)).slice(0,Qd),e.arrangement.length||(e.arrangement=[0]),e}const tf=(i,t)=>{try{const e=localStorage.getItem(i);return e?JSON.parse(e):t}catch{return t}},gl=(i,t)=>{try{return localStorage.setItem(i,JSON.stringify(t)),!0}catch{return!1}},Fn={list(){const i=tf(cc,[]);return Array.isArray(i)?i.map(ha):[]},save(i){const t=Fn.list().filter(e=>e.id!==i.id);return t.unshift(ha(i)),gl(cc,t.slice(0,60))},remove(i){gl(cc,Fn.list().filter(t=>t.id!==i))},folders(){return[...new Set(["Sin carpeta",...Fn.list().map(i=>i.folder)])]},get(i){return Fn.list().find(t=>t.id===i)||null}},za={load(){const i=tf(kh,null);return i?ha(i):null},save(i){gl(kh,i)}};function U1(i){const t=new Set;for(const e of i.patterns){for(const n of["kick","snare","hat","perc"])e.drums[n].some(Boolean)&&t.add(n);e.bass.some(Boolean)&&t.add("bass"),e.lead.some(Boolean)&&t.add("lead")}return t.size}const ef=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),$s=["A","B","C","D"],N1=[["ritmo","1 · Ritmo"],["bajo","2 · Bajo"],["melodia","3 · Melodía"],["mezcla","4 · Mezcla"],["armar","5 · Armar"],["set","Set DJ"]],z1=[["kick","Bombo","#ff4fa0"],["snare","Caja","#ff4fa0"],["hat","Hi-hat","#ff4fa0"],["perc","Aro","#ff4fa0"],["bass","Bajo","#3fd0ff"],["lead","Melodía","#3fd0ff"],["sample","Sample","#3fd0ff"]],k1=["kick","snare","hat","perc"];function zi({label:i,value:t,onInput:e,color:n="#f6b40e",fmt:s,def:a,compact:r}){let o=t;const c=y("i",{class:"knob-ind"}),l=y("div",{class:"knob-dial"},c),h=y("span",{class:"knob-val"}),d=y("div",{class:"dj-knob"+(r?" compact":""),tabindex:"0",role:"slider","aria-label":i,"aria-valuemin":"0","aria-valuemax":"100"},l,y("span",{class:"knob-lab",text:i}),h),u=()=>{l.style.setProperty("--v",o),l.style.setProperty("--c",n),c.style.transform=`rotate(${-135+o*270}deg)`,h.textContent=s?s(o):String(Math.round(o*100)),d.setAttribute("aria-valuenow",String(Math.round(o*100)))},f=_=>{o=ef(_),u(),e(o)};let g=0,v=0,m=!1;d.addEventListener("pointerdown",_=>{m=!0,g=_.clientY,v=o,d.setPointerCapture(_.pointerId),_.preventDefault()}),d.addEventListener("pointermove",_=>{m&&f(v+(g-_.clientY)/140)});const p=()=>{m=!1};return d.addEventListener("pointerup",p),d.addEventListener("pointercancel",p),d.addEventListener("dblclick",()=>f(a??t)),d.addEventListener("wheel",_=>{_.preventDefault(),f(o+(_.deltaY<0?.04:-.04))},{passive:!1}),d.addEventListener("keydown",_=>{const b=_.key;b==="ArrowUp"||b==="ArrowRight"?(f(o+.05),_.preventDefault()):(b==="ArrowDown"||b==="ArrowLeft")&&(f(o-.05),_.preventDefault())}),u(),d}const Br=(i,t,e,n={})=>y("button",{type:"button",class:"chip","aria-pressed":t?"true":"false",onclick:e,...n,text:i}),uc=(i,t,e,n)=>{const s=y("select",{class:"dj-select","aria-label":n},i.map(([a,r])=>y("option",{value:a,text:r})));return s.value=String(t),s.addEventListener("change",()=>e(s.value)),s};function F1({onExit:i}){const t=new ga,e=new Je(46,innerWidth/innerHeight,.1,90),n=Object.assign({},Ot.profile.look,{ex:Bi("ex","sing")}),s=D1(t,{djLook:n}),a=new Zd,r=new Zr(a);let o=100;const c=[new Zr(a,{bpm:()=>o}),new Zr(a,{bpm:()=>o})],l=[null,null],h=[null,null];let d=.5,u=za.load()||ao(),f="",g="ritmo",v=0,m=0,p="",_=null,b=!1,M=!1,P=-2,C=-2,E=[],U=[],w=0,x=null;const N=[],I=new Uint8Array(a.analyser.frequencyBinCount),F=()=>u.patterns[v],G=()=>{clearTimeout(w),w=setTimeout(()=>za.save(u),350)},Z=()=>{r.rack.apply(u.mix)},H=()=>{r.load(u),r.mode=g==="armar"?"song":"pattern",r.pat=v},nt=k=>k.patterns.some(O=>O.drums.kick.some(Boolean)||O.drums.snare.some(Boolean)||O.drums.hat.some(Boolean)||O.drums.perc.some(Boolean)||O.bass.some(Boolean)||O.lead.some(Boolean)),q=()=>JSON.stringify(u)!==f&&nt(u),ht=y("div",{class:"dj-hud"}),vt=y("div",{class:"dj-body"}),St=y("p",{class:"dj-tip",title:"Tocá para ver el consejo completo"});St.addEventListener("click",()=>St.classList.toggle("open"));const Vt=y("div",{class:"dj-blocks"}),et=y("button",{type:"button",class:"btn primary dj-play",onclick:()=>Y()}),D=y("span",{class:"dj-song"}),W=y("section",{class:"dj-panel"}),tt=y("nav",{class:"dj-tabs",role:"tablist"}),ut=y("button",{type:"button",class:"btn sm dj-min","aria-label":"Mostrar u ocultar el panel",text:"▾",onclick:()=>{M=!M,W.classList.toggle("min",M),ut.textContent=M?"▴":"▾",requestAnimationFrame(yt)}}),wt=y("div",{class:"dj-top"},y("button",{type:"button",class:"btn sm",text:"← Salir",onclick:()=>{b||i()}}),D);W.append(y("header",{class:"dj-head"},tt,y("div",{class:"dj-actions"},et,y("button",{type:"button",class:"btn ghost sm",text:"Temas",onclick:()=>oe()}),ut)),St,Vt,vt),ht.append(wt,W),_n(),Jn().append(ht);function _t(){tt.replaceChildren(...N1.map(([O,Q])=>y("button",{type:"button",class:"dj-tab",role:"tab","aria-selected":O===g?"true":"false",text:Q,onclick:()=>It(O)})));const k=tt.querySelector('[aria-selected="true"]');k&&(tt.scrollLeft=k.offsetLeft-(tt.clientWidth-k.offsetWidth)/2)}function It(k){if(k===g)return;const O=g==="set";g=k,k==="set"?r.stop():O&&c.forEach(Q=>Q.stop()),H(),Qt()}function Qt(){_t(),D.textContent=u.name+(q()?" •":""),St.textContent=x1[g]||"",Wt(),mt(),z(),requestAnimationFrame(yt)}function Wt(){if(g==="armar"||g==="set"){Vt.hidden=!0;return}Vt.hidden=!1;const k=O=>{const Q=u.patterns[O];return Q.drums.kick.some(Boolean)||Q.drums.snare.some(Boolean)||Q.drums.hat.some(Boolean)||Q.drums.perc.some(Boolean)||Q.bass.some(Boolean)||Q.lead.some(Boolean)};Vt.replaceChildren(y("span",{class:"lab",text:"Bloque"}),...$s.map((O,Q)=>y("button",{type:"button",class:"chip blk"+(k(Q)?" has":""),"aria-pressed":Q===v?"true":"false",text:O,onclick:()=>{v=Q,r.pat=Q,P=-2,Wt(),mt()}})),y("span",{class:"blk-gap"}),(()=>{const O=y("select",{class:"dj-select tiny","aria-label":"Más opciones del bloque"},y("option",{value:"",text:"Más…"}),...$s.flatMap((Q,ct)=>ct===v?[]:[y("option",{value:"c"+ct,text:`Copiar al ${Q}`})]),y("option",{value:"x",text:"Borrar este bloque"}));return O.addEventListener("change",()=>{const Q=O.value;O.value="",Q==="x"?(u.patterns[v]=Hl(),G(),Wt(),mt()):Q[0]==="c"&&(u.patterns[+Q[1]]=JSON.parse(JSON.stringify(u.patterns[v])),ge(`Copiado al bloque ${$s[+Q[1]]}`),G(),Wt())}),O})())}function mt(){E=[],U=[],P=-2,C=-2,vt.replaceChildren({ritmo:Ct,bajo:L,melodia:S,mezcla:X,armar:rt,set:dt}[g]()),D.textContent=u.name+(q()?" •":"")}function z(){et.hidden=g==="set",et.replaceChildren(y("span",{class:"ico",text:r.playing?"■":"▶"}),y("span",{class:"txt",text:r.playing?" Parar":" Tocar"})),et.setAttribute("aria-label",r.playing?"Parar":"Tocar"),et.classList.toggle("on",r.playing)}function Y(){if(r.playing){r.stop(),z();return}a.resume(),H(),Z(),r.start(),z()}function it(){const k=u.patterns[v].drums,O=y("div",{class:"dj-grid drums",style:{"--cols":Ue}}),Q=Array.from({length:Ue},()=>[]),ct=[...k1,"sample"];for(const Xt of ct){O.append(y("span",{class:"row-lab",text:Fh[Xt]}));for(let ne=0;ne<Ue;ne++){const Re=Xt==="sample"?F().sample[ne]:k[Xt][ne],cn=y("button",{type:"button",class:"cell "+Xt+(ne%4===0?" beat":""),"data-tr":Xt,"data-s":ne,"data-v":Re,"aria-label":`${Fh[Xt]} paso ${ne+1}`});Q[ne].push(cn),O.append(cn)}}E=Q;const xt=Xt=>Xt==="hat"?3:1,Et=(Xt,ne)=>Xt==="sample"?F().sample[ne]:F().drums[Xt][ne],Jt=(Xt,ne,Re)=>{Xt==="sample"?F().sample[ne]=Re:F().drums[Xt][ne]=Re};let Gt=null;const he=Xt=>{const ne=document.elementFromPoint(Xt.clientX,Xt.clientY);return ne&&ne.classList&&ne.classList.contains("cell")&&O.contains(ne)?ne:null},se=(Xt,ne)=>{const Re=Xt.dataset.tr,cn=+Xt.dataset.s;Et(Re,cn)!==ne&&(Jt(Re,cn,ne),Xt.dataset.v=ne,G(),ne&&a.previewDrum(u,Re,ne))};return O.addEventListener("pointerdown",Xt=>{const ne=he(Xt);if(!ne)return;const Re=ne.dataset.tr;if(Re==="sample"&&!a.sampleBuffer){ge("Primero cargá un sample (abajo)");return}const cn=Et(Re,+ne.dataset.s);Gt=cn>=xt(Re)?0:cn+1,se(ne,Gt),O.dataset.tr=Re,Xt.preventDefault()}),O.addEventListener("pointermove",Xt=>{if(Gt==null)return;const ne=he(Xt);ne&&ne.dataset.tr===O.dataset.tr&&se(ne,Gt)}),x&&(removeEventListener("pointerup",x),removeEventListener("pointercancel",x)),x=()=>{Gt!=null&&(Gt=null,D.textContent=u.name+(q()?" •":""),Wt())},addEventListener("pointerup",x),addEventListener("pointercancel",x),O}function ft(k){const O=F()[k],Q=Kr(u.scale),ct=Yn[u.scale].steps.length,xt=k==="bass"?36:60,Et=Array.from({length:Q},()=>Array(Ue).fill(null));O.forEach((he,se)=>{if(he)for(let Xt=0;Xt<he.l&&se+Xt<Ue;Xt++)Et[he.d][se+Xt]={head:Xt===0,step:se}});const Jt=y("div",{class:"dj-grid roll "+k,style:{"--cols":Ue}}),Gt=Array.from({length:Ue},()=>[]);for(let he=Q-1;he>=0;he--){const se=xt+u.root+Hd(u.scale,he),Xt=he%ct===0;Jt.append(y("span",{class:"row-lab"+(Xt?" root":""),text:oc[se%12]+(Xt?"★":"")}));for(let ne=0;ne<Ue;ne++){const Re=Et[he][ne],cn=y("button",{type:"button",class:"cell note"+(ne%4===0?" beat":"")+(Xt?" root":"")+(Re?Re.head?" on":" on cont":""),"aria-label":`${oc[se%12]} paso ${ne+1}`,onclick:()=>{const xa=Re?Re.step:ne,Si=O[xa];Re&&Si?Si.l===1?Si.l=2:Si.l===2?Si.l=4:O[xa]=null:(O[ne]={d:he,l:1},a.preview(u,k,he)),G(),mt(),Wt()}});Gt[ne].push(cn),Jt.append(cn)}}return E=Gt,Jt}function gt(){return y("div",{class:"dj-row"},y("label",{class:"dj-field"},y("span",{text:"Nota"}),uc(oc.map((k,O)=>[O,k]),u.root,k=>{u.root=+k,G(),mt()},"Nota raíz")),y("label",{class:"dj-field"},y("span",{text:"Escala"}),uc(m1.map(k=>[k,Yn[k].name]),u.scale,k=>{u.scale=k;const O=Kr(k);for(const Q of u.patterns)for(const ct of["bass","lead"])Q[ct]=Q[ct].map(xt=>xt?{d:Math.min(xt.d,O-1),l:xt.l}:null);G(),mt()},"Escala")),y("span",{class:"dj-mood",text:Yn[u.scale].mood}))}function Nt(k,O){return y("div",{class:"dj-row"},y("span",{class:"lab",text:"Arranques"}),...k.map(Q=>Br(Q.name,!1,()=>{const ct=Array(Ue).fill(null),xt=Kr(u.scale);for(const[Et,Jt,Gt]of Q.notes)ct[Et]={d:Math.min(Jt,xt-1),l:Gt};F()[O]=ct,G(),St.textContent=Q.tip,mt(),Wt()})))}function Ct(){const k=y("div",{class:"dj-pane"});return k.append(y("div",{class:"dj-row"},y("span",{class:"lab",text:"Estilos"}),...Xd.map(O=>Br(O.name,!1,()=>{F().drums=JSON.parse(JSON.stringify(O.drums)),u.bpm=O.bpm,u.swing=O.swing,St.textContent=O.tip,G(),mt(),Wt()})),y("span",{class:"blk-gap"}),zi({compact:!0,label:"BPM",value:(u.bpm-60)/120,def:40/120,color:"#f6b40e",fmt:O=>String(Math.round(60+O*120)),onInput:O=>{u.bpm=Math.round(60+O*120),G()}}),zi({compact:!0,label:"Swing",value:u.swing/.6,def:0,color:"#f6b40e",onInput:O=>{u.swing=+(O*.6).toFixed(3),G()}})),it(),y("div",{class:"dj-row sample"},y("span",{class:"lab",text:"Sample propio"}),y("button",{type:"button",class:"btn ghost sm",text:"Subir audio",onclick:()=>A.click()}),y("button",{type:"button",class:"btn ghost sm"+(_?" rec":""),text:_?"■ Frenar":"🎙 Grabar",onclick:()=>K()}),y("span",{class:"muted small",text:p?`Cargado: ${p}`:'Subí un audio o grabá tu guitarra o tu voz: después lo ponés en la fila "Sample". No se guarda con el tema.'}))),k}function L(){return y("div",{class:"dj-pane"},gt(),Nt(qd,"bass"),ft("bass"),y("p",{class:"muted small",text:"Tocá un cuadradito para poner una nota. Tocá la misma de nuevo para alargarla (1 → 2 → 4 pasos) y otra vez para sacarla."}))}function S(){const k=gt();return k.append(y("span",{class:"blk-gap"}),...I1.map(([O,Q])=>Br(Q,u.inst===O,()=>{u.inst=O,G(),a.preview(u,"lead",5),mt()}))),y("div",{class:"dj-pane"},k,Nt(Ha,"lead"),ft("lead"))}function X(){const k=u.mix,O=y("div",{class:"dj-pane"}),Q=(xt,Et,Jt)=>zi({label:Et,value:k[xt],color:Jt,onInput:Gt=>{k[xt]=Gt,Z(),G()}}),ct=xt=>xt<.47?"graves":xt>.53?"agudos":"abierto";return O.append(y("div",{class:"dj-row knobs big"},...z1.map(([xt,Et,Jt])=>Q(xt,Et,Jt)),y("i",{class:"knob-sep"}),zi({label:"Sidechain",value:k.sidechain,def:.4,color:"#f6b40e",onInput:xt=>{k.sidechain=xt,Z(),G()}}),zi({label:"Filtro",value:k.filter,def:.5,color:"#9b7dff",fmt:ct,onInput:xt=>{k.filter=xt,Z(),G()}}),zi({label:"Volumen",value:k.master,def:.85,color:"#f6b40e",onInput:xt=>{k.master=xt,Z(),G()}})),y("p",{class:"muted small",text:"Arrastrá cada perilla hacia arriba o abajo (o usá la rueda). Doble clic: vuelve al valor de arranque."})),O}function rt(){const k=y("div",{class:"dj-pane"}),O=u.arrangement.length*Ue*ua(u),Q=y("div",{class:"dj-slots"});U=[],u.arrangement.forEach((se,Xt)=>{const ne=y("button",{type:"button",class:"slot"+(Xt===m?" sel":""),"aria-label":`Compás ${Xt+1}: bloque ${$s[se]}`,onclick:()=>{m=Xt,mt()}},y("b",{text:$s[se]}),y("small",{text:String(Xt+1)}));U.push(ne),Q.append(ne)}),u.arrangement.length<Qd&&Q.append(y("button",{type:"button",class:"slot add","aria-label":"Agregar compás",text:"+",onclick:()=>{u.arrangement.push(u.arrangement[u.arrangement.length-1]||0),m=u.arrangement.length-1,G(),mt()}}));const ct=u.arrangement[m],xt=se=>{const Xt=m+se;Xt<0||Xt>=u.arrangement.length||([u.arrangement[m],u.arrangement[Xt]]=[u.arrangement[Xt],u.arrangement[m]],m=Xt,G(),mt())},Et=Fn.folders().map(se=>[se,se]);Et.some(([se])=>se===u.folder)||Et.push([u.folder,u.folder]);const Jt=y("input",{class:"dj-input",type:"text",maxlength:"30",value:u.name,"aria-label":"Nombre del tema"});Jt.addEventListener("input",()=>{u.name=Jt.value.trim().slice(0,30)||"Mi tema",D.textContent=u.name+" •",G()});const Gt=y("input",{class:"dj-input",type:"text",maxlength:"24",list:"dj-folders",value:u.folder,"aria-label":"Carpeta"});Gt.addEventListener("input",()=>{u.folder=Gt.value.trim().slice(0,24)||"Sin carpeta",G()});const he=y("datalist",{id:"dj-folders"},Et.map(([se])=>y("option",{value:se})));return k.append(y("span",{class:"lab",text:`Tu canción · ${u.arrangement.length} compases · ${Math.round(O)} s`}),Q,y("div",{class:"dj-row"},y("span",{class:"lab",text:"Este compás"}),...$s.map((se,Xt)=>Br(se,ct===Xt,()=>{u.arrangement[m]=Xt,G(),mt()})),y("button",{type:"button",class:"chip tiny",text:"◀","aria-label":"Mover antes",onclick:()=>xt(-1)}),y("button",{type:"button",class:"chip tiny",text:"▶","aria-label":"Mover después",onclick:()=>xt(1)}),y("button",{type:"button",class:"chip tiny",text:"Sacar",disabled:u.arrangement.length<=1,onclick:()=>{u.arrangement.splice(m,1),m=Math.min(m,u.arrangement.length-1),G(),mt()}})),y("div",{class:"dj-row save"},y("label",{class:"dj-field grow"},y("span",{text:"Nombre"}),Jt),y("label",{class:"dj-field grow"},y("span",{text:"Carpeta"}),Gt,he),y("button",{type:"button",class:"btn primary",text:"Guardar",onclick:()=>zt()}),y("button",{type:"button",class:"btn ghost",text:"Exportar WAV",onclick:se=>Pt(se.currentTarget)}))),k}function dt(){const k=y("div",{class:"dj-pane"}),O=y("div",{class:"dj-decks"}),Q=[...Fn.list()],ct=[["","— elegir tema —"],["__cur","Tema actual: "+u.name],...Q.map(Et=>[Et.id,`${Et.name} (${Et.bpm})`])];[0,1].forEach(Et=>{const Jt=c[Et],Gt=uc(ct,l[Et]&&l[Et].__pick||"",se=>{if(Jt.stop(),!se){l[Et]=null,mt();return}const Xt=se==="__cur"?ha(JSON.parse(JSON.stringify(u))):Fn.get(se);Xt&&(Xt.__pick=se,l[Et]=Xt,h[Et]=Object.assign({},Xt.mix),Jt.load(Xt),c[1-Et].playing||(o=Xt.bpm),lt(),mt())},`Tema de la bandeja ${Et?"B":"A"}`),he=y("button",{type:"button",class:"btn primary",text:Jt.playing?"■":"▶",disabled:!l[Et],onclick:()=>{if(Jt.playing){Jt.stop(),he.textContent="▶";return}a.resume();const se=c[1-Et];Jt.load(l[Et]),Jt.rack.apply(h[Et]),Jt.start(se.playing?se.nextBarTime():void 0),he.textContent="■"}});O.append(y("div",{class:"dj-deck d"+Et},y("h4",{text:"Bandeja "+(Et?"B":"A")}),Gt,he,zi({label:"Filtro",value:h[Et]?h[Et].filter:.5,def:.5,color:Et?"#3fd0ff":"#ff4fa0",fmt:se=>se<.47?"graves":se>.53?"agudos":"abierto",onInput:se=>{h[Et]&&(h[Et].filter=se,Jt.rack.apply(h[Et]))}})))});const xt=y("input",{type:"range",class:"dj-cross",min:"0",max:"1",step:"0.01",value:String(d),"aria-label":"Crossfader"});return xt.addEventListener("input",()=>{d=+xt.value,lt()}),k.append(O,y("div",{class:"dj-row cross"},y("span",{class:"lab",text:"A"}),xt,y("span",{class:"lab",text:"B"}),zi({label:"BPM",value:(o-60)/120,color:"#f6b40e",fmt:Et=>String(Math.round(60+Et*120)),onInput:Et=>{o=Math.round(60+Et*120)}})),y("p",{class:"muted small",text:Q.length?"Los dos temas se sincronizan al BPM del centro. La segunda bandeja entra justo al empezar el próximo compás.":'Todavía no tenés temas guardados: armá uno y tocá Guardar en "5 · Armar".'})),k}function lt(){const k=Math.cos(d*Math.PI/2),O=Math.sin(d*Math.PI/2),Q=a.ctx.currentTime;c[0].rack.deck.gain.setTargetAtTime(k,Q,.02),c[1].rack.deck.gain.setTargetAtTime(O,Q,.02)}function zt(){if(!Fn.save(u)){ge("No pude guardar: se llenó el almacenamiento del navegador");return}f=JSON.stringify(u);let O=`Guardado: ${u.name}`;!u.xpGiven&&U1(u)>=3&&(u.xpGiven=!0,Fn.save(u),f=JSON.stringify(u),Ot.addXp(20),O+=" · +20 XP"),za.save(u),ge(O),D.textContent=u.name}async function Pt(k){if(!nt(u)){ge("Armá algo primero");return}const O=k.textContent;k.disabled=!0,k.textContent="Exportando…";try{const Q=await R1(u,a.sampleBuffer),ct=y("a",{href:URL.createObjectURL(Q),download:(u.name.replace(/[^\w\- ]+/g,"").trim()||"tema")+".wav"});document.body.append(ct),ct.click(),ct.remove(),setTimeout(()=>URL.revokeObjectURL(ct.href),4e3),ge("Listo: se descargó el WAV")}catch(Q){console.warn(Q),ge("No se pudo exportar")}k.disabled=!1,k.textContent=O}function kt(k){r.stop(),u=ha(k),v=0,m=0,f=JSON.stringify(u),za.save(u),H(),Z(),Qt()}function oe(){let k=null;const O=y("div",{class:"dj-lib"}),Q=()=>{const ct=Fn.list(),xt=[...new Set(ct.map(Jt=>Jt.folder))],Et=q();O.replaceChildren(...[y("div",{class:"dj-row"},y("button",{type:"button",class:"btn primary",text:"Tema nuevo",onclick:Jt=>{if(Et&&k!=="new"){k="new",Jt.currentTarget.textContent="¿Seguro? Se pierde lo no guardado";return}kt(ao()),Ee()}})),ct.length?null:y("p",{class:"muted",text:"Todavía no guardaste temas. Armá uno y tocá Guardar."}),...xt.map(Jt=>y("div",{class:"lib-folder"},y("h4",{text:"📁 "+Jt}),...ct.filter(Gt=>Gt.folder===Jt).map(Gt=>y("div",{class:"lib-row"},y("span",{class:"lib-name",text:Gt.name}),y("span",{class:"muted small",text:`${Gt.bpm} BPM · ${Yn[Gt.scale].name}`}),y("button",{type:"button",class:"btn ghost sm",text:"Abrir",onclick:he=>{if(Et&&k!==Gt.id){k=Gt.id,he.currentTarget.textContent="¿Seguro?";return}kt(Gt),Ee()}}),y("button",{type:"button",class:"btn ghost sm","aria-label":"Borrar "+Gt.name,text:"🗑",onclick:he=>{if(k!=="del"+Gt.id){k="del"+Gt.id,he.currentTarget.textContent="¿Borrar?";return}Fn.remove(Gt.id),k=null,Q()}})))))].filter(Boolean))};Q(),yn(y("div",null,y("header",{class:"dlg-head"},y("h2",{text:"Mis temas"}),y("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>Ee()})),O),{cls:"wide"})}const A=y("input",{type:"file",accept:"audio/*",hidden:!0});A.addEventListener("change",async()=>{const k=A.files&&A.files[0];if(A.value="",!!k){if(k.size>12*1024*1024){ge("El audio es muy pesado (máx. 12 MB)");return}try{await R(await k.arrayBuffer(),k.name.slice(0,24))}catch{ge("No pude leer ese audio")}}}),ht.append(A);async function R(k,O){a.resume();let Q=await a.ctx.decodeAudioData(k);const ct=Math.floor(Q.sampleRate*10);if(Q.length>ct){const xt=a.ctx.createBuffer(Q.numberOfChannels,ct,Q.sampleRate);for(let Et=0;Et<Q.numberOfChannels;Et++)xt.copyToChannel(Q.getChannelData(Et).subarray(0,ct),Et);Q=xt,ge("Usé solo los primeros 10 segundos")}a.setSample(Q),p=O,mt(),ge('Sample cargado: marcalo en la fila "Sample"')}async function K(){if(_){_.stop();return}if(!navigator.mediaDevices||!window.MediaRecorder){ge("Tu navegador no puede grabar");return}try{const k=await navigator.mediaDevices.getUserMedia({audio:!0}),O=new MediaRecorder(k),Q=[];O.ondataavailable=xt=>{xt.data.size&&Q.push(xt.data)},O.onstop=async()=>{k.getTracks().forEach(xt=>xt.stop()),clearTimeout(ct),_=null;try{await R(await new Blob(Q,{type:O.mimeType}).arrayBuffer(),"grabación")}catch{ge("No pude usar esa grabación")}b||mt()};const ct=setTimeout(()=>{O.state==="recording"&&O.stop()},1e4);O.start(),_=O,mt(),ge("Grabando… (máx. 10 s)")}catch{ge("No tengo permiso para usar el micrófono")}}const pt=k=>{/INPUT|TEXTAREA|SELECT/.test(k.target&&k.target.tagName)||k.key===" "&&g!=="set"&&(k.preventDefault(),Y())};addEventListener("keydown",pt);const ot=()=>a.resume();addEventListener("pointerdown",ot);let Mt=0;function yt(){const k=innerWidth,O=innerHeight;e.aspect=k/O;const Q=W.getBoundingClientRect().height;e.setViewOffset(k,O,0,Math.round((Q-44)/2),k,O),e.updateProjectionMatrix()}function Dt(k){const O=r.playing&&k&&g!=="armar"&&g!=="set"?k.step:-1;if(O!==P){if(P>=0&&E[P])for(const ct of E[P])ct.classList.remove("now");if(O>=0&&E[O])for(const ct of E[O])ct.classList.add("now");P=O}const Q=r.playing&&k&&g==="armar"?k.arrPos:-1;Q!==C&&(U[C]&&U[C].classList.remove("now"),U[Q]&&U[Q].classList.add("now"),C=Q)}function V(k,O){for(const he of a.popCues(a.ctx.currentTime))s.hit(he.type);a.analyser.getByteFrequencyData(I);let Q=null,ct=null,xt=!1;g==="set"?(Q=c[0].playing?c[0]:c[1].playing?c[1]:null,ct=Q===c[0]?l[0]:l[1],xt=!!Q):(Q=r,ct=u,xt=r.playing);const Et=Q&&xt?Q.position():null;let Jt=0,Gt=-1;if(Et){const he=ua(ct,g==="set"?o:void 0);Jt=(Et.arrPos*Ue+Et.step+ef((a.ctx.currentTime-Et.time)/he,0,1))/4,Gt=Et.step}Dt(g==="set"?null:Et),s.update(k,O,{spectrum:I,beat:Jt,playing:!!Et,step:Gt,decks:g==="set"?[c[0].playing,c[1].playing]:[r.playing,r.playing],fader:g==="set"?d:.5,knob:u.mix.filter}),Mt+=k,e.position.set(Math.sin(Mt*.25)*1,4+Math.sin(Mt*.2)*.12,bt()),e.lookAt(0,1.3,-2.5)}const bt=()=>{const k=innerWidth/innerHeight;return k<1?13+(1-k)*10:k<1.4?13:11.5};if(f=JSON.stringify(u),H(),Z(),lt(),Qt(),yt(),typeof ResizeObserver<"u"){const k=new ResizeObserver(()=>yt());k.observe(W),N.push(()=>k.disconnect())}return{scene:t,camera:e,update:V,resize(){yt()},dispose(){b=!0,clearTimeout(w),za.save(u),removeEventListener("keydown",pt),removeEventListener("pointerdown",ot),x&&(removeEventListener("pointerup",x),removeEventListener("pointercancel",x));for(const k of N)k();if(_)try{_.stop()}catch{}Ee(),s.dispose(),a.close(),_n()}}}const vl=new Map,bs=(i,t)=>{let e=vl.get(i);return e||(e=t(),vl.set(i,e)),e},$i=(i,t=0,e=0,n=0)=>(i.position.set(t,e,n),i),Rt=(i,t,e,n,s,a,r)=>$i(new J(bs(`b${i},${t},${e}`,()=>new Kt(i,t,e)),Tt(n)),s,a,r),ie=(i,t,e,n,s,a,r,o=10)=>$i(new J(bs(`c${i},${t},${e},${o}`,()=>new te(i,t,e,o)),Tt(n)),s,a,r),ye=(i,t,e,n,s,a=10)=>$i(new J(bs(`s${i},${a}`,()=>new re(i,a,Math.max(5,a-3))),Tt(t)),e,n,s),He=(i,t,e,n,s,a,r=10)=>$i(new J(bs(`k${i},${t},${r}`,()=>new Mn(i,t,r)),Tt(e)),n,s,a),O1=(i,t,e,n,s,a)=>$i(new J(bs(`t${i},${t}`,()=>new je(i,t,8,18)),Tt(e)),n,s,a),Wa=(i,t,e,n,s,a,r)=>$i(new J(bs(`b${i},${t},${e}`,()=>new Kt(i,t,e)),new qt({color:n})),s,a,r);function nf(i,t,e,n,s,a,r){const o=new J(bs("roof",()=>new Mn(1,1,4)),Tt(n));return o.rotation.y=Math.PI/4,o.scale.set(i/Math.SQRT2,e,t/Math.SQRT2),$i(o,s,a,r)}function xl(i,t,e,n,s,a,r){const o=new At,c=Math.atan2(e,t/2),l=Math.hypot(e,t/2)+.2;for(const h of[-1,1]){const d=Rt(i+.3,.14,l,n,0,e/2,h*t/4);d.rotation.x=h*c,o.add(d)}return $i(o,s,a,r)}function sf(i){let t=Math.floor(i)%2147483647||1;return()=>(t=t*16807%2147483647)/2147483647}class af{constructor(t){this.scene=t,this.list=[]}add(t,e,n){const s=document.createElement("canvas");s.width=256,s.height=72;const a=s.getContext("2d");a.font='700 44px "Barlow Condensed", Arial Narrow, Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.lineWidth=8,a.strokeStyle="rgba(10,14,24,.9)",a.strokeText(t,128,38),a.fillStyle=e,a.fillText(t,128,38);const r=new Rn(s);r.colorSpace=ke;const o=new po(new ir({map:r,transparent:!0,depthTest:!1,depthWrite:!1}));o.scale.set(3.2,.9,1),o.position.copy(n),o.renderOrder=20,this.scene.add(o),this.list.push({spr:o,tex:r,age:0})}update(t){for(let e=this.list.length-1;e>=0;e--){const n=this.list[e];n.age+=t,n.spr.position.y+=t*1.6,n.spr.material.opacity=Math.min(1,2.2-n.age*1.6),n.age>1.4&&this.remove(e)}}remove(t){const e=this.list[t];this.scene.remove(e.spr),e.tex.dispose(),e.spr.material.dispose(),this.list.splice(t,1)}dispose(){for(;this.list.length;)this.remove(this.list.length-1)}}function rf(i){const t=new Set(vl.values());i.traverse(e=>{e.geometry&&!t.has(e.geometry)&&e.geometry.dispose(),e.material&&e.material.map&&e.material.map.dispose&&e.material.map.dispose(),e.material&&e.userData&&e.userData.ownMat&&e.material.dispose()})}const Tn=Math.PI,tn=2.5,er=.85,Bh=3,of=-3.2,_l=i=>({x:(i%Bh-1)*(tn+er),z:of+Math.floor(i/Bh)*(tn+er)});function B1(){const i=new At;for(const[e,n]of[[0,0],[.22,.1],[-.2,.12]]){const s=ye(.26,"#4f9a3a",e,.22,n);s.scale.y=.65,i.add(s)}const t=new At;for(const[e,n]of[[.28,.3],[-.3,.25],[.05,.38]]){const s=ye(.12,"#b88a55",e,.07,n);s.scale.set(1.2,.8,1),t.add(s)}return i.add(t),{g:i,set:e=>{t.visible=e>=1}}}function V1(){const i=new At;i.add(ie(.05,.07,1.4,"#6fae3a",0,.7,0,6));for(const n of[-1,1]){const s=Rt(.55,.03,.14,"#5d9a30",n*.26,.85+(n>0?.15:0),0);s.rotation.z=n*.45,i.add(s)}const t=He(.1,.35,"#c9b44a",0,1.5,0,6);i.add(t);const e=ie(.09,.07,.34,"#f2c230",.12,.85,.05,8);return e.rotation.z=-.25,i.add(e),{g:i,set:n=>{e.visible=n>=1,t.material=Tt(n>=1?"#e6c84a":"#6fae3a")}}}function G1(){const i=new At;i.add(ie(.025,.025,1.1,"#8a5a33",0,.55,0,5)),i.add(ye(.4,"#3f8f3a",0,.5,0));const t=new At;for(const[e,n,s]of[[.3,.45,.2],[-.28,.6,.22],[.1,.35,.36],[-.12,.72,-.28]])t.add(ye(.12,"#d9402f",e,n,s));return i.add(t),{g:i,set:e=>{t.visible=e>=1}}}function H1(){const i=new At;i.add(ie(.06,.08,1.6,"#5d9a30",0,.8,0,6));for(const a of[-1,1]){const r=Rt(.5,.03,.3,"#4f9a3a",a*.28,.6+(a>0?.3:0),0);r.rotation.z=a*.4,i.add(r)}const t=ye(.14,"#6fae3a",0,1.65,0),e=new At,n=ie(.42,.42,.06,"#f6b40e",0,0,0,14),s=ie(.26,.26,.1,"#5a3a1e",0,.04,0,12);return e.add(n,s),e.position.set(0,1.62,.04),e.rotation.x=Tn/2-.35,i.add(t,e),{g:i,set:a=>{t.visible=a<1,e.visible=a>=1}}}function W1(){const i=new At,t=[];for(let e=0;e<9;e++){const n=e*2.4,s=.12+e%3*.1,a=ie(.025,.03,1,"#6fae3a",Math.cos(n)*s,.5,Math.sin(n)*s,5),r=ye(.07,"#d9b25c",Math.cos(n)*s,1.02,Math.sin(n)*s,6);r.scale.y=2.2,r.visible=!1,i.add(a,r),t.push([a,r])}return{g:i,set:e=>{for(const[n,s]of t)n.material=Tt(e>=.6?"#d9b25c":"#6fae3a"),s.visible=e>=.6}}}function X1(){const i=new At;for(const e of[-.9,.9])i.add(ie(.05,.05,1.5,"#8a5a33",e,.75,0,5));i.add(Rt(1.9,.03,.03,"#555",0,1.3,0));const t=new At;for(let e=0;e<5;e++){const n=-.75+e*.375;i.add(ye(.22,"#4a8a3a",n,1.1,0));const s=new At;for(const[a,r,o]of[[0,0,.05],[.07,.1,.02],[-.07,.1,.02],[0,.2,0]])s.add(ye(.075,"#7a3b8f",a,-r,o,6));s.position.set(n,.8,.12),t.add(s)}return i.add(t),{g:i,set:e=>{t.visible=e>=1}}}function q1(){const i=new At;for(const[e,n,s,a]of[[0,.4,0,.38],[.28,.32,.1,.28],[-.26,.34,-.05,.3],[.05,.62,.05,.28]])i.add(ye(a,"#3f7a3a",e,n,s));const t=new At;for(const[e,n,s]of[[.15,.85,.1],[-.15,.78,0],[.32,.6,.2],[-.34,.6,.1]])t.add(ye(.1,"#8fcf5a",e,n,s,6));return i.add(t),{g:i,set:e=>{t.visible=e>=1}}}const j1={papa:[B1,[[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]]],maiz:[V1,[[-.65,-.55],[0,-.55],[.65,-.55],[-.65,.5],[0,.5],[.65,.5]]],tomate:[G1,[[-.55,-.5],[.55,-.5],[-.55,.55],[.55,.55]]],girasol:[H1,[[-.55,-.5],[.55,-.5],[-.55,.5],[.55,.5]]],trigo:[W1,[[-.6,-.55],[.6,-.55],[-.6,.55],[.6,.55]]],uva:[X1,[[0,-.5],[0,.55]]],yerba:[q1,[[-.55,-.5],[.55,-.5],[-.55,.55],[.55,.55]]]};class $1{constructor(t){this.index=t,this.crop="";const{x:e,z:n}=_l(t);this.g=new At,this.g.position.set(e,0,n);const s=Tt("#7a5636"),a=Tt("#4a3220");this.dry=s,this.wet=a,this.soil=new J(Rt(tn,.3,tn,"#7a5636").geometry,s),this.soil.position.y=.15,this.g.userData.plot=t,this.g.add(this.soil);const r="#9a6a3a";for(const[o,c,l,h]of[[tn+.2,.14,0,-tn/2],[tn+.2,.14,0,tn/2],[.14,tn,-tn/2,0],[.14,tn,tn/2,0]])this.g.add(Rt(o,.36,c,r,l,.18,h));this.plants=new At,this.plants.position.y=.3,this.g.add(this.plants),this.items=[],this.mark=Wa(.28,.28,.28,"#ffd45a",0,2.5,0),this.mark.rotation.set(.6,0,.6),this.mark.visible=!1,this.g.add(this.mark),this.ring=new J(new bn(tn*.56,tn*.62,4),new qt({color:"#fff",transparent:!0,opacity:0,side:_e,depthWrite:!1})),this.ring.rotation.set(-Tn/2,0,Tn/4),this.ring.position.y=.38,this.g.add(this.ring)}setCrop(t){if(t===this.crop||(this.crop=t,this.plants.clear(),this.items=[],!t))return;const[e,n]=j1[t];for(const[s,a]of n){const r=e();r.g.position.set(s,0,a),this.plants.add(r.g),this.items.push(r)}}update(t,e,n){if(this.setCrop(t.empty?"":t.crop.id),t.empty)this.soil.material=this.dry;else{const s=t.prog,a=.18+.82*Math.min(1,s/.92);for(let r=0;r<this.items.length;r++){const o=this.items[r];o.g.scale.setScalar(a),o.g.rotation.z=Math.sin(e*1.6+r+this.index)*.035*a,o.set(s)}this.soil.material=t.water>0&&!t.ready?this.wet:this.dry}this.mark.visible=!t.empty&&t.ready,this.mark.visible&&(this.mark.position.y=2.3+Math.sin(e*4+this.index)*.15,this.mark.rotation.y=e*2),this.ring.material.opacity+=((n?.85:0)-this.ring.material.opacity)*.3}}function Y1(){const i=new At,t=ye(.3,"#f4efe6",0,.4,0);t.scale.set(.9,.85,1.2);const e=ye(.15,"#f4efe6",0,.72,.28,8),n=He(.05,.14,"#f08a2a",0,.7,.44,5);n.rotation.x=Tn/2;const s=ye(.06,"#d9402f",0,.88,.28,6),a=He(.14,.34,"#e8e0d0",0,.62,-.32,6);a.rotation.x=-.9;const r=ie(.025,.025,.2,"#f08a2a",-.1,.1,.02,4),o=ie(.025,.025,.2,"#f08a2a",.1,.1,.02,4);return i.add(t,e,n,s,a,r,o),i.userData={head:e,legs:[r,o]},i}function J1(i){const t=new At;i.add(t),i.background=new ee("#9fd3f2"),i.fog=new qi("#bfe1f5",45,95);const e=new sr("#dff0ff","#6f8a4a",1.5),n=new yi("#fff3d6",2.2);n.position.set(-14,22,12),t.add(e,n);const s=new J(new nn(120,40),Tt("#8fbd5a"));s.rotation.x=-Tn/2,t.add(s);const a=new J(new xn(2.6,40),Tt("#c9a876"));a.rotation.x=-Tn/2,a.position.set(0,.02,26),t.add(a);const r=new J(new nn(15,32),Tt("#7fae4f"));r.rotation.x=-Tn/2,r.position.set(0,.015,4),t.add(r);const o=sf(42);for(let I=0;I<70;I++){const F=(o()-.5)*60,G=(o()-.5)*44+4;Math.abs(F)<9&&G>-6&&G<12||t.add(He(.12,.45,o()>.8?"#f6d65a":"#6fa33f",F,.22,G,4))}const c=new At;c.add(Rt(5.4,3,4,"#f2e8d0",0,1.5,0),nf(6.2,4.8,2,"#b5532f",0,4,0),Rt(1,2,.12,"#7a4a28",0,1,2.03),Rt(1.1,1.1,.1,"#a8d4f0",-1.7,1.7,2.03),Rt(1.1,1.1,.1,"#a8d4f0",1.7,1.7,2.03),Rt(.6,1.8,.6,"#9a8a7a",1.8,4.2,-.8)),c.position.set(-9.5,0,-9),c.rotation.y=.35,t.add(c);const l=new At;l.add(Rt(7,3.6,5.2,"#c9382f",0,1.8,0),xl(7,5.2,2.2,"#8a95a0",0,3.6,0),Rt(2.4,2.8,.14,"#f2ece0",0,1.4,2.65),Rt(.14,2.8,.15,"#f2ece0",0,1.4,2.72));const h=Rt(2.7,.14,.15,"#f2ece0",0,1.4,2.72);h.rotation.z=.8;const d=Rt(2.7,.14,.15,"#f2ece0",0,1.4,2.72);d.rotation.z=-.8,l.add(h,d),l.position.set(10,0,-10),l.rotation.y=-.3,t.add(l);const u=new At;for(const[I,F]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const G=ie(.07,.1,8,"#9aa3ad",I*.6,4,F*.6,5);G.rotation.z=-I*.1,G.rotation.x=F*.1,u.add(G)}for(const I of[2,4,6])u.add(Rt(1.4-I*.06,.07,1.4-I*.06,"#9aa3ad",0,I,0));const f=new At;f.position.set(0,8.2,.55);for(let I=0;I<12;I++){const F=Rt(.9,.34,.03,"#dfe6ec",0,0,0);F.position.set(Math.cos(I/12*Tn*2)*.9,Math.sin(I/12*Tn*2)*.9,0),F.rotation.z=I/12*Tn*2+Tn/2,f.add(F)}f.add(ie(.18,.18,.3,"#6b7480",0,0,0,8)),f.children[f.children.length-1].rotation.x=Tn/2,u.add(f,Rt(.1,.5,1.8,"#c9382f",0,8.3,-1.1),ie(.9,.9,1.1,"#6a8fb0",3,.55,1,12)),u.position.set(-15,0,-2),u.rotation.y=.5,t.add(u);for(let I=0;I<9;I++){const F=-22+I*5.5+o()*2,G=-17-o()*3,Z=ye(1.1,"#3f7a3a",F,4.5,G);Z.scale.set(.7,3.2,.7),t.add(ie(.18,.22,1.5,"#6b4a2a",F,.75,G,5),Z)}const g=new At;g.add(ie(.7,1.1,2.2,"#6b4a2a",0,1.1,0,7),ye(3.4,"#4f8a3a",0,4.1,0),ye(2.4,"#5f9a44",1.8,3.6,1),ye(2.3,"#5f9a44",-1.7,3.5,-.8)),g.position.set(15,0,3),t.add(g);const v=new At;v.add(Rt(2.6,1.5,2,"#c58a52",0,.75,0),xl(2.6,2,.9,"#a65a38",0,1.5,0),Rt(.6,.7,.1,"#5a3a1e",0,.45,1.03)),v.position.set(14,0,9),v.rotation.y=-.4,t.add(v);const m=new At;for(let I=0;I<=8;I++){const F=I/8*6-3;m.add(ie(.06,.06,.9,"#8a5a33",F,.45,2.7,4),ie(.06,.06,.9,"#8a5a33",F,.45,-2.7,4))}for(let I=1;I<6;I++){const F=I/6*5.4-2.7;m.add(ie(.06,.06,.9,"#8a5a33",3,.45,F,4),ie(.06,.06,.9,"#8a5a33",-3,.45,F,4))}for(const I of[.35,.7])m.add(Rt(6.1,.06,.06,"#b07a45",0,I,2.7),Rt(6.1,.06,.06,"#b07a45",0,I,-2.7),Rt(.06,.06,5.4,"#b07a45",3,I,0),Rt(.06,.06,5.4,"#b07a45",-3,I,0));m.position.set(14.5,0,14),t.add(m);const p=[];let _=new At;t.add(_);const b=new At;b.add(Rt(3.4,.9,1.4,"#9a6a3a",0,.45,0));for(const I of[-1,1])b.add(ie(.07,.07,2.6,"#7a4a28",I*1.6,1.3,.6,5),ie(.07,.07,2.6,"#7a4a28",I*1.6,1.3,-.6,5));for(let I=0;I<8;I++){const F=Rt(.44,.08,1.9,I%2?"#f4f1ea":"#75aadb",-1.54+I*.44,2.65,0);F.rotation.x=.18,b.add(F)}for(const[I,F]of[[-1,"#d9402f"],[0,"#f2c230"],[1,"#7a3b8f"]]){b.add(Rt(.7,.3,.7,"#b07a45",I,1.05,0));for(let G=0;G<4;G++)b.add(ye(.14,F,I-.2+G%2*.4,1.28,-.18+Math.floor(G/2)*.36,6))}b.position.set(-11,0,7),b.rotation.y=.9,t.add(b);const M=[],P=(I,F,G,Z,H,nt)=>{const q=Bl(I,F,G,!1);return q.position.set(Z,H,nt),q.scale.multiplyScalar(.8),t.add(q),M.push(q),q};P("Feria","Vendé tu cosecha","#75aadb",-11,4.4,7),P("Galpón","Mejoras","#c9382f",10,6.4,-10);const C=[];for(let I=0;I<6;I++){const F=new At;for(let G=0;G<4;G++){const Z=ye(2+o()*1.6,"#ffffff",G*2.2,o(),o()*1.4,8);Z.scale.y=.55,Z.material=new qt({color:"#ffffff",transparent:!0,opacity:.92}),F.add(Z)}F.position.set(-50+I*20,24+o()*6,-30-o()*20),t.add(F),C.push(F)}const E=[],U=new At;t.add(U),c.userData.pick="galpon",l.userData.pick="galpon",b.userData.pick="feria";const w=[c,l,b];function x(I){for(;E.length<I.plots.length;){const F=new $1(E.length);E.push(F),U.add(F.g)}}function N(I){if(p.length!==I){t.remove(_),_=new At,t.add(_),p.length=0;for(let F=0;F<I;F++){const G=Y1(),Z=11.7+o()*5.6,H=11.5+o()*5;G.position.set(Z,0,H),G.userData.target=new B(Z,0,H),G.userData.wait=o()*2,_.add(G),p.push(G)}}}return{root:t,plots:E,pickables:w,plotMeshes:()=>E.map(I=>I.soil),sync(I){x(I),N(I.up.gallinas)},update(I,F,G,Z){for(let H=0;H<E.length;H++)E[H].update(G[H]||{empty:!0},F,H===Z);f.rotation.z-=I*1.4,C.forEach((H,nt)=>{H.position.x+=I*(.8+nt*.1),H.position.x>70&&(H.position.x=-70)});for(const H of p){const nt=H.userData,q=nt.target.clone().sub(H.position);q.y=0,q.length()>.12?(q.normalize(),H.position.addScaledVector(q,I*1.1),H.rotation.y=Math.atan2(q.x,q.z),nt.legs[0].rotation.x=Math.sin(F*14)*.7,nt.legs[1].rotation.x=-Math.sin(F*14)*.7,nt.head.position.z=.28+Math.sin(F*14)*.03):(nt.wait-=I,nt.head.position.y=.72-(Math.sin(F*8+H.id)>.6?.2:0),nt.wait<=0&&(nt.target.set(11.7+Math.random()*5.6,0,11.5+Math.random()*5),nt.wait=1+Math.random()*3,nt.head.position.y=.72))}},dispose(){i.remove(t),rf(t);for(const I of M)I.userData.tex.dispose(),I.material.dispose();i.fog=null}}}const ka=Math.PI,K1=8.5,Fa=[-1.5,-.5,.5,1.5].map(i=>i*(tn+er)),hc=i=>of-tn/2-er/2+i*(tn+er),ns=()=>Date.now()+0;function Z1({onExit:i}){const t=new ga,e=new Je(40,innerWidth/innerHeight,.5,300),n=J1(t),s=new af(t),a=document.getElementById("gl"),r=new Yx,o=new Ut;let c=!1,l="maiz",h=-1,d=0,u=[],f=0,g="",v=0,m="";const p=[];let _=Mi(Ot.profile.look);_.scale.setScalar(1.05),t.add(_);const b={kind:"h",k:0};_.position.set(Fa[1],0,hc(0));let M=ka,P=[],C=null;const E=new J(new nn(.6,18),new qt({color:0,transparent:!0,opacity:.25}));E.rotation.x=-ka/2,E.position.y=.04,t.add(E);let U=JSON.stringify(Ot.profile.look);const w=y("b",{class:"ch-coins"}),x=y("span",{class:"ch-lvl"}),N=y("div",{class:"ch-inv"}),I=y("div",{class:"ch-seeds",role:"listbox","aria-label":"Semillas"}),F=y("p",{class:"ch-tip"}),G=y("button",{type:"button",class:"btn sm ch-egg",hidden:!0,onclick:()=>D()}),Z=y("div",{class:"ch-hud"},y("div",{class:"ch-top"},y("button",{type:"button",class:"btn sm",text:"← Salir",onclick:()=>{c||i()}}),y("div",{class:"ch-pill"},w," monedas"),x,y("span",{class:"ch-gap"}),y("button",{type:"button",class:"btn sm",text:"Feria",onclick:()=>ut()}),y("button",{type:"button",class:"btn sm",text:"Mejoras",onclick:()=>wt()})),N,y("div",{class:"ch-bottom"},F,I,y("div",{class:"ch-actions"},y("button",{type:"button",class:"btn sm",text:"Sembrar todo",onclick:()=>et("plant")}),y("button",{type:"button",class:"btn sm",text:"💧 Regar todo",onclick:()=>et("water")}),y("button",{type:"button",class:"btn sm primary",text:"🧺 Cosechar todo",onclick:()=>et("harvest")}),G)));_n(),Jn().append(Z);function H(){const z=Ot.level,Y=Ot.profile.coins;I.replaceChildren(...kl.map(it=>{const ft=z<it.lvl;return y("button",{type:"button",class:"seed"+(ft?" locked":""),role:"option","aria-selected":l===it.id?"true":"false",title:ft?`Se desbloquea en el nivel ${it.lvl}`:`${it.name}: tarda ${it.mins} min, vale ${it.sell}`,onclick:()=>{if(ft){ge(`${it.name} se desbloquea en el nivel ${it.lvl}`),Ht.unlock(),Ht.nope();return}l=it.id,Ht.unlock(),Ht.pop(),H()}},y("i",{class:"dot",style:{background:it.color}}),y("b",{text:it.name}),y("small",{text:ft?`Nivel ${it.lvl}`:`${it.seed} 🪙`+(Y<it.seed?" ✗":"")}))}))}function nt(){const z=Ot.profile;w.textContent=String(z.coins),x.textContent=`Nivel ${Ot.level}`;const Y=z.farm.inv,it=Object.keys(Y);if(N.replaceChildren(...it.length?it.map(ft=>y("span",{class:"ch-item"},ec(ft)," ",y("b",{text:"x"+Y[ft]}))):[y("span",{class:"ch-item muted",text:"Mochila vacía"})]),G.hidden=z.farm.up.gallinas<1,H(),U!==JSON.stringify(z.look)){U=JSON.stringify(z.look);const ft=_;_=Mi(z.look),_.scale.setScalar(1.05),_.position.copy(ft.position),_.rotation.y=ft.rotation.y,t.add(_),Zn(ft)}}const q=Ot.on(()=>{c||nt()});function ht(z){z&&z.level&&ge(`¡Subiste al nivel ${z.level}! +1 cofre`),z&&z.kits&&z.kits.length&&ge(`Casaca nueva: ${z.kits[0].name}`)}const vt=z=>{const{x:Y,z:it}=_l(z);return new B(Y,2.4,it)},St=(z,Y)=>{ge(z),Ht.unlock(),Ht.nope(),Y!=null&&s.add("✗","#ff8a7a",vt(Y))};function Vt(z){const Y=Ot.profile.farm,it=ns(),ft=Ya(Y,z,it);if(ft.empty){const gt=ms(l),Nt=Ot.edit(Ct=>oh(Ct,z,l,it));if(!Nt.ok)return St(Nt.reason,z);Ht.dig(),s.add(`-${gt.seed}`,"#ffd45a",vt(z)),m="dig"}else if(ft.ready){const gt=Ot.edit(Nt=>Nd(Nt,z,it));if(!gt.ok)return St(gt.reason,z);Ht.pick(),s.add(`+1 ${gt.crop.name}`,"#9be86a",vt(z)),m="pick",ht(gt)}else if(ft.canWater){const gt=Ot.edit(Nt=>Ud(Nt,z,it));if(!gt.ok)return St(gt.reason,z);Ht.splash(),s.add("💧","#8fd0ff",vt(z)),m="water"}else s.add(ch(ft.remaining),"#ffffff",vt(z)),m="wait";v=.5}function et(z){Ht.unlock();const Y=ns();let it;if(z==="harvest"){if(it=Ot.edit(ft=>c_(ft,Y)),!it.ok)return St(it.reason);Ht.pick(),ge("Cosechaste "+Object.entries(it.got).map(([ft,gt])=>`${gt} ${ec(ft)}`).join(", ")),ht(it)}else if(z==="water"){if(it=Ot.edit(ft=>l_(ft,Y)),!it.ok)return St(it.reason);Ht.splash(),ge(`Regaste ${it.n} parcela${it.n>1?"s":""}`)}else{const ft=ms(l);let gt=0,Nt="";if(Ot.edit(Ct=>{for(let L=0;L<Ct.farm.plots.length;L++){const S=oh(Ct,L,l,Y);if(S.ok)gt++;else if(Ct.farm.plots[L].c===""){Nt=S.reason;break}}}),!gt)return St(Nt||"No hay parcelas libres");Ht.dig(),ge(`Sembraste ${gt} de ${ft.name}`)}v=.6,m=z==="harvest"?"pick":z==="water"?"water":"dig"}function D(){Ht.unlock();const z=Ot.edit(Y=>m_(Y,ns()));if(!z.ok)return St(z.reason);Ht.pick(),ge(`Recogiste ${z.n} huevo${z.n>1?"s":""}`)}function W(z){const Y=Math.floor(z/3),it=_l(z).x,ft=hc(Y+1),gt=_.position,Nt=[],Ct=b.kind==="h";if(Ct&&b.k===Y+1)Nt.push([it,ft]);else if(Ct){let L=0,S=1e9;Fa.forEach((X,rt)=>{const dt=Math.abs(gt.x-X)+Math.abs(X-it);dt<S&&(S=dt,L=rt)}),Nt.push([Fa[L],hc(b.k)],[Fa[L],ft],[it,ft])}else Nt.push([Fa[b.j],ft],[it,ft]);return{pts:Nt,k:Y+1}}function tt(){if(C||!p.length)return;const z=p.shift(),Y=W(z);P=Y.pts.map(([it,ft])=>new B(it,0,ft)),C={i:z,k:Y.k}}function ut(){Ht.unlock();const z=y("div",{class:"ch-dlg"}),Y=()=>{const Nt=ns(),Ct=Ot.profile.farm.inv,L=Object.keys(Ct),S=L.map(rt=>{const dt=zd(rt,Nt),lt=al(rt,Nt),zt=Math.round((dt-1)*100);return y("div",{class:"ch-row"},y("span",{class:"ch-name",text:ec(rt)}),y("span",{class:"muted",text:`x${Ct[rt]}`}),y("span",{class:"ch-price "+(zt>=5?"up":zt<=-5?"down":""),text:`${lt} 🪙 ${zt>0?"▲":zt<0?"▼":""}${zt?Math.abs(zt)+"%":""}`}),y("button",{type:"button",class:"btn ghost sm",text:"Vender 1",onclick:()=>gt(()=>rl(ft(),rt,Nt,1),Y)}),y("button",{type:"button",class:"btn ghost sm",text:"Todo",onclick:()=>gt(()=>rl(ft(),rt,Nt),Y)}))}),X=L.reduce((rt,dt)=>rt+Ct[dt]*al(dt,Nt),0);z.replaceChildren(y("p",{class:"muted",text:"Los precios cambian cada día. Fijate qué conviene vender hoy."}),...S.length?S:[y("p",{class:"lead",text:"No tenés nada para vender. Sembrá y cosechá primero."})],S.length?y("div",{class:"row-actions"},y("button",{type:"button",class:"btn primary",text:`Vender todo (+${X} 🪙)`,onclick:()=>gt(()=>d_(ft(),Nt),Y)})):null,y("h4",{class:"ch-h",text:"Cofre de la feria"}),y("div",{class:"ch-row"},y("span",{class:"ch-name",text:"Un cofre con casacas"}),y("span",{class:"ch-price",text:`${Yr} 🪙`}),y("button",{type:"button",class:"btn ghost sm",text:"Comprar",onclick:()=>{const rt=Ot.edit(dt=>g_(dt));if(!rt.ok)return St(rt.reason);Ht.coin(),ge("Compraste un cofre: abrilo desde el mundo libre"),Y()}})))};let it=null;const ft=()=>it,gt=(Nt,Ct)=>{const L=Ot.edit(S=>(it=S,Nt()));if(!L.ok)return St(L.reason);Ht.coin(),s.add(`+${L.gain} 🪙`,"#ffd45a",new B(-11,4,7)),ge(`Vendiste ${L.n} por ${L.gain} monedas`),Ct()};Y(),yn(y("div",null,y("header",{class:"dlg-head"},y("h2",{text:"La Feria"}),y("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>Ee()})),z),{})}function wt(){Ht.unlock();const z=y("div",{class:"ch-dlg"}),Y=()=>{const it=Ot.profile.farm,ft=Ot.profile.coins;z.replaceChildren(...Ld.map(gt=>{const Nt=_o[gt],Ct=it.up[gt],L=kd(it,gt);return y("div",{class:"ch-up"},y("div",null,y("b",{text:Nt.name}),y("p",{class:"muted",text:Nt.desc}),y("div",{class:"pips"},...Array.from({length:Nt.max},(S,X)=>y("i",{class:X<Ct?"on":""})))),L==null?y("span",{class:"pill live",text:"Al máximo"}):y("button",{type:"button",class:"btn "+(ft>=L?"primary":"ghost"),text:`${L} 🪙`,onclick:()=>{const S=Ot.edit(X=>f_(X,gt,ns()));if(!S.ok)return St(S.reason);Ht.chime(),ge(`Mejoraste: ${Nt.name}`),Y()}}))}))};Y(),yn(y("div",null,y("header",{class:"dlg-head"},y("h2",{text:"El Galpón"}),y("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>Ee()})),z),{})}function _t(z){const Y=a.getBoundingClientRect();o.set((z.clientX-Y.left)/Y.width*2-1,-((z.clientY-Y.top)/Y.height)*2+1),r.setFromCamera(o,e);const it=r.intersectObjects([...n.plots.map(ft=>ft.g),...n.pickables],!0);for(const ft of it){let gt=ft.object;for(;gt;){if(gt.userData&&gt.userData.plot!=null)return{plot:gt.userData.plot};if(gt.userData&&gt.userData.pick)return{pick:gt.userData.pick};gt=gt.parent}}return null}const It=z=>{if(z.target!==a)return;Ht.unlock();const Y=_t(z);Y&&(Y.pick==="feria"?ut():Y.pick==="galpon"?wt():Y.plot!=null&&(p.length<8&&p.push(Y.plot),h=Y.plot,d=performance.now()+1500))},Qt=z=>{if(z.pointerType!=="mouse"||z.target!==a)return;const Y=_t(z);h=Y&&Y.plot!=null?Y.plot:-1,d=0,a.style.cursor=Y?"pointer":""};addEventListener("pointerdown",It),addEventListener("pointermove",Qt);function Wt(){const z=innerWidth/innerHeight;e.aspect=z;const Y=z<1.2?17/(2*Math.tan(ka/9)*z):0,it=Math.max(31,Y);e.position.set(0,it*.74,it*.7+4),e.lookAt(0,0,2.6),e.updateProjectionMatrix()}function mt(z,Y){const it=ns(),ft=Ot.profile.farm;n.sync(ft),u=ft.plots.map((X,rt)=>Ya(ft,rt,it));const gt=d&&performance.now()>d?-1:h;n.update(z,Y,u,gt),s.update(z);const Nt={up:ft.up,eggs:Object.assign({},ft.eggs)};if(Ol(Nt,it),f=Nt.eggs.n,G.textContent=`🥚 Huevos (${f})`,G.classList.toggle("primary",f>0),gt>=0&&u[gt]){const X=u[gt];if(X.empty){const rt=ms(l);g=`Parcela libre · tocá para sembrar ${rt.name} (${rt.seed} 🪙)`}else X.ready?g=`${X.crop.name} listo · tocá para cosechar`:g=`${X.crop.name} · ${Math.floor(X.prog*100)}% · faltan ${ch(X.remaining)} · regado ${X.water}/${Fl}${X.canWater?" · tocá para regar":""}`}else g="Tocá una parcela: siembra, riega o cosecha según el estado. Elegí la semilla abajo.";F.textContent!==g&&(F.textContent=g),tt();const Ct=_.userData;let L=0;if(P.length){const X=P[0],rt=X.x-_.position.x,dt=X.z-_.position.z,lt=Math.hypot(rt,dt),zt=K1*z;if(lt<=zt){if(_.position.x=X.x,_.position.z=X.z,P.shift(),!P.length&&C){b.kind="h",b.k=C.k,M=ka;const Pt=C.i;C=null,Vt(Pt)}}else _.position.x+=rt/lt*zt,_.position.z+=dt/lt*zt,M=Math.atan2(rt,dt),L=1}let S=Math.atan2(Math.sin(M-_.rotation.y),Math.cos(M-_.rotation.y));if(_.rotation.y+=S*(1-Math.exp(-14*z)),ys(_,Y,L),v>0){v-=z;const X=Math.sin((1-Math.max(0,v)/.5)*ka);Ct.body.rotation.x=.55*X,Ct.arms[0].rotation.x=-1.3*X,Ct.arms[1].rotation.x=-1.3*X,m==="pick"&&(Ct.arms[0].rotation.x=-2.4*X,Ct.arms[1].rotation.x=-2.4*X,Ct.body.rotation.x=.1*X)}E.position.x=_.position.x,E.position.z=_.position.z}if(Wt(),n.sync(Ot.profile.farm),!Ot.profile.farm.started)Ot.edit(z=>{o_(z)}),ge("¡Bienvenido a la chacra! Te regalamos 40 monedas para arrancar.");else{const z=ns(),Y=Ot.profile.farm.plots.filter((it,ft)=>Ya(Ot.profile.farm,ft,z).ready).length;Y&&ge(`Tenés ${Y} parcela${Y>1?"s":""} lista${Y>1?"s":""} para cosechar`)}return nt(),{scene:t,camera:e,update:mt,resize(){Wt()},dispose(){c=!0,q(),removeEventListener("pointerdown",It),removeEventListener("pointermove",Qt),a.style.cursor="",Ee(),s.dispose(),n.dispose(),Zn(_),t.remove(E),_n()}}}const Zs=Math.PI,Qr=5,Q1=[[[-168,66],[-140,70],[-120,72],[-95,72],[-80,70],[-62,60],[-55,50],[-66,44],[-76,35],[-81,25],[-97,26],[-105,22],[-118,32],[-124,42],[-125,49],[-140,59],[-155,58]],[[-105,22],[-97,18],[-90,16],[-83,9],[-78,8],[-84,8],[-92,14],[-100,18]],[[-55,60],[-45,60],[-20,70],[-20,82],[-50,83],[-70,78],[-58,70]],[[-78,8],[-72,12],[-60,10],[-50,0],[-35,-6],[-39,-15],[-48,-26],[-58,-36],[-65,-42],[-68,-52],[-72,-54],[-75,-46],[-72,-30],[-70,-18],[-76,-12],[-81,-5],[-78,2]],[[-10,36],[-9,43],[-2,48],[5,52],[8,57],[12,56],[20,60],[30,70],[40,68],[40,55],[30,45],[28,41],[20,40],[12,38],[8,44],[3,43],[-5,36]],[[-17,21],[-10,30],[-5,36],[10,37],[32,31],[43,12],[51,12],[40,-5],[40,-15],[33,-26],[20,-35],[12,-17],[9,-1],[-8,4],[-17,14]],[[30,45],[40,55],[40,68],[70,73],[110,77],[140,72],[170,68],[180,65],[160,55],[142,45],[130,35],[122,30],[122,22],[108,20],[105,10],[100,2],[98,16],[92,22],[80,10],[73,18],[66,25],[57,26],[50,30],[44,12],[35,30],[28,41]],[[114,-22],[122,-18],[136,-12],[142,-11],[146,-19],[153,-26],[150,-37],[140,-38],[130,-32],[115,-34]],[[130,31],[135,34],[140,36],[142,40],[141,45],[138,38],[134,34]],[[-6,50],[-5,57],[0,55],[1,52]],[[-180,-72],[180,-72],[180,-90],[-180,-90]]];function ty(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,0,512);s.addColorStop(0,"#2a78c0"),s.addColorStop(1,"#1d5a9a"),n.fillStyle=s,n.fillRect(0,0,1024,512),n.strokeStyle="rgba(255,255,255,.08)",n.lineWidth=1;for(let r=-180;r<=180;r+=30){const o=(r+180)/360*1024;n.beginPath(),n.moveTo(o,0),n.lineTo(o,512),n.stroke()}for(let r=-60;r<=60;r+=30){const o=(90-r)/180*512;n.beginPath(),n.moveTo(0,o),n.lineTo(1024,o),n.stroke()}for(const r of Q1)n.beginPath(),r.forEach(([o,c],l)=>{const h=(o+180)/360*1024,d=(90-c)/180*512;l?n.lineTo(h,d):n.moveTo(h,d)}),n.closePath(),n.fillStyle="#74b85a",n.fill(),n.lineWidth=3,n.strokeStyle="#4f8f3e",n.stroke();const a=new Rn(e);return a.colorSpace=ke,a.anisotropy=4,a}function ey(i,t,e=Qr){const n=i*Zs/180,s=t*Zs/180;return new B(Math.cos(n)*Math.cos(s)*e,Math.sin(n)*e,-Math.cos(n)*Math.sin(s)*e)}function ny(i){const t=new At,e=new At;t.add(e),i.add(t);const n=ty(),s=new J(new re(Qr,56,40),new di({map:n}));e.add(s);const a=new J(new re(Qr*1.06,40,28),new qt({color:"#8ec8ff",transparent:!0,opacity:.14,side:Ke,depthWrite:!1}));t.add(a);const r=new Map;for(const u of ds){const f=ey(u.lat,u.lon,1),g=new At;g.position.copy(f.clone().multiplyScalar(Qr)),g.quaternion.setFromUnitVectors(new B(0,1,0),f);const v=new J(new te(.03,.03,.5,6),new qt({color:"#ffffff"}));v.position.y=.25;const m=new J(new re(.16,12,10),new qt({color:u.home?"#75aadb":"#f6b40e"}));m.position.y=.55;const p=new J(new bn(.22,.3,24),new qt({color:"#fff",transparent:!0,opacity:.8,side:_e,depthWrite:!1}));p.rotation.x=-Zs/2,p.position.y=.04,g.add(v,m,p),e.add(g),r.set(u.id,{g,head:m,ring:p})}let o=0,c=0,l=null,h=!0;return{root:t,focus(u){l=u?u.id:null,h=!u,u&&(o=u.lat*Zs/180*.9,c=-Zs/2-u.lon*Zs/180)},update(u,f){h&&(c-=u*.12);const g=Math.atan2(Math.sin(c-e.rotation.y),Math.cos(c-e.rotation.y));e.rotation.y+=g*Math.min(1,u*4),t.rotation.x+=(o-t.rotation.x)*Math.min(1,u*4);for(const[v,m]of r){const p=v===l;m.head.scale.setScalar(p?1.5+Math.sin(f*6)*.2:1),m.ring.scale.setScalar(p?1.6+Math.sin(f*5)*.3:1)}},dispose(){i.remove(t),n.dispose(),t.traverse(u=>{u.geometry&&u.geometry.dispose(),u.material&&u.material.dispose()})}}}const Ge=Math.PI,dc=30,iy=i=>{let t=7;for(const e of i)t=t*31+e.charCodeAt(0)>>>0;return t||1},sy=i=>new qt({color:i});function Oa(i,t,e,n,s,a,r){const o=new J(new xn(i,t),r?sy(e):Tt(e));return o.rotation.x=-Ge/2,o.position.set(n,s,a),o.userData.ownGeo=!0,o}function is(i,t,e,n,s,a,r,o="#a8d4f0"){const c=new At;c.add(Rt(e,s,n,a,0,s/2,0)),r&&c.add(Rt(e+.3,.3,n+.3,r,0,s+.15,0));const l=Math.max(1,Math.floor(s/3));for(let h=0;h<l;h++)c.add(Rt(e*.8,.7,.08,o,0,1.8+h*3,n/2+.03));return c.position.set(i,0,t),c.userData.occ=!0,c}function Vr(i,t,e=1,n="#4f9a3a"){const s=new At;return s.add(ie(.18*e,.24*e,1.6*e,"#6b4a2a",0,.8*e,0,6),ye(1.1*e,n,0,2.2*e,0,8)),s.position.set(i,0,t),s}function ro(i,t,e=1){const n=new At,s=ie(.14*e,.22*e,4*e,"#8a6a42",0,2*e,0,6);s.rotation.z=.12,n.add(s);for(let a=0;a<6;a++){const r=Rt(2*e,.05,.4*e,"#3f9a3a",0,0,0);r.position.set(Math.cos(a*1.05)*.9*e+.4*e,4.1*e,Math.sin(a*1.05)*.9*e),r.rotation.y=-a*1.05,r.rotation.z=-.35,n.add(r)}return n.position.set(i,0,t),n}function cf(i,t,e=1){const n=new At;return n.add(He(.8*e,4*e,"#2f6a3a",0,2.2*e,0,8),ie(.12,.12,.4,"#5a3a1e",0,.2,0,5)),n.position.set(i,0,t),n}function lf(i,t,e=1){const n=new At;return n.add(ie(.2*e,.28*e,2*e,"#5a3a2a",0,e,0,6),ye(1.3*e,"#f6b8d0",0,2.8*e,0,8),ye(.9*e,"#f2a0c0",.9*e,2.3*e,.4,8),ye(.9*e,"#f8c8da",-.8*e,2.4*e,-.4,8)),n.position.set(i,0,t),n}const ay={rosario(i){const t=new At;i.add(Oa(160,40,"#4a86b8",0,.03,-42)),t.add(Rt(18,.6,10,"#d8d2c4",0,.3,0),Rt(15,.6,8,"#e0dacd",0,.9,-.5)),t.add(Rt(3.2,22,3.2,"#e8e2d4",0,11.7,-2.5),Rt(2.2,3,2.2,"#e8e2d4",0,24.2,-2.5));const e=Rt(6,3.4,9,"#d4ccba",0,2.8,2);e.rotation.x=-.1,t.add(e),t.add(Rt(4,6,5,"#dcd5c4",0,4.5,-1));for(const a of[-5,5])t.add(Rt(1.6,5,5,"#dcd5c4",a,3.5,.2));t.add(ie(.1,.1,9,"#b8b8b8",0,29,-2.5,5));const n=new At;n.add(Rt(.05,.9,4,"#75aadb",0,.9,0),Rt(.05,.9,4,"#ffffff",0,0,0),Rt(.05,.9,4,"#75aadb",0,-.9,0),Wa(.07,.6,.6,"#f6b40e",.04,0,0)),n.position.set(0,32,-.5),t.add(n);const s=[];for(let a=0;a<3;a++){const r=new At;r.add(Rt(3,.7,1.2,a%2?"#e8e4da":"#c9382f",0,.4,0),Rt(.2,2,.2,"#888",0,1.7,0),Rt(1.6,1.6,.05,"#fff",.6,1.8,0)),r.position.set(-30+a*24,0,-30-a*3),t.add(r),s.push(r)}for(let a=0;a<7;a++)t.add(is(-26+a*9,-16-a%2*3,5+a%3,5,8+a*5%12,["#e8dcc6","#d4c8b0","#c9d2dc"][a%3],"#9a8f80"));return{g:t,colliders:[{x:0,z:-.5,r:7.5}],photo:{x:0,z:14},update(a,r){n.rotation.y=Math.sin(r*3)*.12,s.forEach((o,c)=>{o.position.x+=a*(1.2+c*.4),o.position.x>60&&(o.position.x=-60)})}}},buenosaires(i){const t=new At;i.add(Oa(160,14,"#4a4a54",0,.03,-8,!1),Oa(14,160,"#4a4a54",0,.035,0,!1));for(let o=-14;o<=14;o++)t.add(Oa(1.6,.2,"#e8e4da",o*4.2,.05,-8,!0));const e=ie(.8,1.6,20,"#e6e1d6",0,10.5,0,4);e.rotation.y=Ge/4,t.add(e);const n=He(.85,2.4,"#e6e1d6",0,22.7,0,4);n.rotation.y=Ge/4,t.add(n),t.add(Rt(3.4,1,3.4,"#d4cfc4",0,.5,0),Rt(2.6,.6,2.6,"#d4cfc4",0,1.3,0)),t.add(Wa(.7,2.6,.7,"#f4f0d8",0,17,0));const s=["#e8dcc6","#c9d2dc","#e0b9a0","#d4c8b0","#b8c4d4"];for(let o=0;o<9;o++)t.add(is(-34+o*8.5,-22-o%2*2,7,6,10+o*7%16,s[o%5],"#9a8f80")),t.add(is(-34+o*8.5,20,7,6,8+o*5%12,s[(o+2)%5],"#9a8f80"));const a=new At;a.add(Rt(5,2,2,"#d9402f",0,1.2,0),Rt(4.6,.6,2.05,"#a8d4f0",0,1.6,0),Rt(5.02,.4,2.02,"#f2c230",0,.6,0)),a.position.set(-30,0,-10.5),t.add(a);const r=a.clone();return r.position.set(10,0,-5.5),r.rotation.y=Ge,t.add(r),{g:t,colliders:[{x:0,z:0,r:2.6}],photo:{x:0,z:9.5},update(o){a.position.x+=o*6,a.position.x>40&&(a.position.x=-40),r.position.x-=o*5,r.position.x<-40&&(r.position.x=40)}}},mendoza(i){const t=new At,e=["#8a7a6a","#7a6a5a","#9a8a78"];for(let a=0;a<7;a++){const r=-48+a*16,o=11+a*5%7,c=15+a*7%12,l=He(o,c,e[a%3],r,c/2,-48-a%2*6,7),h=He(o*.4,c*.4,"#f4f8fc",r,c*.8,-48-a%2*6,7);t.add(l,h)}for(const a of[-1,1])for(let r=0;r<5;r++){const o=a*(13+r*2.6);t.add(Rt(.14,1.2,14,"#6b4a2a",o,.6,-2));for(let c=0;c<7;c++)t.add(ye(.48,"#4a8a3a",o,1.1,-8+c*2,6)),c%2&&t.add(ye(.18,"#6a2a7a",o+.3,.8,-8+c*2,5))}const n=new At;n.add(Rt(11,4.4,6,"#e8d8b8",0,2.2,0),xl(11,6,2.2,"#b5532f",0,4.4,0));for(let a=-2;a<=2;a++)n.add(Rt(1.3,2.4,.2,"#5a3a22",a*2,1.4,3.05),ie(.65,.65,.2,"#5a3a22",a*2,2.6,3.05,12));for(let a=0;a<4;a++){const r=ie(.8,.8,1.6,"#8a5a30",-7+a%2*1.8,.8+Math.floor(a/2)*1.4,4.6,12);r.rotation.z=Ge/2,n.add(r)}n.position.set(0,0,-2),t.add(n);const s=new At;return s.add(Rt(.8,4,.8,"#d4c8a8",-2.4,2,0),Rt(.8,4,.8,"#d4c8a8",2.4,2,0),Rt(5.6,.8,.8,"#d4c8a8",0,4.2,0)),s.position.set(0,0,12),t.add(s),{g:t,colliders:[{x:0,z:-2,r:6.8}],photo:{x:0,z:14},update(){}}},rio(i){const t=new At;i.add(Oa(160,60,"#2f9ad0",0,.03,62));const e=He(12,16,"#4a8a4a",0,8,-6,9);t.add(e,He(6,8,"#5a9a52",7,4,-4,7));const n=new At;n.add(Rt(2.2,2.4,2.2,"#e8e4da",0,1.2,0),ie(.7,1,5,"#f4f2ec",0,4.9,0,8),Rt(9,.6,.8,"#f4f2ec",0,6.9,0),ye(.75,"#f4f2ec",0,8,0,10)),n.position.set(0,16,-6),t.add(n);for(let r=0;r<14;r++){const o=-.9+r*.14;t.add(ro(Math.cos(o*2.2)*24+r%2*2-6,4+Math.sin(r*1.7)*7+10,1+r%3*.15))}for(let r=0;r<6;r++){const o=new At;o.add(ie(.05,.05,2,"#ddd",0,1,0,4),He(1.4,.7,["#d9402f","#f2c230","#2fa05a"][r%3],0,2.1,0,10)),o.position.set(-16+r*6,0,22+r%2*3),t.add(o)}const s=Rt(.05,.05,20,"#555",14,9,4);s.rotation.y=.5,t.add(s);const a=Rt(1.6,1,1.4,"#d9402f",0,0,0);return t.add(a),{g:t,colliders:[{x:0,z:-6,r:10.5},{x:7,z:-4,r:5}],photo:{x:0,z:10},update(r,o){const c=(Math.sin(o*.2)+1)/2;a.position.set(14-Math.sin(.5)*10+c*Math.sin(.5)*20,8.3,4-Math.cos(.5)*10+c*Math.cos(.5)*20)}}},paris(i){const t=new At,e="#6b6358",n=new At;for(const[o,c]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const l=Rt(.9,9.5,.9,e,o*3.5,4.6,c*3.5);l.rotation.z=-o*.22,l.rotation.x=c*.22,n.add(l)}n.add(Rt(7.6,.5,.5,e,0,3.8,3.2),Rt(7.6,.5,.5,e,0,3.8,-3.2),Rt(.5,.5,7.6,e,3.2,3.8,0),Rt(.5,.5,7.6,e,-3.2,3.8,0)),t.add(n,Rt(6.4,.7,6.4,e,0,9.3,0));const s=ie(1.4,2.6,10,e,0,14.5,0,4);s.rotation.y=Ge/4,t.add(s,Rt(3.6,.5,3.6,e,0,19.7,0));const a=ie(.25,1.1,11,e,0,25.5,0,4);a.rotation.y=Ge/4,t.add(a,He(.25,3,e,0,32.5,0,4));for(let o=0;o<4;o++){const c=o*Ge/2+Ge/4;t.add(Rt(.12,9,.12,"#8a8274",Math.cos(c)*1.3,14.6,Math.sin(c)*1.3))}t.add(Wa(.5,.5,.5,"#ffe066",0,33.8,0));for(const o of[-1,1])t.add(Rt(6,.2,18,"#7fb85a",o*12,.1,6),ie(2.4,2.4,.5,"#8ab8d8",o*12,.3,4,18));const r=["#efe6d2","#e4d8bf","#f2ead8"];for(let o=0;o<9;o++)t.add(is(-34+o*8.5,-24,7.5,6,10,r[o%3],"#6a7280")),t.add(is(-34+o*8.5,24,7.5,6,11,r[(o+1)%3],"#6a7280"));for(let o=0;o<5;o++){const c=new At;c.add(ie(.4,.4,.08,"#ddd",0,.8,0,10),ie(.05,.05,.8,"#555",0,.4,0,4),He(1.2,.6,["#d9402f","#f2ece0"][o%2],0,2.2,0,8),ie(.04,.04,1.4,"#999",0,1.5,0,4)),c.position.set(-22+o*2.2,0,16),t.add(c)}return{g:t,colliders:[{x:0,z:0,r:5.2},{x:12,z:4,r:2.6},{x:-12,z:4,r:2.6}],photo:{x:0,z:13},update(){}}},roma(i){const t=new At,e=["#d9c79a","#cfbd8e","#d4c294"],n=10;for(let a=0;a<3;a++)for(let r=0;r<28;r++){if(a===2&&r>8&&r<17||a===1&&r>12&&r<15)continue;const o=r/28*Ge*2,c=Math.cos(o)*n,l=Math.sin(o)*n,h=Rt(2.3,3,1.2,e[(r+a)%3],c,1.5+a*3,l);h.rotation.y=-o+Ge/2,t.add(h);const d=Rt(.95,1.7,.4,"#3a2f22",Math.cos(o)*(n+.5),1.4+a*3,Math.sin(o)*(n+.5));d.rotation.y=-o+Ge/2,t.add(d)}t.add(ie(7.2,7.2,.3,"#e3cf9a",0,.15,0,24));for(const[a,r,o]of[[-18,6,5],[-20.5,6,4],[-23,6,3.4],[18,-10,4.4],[20.5,-10,3.5]])t.add(ie(.6,.7,o,"#e6dcc4",a,o/2,r,8),Rt(1.6,.4,1.6,"#d9ceb4",a,o+.2,r));for(let a=0;a<10;a++)t.add(cf(-30+a*6.5,24+a%2*2,1+a%3*.2));for(let a=0;a<7;a++)t.add(is(-30+a*10,-26,7,6,9+a*3%7,["#e0b9a0","#e8d4a8","#d9a890"][a%3],"#b5532f"));const s=new At;return s.add(ie(2.2,2.4,.7,"#e6dcc4",0,.35,0,16),ie(1.9,1.9,.2,"#5aa8d8",0,.75,0,16),ie(.3,.4,2,"#e6dcc4",0,1.5,0,8)),s.position.set(16,0,14),t.add(s),{g:t,colliders:[{x:0,z:0,r:n+1.6},{x:16,z:14,r:2.6}],photo:{x:0,z:18},update(){}}},tokio(i){const t=new At,e=He(20,22,"#6f7fa8",0,11,-58,10);t.add(e,He(8,8,"#f4f8fc",0,18,-58,10));for(let s=0;s<5;s++){const a=7-s*1;t.add(Rt(a,1.5,a,s%2?"#e8e4da":"#c9382f",0,1.2+s*3,0),nf(a+3,a+3,1.4,"#3a3a44",0,2.6+s*3+.5,0))}t.add(Rt(.5,4,.5,"#e8e4da",0,17,0),He(.7,1.6,"#f6b40e",0,19.8,0,6)),t.add(Rt(11,.8,11,"#b8b0a4",0,.4,0));const n=new At;for(const s of[-1,1])n.add(ie(.4,.45,6,"#d9402f",s*2.6,3,0,8));n.add(Rt(8.4,.6,.8,"#d9402f",0,6.2,0),Rt(6.6,.4,.6,"#d9402f",0,5,0),Rt(9,.3,1.1,"#2a2a34",0,6.7,0)),n.position.set(0,0,15),t.add(n);for(let s=0;s<10;s++)t.add(lf(-24+s*5.4,22+s%2*3,1+s%3*.15));for(let s=0;s<7;s++){const a=14+s*9%22,r=is(-34+s*11,-30,7,6,a,["#4a5068","#5a6078","#3a4058"][s%3],null,"#ffe9a0");t.add(r)}for(let s=0;s<6;s++){const a=new At;a.add(ie(.05,.05,2.4,"#444",0,1.2,0,4),ye(.45,"#d9402f",0,2.5,0,8)),a.position.set(-9+s*3.6,0,11),t.add(a)}return{g:t,colliders:[{x:0,z:0,r:5.6}],photo:{x:0,z:20},update(){}}},cairo(i){const t=new At,e="#d9b873",n="#e8cc8a";for(const[o,c,l,h]of[[0,-8,9,11],[-15,-4,7,8.5],[14,-2,5,6]]){const d=He(l*1.1,h,e,o,h/2,c,4);d.rotation.y=Ge/4,t.add(d);const u=He(l*.22,h*.2,n,o,h*.9,c,4);u.rotation.y=Ge/4,t.add(u)}const s=new At;s.add(Rt(6,2,2.2,"#d4b06a",0,1.2,0),Rt(1.7,1.7,1.7,"#d4b06a",3.3,2.5,0),Rt(2.3,1.9,.5,"#2a4a8a",3.4,2.5,0),Rt(2.8,.7,.8,"#d4b06a",4.6,.5,.7),Rt(2.8,.7,.8,"#d4b06a",4.6,.5,-.7),Rt(1.2,.3,1.4,"#d4b06a",3.9,2.1,0)),s.position.set(-4,0,11),s.rotation.y=-.6,t.add(s);for(let o=0;o<8;o++){const c=ye(5+o%3*2,"#e6c685",-40+o*11,-1.5,-34-o%2*6,8);c.scale.y=.35,t.add(c)}for(let o=0;o<9;o++)t.add(ro(-26+o*7,22+o%2*3,1.1));const a=new At;a.add(Rt(2,1.1,.8,"#b0762f",0,1.6,0),ye(.5,"#b0762f",.7,2.3,0,7),ye(.4,"#c18a40",-.2,2.3,0,7),Rt(.8,.3,.3,"#b0762f",1.4,2.6,0),...[-.8,.8].flatMap(o=>[-.3,.3].map(c=>ie(.1,.1,1.2,"#b0762f",o,.6,c,5)))),a.position.set(16,0,10),t.add(a);const r=Wa(5,5,.2,"#fff2b8",-30,30,-70);return t.add(r),{g:t,colliders:[{x:0,z:-8,r:10},{x:-15,z:-4,r:7.5},{x:14,z:-2,r:5.5},{x:-4,z:11,r:3}],photo:{x:8,z:18},update(o,c){a.position.x=16+Math.sin(c*.3)*2}}}};function ry(i,t){const e=new At;let n;switch(i){case"sphere":n=ye(.4,t,0,0,0,12);break;case"box":n=Rt(.8,.55,.55,t);break;case"cone":n=He(.38,.9,t,0,0,0,10);break;case"cyl":n=ie(.3,.3,.75,t,0,0,0,12);break;case"disc":n=ie(.55,.55,.14,t,0,0,0,16),n.rotation.x=.5;break;case"torus":n=O1(.34,.14,t,0,0,0);break;case"star":n=new J(new vo(.5),Tt(t)),n.userData.ownGeo=!0;break;case"bottle":n=new At,n.add(ie(.26,.26,.7,t,0,-.1,0,10),ie(.1,.12,.45,t,0,.45,0,8));break;default:n=ye(.4,t,0,0,0,10)}e.add(n);const s=new J(new bn(.55,.75,24),new qt({color:"#ffffff",transparent:!0,opacity:.7,side:_e,depthWrite:!1}));return s.rotation.x=-Ge/2,s.position.y=-.98,s.userData.ownGeo=!0,e.add(s),e.scale.setScalar(1.3),e}function oy(i,t,e){const n=new At;i.add(n),i.background=new ee(t.sky),i.fog=new qi(t.sky,55,120);const s=new yi("#fff4dc",2.2);s.position.set(-20,30,18),n.add(new sr("#ffffff","#8a9a70",1.7),s);const a=new J(new nn(140,48),Tt(t.ground));a.rotation.x=-Ge/2,a.userData.ownGeo=!0,n.add(a);const r=sf(iy(t.id)),o=ay[t.id](n);n.add(o.g);const c=o.colliders.slice(),l=(_,b,M=2)=>c.every(P=>Math.hypot(_-P.x,b-P.z)>P.r+M)&&Math.hypot(_-o.photo.x,b-o.photo.z)>4,h={rosario:Vr,buenosaires:Vr,mendoza:(_,b,M)=>Vr(_,b,M,"#6a9a3a"),rio:ro,paris:(_,b,M)=>Vr(_,b,M,"#5aa03a"),roma:cf,tokio:lf,cairo:ro};for(let _=0;_<26;_++){const b=r()*Ge*2,M=12+r()*22,P=Math.cos(b)*M,C=Math.sin(b)*M;l(P,C,3)&&n.add(h[t.id](P,C,t.id==="cairo"||t.id==="rio"?1:.9+r()*.4))}const d=[];t.souvenirs.forEach(([_,b,M],P)=>{let C=0,E=0,U=0;do{const x=P/t.souvenirs.length*Ge*2+r()*.9,N=11+r()*13;C=Math.cos(x)*N,E=Math.sin(x)*N,U++}while(!l(C,E,3.2)&&U<40);const w=ry(b,M);w.position.set(C,1.4,E),w.visible=!e.includes(P),n.add(w),d.push({idx:P,name:_,mesh:w,x:C,z:E,got:e.includes(P)})});const u=new J(new bn(1.7,2.2,36),new qt({color:"#ffd45a",transparent:!0,opacity:.85,side:_e,depthWrite:!1}));u.rotation.x=-Ge/2,u.position.set(o.photo.x,.08,o.photo.z),u.userData.ownGeo=!0;const f=new J(new nn(1.7,30),new qt({color:"#ffd45a",transparent:!0,opacity:.18,side:_e,depthWrite:!1}));f.rotation.x=-Ge/2,f.position.set(o.photo.x,.07,o.photo.z),f.userData.ownGeo=!0;const g=Bl("Foto",t.landmark,"#f6b40e",!1);g.position.set(o.photo.x,3.6,o.photo.z),g.scale.multiplyScalar(.75),n.add(u,f,g);const v=[];o.g.traverse(_=>{_.userData&&_.userData.occ&&(_.updateWorldMatrix(!0,!0),v.push({o:_,box:new Xi().setFromObject(_).expandByScalar(.4)}))});const m=new ho,p=new B;return{root:n,colliders:c,photo:o.photo,items:d,occlude(_,b){if(!v.length)return;m.origin.copy(_),m.direction.copy(b).sub(_);const M=m.direction.length();m.direction.divideScalar(M);for(const P of v){const C=m.intersectBox(P.box,p);P.o.visible=!(C&&p.distanceTo(_)<M-1)}},update(_,b){o.update(_,b);for(const M of d)M.got||(M.mesh.position.y=1.4+Math.sin(b*2.4+M.idx)*.25,M.mesh.rotation.y=b*1.8+M.idx);u.scale.setScalar(1+Math.sin(b*3)*.06)},dispose(){i.remove(n),rf(n),n.traverse(_=>{_.userData&&_.userData.ownGeo&&_.geometry&&_.geometry.dispose()}),g.userData.tex.dispose(),g.material.dispose(),i.fog=null}}}const fc=(i,t)=>i.find(e=>e.id===t)||i[0];function cy(i){const t=i.music,e=ao();e.name=i.name,e.bpm=t.bpm,e.swing=t.swing,e.scale=t.scale,e.root=t.root,e.inst=t.inst;const n=fc(Xd,t.drums),s=fc(qd,t.bass),a=fc(Ha,t.lead),r=Ha[(Ha.indexOf(a)+1)%Ha.length],o=(l,h)=>h.forEach(([d,u,f])=>{l[d]={d:u,l:f}}),c=()=>JSON.parse(JSON.stringify(n.drums));return e.patterns[0].drums=c(),o(e.patterns[0].bass,s.notes),o(e.patterns[0].lead,a.notes),e.patterns[1].drums=c(),o(e.patterns[1].bass,s.notes),e.patterns[2].drums=c(),o(e.patterns[2].bass,s.notes),o(e.patterns[2].lead,r.notes),e.arrangement=[0,1,0,2],e.mix.master=.5,e.mix.kick=.55,e.mix.snare=.45,e.mix.hat=.4,e.mix.perc=.45,e.mix.bass=.6,e.mix.lead=.65,e.mix.sidechain=.3,ha(e)}class ly{constructor(){this.live=new Zd,this.player=new Zr(this.live),this.muted=!1,this.song=null}play(t){this.song=cy(t),this.player.stop(),this.player.load(this.song),this.player.mode="song",this.live.resume(),this.player.start(),this.live.master.out.gain.value=this.muted?0:.9}stop(){this.player.stop()}setMuted(t){this.muted=!!t,this.live.master.out.gain.value=t?0:.9}close(){this.live.close()}}function uy(){const i={x:0,y:0},t=y("i",{class:"knob"}),e=y("div",{class:"joy","aria-hidden":"true"},t),n=48;let s=null;const a=o=>{const c=e.getBoundingClientRect();let l=o.clientX-(c.left+c.width/2),h=o.clientY-(c.top+c.height/2);const d=Math.hypot(l,h);d>n&&(l=l/d*n,h=h/d*n),t.style.transform=`translate(${l}px, ${h}px)`,i.x=l/n,i.y=-h/n},r=()=>{s=null,i.x=i.y=0,t.style.transform=""};return e.addEventListener("pointerdown",o=>{s=o.pointerId,e.setPointerCapture(o.pointerId),a(o),o.stopPropagation()}),e.addEventListener("pointermove",o=>{o.pointerId===s&&a(o)}),e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),{el:e,vec:i,reset:r}}const pc=Math.PI,Vh=7.4;function hy({onExit:i}){const t=new ga,e=new Je(45,innerWidth/innerHeight,.1,400),n=document.getElementById("gl"),s=new ly;let a=null,r=!1,o=0;const c=f=>Ot.profile.passport[f]||{got:[],photo:!1,stamp:!1};function l(f){a&&a.dispose(),a=null,_n(),Ee(),a=f()}function h(f){s.stop(),t.background=new ee("#050a1c"),t.fog=null;const g=[new Ed("#8aa0d0",1.4),new yi("#ffffff",2.4)];g[1].position.set(-8,6,12),g.forEach(x=>t.add(x));const v=new Float32Array(600*3);for(let x=0;x<600;x++){const N=60+Math.random()*30,I=Math.random()*pc*2,F=Math.acos(2*Math.random()-1);v[x*3]=N*Math.sin(F)*Math.cos(I),v[x*3+1]=N*Math.cos(F),v[x*3+2]=N*Math.sin(F)*Math.sin(I)}const m=new _d(new Ze().setAttribute("position",new en(v,3)),new xd({color:"#ffffff",size:.5,sizeAttenuation:!0}));t.add(m);const p=ny(t);let _=f&&cs(f)?f:(ds.find(x=>!c(x.id).stamp)||ds[0]).id;e.position.set(0,0,15.5),e.lookAt(0,0,0);const b=y("div",{class:"ch-pill"}),M=y("div",{class:"vj-list",role:"listbox","aria-label":"Destinos"}),P=y("div",{class:"vj-detail"}),C=y("div",{class:"vj-term"},y("div",{class:"vj-top"},y("button",{type:"button",class:"btn sm",text:"← Salir",onclick:()=>{r||i()}}),y("h2",{class:"vj-title",text:"La Terminal"}),b),y("div",{class:"vj-panels"},M,P));Jn().append(C);const E=()=>{b.textContent=`Pasaporte: ${Fd(Ot.profile.passport)}/${ds.length} sellos`,M.replaceChildren(...ds.map(I=>{const F=c(I.id);return y("button",{type:"button",class:"vj-city"+(F.stamp?" done":""),role:"option","aria-selected":I.id===_?"true":"false",onclick:()=>{_=I.id,p.focus(I),Ht.unlock(),Ht.pop(),E()},ondblclick:()=>d(I.id)},y("b",{text:I.name}),y("small",{text:I.country}),y("span",{class:"vj-st",text:F.stamp?"✔ Sello":`${F.got.length}/${kn}`+(F.photo?" 📷":"")}))}));const x=cs(_),N=c(_);P.replaceChildren(y("p",{class:"kicker",text:`${x.country}${x.home?" · tu ciudad":""}`}),y("h3",{text:x.name}),y("p",{class:"vj-lm",text:x.landmark}),y("p",{text:x.blurb}),y("p",{class:"muted small",text:"Sabías que: "+x.fact}),y("div",{class:"vj-souv"},...x.souvenirs.map(([I],F)=>y("span",{class:"vj-chip"+(N.got.includes(F)?" got":""),text:N.got.includes(F)?I:"?"})),y("span",{class:"vj-chip"+(N.photo?" got":""),text:N.photo?"📷 Foto":"📷 ?"})),y("button",{type:"button",class:"btn primary vj-go",text:N.stamp?"✈ Volver a visitar":"✈ Viajar",onclick:()=>d(x.id)}))};p.focus(cs(_)),E();const U=Ot.on(()=>{!r&&a&&a.kind==="terminal"&&E()}),w=()=>{const x=innerWidth,N=innerHeight,I=x/N;e.aspect=I,I<.9?(e.position.z=17+(.9-I)*14,p.root.position.set(0,3.1,0),p.root.scale.setScalar(.85),e.clearViewOffset()):(e.position.z=15.5,p.root.position.set(0,0,0),p.root.scale.setScalar(1),e.clearViewOffset()),e.updateProjectionMatrix()};return w(),{kind:"terminal",update(x,N){p.update(x,N),m.rotation.y+=x*.004},resize:w,dispose(){U(),p.dispose(),t.remove(m,...g),m.geometry.dispose(),m.material.dispose()}}}function d(f){if(o)return;Ht.unlock(),Ht.chime();const g=cs(f);Jn().append(y("div",{class:"vj-fly"},y("div",null,y("span",{class:"plane",text:"✈"}),y("h3",{text:`Viajando a ${g.name}…`}),y("p",{text:g.country})))),o=setTimeout(()=>{o=0,r||l(()=>u(f))},900)}function u(f){const g=cs(f),v=oy(t,g,c(f).got),m=new af(t),p=Mi(Ot.profile.look);p.scale.setScalar(1.1),p.position.set(v.photo.x,0,v.photo.z+6),t.add(p);const _=new J(new nn(.6,18),new qt({color:0,transparent:!0,opacity:.25}));_.rotation.x=-pc/2,_.position.y=.05,t.add(_);const b=new Set,M=uy(),P=new Ut;let C=pc,E=0,U=.46,w=innerWidth/innerHeight<.9?19:17;const x=new B().copy(p.position);let N=!1,I=!1,F=null,G=0;const Z=Y=>{if(/INPUT|TEXTAREA|SELECT/.test(Y.target&&Y.target.tagName))return;const it=Y.key.toLowerCase();["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright","q","e"].includes(it)&&(b.add(it),Y.preventDefault()),Ht.unlock()},H=Y=>b.delete(Y.key.toLowerCase()),nt=()=>b.clear(),q=Y=>{Y.target===n&&(F={x:Y.clientX,id:Y.pointerId})},ht=Y=>{F&&Y.pointerId===F.id&&(E-=(Y.clientX-F.x)*.006,F.x=Y.clientX)},vt=()=>{F=null};addEventListener("keydown",Z),addEventListener("keyup",H),addEventListener("blur",nt),addEventListener("pointerdown",q),addEventListener("pointermove",ht),addEventListener("pointerup",vt),addEventListener("pointercancel",vt);const St=y("div",{class:"ch-pill"}),Vt=y("div",{class:"vj-arrow","aria-hidden":"true"},y("i")),et=y("span",{class:"vj-arrow-lab"}),D=y("button",{type:"button",class:"btn sm","aria-label":"Música",onclick:()=>{s.setMuted(!s.muted),D.textContent=s.muted?"🔇":"🔊"},text:s.muted?"🔇":"🔊"}),W=y("div",{class:"vj-flash"}),tt=y("div",{class:"vj-hud"},y("div",{class:"vj-top"},y("button",{type:"button",class:"btn sm",text:"← Terminal",onclick:()=>{r||_t()}}),y("h2",{class:"vj-title",text:g.name}),St,y("span",{class:"ch-gap"}),D),y("div",{class:"vj-compass"},Vt,et),y("p",{class:"help vj-help",text:"WASD o flechas para caminar · arrastrá para girar la cámara"}),M.el,W);Jn().append(tt,y("div",{class:"vj-fly out"},y("div",null,y("span",{class:"plane",text:"✈"}),y("h3",{text:g.name})))),setTimeout(()=>{const Y=document.querySelector(".vj-fly.out");Y&&Y.remove()},900);const ut=()=>{const Y=c(f);St.textContent=`Souvenirs ${Y.got.length}/${kn} · Foto ${Y.photo?"✔":"✗"}`+(Y.stamp?" · Sello ✔":"")};ut(),s.play(g),(()=>{N=!0,b.clear(),M.reset(),yn(y("div",null,y("header",{class:"dlg-head"},y("h2",{text:g.name}),y("button",{type:"button",class:"x","aria-label":"Cerrar",text:"×",onclick:()=>Ee()})),y("p",{class:"kicker",text:`${g.country} · ${g.landmark}`}),y("p",{class:"lead",text:g.blurb}),y("p",{class:"muted",text:"Sabías que: "+g.fact}),y("p",{text:`Tu misión: juntá los ${kn} souvenirs y sacate una foto en el monumento (el círculo dorado) para ganar el sello del pasaporte.`}),y("div",{class:"row-actions"},y("button",{type:"button",class:"btn primary",text:"Explorar",onclick:()=>Ee()}))),{onClose:()=>{N=!1}})})();function _t(){l(()=>h(f))}function It(Y){N=!0,b.clear(),M.reset(),Ht.stamp(),yn(y("div",{class:"vj-stampbox"},y("div",{class:"vj-stamp",style:{"--c":g.accent}},y("b",{text:g.name}),y("small",{text:"SELLADO"})),y("h2",{text:"¡Sello conseguido!"}),y("p",{class:"lead",text:`Completaste ${g.name}: +40 XP y +80 monedas.`+(Y.chest?" Y tu primer cofre del pasaporte.":"")}),Y.level?y("p",{text:`¡Subiste al nivel ${Y.level}!`}):null,y("div",{class:"row-actions"},y("button",{type:"button",class:"btn primary",text:"Volver a la terminal",onclick:()=>{Ee(),_t()}}),y("button",{type:"button",class:"btn ghost",text:"Seguir explorando",onclick:()=>Ee()}))),{onClose:()=>{N=!1}})}function Qt(){const Y=c(f);if(Y.photo&&Y.got.length===kn&&!Y.stamp){const it=Ot.takePhoto(f);it&&it.stamped&&It(it)}}function Wt(){const Y=c(f);if(G=1,Ht.pop(),Ht._noise&&Ht._noise(.08,.4,3e3,1,"highpass"),Y.photo){m.add("📷 ¡Otra foto!","#ffffff",p.position.clone().setY(3));return}const it=Ot.takePhoto(f);m.add("📷 +10 XP","#ffd45a",p.position.clone().setY(3)),it&&it.level&&ge(`¡Subiste al nivel ${it.level}!`);const ft=c(f);ft.got.length<kn?ge(`Foto lista. Te faltan ${kn-ft.got.length} souvenirs para el sello.`):it&&it.stamped&&It(it)}const mt=Ot.on(()=>{!r&&a&&a.kind==="city"&&ut()}),z=()=>{e.aspect=innerWidth/innerHeight,w=e.aspect<.9?19:17,e.updateProjectionMatrix()};return z(),t.background=new ee(g.sky),{kind:"city",resize:z,update(Y,it){v.update(Y,it),m.update(Y),G>0&&(G=Math.max(0,G-Y*2.4),W.style.opacity=String(G*.85));let ft=0,gt=0;N||((b.has("w")||b.has("arrowup"))&&(ft+=1),(b.has("s")||b.has("arrowdown"))&&(ft-=1),(b.has("d")||b.has("arrowright"))&&(gt+=1),(b.has("a")||b.has("arrowleft"))&&(gt-=1),b.has("q")&&(E+=Y*1.8),b.has("e")&&(E-=Y*1.8),ft+=M.vec.y,gt+=M.vec.x);const Nt=Math.min(1,Math.hypot(ft,gt)),Ct=Math.sin(E),L=Math.cos(E),S=new Ut(-Ct*ft+L*gt,-L*ft-Ct*gt);S.lengthSq()>0&&S.normalize().multiplyScalar(Nt*Vh),P.lerp(S,1-Math.exp(-14*Y)),p.position.x+=P.x*Y,p.position.z+=P.y*Y;for(const A of v.colliders){const R=p.position.x-A.x,K=p.position.z-A.z,pt=Math.hypot(R,K),ot=A.r+.5;pt<ot&&pt>1e-4&&(p.position.x=A.x+R/pt*ot,p.position.z=A.z+K/pt*ot)}const X=Math.hypot(p.position.x,p.position.z);X>dc&&(p.position.x*=dc/X,p.position.z*=dc/X);const rt=P.length();if(rt>.3){let R=Math.atan2(P.x,P.y)-C;R=Math.atan2(Math.sin(R),Math.cos(R)),C+=R*(1-Math.exp(-12*Y))}p.rotation.y=C,ys(p,it,rt/Vh),_.position.x=p.position.x,_.position.z=p.position.z;for(const A of v.items)A.got||Math.hypot(p.position.x-A.x,p.position.z-A.z)<1.9&&Ot.collectSouvenir(f,A.idx)&&(A.got=!0,A.mesh.visible=!1,Ht.pick(),Ht.coin(),m.add(`+ ${A.name}`,"#9be86a",new B(A.x,2.6,A.z)),kn-c(f).got.length||ge(c(f).photo?"¡Último souvenir!":"¡Los tenés todos! Ahora sacate la foto en el círculo dorado."),Qt());const dt=Math.hypot(p.position.x-v.photo.x,p.position.z-v.photo.z);dt<2.1&&!I?(I=!0,Wt()):dt>3.2&&(I=!1);let lt=null,zt=null,Pt="",kt=1e9;for(const A of v.items)if(!A.got){const R=Math.hypot(A.x-p.position.x,A.z-p.position.z);R<kt&&(kt=R,lt=A.x,zt=A.z,Pt="Souvenir")}lt==null&&!c(f).photo&&(lt=v.photo.x,zt=v.photo.z,Pt="Foto",kt=dt);const oe=tt.querySelector(".vj-compass");if(oe.style.display=lt==null?"none":"",lt!=null){const A=lt-p.position.x,R=zt-p.position.z,K=A*L+R*-Ct,pt=A*-Ct+R*-L;Vt.style.transform=`rotate(${Math.atan2(K,pt)}rad)`,et.textContent=`${Pt} · ${Math.round(kt)} m`}x.lerp(new B(p.position.x,3,p.position.z),1-Math.exp(-8*Y)),e.position.set(x.x+Math.sin(E)*Math.cos(U)*w,x.y+Math.sin(U)*w,x.z+Math.cos(E)*Math.cos(U)*w),e.lookAt(x),v.occlude(e.position,p.position)},dispose(){mt(),removeEventListener("keydown",Z),removeEventListener("keyup",H),removeEventListener("blur",nt),removeEventListener("pointerdown",q),removeEventListener("pointermove",ht),removeEventListener("pointerup",vt),removeEventListener("pointercancel",vt),m.dispose(),v.dispose(),Zn(p),t.remove(_)},_dev:{me:p,world:v,takePhoto:Wt}}}return l(()=>h()),{scene:t,camera:e,update(f,g){a&&a.update(f,g)},resize(){a&&a.resize&&a.resize()},dispose(){r=!0,clearTimeout(o),a&&a.dispose(),a=null,Ee(),s.stop(),s.close(),_n()}}}const Qs=new Jx(document.getElementById("gl"));function fs(){Qs.setScene(()=>N_({onEditLook:()=>uf(),onPlay:i=>dy(i)}))}function dy(i){i==="futbol"?Qs.setScene(()=>p1({onExit:fs})):i==="dj"?Qs.setScene(()=>F1({onExit:fs})):i==="chacra"?Qs.setScene(()=>Z1({onExit:fs})):i==="viajes"&&Qs.setScene(()=>hy({onExit:fs}))}function uf(){Qs.setScene(()=>E_({onDone:fs,onCancel:fs}))}Ot.load().then(()=>{Ot.hasCharacter()?fs():uf()});
