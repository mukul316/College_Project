
/*$(function(){
    
    var $users=$('#users');
    var $name=$('#fname');
    var $email=$('#email');
    var $story=$('#story');
    $.ajax({
        type:'GET',
        url:'/users',
        success:function(users){
        console.log('success',users);
            $.each(users,function(i, user){
                $users.append('<li>user name'+ user.firstname+
                              '</li>');
                });
    },
        error: function(){
        alert("error  loading errors");
        }
    }); */
    
/*$(function () {
    var $fn =$('#fnamec');
    var $em =$('#emailc');
    var $story =$('story');
    
    
    
$('#submitcontact').on('click', function(){
        var userc={
            contactname: $fn.val(),
            contactemail:$em.val(),
            textarea:$story.val()
                
        };
        $.ajax({
        type:'POST',
        url:'/ContactUsers',
            data:userc,
        success:function(user_p){
            $users.append('success inserterd')
            console.log(userc);
        }
        
        
    });
       
});
}); */
$(document).ready(function(){
    $(document).find("#contactUsButton").on("click",function(){
       var contactUsUser = {fname:$("#fnamec").val(), email:$("#emailc").val(), textarea:$("#story").val()};
        $.ajax({
            type:'POST',
            url:'/ContactUser',
            data:contactUsUser,
            datatype:'json',
            success:function(user_p){
                alert('succesfully inserted');
            }
            
        })
        
        
    }); 
    $(document).find("#loginButton").on("click",function(){
       var user = {email:$("#loginEmail").val(), password:$("#loginpwd").val()};
        $.ajax({
            type:'POST',
            url:'/login',
            data:user,
            datatype:'json',
            success:function(user_p){
                alert('succesfully User inserted');
            },
            
        })
        
        
    });   
    $(document).find("#SignButton").on("click",function(){
       var user = {firstname:$("#FirstnameSignup").val(),lastname:$("#LastnameSignup").val(),email:$("#EmailSingup").val(), password:$("#PwdSignup").val(),age:$("#AgeSignup").val()};
        $.ajax({
            type:'POST',
            url:'/CreateUser',
            data:user,
            datatype:'json',
            success:function(user_p){
                alert('succesfully user data inserted');
            },
            
        })
        
        
    });     
})
