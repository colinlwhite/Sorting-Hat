const firstButton = document.getElementById('firstSortButton');

firstButton.addEventListener('click', () => {
    let domString = `<form id="toClear">
    <div class="form-group">
    <label for="exampleInputEmail1">StudentName</label>
    <input id="input" type="text" class="form-control" id="stendt-name" aria-describedby="emailHelp" placeholder="Student Name">
    </div>
    <button id="sort" type="submit" class="btn btn-primary">Submit</button>
    </form>`;
    printToDom(domString, 'form');
    sort();
})

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const sort = () => {
    const sortButton = document.getElementById('sort');
     sortButton.addEventListener('click', (e) => {
       e.preventDefault();
        const schools = [
                        "Gryffindor",
                        "Hufflepuff",
                        "Ravenclaw", 
                        "Slytherin"
                        ];
        const i = Math.floor(Math.random() * 4);
        const studentInput = document.getElementById('input').value;
        document.getElementById('card').innerHTML += `<div class="card w-25 m-2">
                                                        <div class="card-body">
                                                        <h5 class="card-title">${studentInput}</h5>
                                                        <p class="card-text">${schools[i]}</p>
                                                        <button id="expel" href="#" class="btn btn-danger deleteButton">Expel</button>
                                                        </div>
                                                    </div>`
        clearForm(); 
    })
    };

    const clearForm = () => {
        const newVal = document.getElementById('toClear').reset();
        return newVal;
    };