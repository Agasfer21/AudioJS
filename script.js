let songs = [
   'Jack Harlow - Whats Poppin',
    '21 Savage - No Heart',  
    'Travis Scott, T.I., 2 Chainz - Upper Echelon',
    'Wiz Khalifa - Black and Yellow',  
    'Lil Eazzy, G Herbo - Onna Come Up',
    `Travis Scott - CANT SAY`, 
    '21 Savage - A Lot',
    'ROSALÍA, Travis Scott - TKN',
    'Nardo Wick - Who Want Smoke',
    'Kendrick Lamar - Humble'
];

let visongs = [
    {
        name: 'Jack Harlow',
        cover: './img/Jack Harlow - Whats Poppin.jpg',
        artist: 'Whats Poppin',
        lyrics: ''
    },

    {   
        name: 'No Heart',
        cover: './img/21 Savage - No Heart.jpg',
        artist: '21 Savage, Metro Boomin',     
        lyrics: ''
    },
    {
        name: 'Upper Echelon',
        cover: './img/Travis Scott, T.I., 2 Chainz - Upper Echelon.jpg',
        artist: 'Travis Scott, T.I., 2 Chainz',
        lyrics: ''
    },
    {
        name: 'Black and Yellow',
        cover: './img/Wiz Khalifa - Black and Yellow.jpg',
        artist: 'Wiz Khalifa',
        lyrics: ''
    },
    {
        name: 'Onna Come Up',
        cover: './img/Lil Eazzy, G Herbo - Onna Come Up.jpg',
        artist: 'Lil Eazzy, G Herbo',
        lyrics: ''
    },
    {
        name: `CAN'T SAY`,
        cover: `./img/Travis Scott - CANT SAY.jpg`,
        artist: 'Travis Scott',
        lyrics: ''
    },
    {
        name: 'A Lot',
        cover: './img/21 Savage - A Lot.jpg',
        artist: '21 Savage',
        lyrics: ''
    },
    {
        name: 'TKN',
        cover: './img/ROSALÍA, Travis Scott - TKN.jpg',
        artist: 'ROSALÍA, Travis Scott',
        lyrics: ''
    },
    {
        name: 'Who Want Smokek',
        cover: './img/Nardo Wick - Who Want Smoke.jpg',
        artist: 'Nardo Wick',
        lyrics: ''
    },
    {
        name: 'Humble',
        cover: './img/Kendrick Lamar - Humble.jpg',
        artist: 'Kendrick Lamar',
        lyrics: ''
    },


];

let artists = [
    {
        name: 'Lil Eazzy',
        picture: 'img/lil-eazzy.jpg',
    },

    {
        name: 'Nardo Wick',
        picture: 'img/nardo-wick.jpeg'
    },
    {
        name: 'Kendrick Lamar',
        picture: 'img/kendrick-lamar.jpg'
    },
    {
        name: '21 Savage',
        picture:'img/21-savage.jpg'
    },
    {
        name: 'NLE Choppa',
        picture: 'img/nle-choppa.jpg'
    },
    {
        name: 'Travis Scott',
        picture: 'img/travis-scott.jpg'
    },
    {
        name: 'Rich The Kidd',
        picture: 'img/rich-thekid.jpg'
    },
    {
        name: 'Tyler The Creator',
        picture: 'img/tyler-creator.jpg'
    },
    {
        name: 'A$ap Rocky',
        picture: 'img/asap-rocky.jpeg'
    }]

let album = [
        {
            name: 'Rocky Of The Year',
            picture: 'img/rocky-album.jpg',
        },    
        {
            name: 'Who is Nardo Wick?',
            picture: 'img/who-nardo.jpg'
        },
        {
            name: 'Honestly, Nevermind',
            picture: 'img/honestly-album.jpg'
        },
        {
            name: 'Astroworld',
            picture: 'img/astro-album.jpg'
        },
        {
            name: 'Savage Mode 2',
            picture: 'img/savage-mod2.png'
        }

    ]
    
   
function numformatter(num) {
    return num >= 10 ? num.toString() : '0' + num.toString();
}

$(document).ready(function(){
    visongs.map((song,i) => {
        var template = 
        '<div class="song" data-id = "'+
        i+'"> <img src="img/equalizer.gif" alt="" class="equalizer_gif"/> <div class="song_num">'+
        numformatter(i+1)+'</div> <div style="position:relative;"> <img src="'+
        song.cover+'" class="song_img" alt="" /> <img src="img/play.png" alt="" class="play_hover" /> </div> <div class="song_info"> <div class="song_name">'+
        song.name+
        '</div> <div class="song_artist">' +
            song.artist +
            '</div> </div> </div>';
        $('.left_songs_list').append(template)

    })
    artists.map(function(artist){
        var template = '<div class = "rap"><img src = '+artist.picture+' class = "artist_img"><div class = "rap_text">'+artist.name+'</div></div>'
        $('#artists_list').append(template);
    });
    album.map(function(album){
        var template = '<div class = "rap"><img src = '+album.picture+' class = "album_img"><div class = "rap_text">'+album.name+'</div></div>'
        $('#albums_list').append(template);
    })
    $('.right').css(
        'background-image',
        'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(' +
            visongs[0].cover +
            ')'
    );
    $('.right_song_img').attr('src', visongs[0].cover);
    $('.right_song_name').text(visongs[0].name);
    $('.right_song_artist').text(visongs[0].artist);
    // $('.bottom .song_img').attr('src', songs[0].cover1);
    $('.bottom .song_name').text(visongs[0].name);
    $('.bottom .song_artist').text(visongs[0].artist);
})



