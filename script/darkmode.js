ok=1;
        function dark()
        {
            if(ok===1)
            {
                ok=0;
                document.getElementById("header").style.backgroundColor="#3F3F3F";
                document.getElementById("site-logo").src="imagini/site-logo-dark.png";
                document.getElementById("lightmodePicture").src="imagini/sun.png";
                document.getElementById("body").style.color="white";
                document.querySelectorAll(".preview-ai").forEach(el => {
                    el.style.backgroundColor = "#52504f";
                });
                document.querySelectorAll(".textBox-ai").forEach(el => {
                    el.style.backgroundColor = "#52504f";
                });
                document.querySelectorAll(".preview-ai-link").forEach(el => {
                    el.style.color = "white";
                });
                
            }
            else
            {
                ok=1;
                document.getElementById("header").style.backgroundColor="rgb(233, 233, 233)";
                document.getElementById("site-logo").src="imagini/site-logo.png";
                document.getElementById("lightmodePicture").src="imagini/dark_mode_half_moon_icon_176153.png";
                document.getElementById("body").style.color="black";
                document.querySelectorAll(".preview-ai").forEach(el => {
                    el.style.backgroundColor = "rgb(220, 220, 220)";
                });
                document.querySelectorAll(".textBox-ai").forEach(el => {
                    el.style.backgroundColor = "rgb(220, 220, 220)";
                });
                document.querySelectorAll(".preview-ai-link").forEach(el => {
                    el.style.color = "black";
                });
                
            }
        }