$(document).ready(function() {

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
		var que9={que:"WHEN SHOULD YOU USE YOUR HEADLIGHTS?",
			ans:["When you are having difficulty seeing cars around you","When you cannot see a car one mile ahead",
			"One hour after sunset","All of the above"],
			right:"0"};
		var que10={que:"IF YOU EXIT A FREEWAY WITH A RAMP THAT CURVES DOWNHILL, YOU SHOULD:",
			ans:["Slow to the posted speed limit for the freeway","Wait until you enter the curve before braking",
			"Slow to a safe speed before the curve","Accelerate before the curve to prevent oversteer"],
			right:"2"};
		var que11={que:"WHO HAS THE RIGHT-OF-WAY AT AN INTERSECTION WITH NO CROSSWALKS?",
			ans:["Pedestrians, but only with the green walk signal", "Vehicles, but they should slow down and be careful",
			"Pedestrians always have the right-of-way", "Motorcyclists always have the right-of-way"],
			right:"2"};
		var que12={que:"IF YOU ARE STOPPED, INTENDING TO TURN LEFT, BUT ONCOMING VEHICLES ARE APPROACHING, YOU SHOULD:",
			ans:["Turn immediately if there are no pedestrians nearby", "Give the oncoming vehicles the right-of-way",
			"Turn because you have the right-of-way", "Keep driving, until you can find a safer place to make a turn"],
			right:"1"};
		var que13={que:"WHO MUST YIELD WHEN A DRIVER IS TURNING RIGHT AND A PEDESTRIAN IS CROSSING WITHOUT A TRAFFIC LIGHT?",
			ans:["Whoever started first", "The driver",
			"Whoever is slower", "The pedestrian"],
			right:"1"};
		var que14={que:"YOU MUST YIELD THE RIGHT-OF-WAY AT AN INTERSECTION TO:",
			ans:["The car in the intersection", "The car on your right",
			"The car in the opposite lane of traffic", "The car on your left"],
			right:"0"};
		var quelst=[que1,que2,que3,que4,que5,que6,que7,que8,que9,que10,que11,que12,que13,que14];

		//randomizes questions
		for (let i = quelst.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[quelst[i], quelst[j]] = [quelst[j], quelst[i]];
		}

		//creates answer sheet
		for (i = 0; i < quelst.length; i++) {
			$("#answers-page").append('<p>' + String(i+1) + '. ' + quelst[i].que + '</p>');
			$("#answers-page").append('<p class="indent">Answer: <span class="genAns">' + quelst[i].ans[Number(quelst[i].right)] + '</p>');
		}


		var i=0;
		var score=0;
		var wrong=[];


		$("#start-button").on('click',function() {
			$(".outer").fadeOut(500);
			$("#quiz-page").delay(500).fadeIn(250);
			$("#submit-button").fadeIn(600);
			$("#ques-num").text("Question #"+(i+1)+" out of "+quelst.length)
			$("#q").text(quelst[i].que);
			$("#op1").html("<input type='radio' name='opt' id='o1' value='0'>"
				+"<span class='circ' id='ch1'></span><span class='fade'>"+quelst[i].ans[0]+"</span>");
			$("#op2").html("<input type='radio' name='opt' id='o2' value='1'>"
				+"<span class='circ' id='ch2'></span><span class='fade'>"+quelst[i].ans[1]+"</span>");
			$("#op3").html("<input type='radio' name='opt' id='o3' value='2'>"
				+"<span class='circ' id='ch3'></span><span class='fade'>"+quelst[i].ans[2]+"</span>");
			$("#op4").html("<input type='radio' name='opt' id='o4' value='3'>"
				+"<span class='circ' id='ch4'></span><span class='fade'>"+quelst[i].ans[3]+"</span>");
        });
		
		$("#submit-button").on('click', function() {
			if($("input[name='opt']:checked").val()!=null) {
				if($("input[name='opt']:checked").val()==quelst[i].right) {
					score++;
				}
				else {
					wrong.push(i);
				}
				$("#submit-button").hide();
				$("#empty-msg").hide();
				if(i!=quelst.length-1) {
					next();
				}
				else {
					showResult();
				}
			}
			else{
				$("#empty-msg").show();
			}
		});

		//Activates Submit Button on pressing 'Enter' Key
		$(document).keydown(function(e) {
			if (e.which === 13) {
				if ($("#quiz-page").css('display') != 'none') {
					$("#submit-button").click();
				}
				else if ($(".outer").css('display') != 'none') {
					$("#start-button").click();
				}
				else {}
			}
		});

		function next() {
			if(i!=(quelst.length)-1) {
				i++;
			}
			$("#op1").animate({marginRight:'10%'});
			$("#op2").animate({marginRight:'20%'});
			$("#op3").animate({marginRight:'15%'});
			$("#op4").animate({marginRight:'25%'});
			$("#ques-num, #q, .fade").animate({opacity:0});
			$("#ques-num").queue(function(n) {
				$(this).text("Question #"+(i+1)+" out of "+quelst.length);
				$("#q").text(quelst[i].que);
				$("#op1").html("<input type='radio' name='opt' id='o1' value='0'>"
					+"<span class='circ' id='ch1'></span><span class='fade'>"+quelst[i].ans[0]+"</span>");
				$("#op2").html("<input type='radio' name='opt' id='o2' value='1'>"
					+"<span class='circ' id='ch2'></span><span class='fade'>"+quelst[i].ans[1]+"</span>");
				$("#op3").html("<input type='radio' name='opt' id='o3' value='2'>"
					+"<span class='circ' id='ch3'></span><span class='fade'>"+quelst[i].ans[2]+"</span>");
				$("#op4").html("<input type='radio' name='opt' id='o4' value='3'>"
					+"<span class='circ' id='ch4'></span><span class='fade'>"+quelst[i].ans[3]+"</span>");
				n();
			});
			$("#ques-num, #q, .fade").animate({opacity:1},1);
			$("#op1, #op2, #op3, #op4").animate({marginRight:''});
			$("#submit-button").show();
			$("#submit-button").blur();
		}

		function showResult() {
			$("#quiz-page").fadeOut(500);
			$("#result-page").delay(500).fadeIn(400);
			$("#score").text("You scored a "+score+" / "+quelst.length);
			if(score<=4) {
				$("#eval-msg").text("You need to study more.");
			}
			else if(score<8) {
				$("#eval-msg").text("Decent, but there's more work to do.");
			}
			else {
				$("#eval-msg").text("Excellent!");
			}
		}

		$("#view-ans-button").click(function() {
			$("#result-page").fadeOut(250);
			$("#answers-page").delay(250).fadeIn(250);
			$(".genAns").each(function(i) {
				if(wrong.indexOf(i) > -1) {
					$(this).css('color','#ff6347');
				}
			});
		});

		$("#try-again-button").click(function() {
			window.location.reload(true);
		});
        
    });
