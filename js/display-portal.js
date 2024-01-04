
const resultsData = [
    { name: 'Student 1', score: 95, email: 'student1@example.com' },
    { name: 'Student 2', score: 88, email: 'student2@example.com' },
];

function displayResults() {
    const displayResultsElement = document.getElementById('displayResults');
    displayResultsElement.innerHTML = '';

    for (const result of resultsData) {
        const resultCard = document.createElement('div');
        resultCard.className = 'card mb-3';
        resultCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${result.name}</h5>
                <p class="card-text">Score: ${result.score}</p>
                <p class="card-text">Email: ${result.email}</p>
            </div>
        `;
        displayResultsElement.appendChild(resultCard);
    }
}

function downloadPDF() {
    alert('Downloading PDF...');
}

function emailPDF() {
    const emailInput = document.getElementById('emailInput').value;

    if (emailInput.trim() === '') {
        alert('Please enter a valid email address.');
    } else {
        alert(`Emailing PDF to ${emailInput}...`);
    }
}

window.onload = displayResults;
