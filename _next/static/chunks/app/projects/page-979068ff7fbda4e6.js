(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404,893],{2540:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.bind(r,5902))},5902:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(5155),s=r(1567),i=r(3463),o=r(2115),a=r(2240);function l(e){let{text:t,maxLines:r=4,ellipsis:i="…",className:a,...l}=e;if(!t)return(0,n.jsx)(n.Fragment,{});let c=(0,o.useRef)(null),[f,g]=(0,o.useState)(!1),m=(0,o.useCallback)(()=>{if(!c.current)return;let e=c.current;g((0,s.Ys)(e)>r)},[t,r,i]);return(0,o.useEffect)(()=>(m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[m]),(0,n.jsx)(n.Fragment,{children:f?(0,n.jsx)(u,{ref:c,text:t,maxLines:r,ellipsis:i,className:a,...l}):(0,n.jsx)(d,{ref:c,text:t,className:a,...l})})}let d=o.forwardRef((e,t)=>{let{text:r,children:i,className:o,...a}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("text-sm whitespace-pre-line relative",o),style:{padding:".5rem 0"},...a,children:[(0,n.jsx)("div",{ref:t,className:(0,s.cn)("absolute invisible",o),...a,inert:!0,children:r}),r]})}),u=o.forwardRef((e,t)=>{let{text:r,maxLines:l,ellipsis:d,children:u,className:c,...f}=e,[g,m]=(0,o.useState)(!0),[h,v]=(0,o.useState)((0,s.a8)(l*(0,s.oQ)())+.5),[b,p]=(0,o.useState)(r.length-d.length),x=(0,o.useMemo)(()=>"".concat(r.substring(0,b)).concat(d),[b]),w=(0,o.useRef)(null),y=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,()=>y.current,[]);let N=(0,o.useCallback)(()=>{if(!w.current||!y.current)return;let e=w.current,t=y.current,n=document.createRange(),s=e.childNodes[1],i=t.childNodes[0];if(!s||!i)return;let o=0,a=r.length-1,l=null;for(;o<=a;){let t=Math.floor((o+a)/2);n.setStart(i,t),n.setEnd(i,t+1);let r=n.getBoundingClientRect(),s=e.getBoundingClientRect();r.bottom>s.bottom?a=t-1:(l=t,o=t+1)}p((null!==l?l+1:r.length)-d.length)},[r,l,d]);return(0,o.useEffect)(()=>(N(),v(l*(0,s.a8)((0,s.II)(w.current))+.5),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)),[N]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{ref:w,className:(0,s.cn)((0,i.A)("text-sm whitespace-pre-line overflow-hidden relative"),c),style:{maxHeight:g?"".concat(h,"rem"):"none",padding:".5rem 0"},...f,children:[(0,n.jsx)("div",{ref:y,className:(0,s.cn)("absolute invisible",c),...f,inert:!0,children:r}),g?x:r]}),g?(0,n.jsx)(a.$,{className:"self-start",variant:"link",size:"sm",onClick:()=>m(!1),children:"Read more..."}):(0,n.jsx)(a.$,{className:"self-start",variant:"link",size:"sm",onClick:()=>m(!0),children:"Read less"})]})})},2240:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var n=r(5155),s=r(2115),i=r(2317),o=r(1027),a=r(1567);let l=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",accent:"bg-accent text-accent-foreground hover:bg-accent/80",info:"bg-info text-info-foreground shadow hover:bg-info/80",success:"bg-success text-success-foreground shadow hover:bg-success/80",warning:"bg-warning text-warning-foreground shadow hover:bg-warning/80",danger:"bg-danger text-danger-foreground shadow-sm hover:bg-danger/80",outline:"border border-input bg-transparent shadow-sm hover:bg-primary hover:text-primary-foreground border-[--foreground]",ghost:"hover:bg-primary hover:text-primary-foreground",link:"text-foreground underline-offset-4 hover:underline hover:opacity-80"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:o,asChild:d=!1,...u}=e,c=d?i.DX:"button";return(0,n.jsx)(c,{className:(0,a.cn)(l({variant:s,size:o,className:r})),ref:t,...u})});d.displayName="Button"},1567:(e,t,r)=>{"use strict";r.d(t,{II:()=>o,Ys:()=>d,a8:()=>l,cn:()=>i,oQ:()=>a});var n=r(9795),s=r(3463);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,s.A)(t))}function o(e){return parseFloat(getComputedStyle(e).lineHeight)}function a(){return o(document.documentElement)}function l(e){return e/parseFloat(getComputedStyle(document.documentElement).fontSize)}function d(e){return Math.floor(e.clientHeight/o(e))}}},e=>{var t=t=>e(e.s=t);e.O(0,[173,365,441,517,358],()=>t(2540)),_N_E=e.O()}]);