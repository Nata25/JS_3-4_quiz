data = {
    heading: "Тест по программированию",

    questions: [

        {
            title: "Вопрос 1",
            answers: {
                1: "Вариант ответа 1",
                2: "Вариант ответа 2",
                3: "Вариант ответа 3"}
        },

        {
            title: "Вопрос 2",
            answers: {
                4: "Вариант ответа 1",
                5: "Вариант ответа 2",
                6: "Вариант ответа 3"}
        },

        {
            title: "Вопрос 3",
            answers: {
                7: "Вариант ответа 1",
                8: "Вариант ответа 2",
                9: "Вариант ответа 3"}
        }
    ],

    submit: "Проверить мои результаты"
}

test = {

    init: function() {
        var form = document.createElement('form');
        form.method = "post";
        form.action = "#";
        form.className = "pure-form";
        var script = document.getElementsByTagName("script")[0];
        document.body.insertBefore(form, script);
    },

    addHeading: function(text) {
        var heading = document.createElement("h1");
        heading.innerText = text;
        document.forms[0].appendChild(heading);
    },

    createQuestionsList: function() {
        var orderedList = document.createElement("ol");
        document.forms[0].appendChild(orderedList);
    },

    addQuestion: function(text) {
        var listItem = document.createElement("li");
        listItem.innerText = text;
        var list = document.querySelector("ol");
        list.appendChild(listItem);
    },

    addAnswer: function(order, name, text) {
        var input = document.createElement("input");
        input.type = "checkbox";
        input.name = name;
        // input.value = text;
        var answer = document.createTextNode(text);
        var label = document.createElement("label");
        label.appendChild(input);
        label.appendChild(answer);
        label.className = "pure-checkbox";
        var question = document.querySelector("ol li:nth-child(" + order + ")");
        question.appendChild(label);
    },

    addSubmitButton: function(message) {
        var submit = document.createElement("input");
        submit.type = "submit";
        submit.value = message;
        submit.className = "pure-button pure-button-primary";
        document.forms[0].appendChild(submit);
    },

    createTest: function(heading, questions) {
        this.init();
        this.addHeading(heading);
        var numOfQuestions = questions.length;
        this.createQuestionsList(numOfQuestions);

        for (i = 0; i < numOfQuestions; i++) {
            this.addQuestion(questions[i].title);
            for (variant in questions[i].answers) {
                this.addAnswer(i + 1, variant, questions[i].answers[variant]);
            }
        }
        this.addSubmitButton(data.submit);
    }
}

test.createTest(data.heading, data.questions);
