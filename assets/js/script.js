let songs = [
    {
        name: 'TKN',
        src: './assets/songs/ROSALÍA, Travis Scott - TKN.mp3',
        cover1: './assets/images/rosalia-tkn.jpg',
        artist: 'ROSALÍA, Travis Scott',
        lyrics: ''
    },

    {   
        name: 'No Heart',
        src: './assets/songs/21 Savage & Metro Boomin - No Heart.mp3',
        cover2: './assets/images/no-heart.jpg',
        artist: '21 Savage, Metro Boomin',     
        lyrics: ''
    }
];

let artists = [
    {
        name: 'Lil Eazzy',
        picture: './assets/images/lil-eazzy.img',
    },

    {
        name: 'Nardo Wick',
        picture: './assets/images/nardo-wick.jpeg'
    },
    {
        name: 'Kendrick Lamar',
        picture: './assets/images/kendrick-lamar.jpg'
    },
    {
        name: '21 Savage',
        picture:'./assets/images/21-savage.jpg'
    },
    {
        name: 'NLE Choppa',
        picture: './assets/images/nle-choppa.jpg'
    },
    {
        name: 'Travis Scott',
        picture: './assets/images/travis-scott.jpg'
    },
    {
        name: 'Rich The Kidd',
        picture: './assets/images/rich-thekid.jpg'
    },
    {
        name: 'Tyler The Creator',
        picture: './assets/images/tyler-creator.jpg'
    },
    {
        name: 'A$ap Rocky',
        picture: './assets/images/asap-rocky.jpeg'
    }

   

    ]

let album = [
        {
            name: 'Rocky Of The Year',
            picture: './assets/images/rocky-album.jpg',
        },    
        {
            name: 'Who is Nardo Wick?',
            picture: './assets/images/who-nardo.jpg'
        },
        {
            name: 'Honestly, Nevermind',
            picture: './assets/images/honestly-album.jpg'
        },
        {
            name: 'Astroworld',
            picture: './assets/images/astro-album.jpg'
        },
        {
            name: 'Savage Mode 2',
            picture: './assets/images/savage-mod2.png'
        }

    ]
    
   
function numformatter(num) {
    return num >= 10 ? num.toString() : '0' + num.toString();
}

$(document).ready(function(){
    songs.map((song,i) => {
        var template = 
        '<div class="song" data-id = "'+
        i+'"> <img src="./assets/images/equalizer.gif" alt="" class="equalizer_gif"/> <div class="song_num">'+
        numformatter(i+1)+'</div> <div style="position:relative;"> <img src="'+
        song.cover+'" class="song_img" alt="" /> <img src="./assets/images/play.png" alt="" class="play_hover" /> </div> <div class="song_info"> <div class="song_name">'+
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
            songs[0].cover +
            ')'
    );
    $('.right_song_img').attr('src', songs[0].cover);
    $('.right_song_name').text(songs[0].name);
    $('.right_song_artist').text(songs[0].artist);
    $('.bottom .song_img').attr('src', songs[0].cover);
    $('.bottom .song_name').text(songs[0].name);
    $('.bottom .song_artist').text(songs[0].artist);
})



$(document).on('keyup', '#search_input', function () {
    var searchTerm = $(this).val();
    console.log(searchTerm);
    if (searchTerm === '') {
        songs.map((song, i) => {
            var template = 
            '<div class="song" data-id = "'+
            i+'"> <img src="./assets/images/equalizer.gif" alt="" class="equalizer_gif"/> <div class="song_num">'+
            numformatter(i+1)+'</div> <div style="position:relative;"> <img src="'+
            song.cover+'" class="song_img" alt="" /> <img src="./assets/images/play.png" alt="" class="play_hover" /> </div> <div class="song_info"> <div class="song_name">'+
            song.name+
            '</div> <div class="song_artist">' +
                song.artist +
                '</div> </div> </div>';
            $('.left_songs_list').append(template)
        });
    } else {
        var results = songs
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
                '"> <img src="assets/images/equalizer.gif" class="equalizer_gif" alt="" /> <div class="song_num">' +
                numformatter(i + 1) +
                '</div> <div style="position: relative"> <img src="' +
                song.cover +
                '" class="song_img" alt="" /> <img src="assets/images/play.png" class="play_hover" alt="" /> </div> <div class="song_info"> <div class="song_name">' +
                song.name +
                '</div> <div class="song_artist">' +
                song.artist +
                '</div> </div> </div>';
            $('.left_songs_list').append(template);
            });
        }
    }
});
const player = document.querySelector('.player'),
playBtn = document.querySelector('.play'),
prevBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next')
audio = document.querySelector('.audio')
progressContainer =  document.querySelector('.progress_container')
progress = document.querySelector('.progress')
song_info =  document.querySelector('.song_info') //title
song_wrap = document.querySelector('.song_img_wrap') //cover
imgSrc = document.querySelector('.img_src')  //play to pause

let songIndex = 0

function loadSong(song) {
    song_info.innerHTML = song
    audio.src = songs.src
    song_wrap = songs.cover$(songIndex + 1)
}
loadSong(song[songIndex])

function playSong(){
    audio.play()
}
function pauseSong(){
    audio.pause()
}