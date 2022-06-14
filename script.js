console.log("Welcome to spotify");
//Initialize the variables

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let masterSongnName= document.getElementById('MasteSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Chand Baaliyan", filePath: "songs/1.mp3", coverPath: "1.jpg"},
    {songName: "Chan Kitthan", filePath: "songs/2.mp3", coverPath: "2.jpg"},
    {songName: "Excues", filePath: "songs/3.mp3", coverPath: "3.jpg"},
    {songName: "Mila Yun", filePath: "songs/4.mp3", coverPath: "4.jpg"},
    {songName: "Naina da kya kasoor", filePath: "songs/5.mp3", coverPath: "5.jpg"},
    {songName: "Pehli Dafa", filePath: "songs/6.mp3", coverPath: "6.jpg"},
    {songName: "Tera Yaar Hoon Main", filePath: "songs/7.mp3", coverPath: "7.jpg"},
    {songName: "Teri Mitti", filePath: "songs/8.mp3", coverPath: "8.jpg"},
    {songName: "Who Says", filePath: "songs/9.mp3", coverPath: "9.jpg"},
    {songName: "Chaka Chak", filePath: "songs/10.mp3", coverPath: "10.jpg"},

]

songItems.forEach((element,i)=>{
    //console.log(element,i);
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


//audioElement.play
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    console.log(progress);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');  

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = songs[songIndex].filePath ;
        audioElement.currentTime=0;
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
      //  audioElement.play(); 
        //gif.style.opacity=1;
       //// masterPlay.classList.remove('fa-play-circle');
        //masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath ;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
   /* audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');*/

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath ;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
   /* audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');*/
})