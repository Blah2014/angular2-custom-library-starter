import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { Ng2HelloworldModule } from 'ng2-helloworld/ng2-helloworld';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        Ng2HelloworldModule,
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }