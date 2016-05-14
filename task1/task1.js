function changeColor(){
                var block=document.getElementById('wrap').children;
                var color=["red","blue","green"];
                var x=Math.floor(Math.random()*9);
                var y=Math.floor(Math.random()*3);
                block[x].style.background=color[y];
                console.log("第"+[x+1]+"个盒子的颜色是"+color[y]);
                }
                setInterval("changeColor()",1000);