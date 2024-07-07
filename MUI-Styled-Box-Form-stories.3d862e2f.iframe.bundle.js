"use strict";(self.webpackChunkjrgcomponents=self.webpackChunkjrgcomponents||[]).push([[949],{"./src/MUI/Styled/Box/Form.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestForm:()=>TestForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Form_stories});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Field=__webpack_require__("./src/MUI/Styled/FormControl/Field.tsx"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Form=function Form(_ref){var initialFields=_ref.fields,_React$useState=react.useState(initialFields),_React$useState2=(0,slicedToArray.A)(_React$useState,2),fields=_React$useState2[0],setFields=_React$useState2[1];return __jsx(Box.A,{component:"form"},Object.entries(fields).map((function(_ref2){var _ref3=(0,slicedToArray.A)(_ref2,2),id=_ref3[0],fieldProps=_ref3[1];return __jsx(Field.A,(0,esm_extends.A)({key:id},fieldProps,{nameID:id,onChange:function onChange(e){return function handleChange(id,value){var updatedFields=_objectSpread(_objectSpread({},fields),{},(0,defineProperty.A)({},id,_objectSpread(_objectSpread({},fields[id]),{},{value})));setFields(updatedFields)}(id,e.target.value)}}))})))};const Box_Form=Form;Form.__docgenInfo={description:"",methods:[],displayName:"Form",props:{fields:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [id: string]: FieldProps }",signature:{properties:[{key:{name:"string"},value:{name:"intersection",raw:"Field & {\n  nameID: string;\n  value?: string;\n  onChange?: any;\n  messages?: Message[];\n}",elements:[{name:"Field"},{name:"signature",type:"object",raw:"{\n  nameID: string;\n  value?: string;\n  onChange?: any;\n  messages?: Message[];\n}",signature:{properties:[{key:"nameID",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!1}},{key:"onChange",value:{name:"any",required:!1}},{key:"messages",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  level: string;\n  value: string;\n}",signature:{properties:[{key:"level",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Message[]",required:!1}}]}}],required:!0}}]}},description:""},messages:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  level: string;\n  value: string;\n}",signature:{properties:[{key:"level",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Message[]"},description:""}}};var console=__webpack_require__("./node_modules/console-browserify/index.js"),Form_stories_jsx=react.createElement;const Form_stories={title:"Components/Form",component:Box_Form};var TestForm={render:function render(args){return Form_stories_jsx(Box_Form,args)},args:{fields:{username:{nameID:"username",label:"Username",type:"text",value:"",placeholder:"Enter your username",onChange:function onChange(){return console.log("Username changed")},messages:[]},password:{nameID:"password",label:"Password",type:"password",value:"",placeholder:"Enter your password",onChange:function onChange(){return console.log("Password changed")},messages:[]},accountType:{nameID:"accountType",label:"Account Type",type:"select",value:"",items:[{value:"personal",label:"Personal"},{value:"business",label:"Business"}],onChange:function onChange(){return console.log("Account Type changed")},messages:[]},agreeTerms:{nameID:"agreeTerms",label:"Agree to Terms",type:"checkbox",value:"false",onChange:function onChange(){return console.log("Agree to Terms changed")},messages:[]}},messages:[]}};TestForm.parameters={...TestForm.parameters,docs:{...TestForm.parameters?.docs,source:{originalSource:"{\n  render: args => <Form {...args} />,\n  args: {\n    fields: {\n      username: {\n        nameID: 'username',\n        label: 'Username',\n        type: 'text',\n        value: '',\n        placeholder: 'Enter your username',\n        // Provide a no-op function or simple console log for onChange\n        onChange: () => console.log('Username changed'),\n        messages: []\n      },\n      password: {\n        nameID: 'password',\n        label: 'Password',\n        type: 'password',\n        value: '',\n        placeholder: 'Enter your password',\n        // Provide a no-op function or simple console log for onChange\n        onChange: () => console.log('Password changed'),\n        messages: []\n      },\n      accountType: {\n        nameID: 'accountType',\n        label: 'Account Type',\n        type: 'select',\n        value: '',\n        items: [{\n          value: 'personal',\n          label: 'Personal'\n        }, {\n          value: 'business',\n          label: 'Business'\n        }],\n        // Provide a no-op function or simple console log for onChange\n        onChange: () => console.log('Account Type changed'),\n        messages: []\n      },\n      agreeTerms: {\n        nameID: 'agreeTerms',\n        label: 'Agree to Terms',\n        type: 'checkbox',\n        value: 'false',\n        // Provide a no-op function or simple console log for onChange\n        onChange: () => console.log('Agree to Terms changed'),\n        messages: []\n      }\n    },\n    messages: [\n      // Define any initial form-wide messages here\n    ]\n  }\n}",...TestForm.parameters?.docs?.source}}};const __namedExportsOrder=["TestForm"]},"./src/MUI/Styled/FormControl/Field.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>FormControl_Field});var FormControl=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),FormLabel=__webpack_require__("./node_modules/@mui/material/FormLabel/FormLabel.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Collapse=__webpack_require__("./node_modules/@mui/material/Collapse/Collapse.js"),Alert=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),FormGroup=__webpack_require__("./node_modules/@mui/material/FormGroup/FormGroup.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),__jsx=react.createElement;function CheckField(_ref){var id=_ref.id,value=_ref.value,name=_ref.name,onChange=_ref.onChange,helperText=_ref.helperText,label=_ref.label;return __jsx(FormGroup.A,null,__jsx(FormControlLabel.A,{control:__jsx(Checkbox.A,{required:!0,id,name,checked:value,onChange}),label:null==helperText?label:helperText}))}CheckField.__docgenInfo={description:"",methods:[],displayName:"CheckField",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};var TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),PasswordField_jsx=react.createElement;function PasswordField(_ref){var id=_ref.id,value=_ref.value,onChange=_ref.onChange,helperText=_ref.helperText,name=_ref.name,label=_ref.label,_ref$autoComplete=_ref.autoComplete,autoComplete=void 0===_ref$autoComplete?"current-password":_ref$autoComplete;return PasswordField_jsx(TextField.A,{key:"field",fullWidth:!0,name,id,label:null==helperText?label:helperText,variant:"outlined",type:"password",autoComplete,required:!0,value,onChange})}PasswordField.__docgenInfo={description:"",methods:[],displayName:"PasswordField",props:{id:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},autoComplete:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'current-password'",computed:!1}}}};var RadioGroup=__webpack_require__("./node_modules/@mui/material/RadioGroup/RadioGroup.js"),Radio=__webpack_require__("./node_modules/@mui/material/Radio/Radio.js"),RadioField_jsx=react.createElement;function SelectField(_ref){var id=_ref.id,value=_ref.value,onChange=_ref.onChange,items=_ref.items,name=_ref.name;return RadioField_jsx(RadioGroup.A,{key:"field","aria-labelledby":id,id,name:id,value,onChange},null==items?void 0:items.map((function(item,index){var _item$value,_item$value2,_item$label;return RadioField_jsx(FormControlLabel.A,{key:index,id:(null!==(_item$value=item.value)&&void 0!==_item$value?_item$value:item).replace(/[\W_]+/g,""),value:null!==(_item$value2=item.value)&&void 0!==_item$value2?_item$value2:item,control:RadioField_jsx(Radio.A,null),name,label:null!==(_item$label=item.label)&&void 0!==_item$label?_item$label:item})})))}SelectField.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{id:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"any"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};var TextField_jsx=react.createElement;function TextField_TextField(_ref){var id=_ref.id,value=_ref.value,onChange=_ref.onChange,helperText=_ref.helperText,label=_ref.label,placeholder=_ref.placeholder,name=_ref.name,autoComplete=_ref.autoComplete;return TextField_jsx(TextField.A,{fullWidth:!0,id,autoComplete,name,label:null!=helperText?helperText:label,variant:"outlined",placeholder,required:!0,value,onChange})}TextField_TextField.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{id:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},autoComplete:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""}}};var Field_jsx=react.createElement,Field=function Field(_ref){var _inputComponents,nameID=_ref.nameID,label=_ref.label,description=_ref.description,value=_ref.value,onChange=_ref.onChange,autoComplete=_ref.autoComplete,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"":_ref$placeholder,_ref$messages=_ref.messages,messages=void 0===_ref$messages?[]:_ref$messages,_ref$type=_ref.type,type=void 0===_ref$type?"text":_ref$type,items=_ref.items,inputComponents=(0,react.useMemo)((function(){var injectedOnChange=onChange?function(target){onChange(target,nameID)}:null;return{text:Field_jsx(TextField_TextField,{id:nameID,name:nameID,autoComplete,value,label,onChange:injectedOnChange,placeholder}),password:Field_jsx(PasswordField,{id:nameID,name:nameID,autoComplete,value,onChange:injectedOnChange}),select:Field_jsx(SelectField,{id:nameID,name:nameID,value,onChange:injectedOnChange,items}),checkbox:Field_jsx(CheckField,{id:nameID,name:nameID,value:["on","true"].includes(null==value?void 0:value.toLowerCase()),onChange:injectedOnChange}),radio:Field_jsx(SelectField,{id:nameID,name:nameID,value,onChange:injectedOnChange,items}),default:Field_jsx(TextField_TextField,{id:nameID,name:nameID,autoComplete,value,onChange:injectedOnChange})}}),[type,nameID,value,onChange,placeholder,items]);return Field_jsx(FormControl.A,{required:!0,fullWidth:!0,sx:{my:"1rem"}},"text"!==type&&Field_jsx(FormLabel.A,{id:nameID,htmlFor:nameID},label),description&&Field_jsx(Typography.A,{variant:"body1",gutterBottom:!0},description),null!==(_inputComponents=inputComponents[type])&&void 0!==_inputComponents?_inputComponents:inputComponents.default,messages&&Field_jsx(Collapse.A,{in:(null==messages?void 0:messages.length)>0},null==messages?void 0:messages.map((function(message,index){return Field_jsx(Alert.A,{key:index,severity:message.level,sx:{mt:1}},message.value)}))))};const FormControl_Field=Field;Field.__docgenInfo={description:"",methods:[],displayName:"Field",props:{nameID:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"any"},description:""},messages:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  level: string;\n  value: string;\n}",signature:{properties:[{key:"level",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Message[]"},description:"",defaultValue:{value:"[]",computed:!1}},placeholder:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1}}}},"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty})},"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray})}}]);