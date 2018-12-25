
export class User{
    userId:Number;
    firstName:String;
    lastName:String;
    employeeId:String;
    projectId:Number;
    taskId:Number;
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}