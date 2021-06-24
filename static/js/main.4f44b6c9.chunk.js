(this.webpackJsonpfront_app=this.webpackJsonpfront_app||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),r=a.n(o),s=(a(14),a(4)),l=a(5),c=a(6),d=a(1),m=a(8),h=a(7),u=(a(15),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=e.handleChange.bind(Object(d.a)(e)),e.state={covidinfo:[],tempOrganization:"",tempDescription:"",tempLinks:"",delOrganization:"",delDescription:"",delLinks:"",success:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://secret-ocean-49799.herokuapp.com/https://thecovidcentral.herokuapp.com/donate").then((function(e){return e.json()})).then((function(t){e.setState({covidinfo:t.info})}))}},{key:"useEffect",value:function(){var e=document.createElement("script");return e.src="https://platform.linkedin.com/badges/js/profile.js",e.async=!0,e.defer=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}},{key:"nextWindow",value:function(){window.location.replace("https://thecovidcentral.herokuapp.com/")}},{key:"getData",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://thecovidcentral.herokuapp.com/donate").then((function(e){return e.json()})).then((function(t){return e.setState({covidinfo:t.info})}))}},{key:"postData",value:function(){var e={Organization:this.state.tempOrganization,Description:this.state.tempDescription,Links:this.state.tempLinks},t={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://cors-anywhere.herokuapp.com/https://thecovidcentral.herokuapp.com/donate",t)}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"component_one"},i.a.createElement("img",{id:"coronaImage",src:"http://pngimg.com/uploads/stop_coronavirus/stop_coronavirus_PNG30.png",alt:"Image not found"}),i.a.createElement("h1",{class:"donationTitle"},"Ways to Help During this Pandemic"),i.a.createElement("hr",{class:"LineTag"}),i.a.createElement("h2",null,"Major Organizations that are Accepting Donations "),i.a.createElement("hr",{class:"LineTag"}),i.a.createElement("div",null,i.a.createElement("h5",{class:"userWarning"},"The Following Information Has Been Extracted From a Washington Post Article written by Kanyakrit Vongkiatkajorn and Laura Daily"),i.a.createElement("table",{class:"myTable"},i.a.createElement("tr",{class:"tableHeaders"},i.a.createElement("th",{class:"myHeader"},"Organization Name"),i.a.createElement("th",{class:"myHeader",id:"descriptionCol"},"Description"),i.a.createElement("th",{class:"myHeader"},"Donation Link")),i.a.createElement("tr",null,i.a.createElement("td",{id:"myContent",class:"donationTableOrgName"},"CDC Foundation"),i.a.createElement("td",{id:"myContent"},"Supports the critical health protection work of the Centers for Disease Control and Prevention. ",i.a.createElement("br",null)," It is raising emergency response funds to enable the CDC to respond to covid-19."),i.a.createElement("td",{id:"myContent",class:"donationTableOrgLink"},i.a.createElement("a",{class:"donationLinks",href:"https://give.cdcfoundation.org/give/269833/#!/donation/checkout"},"DONATE HERE"))),i.a.createElement("tr",null,i.a.createElement("td",{id:"myContent",class:"donationTableOrgName"},"Center for Disaster Philanthropy Covid-19 Response Fund"),i.a.createElement("td",{id:"myContent"},"Supports nonprofit organizations working in areas identified as having high numbers of affected individuals ",i.a.createElement("br",null)," and those working with the most vulnerable populations."),i.a.createElement("td",{id:"myContent",class:"donationTableOrgLink"},i.a.createElement("a",{class:"donationLinks",href:"https://disasterphilanthropy.org/donate-to-the-cdp-covid-19-response-fund/"},"DONATE HERE"))),i.a.createElement("tr",null,i.a.createElement("td",{id:"myContent",class:"donationTableOrgName"},"Direct Relief"),i.a.createElement("td",{id:"myContent"},"Works in the United States and internationally to equip doctors and nurses with lifesaving medical resources.",i.a.createElement("br",null)," The organization is delivering protective masks, exam gloves and isolation gowns to health-care organizations in areas with confirmed covid-19 cases. "),i.a.createElement("td",{id:"myContent",class:"donationTableOrgLink"},i.a.createElement("a",{class:"donationLinks",href:"https://www.directrelief.org/"},"DONATE HERE"))),i.a.createElement("tr",null,i.a.createElement("td",{id:"myContent",class:"donationTableOrgName"},"Feeding America"),i.a.createElement("td",{id:"myContent"},"This organization has a nationwide network of 200 food banks and 60,000 food pantries. Donations to its covid-19 response fund will help food banks across the country support the most vulnerable communities affected by the pandemic."),i.a.createElement("td",{id:"myContent",class:"donationTableOrgLink"},i.a.createElement("a",{class:"donationLinks",href:"https://www.feedingamerica.org/"},"DONATE HERE"))),i.a.createElement("tr",null,i.a.createElement("td",{id:"myContent",class:"donationTableOrgName"},"No Kid Hungry"),i.a.createElement("td",{id:"myContent"},"This organization deploys funds to ensure that access to free meals continues for children in need, especially with schools closed. It is providing $5 million in emergency grants immediately \u2014 with more to come \u2014 to help schools and community groups feed kids during the outbreak and making sure families know how to find meals while schools are closed."),i.a.createElement("td",{id:"myContent",class:"donationTableOrgLink"},i.a.createElement("a",{class:"donationLinks",href:"https://secure.nokidhungry.org/site/Donation2?17586.donation=form1&df_id=17586&mfc_pref=T"},"DONATE HERE"))),i.a.createElement("tr",null,i.a.createElement("td",{id:"myContent",class:"donationTableOrgName"},"American Red Cross"),i.a.createElement("td",{id:"myContent"},"The cancellation of blood drives during this pandemic has resulted in the American Red Cross facing a severe blood shortage. Healthy individuals are needed to donate now to maintain a sufficient supply."),i.a.createElement("td",{id:"myContent",class:"donationTableOrgLink"},i.a.createElement("a",{class:"donationLinks",href:"https://www.redcrossblood.org/give.html/find-drive"},"DONATE HERE"))))),i.a.createElement("div",null,i.a.createElement("hr",{class:"LineTag"}),i.a.createElement("h2",null,"User Suggested Organizations"),i.a.createElement("hr",{class:"LineTag"}),i.a.createElement("h5",{class:"userWarning"},"The Following Information Has Been Entered By Other Users. Kindly Do Your Own Research Before Visiting These Links")),i.a.createElement("table",{class:"myTable"},i.a.createElement("tr",{class:"tableHeaders"},i.a.createElement("th",{class:"myHeader"},"Organization Name"),i.a.createElement("th",{class:"myHeader",id:"descriptionCol"},"Description"),i.a.createElement("th",{class:"myHeader"},"Donation Link")),this.state.covidinfo.map((function(e){return i.a.createElement("tr",{key:e.Organization},i.a.createElement("td",{id:"myContent",class:"donationTableOrgName"},e.Organization),i.a.createElement("td",{id:"myContent"},e.Description),i.a.createElement("td",{id:"myContent",class:"donationTableOrgLink"},i.a.createElement("a",{class:"donationLinks",href:e.Links},"DONATE HERE")))}))),i.a.createElement("br",null),i.a.createElement("hr",{class:"lineTag"}),i.a.createElement("h2",null,"Suggest an Additional Organization Here"),i.a.createElement("div",null,i.a.createElement("hr",null),i.a.createElement("div",{align:"left"},"Enter Organization:",i.a.createElement("br",null),i.a.createElement("textarea",{name:"tempOrganization",value:this.state.tempOrganization,onChange:this.handleChange,required:!0}),i.a.createElement("br",null),"Enter Description:",i.a.createElement("br",null),i.a.createElement("textarea",{name:"tempDescription",rows:"4",cols:"50",value:this.state.tempDescription,onChange:this.handleChange,required:!0}),i.a.createElement("br",null),"Enter Link:",i.a.createElement("br",null),i.a.createElement("textarea",{name:"tempLinks",cols:"50",value:this.state.tempLinks,onChange:this.handleChange,required:!0}),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(){e.postData(),e.getData()}}," ADD!")),i.a.createElement("div",{class:"postCard",align:"right"},this.useEffect(),i.a.createElement("div",{class:"badge-base LI-profile-badge",align:"center","data-locale":"en_US","data-size":"medium","data-theme":"light","data-type":"VERTICAL","data-vanity":"ashray-wadhwa","data-version":"v1"},i.a.createElement("a",{class:"badge-base__link LI-simple-link",href:"https://www.linkedin.com/in/ashray-wadhwa?trk=profile-badge"}))),i.a.createElement("hr",null)),i.a.createElement("button",{id:"button",onClick:function(){e.nextWindow()}},"Go Back to News and Updates!"))}}]),a}(i.a.Component));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4f44b6c9.chunk.js.map