$(document).on('keyup', '#search_input', function () {
    var searchTerm = $(this).val();
    console.log(searchTerm);
    if (searchTerm === '') {
        visongs.map((song, i) => {
            var template = 
            '<div class="song" data-id = "'+
            i+'"> <img src="img/equalizer.gif" alt="" class="equalizer_gif"/> <div class="song_num">'+
            numformatter(i+1)+'</div> <div style="position:relative;"> <img src="'+
            song.cover+'" class="song_img" alt="" /> <img src="img/play.png" alt="" class="play_hover" /> </div> <div class="song_info"> <div class="song_name">'+
            song.name+
            '</div> <div class="song_artist">' +
                song.artist +
                '</div> </div> </div>';
            $('.left_songs_list').append(template)
        });
    } else {
        var results = visongs
            .map(function (song) {
                var { name, artist } = song;
                if (
                    name.toLowerCase().includes(searchTerm) == true ||
                    artist.toLowerCase().includes(searchTerm) == true
                ) {
                    return song;
                }
            })
            .filter(Boolean);
            console.log(searchTerm);
        if (results.length > 0) {
            results.map((song, i) => {
                $('.left_songs_list').html('');
                var template =
                '<div class="song" data-id="' +
                i +
                '"> <img src="img/equalizer.gif" class="equalizer_gif" alt="" /> <div class="song_num">' +
                numformatter(i + 1) +
                '</div> <div style="position: relative"> <img src="' +
                song.cover +
                '" class="song_img" alt="" /> <img src="img/play.png" class="play_hover" alt="" /> </div> <div class="song_info"> <div class="song_name">' +
                song.name +
                '</div> <div class="song_artist">' +
                song.artist +
                '</div> </div> </div>';
            $('.left_songs_list').append(template);
            });
        }
    }
});

let player = document.querySelector('.bottom'),
    playBtn = document.querySelector('.play',  '.play_hover'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    audio = document.querySelector('.audio'),
    progressContainer =  document.querySelector('.progress_container'),
    progress = document.querySelector('.progress'),
    song_info =  document.querySelector('.song_name'), //title
    song_wrap = document.querySelector('.song_img'), //cover
    imgSrc = document.querySelector('.img_src')  //play to pause
    playingImage = document.getElementsByClassName("song_img_wrap1")[0]
    title = document.querySelector('.song_info')

    songIndex = 0
    title.innerHTML = songs.songIndex
    const loadSong = (x) => {
        title.innerHTML = x
        audio.src = `songs/${x}.mp3`
        playingImage.src = `img/${songs[songIndex]}.jpg`
    }
    loadSong(songs[songIndex])
    
    playSong = () =>{
        player.classList.add('play')
        imgSrc.src = "img/pause.png"
        audio.play()
    }
    
    pauseSong = () =>{
        player.classList.remove('play')
        imgSrc.src = "img/play.png"
        audio.pause()
        // coverImg.style.animation ='';
        
    }
    playBtn.onclick = () =>{
        const isPlaying = player.classList.contains('play')
        isPlaying?pauseSong():playSong()
    }
    
    nextSong = () => {
        songIndex++
        if(songIndex>songs.length-1){
            songIndex=0
        }
        loadSong(songs[songIndex])
        playSong()
    }
    
    prevSong = () => {
        songIndex--
        if(songIndex<0){
            songIndex=songs.length-1
        }
        loadSong(songs[songIndex])
        playSong()
    }
    
    nextBtn.onclick = () => {
        nextSong()
    }
    prevBtn.onclick = () =>{
        prevSong()
    }
    
    updateProgress = (x) =>{
        const {duration, currentTime} = x.srcElement
        const progressProcent = (currentTime / duration)*100
        progress.style.width = `${progressProcent}%`
        progress.style.transition =  `width 0.5s`
    }
    audio.addEventListener("timeupdate", updateProgress)
    
    setProgress = (e) => {
        const clickX = e.offsetX
        const duration = audio.duration
        audio.currentTime = (clickX/555.07)*duration
    }
    progressContainer.addEventListener('click', setProgress )

    audio.addEventListener('ended', nextSong)

    audio.addEventListener("timeupdate", (e)=>{
       
        const currentTime = e.target.currentTime; //getting playing song currentTime
        const duration = e.target.duration; //getting playing song total duration
        let progressWidth = (currentTime / duration) * 100;
        progress.style.width = `${progressWidth}%`;
        
        let musicCurrentTime = document.querySelector(".current"),
        musicDuration = document.querySelector(".duration");
            audio.addEventListener("loadeddata", ()=>{
          // update song total duration
          let mainAdDuration = audio.duration;
          let totalMin = Math.floor(mainAdDuration / 60);
          let totalSec = Math.floor(mainAdDuration % 60);
          if(totalSec < 10){ //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
          }
          musicDuration.innerText = `${totalMin}:${totalSec}`;
        });
        // update playing song current time
        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);
        if(currentSec < 10){ //if sec is less than 10 then add 0 before it
          currentSec = `0${currentSec}`;
        }
        musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
      });
      progress.addEventListener("click", (e)=>{
        let progressWidth = progress.clientWidth; //getting width of progress bar
        let clickedOffsetX = e.offsetX; //getting offset x value
        let songDuration = audio.duration; //getting song total duration
        
        audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
        playSong(); //calling playMusic function
        playingSong();
      });

     mute = document.getElementsByClassName('mute')[0]
     volStatImg = document.getElementsByClassName('volpng')[0]

     function changeVolStatus(){
         if(audio.volume > 0){
             audio.volume = 0
             volStatImg.src = "img/mute.png"

         }else{
             audio.volume = 1
             volStatImg.src = "img/volume.png"

            }
     }
     setInterval(() => {
         
         mute.addEventListener("click", changeVolStatus)
     }, 0);

    
