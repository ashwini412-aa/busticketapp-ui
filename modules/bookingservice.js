class BookingService{
    book = function(booking_details){
       let bookingTemp = JSON.parse(localStorage.getItem("RESERVED"));
       let reserved= bookingTemp ? bookingTemp:[];
       reserved.push(booking_details);
       localStorage.setItem("RESERVED",JSON.stringify(reserved));
       let result="success";
       return result;
        }

        list()
        {
          let bookingTemp = JSON.parse(localStorage.getItem("RESERVED"));
            let reserved  = bookingTemp ? bookingTemp : [];
           return reserved;
        }
    
}