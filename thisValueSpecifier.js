"use strict";

class ThisValueSpecifier {
  constructor() {
    this.questions = [
      "Мы находимся внутри функции?",
      "Мы находимся внутри стрелочной функции?",
      "Эта функция вызвана как конструктор (с помощью оператора new)?",
      "Эта функция создана с помощью метода bind?",
      "Эта функция передана куда-то в качестве колбэка или обработчика?",
      "Эта функция вызвана с помощью метода apply или call?",
      "Эта функция получена как значение свойства объекта и сразу же вызвана?",
      "Код выполняется в строгом режиме? ('use strict', ES6 модуль)",
    ];
    this.answers = [
      "this равен глобальному объекту.",
      "Значение this такое же, как и в функции на уровень выше (т.е. содержащей данную). Вернитесь на предыдущий шаг и повторите алгоритм для неё. Если же функция не содержится ни в какой другой, this — глобальный объект.",
      "this ссылается на новый объект, находящийся «в процессе конструкции».",
      "Значение this равняется значению первого аргумента, который мы передали в метод bind при создании данной функции.",
      "Одному Господу известно, чему будет равен this при её вызове. Идите читать документацию по той штуке, которая её станет вызывать.",
      "В таком случае this равняется первому аргументу, переданному соответствующему методу.",
      "this равняется вышеупомянутому объекту.",
      "this равняется undefined",
    ];
    this.algorithmSource =
      "https://habr.com/ru/articles/464163/#:~:text=%D1%81%D1%82%D0%B0%D0%BD%D0%B5%D1%82%20%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE%20%D0%BB%D1%83%D1%87%D1%88%D0%B5.-,%D0%9A%D0%B0%D0%BA%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20this,-%D0%97%D0%B4%D0%B5%D1%81%D1%8C%20%D1%8F%20%D0%BF%D0%BE%D1%81%D1%82%D0%B0%D1%80%D0%B0%D1%8E%D1%81%D1%8C";
  }

  restart(messageBox, buttons, restartButton) {
    messageBox.textContent = this.questions[0];
    messageBox.style.backgroundColor = "";

    buttons[0].style.backgroundColor = "green";
    buttons[1].style.backgroundColor = "red";
    buttons.forEach((element) => {
      element.style.cursor = "auto";
      element.disabled = false;
    });
    restartButton.remove();
  }

  suggestRestart(mnemonic, messageBox) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((element) => {
      element.style.backgroundColor = "gray";
      element.style.cursor = "not-allowed";
      element.disabled = true;
    });

    messageBox.style.backgroundColor = "green";
    messageBox.style.color = "white";

