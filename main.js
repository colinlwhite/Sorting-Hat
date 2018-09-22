const firstButton = document.getElementById('firstSortButton');

firstButton.addEventListener('click', () => {
    let domString = `<form>
    <div class="form-group">
    <label for="exampleInputEmail1">StudentName</label>
    <input id="input" type="text" class="form-control" id="stendt-name" aria-describedby="emailHelp" placeholder="Student Name">
    </div>
    <button id="sort" type="submit" class="btn btn-primary">Submit</button>
    </form>`;
    printToDom(domString, 'form');
})

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}


