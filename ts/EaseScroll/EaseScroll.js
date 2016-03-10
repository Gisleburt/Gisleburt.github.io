var EaseScroll;
(function (EaseScroll) {
    var Scroll = (function () {
        function Scroll() {
        }
        Scroll.move = function (goal, timeToArrive) {
            var now = Date.now();
            var timeLeft = timeToArrive - now;
            // Out of time
            if (timeLeft <= Scroll.stepTime) {
                window.scroll(0, goal);
                return;
            }
            var distanceToMove = goal - window.pageYOffset;
            var stepsRemaining = (timeToArrive - now) / Scroll.stepTime;
            var distanceToMoveThisStep = distanceToMove / stepsRemaining;
            window.scroll(0, window.pageYOffset + distanceToMoveThisStep);
            window.setTimeout(Scroll.move, Scroll.stepTime, goal, timeToArrive);
        };
        Scroll.to = function (elementId, milliseconds) {
            var goal = document.getElementById(elementId).offsetTop;
            var timeToArrive = Date.now() + milliseconds;
            window.setTimeout(Scroll.move, Scroll.stepTime, goal, timeToArrive);
        };
        Scroll.stepTime = 10;
        return Scroll;
    }());
    EaseScroll.Scroll = Scroll;
})(EaseScroll || (EaseScroll = {}));
//# sourceMappingURL=EaseScroll.js.map