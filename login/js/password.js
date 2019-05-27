console.log('password js');

// $(document).ready(function(){
//     $('.pass_show').append('<span class="ptxt">Show</span>');  
//     });
      
    
//     $(document).on('click','.pass_show .ptxt', function(){ 
    
//     $(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
    
//     $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
    
//     });

document.addEventListener('DOMContentLoaded', () => {
    let password_show = document.getElementsByClassName('ptxt');
    console.log(password_show);
    password_show.addEventListener('click', () => {
        let password = document.getElementById('myInput');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    })
})
