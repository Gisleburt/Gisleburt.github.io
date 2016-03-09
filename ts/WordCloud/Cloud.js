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
            this.ring = new WordCloud.RingPosition(new WordCloud.Position(this.areaWidth / 2, this.areaHeight / 2));
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
            for (var index = 0; index < cloudElement.children.length; index++) {
                var child = cloudElement.children[index];
                child.style.display = 'inline-block';
                var nextPosition = this.ring.nextPosition();
                Cloud.positionElement(child, nextPosition);
                while (Cloud.doesRectCollideWithRects(child.getBoundingClientRect(), positionedRects)) {
                    if (!Cloud.isRectFullyInsideRect(child.getBoundingClientRect(), cloudElement.getBoundingClientRect())) {
                        child.style.display = 'none';
                        break;
                    }
                    nextPosition = this.ring.nextPosition();
                    Cloud.positionElement(child, nextPosition);
                }
                positionedRects.push(child.getBoundingClientRect());
            }
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
//# sourceMappingURL=Cloud.js.map