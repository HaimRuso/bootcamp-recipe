const  rend=new Renderer()

$('#btn').on('click',function(){
    let input=$('#in').val()
   
    $.get(`/recipes/${input}`,function(ready){
       console.log(ready)
        rend.render(ready)
        $("img").on('click', function(){//print the first li
            console.log($(this).siblings('ul').find('li').text())
            });
    })
})


