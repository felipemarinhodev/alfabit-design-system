/*! For license information please see Button-Button-mdx.19b02e1a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[560],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./components/Button/Button.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_Users_felipemarinho_Dev_Alura_React_react_criando_design_system_tailwind_alfabit_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Button/Button.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h3:"h3",h2:"h2"},(0,_Users_felipemarinho_Dev_Alura_React_react_criando_design_system_tailwind_alfabit_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"button",children:"Button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This is the button component."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary",children:"Primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Disabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"secondary",children:"Secondary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Secondary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled-secondary",children:"Disabled Secondary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__.SecondaryDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"tertiary",children:"Tertiary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Tertiary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled-tertiary",children:"Disabled Tertiary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__.TertiaryDisabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"violet-theme",children:"Violet Theme"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__.Violet}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled-violet",children:"Disabled Violet"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__.VioletSecondary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled-violet-1",children:"Disabled Violet"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Button_stories_ts__WEBPACK_IMPORTED_MODULE_2__.VioletTertiary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"interactive-documentation",children:"Interactive Documentation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_felipemarinho_Dev_Alura_React_react_criando_design_system_tailwind_alfabit_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_felipemarinho_Dev_Alura_React_react_criando_design_system_tailwind_alfabit_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_felipemarinho_Dev_Alura_React_react_criando_design_system_tailwind_alfabit_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["children","className","disabled","variant"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function getVariant(variant,disabled){var variantStyle="";switch(variant){case"primary":default:variantStyle="bg-primary text-white";break;case"secondary":variantStyle="bg-secondary text-white";break;case"tertiary":return disabled?"bg-white text-disabled":"bg-white text-primary"}return disabled?"bg-disabled text-disabled":variantStyle}var Button=function Button(_ref){var children=_ref.children,className=_ref.className,disabled=_ref.disabled,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,props=(0,_Users_felipemarinho_Dev_Alura_React_react_criando_design_system_tailwind_alfabit_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("button",(0,_Users_felipemarinho_Dev_Alura_React_react_criando_design_system_tailwind_alfabit_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:"\n        rounded-md px-6 py-2xs \n        ".concat(getVariant(variant,disabled),"\n        ").concat(className,"\n      "),disabled},props),children)};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/Button/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,Secondary:()=>Secondary,SecondaryDisabled:()=>SecondaryDisabled,Tertiary:()=>Tertiary,TertiaryDisabled:()=>TertiaryDisabled,Violet:()=>Violet,VioletSecondary:()=>VioletSecondary,VioletTertiary:()=>VioletTertiary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Disabled$parameters,_Disabled$parameters2,_Secondary$parameters,_Secondary$parameters2,_SecondaryDisabled$pa,_SecondaryDisabled$pa2,_Tertiary$parameters,_Tertiary$parameters2,_TertiaryDisabled$par,_TertiaryDisabled$par2,_Violet$parameters,_Violet$parameters2,_VioletSecondary$para,_VioletSecondary$para2,_VioletTertiary$param,_VioletTertiary$param2,_Users_felipemarinho_Dev_Alura_React_react_criando_design_system_tailwind_alfabit_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_felipemarinho_Dev_Alura_React_react_criando_design_system_tailwind_alfabit_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Button",component:__webpack_require__("./components/Button/Button.tsx").Z,argTypes:{children:{type:"string"},disabled:{type:"boolean",defaultValue:!1,description:"The default value is false."},className:{type:"string",defaultValue:"",description:"The value acceptable are '' or 'theme-violet'."},onClick:{action:"clicked"}}};var Primary={args:{children:"Button"}},Disabled={args:{children:"Button",disabled:!0}},Secondary={args:{children:"Button",variant:"secondary"}},SecondaryDisabled={args:{children:"Button",variant:"secondary",disabled:!0}},Tertiary={args:{children:"Button",variant:"tertiary"}},TertiaryDisabled={args:{children:"Button",variant:"tertiary",disabled:!0}},Violet={args:{children:"Button",className:"theme-violet"}},VioletSecondary={args:{children:"Button",className:"theme-violet",variant:"secondary"}},VioletTertiary={args:{children:"Button",className:"theme-violet",variant:"tertiary"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button',\n    disabled: true\n  }\n}"},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters2=_Disabled$parameters2.docs)||void 0===_Disabled$parameters2?void 0:_Disabled$parameters2.source)})}),Secondary.parameters=_objectSpread(_objectSpread({},Secondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'secondary'\n  }\n}"},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters2=_Secondary$parameters2.docs)||void 0===_Secondary$parameters2?void 0:_Secondary$parameters2.source)})}),SecondaryDisabled.parameters=_objectSpread(_objectSpread({},SecondaryDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SecondaryDisabled$pa=SecondaryDisabled.parameters)||void 0===_SecondaryDisabled$pa?void 0:_SecondaryDisabled$pa.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'secondary',\n    disabled: true\n  }\n}"},null===(_SecondaryDisabled$pa2=SecondaryDisabled.parameters)||void 0===_SecondaryDisabled$pa2||null===(_SecondaryDisabled$pa2=_SecondaryDisabled$pa2.docs)||void 0===_SecondaryDisabled$pa2?void 0:_SecondaryDisabled$pa2.source)})}),Tertiary.parameters=_objectSpread(_objectSpread({},Tertiary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Tertiary$parameters=Tertiary.parameters)||void 0===_Tertiary$parameters?void 0:_Tertiary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'tertiary'\n  }\n}"},null===(_Tertiary$parameters2=Tertiary.parameters)||void 0===_Tertiary$parameters2||null===(_Tertiary$parameters2=_Tertiary$parameters2.docs)||void 0===_Tertiary$parameters2?void 0:_Tertiary$parameters2.source)})}),TertiaryDisabled.parameters=_objectSpread(_objectSpread({},TertiaryDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TertiaryDisabled$par=TertiaryDisabled.parameters)||void 0===_TertiaryDisabled$par?void 0:_TertiaryDisabled$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button',\n    variant: 'tertiary',\n    disabled: true\n  }\n}"},null===(_TertiaryDisabled$par2=TertiaryDisabled.parameters)||void 0===_TertiaryDisabled$par2||null===(_TertiaryDisabled$par2=_TertiaryDisabled$par2.docs)||void 0===_TertiaryDisabled$par2?void 0:_TertiaryDisabled$par2.source)})}),Violet.parameters=_objectSpread(_objectSpread({},Violet.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Violet$parameters=Violet.parameters)||void 0===_Violet$parameters?void 0:_Violet$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button',\n    className: 'theme-violet'\n  }\n}"},null===(_Violet$parameters2=Violet.parameters)||void 0===_Violet$parameters2||null===(_Violet$parameters2=_Violet$parameters2.docs)||void 0===_Violet$parameters2?void 0:_Violet$parameters2.source)})}),VioletSecondary.parameters=_objectSpread(_objectSpread({},VioletSecondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_VioletSecondary$para=VioletSecondary.parameters)||void 0===_VioletSecondary$para?void 0:_VioletSecondary$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button',\n    className: 'theme-violet',\n    variant: 'secondary'\n  }\n}"},null===(_VioletSecondary$para2=VioletSecondary.parameters)||void 0===_VioletSecondary$para2||null===(_VioletSecondary$para2=_VioletSecondary$para2.docs)||void 0===_VioletSecondary$para2?void 0:_VioletSecondary$para2.source)})}),VioletTertiary.parameters=_objectSpread(_objectSpread({},VioletTertiary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_VioletTertiary$param=VioletTertiary.parameters)||void 0===_VioletTertiary$param?void 0:_VioletTertiary$param.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Button',\n    className: 'theme-violet',\n    variant: 'tertiary'\n  }\n}"},null===(_VioletTertiary$param2=VioletTertiary.parameters)||void 0===_VioletTertiary$param2||null===(_VioletTertiary$param2=_VioletTertiary$param2.docs)||void 0===_VioletTertiary$param2?void 0:_VioletTertiary$param2.source)})})},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);