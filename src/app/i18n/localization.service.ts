import { Injectable, Optional, SkipSelf } from "@angular/core";
import { LocalizationServiceConfig } from "./localization-config.service";
import { TranslateService } from "@ngx-translate/core";
import { Observable, map } from "rxjs";

@Injectable()
export class LocalizationService {
    private _localeId: string = 'en-US'; //default

    constructor(
        @Optional() @SkipSelf() private singleton: LocalizationService,
        private config: LocalizationServiceConfig,
        private translateService: TranslateService,
    ) {
        if (this.singleton) throw new Error("Localization is already provided by the root module");
        this._localeId = this.config.locale_id;
    }


    public initService(): Observable<any> {
        this._localeId = localStorage.getItem('language') || "en-US";
        return this.useLanguage(this._localeId)
    }

    public useLanguage(lang: string): Observable<any> {
        this.translateService.setDefaultLang(lang);
        return this.translateService.use(lang).pipe(map(res => res));
    }

    public translate(key: string | string[], interpolateParams?: object): string {
        return this.translateService.instant(key, interpolateParams) as string;
    }

}