import { NgModule } from "@angular/core";
import { MatCommonModule, MatTabsModule, MatToolbarModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FactModule } from "../fact/fact.module";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCommonModule,
        MatToolbarModule,
        MatTabsModule,

        FactModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
