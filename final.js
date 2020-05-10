
var level;


var num=[
	{
		no:1,
		color:"rgb(255,255,255)",
		noo:31,
		colorr:"rgb(64,64,64)"
	},
	{
		no:2,
		color:"rgb(248,248,248)",
		noo:35,
		colorr:"rgb(32,32,32)"
	},
	{
		no:3,
		color:"rgb(245,245,245)",
		noo:38,
		colorr:"rgb(8,8,8)"
	},
	{
		no:4,
		color:"rgb(240,240,240)",
		noo:37,
		colorr:"rgb(16,16,16)"
	},
	{
		no:5,
		color:"rgb(232,232,232)",
		noo:23,
		colorr:"rgb(120,120,120)"
	},
	{
		no:6,
		color:"rgb(224,224,224)",
		noo:34,
		colorr:" 	rgb(40,40,40)"
	},
	{
		no:7,
		color:"rgb(220,220,220)",
		noo:32,
		colorr:"rgb(56,56,56)"
	},
	{
		no:8,
		color:"rgb(216,216,216)",
		noo:36,
		colorr:"rgb(24,24,24)"

	},
	{
		no:9,
		color:"rgb(211,211,211)",
		noo:30,
		colorr:"rgb(72,72,72)"
	},
	{
		no:10,
		color:"rgb(208,208,208)",
		noo:27,
		colorr:"rgb(96,96,96)"

	},
	{
		no:11,
		color:"rgb(200,200,200)",
		noo:24,
		colorr:"rgb(112,112,112)"
	},
	{
		no:12,
		color:"rgb(192,192,192)",
		noo:33,
		colorr:"rgb(48,48,48)"
	},
	{
		no:13,
		color:"rgb(190,190,190)",
		noo:22,
		colorr:"rgb(128,128,128)"
	},
	{
		no:14,
		color:"rgb(184,184,184)",
		noo:39,
		colorr:" 	rgb(0,0,0)"
	},
	{
		no:15,
		color:"rgb(176,176,176)",
		noo:28,
		colorr:"rgb(88,88,88)"
	},
	{
		no:16,
		color:"rgb(169,169,169)",
		noo:29,
		colorr:"rgb(80,80,80)"
	},
	{
		no:17,
		color:"rgb(169,169,169)",
		noo:21,
		colorr:"rgb(136,136,136)"
	},
	{
		no:18,
		color:"rgb(160,160,160)",
		noo:40,
		colorr:"	rgb(0,0,0)"
	},
	{
		no:19,
		color:"rgb(152,152,152)",
		noo:25,
		colorr:"rgb(112,112,112)"
	},
	{
		no:20,
		color:"rgb(144,144,144)",
		noo:26,
		colorr:"rgb(104,104,104)"
	},
];

                                           // HARD LEVEL

var storage1;
var storage2;
var storage3;
var storage4;
var storage5;


var getval1;
var getval2;
var getval3;
var getval4;
var getval5;

										                      // EASY level

var storageEasy1;
var storageEasy2;
var storageEasy3;
var storageEasy4;
var storageEasy5;


var getvalEasy1;
var getvalEasy2;
var getvalEasy3;
var getvalEasy4;
var getvalEasy5;




var start = 0;
var t;
class Stopwatch {
  constructor(display, results) {
    this.running = false;
    this.display = display;
    this.results = results;
    this.laps = [];
    this.reset();
    this.print(this.times);
  }

  reset() {
    this.times = [0, 0, 0];
  }

  start() {
    start = 1;
    if (!this.time) this.time = performance.now();
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this.step.bind(this));
    }
  }

  lap() {
    let times = this.times;
    let li = document.createElement('li');
    li.innerText = this.format(times);
    this.results.appendChild(li);

  }

  stop() {

    this.running = false;
    this.time = null;
  }

  restart() {
    if (!this.time) this.time = performance.now();
    if (!this.running) {
      this.running = true;
      requestAnimationFrame(this.step.bind(this));
    }
    this.reset();
  }

  clear() {
    clearChildren(this.results);
  }

  step(timestamp) {
    if (!this.running) return;
    this.calculate(timestamp);
    this.time = timestamp;
    this.print();
    requestAnimationFrame(this.step.bind(this));
  }

  calculate(timestamp) {
    var diff = timestamp - this.time;
    // Hundredths of a second are 100 ms
    this.times[2] += diff / 10;
    // Seconds are 100 hundredths of a second
    if (this.times[2] >= 100) {
      this.times[1] += 1;
      this.times[2] -= 100;
    }
    // Minutes are 60 seconds
    if (this.times[1] >= 60) {
      this.times[0] += 1;
      this.times[1] -= 60;
    }
  }

  print() {
    this.display.innerText = this.format(this.times);
    t = String(this.format(this.times));

  }

  format(times) {
    return `\
${pad0(times[0], 2)}:\
${pad0(times[1], 2)}:\
${pad0(Math.floor(times[2]), 2)}`;
  }
}

