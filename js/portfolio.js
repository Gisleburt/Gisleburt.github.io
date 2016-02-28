var WordCloud;
(function (WordCloud) {
    var Position = (function () {
        function Position(x, y) {
            if (x instanceof Position) {
                y = x.y;
                x = x.x;
            }
            this.x = x;
            this.y = y;
        }
        return Position;
    }());
    WordCloud.Position = Position;
})(WordCloud || (WordCloud = {}));
/// <reference path="Position.ts" />
var WordCloud;
(function (WordCloud) {
    var RingPosition = (function () {
        function RingPosition() {
        }
        /**
         * How many pixels wide is the current ring
         * @param {int} ring
         * @returns {int}
         */
        RingPosition.diameterOfRing = function (ring) {
            if (ring < 0) {
                return 0;
            }
            return (ring * 2) + 1;
        };
        /**
         * Which ring does the current step reside in
         * @param {int} step
         * @returns {int}
         */
        RingPosition.whichRing = function (step) {
            var squareRoot = Math.floor(Math.sqrt(step));
            return Math.ceil(squareRoot / 2);
        };
        /**
         * Returns all steps needed to have gone through before arriving on the
         * current ring
         * @param {int} ring
         * @returns {int}
         */
        RingPosition.stepsInRingInclusive = function (ring) {
            var width = RingPosition.diameterOfRing(ring);
            return width * width;
        };
        /**
         * This works out what step along the ring we are, but does not tell you
         * if that step is on the ring in the first place.
         * @param {int} step
         * @param {int} ring
         * @returns {int}
         */
        RingPosition.stepOnRing = function (step, ring) {
            return step - RingPosition.stepsInRingInclusive(ring - 1);
        };
        /**
         * For the given step, work out what the position on the ring is
         * @param step
         * @returns {WordCloud.Position}
         */
        RingPosition.prototype.positionOnRing = function (step) {
            var ring = RingPosition.whichRing(step);
            var diameter = RingPosition.diameterOfRing(ring);
            var currentStepOnRing = RingPosition.stepOnRing(step, ring);
            var position = new WordCloud.Position(this.initialPosition);
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
            else if (currentStepOnRing >= 2 * smallDiameter) {
                position.x += smallDiameter - normaliseStep;
                position.y += smallDiameter;
            }
            else if (currentStepOnRing >= smallDiameter) {
                position.x += smallDiameter;
                position.y += normaliseStep;
            }
            else {
                position.x += normaliseStep;
            }
            return position;
        };
        RingPosition.prototype.construct = function (position) {
            this.initialPosition = position;
            this.step = 0;
        };
        RingPosition.prototype.nextPosition = function () {
            return this.positionOnRing(this.step++);
        };
        return RingPosition;
    }());
    WordCloud.RingPosition = RingPosition;
})(WordCloud || (WordCloud = {}));
/// <reference path="RingPosition.ts" />
/// <reference path="Position.ts" />
/// <reference path="Lerp.ts" />
var WordCloud;
(function (WordCloud) {
    var Cloud = (function () {
        function Cloud(elementId) {
            this.cloudElement = document.getElementById(elementId);
            if (!this.cloudElement) {
                throw new RangeError('elementId is not the id of a valid element');
            }
            // Defaults
            this.maxFontSize = 2;
            this.minFontSize = 0.5;
            this.areaHeight = this.cloudElement.offsetHeight;
            this.areaWidth = this.cloudElement.offsetWidth;
            Cloud.prepareCloudElement(this.cloudElement, this.areaHeight, this.areaWidth);
            var initialPosition = new WordCloud.Position(this.areaHeight / 2, this.areaHeight / 2);
            //this.ring = new RingPosition(initialPosition);
        }
        Cloud.prepareCloudElement = function (cloudElement, height, width) {
            cloudElement.style.position = 'relative';
            cloudElement.style.height = height + 'px';
            cloudElement.style.width = width + 'px';
        };
        Cloud.positionElement = function (element, position) {
            element.style.top = (position.y + (element.offsetHeight / 2)) + 'px';
            element.style.left = (position.x - (element.offsetWidth / 2)) + 'px';
        };
        Cloud.styleCloudPuff = function (element, size) {
            element.style.fontSize = size + 'rem';
            element.style.display = 'none';
            element.style.position = 'absolute';
            element.style.padding = '3px';
        };
        Cloud.isRectInOtherRect = function (inner, outer) {
            return inner.left >= outer.left
                && inner.right <= outer.right
                && inner.top >= outer.top
                && inner.bottom <= outer.bottom;
        };
        Cloud.areRectsColliding = function (rect1, rect2) {
            return !(rect1.right < rect2.left
                || rect1.left > rect2.right
                || rect1.bottom < rect2.top
                || rect1.top > rect2.bottom);
        };
        Cloud.prototype.prepareCloudPuffs = function (cloudElement, lerp) {
            for (var index in cloudElement.children) {
                if (cloudElement.children.hasOwnProperty(index)) {
                    // This needs casting
                    var child = cloudElement.children[index];
                    var fontSize = lerp(cloudElement.children.length, parseInt(index), this.maxFontSize, this.minFontSize);
                    Cloud.styleCloudPuff(child, fontSize);
                }
            }
        };
        Cloud.positionCloudPuffs = function (cloudElement) {
            var positionedElements = [];
            var keepGoing = true;
            for (var index in cloudElement.children) {
                if (cloudElement.children.hasOwnProperty(index)) {
                    var child = cloudElement.children[index];
                    if (!Cloud.isRectInOtherRect(child.getBoundingClientRect(), cloudElement.getBoundingClientRect())) {
                        break;
                    }
                }
            }
        };
        Cloud.defaultLerp = function (steps, step, start, finish) {
            var range = finish - start;
            var stepSize = range / steps;
            var remaining = steps - step;
            return (stepSize * remaining) + start;
        };
        ;
        Cloud.prototype.create = function () {
            this.prepareCloudPuffs(this.cloudElement, Cloud.defaultLerp);
            Cloud.positionCloudPuffs(this.cloudElement);
        };
        return Cloud;
    }());
    WordCloud.Cloud = Cloud;
})(WordCloud || (WordCloud = {}));