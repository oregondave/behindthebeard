"use strict";proto.controller("eventTrackerController",function t(e,n,a,i,c,o){e.eventListings=a.getData(),e.titleData=i.getData(),e.csrList=c.getData(),e.comms=o.getData(),e.index=n.current.params.index,e.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2"}],e.alertMe=function(){setTimeout(function(){alert("You've selected the alert tab!")})}});