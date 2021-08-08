(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{18:function(e,t){},25:function(e,t,a){},26:function(e,t,a){},55:function(e,t){},56:function(e,t){},57:function(e,t){},58:function(e,t){},59:function(e,t){},62:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),r=a(19),n=a.n(r),o=(a(25),a(7)),c=(a.p,a(26),a(2));var l=function(){return Object(c.jsxs)("section",{className:"my-5",children:[Object(c.jsx)("h2",{className:"py-1",children:"Who am I?"}),Object(c.jsx)("img",{id:"my_portrait",src:"https://media.istockphoto.com/photos/portrait-red-welsh-corgi-dog-outdoors-in-the-park-on-a-sunny-summer-picture-id1061822700?k=6&m=1061822700&s=612x612&w=0&h=0TXX8o9lXxA6jb54noDC9ijQPHmesZfQen_V-36i5B8=",alt:"portrait"}),Object(c.jsx)("p",{children:'"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."'})]})},u=a(10),h=a(14);function d(e){return e.charAt(0).toUpperCase()+e.slice(1)}var p=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],i=t[1],r=a.name,n=a.email,l=a.message,p=Object(s.useState)(""),m=Object(o.a)(p,2),j=m[0],b=m[1];function f(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);b(t?"":"Your email is invalid.")}else e.target.value.length?b(""):b("".concat(d(e.target.name)," is required."));j||i(Object(h.a)(Object(h.a)({},a),{},Object(u.a)({},e.target.name,e.target.value))),console.log("errorMessage",j)}return Object(c.jsxs)("section",{className:"my-5",children:[Object(c.jsx)("h2",{className:"py-1",children:"Contact Me"}),Object(c.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)},children:[Object(c.jsxs)("div",{className:"flex-column",children:[Object(c.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(c.jsx)("input",{type:"text",name:"name",defaultValue:r,onBlur:f})]}),Object(c.jsxs)("div",{className:"flex-column",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(c.jsx)("input",{type:"email",name:"email",defaultValue:n,onBlur:f})]}),Object(c.jsxs)("div",{className:"flex-column",children:[Object(c.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(c.jsx)("textarea",{name:"message",rows:"5",defaultValue:l,onBlur:f})]}),j&&Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"error-text",children:j})}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]})]})};var m=function(e){var t=e.categories,a=void 0===t?[]:t,i=e.setCurrentCategory,r=e.currentCategory;return Object(s.useEffect)((function(){document.title=d(r)}),[r]),Object(c.jsxs)("section",{className:" py-5 px-5",id:"header",children:[Object(c.jsx)("h1",{className:"my-2 ",children:Object(c.jsx)("a",{href:"/",id:"header-title",children:"Fanxi Liao - Web Dev"})}),Object(c.jsx)("nav",{className:"py-1 flex-row space-evenly",id:"navbar",children:a.map((function(e){return Object(c.jsx)("li",{className:"mx-1 ".concat(r===e&&"navActive"),children:Object(c.jsx)("span",{onClick:function(){i(e),console.log(r,e)},children:d(e)})},e)}))})]})},j=a(8);var b=function(e){var t=e.project;return Object(c.jsxs)("div",{className:" card my-2 center",children:[Object(c.jsx)("h4",{children:d(t.name)}),Object(c.jsx)("a",{href:t.git_url,children:Object(c.jsx)(j.d,{})}),Object(c.jsx)("a",{href:t.url,children:Object(c.jsx)(j.b,{})}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("p",{children:t.description})})]})};var f=function(){var e=Object(s.useState)([{name:"Password Generator",description:"Week 3 - This particular generator allows the user to select the number of characters in the password, as well as choose what type of characters are allowed to compose said password. If there is no character set selected, we can not logically generate a password with user defined parameters, so the script assumes the operator has made an error and reruns the pertinent parts.",git_url:"https://github.com/liaof/challenge-3",url:"https://liaof.github.io/challenge-3/"},{name:"Timed Javascript Quiz",description:"Week 4 - This particular project allows the user to take a time restricted quiz, the topic of which is Javascript. Features of this quiz include a timer that docks 5 seconds for every incorrect answer. The questions and answers and populated from a 2D array, allowing for easy scaling of both depth and breadth of the question-set.",git_url:"https://github.com/liaof/challenge-4",url:"https://liaof.github.io/challenge-4/"},{name:"Weather App",description:"Week 6 - This project is a a Weather Dashboard that uses OpenWeather API to take an city name and fetches it's co-ordinates, which is then used as parameters to fetch a different OpenWeather API that returns the weather forecast. This data is then displayed in the appropriate page elements.",git_url:"https://github.com/liaof/6-weather-app",url:"https://liaof.github.io/6-weather-app/"},{name:"Note Taker",description:"Week 11 - For this week's project, I have created a server-based site that takes notes. When we go to the URL, a request is made to the heroku server to serve our data to the browser, as HTML. The data served to the browser contains all of the extant notes in a JSON, which is then displayed in the browser via HTML. Afterwards, we can enter text into an input field on our screen, and a 'save' icon will automatically appear in the navbar when we do so. When we click on the 'save' icon, the browser makes a post request to the server, with the text we just typed as the body. We also save a numerical index to the request parameters; this is used to delete specific notes.",git_url:"https://github.com/liaof/challenge-11",url:"https://peaceful-hollows-59652.herokuapp.com/"},{name:"Tech Blog",description:"Week 14 - For this week's challenge, I created a full stack blog being served via Heroku. Because this challenge coincides with a group project, the scope of said challenge is understandbly smaller; much of the work required has been done in the preceeding two weeks in the module homework. That said, a revamp of the entire backend and frontend was needed to bring the functionality inline with the challenge requirements. This is a simple but very important exercise because the usage of a template for multiple tasks is a great efficancy booster, reflected in the very concept of MVC structuring",git_url:"https://github.com/liaof/challenge-14",url:"https://radiant-garden-99860.herokuapp.com/"},{name:"Budget Tracker - Budgie",description:"This weeks project entails taking an existing application and Express.js server, and adding offline persistence and functionality to it, by saving inputs via IndexedDB and saving the app itself using service-workers to cache the relevant files. Finally, the extant application is converted into a Progressive Web Application (PWA) for ease of use.",git_url:"https://github.com/liaof/challenge-19",url:"https://gorgeous-channel-islands-72248.herokuapp.com/"},{name:"Fullstack Project - Puppy Love",description:"This weeks project entails is a full-stack group project. The task we chose was to build a social media platform focused on connecting dogs and their owners to other dogs and their owners.",git_url:"https://github.com/MAsuamah/puppy-love/tree/main",url:"https://puppy-love-date.herokuapp.com/"}]),t=Object(o.a)(e,1)[0];return Object(c.jsxs)("section",{className:"my-5 content-wrap",children:[Object(c.jsx)("h2",{className:"py-1",children:"My Portfolio"}),Object(c.jsx)("div",{className:"flex-row space-evenly",children:t.map((function(e,t){return Object(c.jsx)(b,{project:e})}))})]})};var g=function(){return Object(c.jsxs)("footer",{id:"footer",className:"flex-row flex-center",children:[Object(c.jsxs)("a",{href:"https://github.com/liaof",className:"flex-row align-center px-3",children:["Github: ",Object(c.jsx)(j.a,{})]}),Object(c.jsxs)("a",{href:"https://www.linkedin.com/in/fliao/",className:"flex-row align-center px-3",children:["LinkedIn: ",Object(c.jsx)(j.c,{})]}),Object(c.jsxs)("a",{href:"https://stackoverflow.com/",className:"flex-row align-center px-3",children:["Stack Overflow: ",Object(c.jsx)(j.e,{})]})]})},x=a(9);x.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(x.c.version,"/pdf.worker.js");var O=function(){x.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(x.c.version,"/pdf.worker.js");var e=Object(s.useState)(["about","portfolio","resume","contact"]),t=Object(o.a)(e,1)[0],a=Object(s.useState)(t[0]),i=Object(o.a)(a,2),r=i[0],n=i[1];return Object(c.jsxs)("div",{className:"px-3",children:[Object(c.jsx)(m,{categories:t,setCurrentCategory:n,currentCategory:r}),Object(c.jsx)("main",{children:"about"===r?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l,{})}):"portfolio"===r?Object(c.jsx)(f,{}):"resume"===r?Object(c.jsxs)("section",{className:"my-5 content-wrap",children:[Object(c.jsx)("h2",{className:"py-1",children:"Resume"}),Object(c.jsx)(x.a,{file:"/portfolio/Resume.pdf",children:Object(c.jsx)(x.b,{pageNumber:1,style:{display:"flex"}})})]}):Object(c.jsx)(p,{})}),Object(c.jsx)(g,{className:"my-5 mx-5"})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),r(e),n(e)}))};n.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),v()}},[[62,1,2]]]);
//# sourceMappingURL=main.ffc5d7c4.chunk.js.map