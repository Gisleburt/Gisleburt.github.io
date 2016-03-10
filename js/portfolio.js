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
var WordCloud;
(function (WordCloud) {
    var Position = (function () {
        function Position(x, y) {
            if (typeof x == 'undefined') {
                x = 0;
                y = 0;
            }
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
        function RingPosition(position) {
            this.initialPosition = position;
            this.step = 0;
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
        RingPosition.prototype.nextPosition = function () {
            return this.positionOnRing(this.step++);
        };
        return RingPosition;
    }());
    WordCloud.RingPosition = RingPosition;
})(WordCloud || (WordCloud = {}));
/// <reference path="RingPosition.ts" />
/// <reference path="Position.ts" />
/// <reference path="Interpolate.ts" />
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
            // this.ring = new RingPosition(
            //     new Position(this.areaWidth / 2, this.areaHeight / 2)
            // );
        }
        // protected ring:RingPosition;
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
        Cloud.isRectFullyInsideRect = function (inner, outer) {
            return inner.left >= outer.left
                && inner.right <= outer.right
                && inner.top >= outer.top
                && inner.bottom <= outer.bottom;
        };
        Cloud.doesRectCollideWithRects = function (rect1, rects) {
            for (var index in rects) {
                if (rects.hasOwnProperty(index)) {
                    if (Cloud.doesRectCollideWithRect(rect1, rects[index])) {
                        return true;
                    }
                }
            }
            return false;
        };
        Cloud.doesRectCollideWithRect = function (rect1, rect2) {
            return !(rect1.right < rect2.left
                || rect1.left > rect2.right
                || rect1.bottom < rect2.top
                || rect1.top > rect2.bottom);
        };
        Cloud.prototype.prepareCloudPuffs = function (cloudElement, lerp) {
            for (var index = 0; index < cloudElement.children.length; index++) {
                // This needs casting
                var child = cloudElement.children[index];
                var fontSize = lerp(cloudElement.children.length, index, this.minFontSize, this.maxFontSize);
                Cloud.styleCloudPuff(child, fontSize);
            }
        };
        Cloud.prototype.positionCloudPuffs = function (cloudElement) {
            var positionedRects = [];
            everything: for (var index = 0; index < cloudElement.children.length; index++) {
                var ring = new WordCloud.RingPosition(new WordCloud.Position(this.areaWidth / 2, this.areaHeight / 2));
                var child = cloudElement.children[index];
                child.style.display = 'inline-block';
                var childRect = child.getBoundingClientRect();
                var nextPosition = ring.nextPosition();
                var testRect = Cloud.translateRect(childRect, nextPosition);
                while (Cloud.doesRectCollideWithRects(testRect, positionedRects)) {
                    if (!Cloud.isRectFullyInsideRect(testRect, cloudElement.getBoundingClientRect())) {
                        child.style.display = 'none';
                        break everything;
                    }
                    nextPosition = ring.nextPosition();
                    testRect = Cloud.translateRect(childRect, nextPosition);
                }
                Cloud.positionElement(child, nextPosition);
                positionedRects.push(testRect);
            }
        };
        /**
         * |
         * |      *
         * |  *
         * |________
         *
         * @param rect
         * @param position
         * @returns {{bottom: number, top: number, left: number, right: number, height: null, width: null}}
         */
        Cloud.translateRect = function (rect, position) {
            var currentPosition = new WordCloud.Position(rect.left + (rect.width / 2), rect.top + (rect.height / 2));
            var translation = new WordCloud.Position(currentPosition.x - position.x, currentPosition.y - position.y);
            return {
                bottom: rect.bottom + translation.y,
                top: rect.top + translation.y,
                left: rect.left + translation.x,
                right: rect.right + translation.x,
                height: null,
                width: null
            };
        };
        Cloud.defaultLerp = function (steps, step, start, finish) {
            var range = finish - start;
            var stepSize = range / steps;
            var remaining = steps - step;
            return (stepSize * remaining) + start;
        };
        ;
        Cloud.getHighestPoint = function (cloudElement) {
            var highestPoint = cloudElement.offsetHeight;
            for (var index = 0; index < cloudElement.children.length; index++) {
                var child = cloudElement.children[index];
                var top_1 = parseInt(child.style.top);
                if (top_1 < highestPoint) {
                    highestPoint = top_1;
                }
            }
            return highestPoint;
        };
        Cloud.getLowestPoint = function (cloudElement) {
            var lowestPoint = 0;
            for (var index = 0; index < cloudElement.children.length; index++) {
                var child = cloudElement.children[index];
                var bottom = parseInt(child.style.top) + child.offsetHeight;
                if (bottom > lowestPoint) {
                    lowestPoint = bottom;
                }
            }
            return lowestPoint;
        };
        Cloud.shufflePuffsUp = function (cloudElement) {
            var delta = Cloud.getHighestPoint(cloudElement);
            for (var index = 0; index < cloudElement.children.length; index++) {
                var child = cloudElement.children[index];
                var currentTop = parseInt(child.style.top);
                child.style.top = (currentTop - delta) + 'px';
            }
        };
        Cloud.prototype.create = function () {
            this.prepareCloudPuffs(this.cloudElement, Cloud.defaultLerp);
            this.positionCloudPuffs(this.cloudElement);
            Cloud.shufflePuffsUp(this.cloudElement);
            this.cloudElement.style.width = null;
            this.cloudElement.style.height = Cloud.getLowestPoint(this.cloudElement) + "px";
        };
        return Cloud;
    }());
    WordCloud.Cloud = Cloud;
})(WordCloud || (WordCloud = {}));
