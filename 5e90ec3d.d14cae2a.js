(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(75)),c=n(83),b={id:"inputs",title:"Inputs",sidebar_label:"Inputs"},i={unversionedId:"inputs",id:"inputs",isDocsHomePage:!1,title:"Inputs",description:"Text",source:"@site/docs/inputs.md",permalink:"/startaideia-react-forms/docs/inputs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/inputs.md",sidebar_label:"Inputs",sidebar:"someSidebar",previous:{title:"First Steps",permalink:"/startaideia-react-forms/docs/first-step"},next:{title:"Rules",permalink:"/startaideia-react-forms/docs/rules"}},o=[{value:"Text",id:"text",children:[]},{value:"Email",id:"email",children:[]},{value:"Password",id:"password",children:[]},{value:"CPF",id:"cpf",children:[]},{value:"CNPJ",id:"cnpj",children:[]},{value:"CPF or CNPJ",id:"cpf-or-cnpj",children:[]},{value:"CEP",id:"cep",children:[]},{value:"Phone",id:"phone",children:[]},{value:"Checkbox",id:"checkbox",children:[]},{value:"Select",id:"select",children:[]}],u={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"text"},"Text"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Text name="name" label="Whats your name?" placeholder="Joe Doe" />\n')),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.Text,{name:"name",label:"Whats your name?",placeholder:"Joe Doe"})),Object(l.b)("h2",{id:"email"},"Email"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.Email />\n")),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.Email,null)),Object(l.b)("p",null,"Default input props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"email")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"E-mail")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"email")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isEmail"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validates that the input is a valid email"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"password"},"Password"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.Password />\n")),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.Password,null)),Object(l.b)("p",null,"Default input props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"password")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Senha")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"password")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isLength"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validates that the input length"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"min: 6, max: 16")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isRequired"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validates that the input is filled"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"cpf"},"CPF"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.CPF />\n")),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.CPF,null)),Object(l.b)("p",null,"Default input props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cpf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CPF")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isCPF"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validates that the input is valid CPF"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"cnpj"},"CNPJ"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.CNPJ />\n")),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.CNPJ,null)),Object(l.b)("p",null,"Default input props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cnpj")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CNPJ")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isCNPJ"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validates that the input is valid CNPJ"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"cpf-or-cnpj"},"CPF or CNPJ"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.CPFCNPJ />\n")),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.CPFCNPJ,null)),Object(l.b)("p",null,"Default input props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cpf_cnpj")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CPF or CNPJ")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isCPFCNPJ"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validates that the input is valid CPF or CNPJ"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"cep"},"CEP"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.CEP />\n")),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.CEP,null)),Object(l.b)("p",null,"Default input props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cep")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CEP")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"text")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isLength"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"validates that the input length"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"min: 9")))),Object(l.b)("h2",{id:"phone"},"Phone"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Phone\n  label="Telefone Fixo + Pa\xeds"\n  name="phone_country"\n  country\n  mobile={false}\n/>\n<Input.Phone label="Celular" name="mobile" phone={false} />\n<Input.Phone\n  label="Celular + Pa\xeds"\n  name="mobile_country"\n  country\n  phone={false}\n/>\n<Input.Phone label="Celular ou Telefone" name="phone_complete" />\n<Input.Phone\n  label="Celular ou Telefone + Pa\xecs"\n  name="phone_complete_contry"\n  country\n/>\n')),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.Phone,{label:"Telefone Fixo + Pa\xeds",name:"phone_country",country:!0,mobile:!1}),Object(l.b)(c.c.Phone,{label:"Celular",name:"mobile",phone:!1}),Object(l.b)(c.c.Phone,{label:"Celular + Pa\xeds",name:"mobile_country",country:!0,phone:!1}),Object(l.b)(c.c.Phone,{label:"Celular ou Telefone",name:"phone_complete"}),Object(l.b)(c.c.Phone,{label:"Celular ou Telefone + Pa\xecs",name:"phone_complete_contry",country:!0})),Object(l.b)("p",null,"Default input props"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Prop"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"phone")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input label"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Telefone")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the input type"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"phone")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"country"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if must add country code"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"phone"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if is a house phone"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mobile"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if is a mobile phone"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(l.b)("h2",{id:"checkbox"},"Checkbox"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Checkbox name="remember_me" text="Remember me" />\n')),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.Checkbox,{name:"remember_me",text:"Remember me"})),Object(l.b)("h2",{id:"select"},"Select"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'const dataSet = [\n  {\n    value: "M",\n    label: "Masculino",\n  },\n  {\n    value: "F",\n    label: "Feminino",\n  },\n]\n\n<Input.Select label="Sexo" name="gender" source={dataSet} />\n')),Object(l.b)(c.b,{mdxType:"Form"},Object(l.b)(c.c.Select,{label:"Sexo",name:"gender",source:[{value:"M",label:"Masculino"},{value:"F",label:"Feminino"}]})))}p.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return W})),n.d(t,"b",(function(){return ce})),n.d(t,"c",(function(){return re}));var a=n(0),r=n.n(a),l=n(100),c=n(95),b=n.n(c),i=n(96),o=n(101),u=n.n(o),p=n(102),s=n.n(p),m=n(99),d=n.n(m),j=n(108),O=n(103),g=n.n(O),h=n(104),f=n.n(h),N=n(106),v=n(107);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function P(e,t){return t||(t=e.slice(0)),e.raw=t,e}var C={colors:{transparent:"transparent",valid:"#48BB78",invalid:"#F56565",black:"#2D3748",white:"#fff",primary:"#3f51b5"},fonts:{body:"'Roboto', sans-serif"},fontSize:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"20px"},components:{input:"\n      border-width: 0px 0px 1px 0px;\n    "}};function E(e){return function(t){var n=t.theme;return b.a.get(n,e,b.a.get(C,e,""))}}function k(){var e=P(["\n  position: absolute;\n  width: 100%;\n  height: auto;\n  max-height: 100px;\n  top: 40px;\n  left: 0px;\n  background: ",";\n  border: 1px solid #e6e6e6;\n  z-index: 9;\n  padding: 0;\n  list-style: none;\n  font-family: ",";\n  font-size: ",";\n  display: none;\n\n  &.has-focus {\n    display: block;\n  }\n\n  li {\n    padding: 8px 10px;\n    color: ",";\n\n    &:hover {\n      cursor: pointer;\n      background: ",";\n      color: ",";\n    }\n  }\n\n  ",";\n"]);return k=function(){return e},e}var S=l.a.ul(k(),E("colors.white"),E("fonts.body"),E("fontSize.sm"),E("colors.black"),E("colors.primary"),E("colors.white"),E("components.dropdown"));function F(){var e=P(["\n  margin: 5px 0;\n  display: block;\n  color: ",";\n  font-family: ",";\n  padding: 0;\n  font-size: ",";\n\n  &.is-invalid {\n    color: ",";\n  }\n\n  &.is-valid {\n    color: ",";\n  }\n"]);return F=function(){return e},e}var w=l.a.p(F(),E("colors.black"),E("fonts.body"),E("fontSize.xs"),E("colors.invalid"),E("colors.valid"));function I(){var e=P(["\n  font-family: ",";\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  font-weight: bold;\n  outline: none;\n  padding: 8px 20px;\n  font-size: ",";\n  margin-top: 5px;\n  border-radius: 5px;\n  transition: ease 0.25s;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:active {\n    transform: scale(1.05);\n  }\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  ",";\n"]);return I=function(){return e},e}var T=l.a.button(I(),E("fonts.body"),E("colors.primary"),E("colors.primary"),E("colors.white"),E("fontSize.sm"),E("components.button"));function J(){var e=P(["\n  padding-top: 8px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  .icon-container {\n    position: absolute;\n    right: 0;\n    bottom: 2px;\n    font-size: ",";\n    color: ",";\n    height: 30px;\n    min-width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    &:focus {\n      border-color: ",";\n    }\n\n    &.is-invalid {\n      color: ",";\n    }\n\n    &.is-valid {\n      color: ",";\n    }\n\n    &.has-before-icon {\n      left: 0;\n      right: inherit;\n    }\n  }\n"]);return J=function(){return e},e}var V=l.a.div(J(),E("fontSize.lg"),E("colors.black"),E("colors.primary"),E("colors.invalid"),E("colors.valid"));function D(){var e=P(["\n  height: 30px;\n  border: 1px solid #ccc;\n  border-radius: 0px;\n  outline: none;\n  padding: 0px 10px;\n  font-family: ",";\n  color: ",";\n  font-size: ",";\n  transition: 0.25s;\n  flex-grow: 1;\n\n  &:focus {\n    border-color: ",";\n  }\n\n  &.is-invalid {\n    color: ",";\n    border-color: ",";\n  }\n\n  &.is-valid {\n    color: ",";\n    border-color: ",";\n  }\n\n  &.has-before-icon {\n    padding-left: 30px;\n  }\n\n  ","\n"]);return D=function(){return e},e}var L=l.a.input(D(),E("fonts.body"),E("colors.black"),E("fontSize.sm"),E("colors.primary"),E("colors.invalid"),E("colors.invalid"),E("colors.valid"),E("colors.valid"),E("components.input"));function _(){var e=P(["\n  margin-bottom: 5px;\n  display: block;\n  color: ",";\n  font-family: ",";\n  font-weight: bold;\n  font-size: ",";\n\n  &.has-focus {\n    color: ",";\n  }\n\n  &.is-invalid {\n    color: ",";\n  }\n\n  &.is-valid {\n    color: ",";\n  }\n"]);return _=function(){return e},e}var z=l.a.label(_(),E("colors.black"),E("fonts.body"),E("fontSize.sm"),E("colors.primary"),E("colors.invalid"),E("colors.valid"));function R(){var e=P([""]);return R=function(){return e},e}var M=l.a.form(R()),q={isLoading:!1,fields:[],currentValue:{},validationRules:{},validationState:{}},B=r.a.createContext({});function A(e){var t=e.initialValue,n=void 0===t?{}:t,l=e.children,c=Object(a.useState)(y({initialValue:n},q)),b=c[0],i=c[1];return r.a.createElement(B.Provider,{value:{isValid:function(){for(var e in b.validationState)if(!b.validationState[e])return!1;return!0},state:b,setState:i}},l)}var W={Submit:function(e){var t=e.text,n=x(e,["text"]),l=Object(a.useContext)(B),c=l.isValid,b=l.state.isLoading;return r.a.createElement(T,Object.assign({disabled:!c()||b,type:"submit"},n),t)}};function X(e){var t=e.value,n=u()(String(t)).replace(/[^\d\p{L}]/g,"");return 0===n.length||function(e){if(""===e)return!1;if(14!==e.length)return!1;if("00000000000000"===e||"11111111111111"===e||"22222222222222"===e||"33333333333333"===e||"44444444444444"===e||"55555555555555"===e||"66666666666666"===e||"77777777777777"===e||"88888888888888"===e||"99999999999999"===e)return!1;for(var t=e.length-2,n=e.substring(0,t),a=e.substring(t),r=0,l=t-7,c=t;c>=1;c--)r+=n.charAt(t-c)*l--,l<2&&(l=9);var b=r%11<2?0:11-r%11;if(b!==a.charAt(0))return!1;t+=1,n=e.substring(0,t),r=0,l=t-7;for(var i=t;i>=1;i--)r+=n.charAt(t-i)*l--,l<2&&(l=9);return(b=r%11<2?0:11-r%11)===a.charAt(1)}(n)?null:"N\xe3o \xe9 um CNPJ v\xe1lido"}function H(e){var t=e.value,n=u()(String(t)).replace(/[^\d\p{L}]/g,"");return 0===n.length||function(e){if(!e||11!==e.length||"00000000000"===e||"11111111111"===e||"22222222222"===e||"33333333333"===e||"44444444444"===e||"55555555555"===e||"66666666666"===e||"77777777777"===e||"88888888888"===e||"99999999999"===e)return!1;for(var t,n=0,a=1;a<=9;a++)n+=parseInt(e.substring(a-1,a))*(11-a);if(10!==(t=10*n%11)&&11!==t||(t=0),t!==parseInt(e.substring(9,10)))return!1;for(n=0,a=1;a<=10;a++)n+=parseInt(e.substring(a-1,a))*(12-a);return 10!==(t=10*n%11)&&11!==t||(t=0),t===parseInt(e.substring(10,11))}(n)?null:"N\xe3o \xe9 um CPF v\xe1lido"}function U(e){var t=e.mask,n=void 0!==t&&t;return[[10,14],[11,15],[12,18],[13,19]][(e.country?[2,3]:[0,1])[e.mobile?1:0]][n?1:0]}function G(e){var t=e.country,n=e.mobile,a=e.phone;return function(e){var r=t?"+## (##)":"(##)",l=U({country:t,mobile:n,phone:a});return n&&a?e.length<l?d.a.apply(e,r+" ####-####"):d.a.apply(e,r+" #####-####"):n?d.a.apply(e,r+" #####-####"):a?d.a.apply(e,r+" ####-####"):e}}var K={__proto__:null,isRequired:function(e){var t=e.value;return t?0===String(t).replace(/\s/g,"").length?"Campo obrigat\xf3rio":null:"Campo obrigat\xf3rio"},isCPFCNPJ:function(e){var t=e.value,n=u()(String(t)).replace(/[^\d\p{L}]/g,"");return 0===n.length?null:n.length<=11?H({value:n}):X({value:n})},isLength:function(e){var t=e.value,n=e.params,a=u()(String(t)),r=n.exact;if(0===a.length)return null;if(r&&a.length===r)return null;if(r&&a.length!==r)return"O campo precisa ter "+r+" caracteres";if(!s()(a,n)){var l=n.min,c=n.max;return l&&c?"O campo precisa ter entre "+l+" e "+c+" caracteres":l?"O campo precisa ter no m\xednimo "+l+" caracteres":"O campo precisa ter no m\xe1ximo "+c+" caracteres"}return null},isPhone:function(e){var t=e.value,n=e.params,a=u()(String(t));if(0===a.length)return null;if(a.length<U(n))return"Telefone muito curto";var r=Object(j.a)(a,"BR");return(null==r?void 0:r.isValid())?null:"N\xe3o \xe9 um telefone v\xe1lido"},isEqual:function(e){var t=e.value,n=e.params;return g()(t,n)?null:"O valor deste campo est\xe1 incorreto"},isEmail:function(e){var t=e.value.replace(/\s/g,"");return 0===t.length||f()(t)?null:"N\xe3o \xe9 um e-mail v\xe1lido"},isCNPJ:X,isCPF:H};function Q(e){var t=e.beforeIcon,n=e.afterIcon,a=e.errors,r=e.touched,l=[];return e.focus&&l.push("has-focus"),r&&a&&l.push("is-invalid"),r&&!a&&l.push("is-valid"),t&&(l.push("has-icon"),l.push("has-before-icon")),n&&(l.push("has-icon"),l.push("has-after-icon")),l.join(" ")}function Y(e,t){void 0===t&&(t={});var n=Object(a.useContext)(B),r=n.state,l=n.setState,c=y({},r);function i(){var t=b.a.get(c,"initialValue."+e,"");return b.a.get(c,"currentValue."+e,t)}function o(){var n=function(e,t,n){var a=[];for(var r in n)if(n[r]){var l=K[r]({name:e,value:t,params:n[r]});l&&a.push(l)}return a.length>0?a:null}(e,i(),t);return l((function(t){var a;return y({},t,{validationState:y({},t.validationState,(a={},a[e]=!n,a))})})),n}return Object(a.useEffect)((function(){l((function(n){var a=[].concat(n.fields,[e]);return y({},b.a.set(n,"currentValue."+e,i()),b.a.set(n,"validationRules."+e,t),{fields:a})})),o()}),[e,t]),{onChange:function(t){l(y({},b.a.set(c,"currentValue."+e,t)))},getValue:i,getRules:function(){return b.a.get(c,"validationRules."+e,{})},validate:o,value:i()}}function Z(e){var t=e.name,n=e.label,l=e.mask,c=e.beforeIcon,o=e.afterIcon,u=x(e,["name","label","mask","beforeIcon","afterIcon"]),p=Object(a.useState)(b.a.pick(u,b.a.keys(K)))[0],s=Object(a.useState)(b.a.pick(u,["xs","sm","md","lg","xl","xxl"]))[0],m=Y(t,p),j=m.onChange,O=m.getValue,g=m.validate,h=Object(a.useState)(null),f=h[0],N=h[1],v=Object(a.useState)(!1),y=v[0],P=v[1],C=Object(a.useState)(!1),E=C[0],k=C[1],S=b.a.omit(u,b.a.keys(K)),F=Q({beforeIcon:c,afterIcon:o,errors:f,touched:E,focus:y});return r.a.createElement(i.Col,Object.assign({xs:12},s),r.a.createElement(V,{className:F},n&&r.a.createElement(z,{className:F},n),(c||o)&&r.a.createElement("div",{className:"icon-container "+F},c||o),r.a.createElement(L,Object.assign({name:t,onChange:function(e){var t=e.target.value;if(l){var n=t.replace(/[^\d\p{L}]/g,"");t="string"==typeof l?d.a.apply(n,l):l(n)}j(t),N(g())},onBlur:function(){k(!0),P(!1),E||N(g())},onFocus:function(){return P(!0)},value:O(),className:F},S))),E&&(null==f?void 0:f.map((function(e,t){return r.a.createElement(w,{className:F,key:t},e)}))))}function $(){var e=P(["\n  height: 15px;\n  width: 15px;\n  border: 2px solid ",";\n  border-radius: 5px;\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  transition: linear 0.25s;\n  margin-right: 10px;\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &.checked {\n    background: ",";\n    color: ",";\n    border-color: ",";\n  }\n"]);return $=function(){return e},e}function ee(){var e=P(["\n  font-family: ",";\n  display: flex;\n  color: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return ee=function(){return e},e}var te=l.a.div(ee(),E("fonts.body"),E("colors.black")),ne=l.a.div($(),E("colors.black"),E("colors.transparent"),E("colors.primary"),E("colors.primary"),E("colors.white"),E("colors.primary"));function ae(e){var t="##.###.###/####-##";return e.length<=11&&(t="###.###.###-##"),d.a.apply(e,t)}var re={Checkbox:function(e){var t=e.name,n=e.label,l=e.value,c=void 0===l?"on":l,o=e.text,u=x(e,["name","label","value","text"]),p=Object(a.useState)(b.a.pick(u,["xs","sm","md","lg","xl","xxl"]))[0],s=Object(a.useState)(b.a.pick(u,b.a.keys(K)))[0],m=Object(a.useState)(null),d=m[0],j=m[1],O=Object(a.useState)(!1),g=O[0],h=O[1],f=Y(t,s),v=f.onChange,y=f.getValue,P=f.validate,C=Q({errors:d,touched:g});function E(){return y()===c}return r.a.createElement(i.Col,Object.assign({xs:12},p),r.a.createElement(V,null,n&&r.a.createElement(z,null,n),r.a.createElement(te,{onClick:function(){v(E()?null:c),j(P()),h(!0)}},r.a.createElement(ne,{className:E()?"checked":""},r.a.createElement(N.a,null)),o)),g&&(null==d?void 0:d.map((function(e,t){return r.a.createElement(w,{className:C,key:t},e)}))))},Password:function(e){var t=y({},e);return r.a.createElement(Z,Object.assign({isRequired:!0,isLength:{min:6,max:16},name:"password",type:"password",label:"Senha",maxLength:16},t))},CPFCNPJ:function(e){var t=y({},e);return r.a.createElement(Z,Object.assign({mask:ae,maxLength:18,isCPFCNPJ:!0,name:"cpf_cnpj",type:"text",label:"CPF ou CNPJ",inputmode:"numeric"},t))},Select:function(e){var t=e.name,n=e.label,l=e.source,c=x(e,["name","label","source"]),o=Object(a.useState)(b.a.pick(c,["xs","sm","md","lg","xl","xxl"]))[0],u=Object(a.useState)(b.a.pick(c,b.a.keys(K)))[0],p=Object(a.useState)(null),s=p[0],m=p[1],d=Object(a.useState)(null),j=d[0],O=d[1],g=Object(a.useState)(l),h=g[0],f=g[1],N=Object(a.useState)(""),y=N[0],P=N[1],C=Object(a.useState)(!1),E=C[0],k=C[1],F=Object(a.useState)(!1),I=F[0],T=F[1],J=Q({focus:I,touched:E,errors:s}),D=Y(t,u),_=D.onChange,R=D.validate,M=D.value;function q(e,t){return function(){e.value!==(null==j?void 0:j.value)&&(O(e),_(e.value),m(R()),k(t))}}return Object(a.useEffect)((function(){if(!b.a.isEqual(h,l))return f(l),void O(null);f(l)}),[l]),Object(a.useEffect)((function(){if(M){var e=h.find((function(e){return e.value===M}));(null==e?void 0:e.value)!==(null==j?void 0:j.value)&&q(e,!1)()}}),[M]),r.a.createElement(i.Col,Object.assign({xs:12},o),r.a.createElement(V,{className:J},n&&r.a.createElement(z,{className:J},n),r.a.createElement(L,{value:I?y:(null==j?void 0:j.label)||"",onChange:function(e){P(e.target.value)},onBlur:function(){T(!1)},onFocus:function(){T(!0)},className:J}),j&&r.a.createElement("div",{className:"icon-container has-after-icon"},r.a.createElement(v.a,{onClick:function(){O(null),_(null),m(R()),k(!0)}})),r.a.createElement(S,{className:J},h.filter((function(e){return t=y,-1!==e.label.toLowerCase().indexOf(t.toLowerCase());var t})).map((function(e){return r.a.createElement("li",{key:e.value,onMouseDown:q(e,!0)},e.label)})))),null==s?void 0:s.map((function(e,t){return r.a.createElement(w,{className:J,key:t},e)})))},Email:function(e){var t=y({},e);return r.a.createElement(Z,Object.assign({isEmail:!0,name:"email",type:"email",label:"E-mail"},t))},Phone:function(e){var t=e.country,n=void 0!==t&&t,a=e.phone,l=void 0===a||a,c=e.mobile,b=void 0===c||c,i=x(e,["country","phone","mobile"]);return r.a.createElement(Z,Object.assign({mask:G({country:n,mobile:b,phone:l}),name:"phone",type:"tel",label:"Telefone",inputmode:"numeric",maxLength:U({country:n,mobile:b,mask:!0}),isPhone:{country:n,mobile:!l&&b,phone:l,mask:!0}},i))},Text:Z,CNPJ:function(e){var t=y({},e);return r.a.createElement(Z,Object.assign({mask:"##.###.###/####-##",maxLength:18,isCNPJ:!0,name:"cnpj",type:"text",label:"CNPJ",inputmode:"numeric"},t))},CPF:function(e){var t=y({},e);return r.a.createElement(Z,Object.assign({mask:"###.###.###-##",maxLength:14,isCPF:!0,name:"cpf",type:"text",label:"CPF",inputmode:"numeric"},t))},CEP:function(e){var t=y({},e);return r.a.createElement(Z,Object.assign({mask:"#####-###",name:"cep",label:"CEP",inputmode:"numeric",isLength:{exact:9},maxLength:9},t))}};function le(e){var t=e.onSubmit,n=e.children,l=Object(a.useContext)(B),c=l.state,b=l.setState;return r.a.createElement(M,{onSubmit:function(e){try{return e.preventDefault(),b(y({},c,{isLoading:!0})),t?Promise.resolve(t(y({},c.currentValue))).then((function(){b(y({},c,{isLoading:!1}))})):Promise.resolve()}catch(e){return Promise.reject(e)}}},r.a.createElement(i.Container,null,r.a.createElement(i.Row,null,n)))}function ce(e){var t=e.initialValue,n=e.children,a=x(e,["initialValue","children"]);return r.a.createElement(A,{initialValue:t},r.a.createElement(le,Object.assign({},a),n))}ce.Footer=function(e){var t=e.xs,n=void 0===t?12:t,a=e.children;return r.a.createElement(i.Col,{xs:n},a)}}}]);