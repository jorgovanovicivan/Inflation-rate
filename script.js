function inflationCalculator()
{
let inflationrate=document.querySelector('#inflationRate');
let money=document.querySelector('#money');
let godina=document.querySelector('#years');

inflationrate=parseFloat(inflationrate.value);
money=parseFloat(money.value);
godina=parseFloat(godina.value);

let vredost=money+(money*(inflationrate/100));


for(let i =1; i<godina;i++)
{
vredost+=vredost*(inflationrate/100);
}
vrednost=vredost.toFixed(2);
let newElement=document.createElement('div');
newElement.className='new-value';
newElement.innerText='Danasnjih '+money+"$ vredi isto kao "+vredost+'$ za '+godina +" godina";
document.querySelector('.container').appendChild(newElement);

}