
export class Project{
    projectId:Number;
    project:String;
    priority:Number;
    startDate:Date;
    endDate:Date;
    managerId:Number;
    
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}