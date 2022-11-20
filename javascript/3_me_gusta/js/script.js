var counter = {
    "like-1": 0,
    "like-2": 0,
    "like-3": 0,
};
function countLike(id){
    counter[id]++;
    document.getElementById(id).innerText = counter[id];
    // document.querySelector(".counter").innerText = counter;
};