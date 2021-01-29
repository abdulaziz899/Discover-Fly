

// function ticketBooking(ticket ,isIncrease) {
//     let ticketCount=document.getElementById( ticket +'Count').value;
//     let ticketNumberCount=parseInt( ticketCount);
//     if (isIncrease==true) {
//         ticketNumberCount++;
//     }
//     if (isIncrease==false &&  ticketNumberCount>0) {
//         ticketNumberCount--;
//     }
//     document.getElementById( ticket +'Count').value=ticketNumberCount;
//     amountCalculation();
    
// }


// function amountCalculation() {
//     let firstClassCount=subTotalCalculation('firstClassTicket');
//     let economyCount=subTotalCalculation('economyTicket');
//     let subTotal=firstClassCount*150+economyCount*100;
//     document.getElementById('subTotal').innerText=subTotal;

//     document.getElementById('charge');
//     let totalCharge=Math.round(subTotal*0.1);
//     document.getElementById('charge').innerText=totalCharge;

//     document.getElementById('totalAmount');
//     let totalCost=totalCharge+subTotal;
//     document.getElementById('totalAmount').innerText=totalCost;
// }

// function subTotalCalculation(ticket) {
//     let ticketCount=document.getElementById(ticket + 'Count').value;
//     let ticketCountNumber=parseFloat(ticketCount);
//     return  ticketCountNumber;

// }

// let economyTicketIncrease=document.getElementById('economyTicketIncrease');
// economyTicketIncrease.addEventListener('click',function(){
//     ticketBooking( 'economyTicket',true) ;

// })

// let economyTicketDecrease=document.getElementById('economyTicketDecrease');
// economyTicketDecrease.addEventListener('click',function(){
//     ticketBooking('economyTicket',false) ;
// })

// let firstClassTicketIncrease=document.getElementById('firstClassTicketIncrease');
// firstClassTicketIncrease.addEventListener('click',function(){
//     ticketBooking( 'firstClassTicket',true) ;
// })

// let firstClassTicketDecrease=document.getElementById('firstClassTicketDecrease');
// firstClassTicketDecrease.addEventListener('click',function(){
//     ticketBooking( 'firstClassTicket',false) ;
// })


let economyTicketIncrease=document.getElementById('economyTicketIncrease');
economyTicketIncrease.addEventListener('click',function(){
    ticketBooking( 'economyTicket',true) ;
})
let economyTicketDecrease=document.getElementById('economyTicketDecrease');
economyTicketDecrease.addEventListener('click',function(){
    ticketBooking('economyTicket',false) ;
})
let firstClassTicketIncrease=document.getElementById('firstClassTicketIncrease');
firstClassTicketIncrease.addEventListener('click',function(){
    ticketBooking( 'firstClassTicket',true) ;
})

let firstClassTicketDecrease=document.getElementById('firstClassTicketDecrease');
firstClassTicketDecrease.addEventListener('click',function(){
    ticketBooking( 'firstClassTicket',false) ;
})
// start function increasing decreasing + bonus section(count ticket, ticket cost )
function ticketBooking(ticket ,isIncrease) {
    let ticketCount=document.getElementById( ticket +'Count').value;
    let ticketNumberCount=parseInt( ticketCount);
    if (isIncrease==true  ) {
        ticketNumberCount++;
    }
    if (isIncrease==false &&  ticketNumberCount>0) {
        ticketNumberCount--;
        
    }
    let totalTicketCount =document.getElementById( ticket +'Count').value=ticketNumberCount;
    if (ticket=='firstClassTicket') {
        document.getElementById('firstClassTicketNumberCount').value=totalTicketCount;
        let firstClassTicketCost=totalTicketCount*150;
        document.getElementById('firstClassTicketAmount').value=firstClassTicketCost;
    }
    if (ticket=='economyTicket') {
        document.getElementById('economyTicketNumberCount').value=totalTicketCount;
        let economyTicketCost=totalTicketCount*100;
        document.getElementById('economyTicketAmount').value=economyTicketCost;
    }
    amountCalculation();
}
// end function increasing decreasing + bonus section(count ticket, ticket cost )

// function start calculation of subtotal,charge,total section and bonus section;
function amountCalculation() {
    let firstClassCount=subTotalCalculation('firstClassTicket');
    let economyCount=subTotalCalculation('economyTicket');
    let subTotalAmount=firstClassCount*150+economyCount*100;
    document.getElementById('subTotal').innerText=subTotalAmount;                                         
    let totalCharge=Math.round(subTotalAmount*0.1);
    document.getElementById('vatCharge').innerText=totalCharge;
    document.getElementById('chargeAmount').value=totalCharge;
    document.getElementById('totalAmount')
    let totalCost=totalCharge+subTotalAmount;
    document.getElementById('totalAmount').innerText=totalCost;
    document.getElementById('totalTicketsCost').value=totalCost;
}
// function end calculation of subtotal,charge,total section + bonus section;

// start callback Function
function subTotalCalculation(ticket) {
    let ticketCount=document.getElementById(ticket + 'Count').value;
    let ticketCountNumber=parseFloat(ticketCount);
    return  ticketCountNumber;
}
// start callback Function

// start bonus section 
let bookNow=document.getElementById('bookNow');
bookNow.addEventListener('click',function(){
    let customerDetails=document.getElementById('customerDetails');
    customerDetails.style.display="block";
})
let ticketByDone=document.getElementById('ticketByDone');
ticketByDone.addEventListener('click',function(){
    let customerDetails=document.getElementById('customerDetails');
    customerDetails.style.display="none";
})
// end bonus section 

// thank you 




