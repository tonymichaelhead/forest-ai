<html>
    <head>
        <title>Hacker Room</title>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <link rel="stylesheet" href="{{asset('css/custom.css')}}">
        <link href="https://fonts.googleapis.com/css?family=Audiowide|Megrim|Share+Tech|Share+Tech+Mono" rel="stylesheet">
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </head>
    <body>
        <div id="background">
            <div id="room-inner" style="display:none"></div>
            <div id="window" style="display:none;"></div>
        </div>
        <div id="audio-container">
            <audio id="background_cyberpunk" src="{{ asset('css/audio/cyberpunk-ambient.mp3') }}" preload="auto" oncanplaythrough="" loop></audio>
            <audio id="cyber-fight" src="{{ asset('css/audio/cyber-fight.mp3') }}" preload="auto" oncanplaythrough="" loop></audio>
            <audio id="sound-modem" src="{{ asset('css/audio/modem.mp3') }}" preload="auto" oncanplaythrough="" loop></audio>
            <audio id="audio-phone" src="{{ asset('css/audio/electric-sweep.mp3') }}" preload="auto" oncanplaythrough="" loop></audio>
            <audio id="audio-city" src="{{ asset('css/audio/city.mp3') }}" preload="auto" oncanplaythrough="" loop></audio>
            <audio id="audio-bar" src="{{ asset('css/audio/bar.wav') }}" preload="auto" oncanplaythrough="" loop></audio>
        </div>
        
        @section('topbar')
        <div class="menu-bar" style="display:none;">
            <div class="container-fluid">
                <div class="row">
                    <div class="col nopadding">
                        <span class="float-right menu-item"> $<span class="m-r-2" id="stats-money"></span></span> 
                        <span class="float-right menu-item">items: <span class="m-r-2" id="stats-items"></span></span>
                        <span class="float-right menu-item">health: <progress id="health" value="0" max="100"></progress><span class="m-r-2" id="stats-health" style="display:none;"></span></span> 
                        {{-- <span class="float-right menu-item">name: <span id="player-name"></span></span> --}}
                    </div>
                </div>
            </div>
        </div>
        @show
        <div class="container">
            
            @yield('content')
            
        </div>

       @section('bottombar')
        <div class="bottom-bar">
            <div class="container-fluid">
                <div class="row" id="button-menu"></div>
            </div>
        </div>
        @show

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>