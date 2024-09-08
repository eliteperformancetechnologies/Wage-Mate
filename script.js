document.addEventListener('DOMContentLoaded', () => {
    // Generate 31 input boxes for shifts with day labels
    const shiftsDiv = document.getElementById('shifts');
    for (let i = 1; i <= 31; i++) {
        const dayLabel = document.createElement('div');
        dayLabel.className = 'label-day';
        dayLabel.innerText = `Day ${i}`;
        const input = document.createElement('input');
        input.type = 'number';
        input.step = '0.01';
        input.min = '0';
        shiftsDiv.appendChild(dayLabel);
        shiftsDiv.appendChild(input);
    }

    const getButton = document.getElementById('get-btn');
    const totalShiftsInput = document.getElementById('total-shifts');
    const wageInput = document.getElementById('wage');
    const totalWageInput = document.getElementById('total-wage');

    getButton.addEventListener('click', () => {
        const shiftInputs = document.querySelectorAll('#shifts input');
        let totalShifts = 0;
        shiftInputs.forEach(input => {
            totalShifts += parseFloat(input.value) || 0;
        });
        totalShiftsInput.value = totalShifts;
        totalWageInput.value = wageInput.value;
    });

    const totalAmountButton = document.getElementById('total-amount-btn');
    const totalAmountInput = document.getElementById('total-amount');

    totalAmountButton.addEventListener('click', () => {
        const totalShifts = parseFloat(totalShiftsInput.value) || 0;
        const wagePerShift = parseFloat(totalWageInput.value) || 0;
        totalAmountInput.value = (totalShifts * wagePerShift).toFixed(2);
    });
});
