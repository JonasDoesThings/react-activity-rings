import{r as K}from"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";var J={exports:{}},P={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=K,X=Symbol.for("react.element"),Z=Symbol.for("react.fragment"),nn=Object.prototype.hasOwnProperty,en=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rn={key:!0,ref:!0,__self:!0,__source:!0};function Y(n,e,a){var i,l={},c=null,t=null;a!==void 0&&(c=""+a),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(t=e.ref);for(i in e)nn.call(e,i)&&!rn.hasOwnProperty(i)&&(l[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)l[i]===void 0&&(l[i]=e[i]);return{$$typeof:X,type:n,key:c,ref:t,props:l,_owner:en.current}}P.Fragment=Z;P.jsx=Y;P.jsxs=Y;J.exports=P;var v=J.exports;const R=v.Fragment,r=v.jsx,F=v.jsxs,k="_innerActivityRing_1mkb5_7";const W="_innerActivityRingBackground_1mkb5_16";const on={containerHeight:"100%",containerWidth:"100%",paddingBetweenRings:.75,initialRadius:30,animationDurationMillis:1e3,animationTimingFunction:"ease-in-out",backgroundOpacity:.4};function o(n){const e=Object.assign({},on,n.options),a=n.rings.reduce((c,t)=>c+(t.ringWidth??12)+e.paddingBetweenRings,0),i=2*(e.initialRadius+a),l=n.rings.map((c=>t=>c+=t.ringWidth??12)(0));return r("svg",{viewBox:`0 0 ${i} ${i}`,height:e.containerHeight,width:e.containerWidth,children:r("g",{children:n.rings.map((c,t)=>r(tn,{index:t,ring:c,options:e,summedUpRingWidthsBefore:t===0?0:l[t-1]},t))})})}function tn(n){const e=n.ring.ringWidth??12,a=n.options.initialRadius+n.summedUpRingWidthsBefore+e/2+n.index*n.options.paddingBetweenRings,i=Math.min(.999,n.ring.filledPercentage)*(2*a*Math.PI);return F(R,{children:[r("circle",{cx:"50%",cy:"50%",r:a,stroke:n.ring.backgroundColor??n.ring.color,strokeOpacity:n.options.backgroundOpacity,strokeWidth:12,className:W}),r("circle",{cx:"50%",cy:"50%",r:a,strokeDasharray:`${i} ${"9".repeat(n.index+4)}`,stroke:n.ring.color,strokeWidth:12,style:{animationDuration:`${n.options.animationDurationMillis}ms`,animationTimingFunction:n.options.animationTimingFunction},className:k}),r("circle",{cx:"50%",cy:"50%",r:a,stroke:n.ring.backgroundColor??n.ring.color,strokeOpacity:n.options.backgroundOpacity,strokeWidth:e,className:W}),r("circle",{cx:"50%",cy:"50%",r:a,strokeDasharray:`${i} ${"9".repeat(n.index+4)}`,stroke:n.ring.color,strokeWidth:e,style:{animationDuration:`${n.options.animationDurationMillis}ms`,animationTimingFunction:n.options.animationTimingFunction},className:k})]})}try{o.displayName="ActivityRings",o.__docgenInfo={description:"",displayName:"ActivityRings",props:{rings:{defaultValue:null,description:"",name:"rings",required:!0,type:{name:"ActivityRing[]"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"ActivityRingContainerOptions"}}}}}catch{}const ln={title:"Example/ActivityRings",component:o},y={render:n=>r(o,{rings:n.rings,options:n.options})},s={...y,args:{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerHeight:"75vh"}}},g={...y,args:{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"}],options:{containerHeight:"75vh",backgroundOpacity:.3}}},d={...y,args:{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"},{filledPercentage:.1,color:"#b91c1c"},{filledPercentage:1,color:"#00FF00"},{filledPercentage:.5,color:"#0284c7"},{filledPercentage:.25,color:"#f123ff"},{filledPercentage:.1,color:"#FF0000"},{filledPercentage:.75,color:"#0000FF"}],options:{containerHeight:"75vh"}}},f={args:{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerHeight:"75vh",animationTimingFunction:"cubic-bezier(.47,1.64,.36,-0.19)",animationDurationMillis:2e3,backgroundOpacity:.2}}},m={parameters:{backgrounds:{default:"Gray"}},args:{rings:[{filledPercentage:.5,color:"#dd0e39",backgroundColor:"#f3f3f4"},{filledPercentage:.75,color:"#03897c",backgroundColor:"#f3f3f4"},{filledPercentage:.25,color:"#0586aa",backgroundColor:"#f3f3f4"}],options:{containerHeight:"75vh",backgroundOpacity:1}}},u={...y,args:{rings:[{filledPercentage:.5,color:"#fa0e5a",ringWidth:3},{filledPercentage:.75,color:"#afff02",ringWidth:12},{filledPercentage:.25,color:"#00fff8",ringWidth:3}],options:{containerHeight:"75vh"}}},h=()=>F(R,{children:[r(o,{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerWidth:"10vw"}}),r(o,{rings:[{filledPercentage:.6,color:"#F1337F"},{filledPercentage:.65,color:"#00FFF8"}],options:{containerWidth:"10vw"}}),r(o,{rings:[{filledPercentage:.15,color:"#00FF00"},{filledPercentage:.66,color:"#0284c7"},{filledPercentage:1,color:"#f123ff"},{filledPercentage:.25,color:"#FF0000"}],options:{containerWidth:"10vw"}}),r(o,{rings:[{filledPercentage:.6,color:"#F00"},{filledPercentage:.65,color:"#0F0"},{filledPercentage:.7,color:"#00F"}],options:{containerWidth:"10vw"}})]}),p=()=>{const n=e=>Array(e).fill({filledPercentage:0,color:""}).map(()=>({filledPercentage:Math.min(Math.random()+.1,1),color:`rgb(${Math.random()*254}, ${Math.random()*254}, ${Math.random()*254})`}));return F(R,{children:[r(o,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}}),r(o,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}}),r(o,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}}),r(o,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}})]})};var _,b,M;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    rings: [{
      filledPercentage: 0.5,
      color: '#fa0e5a'
    }, {
      filledPercentage: 0.75,
      color: '#afff02'
    }, {
      filledPercentage: 0.25,
      color: '#00fff8'
    }],
    options: {
      containerHeight: '75vh'
    }
  }
}`,...(M=(b=s.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var A,w,O;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Template,
  args: {
    rings: [{
      filledPercentage: 0.5,
      color: '#fa0e5a'
    }, {
      filledPercentage: 0.75,
      color: '#afff02'
    }],
    options: {
      containerHeight: '75vh',
      backgroundOpacity: 0.3
    }
  }
}`,...(O=(w=g.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var x,T,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    rings: [{
      filledPercentage: 0.5,
      color: '#fa0e5a'
    }, {
      filledPercentage: 0.75,
      color: '#afff02'
    }, {
      filledPercentage: 0.25,
      color: '#00fff8'
    }, {
      filledPercentage: 0.1,
      color: '#b91c1c'
    }, {
      filledPercentage: 1,
      color: '#00FF00'
    }, {
      filledPercentage: 0.5,
      color: '#0284c7'
    }, {
      filledPercentage: 0.25,
      color: '#f123ff'
    }, {
      filledPercentage: 0.1,
      color: '#FF0000'
    }, {
      filledPercentage: 0.75,
      color: '#0000FF'
    }],
    options: {
      containerHeight: '75vh'
    }
  }
}`,...(S=(T=d.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var C,D,$;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    rings: [{
      filledPercentage: 0.5,
      color: '#fa0e5a'
    }, {
      filledPercentage: 0.75,
      color: '#afff02'
    }, {
      filledPercentage: 0.25,
      color: '#00fff8'
    }],
    options: {
      containerHeight: '75vh',
      animationTimingFunction: 'cubic-bezier(.47,1.64,.36,-0.19)',
      animationDurationMillis: 2000,
      backgroundOpacity: 0.2
    }
  }
}`,...($=(D=f.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var H,B,j;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'Gray'
    }
  },
  args: {
    rings: [{
      filledPercentage: 0.5,
      color: '#dd0e39',
      backgroundColor: '#f3f3f4'
    }, {
      filledPercentage: 0.75,
      color: '#03897c',
      backgroundColor: '#f3f3f4'
    }, {
      filledPercentage: 0.25,
      color: '#0586aa',
      backgroundColor: '#f3f3f4'
    }],
    options: {
      containerHeight: '75vh',
      backgroundOpacity: 1
    }
  }
}`,...(j=(B=m.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var E,N,G;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    rings: [{
      filledPercentage: 0.5,
      color: '#fa0e5a',
      ringWidth: 3
    }, {
      filledPercentage: 0.75,
      color: '#afff02',
      ringWidth: 12
    }, {
      filledPercentage: 0.25,
      color: '#00fff8',
      ringWidth: 3
    }],
    options: {
      containerHeight: '75vh'
    }
  }
}`,...(G=(N=u.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var I,z,L;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <>
      <ActivityRings rings={[{
      filledPercentage: 0.5,
      color: '#fa0e5a'
    }, {
      filledPercentage: 0.75,
      color: '#afff02'
    }, {
      filledPercentage: 0.25,
      color: '#00fff8'
    }]} options={{
      containerWidth: '10vw'
    }} />
      <ActivityRings rings={[{
      filledPercentage: 0.6,
      color: '#F1337F'
    }, {
      filledPercentage: 0.65,
      color: '#00FFF8'
    }]} options={{
      containerWidth: '10vw'
    }} />
      <ActivityRings rings={[{
      filledPercentage: 0.15,
      color: '#00FF00'
    }, {
      filledPercentage: 0.66,
      color: '#0284c7'
    }, {
      filledPercentage: 1,
      color: '#f123ff'
    }, {
      filledPercentage: 0.25,
      color: '#FF0000'
    }]} options={{
      containerWidth: '10vw'
    }} />
      <ActivityRings rings={[{
      filledPercentage: 0.6,
      color: '#F00'
    }, {
      filledPercentage: 0.65,
      color: '#0F0'
    }, {
      filledPercentage: 0.7,
      color: '#00F'
    }]} options={{
      containerWidth: '10vw'
    }} />
    </>;
}`,...(L=(z=h.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var U,q,V;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const generateRingData = (amount: number) => {
    return Array<ActivityRing>(amount).fill({
      filledPercentage: 0,
      color: ''
    }).map(() => ({
      filledPercentage: Math.min(Math.random() + 0.1, 1),
      color: \`rgb(\${Math.random() * 254}, \${Math.random() * 254}, \${Math.random() * 254})\`
    }));
  };
  return <>
      <ActivityRings rings={generateRingData(Math.ceil(Math.random() * 4 + 2))} options={{
      containerWidth: '10vw'
    }} />
      <ActivityRings rings={generateRingData(Math.ceil(Math.random() * 4 + 2))} options={{
      containerWidth: '10vw'
    }} />
      <ActivityRings rings={generateRingData(Math.ceil(Math.random() * 4 + 2))} options={{
      containerWidth: '10vw'
    }} />
      <ActivityRings rings={generateRingData(Math.ceil(Math.random() * 4 + 2))} options={{
      containerWidth: '10vw'
    }} />
    </>;
}`,...(V=(q=p.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};const sn=["SimpleThreeRings","SimpleTwoRings","SimpleALotOfRings","CustomizedThreeRings","CustomBackgroundColor","CustomRingWidth","Gallery","RandomGallery"];export{m as CustomBackgroundColor,u as CustomRingWidth,f as CustomizedThreeRings,h as Gallery,p as RandomGallery,d as SimpleALotOfRings,s as SimpleThreeRings,g as SimpleTwoRings,sn as __namedExportsOrder,ln as default};
//# sourceMappingURL=ActivityRings.stories-f6fc8684.js.map
