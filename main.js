var names = [];

function submit() {
    var name1 = document.getElementById("name_1").value;
    var name2 = document.getElementById("name_2").value;
    var name3 = document.getElementById("name_3").value;
    var name4 = document.getElementById("name_4").value;

    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);
    console.log(names);
    document.getElementById("display").innerHTML = names;
    
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
}

function sort() {
    names.sort();
    console.log(names);
    document.getElementById("display").innerHTML = names;
}
