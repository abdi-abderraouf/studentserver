const { mongoose } = require("../config");

module.exports= mongoose => {
    var schema=mongoose.Schema(
        {
            name:String,
            email:String,
            inscription:Number,
          photo: { type :String, 
            required:true,
           },//on peut mettre required au lieu de function de validation
        },
           {timestamp:true}
    );
    schema.method("tojson",function()
    {
        const{__v,_id,...Object}=this.toObject();
        Object.id=_id;
        return Object;
      //pour detruire les objets apres leur creation
    });

    const Student = mongoose.model('student',schema);
        return Student;
}

