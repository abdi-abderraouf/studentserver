module.exports=app=>{
    const students =require("../controllers/students.controller")
    var router=require('express').Router()
    router.get("/",students.findAll)
    router.get('/:id',students.findById)
    router.post("/",students.create)
    // Update a user  with id
  router.put("/:id",students.update);
  // Delete a user with id
  router.delete("/:id",students.delete);
 
    //app.use("/api/students",router)// si on veut differentier entre notreapi restfull et les autres api ajoutes
    app.use("/students",router)//si on a pas des autres api
 }