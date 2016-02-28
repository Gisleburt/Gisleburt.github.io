/// <reference path="RingPosition.ts" />
/// <reference path="Position.ts" />
/// <reference path="Lerp.ts" />

module WordCloud {
    export class Cloud {

        protected cloudElement:HTMLElement;

        protected maxFontSize:number;
        protected minFontSize:number;

        protected areaHeight:number;
        protected areaWidth:number;

        protected ring:RingPosition;

        protected static prepareCloudElement(cloudElement:HTMLElement, height:number, width:number):void {
            cloudElement.style.position = 'relative';
            cloudElement.style.height = height + 'px';
            cloudElement.style.width = width + 'px';
        }

        protected static positionElement(element:HTMLElement, position:Position):void {
            element.style.top = (position.y + (element.offsetHeight / 2)) + 'px';
            element.style.left = (position.x - (element.offsetWidth / 2)) + 'px';
        }

        protected static styleCloudPuff(element:HTMLElement, size:number):void {
            element.style.fontSize = size + 'rem';
            element.style.display = 'none';
            element.style.position = 'absolute';
            element.style.padding = '3px';
        }

        protected static isRectFullyInsideRect(inner:ClientRect, outer:ClientRect):boolean {
            return inner.left >= outer.left
                && inner.right <= outer.right
                && inner.top >= outer.top
                && inner.bottom <= outer.bottom;
        }

        protected static doesRectCollideWithRects(rect1:ClientRect, rects:ClientRect[]):boolean {
            for(let index in rects) {
                if(rects.hasOwnProperty(index)) {
                    if(Cloud.doesRectCollideWithRect(rect1, rects[index])) {
                        return true;
                    }
                }
            }
            return false;
        }

        protected static doesRectCollideWithRect(rect1:ClientRect, rect2:ClientRect):boolean {
            return !(
                rect1.right < rect2.left
                || rect1.left > rect2.right
                || rect1.bottom < rect2.top
                || rect1.top > rect2.bottom
            );
        }

        protected prepareCloudPuffs(cloudElement:HTMLElement, lerp:Lerp) {
            for (let index in cloudElement.children) {
                if (cloudElement.children.hasOwnProperty(index)) {
                    // This needs casting
                    let child = <HTMLElement>cloudElement.children[index];
                    let fontSize = lerp(
                        cloudElement.children.length,
                        parseInt(index),
                        this.minFontSize,
                        this.maxFontSize
                    );
                    Cloud.styleCloudPuff(child, fontSize);
                }
            }
        }

        protected positionCloudPuffs(cloudElement:HTMLElement):void {
            let positionedRects = [];

            for(let index in cloudElement.children) {
                if(cloudElement.children.hasOwnProperty(index)) {
                    let child = <HTMLElement>cloudElement.children[index];

                    child.style.display = 'inline-block';

                    let nextPosition = this.ring.nextPosition();
                    while(Cloud.doesRectCollideWithRects(child.getBoundingClientRect(), positionedRects)) {
                        Cloud.positionElement(child, nextPosition);
                        if (!Cloud.isRectFullyInsideRect(child.getBoundingClientRect(), cloudElement.getBoundingClientRect())) {
                            child.style.display = 'none';
                            break;
                        }
                        nextPosition = this.ring.nextPosition();
                    }
                    positionedRects.push(child.getBoundingClientRect());
                }
            }
        }

        protected static defaultLerp(steps:number, step:number, start:number, finish:number):number {
            let range = finish - start;
            let stepSize = range / steps;
            let remaining = steps - step;
            return (stepSize * remaining) + start
        };

        public create():void {
            this.prepareCloudPuffs(this.cloudElement, Cloud.defaultLerp);
            this.positionCloudPuffs(this.cloudElement);
        }

        constructor(elementId:string) {
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

            this.ring = new RingPosition(
                new Position(this.areaHeight / 2, this.areaHeight / 2)
            );
        }
    }
}
