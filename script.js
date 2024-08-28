let feild = document.getElementById('feild');
function generate()
{
    let characters = 'abcdefghijklmnopqrstuvwxyz' +
                 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                 '0123456789' +
                 '!@#$%^&*()-_=+[]{}|;:,.<>?/`';
    
    let pass = "";
    for(let i = 0; i < 22; i++)
    {
        let index = Math.round(Math.random() * characters.length);
        pass += characters[index];
    }
    feild.value = pass;
}

let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    generate();
})

let cpy = document.getElementById('cpy');
cpy.addEventListener('click', () => {
    feild.select();
    document.execCommand("copy");
})