document.getElementById('submitBtn').addEventListener('click', function () {
  let totalScore = 0;
  const questions = ['question1', 'question2'];

  questions.forEach(questionName => {
    const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
    if (selectedOption) {
      totalScore += parseInt(selectedOption.value);
    }
  });

  let angerLevel = '';
  if (totalScore <= 3) {
    angerLevel = 'Low Anger Levels';
  } else if (totalScore <= 5) {
    angerLevel = 'Moderate Anger Levels';
  } else {
    angerLevel = 'High Anger Levels';
  }

  document.getElementById('angerResultText').innerText = `Your anger level is: ${angerLevel}.`;
  document.getElementById('result').classList.remove('hidden');
});