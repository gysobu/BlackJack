
var count=0;
var x=0 ;
var dealerHand=[]
var playerHand=[]
var deck = [ 
{ point: 10, suit:'hearts',imgurl:'blackjackimgs/JPEG 4/KH.jpg' }, {point: 10,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/KD.jpg'},{point: 10, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/KC.jpg'},{point: 10,suit: 'spades',imgurl:'blackjackimgs/JPEG 4/KS.jpg'},
{ point: 10, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/QH.jpg'},{point: 10,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/QD.jpg'},{point: 10, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/QC.jpg'},{point: 10, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/QS.jpg'},
{ point: 10, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/JH.jpg'}, {point: 10,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/JD.jpg'},{point: 10, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/JC.jpg'},{point: 10, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/JS.jpg'},
{ point: 10, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/10H.jpg'},{point: 10,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/10D.jpg'},{point: 10, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/10C.jpg'},{point:10,suit: 'spades',imgurl:'blackjackimgs/JPEG 4/10S.jpg'},
{ point: 9, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/9H.jpg'}, {point: 9, suit:'diamonds',imgurl:'blackjackimgs/JPEG 4/9D.jpg'},{point: 9, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/9C.jpg'},{point: 9, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/9S.jpg'},
{ point: 8, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/8H.jpg'}, {point: 8,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/8D.jpg'},{point: 8, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/8C.jpg'},{point: 8, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/8S.jpg'}, 
{ point: 7, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/7H.jpg'}, {point: 7,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/7D.jpg'},{point: 7, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/7C.jpg'},{point: 7, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/7S.jpg'},
{ point: 6, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/6H.jpg'}, {point: 6,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/6D.jpg'},{point: 6, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/6C.jpg'},{point: 6, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/6S.jpg'},
{ point: 5, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/5H.jpg'}, {point: 5,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/5D.jpg'},{point: 5, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/5C.jpg'},{point: 5, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/5S.jpg'},
{ point: 4, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/4H.jpg'}, {point: 4,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/4D.jpg'},{point: 4, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/4C.jpg'},{point: 4, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/4S.jpg'},
{ point: 3, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/3H.jpg'}, {point: 3,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/3D.jpg'},{point: 3, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/3C.jpg'},{point: 3, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/3S.jpg'},
{ point: 2, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/2H.jpg'}, {point: 2,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/2D.jpg'},{point: 2, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/2C.jpg'},{point: 2, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/2S.jpg'},
{ point: 1, suit: 'hearts',imgurl:'blackjackimgs/JPEG 4/AH.jpg'}, {point: 1,suit: 'diamonds',imgurl:'blackjackimgs/JPEG 4/AD.jpg'},{point: 1, suit: 'clubs',imgurl:'blackjackimgs/JPEG 4/AC.jpg'},{point: 1, suit: 'spades',imgurl:'blackjackimgs/JPEG 4/AS.jpg'}
]
var imgs=[
   { point:0, suit:'hearts',imgurl:'blackjackimgs/JPEG 4/Red_back.jpg'}

]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function getCardImageUrl(card){
    return card.imgurl;
}

function dealerfirstpoints(arr){
       var points=0
    for( var k=1;k<arr.length;k++){
        points+=arr[k].point
    }
    return points

}

function calculatePoints(arr){
    var points=0;
    var temparr=[]   
    for (var i=0;i<arr.length;i++){
       if(arr[i].point==1){
           temparr.push(arr[i])

           }
          
       else{
           points+=arr[i].point

       }
   }
       
   for (var j=0;j<temparr.length;j++){ 

            if(points<10)
            {       
                points+=11

            }
            if(points>=10) {
               points+=1
                      
      
    }   
   }  
   return points;
}
var dummy=document.createElement('img')
var deal=document.getElementById('deal-button')
deal.addEventListener('click',function(){
            
    while(x<2){
         if((calculatePoints(playerHand)&&calculatePoints(dealerHand))<21)
     {
    var dealerhandimgs=document.getElementById('dealer-hand')
    var dealtcard=shuffleArray(deck).pop()
    var imgAH1 =document.createElement('img')
    if((x==0) && (calculatePoints(dealerHand))==0){
         dummy.setAttribute('src',imgs[0].imgurl)
         dummy.setAttribute('id','firstimg')
         dealerhandimgs.appendChild(dummy)
         dealerHand.push(dealtcard)
    }
    else {
    imgAH1.setAttribute('src',getCardImageUrl(dealtcard))
    dealerhandimgs.appendChild(imgAH1)
    dealerHand.push(dealtcard)
    } 
   var playerhands=document.getElementById('player-hand')
   var dealtcardp=shuffleArray(deck).pop()
   var imgAHp=document.createElement('img')
   imgAHp.setAttribute('src',getCardImageUrl(dealtcardp))
   playerhands.appendChild(imgAHp)
   playerHand.push(dealtcardp)
   x++;
   
    } 
    
}
    var pp=document.getElementById("player-points")
    pp.textContent=calculatePoints(playerHand);
    
    var dpt=document.getElementById("dealer-points")
           
         dpt.textContent=dealerfirstpoints(dealerHand)
         if(calculatePoints(dealerHand)>21)
         {    
              var mess=document.getElementById('messages')
              dpt.textContent=calculatePoints(dealerHand)
              mess.textContent="Dealer Busted, Player Won " 
         }

         if(calculatePoints(playerHand)==21){
              var mess=document.getElementById('messages')
              document.getElementById('firstimg').src=dealerHand[0].imgurl;
              dpt.textContent=calculatePoints(dealerHand)
              mess.textContent="player won the game "             
    
         }
         if(calculatePoints(playerHand)>21){
              var mess=document.getElementById('messages')

              mess.textContent="player Busted,Dealer Won"             
    
           }
           else if(calculatePoints(dealerHand)==21){
              var mess=document.getElementById('messages')
              mess.textContent="Dealer won the game "             
    
           }
            
               
    
},true)

var hit= document.getElementById("hit-button")
hit.addEventListener('click',function(){
    
     if(calculatePoints(playerHand)<21&& calculatePoints(dealerHand)<21){
    var playerhit=document.getElementById("player-hand")
    var hitimg=document.createElement('img')
    var hitdealt=shuffleArray(deck).pop();
    playerHand.push(hitdealt);
    hitimg.setAttribute('src',getCardImageUrl(hitdealt)) 
    playerhit.appendChild(hitimg) 
    var pp=document.getElementById("player-points")
    pp.textContent=calculatePoints(playerHand);
     }
     if(calculatePoints(playerHand)==21){
         var mess=document.getElementById('messages')
         document.getElementById('firstimg').src=dealerHand[0].imgurl;
         var dpt=document.getElementById("dealer-points")
         dpt.textContent=calculatePoints(dealerHand)
         mess.textContent="Player BlackJack "             

      }

      if(calculatePoints(playerHand)>21){
         var mess=document.getElementById('messages')
         document.getElementById('firstimg').src=dealerHand[0].imgurl;
         var dpt=document.getElementById("dealer-points")
         dpt.textContent=calculatePoints(dealerHand)
         mess.textContent="Player Busted, Dealer Won the game"   
      }

},true)

var stdbutton=document.getElementById("stand-button")
stdbutton.addEventListener('click',function(){

    document.getElementById('firstimg').src=dealerHand[0].imgurl;
    var dpt=document.getElementById("dealer-points")
    var mess=document.getElementById('messages')
    dpt.textContent=calculatePoints(dealerHand)

     while(calculatePoints(playerHand)< 21&& calculatePoints(dealerHand)<=21){ 
         if(calculatePoints(dealerHand)<21 && (calculatePoints(dealerHand) > calculatePoints(playerHand))){
              var mess=document.getElementById('messages')
              var dpt=document.getElementById("dealer-points")
              dpt.textContent=calculatePoints(dealerHand)
              mess.textContent="Dealer  Won the Game"
              break;
         }
         if(calculatePoints(dealerHand)==21){
              var mess=document.getElementById('messages')
              dpt.textContent=calculatePoints(dealerHand)
              mess.textContent="Dealer BlackJack"
             break 
              }
         
         var dealtcardstd=shuffleArray(deck).pop()
         dealerHand.push(dealtcardstd)
         var dealerhandimgs=document.getElementById('dealer-hand')
         var stdimg=  document.createElement('img')
         stdimg.setAttribute('src',getCardImageUrl(dealtcardstd))
         dealerhandimgs.appendChild(stdimg)
         var dpt=document.getElementById("dealer-points")
         dpt.textContent=calculatePoints(dealerHand)
}

if(calculatePoints(dealerHand)==21){
var mess=document.getElementById('messages')
dpt.textContent=calculatePoints(dealerHand)
mess.textContent="Dealer BlackJack"
}
if (calculatePoints(dealerHand)>21){
    var mess=document.getElementById('messages')
    dpt.textContent=calculatePoints(dealerHand)
    mess.textContent="Dealer Busted  Player Won the Game"

}
},true)

var replay=document.getElementById('replay-button')
replay.addEventListener('click',function(){
    location.reload()
})


