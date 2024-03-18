import { Injectable, signal } from "@angular/core";
import * as i0 from "@angular/core";
export class FlipContainerService {
    constructor() {
        this._isFlipped = signal(false);
    }
    flip() {
        this._isFlipped.update((value) => !value);
    }
    getFlipState() {
        return this._isFlipped;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipContainerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipContainerService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipContainerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC1jb250YWluZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc3JjL2xpYi9kb20vY29tcG9uZW50cy9mbGlwLWNvbnRhaW5lci9mbGlwLWNvbnRhaW5lci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQTBCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0UsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQUlVLGVBQVUsR0FBNEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBUzdEO0lBUFEsSUFBSTtRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxZQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzhHQVRVLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07OzJGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBTaWduYWwsIFdyaXRhYmxlU2lnbmFsLCBzaWduYWwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBGbGlwQ29udGFpbmVyU2VydmljZSB7XG4gIHByaXZhdGUgX2lzRmxpcHBlZDogV3JpdGFibGVTaWduYWw8Ym9vbGVhbj4gPSBzaWduYWwoZmFsc2UpO1xuXG4gIHB1YmxpYyBmbGlwKCk6IHZvaWQge1xuICAgIHRoaXMuX2lzRmxpcHBlZC51cGRhdGUoKHZhbHVlOiBib29sZWFuKSA9PiAhdmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldEZsaXBTdGF0ZSgpOiBTaWduYWw8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9pc0ZsaXBwZWQ7XG4gIH1cbn1cbiJdfQ==