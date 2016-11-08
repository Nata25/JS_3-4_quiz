var test = {
    createHeading : function() {
        var heading = document.createElement("h1");
        document.body.appendChild(heading);
        heading.innerText = "Тест по программированию";
    }
}

test.createHeading();
