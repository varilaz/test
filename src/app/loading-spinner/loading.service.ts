import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class LoadingComponent{


    load(isLoading: boolean){
        return isLoading = false;  
    }

}