 var age = 18;
 var gender = "female";

 var voting = age >= 18 || gender == "male" ? "female" : "male";

console.log(voting);
 



var temperature = 30;
var sunny = true;
var allWork = temperature > 30 && sunny
? "its a hot and sunny day" : "the weater is  moderate" ;

console.log(allWork);

var age = 18;
var allergicToPets = true;

var PetOwnership = age >= 18 && !allergicToPets 
? "Allowed to Own a Pet" : "Not Allowed to Own a Pet";

console.log(PetOwnership);

var Entrance_score = 70;
var study_physics = true;
var study_chemistry = false;

var has_disciplinary = false;

var all_work = Entrance_score >= 70 && (study_physics || study_chemistry) && 
!has_disciplinary
? "Eligible for admission" 
: "not eligible for admission";

console.log(all_work);
                           
var originalPrice = 50;
var Price = 100;
var original = originalPrice <= 50 %10 && (originalPrice || Price %20 )
originalPrice > 100;

console.log(original);






