(this["webpackJsonpd3-histogram"]=this["webpackJsonpd3-histogram"]||[]).push([[0],{41:function(e,t,a){e.exports=a(50)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),s=a.n(o),i=(a(46),a(47),a(12)),c=a(13),l=a(15),u=a(16),p=(a(48),a(8)),h=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).canvas=r.a.createRef(),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.buildData();this.drawBarChart(e)}},{key:"buildData",value:function(){var e=[];for(var t in this.props.data)if(this.props.data.hasOwnProperty(t)){var a={key:t,value:this.props.data[t]};e.push(a)}return e}},{key:"drawBarChart",value:function(e){var t=p.a(this.canvas.current).append("div").attr("class","tooltip").style("display","none");p.a(this.canvas.current).append("svg").attr("width",600).attr("height",400).style("border","1px solid black").selectAll("rect").data(e).enter().append("rect").attr("width",40).attr("height",(function(e){return 20*e.value})).attr("x",(function(e,t){return 45*t})).attr("y",(function(e){return 400-20*e.value})).on("mouseover",(function(e,a,n){t.style("display","block").html(a.key+"<hr>"+a.value).style("left",e.pageX+"px").style("top",e.pageY+"px")})).on("mousemove",(function(e){t.style("left",e.pageX+"px").style("top",e.pageY-40+"px")})).on("mouseout",(function(){t.style("display","none")}))}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.canvas})}}]),a}(n.Component);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h,{data:{apples:10,oranges:5,pears:15,peaches:30,bananas:17}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.44b01170.chunk.js.map