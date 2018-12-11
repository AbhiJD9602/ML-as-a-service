import {Component, Input, OnInit} from '@angular/core';
import {NavigationItem} from './main-layout.types';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})

export class MainLayoutComponent implements OnInit {
    @Input()
    public menuItems: NavigationItem[] = [];

    @Input()
    public hasSideNav = false;

    @Input()
    public title = '';

    @Input()
    public logoUrl = '';

    @Input()
    public hasContentPadding = true;

    constructor() {
    }

    ngOnInit() {
    }
}
