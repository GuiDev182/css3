var y,n=0,ny=0,rotYINT;

        function rotateYDIV(){
            y=document.getElementById("dv1");
            clearInterval(rotYINT);
            rotYINT=setInterval("startYRotate()",10);
        }

        function startYRotate(){
            ny=ny+1;
            y.style.transform="rotateY(" + ny + "deg)";
            if (ny==180 || ny>=360){
                clearInterval(rotYINT);
                if(ny>=360){ny=0}
            }
        }