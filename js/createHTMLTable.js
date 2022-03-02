function createHTMLTable() {
    const HTMLElements = {};

    HTMLElements.table = document.querySelector('table');



    for (let i = 0; i < 7; i++) {
        HTMLElements.table.appendChild(createTR(i));
    }


    function createTR(i) {

        const tr = document.createElement('tr');


        for (let j = 0; j < 7; j++) {
            tr.appendChild(createTD(j, i));
        }

        return tr;

    }

    function createTD(j, i) {
        const td = document.createElement('td');
        const indexOfTd = j + (i * 10);
        td.setAttribute('id', indexOfTd);

        return td;
    }
}

createHTMLTable()