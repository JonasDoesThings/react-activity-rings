(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.cjs-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js");const parameters={actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"black",values:[{name:"black",value:"#000"},{name:"white",value:"#FFF"},{name:"pink",value:"#F1337F"}]}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./src/components/ActivityRings.module.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"@keyframes _2I64B7PC71obgDYtQuWX2P {\n    from {\n        stroke-dasharray: 0 999;\n    }\n}\n\n._3bj7MOttrF3kgmCQsoQvcX {\n    transform-origin: 50%;\n    transform: rotate(-90deg);\n    fill: none;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    animation: _2I64B7PC71obgDYtQuWX2P forwards;\n}\n\n.z2thEYmv3GtEu_7_dWIPQ {\n    transform-origin: 50%;\n    transform: rotate(-90deg);\n    fill: none;\n}\n\n\n",""]),exports.locals={innerActivityRing:"_3bj7MOttrF3kgmCQsoQvcX",RingProgress:"_2I64B7PC71obgDYtQuWX2P",innerActivityRingBackground:"z2thEYmv3GtEu_7_dWIPQ"},module.exports=exports},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/ActivityRings.stories.tsx":"./src/components/ActivityRings.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src/components/ActivityRings.module.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./src/components/ActivityRings.module.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/ActivityRings.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleThreeRings",(function(){return SimpleThreeRings})),__webpack_require__.d(__webpack_exports__,"SimpleTwoRings",(function(){return SimpleTwoRings})),__webpack_require__.d(__webpack_exports__,"SimpleALotOfRings",(function(){return SimpleALotOfRings})),__webpack_require__.d(__webpack_exports__,"CustomizedThreeRings",(function(){return CustomizedThreeRings})),__webpack_require__.d(__webpack_exports__,"Gallery",(function(){return ActivityRings_stories_Gallery})),__webpack_require__.d(__webpack_exports__,"RandomGallery",(function(){return ActivityRings_stories_RandomGallery}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.string.repeat.js");var ActivityRings_module=__webpack_require__("./src/components/ActivityRings.module.css"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),defaultOptions={containerHeight:"100%",containerWidth:"100%",paddingBetweenRings:.75,initialRadius:30,animationDurationMillis:1e3,animationTimingFunction:"ease-in-out",backgroundOpacity:.4};function ActivityRings(props){var options=Object.assign({},defaultOptions,props.options),viewBoxSize=100+props.rings.length*(21.5+options.paddingBetweenRings);return Object(jsx_runtime.jsx)("svg",{viewBox:"0 0 "+viewBoxSize+" "+viewBoxSize,height:options.containerHeight,width:options.containerWidth,children:Object(jsx_runtime.jsx)("g",{children:props.rings.map((function(ring,index){return Object(jsx_runtime.jsx)(InnerActivityRing,{index:index,ring:ring,options:options},index)}))})})}function InnerActivityRing(props){var radius=props.options.initialRadius+props.index*(12+props.options.paddingBetweenRings),dashArrayPart=Math.min(.999,props.ring.filledPercentage)*(2*radius*Math.PI);return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("circle",{cx:"50%",cy:"50%",r:radius,stroke:props.ring.color,strokeOpacity:props.options.backgroundOpacity,strokeWidth:12,className:ActivityRings_module.innerActivityRingBackground}),Object(jsx_runtime.jsx)("circle",{cx:"50%",cy:"50%",r:radius,strokeDasharray:dashArrayPart+" "+"9".repeat(props.index+4),stroke:props.ring.color,strokeWidth:12,style:{animationDuration:props.options.animationDurationMillis+"ms",animationTimingFunction:props.options.animationTimingFunction},className:ActivityRings_module.innerActivityRing})]})}ActivityRings.displayName="ActivityRings";try{ActivityRings.displayName="ActivityRings",ActivityRings.__docgenInfo={description:"",displayName:"ActivityRings",props:{rings:{defaultValue:null,description:"",name:"rings",required:!0,type:{name:"ActivityRing[]"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"ActivityRingContainerOptions"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActivityRings.tsx#ActivityRings"]={docgenInfo:ActivityRings.__docgenInfo,name:"ActivityRings",path:"src/components/ActivityRings.tsx#ActivityRings"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/ActivityRings",component:ActivityRings};var ActivityRings_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(ActivityRings,{rings:args.rings,options:args.options})};ActivityRings_stories_Template.displayName="Template";var SimpleThreeRings=ActivityRings_stories_Template.bind({});SimpleThreeRings.args={rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerHeight:"75vh"}};var SimpleTwoRings=ActivityRings_stories_Template.bind({});SimpleTwoRings.args={rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"}],options:{containerHeight:"75vh",backgroundOpacity:.3}};var SimpleALotOfRings=ActivityRings_stories_Template.bind({});SimpleALotOfRings.args={rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"},{filledPercentage:.1,color:"#b91c1c"},{filledPercentage:1,color:"#00FF00"},{filledPercentage:.5,color:"#0284c7"},{filledPercentage:.25,color:"#f123ff"},{filledPercentage:.1,color:"#FF0000"},{filledPercentage:.75,color:"#0000FF"}],options:{containerHeight:"75vh"}};var CustomizedThreeRings=ActivityRings_stories_Template.bind({});CustomizedThreeRings.args={rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerHeight:"75vh",animationTimingFunction:"cubic-bezier(.47,1.64,.41,.8)",animationDurationMillis:2e3,backgroundOpacity:.2}};var ActivityRings_stories_Gallery=function Gallery(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(ActivityRings,{rings:[{filledPercentage:.5,color:"#fa0e5a"},{filledPercentage:.75,color:"#afff02"},{filledPercentage:.25,color:"#00fff8"}],options:{containerWidth:"10vw"}}),Object(jsx_runtime.jsx)(ActivityRings,{rings:[{filledPercentage:.6,color:"#F1337F"},{filledPercentage:.65,color:"#00FFF8"}],options:{containerWidth:"10vw"}}),Object(jsx_runtime.jsx)(ActivityRings,{rings:[{filledPercentage:.15,color:"#00FF00"},{filledPercentage:.66,color:"#0284c7"},{filledPercentage:1,color:"#f123ff"},{filledPercentage:.25,color:"#FF0000"}],options:{containerWidth:"10vw"}}),Object(jsx_runtime.jsx)(ActivityRings,{rings:[{filledPercentage:.6,color:"#F00"},{filledPercentage:.65,color:"#0F0"},{filledPercentage:.7,color:"#00F"}],options:{containerWidth:"10vw"}})]})},ActivityRings_stories_RandomGallery=function RandomGallery(){var generateRingData=function generateRingData(amount){return Array(amount).fill({filledPercentage:0,color:""}).map((function(){return{filledPercentage:Math.min(Math.random()+.1,1),color:"rgb("+254*Math.random()+", "+254*Math.random()+", "+254*Math.random()+")"}}))};return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(ActivityRings,{rings:generateRingData(Math.ceil(4*Math.random()+2)),options:{containerWidth:"10vw"}}),Object(jsx_runtime.jsx)(ActivityRings,{rings:generateRingData(Math.ceil(4*Math.random()+2)),options:{containerWidth:"10vw"}}),Object(jsx_runtime.jsx)(ActivityRings,{rings:generateRingData(Math.ceil(4*Math.random()+2)),options:{containerWidth:"10vw"}}),Object(jsx_runtime.jsx)(ActivityRings,{rings:generateRingData(Math.ceil(4*Math.random()+2)),options:{containerWidth:"10vw"}})]})};SimpleThreeRings.parameters=Object.assign({storySource:{source:"(args) => <ActivityRings rings={args.rings} options={args.options} />"}},SimpleThreeRings.parameters),SimpleTwoRings.parameters=Object.assign({storySource:{source:"(args) => <ActivityRings rings={args.rings} options={args.options} />"}},SimpleTwoRings.parameters),SimpleALotOfRings.parameters=Object.assign({storySource:{source:"(args) => <ActivityRings rings={args.rings} options={args.options} />"}},SimpleALotOfRings.parameters),CustomizedThreeRings.parameters=Object.assign({storySource:{source:"(args) => <ActivityRings rings={args.rings} options={args.options} />"}},CustomizedThreeRings.parameters),ActivityRings_stories_Gallery.parameters=Object.assign({storySource:{source:"() => {\n  return (\n    <>\n      <ActivityRings rings={[\n        {filledPercentage: 0.5, color: '#fa0e5a'},\n        {filledPercentage: 0.75, color: '#afff02'},\n        {filledPercentage: 0.25, color: '#00fff8'},\n      ]} options={{containerWidth: '10vw'}} />\n      <ActivityRings rings={[\n        {filledPercentage: 0.6, color: '#F1337F'},\n        {filledPercentage: 0.65, color: '#00FFF8'},\n      ]} options={{containerWidth: '10vw'}} />\n      <ActivityRings rings={[\n        {filledPercentage: 0.15, color: '#00FF00'},\n        {filledPercentage: 0.66, color: '#0284c7'},\n        {filledPercentage: 1, color: '#f123ff'},\n        {filledPercentage: 0.25, color: '#FF0000'},\n      ]} options={{containerWidth: '10vw'}} />\n      <ActivityRings rings={[\n        {filledPercentage: 0.6, color: '#F00'},\n        {filledPercentage: 0.65, color: '#0F0'},\n        {filledPercentage: 0.7, color: '#00F'},\n      ]} options={{containerWidth: '10vw'}} />\n    </>\n  );\n}"}},ActivityRings_stories_Gallery.parameters),ActivityRings_stories_RandomGallery.parameters=Object.assign({storySource:{source:"() => {\n  const generateRingData = (amount: number) => {\n    return Array<ActivityRing>(amount).fill({filledPercentage: 0, color: ''}).map(() => ({filledPercentage: Math.min(Math.random()+0.1, 1), color: `rgb(${Math.random()*254}, ${Math.random()*254}, ${Math.random()*254})`}));\n  };\n\n  return (\n    <>\n      <ActivityRings rings={generateRingData(Math.ceil(Math.random()*4+2))} options={{containerWidth: '10vw'}} />\n      <ActivityRings rings={generateRingData(Math.ceil(Math.random()*4+2))} options={{containerWidth: '10vw'}} />\n      <ActivityRings rings={generateRingData(Math.ceil(Math.random()*4+2))} options={{containerWidth: '10vw'}} />\n      <ActivityRings rings={generateRingData(Math.ceil(Math.random()*4+2))} options={{containerWidth: '10vw'}} />\n    </>\n  );\n}"}},ActivityRings_stories_RandomGallery.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.cjs-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);