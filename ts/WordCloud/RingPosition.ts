/// <reference path="Position.ts" />

module WordCloud {

    export class RingPosition {

        protected initialPosition:Position;
        protected step:number;

        /**
         * How many pixels wide is the current ring
         * @param {int} ring
         * @returns {int}
         */
        protected static diameterOfRing(ring:number):number {
            if (ring < 0) {
                return 0;
            }
            return (ring * 2) + 1;
        }

        /**
         * Which ring does the current step reside in
         * @param {int} step
         * @returns {int}
         */
        protected static whichRing(step:number):number {
            let squareRoot = Math.floor(Math.sqrt(step))
            return Math.ceil(squareRoot / 2);
        }

        /**
         * Returns all steps needed to have gone through before arriving on the
         * current ring
         * @param {int} ring
         * @returns {int}
         */
        protected static stepsInRingInclusive(ring:number):number {
            let width = RingPosition.diameterOfRing(ring);
            return width * width;
        }

        /**
         * This works out what step along the ring we are, but does not tell you
         * if that step is on the ring in the first place.
         * @param {int} step
         * @param {int} ring
         * @returns {int}
         */
        protected static stepOnRing(step:number, ring:number):number {
            return step - RingPosition.stepsInRingInclusive(ring - 1);
        }

        /**
         * For the given step, work out what the position on the ring is
         * @param step
         * @returns {WordCloud.Position}
         */
        protected positionOnRing(step:number):Position {
            var ring = RingPosition.whichRing(step);
            var diameter = RingPosition.diameterOfRing(ring);
            var currentStepOnRing = RingPosition.stepOnRing(step, ring);

            var position = new Position(this.initialPosition);
            position.x -= ring;
            position.y -= ring;

            // From top left corner, go around in a circle
            // 0 1 2 3 4    0 1 2 3 0
            // 6 0 1 2 5    3 0 1 0 1
            // 5 7 0 3 7    2 1 0 1 2
            // 4 6 5 4 8    1 0 1 0 3
            // 3 2 1 0 9    0 3 2 1 0

            // diameter = 5

            var smallDiameter = diameter - 1;
            var normaliseStep = smallDiameter == 0 ? 0 : currentStepOnRing % smallDiameter;

            // Left side
            if (currentStepOnRing >= 3 * smallDiameter) {
                position.y += smallDiameter - normaliseStep;
            }
            // Bottom side
            else if (currentStepOnRing >= 2 * smallDiameter) {
                position.x += smallDiameter - normaliseStep;
                position.y += smallDiameter;
            }
            // Right side
            else if (currentStepOnRing >= smallDiameter) {
                position.x += smallDiameter;
                position.y += normaliseStep;
            }
            // Top side
            else {
                position.x += normaliseStep;
            }

            return position;
        }

        construct(position:Position) {
            this.initialPosition = position;
            this.step = 0;
        }

        public nextPosition():Position {
            return this.positionOnRing(this.step++);
        }
    }
}