    const buttonsContainer = document.getElementById("buttonsContainer");
    const restartButton = document.createElement("div");
    restartButton.innerHTML = mnemonic;
    restartButton.style.display = "inline-block";
    restartButton.style.width = "35px";
    restartButton.style.height = "35px";
    restartButton.style.lineHeight = "30px";
    restartButton.style.borderRadius = "17px";
    restartButton.style.backgroundColor = "orange";
    restartButton.style.cursor = "pointer";
    restartButton.onmouseover = function () {
      this.style.backgroundColor = "#FF8C00";
    };
    restartButton.onmouseout = function () {
      this.style.backgroundColor = "orange";
    };
    restartButton.addEventListener("click", () =>
      this.restart(messageBox, buttons, restartButton)
    );
    buttonsContainer.appendChild(restartButton);
  }

  evaluateAnswers(buttonTextContent) {
    const messageBox = document.getElementById("messageBox");

    if (
      buttonTextContent === "ДА" &&
      messageBox.textContent === this.questions[0]
    ) {
      messageBox.textContent = this.questions[1];
    } else if (
      buttonTextContent === "НЕТ" &&
      messageBox.textContent === this.questions[0]
    ) {
      messageBox.textContent = this.answers[0];
      this.suggestRestart("&#8635;", messageBox);
    } else if (
      buttonTextContent === "ДА" &&
      messageBox.textContent === this.questions[1]
    ) {
      messageBox.textContent = this.answers[1];
      this.suggestRestart("&#8593;", messageBox);
    } else if (
      buttonTextContent === "НЕТ" &&
      messageBox.textContent === this.questions[1]
    ) {
      messageBox.textContent = this.questions[2];
    } else if (
      buttonTextContent === "ДА" &&
      messageBox.textContent === this.questions[2]
    ) {
      messageBox.textContent = this.answers[2];
      this.suggestRestart("&#8635;", messageBox);
    } else if (
      buttonTextContent === "НЕТ" &&
      messageBox.textContent === this.questions[2]
    ) {
      messageBox.textContent = this.questions[3];
    } else if (
      buttonTextContent === "ДА" &&
      messageBox.textContent === this.questions[3]
    ) {
      messageBox.textContent = this.answers[3];
      this.suggestRestart("&#8635;", messageBox);
    } else if (
      buttonTextContent === "НЕТ" &&
      messageBox.textContent === this.questions[3]
    ) {
      messageBox.textContent = this.questions[4];
    } else if (
      buttonTextContent === "ДА" &&
      messageBox.textContent === this.questions[4]
    ) {
      messageBox.textContent = this.answers[4];
      this.suggestRestart("&#8635;", messageBox);
    } else if (
      buttonTextContent === "НЕТ" &&
      messageBox.textContent === this.questions[4]
    ) {
      messageBox.textContent = this.questions[5];
    } else if (
      buttonTextContent === "ДА" &&
      messageBox.textContent === this.questions[5]
    ) {
      messageBox.textContent = this.answers[5];
      this.suggestRestart("&#8635;", messageBox);
    } else if (
      buttonTextContent === "НЕТ" &&
      messageBox.textContent === this.questions[5]
    ) {
      messageBox.textContent = this.questions[6];
    } else if (
      buttonTextContent === "ДА" &&
      messageBox.textContent === this.questions[6]
    ) {
      messageBox.textContent = this.answers[6];
      this.suggestRestart("&#8635;", messageBox);
    } else if (
      buttonTextContent === "НЕТ" &&
      messageBox.textContent === this.questions[6]
    ) {
      messageBox.textContent = this.questions[7];
    } else if (
      buttonTextContent === "ДА" &&
      messageBox.textContent === this.questions[7]
    ) {
      messageBox.textContent = this.answers[7];

      this.suggestRestart("&#8635;", messageBox);
    } else if (
      buttonTextContent === "НЕТ" &&
      messageBox.textContent === this.questions[7]
    ) {
      messageBox.textContent = this.answers[0];
      this.suggestRestart("&#8635;", messageBox);
    }
  }

  buildApp() {
    const appСontainer = document.createElement("div");
    appСontainer.style.padding = "25px 5px";

    const headerСontainer = document.createElement("div");
    headerСontainer.style.fontSize = "1.5em";
    headerСontainer.style.fontWeight = "bold";
    headerСontainer.style.textAlign = "center";
    headerСontainer.innerText = "Определитель значения this в Java Script";
    appСontainer.appendChild(headerСontainer);

    const messageBox = document.createElement("div");
    messageBox.id = "messageBox";
    messageBox.style.borderBottom = "1px solid white";
    messageBox.style.padding = "25px 10px";
    messageBox.style.fontWeight = "bold";
    messageBox.innerText = this.questions[0];
    appСontainer.appendChild(messageBox);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttonsContainer";
    buttonsContainer.style.borderTop = "1px solid black";
    buttonsContainer.style.textAlign = "center";

    const button = document.createElement("button");
    button.style.margin = "15px 10px";
    button.style.padding = "5px";
    button.style.width = "42px";
    button.style.color = "white";

    const buttonYes = button.cloneNode(true);
    buttonYes.style.backgroundColor = "green";
    buttonYes.innerText = "ДА";
    buttonsContainer.appendChild(buttonYes);
    buttonYes.addEventListener("click", (e) => {
      this.evaluateAnswers(e.target.textContent);
    });

    const buttonNo = button.cloneNode(true);
    buttonNo.style.backgroundColor = "red";
    buttonNo.innerText = "НЕТ";
    buttonsContainer.appendChild(buttonNo);
    buttonNo.addEventListener("click", (e) => {
      this.evaluateAnswers(e.target.textContent);
    });

    appСontainer.appendChild(buttonsContainer);

    const link = document.createElement("a");
    link.style.fontSize = "0.8rem";
    link.setAttribute("href", this.algorithmSource);
    link.setAttribute("target", "_blank");
    link.innerText = "Первоисточник алгоритма";
    appСontainer.appendChild(link);

    return appСontainer;
  }

  render() {
    const appRoot = document.getElementById("root");
    appRoot.appendChild(this.buildApp());
  }
}

const app = new ThisValueSpecifier();
app.render();