function pad0(value, count) {
  var result = value.toString();
  for (; result.length < count; --count)
    result = '0' + result;
  return result;
}

function clearChildren(node) {
  while (node.lastChild)
    node.removeChild(node.lastChild);
}

let stopwatch = new Stopwatch(
  document.querySelector('.stopwatch'),
  document.querySelector('.results'));




  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }



document.querySelector(".easylevel").addEventListener("click", function(){
	level = 1;
	display2();
});


document.querySelector(".hardlevel").addEventListener("click", function(){
	level = 2;
	display2();
});


function display2()
{
	document.querySelector(".easylevel").classList.add("hide");
	document.querySelector(".hardlevel").classList.add("hide");
	document.querySelector(".start").classList.remove("hide2");
	document.querySelector(".posi1").innerHTML = "Click to ";
	document.querySelector(".posi2").classList.remove("hide2");
}



document.querySelector(".start").addEventListener("click", function() {
  setTimeout(function() {
    document.querySelector(".stat").textContent = "3";
    document.querySelector(".stat").style.fontSize = "100px";
    document.querySelector(".stat").style.color = "white";
  }, 1000);

  setTimeout(function() {
    document.querySelector(".stat").textContent = "2";
    document.querySelector(".stat").style.fontSize = "100px";
  }, 2000);

  setTimeout(function() {
    document.querySelector(".stat").textContent = "1";
    document.querySelector(".stat").style.fontSize = "100px";
  }, 3000);

  setTimeout(function() {
		document.querySelector(".outer-box").classList.remove("hide");
    display();
    stopwatch.start();
    document.querySelector(".stat").textContent = " ";
    document.querySelector(".start").textContent = " ";
    document.querySelector(".start").classList.add("hide");

  }, 4000);
});

var a = [];

function display()
{
  shuffle(num);
  for (var i = 0; i < num.length; i++)
	{
    document.querySelectorAll(".inner-box")[i].innerHTML = num[i].no.toString() ;
    document.querySelectorAll(".inner-box")[i].style.backgroundColor = num[i].color;
    a[i] = num[i].noo;
  }
	if (level == 2)
	{
		document.querySelector(".hardTimer").classList.remove("hide");
		hardPlay();
	}
	else
	{
		// document.querySelector(".easyTimer").classList.remove("hide");
		easyPlay();
	}

}



var say;
var key;
var numberOfTimes = document.querySelectorAll(".inner-box").length;


function easyPlay()
{
	for (var m = 0; m < numberOfTimes; m++)
	{
		document.querySelectorAll(".inner-box")[m].addEventListener("click", function(){

			key = parseInt(this.innerHTML);

			if (this.innerHTML == "20")
			{
				stopwatch.stop();
				stopwatch.lap();
				finishOuter();
				compare2(t);
				document.createElement('li').innerText = t;
				this.results.appendChild(li);
				}
				else
				{
					if (start == 0)
		      {

		        var audio2 = new Audio("wrong.mp3");
		        audio2.play();
		        setTimeout(function() {
		          alert("CLICK THE START / START FROM 1");
		        }, 800);

		      }
				}


				if (start == 1)
				{
					check(key);
					if (value == 1)
					{
						if (key < 21)
						{
							this.innerHTML = " ";
							this.classList.add("hide2");
							this.style.color = "gray";
						}
					}
				}

		});
	}

}



