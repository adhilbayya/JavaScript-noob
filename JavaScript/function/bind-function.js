let runner = {
  name : 'Runner',
  run : function(speed){
    console.log(this.name+' is running at '+speed +'kmp speed');
  }
}

let flyer = {
  name : 'flyer',
  fly : function(speed){
    console.log(this.name + 'is flying at ' + speed + 'kmp speed');
  }
}

let run = runner.run.bind(flyer, 30);
run(); //flyer is running at 20 kmp speed
let fly = flyer.fly.bind(runner, 20);
fly(); //runner is flying at 20 kmp speed
