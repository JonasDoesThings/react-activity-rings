import{r as I}from"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";var B={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=I,C=Symbol.for("react.element"),L=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,q=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function N(n,e,o){var t,a={},p=null,y=null;o!==void 0&&(p=""+o),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(y=e.ref);for(t in e)G.call(e,t)&&!U.hasOwnProperty(t)&&(a[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:C,type:n,key:p,ref:y,props:a,_owner:q.current}}m.Fragment=L;m.jsx=N;m.jsxs=N;B.exports=m;var h=B.exports;const u=h.Fragment,i=h.jsx,P=h.jsxs,V="_innerActivityRing_1mkb5_7";const J="_innerActivityRingBackground_1mkb5_16";const Y={containerHeight:"100%",containerWidth:"100%",paddingBetweenRings:.75,initialRadius:30,animationDurationMillis:1e3,animationTimingFunction:"ease-in-out",backgroundOpacity:.4};function r(n){const e=Object.assign({},Y,n.options),o=100+n.rings.length*(21.5+e.paddingBetweenRings);return i("svg",{viewBox:`0 0 ${o} ${o}`,height:e.containerHeight,width:e.containerWidth,children:i("g",{children:n.rings.map((t,a)=>i(K,{index:a,ring:t,options:e},a))})})}function K(n){const e=n.options.initialRadius+n.index*(12+n.options.paddingBetweenRings),o=Math.min(.999,n.ring.filledPercentage)*(2*e*Math.PI);return P(u,{children:[i("circle",{cx:"50%",cy:"50%",r:e,stroke:n.ring.color,strokeOpacity:n.options.backgroundOpacity,strokeWidth:12,className:J}),i("circle",{cx:"50%",cy:"50%",r:e,strokeDasharray:`${o} ${"9".repeat(n.index+4)}`,stroke:n.ring.color,strokeWidth:12,style:{animationDuration:`${n.options.animationDurationMillis}ms`,animationTimingFunction:n.options.animationTimingFunction},className:V})]})}try{r.displayName="ActivityRings",r.__docgenInfo={description:"",displayName:"ActivityRings",props:{rings:{defaultValue:null,description:"",name:"rings",required:!0,type:{name:"ActivityRing[]"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"ActivityRingContainerOptions"}}}}}catch{}const Z={title:"Example/ActivityRings",component:r},v={render:n=>i(r,{rings:n.rings,options:n.options})},c={...v,args:{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerHeight:"75vh"}}},l={...v,args:{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"}],options:{containerHeight:"75vh",backgroundOpacity:.3}}},s={...v,args:{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"},{filledPercentage:.1,color:"#b91c1c"},{filledPercentage:1,color:"#00FF00"},{filledPercentage:.5,color:"#0284c7"},{filledPercentage:.25,color:"#f123ff"},{filledPercentage:.1,color:"#FF0000"},{filledPercentage:.75,color:"#0000FF"}],options:{containerHeight:"75vh"}}},g={args:{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerHeight:"75vh",animationTimingFunction:"cubic-bezier(.47,1.64,.36,-0.19)",animationDurationMillis:2e3,backgroundOpacity:.2}}},d=()=>P(u,{children:[i(r,{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerWidth:"10vw"}}),i(r,{rings:[{filledPercentage:.6,color:"#F1337F"},{filledPercentage:.65,color:"#00FFF8"}],options:{containerWidth:"10vw"}}),i(r,{rings:[{filledPercentage:.15,color:"#00FF00"},{filledPercentage:.66,color:"#0284c7"},{filledPercentage:1,color:"#f123ff"},{filledPercentage:.25,color:"#FF0000"}],options:{containerWidth:"10vw"}}),i(r,{rings:[{filledPercentage:.6,color:"#F00"},{filledPercentage:.65,color:"#0F0"},{filledPercentage:.7,color:"#00F"}],options:{containerWidth:"10vw"}})]}),f=()=>{const n=e=>Array(e).fill({filledPercentage:0,color:""}).map(()=>({filledPercentage:Math.min(Math.random()+.1,1),color:`rgb(${Math.random()*254}, ${Math.random()*254}, ${Math.random()*254})`}));return P(u,{children:[i(r,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}}),i(r,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}}),i(r,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}}),i(r,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}})]})};var R,F,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(F=c.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var M,A,w;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(w=(A=l.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var b,k,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var O,W,S;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(S=(W=g.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var T,D,$;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...($=(D=d.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var j,E,H;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(H=(E=f.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const nn=["SimpleThreeRings","SimpleTwoRings","SimpleALotOfRings","CustomizedThreeRings","Gallery","RandomGallery"];export{g as CustomizedThreeRings,d as Gallery,f as RandomGallery,s as SimpleALotOfRings,c as SimpleThreeRings,l as SimpleTwoRings,nn as __namedExportsOrder,Z as default};
//# sourceMappingURL=ActivityRings.stories-ebff169b.js.map
