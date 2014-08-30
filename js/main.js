/**
 * Testing the Hammer Js swipe/gesture library.
 * Some very basic samples below.
 */

// Run function on load, since this is basically just adding dom listeners.
(function() {

  // Define all the elements I want to use gestures with.
  var panElement = document.getElementById('hammer-pan');
  var panStickElement = document.getElementById('hammer-panStick');
  var swipeElement = document.getElementById('hammer-swipe');

  // Create instances of the Hammer object for each element.
  var panHammer = new Hammer(panElement);
  var panStickHammer = new Hammer(panStickElement);
  var swipeHammer = new Hammer(swipeElement);

  // Set listeners on each instance of the Hammer object.
  panHammer.on('panstart panmove', onPan);
  panHammer.on('hammer.input', panEnd);

  panStickHammer.on('panstart panmove', onPanStick);
  panStickHammer.on('tap', panStickEnd);

  swipeHammer.on('swipe swipeLeft swipeRight', onSwipe)

  // Functions
  function panEnd(ev) {
      if(ev.isFinal) {
          resetElement();
          panElement.innerHTML = 'panned';
      }
  }

  function resetElement() {
      onPan();
  }

  function onPan(ev) {
      var x = setAndLimitX(ev, 150);
      moveElement(panElement, x);
  }

  function onPanStick(ev) {
      var limit = 100;
      var x = setAndLimitX(ev, limit);
      moveElement(panStickElement, x);
      if (x > 0) {
          document.getElementById('label-left').style.opacity = x / limit;
      } else {
          document.getElementById('label-right').style.opacity = x / -limit;
      }
  }

  function panStickEnd(ev) {
      if (ev.isFinal) {
          moveElement(panStickElement, 0);
      }
  }

  function setAndLimitX(ev, limit) {
      var x = ev ? ev.deltaX : 0;
      x = x < -limit ? -limit : x;
      x = x > limit ? limit : x;
      return x;
  }

  function moveElement(element, x) {
      var cssStuff =
          'translate3d(' + x + 'px, 0px, 0) scale(1,1) rotate3d(0, 0, 0, 0deg)';
      element.style.webkitTransform = cssStuff;
      element.style.mozTransform = cssStuff;
      element.style.transform = cssStuff;
  }

  function onSwipe(ev) {
      var x = ev.deltaX > 0 ? 2000 : -2000;
      moveElement(swipeElement, x);
      swipeElement.style.opacity = '0';
      setTimeout(function() {
          resetSwipe();
        }, 1000);
  }

  function resetSwipe() {
      moveElement(swipeElement, 0);
      setTimeout(function() {
          swipeElement.style.opacity = '1';
        }, 400);
  }

})();
