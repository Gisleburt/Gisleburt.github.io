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
//# sourceMappingURL=Cloud.js.map