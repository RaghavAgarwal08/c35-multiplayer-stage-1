var ball;
var position;
var database;

function setup(){
  database=firebase.database();
  console.log(position)
 createCanvas(500,500);
 ball=createSprite(250,250,20,20);
 ball.shapeColor="red"

 var ballPosition= database.ref("ball/position");
 ballPosition.on("value", readPosition, showError);

}
function draw(){
  background("lightgreen");
  if(keyDown(LEFT_ARROW)){
    writePosition(-2,0);
  }
  if(keyDown(RIGHT_ARROW)){
    writePosition(2,0);
  }
  if(keyDown(UP_ARROW)){
    writePosition(0,-2);
  }
  if(keyDown(DOWN_ARROW)){
    writePosition(0,2);
  }
  drawSprites();


 
}

function readPosition(data){
position=data.val()
ball.x=position.x
ball.y=position.y


}
function writePosition(x,y){
database.ref('ball/position').set({
  'x':position.x+x,
  'y':position.y+y
})


}

function showError(){
  console.log("error in read or write");
}