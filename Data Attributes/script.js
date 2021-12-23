let lis = document.querySelectorAll("li");
console.log("this is output from query selector ",lis); // this should be node list

let lis_arr = Array.from(lis);
console.log("This is the output after converting it to array",lis_arr); // this should be normal array

lis_arr.forEach((ele)=>{
    ele.addEventListener("click", function(e){
        if(ele.dataset.change === "true"){
            let prev = ele.innerHTML
            ele.innerHTML=ele.dataset.text;
            ele.dataset.text = prev;
        }
    })
})