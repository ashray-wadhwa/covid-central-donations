(this.webpackJsonpfront_app=this.webpackJsonpfront_app||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=(a(14),a(4)),s=a(5),c=a(6),d=a(1),m=a(8),h=a(7),u=(a(15),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=e.handleChange.bind(Object(d.a)(e)),e.state={covidinfo:[],tempOrganization:"",tempDescription:"",tempLinks:"",delOrganization:"",delDescription:"",delLinks:"",success:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://thecovidcentral.herokuapp.com/donate").then((function(e){return e.json()})).then((function(t){e.setState({covidinfo:t.info})}))}},{key:"nextWindow",value:function(){window.location.replace("https://thecovidcentral.herokuapp.com/")}},{key:"getData",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://thecovidcentral.herokuapp.com/donate").then((function(e){return e.json()})).then((function(t){return e.setState({covidinfo:t.info})}))}},{key:"postData",value:function(){var e={Organization:this.state.tempOrganization,Description:this.state.tempDescription,Links:this.state.tempLinks},t={method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://cors-anywhere.herokuapp.com/https://thecovidcentral.herokuapp.com/donate",t)}},{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"component_one"},r.a.createElement("img",{id:"coronaImage",src:"http://pngimg.com/uploads/stop_coronavirus/stop_coronavirus_PNG30.png",alt:"Image not found"}),r.a.createElement("h1",{class:"donationTitle"},"Ways to Help During this Pandemic"),r.a.createElement("h2",null,"Major Organizations that are Accepting DonationsZZZ "),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h5",{class:"userWarning"},"The Following Information Has Been Extracted From a Washington Post Article written by Kanyakrit Vongkiatkajorn and Laura Daily"),r.a.createElement("table",{class:"myTable"},r.a.createElement("tr",{class:"tableHeaders"},r.a.createElement("th",null,"Organization Name"),r.a.createElement("th",{id:"descriptionCol"},"Description"),r.a.createElement("th",null,"Donation Link")),r.a.createElement("tr",null,r.a.createElement("td",{class:"donationTableOrgName"},"CDC Foundation"),r.a.createElement("td",null,"Supports the critical health protection work of the Centers for Disease Control and Prevention. ",r.a.createElement("br",null)," It is raising emergency response funds to enable the CDC to respond to covid-19."),r.a.createElement("td",{class:"donationTableOrgLink"},r.a.createElement("a",{href:"https://give.cdcfoundation.org/give/269833/#!/donation/checkout"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",{class:"donationTableOrgName"},"Center for Disaster Philanthropy Covid-19 Response Fund"),r.a.createElement("td",null,"Supports nonprofit organizations working in areas identified as having high numbers of affected individuals ",r.a.createElement("br",null)," and those working with the most vulnerable populations."),r.a.createElement("td",{class:"donationTableOrgLink"},r.a.createElement("a",{href:"https://disasterphilanthropy.org/donate-to-the-cdp-covid-19-response-fund/"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",{class:"donationTableOrgName"},"Direct Relief"),r.a.createElement("td",null,"Works in the United States and internationally to equip doctors and nurses with lifesaving medical resources.",r.a.createElement("br",null)," The organization is delivering protective masks, exam gloves and isolation gowns to health-care organizations in areas with confirmed covid-19 cases. "),r.a.createElement("td",{class:"donationTableOrgLink"},r.a.createElement("a",{href:"https://www.directrelief.org/"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",{class:"donationTableOrgName"},"Feeding America"),r.a.createElement("td",null,"This organization has a nationwide network of 200 food banks and 60,000 food pantries. Donations to its covid-19 response fund will help food banks across the country support the most vulnerable communities affected by the pandemic."),r.a.createElement("td",{class:"donationTableOrgLink"},r.a.createElement("a",{href:"https://www.feedingamerica.org/"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",{class:"donationTableOrgName"},"No Kid Hungry"),r.a.createElement("td",null,"This organization deploys funds to ensure that access to free meals continues for children in need, especially with schools closed. It is providing $5 million in emergency grants immediately \u2014 with more to come \u2014 to help schools and community groups feed kids during the outbreak and making sure families know how to find meals while schools are closed."),r.a.createElement("td",{class:"donationTableOrgLink"},r.a.createElement("a",{href:"https://secure.nokidhungry.org/site/Donation2?17586.donation=form1&df_id=17586&mfc_pref=T"},"DONATE HERE"))),r.a.createElement("tr",null,r.a.createElement("td",{class:"donationTableOrgName"},"American Red Cross"),r.a.createElement("td",null,"The cancellation of blood drives during this pandemic has resulted in the American Red Cross facing a severe blood shortage. Healthy individuals are needed to donate now to maintain a sufficient supply."),r.a.createElement("td",{class:"donationTableOrgLink"},r.a.createElement("a",{href:"https://www.redcrossblood.org/give.html/find-drive"},"DONATE HERE"))))),r.a.createElement("hr",{class:"lineTag"}),r.a.createElement("hr",{class:"lineTag"}),r.a.createElement("div",null,r.a.createElement("h2",null,"User Suggested Organizations -- USERS"),r.a.createElement("h5",{class:"userWarning"},"The Following Information Has Been Entered By Other Users. Kindly Do Your Own Research Before Visiting These Links")),r.a.createElement("table",{class:"myTable"},r.a.createElement("tr",{class:"tableHeaders"},r.a.createElement("th",null,"Organization Name"),r.a.createElement("th",{id:"descriptionCol"},"Description"),r.a.createElement("th",null,"Donation Link")),this.state.covidinfo.map((function(e){return r.a.createElement("tr",{key:e.Organization},r.a.createElement("td",{class:"donationTableOrgName"},e.Organization),r.a.createElement("td",null,e.Description),r.a.createElement("td",{class:"donationTableOrgLink"},r.a.createElement("a",{href:e.Links},"DONATE HERE")))}))),r.a.createElement("br",null),r.a.createElement("hr",{class:"lineTag"}),r.a.createElement("hr",{class:"lineTag"}),r.a.createElement("h2",null,"Suggest an Additional Organization Here"),r.a.createElement("div",null,r.a.createElement("hr",null),"Enter Organization:",r.a.createElement("br",null),r.a.createElement("textarea",{name:"tempOrganization",value:this.state.tempOrganization,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),"Enter Description:",r.a.createElement("br",null),r.a.createElement("textarea",{name:"tempDescription",rows:"4",cols:"50",value:this.state.tempDescription,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),"Enter Link:",r.a.createElement("br",null),r.a.createElement("textarea",{name:"tempLinks",cols:"50",value:this.state.tempLinks,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){e.postData(),e.getData()}}," ADD!"),r.a.createElement("hr",null)),r.a.createElement("button",{id:"button",onClick:function(){e.nextWindow()}},"Go Back to News and Updates!"),r.a.createElement("p",{class:"creatorSignature"},"Created by Ashray Wadhwa"),r.a.createElement("br",null))}}]),a}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.ed068d06.chunk.js.map