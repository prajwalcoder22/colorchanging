const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id==='red')
        {
            body.style.background=e.target.id
        }
        if(e.target.id==='pink')
            {
                body.style.background=e.target.id
            }
            if(e.target.id==='green')
                {
                    body.style.background=e.target.id
                }
                if(e.target.id==='black')
                    {
                        body.style.background=e.target.id
                    }
    })
});

// const insert=document.getElementsByClassName('insert');

// window.addEventListener('keydown',(e) => {
//     insert.innerHTML=
//     <div id='color'>
        
//         <table>
//             <tr>
//                 <th>key</th>
//                 <th>keycode</th>
//                 <th>code</th>
//             </tr>
//             <tr>
//                 <td>${e.key}</td>
//                 <td>${e.keycode}</td>
//                 <td>${e.code}</td>
//             </tr>
//         </table>
//     </div>
// })
