function darkLightMode(){
    document.addEventListener('DOMContentLoaded', function(){
        const toggleBtn = document.getElementById('dark-mode');
        const body = document.body;

        if(localStorage.getItem("theme") === "dark"){
            body.classList.add("dark-mode");
            toggleBtn.style.color = "white";
        }

        toggleBtn.addEventListener("click", function(){
            body.classList.toggle("dark-mode");

            if(body.classList.contains("dark-mode")){
                localStorage.setItem("theme", "dark");
                toggleBtn.style.color = "white";
            }else{
                localStorage.setItem("theme", "light");
                toggleBtn.style.color = "black";
            }
        })
    })
}

export default darkLightMode