"use strict";proto.controller("renewalsController",function t(e,a,n,r,s,o,l,c,i,u,g,D,d){e.orders=r.getData(),e.customers=s.getData(),e.customerDetails=o.getData(),e.csr=l.getData(),e.renewals=c.getData(),e.states=i.getData(),e.countries=u.getData(),e.CCI=g.getData(),e.CCILines=D.getData(),e.renewalDocs=d.getData(),e.index=n.current.params.index,e.repeatFiller=function(t){var n=a("filter")(e.renewals.statusOptions,{value:t});return t&&n.length?n[0].text:"Not set"},e.repeatFillerCustomer=function(t){var n=a("filter")(e.customers.statusOptions,{value:t});return t&&n.length?n[0].text:"Not set"},e.sort={column:"",descending:!1},e.changeSorting=function(t){var a=e.sort;a.column==t?a.descending=!a.descending:(a.column=t,a.descending=!1)}});