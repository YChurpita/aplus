/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function terdgorsl(){
     var tSliderLine;
     var linePosition=0;
     var lineCount=0;
     var lineInterval=[0,100,170];
     var sidLine='';
     var slBtnCount=0;
     
     this.setLine=function(){
         linePosition=-1*((lineInterval[lineCount]));
         $(tSliderLine).animate({left:linePosition+'%'}, 2000);   
     } ;
//------------------------------------------------------------------------------     
     this.init=function(slLine,BtnCount){
         sidLine=slLine;
         slBtnCount=BtnCount;
         tSliderLine=document.getElementById(sidLine);
     };
//------------------------------------------------------------------------------
     
     this.onClickLR=function(aVal){    
         if (aVal==='left'){
           if (lineCount<slBtnCount) lineCount++;
         };
         
         if (aVal==='right'){
           if (lineCount>0) lineCount--;    
         };   
          this.setLine();
   
  };
 };

 function rangeCalc(){
   var prinTag,hName; 
   
     this.Init=function(printTag, ChName){
      prinTag=document.getElementById(printTag) ;
      hName= document.getElementById(ChName) ;
   };  
     
   this.PrintCal=function(){
       var step=1000, calc=0;
        calc=  hName.value *  step;
       prinTag.innerHTML='О вас узнает '+ calc+' человек ';
   } ; 
 };
 
function videoSet(){
     var youtubeRe=['https://www.youtube.com/embed/fxggnkT0wJ4',
         'https://www.youtube.com/embed/06OejlhmY_E',
         'https://www.youtube.com/embed/9GnOMUkCFbg',
         'https://www.youtube.com/embed/OQtWZgOHs6Q'],
     ifrmeTeg;
     
    this.Init= function (iframeT){
        ifrmeTeg= document.getElementById(iframeT) ;   
    };
    
    this.onSet=function(id){
          ifrmeTeg.src=youtubeRe[id-1];            
    };
     
 };
 
 
 
 var trampSlider = new terdgorsl(),
 case1Slider = new terdgorsl(),
 case2Slider = new terdgorsl(),
 case3Slider = new terdgorsl(),
 case4Slider = new terdgorsl(),
 bandSlider = new terdgorsl(),
 onRange1=new rangeCalc(),
 setVideo=new videoSet();
 
   $(document).ready(function () {
                trampSlider.init("aplus-smm-donald-line-1",  3);
          
                case1Slider.init("aplus-case-sl-line-1",  3);
                case2Slider.init("aplus-case-sl-line-2",  3);
                case3Slider.init("aplus-case-sl-line-3",  3);
                case4Slider.init("aplus-case-sl-line-4",  3);
                onRange1.Init('aplus-info-2','aplus-info-1');
                setVideo.Init('aplus-trust-us-sl');
     });