function hardPlay()
{
	for (var i = 0; i < numberOfTimes; i++)
	{
	  document.querySelectorAll(".inner-box")[i].addEventListener("click", function()
	  {

	    key = parseInt(this.innerHTML);

			if (this.innerHTML == "40")
			{
				stopwatch.stop();
	      stopwatch.lap();
	      finishOuter();
	      compare(t);
	      document.createElement('li').innerText = t;
	      this.results.appendChild(li);
	    }
	    else
	    {
	      if (start == 0)
	      {

	        var audio2 = new Audio("wrong.mp3");
	        audio2.play();
	        setTimeout(function() {
	          alert("CLICK THE START / START FROM 1");
	        }, 800);

	      }
	    }


	    if (start == 1)
	    {
	      check(key);
	      if (value == 1)
	      {
	        if (key < 21)
	        {
	          say = backup(key);
	          this.innerHTML = say.toString();
	          this.style.color = "white";
	          if(this.innerHTML == "21")
	          {
	            this.style.backgroundColor = "rgb(136,136,136)";
	          }
	          else if(this.innerHTML == "22")
	          {
	            this.style.backgroundColor = "rgb(128,128,128)";
	          }
	          else if(this.innerHTML == "23")
	          {
	            this.style.backgroundColor = "rgb(120,120,120)";
	          }
	          else if(this.innerHTML == "24")
	          {
	            this.style.backgroundColor = "rgb(112,112,112)";
	          }
	          else if(this.innerHTML == "25")
	          {
	            this.style.backgroundColor ="rgb(105,105,105)";
	          }
	          else if(this.innerHTML == "26")
	          {
	            this.style.backgroundColor ="rgb(104,104,104)";
	          }
	          else if(this.innerHTML == "27")
	          {
	            this.style.backgroundColor = "rgb(96,96,96)";
	          }
	          else if(this.innerHTML == "28")
	          {
	            this.style.backgroundColor ="rgb(88,88,88)";
	          }
	          else if(this.innerHTML == "29")
	          {
	            this.style.backgroundColor = "rgb(80,80,80)";
	          }
	          else if(this.innerHTML == "30")
	          {
	            this.style.backgroundColor ="rgb(72,72,72)";
	          }
	          else if(this.innerHTML == "31")
	          {
	            this.style.backgroundColor = 	"rgb(64,64,64)";
	          }
	          else if(this.innerHTML == "32")
	          {
	            this.style.backgroundColor = 	"rgb(56,56,56)";
	          }
	          else if(this.innerHTML == "33")
	          {
	            this.style.backgroundColor = 	"rgb(48,48,48)";
	          }
	          else if(this.innerHTML == "34")
	          {
	            this.style.backgroundColor ="rgb(40,40,40)";
	          }
	          else if(this.innerHTML == "35")
	          {
	            this.style.backgroundColor = 	"rgb(32,32,32)";
	          }
	          else if(this.innerHTML == "36")
	          {
	            this.style.backgroundColor = 	"rgb(24,24,24)";
	          }
	          else if(this.innerHTML == "37")
	          {
	            this.style.backgroundColor = 	"rgb(16,16,16)";
	          }
	          else if(this.innerHTML == "38")
	          {
	            this.style.backgroundColor = 	"rgb(8,8,8)";
	          }
	          else if(this.innerHTML == "39")
	          {
	            this.style.backgroundColor = 	"rgb(0,0,0)";
	          }
	          else if(this.innerHTML == "40")
	          {
	            this.style.backgroundColor = 	"rgb(0,0,0)";
	          }

	        }
	        else
	        {

	          this.innerHTML = " ";
						this.classList.add("hide2");
	          this.style.color = "gray";
	        }

	      }
	    }
	  });
	}
}



var j = 0;

function backup(key)
{
  key = num[j].noo;
  j = j+1;
  return key;
}





function check(key) {
  var total = document.querySelectorAll(".inner-box").length;

  for (var i = 0; i < total; i++) {
    if ((document.querySelectorAll(".inner-box")[i].innerHTML < key) && (document.querySelectorAll(".inner-box")[i].innerHTML != " ")) {
      var audio2 = new Audio("wrong.mp3");
      audio2.play();
      value = 0;
      setTimeout(function() {
        alert("WRONG ANSWER");
      }, 800);

      // alert("WRONG ANSWER");
      break;
    } else {
      value = 1;
      var audio1 = new Audio("green.mp3");
      audio1.play();
    }

  }

}




function finishOuter() {

  document.querySelector(".outer-box").style.padding = "150px 0 0 0";
  document.querySelector(".outer-box").style.fontSize = "200%";
  document.querySelector(".outer-box").textContent = "GAME OVER!!";
}

