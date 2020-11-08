class BusService 
{
    savebus(bus_details){
      
      let busesTemp = JSON.parse(localStorage.getItem("BUSES_AVAILABLE"));
      let buses  = busesTemp ? busesTemp :[];
      buses.push(bus_details);
      localStorage.setItem("BUSES_AVAILABLE",JSON.stringify(buses));
      
      
    }
    list()
    {
      let busesTemp = JSON.parse(localStorage.getItem("BUSES_AVAILABLE"));
        let buses  = busesTemp ? busesTemp : [];
       return buses ;
    }

}