import{j as e,m as t}from"./animations-BTf9hsje.js";import{r as n}from"./react-Q3K9tvtn.js";import{g as o,h as u,f as j,i as f,j as N,k as v}from"./index-DdKjQ-r0.js";import"./router-DW7g-mJq.js";const C=()=>{const[i,c]=n.useState({name:"",email:"",subject:"",message:""}),[d,m]=n.useState(!1),[h,x]=n.useState(!1),l=a=>{const{name:s,value:r}=a.target;c({...i,[s]:r})},p=a=>{a.preventDefault(),m(!0),setTimeout(()=>{m(!1),x(!0),c({name:"",email:"",subject:"",message:""}),setTimeout(()=>{x(!1)},5e3)},1500)},g=[{icon:e.jsx(o,{className:"text-2xl text-blue-400"}),title:"Email",details:["iccsai2025@galgotiasuniversity.edu.in","iccsai.conference@gmail.com"]},{icon:e.jsx(u,{className:"text-2xl text-blue-400"}),title:"Phone",details:["+91 9876543210","+91 9876543211"]},{icon:e.jsx(v,{className:"text-2xl text-blue-400"}),title:"Address",details:["Plot No. 2, Yamuna Expy, opposite Buddha International Circuit, Sector 17A, Greater Noida, Uttar Pradesh 203201"]}],y=[{name:"Dr. Amit Kumar",role:"Organizing Secretary",email:"amit.kumar@galgotiasuniversity.edu.in",phone:"+91 9812345670"},{name:"Dr. Priya Sharma",role:"Organizing Secretary",email:"priya.sharma@galgotiasuniversity.edu.in",phone:"+91 9823456781"},{name:"Dr. Rakesh Mahapatra",role:"Technical Chair",email:"rakesh.mahapatra@galgotiasuniversity.edu.in",phone:"+91 9834567892"}];return e.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24",children:e.jsxs("div",{className:"container mx-auto px-4 py-16",children:[e.jsxs(t.h1,{className:"text-4xl md:text-5xl font-bold text-center mb-16",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},children:["Get in ",e.jsx("span",{className:"text-blue-500",children:"Touch"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[e.jsxs(t.div,{className:"space-y-10",initial:{opacity:0,x:-30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6 text-blue-400",children:"Contact Information"}),e.jsx("div",{className:"space-y-6",children:g.map((a,s)=>e.jsxs(t.div,{className:"flex items-start gap-4",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+s*.1},children:[e.jsx("div",{className:"mt-1",children:a.icon}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-medium text-white",children:a.title}),e.jsx("div",{className:"mt-2 space-y-1",children:a.details.map((r,b)=>e.jsx("p",{className:"text-gray-400",children:r},b))})]})]},s))})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6 text-blue-400",children:"Contact Persons"}),e.jsx("div",{className:"space-y-6",children:y.map((a,s)=>e.jsxs(t.div,{className:"backdrop-blur-md bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-xl p-4",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6+s*.1},whileHover:{scale:1.02,boxShadow:"0 0 15px rgba(59, 130, 246, 0.2)"},children:[e.jsx("h3",{className:"text-xl font-medium text-white",children:a.name}),e.jsx("p",{className:"text-blue-300 mb-2",children:a.role}),e.jsxs("div",{className:"text-gray-400 space-y-1",children:[e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(o,{className:"text-blue-400"})," ",a.email]}),e.jsxs("p",{className:"flex items-center gap-2",children:[e.jsx(u,{className:"text-blue-400"})," ",a.phone]})]})]},s))})]})]}),e.jsxs(t.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.6,delay:.4},className:"backdrop-blur-md bg-gradient-to-r from-blue-900/10 to-indigo-900/10 border border-blue-500/20 rounded-xl p-6 md:p-8",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-6 text-blue-400",children:"Send us a Message"}),e.jsxs("form",{onSubmit:p,className:"space-y-6",children:[e.jsxs(t.div,{className:"grid grid-cols-1 md:grid-cols-2 gap-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-2",children:"Your Name"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(j,{className:"text-gray-500"})}),e.jsx("input",{type:"text",id:"name",name:"name",value:i.name,onChange:l,className:"w-full bg-gray-800/70 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"John Doe",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-2",children:"Your Email"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(o,{className:"text-gray-500"})}),e.jsx("input",{type:"email",id:"email",name:"email",value:i.email,onChange:l,className:"w-full bg-gray-800/70 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"john@example.com",required:!0})]})]})]}),e.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[e.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-300 mb-2",children:"Subject"}),e.jsx("input",{type:"text",id:"subject",name:"subject",value:i.subject,onChange:l,className:"w-full bg-gray-800/70 border border-gray-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"How can we help you?",required:!0})]}),e.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-2",children:"Your Message"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute top-3 left-3 pointer-events-none",children:e.jsx(f,{className:"text-gray-500"})}),e.jsx("textarea",{id:"message",name:"message",rows:"5",value:i.message,onChange:l,className:"w-full bg-gray-800/70 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all",placeholder:"Write your message here...",required:!0})]})]}),e.jsxs(t.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8},className:"flex items-center justify-between",children:[h&&e.jsx(t.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},className:"text-green-400 text-sm",children:"Your message has been sent successfully!"}),e.jsx(t.button,{type:"submit",className:"ml-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2",whileHover:{scale:1.05},whileTap:{scale:.98},disabled:d,children:d?e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):e.jsxs(e.Fragment,{children:[e.jsx(N,{})," Send Message"]})})]})]})]})]}),e.jsx(t.div,{className:"mt-16 rounded-xl overflow-hidden h-96 shadow-xl shadow-blue-900/20 border border-blue-500/20",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.8},children:e.jsx("iframe",{src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Galgotias%20University&zoom=10&maptype=roadmap",width:"100%",height:"100%",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Galgotias University Map Location"})})]})})};export{C as default};
