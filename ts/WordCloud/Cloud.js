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
            Cloud.prepareCloudElement(this.cloudElement, this.cloudElement.offsetWidth, this.cloudElement.offsetHeight);
        }
        Cloud.positionElement = function (element, position) {
            element.style.top = (position.y + (element.offsetHeight / 2)) + 'px';
            element.style.left = (position.x - (element.offsetWidth / 2)) + 'px';
        };
        /**
         * Tests if one rectangle is fully inside another rectangle.
         * This is used to test the cloud puff as still inside the cloud element.
         * @param inner {ClientRect}
         * @param outer {ClientRect}
         * @returns {boolean}
         */
        Cloud.isRectFullyInsideRect = function (inner, outer) {
            return inner.left >= outer.left
                && inner.right <= outer.right
                && inner.top >= outer.top
                && inner.bottom <= outer.bottom;
        };
        /**
         * Test if one rect is touching any other rect.
         * This is used to prevent cloud puffs from touching.
         * @param testRect {ClientRect}
         * @param rectList {ClientRect}
         * @returns {boolean}
         */
        Cloud.doesRectCollideWithRects = function (testRect, rectList) {
            for (var index in rectList) {
                if (rectList.hasOwnProperty(index)) {
                    if (Cloud.doesRectCollideWithRect(testRect, rectList[index])) {
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * Tests if a single rect collides with another single rect.
         * @param rect1 {ClientRect}
         * @param rect2 {ClientRect}
         * @returns {boolean}
         */
        Cloud.doesRectCollideWithRect = function (rect1, rect2) {
            return !(rect1.right < rect2.left
                || rect1.left > rect2.right
                || rect1.bottom < rect2.top
                || rect1.top > rect2.bottom);
        };
        /**
         * Prepare the style for the cloud element as a whole
         * @param cloudElement
         * @param width
         * @param height
         */
        Cloud.prepareCloudElement = function (cloudElement, width, height) {
            cloudElement.style.position = 'relative';
            cloudElement.style.width = width + 'px';
            cloudElement.style.height = height + 'px';
        };
        /**
         * Prepare the style for each cloud puff.
         * @param cloudElement
         * @param interpolate
         * @param minFontSize
         * @param maxFontSize
         */
        Cloud.prepareCloudPuffs = function (cloudElement, interpolate, minFontSize, maxFontSize) {
            for (var index = 0; index < cloudElement.children.length; index++) {
                // This needs casting
                var child = cloudElement.children[index];
                var fontSize = interpolate(cloudElement.children.length, index, minFontSize, maxFontSize);
                child.style.fontSize = fontSize + 'rem';
                child.style.display = 'none';
                child.style.position = 'absolute';
                child.style.padding = '3px';
            }
        };
        /**
         * Position each cloud puff
         * @param cloudElement {HTMLElement}
         * @param width {number}
         * @param height {number}
         */
        Cloud.positionCloudPuffs = function (cloudElement, width, height) {
            var positionedRects = [];
            for (var index = 0; index < cloudElement.children.length; index++) {
                var ring = new WordCloud.RingPosition(new WordCloud.Position(width / 2, height / 2));
                var child = cloudElement.children[index];
                child.style.display = 'inline-block';
                var childRect = child.getBoundingClientRect();
                var nextPosition = ring.nextPosition();
                var testRect = Cloud.translateRect(childRect, nextPosition);
                while (Cloud.doesRectCollideWithRects(testRect, positionedRects)) {
                    nextPosition = ring.nextPosition();
                    testRect = Cloud.translateRect(childRect, nextPosition);
                }
                if (!Cloud.isRectFullyInsideRect(testRect, cloudElement.getBoundingClientRect())) {
                    child.style.display = 'none';
                    break;
                }
                Cloud.positionElement(child, nextPosition);
                positionedRects.push(testRect);
            }
        };
        /**
         * Return a translation of the client rect
         * @param rect {ClientRect}
         * @param position {Position}
         * @returns {ClientRect}
         */
        Cloud.translateRect = function (rect, position) {
            return {
                bottom: position.y + (rect.height / 2),
                top: position.y - (rect.height / 2),
                left: position.x - (rect.width / 2),
                right: position.x + (rect.width / 2),
                height: rect.height,
                width: rect.width
            };
        };
        /**
         * A simple linear interpolations
         * @param steps {number}
         * @param step {number}
         * @param start {number}
         * @param finish {number}
         * @returns {number}
         */
        Cloud.defaultInterpolate = function (steps, step, start, finish) {
            var range = finish - start;
            var stepSize = range / steps;
            var remaining = steps - step;
            return (stepSize * remaining) + start;
        };
        ;
        /**
         * Works out the highest point in the cloud
         * @param cloudElement
         * @returns {number}
         */
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
        /**
         * Works out the lowest point in the cloud
         * @param cloudElement
         * @returns {number}
         */
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
        /**
         * Gets the internal bounding area for the cloud
         * @param cloudElement HTMLElement
         * @returns {ClientRect}
         */
        Cloud.getBoundingRect = function (cloudElement) {
            var rect = {
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                height: 0,
                width: 0
            };
            for (var index = 0; index < cloudElement.children.length; index++) {
                var child = cloudElement.children[index];
                var bottom = child.offsetTop + child.offsetHeight;
                var top_2 = child.offsetTop;
                var left = child.offsetLeft;
                var right = child.offsetLeft + child.offsetWidth;
                if (bottom > rect.bottom) {
                    rect.bottom = bottom;
                }
                if (top_2 < rect.top) {
                    rect.top = top_2;
                }
                if (left > rect.left) {
                    rect.left = left;
                }
                if (right < rect.right) {
                    rect.right = right;
                }
            }
            rect.width = rect.right - rect.left;
            rect.height = rect.bottom - rect.top;
            return rect;
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
            Cloud.prepareCloudPuffs(this.cloudElement, Cloud.defaultInterpolate, this.minFontSize, this.maxFontSize);
            Cloud.positionCloudPuffs(this.cloudElement, this.cloudElement.offsetWidth, this.cloudElement.offsetHeight);
            Cloud.shufflePuffsUp(this.cloudElement);
            this.cloudElement.style.width = null;
            this.cloudElement.style.height = Cloud.getLowestPoint(this.cloudElement) + "px";
        };
        return Cloud;
    }());
    WordCloud.Cloud = Cloud;
})(WordCloud || (WordCloud = {}));
//# sourceMappingURL=Cloud.js.map