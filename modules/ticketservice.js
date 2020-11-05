class view_busService{
    view_bus = function(routeObj){
       var routeTemp = JSON.parse(localStorage.getItem("ROUTE"));
       var route= routeTemp ? routeTemp:[];
       route.push(routeObj);
       localStorage.setItem("ROUTE",JSON.stringify(route));
       let result="success";
       return result;
        }
}
