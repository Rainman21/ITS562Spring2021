# This is Rick's Page Heading 1

> some sample JS code below
```js
export interface IPoint {
  readonly x: number;
  readonly y: number
}

export class Point implements IPoint {
  private _x = 0;
  private _y = 0;

  public get x() {
    return this._x;
  }

   public get y() {
    return this._y;
  }

  public copyFrom(point: IPoint) {
    this._x = point.x;
    this._y = point.y;
  }

  public scale(n: number): void {
    this._x *= n;
    this._y *= n;
  }

  public toString(): string{
    return  `${this._x} -  ${this._y}`
  }

  public toLog(): void{
    console.log(this.toString());
  }
}


```