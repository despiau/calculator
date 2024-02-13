// Prompt for password
let password = prompt("Please enter the password to view the calculator:");
if (password !== "smart") {
    alert("Incorrect password. You will not be able to use the calculator.");
} else {
    // The rest of your code goes here

    const form = document.getElementById('cleaning-form');
    const resultElem = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        const squareFootage = parseInt(document.getElementById('squareFootage').value);
        const frequency = document.querySelector('input[name="frequency"]:checked').id;

        // Validate input
        if (squareFootage <= 0) {
            resultElem.innerHTML = '<p class="alert alert-danger">Please enter a valid square footage (greater than 0).</p>';
            resultElem.classList.remove('d-none');
            return;
        }

        // Calculate based on square footage and frequency
        let cost, time, employees;
        if (squareFootage <= 1000) {
            cost = 200 + (squareFootage / 1000) * 200;
            time = 1;
            employees = 1;
        } else if (squareFootage <= 2500) {
            cost = 400 + ((squareFootage - 1000) / 1500) * 150;
            time = 1;
            employees = "1-2";
        } else if (squareFootage <= 5000) {
            cost = 550 + ((squareFootage - 2500) / 2500) * 125;
            time = 2;
            employees = 2;
        } else if (squareFootage <= 10000) {
            cost = 675 + ((squareFootage - 5000) / 5000) * 475;
            time = 3;
            employees = 2;
        } else if (squareFootage <= 20000) {
            cost = 1150 + ((squareFootage - 10000) / 10000) * 450;
            time = 5;
            employees = "2-3";
        } else if (squareFootage <= 30000) {
            cost = 1600 + ((squareFootage - 20000) / 10000) * 600;
            time = 8;
            employees = "3-4";
        } else if (squareFootage <= 40000) {
            cost = 2200 + ((squareFootage - 30000) / 10000) * 600;
            time = 12;
            employees = "4-5";
        } else {
            cost = 'Contact for quote';
            time = 'N/A';
            employees = 'N/A';
        }

        // Adjust cost based on cleaning frequency
        if (frequency === 'biweekly') {
            cost *= 2;
        } else if (frequency === 'monthly') {
            cost *= 4;
        }

        const frequencyText = frequency === 'weekly' ? 'semanal' : (frequency === 'biweekly' ? 'quincenal' : 'mensual');

        resultElem.innerHTML = `
            <p>Basado en el tamaño de tu oficina de ${squareFootage.toLocaleString()} pies cuadrados y una frecuencia de limpieza ${frequencyText}, aquí está tu cotización estimada:</p>
            <ul>
                <li>Costo de limpieza: $${typeof cost === 'number' ? cost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : cost}</li>
                <li>Tiempo estimado: ${typeof time === 'number' ? time.toFixed(2) : time} horas</li>
                <li>Número de empleados: ${employees}</li>
            </ul>
        `;
        resultElem.classList.remove('d-none');
    });
}
