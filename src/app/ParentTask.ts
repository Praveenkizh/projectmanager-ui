export class ParentTask{
    parentId:Number;
    parentTask:String;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}