(this.webpackJsonpfront_app=this.webpackJsonpfront_app||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),i=n.n(l),o=(n(14),n(4)),s=n(5),c=n(6),d=n(1),m=n(8),u=n(7),h=(n(15),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleChange=e.handleChange.bind(Object(d.a)(e)),e.state={covidinfo:[],tempOrganization:"",tempDescription:"",tempLinks:"",delOrganization:"",delDescription:"",delLinks:"",success:!0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://covid-central-news.herokuapp.com/donate").then((function(e){return e.json()})).then((function(t){e.setState({covidinfo:t.info})}))}},{key:"nextWindow",value:function(){window.location.replace("https://thecovidcentral.herokuapp.com/news")}},{key:"getData",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://covid-central-news.herokuapp.com/donate").then((function(e){return e.json()})).then((function(t){return e.setState({covidinfo:t.info})}))}},{key:"postData",value:function(){var e={Organization:this.state.tempOrganization,Description:this.state.tempDescription,Links:this.state.tempLinks};JSON.stringify(e);fetch("https://cors-anywhere.herokuapp.com/https://covid-central-news.herokuapp.com/donates")}},{key:"handleChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"component_one"},r.a.createElement("img",{id:"coronaImage",src:"http://pngimg.com/uploads/stop_coronavirus/stop_coronavirus_PNG30.png",alt:"Image not found"}),r.a.createElement("h1",{class:"donationTitle"},"Ways to Help During this Pandemic"),r.a.createElement("h2",null,"Major Organizations to Donate To"),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h5",{class:"userWarning"},"The Following Information Has Been Extracted From a Washington Post Article written by Kanyakrit Vongkiatkajorn and Laura Daily"),r.a.createElement("table",{class:"myTable"},r.a.createElement("tr",{class:"tableHeaders"},r.a.createElement("th",null,"Organization Name"),r.a.createElement("th",{id:"descriptionCol"},"Description"),r.a.createElement("th",null,"Donation Link")),r.a.createElement("tr",null,r.a.createElement("td",null,"CDC Foundation"),r.a.createElement("td",null,"Supports the critical health protection work of the Centers for Disease Control and Prevention. ",r.a.createElement("br",null)," It is raising emergency response funds to enable the CDC to respond to covid-19."),r.a.createElement("td",null,r.a.createElement("a",{href:"https://give.cdcfoundation.org/give/269833/#!/donation/checkout"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Center for Disaster Philanthropy Covid-19 Response Fund"),r.a.createElement("td",null,"Supports nonprofit organizations working in areas identified as having high numbers of affected individuals ",r.a.createElement("br",null)," and those working with the most vulnerable populations."),r.a.createElement("td",null,r.a.createElement("a",{href:"https://disasterphilanthropy.org/donate-to-the-cdp-covid-19-response-fund/"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Direct Relief"),r.a.createElement("td",null,"Works in the United States and internationally to equip doctors and nurses with lifesaving medical resources.",r.a.createElement("br",null)," The organization is delivering protective masks, exam gloves and isolation gowns to health-care organizations in areas with confirmed covid-19 cases. "),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.directrelief.org/"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Feeding America"),r.a.createElement("td",null,"This organization has a nationwide network of 200 food banks and 60,000 food pantries. Donations to its covid-19 response fund will help food banks across the country support the most vulnerable communities affected by the pandemic."),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.feedingamerica.org/"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",null,"No Kid Hungry"),r.a.createElement("td",null,"This organization deploys funds to ensure that access to free meals continues for children in need, especially with schools closed. It is providing $5 million in emergency grants immediately \u2014 with more to come \u2014 to help schools and community groups feed kids during the outbreak and making sure families know how to find meals while schools are closed."),r.a.createElement("td",null,r.a.createElement("a",{href:"https://secure.nokidhungry.org/site/Donation2?17586.donation=form1&df_id=17586&mfc_pref=T"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",null,"American Red Cross"),r.a.createElement("td",null,"The cancellation of blood drives during this pandemic has resulted in the American Red Cross facing a severe blood shortage. Healthy individuals are needed to donate now to maintain a sufficient supply."),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.redcrossblood.org/give.html/find-drive"},"DONATE HERE"))))),r.a.createElement("hr",{class:"lineTag"}),r.a.createElement("hr",{class:"lineTag"}),r.a.createElement("div",null,r.a.createElement("h2",null,"User Suggested Organizations"),r.a.createElement("h5",{class:"userWarning"},"The Following Information Has Been Entered By Other Users. Kindly Do Your Own Research Before Visiting These Links")),r.a.createElement("table",{class:"myTable"},r.a.createElement("tr",{class:"tableHeaders"},r.a.createElement("th",null,"Organization Name"),r.a.createElement("th",{id:"descriptionCol"},"Description"),r.a.createElement("th",null,"Donation Link")),this.state.covidinfo.map((function(e){return r.a.createElement("tr",{key:e.Organization},r.a.createElement("td",null,e.Organization),r.a.createElement("td",null,e.Description),r.a.createElement("td",null,r.a.createElement("a",{href:e.Links},"DONATE HERE")))}))),r.a.createElement("br",null),r.a.createElement("hr",{class:"lineTag"}),r.a.createElement("hr",{class:"lineTag"}),r.a.createElement("h2",null,"Suggest an Additional Organization Here"),r.a.createElement("div",null,r.a.createElement("hr",null),"Enter Organization:",r.a.createElement("br",null),r.a.createElement("textarea",{name:"tempOrganization",value:this.state.tempOrganization,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),"Enter Description:",r.a.createElement("br",null),r.a.createElement("textarea",{name:"tempDescription",rows:"4",cols:"50",value:this.state.tempDescription,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),"Enter Link:",r.a.createElement("br",null),r.a.createElement("textarea",{name:"tempLinks",cols:"50",value:this.state.tempLinks,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){e.postData(),e.getData()}}," ADD!"),r.a.createElement("hr",null)),r.a.createElement("button",{id:"button",onClick:function(){e.nextWindow()}},"Go Back to News and Updates!"))}}]),n}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7fa0798e.chunk.js.map