!function(e,t,a,o,l){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof n[o]&&n[o],s=i.cache||{},r="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,a){if(!s[t]){if(!e[t]){var l="function"==typeof n[o]&&n[o];if(!a&&l)return l(t,!0);if(i)return i(t,!0);if(r&&"string"==typeof t)return r(t);var g=new Error("Cannot find module '"+t+"'");throw g.code="MODULE_NOT_FOUND",g}d.resolve=function(a){var o=e[t][1][a];return null!=o?o:a},d.cache={};var u=s[t]=new c.Module(t);e[t][0].call(u.exports,d,u,u.exports,this)}return s[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=s,c.parent=i,c.register=function(t,a){e[t]=[function(e,t){t.exports=a},{}]},Object.defineProperty(c,"root",{get:function(){return n[o]}}),n[o]=c;for(var g=0;g<t.length;g++)c(t[g])}({jx30P:[function(e,t,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(a);var l=e("@mui/material/Typography"),n=o.interopDefault(l),i=e("react"),s=o.interopDefault(i),r=e("@mui/material/styles"),c=e("../CodeSamples/UncontrolledModals"),g=o.interopDefault(c),u=e("../components/code/CodePreview"),d=o.interopDefault(u),I=e("../components/layouts/PageWithContent"),C=o.interopDefault(I),m=e("../navigationData/pages");a.default=function(){const e=(0,r.useTheme)();return s.default.createElement(C.default,{title:"The Problem",content:s.default.createElement(s.default.Fragment,null,s.default.createElement(n.default,{variant:"body1"},"React applications are made up of components and each component can have its own state. The component controls when and how its state is updated. Sometimes, a single event (such as successfully fetching some data or clicking on a button) can cause independent state updates across multiple components. We have no way of ordering or synchronising these state updates."),s.default.createElement("section",{style:{marginTop:e.spacing(4)}},s.default.createElement(n.default,{gutterBottom:!0,variant:"h5",fontWeight:"bold",component:"h1"},"Why does it matter?"),s.default.createElement("article",null,s.default.createElement(n.default,{variant:"body1"},"Components often use state updates to reflect UI changes. A very common use case is to show a popups by using a ",s.default.createElement("code",null,"boolean")," state variable. What happens if an event causes multiple popups to open up together? Things can get pretty chaotic pretty fast. Too hard to visualise? Try clicking the button below."),s.default.createElement(d.default,{sourceCode:c.SourceCode},s.default.createElement(g.default,null)),s.default.createElement(n.default,{variant:"body1",gutterBottom:!0},"This is just one example. In a complex React application, it is pretty common to have certain side effects trigger state updates in a way that cannot be controlled. If there's no way to control the state updates (like in the example above), user experience is seriously degraded. In fact, in React Native, opening multiple modals at once can cause the app to freeze."),s.default.createElement(n.default,{variant:"body1",gutterBottom:!0},"One way to solve this is to control how these states are updated by some logic and make them update one by one. Trying to manage all such updates is not at all trivial. We need a synchronisation mechanism which lets us control which state update is fired when. This hook lets you do that with minimum configuration and maximum peace of mind.")))),previousLink:m.Pages.Home,nextLink:m.Pages.QuickStart})}},{"@mui/material/Typography":"cEgDo",react:"6uln9","@mui/material/styles":"dP6PR","../CodeSamples/UncontrolledModals":"hfY18","../components/code/CodePreview":"fBsfj","../components/layouts/PageWithContent":"203rO","../navigationData/pages":"jcctD","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hfY18:[function(e,t,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(a),o.export(a,"default",(()=>n.default)),o.export(a,"SourceCode",(()=>l.__sourceCode)),o.export(a,"__sourceCode",(()=>i));var l=e("./UncontrolledModals"),n=o.interopDefault(l);const i="ZXhwb3J0IHsgZGVmYXVsdCwgX19zb3VyY2VDb2RlIGFzIFNvdXJjZUNvZGUgfSBmcm9tICIuL1VuY29udHJvbGxlZE1vZGFscyI7CgpkZWNsYXJlIG1vZHVsZSAiLi9VbmNvbnRyb2xsZWRNb2RhbHMiIHsKICBleHBvcnQgY29uc3QgX19zb3VyY2VDb2RlOiBzdHJpbmc7Cn0K"},{"./UncontrolledModals":"4dpsj","@parcel/transformer-js/src/esmodule-helpers.js":"7baQq"}],"4dpsj":[function(e,t,a){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(a),o.export(a,"__sourceCode",(()=>b));var l=e("@mui/material/Alert"),n=o.interopDefault(l),i=e("@mui/material/Button"),s=o.interopDefault(i),r=e("@mui/material/Drawer"),c=o.interopDefault(r),g=e("@mui/material/Snackbar"),u=o.interopDefault(g),d=e("@mui/material/Typography"),I=o.interopDefault(d),C=e("react"),m=o.interopDefault(C),p=e("../../components/Modal"),f=o.interopDefault(p);a.default=function(){const[e,t]=(0,C.useState)(!1),[a,o]=(0,C.useState)(!1),[l,i]=(0,C.useState)(!1),[r,g]=(0,C.useState)(!1);return m.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},m.default.createElement(f.default,{heading:"Dialog 1 title",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",open:e,onClose:()=>t(!1)}),m.default.createElement(u.default,{open:l},m.default.createElement(n.default,{severity:"success",variant:"filled",onClose:()=>i(!1)},"Alert title: This is a success alert! Yoo-hoo!")),m.default.createElement(s.default,{variant:"contained",onClick:()=>{t(!0),setTimeout((()=>i(!0)),500),setTimeout((()=>o(!0)),100),g(!0)}},"Click Me"),m.default.createElement(f.default,{heading:"Dialog 2 title",body:new Array(20).fill("Praesent mattis a tellus suscipit venenatis. Morbi rutrum, elit in vulputate ornare").join("\n"),open:a,onClose:()=>o(!1)}),m.default.createElement(c.default,{open:r,anchor:"right",onClose:()=>g(!1)},m.default.createElement(I.default,{variant:"h1",sx:{margin:[1,2]}},"Drawer title"),m.default.createElement(s.default,{"aria-label":"close",onClick:()=>g(!1)},"Close")))};const b="aW1wb3J0IEFsZXJ0IGZyb20gIkBtdWkvbWF0ZXJpYWwvQWxlcnQiOwppbXBvcnQgQnV0dG9uIGZyb20gIkBtdWkvbWF0ZXJpYWwvQnV0dG9uIjsKaW1wb3J0IERyYXdlciBmcm9tICJAbXVpL21hdGVyaWFsL0RyYXdlciI7CmltcG9ydCBTbmFja2JhciBmcm9tICJAbXVpL21hdGVyaWFsL1NuYWNrYmFyIjsKaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5IjsKaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAicmVhY3QiOwppbXBvcnQgTW9kYWwgZnJvbSAiLi4vLi4vY29tcG9uZW50cy9Nb2RhbCI7CgpleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVbmNvbnRyb2xsZWRNb2RhbHMoKSB7CiAgY29uc3QgW2ZpcnN0RGlhbG9nT3Blbiwgc2V0Rmlyc3REaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsKICBjb25zdCBbc2Vjb25kRGlhbG9nT3Blbiwgc2V0U2Vjb25kRGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7CiAgY29uc3QgW3N1Y2Nlc3NBbGVydE9wZW4sIHNldFN1Y2Nlc3NBbGVydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOwogIGNvbnN0IFtkcmF3ZXJPcGVuLCBzZXREcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTsKICBjb25zdCBvcGVuTW9kYWxzID0gKCkgPT4gewogICAgc2V0Rmlyc3REaWFsb2dPcGVuKHRydWUpOwogICAgc2V0VGltZW91dCgoKSA9PiBzZXRTdWNjZXNzQWxlcnRPcGVuKHRydWUpLCA1MDApOwogICAgc2V0VGltZW91dCgoKSA9PiBzZXRTZWNvbmREaWFsb2dPcGVuKHRydWUpLCAxMDApOwogICAgc2V0RHJhd2VyT3Blbih0cnVlKTsKICB9OwoKICByZXR1cm4gKAogICAgPGRpdgogICAgICBzdHlsZT17ewogICAgICAgIGRpc3BsYXk6ICJmbGV4IiwKICAgICAgICBhbGlnbkl0ZW1zOiAiY2VudGVyIiwKICAgICAgICBqdXN0aWZ5Q29udGVudDogImNlbnRlciIsCiAgICAgIH19CiAgICA+CiAgICAgIDxNb2RhbAogICAgICAgIGhlYWRpbmc9eyJEaWFsb2cgMSB0aXRsZSJ9CiAgICAgICAgYm9keT17YExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuYH0KICAgICAgICBvcGVuPXtmaXJzdERpYWxvZ09wZW59CiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Rmlyc3REaWFsb2dPcGVuKGZhbHNlKX0KICAgICAgLz4KICAgICAgPFNuYWNrYmFyIG9wZW49e3N1Y2Nlc3NBbGVydE9wZW59PgogICAgICAgIDxBbGVydCBzZXZlcml0eT17InN1Y2Nlc3MifSB2YXJpYW50PXsiZmlsbGVkIn0gb25DbG9zZT17KCkgPT4gc2V0U3VjY2Vzc0FsZXJ0T3BlbihmYWxzZSl9PgogICAgICAgICAgQWxlcnQgdGl0bGU6IFRoaXMgaXMgYSBzdWNjZXNzIGFsZXJ0ISBZb28taG9vIQogICAgICAgIDwvQWxlcnQ+CiAgICAgIDwvU25hY2tiYXI+CiAgICAgIDxCdXR0b24gdmFyaWFudD17ImNvbnRhaW5lZCJ9IG9uQ2xpY2s9e29wZW5Nb2RhbHN9PgogICAgICAgIENsaWNrIE1lCiAgICAgIDwvQnV0dG9uPgogICAgICA8TW9kYWwKICAgICAgICBoZWFkaW5nPXsiRGlhbG9nIDIgdGl0bGUifQogICAgICAgIGJvZHk9e25ldyBBcnJheSgyMCkKICAgICAgICAgIC5maWxsKGBQcmFlc2VudCBtYXR0aXMgYSB0ZWxsdXMgc3VzY2lwaXQgdmVuZW5hdGlzLiBNb3JiaSBydXRydW0sIGVsaXQgaW4gdnVscHV0YXRlIG9ybmFyZWApCiAgICAgICAgICAuam9pbigiXG4iKX0KICAgICAgICBvcGVuPXtzZWNvbmREaWFsb2dPcGVufQogICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNlY29uZERpYWxvZ09wZW4oZmFsc2UpfQogICAgICAvPgogICAgICA8RHJhd2VyIG9wZW49e2RyYXdlck9wZW59IGFuY2hvcj17InJpZ2h0In0gb25DbG9zZT17KCkgPT4gc2V0RHJhd2VyT3BlbihmYWxzZSl9PgogICAgICAgIDxUeXBvZ3JhcGh5CiAgICAgICAgICB2YXJpYW50PXsiaDEifQogICAgICAgICAgc3g9e3sKICAgICAgICAgICAgbWFyZ2luOiBbMSwgMl0sCiAgICAgICAgICB9fQogICAgICAgID4KICAgICAgICAgIERyYXdlciB0aXRsZQogICAgICAgIDwvVHlwb2dyYXBoeT4KICAgICAgICA8QnV0dG9uIGFyaWEtbGFiZWw9eyJjbG9zZSJ9IG9uQ2xpY2s9eygpID0+IHNldERyYXdlck9wZW4oZmFsc2UpfT4KICAgICAgICAgIENsb3NlCiAgICAgICAgPC9CdXR0b24+CiAgICAgIDwvRHJhd2VyPgogICAgPC9kaXY+CiAgKTsKfQo="},{"@mui/material/Alert":"8BH78","@mui/material/Button":"ks2RG","@mui/material/Drawer":"hQbQE","@mui/material/Snackbar":"5lJY9","@mui/material/Typography":"cEgDo",react:"6uln9","../../components/Modal":"k2k3i","@parcel/transformer-js/src/esmodule-helpers.js":"7baQq"}]},[],0,"parcelRequired94c");
//# sourceMappingURL=Problem.fd74779f.js.map