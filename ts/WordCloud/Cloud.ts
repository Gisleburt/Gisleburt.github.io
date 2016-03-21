/// <reference path="RingPosition.ts" />
/// <reference path="Position.ts" />
/// <reference path="Interpolate.ts" />

module WordCloud {
    export class Cloud {

        protected cloudElement:HTMLElement;

        protected maxFontSize:number;
        protected minFontSize:number;

        protected static positionElement(element:HTMLElement, position:Position):void {
            element.style.top = (position.y + (element.offsetHeight / 2)) + 'px';
            element.style.left = (position.x - (element.offsetWidth / 2)) + 'px';
        }

        /**
         * Tests if one rectangle is fully inside another rectangle.
         * This is used to test the cloud puff as still inside the cloud element.
         * @param inner {ClientRect}
         * @param outer {ClientRect}
         * @returns {boolean}
         */
        protected static isRectFullyInsideRect(inner:ClientRect, outer:ClientRect):boolean {
            return inner.left >= outer.left
                && inner.right <= outer.right
                && inner.top >= outer.top
                && inner.bottom <= outer.bottom;
        }

        /**
         * Test if one rect is touching any other rect.
         * This is used to prevent cloud puffs from touching.
         * @param testRect {ClientRect}
         * @param rectList {ClientRect}
         * @returns {boolean}
         */
        protected static doesRectCollideWithRects(testRect:ClientRect, rectList:ClientRect[]):boolean {
            for (let index in rectList) {
                if (rectList.hasOwnProperty(index)) {
                    if (Cloud.doesRectCollideWithRect(testRect, rectList[index])) {
                        return true;
                    }
                }
            }
            return false;
        }

        /**
         * Tests if a single rect collides with another single rect.
         * @param rect1 {ClientRect}
         * @param rect2 {ClientRect}
         * @returns {boolean}
         */
        protected static doesRectCollideWithRect(rect1:ClientRect, rect2:ClientRect):boolean {
            return !(
                rect1.right < rect2.left
                || rect1.left > rect2.right
                || rect1.bottom < rect2.top
                || rect1.top > rect2.bottom
            );
        }

        /**
         * Prepare the style for the cloud element as a whole
         * @param cloudElement
         * @param width
         * @param height
         */
        protected static prepareCloudElement(cloudElement:HTMLElement, width:number, height:number):void {
            cloudElement.style.position = 'relative';
            cloudElement.style.width = width + 'px';
            cloudElement.style.height = height + 'px';
        }

        /**
         * Prepare the style for each cloud puff.
         * @param cloudElement
         * @param interpolate
         * @param minFontSize
         * @param maxFontSize
         */
        protected static prepareCloudPuffs(
            cloudElement:HTMLElement,
            interpolate:Interpolate,
            minFontSize:number,
            maxFontSize:number
        ):void {
            for (let index = 0; index < cloudElement.children.length; index++) {
                // This needs casting
                let child = <HTMLElement>cloudElement.children[index];
                let fontSize = interpolate(
                    cloudElement.children.length,
                    index,
                    minFontSize,
                    maxFontSize
                );
                child.style.fontSize = fontSize + 'rem';
                child.style.display = 'none';
                child.style.position = 'absolute';
                child.style.padding = '3px';
            }
        }

