import{r as I}from"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";var N={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=I,L=Symbol.for("react.element"),z=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,q=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function H(n,e,o){var t,a={},u=null,R=null;o!==void 0&&(u=""+o),e.key!==void 0&&(u=""+e.key),e.ref!==void 0&&(R=e.ref);for(t in e)G.call(e,t)&&!U.hasOwnProperty(t)&&(a[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:L,type:n,key:u,ref:R,props:a,_owner:q.current}}m.Fragment=z;m.jsx=H;m.jsxs=H;N.exports=m;var h=N.exports;const y=h.Fragment,i=h.jsx,v=h.jsxs,V="_innerActivityRing_1mkb5_7";const J="_innerActivityRingBackground_1mkb5_16";const Y={containerHeight:"100%",containerWidth:"100%",paddingBetweenRings:.75,initialRadius:30,animationDurationMillis:1e3,animationTimingFunction:"ease-in-out",backgroundOpacity:.4};function r(n){const e=Object.assign({},Y,n.options),o=100+n.rings.length*(21.5+e.paddingBetweenRings);return i("svg",{viewBox:`0 0 ${o} ${o}`,height:e.containerHeight,width:e.containerWidth,children:i("g",{children:n.rings.map((t,a)=>i(K,{index:a,ring:t,options:e},a))})})}function K(n){const e=n.options.initialRadius+n.index*(12+n.options.paddingBetweenRings),o=Math.min(.999,n.ring.filledPercentage)*(2*e*Math.PI);return v(y,{children:[i("circle",{cx:"50%",cy:"50%",r:e,stroke:n.ring.color,strokeOpacity:n.options.backgroundOpacity,strokeWidth:12,className:J}),i("circle",{cx:"50%",cy:"50%",r:e,strokeDasharray:`${o} ${"9".repeat(n.index+4)}`,stroke:n.ring.color,strokeWidth:12,style:{animationDuration:`${n.options.animationDurationMillis}ms`,animationTimingFunction:n.options.animationTimingFunction},className:V})]})}try{r.displayName="ActivityRings",r.__docgenInfo={description:"",displayName:"ActivityRings",props:{rings:{defaultValue:null,description:"",name:"rings",required:!0,type:{name:"ActivityRing[]"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"ActivityRingContainerOptions"}}}}}catch{}const Z={title:"Example/ActivityRings",component:r},p=n=>i(r,{rings:n.rings,options:n.options}),c=p.bind({});c.args={rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerHeight:"75vh"}};const s=p.bind({});s.args={rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"}],options:{containerHeight:"75vh",backgroundOpacity:.3}};const l=p.bind({});l.args={rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"},{filledPercentage:.1,color:"#b91c1c"},{filledPercentage:1,color:"#00FF00"},{filledPercentage:.5,color:"#0284c7"},{filledPercentage:.25,color:"#f123ff"},{filledPercentage:.1,color:"#FF0000"},{filledPercentage:.75,color:"#0000FF"}],options:{containerHeight:"75vh"}};const g=p.bind({});g.args={rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerHeight:"75vh",animationTimingFunction:"cubic-bezier(.47,1.64,.36,-0.19)",animationDurationMillis:2e3,backgroundOpacity:.2}};const d=()=>v(y,{children:[i(r,{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerWidth:"10vw"}}),i(r,{rings:[{filledPercentage:.6,color:"#F1337F"},{filledPercentage:.65,color:"#00FFF8"}],options:{containerWidth:"10vw"}}),i(r,{rings:[{filledPercentage:.15,color:"#00FF00"},{filledPercentage:.66,color:"#0284c7"},{filledPercentage:1,color:"#f123ff"},{filledPercentage:.25,color:"#FF0000"}],options:{containerWidth:"10vw"}}),i(r,{rings:[{filledPercentage:.6,color:"#F00"},{filledPercentage:.65,color:"#0F0"},{filledPercentage:.7,color:"#00F"}],options:{containerWidth:"10vw"}})]}),f=()=>{const n=e=>Array(e).fill({filledPercentage:0,color:""}).map(()=>({filledPercentage:Math.min(Math.random()+.1,1),color:`rgb(${Math.random()*254}, ${Math.random()*254}, ${Math.random()*254})`}));return v(y,{children:[i(r,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}}),i(r,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}}),i(r,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}}),i(r,{rings:n(Math.ceil(Math.random()*4+2)),options:{containerWidth:"10vw"}})]})};var P,_,F;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:"args => <ActivityRings rings={args.rings} options={args.options} />",...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var A,M,w;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:"args => <ActivityRings rings={args.rings} options={args.options} />",...(w=(M=s.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var b,x,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:"args => <ActivityRings rings={args.rings} options={args.options} />",...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var W,O,S;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:"args => <ActivityRings rings={args.rings} options={args.options} />",...(S=(O=g.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var T,D,$;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...($=(D=d.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var j,E,B;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(B=(E=f.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const nn=["SimpleThreeRings","SimpleTwoRings","SimpleALotOfRings","CustomizedThreeRings","Gallery","RandomGallery"];export{g as CustomizedThreeRings,d as Gallery,f as RandomGallery,l as SimpleALotOfRings,c as SimpleThreeRings,s as SimpleTwoRings,nn as __namedExportsOrder,Z as default};
//# sourceMappingURL=ActivityRings.stories-6e50398a.js.map
