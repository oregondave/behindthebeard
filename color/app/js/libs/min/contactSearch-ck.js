console.log("loaded");var form=$("<form>").attr({"class":"filterform",action:"#"}),input=$("<input>").attr({"class":"filterinput",type:"text",placeholder:"Search Customers"});$(form).append(input).appendTo(nameList),console.log("appended"),$("html").on("click",".filterinput",function(){!function(n){function e(e,t){n(input).change(function(){var e=n(this).val();return console.log(e),e?(n(listItems).find("a:not(:Contains("+e+"))").parent().slideUp(),n(listItems).find("a:Contains("+e+")").parent().slideDown(),console.log("change")):(n(listItems).find("li").slideDown(),console.log("change")),!1;console.log("change")}).keyup(function(){n(this).change(),console.log("KEYUP"),searchTrigger()})}jQuery.expr[":"].Contains=function(n,e,t){return(n.textContent||n.innerText||"").toUpperCase().indexOf(t[3].toUpperCase())>=0},n(function(){e(n("#nameList"),n("#list"))})}(jQuery)});