document.querySelector(".reset").addEventListener("click", function() {
  location.reload();
});



function compare(t) {
  var k;
  var time = t.slice(0, 2) + t.slice(3, 5) + t.slice(6, 8);

  var best1 = document.querySelector(".bestytime1").innerHTML;
  var bestcmp1 = best1.slice(0, 2) + best1.slice(3, 5) + best1.slice(6, 8);
  var best2 = document.querySelector(".bestytime2").innerHTML;
  var bestcmp2 = best2.slice(0, 2) + best2.slice(3, 5) + best2.slice(6, 8);
  var best3 = document.querySelector(".bestytime3").innerHTML;
  var bestcmp3 = best3.slice(0, 2) + best3.slice(3, 5) + best3.slice(6, 8);
  var best4 = document.querySelector(".bestytime4").innerHTML;
  var bestcmp4 = best4.slice(0, 2) + best4.slice(3, 5) + best4.slice(6, 8);
  var best5 = document.querySelector(".bestytime5").innerHTML;
  var bestcmp5 = best5.slice(0, 2) + best5.slice(3, 5) + best5.slice(6, 8);

  var bestNum1 = parseInt(bestcmp1);
  var bestNum2 = parseInt(bestcmp2);
  var bestNum3 = parseInt(bestcmp3);
  var bestNum4 = parseInt(bestcmp4);
  var bestNum5 = parseInt(bestcmp5);


  var numTime = parseInt(time);



  if (numTime < bestNum1) {
    document.querySelector(".bestytime5").innerHTML = document.querySelector(".bestytime4").innerHTML;
    document.querySelector(".bestytime4").innerHTML = document.querySelector(".bestytime3").innerHTML;
    document.querySelector(".bestytime3").innerHTML = document.querySelector(".bestytime2").innerHTML;
    document.querySelector(".bestytime2").innerHTML = document.querySelector(".bestytime1").innerHTML;
    document.querySelector(".bestytime1").innerHTML = t;
  } else if (numTime > bestNum1 && numTime < bestNum2) {
    document.querySelector(".bestytime5").innerHTML = document.querySelector(".bestytime4").innerHTML;
    document.querySelector(".bestytime4").innerHTML = document.querySelector(".bestytime3").innerHTML;
    document.querySelector(".bestytime3").innerHTML = document.querySelector(".bestytime2").innerHTML;
    document.querySelector(".bestytime2").innerHTML = t;
  } else if (numTime > bestNum2 && numTime < bestNum3) {
    document.querySelector(".bestytime5").innerHTML = document.querySelector(".bestytime4").innerHTML;
    document.querySelector(".bestytime4").innerHTML = document.querySelector(".bestytime3").innerHTML;
    document.querySelector(".bestytime3").innerHTML = t;
  } else if (numTime > bestNum3 && numTime < bestNum4) {
    document.querySelector(".bestytime5").innerHTML = document.querySelector(".bestytime4").innerHTML;
    document.querySelector(".bestytime4").innerHTML = t;
  } else if (numTime < bestNum4) {
    document.querySelector(".bestytime5").innerHTML = t;
  } else {

  }


  localStorage.setItem('storage1', document.querySelector(".bestytime1").innerHTML);
  localStorage.setItem('storage2', document.querySelector(".bestytime2").innerHTML);
  localStorage.setItem('storage3', document.querySelector(".bestytime3").innerHTML);
  localStorage.setItem('storage4', document.querySelector(".bestytime4").innerHTML);
  localStorage.setItem('storage5', document.querySelector(".bestytime5").innerHTML);
}


getval1 = localStorage.getItem('storage1');
getval2 = localStorage.getItem('storage2');
getval3 = localStorage.getItem('storage3');
getval4 = localStorage.getItem('storage4');
getval5 = localStorage.getItem('storage5');


document.querySelector(".bestytime1").innerHTML = getval1;
document.querySelector(".bestytime2").innerHTML = getval2;
document.querySelector(".bestytime3").innerHTML = getval3;
document.querySelector(".bestytime4").innerHTML = getval4;
document.querySelector(".bestytime5").innerHTML = getval5;





