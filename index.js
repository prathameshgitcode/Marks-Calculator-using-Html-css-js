const calculateFormEl = document.getElementById("calculateForm");

const calculateMarks = (event) => {
  const maxMarks = 500;
  event.preventDefault();

  const formData = new FormData(calculateFormEl);

  const data = {};

  formData.forEach((value, key) => {
    data[key] = +value;
  });

  const totalMarks =
    data.maths + data.science + data.hindi + data.english + data.socialScience;

  const percentage = (totalMarks / maxMarks) * 100;

  const resultEl = document.createElement("p");
  resultEl.className = "result";
  resultEl.innerText = `you have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
  calculateFormEl.after(resultEl);
};
