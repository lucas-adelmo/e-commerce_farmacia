document.addEventListener("DOMContentLoaded", () =>{
const subject = [
    { value: 'duvidas', label: 'Dúvidas' },
    { value: 'comercial', label: 'Comercial' },
    { value: 'revenda', label: 'Revenda' }
];

// Selecionar o elemento de dropdown
const dropdown = document.getElementById('assuntoDropdown');

// Adicionar opções dinamicamente
subject.forEach(obj => {
    const option = document.createElement('option');
    option.value = obj.value;
    option.text = obj.label;
    dropdown.appendChild(option);
})})