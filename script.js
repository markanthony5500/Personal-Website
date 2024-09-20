
//function to change ice cream imgs
//perameter checks to see what image is being clicked and needs updated
let iceCreamImgCount = [1, 1];
function changeIceCream (iceCreamNum){
    //array to hold each img
    let imgs = ['Images/iceCream1.png', 'Images/iceCream2.png', 'Images/iceCream3.png']

    //iceCream img elements
    let iceCream1 = document.getElementById("iceCreamImg1");
    let iceCream2 = document.getElementById("iceCreamImg2");
    if(iceCreamNum == 1){
      iceCream1.src = imgs[iceCreamImgCount[0]];

      ++iceCreamImgCount[0];

      if(iceCreamImgCount[0] > 2){
        iceCreamImgCount[0] = 0;
      }
    }

    if(iceCreamNum == 2){
      iceCream2.src = imgs[iceCreamImgCount[1]];
    
      ++iceCreamImgCount[1];
    
      if(iceCreamImgCount[1] > 2){
        iceCreamImgCount[1] = 0;
      }
    }

    console.log(iceCreamImgCount[0], iceCreamImgCount[1] )
    if(iceCreamImgCount[0] == 0 && iceCreamImgCount[1] == 0){
      setTimeout(iceCreamFact, 50); //timer is needed to ensure img changes first
    }
}


//function to change img for slideshow
let count = 0
function changeImg(){
  //array of imgs
  //NEW IMAGES
  imgs = ["Images/mark.jpg" , "Images/test123.jpg", "Images/tower.jpg"]
  document.getElementById('tower').src = imgs[count];
  ++count;

  if(count == imgs.length){
    count = 0;
  }
}

//updates fun fact counter
factCount = 0;
function updateFactCount(){
  ++factCount;
  document.getElementById("factCounter").innerHTML = 'Fun Facts Found:' + factCount + '/3';
}

//One Piece Fun Fact
onePieceFactCheck = true; //will check to see if this is first time clicking fun fact
function onePieceFact(){
  alert('This quote is from my favorite piece of fiction, One Piece. One piece is one of the most popular manga/anime with over 516 million copies of the manga sold!!')
  
  if(onePieceFactCheck){
    updateFactCount();
  }
  onePieceFactCheck = false;
}

//Erie fun fact
erieFactCheck = true;
function erieFact(){
  alert('I was born and raised in erie pa! I have never traveled outside of the US and would love to visit another country someday!')

  if(erieFactCheck){
    updateFactCount();
  }
  erieFactCheck = false;
}

//ice cream fun fact
iceCreamFactCheck = true;
function iceCreamFact(){
  alert('My Favorite Flavor of ice cream is vanilla!!');

  if(iceCreamFactCheck){
    updateFactCount();
  }
  iceCreamFactCheck = false;
}




