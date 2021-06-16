Student_array=[];
function submit(){
    for(var i=1;i<=4;i++){
        var name_1=document.getElementById("Name"+i).value;
        Student_array.push(name_1)
    
    }
        display_Array=[];
        for(var j=0;j<Student_array.length; j++){
            display_Array.push("<h2>Name-"+ Student_array[j]+"</h2>")
        }
    document.getElementById("Output").innerHTML=display_Array
    document.getElementById("Output_b").innerHTML=display_Array.join(" ")
    document.getElementById("Button_submit").style.display="none"
    document.getElementById("Button_sort").style.display="inline-block"
}
function sorting(){
    Student_array.sort();
    document.getElementById("Output").innerHTML=Student_array
}