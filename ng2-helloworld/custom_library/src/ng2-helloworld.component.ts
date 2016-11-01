import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ng2-helloworld',
    template: `
        <p class="hello">
            ng2-helloworld works!
        </p>
    `,
    styles: [`
        .hello { 
            color: #fff;
            background: #ccc;
            padding: 20px;
        }
    `]
})
export class Ng2HelloworldComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
