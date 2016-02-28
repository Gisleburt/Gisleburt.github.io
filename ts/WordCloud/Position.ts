module WordCloud {

    export class Position {
        x: number;
        y: number;

        constructor();
        constructor(position: Position);
        constructor(x: number, y: number);
        constructor(x?: any, y?:number) {
            if(typeof x == 'undefined') {
                x = 0;
                y = 0;
            }
            if(x instanceof Position) {
                y = x.y;
                x = x.x;
            }
            this.x = x;
            this.y = y;
        }
    }
}
