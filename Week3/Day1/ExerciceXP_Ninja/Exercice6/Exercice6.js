
function createCalendar(year, month) {
    // Créer le tableau
    const table = document.createElement("table");
    table.id = "calendar";
    table.style.borderCollapse = "collapse";
    table.style.textAlign = "center";
    table.style.fontFamily = "Arial";

    
    const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    for (let day of days) {
        const th = document.createElement("th");
        th.textContent = day;
        th.style.border = "1px solid black";
        th.style.padding = "10px";
        headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    
    const tbody = document.createElement("tbody");

    
    const firstDay = new Date(year, month - 1, 1);
    const startDay = (firstDay.getDay() + 6) % 7;

    const daysInMonth = new Date(year, month, 0).getDate();

    let day = 1;

    
    while (day <= daysInMonth) {
        const row = document.createElement("tr");

        for (let col = 0; col < 7; col++) {
            const td = document.createElement("td");
            td.style.border = "1px solid black";
            td.style.padding = "10px";

            if (tbody.children.length === 0 && col < startDay) {
                td.textContent = "";
            }
            
            else if (day <= daysInMonth) {
                td.textContent = day;
                day++;
            }

            row.appendChild(td);
        }

        tbody.appendChild(row);
    }

    table.appendChild(tbody);

    
    document.body.appendChild(table);
}


createCalendar(2012, 9);
