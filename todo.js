let todolist=[
    {
        item:'wake up',
        duedate:"10/10/2024"
    },
    {
        item:'Go to college',
        duedate:"10/10/2024"
    },
     {
        item: 'meeting friends',
        duedate:"10/10/2024"}
    ];
display()
function addtodo()
{
let inn=document.querySelector('#todo');
let dateElement=document.querySelector('#todo-date');
let todoitem=inn.value;
let tododate=dateElement.value;
todolist.push({item:todoitem, duedate:tododate});
inn.value='';
dateElement.value='';
display();
}
function display()
{
    let containerelement=document.querySelector(".todo-container");
let newhtml='';
    for(let i=0;i<todolist.length;i++)
{
    
    let{item,duedate}=todolist[i];
    newhtml+=`
    <span> ${item}</span>
    <span> ${duedate}</span>
    <button class="btn-delete" onclick="todolist.splice(${i}, 1);
    display();
    ">Delete</button>
    `;

}
containerelement.innerHTML=newhtml;
}