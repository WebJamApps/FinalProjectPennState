/**
 * Created by jnevins on 5/24/16.
 */
import { Component } from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'new-user',
    templateUrl: 'app/newuser/templates/newuser.component.html',
    styleUrls: ['app/newuser/styles/newuser.component.css']
})
export class NewUserComponent {

    constructor(private router : Router) {}

}