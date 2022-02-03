function crash() {
    [...Array(2**32-1)]
}

$(document).ready(function() {
    $("#switcher").on("click", ".muhi", function() {


        $('.torrent').css("color", "white");
        $('.freezy').css("color", "#00ffeb", 'important')
        $('.muhi').css("color", "#fffc48", 'important')
		$('.gm').text("")
        $('.moho').css("color", "#00ffeb", 'important')
        $('.mail').text("[panel]").attr("href", "https://mcpanel.mateyo.hu/")
        $('.torrent').removeAttr("href", "")
        $('.ms').removeAttr("href", "")
        $('.torrent').text("[checking...]") 
        $('.ms').text("[checking...]") 
        $.get("https://api.minetools.eu/ping/builder.mateyo.hu", {},function(data, status){
            let resp = (JSON.stringify(Object.values(data)))
            if (!resp.includes("Errno")) {
                $('.torrent').text("[builder]") 
                $('.torrent').css("color", "#06ff50");
            } else {
                $('.torrent').text("[builder]")
                $('.torrent').css("color", "#ff4646");
            }
        });
        $.get("https://api.minetools.eu/ping/stream.mateyo.hu", {},function(data, status){
          let resp = (JSON.stringify(Object.values(data)))
          if (!resp.includes("Errno")) {
              $('.ms').text("[smp]") 
              $('.ms').css("color", "#06ff50");
          } else {
              $('.ms').text("[smp]")
              $('.ms').css("color", "#ff4646");
          }
        });
        
        $('.pw').text("")
        $('.fs').text("")
		$('.px').text("")
    });

    $("#switcher").on("click", ".moho", function() {
        $('.torrent').css("color", "white");
        $('.ms').css("color", "white");
        $('.freezy').css("color", "#00ffeb", 'important')
        $('.muhi').css("color", "#00ffeb", 'important')
        $('.moho').css("color", "#fffc48", 'important')
        $('.mail').text("[matrix]").attr("href", "https://matrix.mateyo.hu/")
        $('.torrent').text("[matrix-admin]").attr("href", "https://matrix-admin.mateyo.hu/")
		$('.ms').text("[guacamole]").attr("href", "https://guacamole.mateyo.hu/")
        $('.pw').text("")
        $('.fs').text("")
		$('.px').text("")
         
    });

    $("#switcher").on("click", ".freezy", function() {
        $('.torrent').css("color", "white");
        $('.ms').css("color", "white");
        $('.freezy').css("color", "#fffc48", 'important')
        $('.muhi').css("color", "#00ffeb", 'important')
        $('.moho').css("color", "#00ffeb", 'important')
		$('.gm').text("")
        $('.mail').text("[mail server]").attr("href", "https://mail.mateyo.hu/")
        $('.torrent').text("[torrent server]").attr("href", "https://torrent.mateyo.hu/") 
        $('.ms').text("[emby]").attr("href", "https://emby.mateyo.hu/")
		$('.px').text("[plex]").attr("href", "https://plex.mateyo.hu/")
        $('.pw').text("[password manager]").attr("href", "https://bitwarden.mateyo.hu/")
        $('.fs').text("[file server]").attr("href", "https://downloads.mateyo.hu/")
    });
    $(".k-asc").mouseenter(
        function() {
            $( ".k-asc" ).html(`<a class="k-asc" href="https://freezy.store">freezy.store</a>`);
          }
    )
    $(".k-asc").mouseleave(
        function() {
            $( ".k-asc" ).text(`"fejedet meg belebasznank a betonba te fasszopo geci"`);
          }
    )
});


setInterval(function(){ 
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var dt = new Date();
if (parseInt(dt.getMinutes()) < 10) {minutes = "0" + dt.getMinutes();} else minutes = dt.getMinutes();
if (parseInt(dt.getSeconds()) < 10) {seconds = "0" + dt.getSeconds();} else seconds = dt.getSeconds();
if (parseInt(dt.getHours()) < 10) {hours = "0" + dt.getHours();} else hours = dt.getHours();

var time = hours + ":" + minutes + ":" + seconds;
    var dayindex = dt.getDay()
    $('.day').text(days[dayindex] + " ﾘ")
    $('.time').text(time)
    
}, 10);

$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
  data = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});
  $(".ip").text(data.ip) 
  $(".loc").text(data.loc)
});

