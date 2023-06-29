let x=document.getElementById("input1");
let y=document.getElementById("input2");
 
x.addEventListener('input',function(){
    let cel = this.value;
    let fah = (cel * 9/5) + 32;
    fah=fah.toFixed(4);
    y.value=fah;
});

y.addEventListener('input',function(){
    let fah = this.value;
    let cel = ((fah) - 32) * 5/9;
    cel=cel.toFixed(4);
    x.value=cel;
});
