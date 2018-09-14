 $(document).ready(function(){
        var que;
        var ans;
        var right;
        var i=0;
        var score=0;
        var que1={que:"WHAT IS THE BASIC SPEED LAW?",
            ans:["Never drive faster than is safe for current conditions","Never drive faster than the posted speed limits",
			"Keep up with the flow of traffic","All of the above"],
            right:"0"};
        var que2={que:"TO MAKE A RIGHT TURN ONTO A TWO-WAY STREET FROM A TWO-WAY STREET, START IN THE RIGHT-HAND LANE AND END IN:",
            ans:["The left lane","The lane further away from the curb","The lane closest to the curb","Any lane that is available"],
            right:"2"};
        var que3={que:"WHY SHOULD DRIVERS AND PASSENGERS ADJUST SEAT HEADRESTS IN MOTOR VEHICLES?",
            ans:["It helps people relax, relieving the stress of driving","It helps avoid and reduce the severity of neck injuries",
			"It lets people maintain their hair styles lol","Tired people can prop up their heads, helping them stay alert"],
			right:"1"};
        var que4={que:"YOU HAVE CONSENTED TO TAKE A TEST FOR THE ALCOHOL CONTENT OF YOUR BLOOD, BREATH, OR URINE:",
            ans:["Only if you have been drinking alcohol","Only if you are under 18 years of age",
			"Whenever you drive in California","Only if an accident has occurred"],
            right:"2"};
        var que5={que:"WHICH OF THESE IS NOT A SAFE DRIVING PRACTICE?",
            ans:["Maintaining a three-second following distance","Staring at the road ahead of your vehicle",
			"Keeping your low beam lights on during bad weather","Keeping a space-cushion around the vehicle"],
            right:"1"};
        var que6={que:"ON LONG TRIPS, YOU CAN PREVENT DROWSINESS BY:",
            ans:["Turning on your car radio","Slowing down so you can react better",
			"Stopping at regular intervals for a rest","Moving your eyes from side to side as you drive"],
            right:"2"};
        var que7={que:"SOLID YELLOW LINES SEPARATE:",
			ans:["The center lane from other traffic","Bicycle lanes from regular traffic",
			"Traffic lanes on one-way streets","Vehicles going in opposite directions"],
			right:"3"};
        var que8={que:"WHEN MAKING A RIGHT TURN ON A GREEN LIGHT, YOU MUST:",
			ans:["Maintain normal driving speed","Stop and look for oncoming traffic",
			"Yield to pedestrians","Increase your normal driving speed"],
			right:"2"};
        var que9={que:"_______________",
			ans:["static","fixed","relative","absolute"],
			right:"0"};
        var que10={que:"_______________",
			ans:["inline","internal","external","Each have equal priority"],
			right:"0"};
		var que11={que:"Testing adding a new question.",
			ans:["0", "1", "2", "3"],
			right:"1"};
        var quelst=[que1,que2,que3,que4,que5,que6,que7,que8,que9,que10,que11];
        var wrong=[];
        $("#start").click(function(){
            $(".front").hide();
            $("#sub").show();
            $(".quiz").show();
            $("#num").text(i+1+"/"+quelst.length)
            $("#q").text(quelst[i].que);
            $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+quelst[i].ans[0])+"</label>";
            $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+quelst[i].ans[1])+"</label>";
            $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+quelst[i].ans[2])+"</label>";
            $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>"+quelst[i].ans[3])+"</label>";
            
        });
        $("#sub").click(function(){
            
            
            if($("input[name='opt']:checked").val()!=null){
                if($("input[name='opt']:checked").val()==quelst[i].right){
                    score++;
                }
                else{
                    wrong.push(i);
                }   
                $("#sub").hide();
                $(".score").text(score);
                if(i!=quelst.length-1){
                next();
                }
                else{
                    reslt();
                }

            }
            else{
                $(".p").text("Select One option");
            }
        });
        function next(){
            if(i!=(quelst.length)-1){
                    i++;
                }
            $("#q").text(quelst[i].que);
            $("#op1").html("<input type='radio' name='opt' id='o1' value='0'><label for='o1'>"+quelst[i].ans[0])+"</label>";
            $("#op2").html("<input type='radio' name='opt' id='o2' value='1'><label for='o2'>"+quelst[i].ans[1])+"</label>";
            $("#op3").html("<input type='radio' name='opt' id='o3' value='2'><label for='o3'>"+quelst[i].ans[2])+"</label>";
            $("#op4").html("<input type='radio' name='opt' id='o4' value='3'><label for='o4'>"+quelst[i].ans[3])+"</label>";
            $("#num").text(i+1+"/"+quelst.length);
            $("#sub").show();
            }
        function reslt(){
            $(".quiz").hide();
            $(".result").show();
            $(".score").text(score+"/"+quelst.length);
            if(score<=4){
                $(".message").text("Oh no!!You need to do better.");
            }
            else if(score<8){
                $(".message").text("Good.Dont stop studying.");
            }
            else{
                $(".message").text("Great!!You have really good knowledge of HTML and CSS.");
            }
        }
        $("#an").click(function(){
            $(".result").hide();
            $(".answers").show();
			$(".genAns").each(function(i) {
				if(wrong.indexOf(i) > -1) {
					$(this).css('color','#ff6347');
				}
			});
        });
        
    });
