(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(10),r=n.n(i),a=(n(23),n(2)),s=n(3),l=n(5),j=n(4),b=(n(24),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onClick=function(){var t=e.props,n=t.label,c=t.onClick,o=t.tabClick;c(n),o()},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.onClick,t=this.props,n=t.activeTab,c=t.label,o="tab-list-item";return n===c&&(o+=" tab-list-active"),Object(b.jsx)("li",{className:o,onClick:e,children:c})}}]),n}(c.Component),d=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).onClickTabItem=function(e){c.setState({activeTab:e})},c.state={activeTab:c.props.children[0].props.label},c}return Object(s.a)(n,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,n=this.state.activeTab;return Object(b.jsxs)("div",{className:"tabs",children:[Object(b.jsx)("ol",{className:"tab-list",children:t.map((function(t){var c=t.props,o=c.label,i=c.tabClick;return Object(b.jsx)(h,{activeTab:n,label:o,tabClick:i,onClick:e},o)}))}),Object(b.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===n)return e.props.children}))})]})}}]),n}(c.Component),u=n(6),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onClickContact=function(){u.animateScroll.scrollToBottom()},e.onClickHome=function(){u.animateScroll.scrollToTop()},e.onClickAbout=function(){document.querySelector("#User-Info").scrollIntoView({behavior:"smooth",block:"center"})},e.onClickProjects=function(){document.querySelector("#Personal-Projects").scrollIntoView({behavior:"smooth",block:"center"})},e.onClickExperience=function(){document.querySelector("#Work-Experience").scrollIntoView({behavior:"smooth",block:"center"})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.onClickContact,t=this.onClickHome,n=this.onClickAbout,c=this.onClickProjects,o=this.onClickExperience;return Object(b.jsxs)("div",{className:"Home",children:[Object(b.jsx)("div",{className:"Home-tabs",children:Object(b.jsxs)(d,{children:[Object(b.jsx)("div",{label:"Home",tabClick:t}),Object(b.jsx)("div",{label:"About Me",tabClick:n}),Object(b.jsx)("div",{label:"Projects",tabClick:c}),Object(b.jsx)("div",{label:"Experience",tabClick:o}),Object(b.jsx)("div",{label:"Contact",tabClick:e})]})}),Object(b.jsxs)("div",{className:"Home-content",children:[Object(b.jsx)("h1",{style:{fontSize:"180px"},children:"".concat(this.props.firstName," ").concat(this.props.lastName)}),Object(b.jsx)("p",{children:"Software Engineer | Data Analyst | Rutgers New Brunswick"})]})]})}}]),n}(c.Component),A=(n(36),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).onClickContact=function(){u.animateScroll.scrollToBottom()},e.onClickHome=function(){u.animateScroll.scrollToTop()},e.onClickAbout=function(){document.querySelector("#User-Info").scrollIntoView({behavior:"smooth",block:"center"})},e.onClickProjects=function(){document.querySelector("#Personal-Projects").scrollIntoView({behavior:"smooth",block:"center"})},e.onClickExperience=function(){document.querySelector("#Work-Experience").scrollIntoView({behavior:"smooth",block:"center"})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.onClickContact,t=this.onClickHome,n=this.onClickAbout,c=this.onClickProjects,o=this.onClickExperience,i=this.props,r=i.firstName,a=i.lastName,s=i.age,l=i.school,j=i.major,h=i.bio,u=i.img;return Object(b.jsxs)("div",{className:"UserInfo",children:[Object(b.jsx)("div",{className:"Users-tabs",children:Object(b.jsxs)(d,{children:[Object(b.jsx)("div",{label:"Home",tabClick:t}),Object(b.jsx)("div",{label:"About Me",tabClick:n}),Object(b.jsx)("div",{label:"Projects",tabClick:c}),Object(b.jsx)("div",{label:"Experience",tabClick:o}),Object(b.jsx)("div",{label:"Contact",tabClick:e})]})}),Object(b.jsxs)("div",{className:"UserInfo-alignment",children:[Object(b.jsxs)("div",{className:"UserInfo-details",children:[Object(b.jsxs)("div",{className:"UserInfo-header",children:[Object(b.jsx)("h1",{children:"\n                                    ".concat(r," \n                                    ").concat(a,", \n                                    ").concat(s,"\n                                ")}),Object(b.jsx)("h3",{children:l}),Object(b.jsx)("h3",{children:j})]}),Object(b.jsx)("div",{className:"UserInfo-bio",children:Object(b.jsx)("p",{children:h})})]}),Object(b.jsx)("img",{src:u,alt:"deer"})]})]})}}]),n}(c.Component)),m=(n(37),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.work,n=e.work2;return Object(b.jsxs)("div",{className:"WorkExperience",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{className:"WorkExperience-title",children:"Work Experience"}),Object(b.jsxs)("div",{className:"WorkExperience-past",children:[Object(b.jsxs)("div",{style:{paddingBottom:"80px"},children:[Object(b.jsx)("h2",{style:{float:"left"},children:"Backend Developer"}),Object(b.jsx)("h2",{style:{float:"right"},children:"SPRING 2021"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{style:{float:"left"},children:"RUMAD"}),Object(b.jsx)("h3",{style:{float:"right"},children:"RUTGERS"})]}),Object(b.jsx)("p",{style:{float:"right"},children:t})]}),Object(b.jsxs)("div",{className:"WorkExperience-past",children:[Object(b.jsxs)("div",{style:{paddingBottom:"193px"},children:[Object(b.jsx)("h2",{style:{float:"left"},children:"Backend Developer"}),Object(b.jsx)("h2",{style:{float:"right"},children:"FALL 2020 - SPRING 2021"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{style:{float:"left"},children:"HACKATHON"}),Object(b.jsx)("h3",{style:{float:"right"},children:"RUTGERS"})]}),Object(b.jsx)("p",{style:{float:"right"},children:n})]})]})}}]),n}(c.Component)),O=(n(38),n(39),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.language,c=e.description;return Object(b.jsxs)("div",{className:"Pallets",children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:c})]})}}]),n}(c.Component)),f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.project1,n=e.project2,c=e.project3;return Object(b.jsxs)("div",{className:"PersonalProjects",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{className:"PersonalProjects-title",children:"Personal Projects"}),Object(b.jsxs)("div",{className:"PersonalProjects-pallets",children:[Object(b.jsx)(O,{title:"Pallets",language:"React.js",description:t}),Object(b.jsx)(O,{title:"Personal Website",language:"React.js",description:n}),Object(b.jsx)(O,{title:"Task Manager",language:"React.js",description:c})]})]})}}]),n}(c.Component),v=(n(40),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Contact",children:[Object(b.jsx)("h3",{children:"Contact"}),Object(b.jsxs)("div",{className:"Contact-content",children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOrSURBVHgB7Vk5SCNRGH7GM4oYCa67suIFKuIFEhfFIoXgYq2wCAq6hQfYRF1txEJEFBsLL9jKwsbCQlixDDaLQXELDaJ44LEYUhgNRFHz+/4fRzRO4kwOnch88IXkzfsn73vvvzJhTIUKFSpUvAMiRMa+cuq9XFMCgNPG+d/bhC+cfx4mhgMtnJ/EhISTCIF/ObVPRXxT+IJ90YgCNA9CdCx88RlfBCEU2FFRUSxcEBHxPBdpnn6Ii4tjRqORabVaplRER0czg8HAYmJino0/E+J0Otn6+jpraWlh1dXVTGkoLi5mnZ2dbG9vj11fX4vO+c48gqivrw+mpqYgOTn53QOauxGMjIzA6Ogovfe4/sOnEGRjYyOsra1BXV3du4morKwEi8UCHR0d3ua8LgSZm5sLu7u7MDMzA3q9/s0E8MQDAwMDcHR0BDU1Nb7mShOCTElJgZWVFTg8PITa2tqQi8jOzobV1VXY39+H0tLS1+ZLF4LUaDQwOzsLiMnJSdDpdCER0dvbCw6Hg4SkpaVJsZEnRGB3dzfwjEG7VV5eHjQBGRkZsLS0BG63m4I6Pj5eqq1/QpBlZWVwcHAALpcLxsbGxDKJLDY0NMDp6Snc3NxAU1OTXHv/hSBTU1PBbDaTq1mtVvJrufdISEigJILAE87Pz/dnIwITgkQXEHB1dUUpUurpFBYWwvHx8aP94OCgPyICE4KBvri4SAtYXl6GtrY2sNvt9Hlubg7S09N92nd1dcHl5SXNHx8fh42NDXo/PT0NiYmJbyMkMzMTtre3KbOYTKbH8aysLNjc3KQFYZquqKh4YYtdguCOaF9fX0/jvMeDnp4eCnS8t0w3lS8Ea8jJyQlsbW1BTk7Oi+tYxLCtEXMXrNAYBwgssLghnvYYIzs7O3S6VVVVoRGCO4a72N/f/2pqbG9vB5vNRovmTSgMDw/D3d3do+thkHuzjYyMpEx4e3tL/V7QhPCWHiYmJugUZOwS7TjuroCLiwtobW2VbF9SUkInODQ0RK4XkBAMavRpDMjY2FjJixCYlJRE6fXs7AwKCgpk2+N3opCFhQVqk/wSkpeXB/Pz81T85C7AkzKqtCiLiop8ZUPvQrDHaW5uJn8NVESwiPUJf1aI9F/iQnDxoWoIg0GsMxi3nkJePG3g2YWdn58zpYIXUtFxDfsg+HBCXCx84cQXQcg/TuUGhnc4OK2egz853Uyh2coLfwmL9/wPxMBpYsp/Fmzn/M1pZipUqFARlrgHewFC5PRZWdIAAAAASUVORK5CYII=",alt:"email logo",style:{cursor:"pointer",height:"9vh",marginRight:"2vw"},onClick:function(){return navigator.clipboard.writeText("sajinsaju2002@gmail.com")}}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/sajin-saju-917117200/",children:Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"linkedin logo",style:{height:"9vh",marginRight:"2vw"}})}),Object(b.jsx)("a",{href:"https://github.com/54JIN",children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPJSURBVHgBzZlZSBVhFMf/ii22kC0UVuIkSYVSCfVQEhqWFUW0E0HgQxFt1ENEKxUqEoT2FvRiSS9R9FC9laVgSmQRGWELtpiVFC0WqWXeznHmxjDNne+Mdxb/8PPKvf/vzDl88818SwK8VxKRQWQRo0zfR4h24i3xGANQCUQ+UUE0EV+gJ+3ED6KRKCcWIWRNIEohS1xFK3GaSEeAGkucIf4g/gKs9BJnCQ0+6wC86QEVn4j98EHpRDXgewFW6uBh78wnXgGIhEQbkYM4tYroABAJGc5hOfqpXKILQGSA0EkshktpxFcAYSdvV0wGhEolXjoE49+6fUy2Q3H910QKBKpyCHLR8AwnNhD3PEic4fdHLfRxkGxc46aD/zwUWqu44CabNvxEqbf4+LZ8RNwmbhmfTAPx3eKtIfJs4hYpcok5XgbBuUuZOYitLcR66OMrCc6aQqwjNjt4ZilyeUaMtGtYBPUtILo3PdI4qPPZZtdQ1RtMKoJTOtT5tEXNicYnd7EmCD4XwSlb4JlIFPI/0UJWQiZJcK80Q+jbHf2HB6bk5ce3XpBjZAzxHOq8eDbe98heJjAz8xC88iHLbQXfWrMFAfk90YDgVWOgUjYXskBgrEJ4uiHw5HAhIwTGuwhPVwSeNC4kTWD8jPDUKfD0FTJeYPyF8NQt8KRwIUMFxiEIT5JrJ3Mhkq5LRHgaLPB0cYIdAuNMhKepAs83LuS9wCh5RPulQoGnRVpImPuzSwWeHi7kgcDIi5wgZ75RZRLTBb46LqQZMh1H8Dom9N3nPzyjta6jY7EdwWkXZDn1wPQurBU24un+GvgvXs/3CnOqNzfcI2wU5SRkczS34jVIhYsimI3mALwbYV1c8djZShyF/Xqen3YnIBuMKvGgLoP7I4sPsJmZlOL/lVeW8RtPE8odAj4hLhHF0A+CVOLTrhKiknjjMnkzZXbBedB/tDEfNH7ns8LrisCStUNU8Z63vCMmxwp+OEaj6JY+bwc5dX8u5MoDEImDnaoL2D3BXph+56Vxu41HMt226if6V0SjJLgG/QzP6emQTuwlLkA/vNxBTIN7NcN9Ea1wcRy3xCYA77wPg7fqz26+dA/un47YBOGt/knwTm4L2RcrkNOueYnxWWz6rgD6ccFV4qkBL4NHQ9/Nr4R/4nfWKcQh6ZxHNAAtkvQIv+UPwSNJjqglywGrVIXwoz4fHksjzjlc9CHcy6mQy9BvWd/EM9MWmws3wb3sCuHpzkIEqNXEHVMC1XCva0bb39BfxAUIURr0YzsN7qUZbTMRp/4CU+s5ad2BuF4AAAAASUVORK5CYII=",alt:"github logo",style:{height:"9vh"}})})]})]})}}]),n}(c.Component)),x=n.p+"static/media/deer.ab2fcb0e.JPG",k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e="Sajin",t="Saju";return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{firstName:e,lastName:t}),Object(b.jsx)("div",{id:"User-Info",children:Object(b.jsx)(A,{firstName:e,lastName:t,age:19,school:"Rutgers New Brunswick",major:"Computer Science",bio:"An experienced backend developer who has honed his skill via practice and execution with the guidance of mentors. Additionally, a leader and mentor to incoming freshmen and amature programmers in an organization titled: RUMAD. Practising backend development via leading mini/major projects with the collaberation of partners programming either or both fronend and backend protion of projects.",img:x})}),Object(b.jsx)("div",{id:"Personal-Projects",children:Object(b.jsx)(f,{project1:"Pallets allows online users to manifest new colors or the provided default colors build a plethera of colors for an upcoming project they may decide to develope.",project2:"Pallets allows online users to manifest new colors or the provided default colors build a plethera of colors for an upcoming project they may decide to develope.",project3:"Task Manager API allows for fellow front end developer to send request to a DBMS to create accounts, make tasks, update/delete events and so forth."})}),Object(b.jsx)("div",{id:"Work-Experience",children:Object(b.jsx)(m,{work:"Participated in the collaberation of two individual projects - twitter clone and vacation app, created for the puprose to unite communites and deliver a new experience in socilization. Programming the backend of both projects using Node.js and mongoose cloud based data storage, data retrival was accomplished with minimal time. Using Heroku and Github, the cloup based API was publised for the frontend developers to use.",work2:"Collobrated among a diverse group of individuals to create a (paper money) stock API, capable of predicting future earnings in accordance to past investments and sales of stock."})}),Object(b.jsx)(v,{})]})}}]),n}(c.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),C()}},[[41,1,2]]]);
//# sourceMappingURL=main.f259ad7f.chunk.js.map