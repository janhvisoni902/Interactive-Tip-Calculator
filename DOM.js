
function calculateTip() {
  const billInput = document.getElementById('billAmount');
  const tipSelect = document.getElementById('tipPercentage');
  const customTipInput = document.getElementById('customTip');
  const tipAmountDisplay = document.getElementById('tipAmount');
  const totalAmountDisplay = document.getElementById('totalAmount');

  const bill = parseFloat(billInput.value);
  let tipPercent;

  if (tipSelect.value === 'custom') {
    tipPercent = parseFloat(customTipInput.value);
  } else {
    tipPercent = parseFloat(tipSelect.value);
  }

  if (isNaN(bill) || bill <= 0 || isNaN(tipPercent) || tipPercent < 0) {
    alert('Please enter valid values for bill and tip.');
    return;
  }

  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;

  tipAmountDisplay.textContent = `Tip: $${tip.toFixed(2)}`;
  totalAmountDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

document.getElementById('tipPercentage').addEventListener('change', function () {
  const customTipInput = document.getElementById('customTip');
  if (this.value === 'custom') {
    customTipInput.style.display = 'block';
  } else {
    customTipInput.style.display = 'none';
  }
});

document.getElementById('calculateBtn').addEventListener('click', calculateTip);

const modeBtn = document.getElementById('mode');
let darkMode = false;

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkMode = !darkMode;
  console.log(`Dark mode: ${darkMode}`);
});
