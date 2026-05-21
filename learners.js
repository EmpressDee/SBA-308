// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
 
 //step 1:figure out number of learners and how many report objects we need
 // learner info inside the learner submission array

 const result = []
// keep track of ids
const ids = []
//for loop over submissions array to get one leatner at a time

for (let sub of submissions) {
  //using include method to check the learner id in the array
  if (ids.includes(sub.learner_id) !== true) { //would mean that current id is not in array and is unique
    ids.push(sub.learner_id);
  }
   
}

console.log(ids)

// create learner objects

let score = 0

for (let learnerId of ids) {
 console.log(learnerId)

 for(let i = 0; i < submissions.length; i++){
  if (learnerId === submissions[i].learnerId){
    console.log(submissions[i].submission.score)
    score += submissions[i].submission.score
    ag.assignments[0].points_possible
  }
  
 }
 console.log("total score: "+score)
  let learnerReport = {
    id: learnerId
  }
   console.log(learnerReport)
  result.push(learnerReport);

}



  //return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//console.log(result);


/*Task for each submission:

Find the matching assignment
Ignore assignments not yet due
Check for invalid data
Apply late penalty if needed
Calculate assignment percentage
Add score toward weighted average
Store result under learner object */








  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];
