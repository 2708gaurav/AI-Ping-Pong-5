   rightWrist_x = "";
   rightWrist_y = "";
   rightWrist_score = "";
   Game_Status = "";

   function setup() {
      canvas = createCanvas(700 , 600);
      canvas.parent('canvas');
      
      video = createCapture(VIDEO);
      video.size(700 , 600);
      video.hide();
   
      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on("pose", gotPoses);
   }

   function draw(){
      image(video, 0, 0, 700, 600);

      if(rightWrist_score > 0.2){
         fill("#ff0000");
    stroke("#00f00");            
    circle(rightWrist_x, rightWrist_y, 20);
         
    if (Game_Status == "start"){
      
    }
      }
   }

   function modelLoaded(){
      console.log("Model Loaded!");
   }

   function gotPoses(results){
      if(results.length > 0){
         console.log(results)
         rightWrist_x = results[0].pose.rightWrist.x;
         rightWrist_y = results[0].pose.rightWrist.y;
         rightWrist_score = results[0].pose.keypoints[10].score;
         console.log("rightWrist_x = "+ rightWrist_x +"rightWrist_y" + rightWrist_y +"rightWrist_score" + rightWrist_score);
      }
   }

   function startGame(){
      Game_Status = "start";
      document.getElementById("status").innerHTML = "Game Is Loading";
   }