test = {

    init : function() {
        var form = document.createElement('form');
        form.method = "post";
        form.action = "#";
        form.className = "pure-form";
        document.body.appendChild(form);
    },

    addHeading : function(text) {
        var heading = document.createElement("h1");
        heading.innerText = text;
        document.forms[0].appendChild(heading);
    },

    createQuestionsList : function() {
        var orderedList = document.createElement("ol");
        document.forms[0].appendChild(orderedList);
    },

    addQuestion : function(text) {
        var listItem = document.createElement("li");
        listItem.innerText = text;
        var list = document.querySelector("ol");
        list.appendChild(listItem);
    },

    addAnswer : function(order, name, text) {
        var input = document.createElement("input");
        input.type = "checkbox";
        input.name = name;
        input.value = text;
        var answer = document.createTextNode(text);
        var label = document.createElement("label");
        label.appendChild(input);
        label.appendChild(answer);
        label.className = "pure-checkbox";
        var question = document.querySelector("ol li:nth-child(" + order + ")");
        question.appendChild(label);
    },

    addSubmitButton : function() {
        var submit = document.createElement("input");
        submit.type = "submit";
        submit.value = "Проверить мои результаты";
        submit.className = "pure-button pure-button-primary";
        document.forms[0].appendChild(submit);
    },

    createTest : function(heading, questions, variants) {
        this.init();
        this.addHeading(heading);
        this.createQuestionsList(questions);
        for (var i = 1; i <= questions; i++) {
            this.addQuestion("Вопрос №" + i);
            for (var j = 1; j <= variants; j++) {
                this.addAnswer(i, "q" + i, "Вариант ответа №" + j);
            }
        }
        this.addSubmitButton();
    }
}

test.createTest("Тест по программированию", 3, 3);
