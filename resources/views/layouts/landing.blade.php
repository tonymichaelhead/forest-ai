<html>
    <head>
        <title>Hacker Room</title>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">  
        <link rel="stylesheet" href="{{asset('css/landing.css')}}">
        <link rel="stylesheet" href="{{asset('css/landing-custom.css')}}">
        <link href="https://fonts.googleapis.com/css?family=Audiowide|Megrim|Share+Tech|Share+Tech+Mono" rel="stylesheet">
        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </head>
    <body>
        
    {{-- @section('topbar') --}}
    
    {{-- @show --}}
        
    @yield('content')
        
    {{-- @section('footer') --}}

    {{-- @show --}}

    <script src="{{ asset('js/app.js') }}"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    </body>
</html>