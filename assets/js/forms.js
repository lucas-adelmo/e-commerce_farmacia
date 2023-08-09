function logForms(event, form){
    event.preventDefault()
    
    const name = form.querySelector('#name').value
    const message = form.querySelector('#text-area').value;
 
    alert(`${name} just send an message: ${message}`)
    console.log(`${name} just send an message: ${message}`);
}