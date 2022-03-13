const tasks = {

      tasks :[
          {
              id:1,
              text:"Grocery shopping",
              completed:true
          },
          {    
              
            id:2,
            text:"Clean Yards",
            completed:true},
          {   
              
            id:1,
            text:"Kissing my baby",
            completed:false
        }
      ],

      getTasksTodo(){

        return this.tasks.filter((task) => task.completed === false);
      }
}

console.log(tasks.getTasksTodo());