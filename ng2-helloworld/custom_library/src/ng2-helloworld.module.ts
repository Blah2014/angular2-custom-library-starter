import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2HelloworldComponent } from './ng2-helloworld.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Ng2HelloworldComponent],
  exports: [Ng2HelloworldComponent]
})
export class Ng2HelloworldModule { }
