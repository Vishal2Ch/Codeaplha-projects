// let i=0;
// while(i<=20){
//     console.log(i)
//     i++;
// }
const fav="skinder";
let guess=prompt("enter the movie")

while((guess!=fav)&&(guess!=quit)){
    guess=prompt("enert again");
}
if(guess==fav){
    console.log("won")
}