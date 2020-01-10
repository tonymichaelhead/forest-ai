<html>
    <head>
        <title>App Name - @yield('title')</title>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Audiowide|Megrim|Share+Tech|Share+Tech+Mono" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/custom.css')}}">

    </head>
    <body>
       <div class="vertical-center">

           <div class="container-fluid">
               <div class="row">
                   <div class="col">
                       <div class="center-dialogue">
                           
                           <div id="dialogue"></div>
   
                           <form id="form-start" action="/room" method="post">
                               {{ csrf_field() }}
                           </form>
                           
                        </div>
                        <form id="form-name" style="display:none;">
                            <button id="input-name" type="text" class="text-center"  name="name" placeholder="Choose a nickname and hit enter" autocomplete="off"></button>
                        </form>
   
                       
                   </div>
               </div>
           
           </div>
       </div>

   
</body>
</html>