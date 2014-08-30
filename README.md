## Using Hammer JS

A quick & dirty test for some panning & swiping gestures using the <a href="http://hammerjs.github.io/">hammer.js</a> library by <a href="http://www.eight.nl/">eight media.</a>.  This is just an exaample of usage.  Check out the repo for full documentation.

### Basic Usage

Include <a href="http://hammerjs.github.io/">hammer.js</a> in your project

        <script src="js/hammer.js"></script>

Create a dom element.

        <span class="swiper" id="hammer-swipe">swipe me!</span>

Style it

        .swiper {
          display: block;
          height: 100px;
          width: 100px;
          margin: 25px auto;
          background-color: #DCDCDC;
        }

Identify the element in your javascript

        // Don't try $('#hammer-swipe')  (jQuery) here.
        var hammerElement = document.getElementById('hammer-swipe');

Create a new hammer instance with your element.

        var hammerListener = new Hammer(hammerElement);


Set some listeners one of the following ways.  Now is a good time to check out their docs for all the options.

        hammerListener.on('swipe', onPan);

        function onPan(event) {

            // Inspect the event object, has many properties.
            doSomethingDopeWith(event);

        }


Or, similarly

        hammerListener.on('swipe', function(event) {

              // Inspect the event object, has many properties.
              doSomethingDopeWith(event);

          });


Hope that was helpful.  Hammer.js has many more capabilities, so use it to its full potential.
