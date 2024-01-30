var textEditor = document.querySelector('.editor');

textEditor.addEventListener('change', (evt)=>{
    alert('yup');
    const { value } = evt.target;
    console.log('this is event value', value);
})