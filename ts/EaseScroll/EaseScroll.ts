module EaseScroll {
    export class Scroll {

        private static stepTime = 10;

        protected static move(goal:number, timeToArrive:number) {
            let now = Date.now();
            let timeLeft = timeToArrive - now;

            // Out of time
            if (timeLeft <= Scroll.stepTime) {
                window.scroll(0, goal);
                return;
            }

            let distanceToMove = goal - window.pageYOffset;
            let stepsRemaining = (timeToArrive - now) / Scroll.stepTime;
            let distanceToMoveThisStep = distanceToMove / stepsRemaining;
            window.scroll(0, window.pageYOffset + distanceToMoveThisStep);
            window.setTimeout(Scroll.move, Scroll.stepTime, goal, timeToArrive);
        }

        public static to(elementId:string, milliseconds:number):void {

            let goal = document.getElementById(elementId).offsetTop;
            let timeToArrive = Date.now() + milliseconds;

            window.setTimeout(Scroll.move, Scroll.stepTime, goal, timeToArrive);
        }

    }
}
