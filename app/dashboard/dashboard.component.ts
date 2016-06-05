/**
 * Created by jnevins on 5/24/16.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/templates/dashboard.component.html'
})
export class DashboardComponent implements  OnInit {

    constructor(private router : Router) {}

    /**
     * We're using the 'OnInit' lifecycle hook here.  Angular will
     * automatically run this when this component initializes.
     */
    public ngOnInit() : void {
        //TODO: check auth

        //Right now, we are just going to redirect to the login page
        this.router.navigate(['Login']);
    }
}