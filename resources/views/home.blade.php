@extends('layouts.landing')

@section('title', 'Home')

@section('content')

<div class="container-fluid">
    
    <div class="hero is-fullheight header-image">
        <div class="container-fluid">
            
            <div class="hero-head" id="hero-head">
                <nav class="navbar" id="navbar-top">
                    {{-- <div class="container"> --}}
                        
                        <div class="navbar-brand">
                            <a href="" class="navbar-item">
                                <h1 class="title logo is-2">Forest.ai</h1>
                            </a>
                            <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div> 
                        
                        <div class="navbar-menu" id="navMenu">
                            <div class="navbar-start">
                                
                                <a href="#" class="navbar-item">
                                    <span class="icon is-bold">
                                        <i class="fab fa-instagram" id="insta"></i>
                                    </span>
                                </a>
                                <a href="#" class="navbar-item">
                                    <span class="icon has-border has-text-white">
                                        <i class="fab fa-github"></i>
                                    </span>
                                </a>
                                <a href="#" class="navbar-item">
                                    <span class="icon has-text-info">
                                        <i class="fab fa-twitter"></i>
                                    </span>
                                </a>
                            </div>
                            <div class="navbar-end">
                                <a href="#the-game" class="navbar-item has-text-weight-semibold">The Game</a>
                                <hr class="navbar-divider">
                                <a href="#forest-ai" class="navbar-item has-text-weight-semibold">Forest AI</a>
                                <hr class="navbar-divider">
                                <a href="#about-creator" class="navbar-item has-text-weight-semibold">The Creator</a>
                                <hr class="navbar-divider">
                                <a href="#" class="navbar-item has-text-weight-semibold">Contact</a>
                                <a href="#" class="navbar-item has-text-info">Log in</a>
                                <div class="navbar-item">
                                    <div class="field">
                                        <p class="control">
                                            <a class="button is-info is-outlined">Sign up</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {{-- </div> --}}
                    </nav>
                </div>
            </div>
            
            <div class="hero-body">
                
            <div class="block">
                <h1 class="title is-3">Real choices, have real consequences.</h1>
                <h2 class="subtitle is-4 has-text-grey-dark">What choices will you make?</h2>
                <a href="/game" class="button is-primary is-outlined is-large">Play the game now!</a>
            </div>
        </div>
        <div class="hero-foot"></div>
    </div>

    {{-- FIXED NAVBAR --}}
    <nav class="navbar is-fixed-top is-black" id="navbar-sticky">
        <div class="container">
            
            <div class="navbar-brand">
                <a href="" class="navbar-item">
                    <h1 class="title logo is-3">Forest.ai</h1>
                </a>
                <a role="button" class="navbar-burger" data-target="navMenu-r" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div> 

            <div class="navbar-menu" id="navMenu-r">
                <div class="navbar-start">
                    <a href="#" class="navbar-item">
                        <span class="icon is-bold">
                            <i class="fab fa-instagram" id="insta"></i>
                        </span>
                    </a>
                    <a href="#" class="navbar-item">
                        <span class="icon has-border has-text-white">
                            <i class="fab fa-github"></i>
                        </span>
                    </a>
                    <a href="#" class="navbar-item">
                        <span class="icon has-text-info">
                            <i class="fab fa-twitter"></i>
                        </span>
                    </a>
                </div>
                <div class="navbar-end">
                    <a href="#the-game" class="navbar-item has-text-weight-semibold">The Game</a>
                    <a href="#forest-ai" class="navbar-item has-text-weight-semibold">Forest AI</a>
                    <a href="#about-creator" class="navbar-item has-text-weight-semibold">The Creator</a>
                    <a href="#" class="navbar-item has-text-weight-semibold">Contact</a>
                </div>
            </div>
        </div>
    </nav>
    
    <section class="section is-medium section-dark-grey">
            <div class="columns is-centered">
                <div class="column is-half">
                        <h1 class="title has-text-centered is-4" id="the-game">Even more fun to play than your mom</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor optio consectetur numquam nesciunt repudiandae! Aliquid aspernatur voluptas tempore ipsam, molestiae facere a velit reprehenderit doloremque dolore consectetur. Eos, veritatis sunt!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium nisi aut voluptate excepturi consequuntur velit dicta voluptas! Necessitatibus reiciendis a exercitationem expedita ipsa omnis temporibus dolor molestiae tenetur magnam.
                        </p>
                </div>
            </div>
    </section>

    <section class="section is-medium" id="forest-ai">
        <div class="columns is-centered">
            <div class="column is-half">
                <div class="card terminal has-text-success">
                    <div class="card-content is-clearfix">
                        <h1 class="title is-4 has-text-success">Talk to Forest AI</h1>
                        <p>
                                
                        </p>
                        <p class="" id="forest-reply">Forest AI is a real smart cookie that knows a lot of things. Talk at your own risk.</p>
                        {{ csrf_field() }}    
                        <div class="field has-addons">
                            <div class="control">
                                
                            </div>
                            <div class="control has-icons-left is-expanded">
                                <input class="input is-medium is-static" type="text" name="message" id="input-message" placeholder="Say something and press enter">
                                <span class="icon is-small is-left">
                                    <p>>></p>
                                </span>
                            </div>
                        </div>
                        <button class="button is-medium is-success is-outlined is-pulled-right" id="message-forest">&crarr;</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section is-small" id="forest-ai">
        <div class="columns is-centered">
            <div class="column is-half">
                <h1 class="title has-text-centered is-4">Who (what) is Forest?</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium unde dolorem nulla aliquid accusantium. Iste consectetur, eligendi tempora ullam necessitatibus quidem repellat, commodi quam ex saepe tempore maiores optio dolorem?
                </p>
                <br>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorum! Quo reiciendis error velit? Earum, accusamus? Doloremque tempora odio laudantium pariatur praesentium libero accusamus voluptate, eligendi numquam sint odit omnis.
                </p>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="columns is-centered">
            <div class="column is-half">
                <h1 class="title is-4 has-text-centered" id="about-creator">About the Creator</h1>
                <div class="card">
                    
                    <div class="card-image">
                        <figure class="image is-4by3">
                            {{-- <img src="" alt=""> --}}
                            <img class="image" src="/css/img/daniel-liang-2018-1-10-26.jpg" height="400px" width="200px">
                        </figure>
                    </div>
                
                
                    <div class="card-content">
                        <div class="content has-text-black">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ad tenetur quaerat ipsa, quidem sapiente quis laborum soluta? Incidunt numquam, non qui pariatur a sequi natus animi error dignissimos debitis!    
                        </div>
                    </div>

                    <footer class="card-footer">
                        <a href="" class="card-footer-item"><button class="button"></button></a>
                        <a href="" class="card-footer-item"><button class="button"></button></a>
                        <a href="" class="card-footer-item"><button class="button"></button></a>
                    </footer>
                        
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="columns is-centered">
            <div class="column is-half">
                    <h1 class="title has-text-centered is-4">Contact</h1>
            </div>
        </div>
    </section>
    
    <div class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <strong>Forest.ai</strong> by <a href="">Tony Michael Head</a>
                </p>
            </div>
        </div>
    </div>
        
</div> {{-- END OF CONTAINER --}}

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>

function submitMessage() {

    $.post("/message-forest",
    {
        "_token": "{{ csrf_token() }}",
        message: $('#input-message').val(),
        city: "Duckburg"
    },
    function(data, status){
        data = JSON.parse(data);
        console.log(data);

        $('#forest-reply').empty();
        $('#input-message').val('');
        $('#forest-reply').append( data.message.message );
    });
}

$(document).ready(function() {
    
    // Add X-CSRF to ajax headers
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#message-forest').on('click', function () {
        submitMessage();
    });

    $('#input-message').keypress(function( e ) {
        if(e.which ==13) {
            submitMessage();
        }
    })

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

            });
        });
    }

    // Animate slide down navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $( "#navbar-top" ).addClass( "is-invisible" );
            $('#navbar-sticky').fadeIn();
        } else if ($(this).scrollTop() < 30) {
            $('#navbar-sticky').fadeOut(() => {
                $('#navbar-top').removeClass('is-invisible');
            });
        }
    });

})
</script>

@endsection