/**
 * Created by jnevins on 5/28/16.
 */

/**
 * UI New User
 */
export class User {

    constructor(
        public firstName : string = null,
        public lastName : string = null,
        public email : string = null,
        public accountType : string = null,
        public password : string = null,
        public  phoneNumber : number = null
    ) {}
}
