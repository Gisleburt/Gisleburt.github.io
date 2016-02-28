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

        protected static isRectInOtherRect(inner:ClientRect, outer:ClientRect):boolean {
            return inner.left >= outer.left
                && inner.right <= outer.right
                && inner.top >= outer.top
                && inner.bottom <= outer.bottom;
        }

        protected static areRectsColliding(rect1:ClientRect, rect2:ClientRect):boolean {
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
                        this.maxFontSize,
                        this.minFontSize
                    );
                    Cloud.styleCloudPuff(child, fontSize);
                }
            }
        }

        protected static positionCloudPuffs(cloudElement:HTMLElement):void {
            let positionedElements = [];
            let keepGoing = true;
            for(let index in cloudElement.children) {
                if(cloudElement.children.hasOwnProperty(index)) {
                    let child = <HTMLElement>cloudElement.children[index];

                    if(!Cloud.isRectInOtherRect(child.getBoundingClientRect(), cloudElement.getBoundingClientRect())) {
                        break;
                    }
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
            Cloud.positionCloudPuffs(this.cloudElement);
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

            let initialPosition = new Position(this.areaHeight / 2, this.areaHeight / 2);
            //this.ring = new RingPosition(initialPosition);
        }
    }
}
