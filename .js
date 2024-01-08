// 1. create your own resume in JSON format
const Resume = {
    personalInfo: {
      name: "Arunmon sk ",
      age: 23,
      city: "nagercoil",
      email: "anuvinuanuvinu916@gmail.com",
    },
    skills: ["Phython","JS"],
    education: [
      {
     
      },
    ],
  };




// 2. For the given JSON iterate overall for loops(for,for..in,for...of,forEach)







//Using for loop

console.log("Using for loop:")
for(i=0;i<Resume.education.length;i++){
  console.log(`Degree : ${Resume.education[i].degree}, Major : ${Resume.education[i].major}`)
}

//Using for...in loop

console.log("Using for...in loop:")
for(let info in Resume){
    console.log(info, Resume[info]);

}

 // Using for...of loop for arrays

 console.log("Using for...of loop:")

 for (let education of Resume.education) {
   console.log(`Year: ${education.graduationYear}`);
 }

 // Using forEach for arrays

 console.log("Using forEach for arrays:");

 Resume.education.forEach((university,index)=>{
    console.log(`${index+1}. Degree : ${university.degree}, University : ${university.university}`)
 })


  
  