function compare2(t)
{
	var k;
  var time = t.slice(0, 2) + t.slice(3, 5) + t.slice(6, 8);

  var best1 = document.querySelector(".bestytimeEasy1").innerHTML;
  var bestcmp1 = best1.slice(0, 2) + best1.slice(3, 5) + best1.slice(6, 8);
  var best2 = document.querySelector(".bestytimeEasy2").innerHTML;
  var bestcmp2 = best2.slice(0, 2) + best2.slice(3, 5) + best2.slice(6, 8);
  var best3 = document.querySelector(".bestytimeEasy3").innerHTML;
  var bestcmp3 = best3.slice(0, 2) + best3.slice(3, 5) + best3.slice(6, 8);
  var best4 = document.querySelector(".bestytimeEasy4").innerHTML;
  var bestcmp4 = best4.slice(0, 2) + best4.slice(3, 5) + best4.slice(6, 8);
  var best5 = document.querySelector(".bestytimeEasy5").innerHTML;
  var bestcmp5 = best5.slice(0, 2) + best5.slice(3, 5) + best5.slice(6, 8);

  var bestNum1 = parseInt(bestcmp1);
  var bestNum2 = parseInt(bestcmp2);
  var bestNum3 = parseInt(bestcmp3);
  var bestNum4 = parseInt(bestcmp4);
  var bestNum5 = parseInt(bestcmp5);


  var numTime = parseInt(time);



  if (numTime < bestNum1) {
    document.querySelector(".bestytimeEasy5").innerHTML = document.querySelector(".bestytimeEasy4").innerHTML;
    document.querySelector(".bestytimeEasy4").innerHTML = document.querySelector(".bestytimeEasy3").innerHTML;
    document.querySelector(".bestytimeEasy3").innerHTML = document.querySelector(".bestytimeEasy2").innerHTML;
    document.querySelector(".bestytimeEasy2").innerHTML = document.querySelector(".bestytimeEasy1").innerHTML;
    document.querySelector(".bestytimeEasy1").innerHTML = t;
  } else if (numTime > bestNum1 && numTime < bestNum2) {
    document.querySelector(".bestytimeEasy5").innerHTML = document.querySelector(".bestytimeEasy4").innerHTML;
    document.querySelector(".bestytimeEasy4").innerHTML = document.querySelector(".bestytimeEasy3").innerHTML;
    document.querySelector(".bestytimeEasy3").innerHTML = document.querySelector(".bestytimeEasy2").innerHTML;
    document.querySelector(".bestytimeEasy2").innerHTML = t;
  } else if (numTime > bestNum2 && numTime < bestNum3) {
    document.querySelector(".bestytimeEasy5").innerHTML = document.querySelector(".bestytimeEasy4").innerHTML;
    document.querySelector(".bestytimeEasy4").innerHTML = document.querySelector(".bestytimeEasy3").innerHTML;
    document.querySelector(".bestytimeEasy3").innerHTML = t;
  } else if (numTime > bestNum3 && numTime < bestNum4) {
    document.querySelector(".bestytimeEasy5").innerHTML = document.querySelector(".bestytimeEasy4").innerHTML;
    document.querySelector(".bestytimeEasy4").innerHTML = t;
  } else if (numTime < bestNum4) {
    document.querySelector(".bestytimeEasy5").innerHTML = t;
  } else {

  }

	localStorage.setItem('storageEasy1', document.querySelector(".bestytimeEasy1").innerHTML);
  localStorage.setItem('storageEasy2', document.querySelector(".bestytimeEasy2").innerHTML);
  localStorage.setItem('storageEasy3', document.querySelector(".bestytimeEasy3").innerHTML);
  localStorage.setItem('storageEasy4', document.querySelector(".bestytimeEasy4").innerHTML);
  localStorage.setItem('storageEasy5', document.querySelector(".bestytimeEasy5").innerHTML);

}

getvalEasy1 = localStorage.getItem('storageEasy1');
getvalEasy2 = localStorage.getItem('storageEasy2');
getvalEasy3 = localStorage.getItem('storageEasy3');
getvalEasy4 = localStorage.getItem('storageEasy4');
getvalEasy5 = localStorage.getItem('storageEasy5');


document.querySelector(".bestytimeEasy1").innerHTML = getvalEasy1;
document.querySelector(".bestytimeEasy2").innerHTML = getvalEasy2;
document.querySelector(".bestytimeEasy3").innerHTML = getvalEasy3;
document.querySelector(".bestytimeEasy4").innerHTML = getvalEasy4;
document.querySelector(".bestytimeEasy5").innerHTML = getvalEasy5;