        /**
         * Position each cloud puff
         * @param cloudElement {HTMLElement}
         */
        protected static positionCloudPuffs(cloudElement:HTMLElement):void {
            let positionedRects = [];

            let ring = new RingPosition(
                new Position(cloudElement.offsetWidth / 2, cloudElement.offsetHeight / 2)
            );

            for (let index = 0; index < cloudElement.children.length; index++) {

                let child = <HTMLElement>cloudElement.children[index];

                child.style.display = 'inline-block';

                let childRect = child.getBoundingClientRect();
                let nextPosition = ring.nextPosition();
                let testRect = Cloud.translateRect(childRect, nextPosition);

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
        }

        /**
         * Return a translation of the client rect
         * @param rect {ClientRect}
         * @param position {Position}
         * @returns {ClientRect}
         */
        protected static translateRect(rect:ClientRect, position:Position):ClientRect {
            return {
                bottom: position.y + (rect.height / 2),
                top:    position.y - (rect.height / 2),
                left:   position.x - (rect.width / 2),
                right:  position.x + (rect.width / 2),
                height: rect.height,
                width: rect.width
            };
        }

        /**
         * A simple linear interpolations
         * @param steps {number}
         * @param step {number}
         * @param start {number}
         * @param finish {number}
         * @returns {number}
         */
        protected static defaultInterpolate(steps:number, step:number, start:number, finish:number):number {
            let range = finish - start;
            let stepSize = range / steps;
            let remaining = steps - step;
            return (stepSize * remaining) + start
        };

        /**
         * Works out the highest point in the cloud
         * @param cloudElement
         * @returns {number}
         */
        protected static getHighestPoint(cloudElement:HTMLElement):number {
            let highestPoint = cloudElement.offsetHeight;
            for (let index = 0; index < cloudElement.children.length; index++) {
                let child = <HTMLElement>cloudElement.children[index];
                let top = parseInt(child.style.top);
                if (top < highestPoint) {
                    highestPoint = top;
                }
            }
            return highestPoint;
        }

        /**
         * Works out the lowest point in the cloud
         * @param cloudElement
         * @returns {number}
         */
        protected static getLowestPoint(cloudElement:HTMLElement):number {
            let lowestPoint = 0;
            for (let index = 0; index < cloudElement.children.length; index++) {
                let child = <HTMLElement>cloudElement.children[index];
                let bottom = parseInt(child.style.top) + child.offsetHeight;
                if (bottom > lowestPoint) {
                    lowestPoint = bottom;
                }
            }
            return lowestPoint;
        }

        /**
         * Gets the internal bounding area for the cloud
         * @param cloudElement HTMLElement
         * @returns {ClientRect}
         */
        protected static getBoundingRect(cloudElement:HTMLElement):ClientRect {

            let rect = {
                bottom: 0,
                top:    0,
                left:   0,
                right:  0,
                height: 0,
                width:  0
            };

            for (let index = 0; index < cloudElement.children.length; index++) {
                let child = <HTMLElement>cloudElement.children[index];
                let bottom = child.offsetTop + child.offsetHeight;
                let top = child.offsetTop;
                let left = child.offsetLeft;
                let right = child.offsetLeft + child.offsetWidth;
                if (bottom > rect.bottom) {
                    rect.bottom = bottom;
                }
                if (top < rect.top) {
                    rect.top = top;
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
        }

        protected static shufflePuffsUp(cloudElement:HTMLElement):void {
            let delta = Cloud.getHighestPoint(cloudElement);
            for (let index = 0; index < cloudElement.children.length; index++) {
                let child = <HTMLElement>cloudElement.children[index];
                let currentTop = parseInt(child.style.top);
                child.style.top = (currentTop - delta) + 'px';
            }
        }

        public create():void {
            Cloud.prepareCloudPuffs(this.cloudElement, Cloud.defaultInterpolate, this.minFontSize, this.maxFontSize);
            Cloud.positionCloudPuffs(this.cloudElement);
            Cloud.shufflePuffsUp(this.cloudElement);
            this.cloudElement.style.width = null;
            this.cloudElement.style.height = Cloud.getLowestPoint(this.cloudElement) + "px";
        }

        constructor(elementId:string) {
            this.cloudElement = document.getElementById(elementId);

            if (!this.cloudElement) {
                throw new RangeError('elementId is not the id of a valid element');
            }

            // Defaults
            this.maxFontSize = 2;
            this.minFontSize = 0.5;

            Cloud.prepareCloudElement(this.cloudElement, this.cloudElement.offsetWidth, this.cloudElement.offsetHeight);
        }
    }
}
