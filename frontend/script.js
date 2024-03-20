document.addEventListener('DOMContentLoaded', function() {
  const questions = [
    {
      question: "What is your skin type?",
      options: ["Dry", "Oily", "Combination", "Normal"]
    },
    {
      question: "Which skin concerns do you have?",
      options: ["Acne", "Aging", "Dryness", "Sensitivity"]
    },
    {
      question: "How often do you wear sunscreen?",
      options: ["Every day", "Occasionally", "Rarely", "Never"]
    },
    {
      question: "Do you use moisturizer regularly?",
      options: ["Yes", "No"]
    },
    {
      question: "How often do you exfoliate?",
      options: ["Once a week", "A few times a week", "Rarely", "Never"]
    },
    {
      question: "What is your primary concern when it comes to skincare products?",
      options: ["Effectiveness", "Safety/Natural ingredients", "Price", "Brand"]
    },
    {
      question: "Do you have any specific skin conditions (e.g., eczema, rosacea)?",
      options: ["Yes", "No"]
    },
    {
      question: "How much water do you typically drink per day?",
      options: ["Less than 1 liter", "1-2 liters", "2-3 liters", "More than 3 liters"]
    },
    {
      question: "Do you wear makeup regularly?",
      options: ["Yes", "No"]
    },
    {
      question: "How often do you cleanse your skin?",
      options: ["Twice a day", "Once a day", "A few times a week", "Rarely"]
    }
  ];

  function displayQuiz() {
    const quizContainer = document.querySelector('.question-container');
    if (!quizContainer) return;

    questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');

      const questionTitle = document.createElement('h2');
      questionTitle.textContent = `Question ${index + 1}: ${question.question}`;
      questionDiv.appendChild(questionTitle);

      question.options.forEach(option => {
        const label = document.createElement('label');
        label.textContent = option;

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${index}`;
        input.value = option;

        label.appendChild(input);
        questionDiv.appendChild(label);
      });

      quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', showResults);
    quizContainer.appendChild(submitButton);
  }

  function showResults() {
    const quizContainer = document.querySelector('.question-container');
    if (!quizContainer) return;

    const resultsDiv = document.createElement('div');
    let resultsText = '<h2>Results:</h2>';
    let adviceText = '<h2>Skincare Advice:</h2>';

    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption) {
        resultsText += `<p><strong>${question.question}</strong>: ${selectedOption.value}</p>`;
        // Skincare advice based on answers
        if (index === 0) { // Skin type
          if (selectedOption.value === "Dry") {
            adviceText += "<p>For dry skin, use hydrating cleansers and moisturizers. Avoid harsh products that can strip away moisture.</p>";
          } else if (selectedOption.value === "Oily") {
            adviceText += "<p>For oily skin, use oil-free cleansers and lightweight, non-comedogenic moisturizers. Incorporate products with salicylic acid to control excess oil.</p>";
          } else if (selectedOption.value === "Combination") {
            adviceText += "<p>For combination skin, use a gentle cleanser and a moisturizer that balances hydration without clogging pores. Consider using different products for oily and dry areas.</p>";
          } else if (selectedOption.value === "Normal") {
            adviceText += "<p>For normal skin, maintain a balanced skincare routine with a gentle cleanser, moisturizer, and sunscreen. Incorporate targeted treatments as needed for specific concerns.</p>";
          }
        } else if (index === 1) { // Skin concerns
          if (selectedOption.value === "Acne") {
            adviceText += "<p>If you have acne, consider using products with ingredients like benzoyl peroxide or salicylic acid. Be gentle with your skin and avoid picking or squeezing acne lesions.</p>";
          } else if (selectedOption.value === "Aging") {
            adviceText += "<p>To address signs of aging, use products with ingredients like retinol, vitamin C, and hyaluronic acid.</p>";
                    } else if (selectedOption.value === "Dryness") {
            adviceText += "<p>To combat dryness, focus on hydrating and nourishing your skin with rich moisturizers and hydrating serums. Consider using a humidifier to add moisture to the air.</p>";
          } else if (selectedOption.value === "Sensitivity") {
            adviceText += "<p>If you have sensitive skin, avoid harsh products with fragrances or alcohol. Look for gentle, hypoallergenic skincare products formulated for sensitive skin.</p>";
          }
        } else if (index === 2) { // Sunscreen usage
          if (selectedOption.value === "Every day") {
            adviceText += "<p>Using sunscreen every day is essential for protecting your skin from harmful UV rays and preventing premature aging. Choose a broad-spectrum sunscreen with SPF 30 or higher and reapply every 2 hours.</p>";
          } else if (selectedOption.value === "Occasionally" || selectedOption.value === "Rarely" || selectedOption.value === "Never") {
            adviceText += "<p>It's important to prioritize sunscreen usage to protect your skin from sun damage and reduce the risk of skin cancer. Incorporate sunscreen into your daily skincare routine.</p>";
          }
        }
        // Add more conditions for other questions as needed
      }
    });

    resultsDiv.innerHTML = resultsText + adviceText;
    quizContainer.innerHTML = '';
    quizContainer.appendChild(resultsDiv);
  }

  displayQuiz();
});

            


