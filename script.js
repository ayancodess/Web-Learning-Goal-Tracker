const goals = [
"Complete HTML Basics",
"Practice CSS Flexbox",
"Build a JavaScript Mini Project"
];

const goalList = document.getElementById("goalList");

goals.forEach(goal=>{
let li=document.createElement("li");
li.textContent=goal;
goalList.appendChild(li);
});

function learningStatus(hours){
if(hours>=15)
return "Excellent Progress";
else if(hours>=8)
return "Good Progress";
else
return "Needs More Practice";
}

document.getElementById("trackerForm").addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;
let hours=parseInt(document.getElementById("hours").value);
let tech=document.getElementById("technology").value;

let lastDigit=parseInt(roll.charAt(roll.length-1));

if(lastDigit%2==0 && hours<10){
alert("Even Roll Number students must study at least 10 hours.");
return;
}

if(lastDigit%2!=0 && hours<8){
alert("Odd Roll Number students must study at least 8 hours.");
return;
}

let status=learningStatus(hours);

document.getElementById("output").innerHTML=
`
Hello <b>${name}</b><br>
Roll Number: ${roll}<br>
Target Technology: ${tech}<br>
Study Hours: ${hours}<br>
Status: <b>${status}</b>
`;

});