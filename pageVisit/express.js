const count = document.getElementById('count');

incrementVisitsCount();

function incrementVisitsCount() {
    let visits;
    if (!localStorage.getItem('visits')) {
        localStorage.setItem('visits', 1)
    }
    visits = +localStorage.getItem('visits');
    const incrementCount = visits+1;
    localStorage.setItem('visits',incrementCount);
    count.innerText = localStorage.getItem('visits',incrementCount);
    // console.log(localStorage.getItem('visits',incrementCount));
}