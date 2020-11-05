class CreditCardService 
{
    saveCard(booking_details){
      
        let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
        let routeTemp = JSON.parse(localStorage.getItem("BUSES"));
      let cards  = routeTemp ? routeTemp :[];
      cards.push(booking_details);
      localStorage.setItem("BUSES",JSON.stringify(cards));
      
      
    }
    list()
    {
      let routeTemp = JSON.parse(localStorage.getItem("BUSES"));
        let cards  = routeTemp ? routeTemp : [];
       return cards;
    }

}
