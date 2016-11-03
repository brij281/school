import { Injectable } from "@angular/core";


@Injectable()
export class SessionService {
    private _userName: string;
    constructor() {
        
    }

    public get Name(): string {
        return this._userName;
    }
    public set Name(theName :string){
            this._userName = theName;
     }
}