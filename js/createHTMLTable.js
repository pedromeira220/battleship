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
        let indexOfTd = j + (i * 10);

        if (indexOfTd < 10) {
            indexOfTd = "0" + indexOfTd;
        } else {
            indexOfTd = indexOfTd.toString();
        }


        td.setAttribute('id', indexOfTd);

        return td;
    }
}