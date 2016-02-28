module WordCloud {

    export class Position {
        x: number;
        y: number;

        constructor(position: Position);
        constructor(x: number, y: number);
        constructor(x: any, y?:number) {
            if(x instanceof Position) {
                y = x.y;
                x = x.x;
            }
            this.x = x;
            this.y = y;
        }
    }
}
