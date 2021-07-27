document.addEventListener('DOMContentLoaded', () => {
    var win = 0;
    var lose = 0;
    var tie = 0;
    var flag=1;
    var chk=7;
    var stone=document.getElementById('stone');
    var paper=document.getElementById('paper');
    var scissor=document.getElementById('scissor');
    var user=document.getElementById('user');
    var comp=document.getElementById('comp');
    var move=document.getElementById('move');
    var chance=document.getElementById('chances');

    document.getElementById('play_chk').addEventListener('click',()=>{
        
        location.reload();
    });
    
    //0 - stone
    //1 - paper
    //2 - scissor
    setInterval(()=>{
        
        chk=7-win-tie-lose;
        if(chk==0)
        {
        setTimeout(()=>{
           if(win>lose)
            {
                move.innerHTML='User is winner!!! &#x1F60a;';
            }
            else if(win<lose)
            {
                move.innerHTML='Computer is winner!!! &#128542;'
            }
            else
            {
                move.innerHTML='Draw!!! &#128513;';
            } 
        },1300);
            
        }
        
        document.getElementById('won').innerHTML=`Win: ${win}`;
        document.getElementById('tie').innerHTML=`Tie: ${tie}`;
        document.getElementById('lose').innerHTML=`Lose: ${lose}`;
        chance.innerHTML=`Turns left: ${chk}`;
        stone.addEventListener('click',()=>{
            if(flag==1 && chk!=0)
            {
                move.innerHTML='';
                console.log('stone');
                flag=0;
                user.classList.add('animation_user');
                comp.classList.add('animation_comp');
                setTimeout(() => {
                    flag=1;
                user.classList.remove('animation_user');
                comp.classList.remove('animation_comp');
                }, 2000);
                setTimeout(()=>{
                  let x=Math.floor(Math.random()*3);
                if(x==0)
                {
                    tie+=1;
                    move.innerHTML='Computer chose stone and User chose stone';
                }
                else if(x==1)
                {
                    lose+=1;
                    move.innerHTML='Computer chose paper and User chose stone';

                }
                else
                {
                    win+=1;
                    move.innerHTML='Computer chose scissor and User chose stone';

                }  
                },2100);
                
            }            
        });
        paper.addEventListener('click',()=>{
            if(flag==1 && chk!=0)
            {
                console.log('paper');
                flag=0;
                move.innerHTML='';
                user.classList.add('animation_user');
                comp.classList.add('animation_comp');
                setTimeout(() => {
                    flag=1;
                user.classList.remove('animation_user');
                comp.classList.remove('animation_comp');
                }, 2000);
                setTimeout(()=>{
                    let x=Math.floor(Math.random()*3);
                if(x==0)
                {
                    win+=1;
                    move.innerHTML='Computer chose stone and User chose paper';

                }
                else if(x==1)
                {
                    tie+=1;
                    move.innerHTML='Computer chose paper and User chose paper';

                }
                else
                {
                    lose+=1;
                    move.innerHTML='Computer chose scissor and User chose paper';

                }
                },2100);
                
            }            
        });
        scissor.addEventListener('click',()=>{
            if(flag==1 && chk!=0)
            {
                console.log('scissor');
                move.innerHTML='';
                flag=0;
                user.classList.add('animation_user');
                comp.classList.add('animation_comp');
                setTimeout(() => {
                    flag=1;
                user.classList.remove('animation_user');
                comp.classList.remove('animation_comp');
                }, 2000);
                setTimeout(()=>{
                    let x=Math.floor(Math.random()*3);
                if(x==0)
                {
                    lose+=1;
                    move.innerHTML='Computer chose stone and User chose scissor';

                }
                else if(x==1)
                {
                    win+=1;
                    move.innerHTML='Computer chose paper and User chose scissor';

                }
                else
                {
                    tie+=1;
                    move.innerHTML='Computer chose scissor and User chose scissor';

                }
                },2100);
                
            }            
        })
    },50);

});



