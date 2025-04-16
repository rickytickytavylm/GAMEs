class Game {
    constructor() {
        this.stats = {
            selfEsteem: 50,
            independence: 50,
            happiness: 50
        };
        this.currentScene = 0;
        this.consecutiveGoodAnswers = 0;
        this.consecutiveBadAnswers = 0;
        this.gameEnded = false;
        this.totalGoodAnswers = 0;
        this.totalBadAnswers = 0;
        this.totalNeutralAnswers = 0;

        this.scenes = [
            {
                text: "Вы встречаетесь с другом, который постоянно просит у вас денег. Как вы поступите?",
                choices: [
                    {
                        text: "Дать деньги, чтобы не обидеть",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Вежливо отказать и предложить помощь в поиске работы",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Согласиться, но попросить вернуть в следующий раз",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Ваш партнер настаивает на том, чтобы знать пароль от вашего телефона. Как поступите?",
                choices: [
                    {
                        text: "Дать пароль, чтобы доказать доверие",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Объяснить важность личного пространства",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Дать пароль, но потом изменить его",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Родственник без предупреждения приходит к вам домой. Ваши действия?",
                choices: [
                    {
                        text: "Впустить, хотя у вас были другие планы",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Вежливо объяснить, что нужно предупреждать заранее",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Впустить, но намекнуть на неудобство",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Коллега постоянно перебивает вас во время разговора. Как поступите?",
                choices: [
                    {
                        text: "Молча принять такое поведение",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Вежливо указать на некорректное поведение",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Начать перебивать в ответ",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Друг критикует ваш внешний вид. Ваша реакция?",
                choices: [
                    {
                        text: "Принять критику и изменить свой стиль",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Объяснить, что вам комфортно с вашим стилем",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Проигнорировать замечание",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Партнер требует доступ к вашим социальным сетям. Как поступите?",
                choices: [
                    {
                        text: "Дать доступ, чтобы не вызывать подозрений",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Отказать, объяснив право на приватность",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Создать отдельный аккаунт для общего доступа",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Родственники настаивают на частых визитах. Ваши действия?",
                choices: [
                    {
                        text: "Соглашаться на все визиты",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Установить комфортную для вас частоту встреч",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Придумывать отговорки",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Друг просит одолжить крупную сумму денег. Как поступите?",
                choices: [
                    {
                        text: "Одолжить, даже если это создаст вам трудности",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Честно объяснить, почему не можете помочь",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Одолжить меньшую сумму",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Коллега берет кредит на ваше имя. Как поступите?",
                choices: [
                    {
                        text: "Согласиться помочь коллеге",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Категорически отказать, объяснив риски",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Предложить другие варианты помощи",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Партнер контролирует ваше расписание. Ваши действия?",
                choices: [
                    {
                        text: "Позволить это ради спокойствия",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Обсудить проблему контроля",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Скрывать часть своих планов",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Близкий человек читает ваши личные сообщения без разрешения. Ваша реакция?",
                choices: [
                    {
                        text: "Сделать вид, что ничего не заметили",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Обсудить нарушение личных границ",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Поставить пароль без объяснений",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "На семейном празднике вас заставляют есть больше, чем вы хотите. Как поступите?",
                choices: [
                    {
                        text: "Есть через силу, чтобы не обидеть",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Вежливо отказаться, объяснив свои чувства",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Взять еду и незаметно оставить",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Друг постоянно опаздывает на встречи с вами. Как поступите?",
                choices: [
                    {
                        text: "Продолжать терпеливо ждать",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Обсудить, как это влияет на вас",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Тоже начать опаздывать",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Партнер настаивает на совместном отпуске, хотя вы хотите отдохнуть с друзьями. Как поступите?",
                choices: [
                    {
                        text: "Отменить планы с друзьями",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Отстоять свое право на личное время",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Предложить компромисс с двумя поездками",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Коллега распространяет слухи о вас. Как поступите?",
                choices: [
                    {
                        text: "Игнорировать ситуацию",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Поговорить с коллегой и установить границы",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Начать распространять ответные слухи",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Родственник критикует ваш выбор карьеры. Как отреагируете?",
                choices: [
                    {
                        text: "Усомниться в своем выборе",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Уверенно отстоять свой выбор",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Сменить тему разговора",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Друг постоянно обесценивает ваши достижения. Как поступите?",
                choices: [
                    {
                        text: "Перестать делиться успехами",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Обсудить, как его слова влияют на вас",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Начать обесценивать его достижения",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Партнер настаивает на том, чтобы вы сменили работу. Как поступите?",
                choices: [
                    {
                        text: "Согласиться ради сохранения отношений",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Отстоять свое право на выбор карьеры",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Пообещать подумать об этом позже",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Вас заставляют участвовать в семейном бизнесе. Как поступите?",
                choices: [
                    {
                        text: "Согласиться, чтобы не разочаровать семью",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Вежливо отказаться, объяснив свои планы",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Согласиться на частичное участие",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            },
            {
                text: "Друг требует немедленных ответов на сообщения. Как поступите?",
                choices: [
                    {
                        text: "Всегда отвечать сразу",
                        effect: () => this.handleChoice("bad"),
                        type: "bad"
                    },
                    {
                        text: "Объяснить свои границы в общении",
                        effect: () => this.handleChoice("good"),
                        type: "good"
                    },
                    {
                        text: "Включить беззвучный режим",
                        effect: () => this.handleChoice("neutral"),
                        type: "neutral"
                    }
                ]
            }
        ];

        this.totalQuestions = 20;
        this.init();
    }

    init() {
        this.dialogText = document.getElementById('dialog-text');
        this.choicesContainer = document.getElementById('choices');
        this.character = document.getElementById('character');
        this.emotions = document.getElementById('emotions');

        // Устанавливаем начальный текст
        this.dialogText.textContent = "Добро пожаловать в игру 'Путь к свободе'. Здесь вы столкнетесь с различными ситуациями, связанными с созависимостью, и сможете увидеть последствия своих решений.";
        
        this.updateStatsDisplay();
        setTimeout(() => {
            this.showScene();
            this.updateCharacter("neutral");
        }, 2000);
    }

    updateCharacter(mood, animation = null) {
        const emojis = {
            happy: "🤗",        // Радостный человек
            neutral: "🧍‍♀️",    // Нейтральная поза
            sad: "🤦‍♀️",        // Расстроенный человек
            confident: "💁‍♀️",  // Уверенный человек
            thinking: "🤔"      // Задумчивый человек
        };
        
        this.character.textContent = emojis[mood];
        this.character.className = `character ${animation || ''}`;
        
        // Сброс анимации после её завершения
        if (animation) {
            setTimeout(() => {
                this.character.className = 'character';
            }, 500);
        }
    }

    showScene() {
        if (this.currentScene >= this.totalQuestions) {
            this.showEndGame(this.stats.independence > 70 ? "success" : "needsImprovement");
            return;
        }

        const scene = this.scenes[this.currentScene];
        this.dialogText.textContent = scene.text;
        
        this.choicesContainer.innerHTML = '';
        scene.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice';
            button.textContent = choice.text;
            button.onclick = () => this.makeChoice(index);
            this.choicesContainer.appendChild(button);
        });
    }

    makeChoice(choiceIndex) {
        if (this.gameEnded) return;
        
        const scene = this.scenes[this.currentScene];
        const choice = scene.choices[choiceIndex];
        choice.effect();
        
        this.currentScene++;
        setTimeout(() => this.showScene(), 1000);
    }

    updateStats(changes) {
        Object.keys(changes).forEach(stat => {
            const key = stat.charAt(0).toLowerCase() + stat.slice(1);
            this.stats[key] = Math.max(0, Math.min(100, this.stats[key] + changes[stat]));
        });
        this.updateStatsDisplay();
    }

    updateStatsDisplay() {
        Object.keys(this.stats).forEach(stat => {
            const element = document.getElementById(stat.replace(/([A-Z])/g, '-$1').toLowerCase());
            if (element) {
                const valueSpan = element.querySelector('.stat-value');
                if (valueSpan) {
                    valueSpan.textContent = this.stats[stat];
                    element.classList.add('effect');
                    setTimeout(() => element.classList.remove('effect'), 500);
                }
            }
        });
    }

    showEmotion(emoji) {
        this.emotions.textContent = emoji;
        this.emotions.style.opacity = 1;
        setTimeout(() => {
            this.emotions.style.opacity = 0;
        }, 1000);
    }

    handleChoice(type) {
        switch(type) {
            case "good":
                this.updateStats({ selfEsteem: +10, independence: +10, happiness: +5 });
                this.showEmotion("✨");
                this.updateCharacter("confident", "bounce");
                this.consecutiveGoodAnswers++;
                this.consecutiveBadAnswers = 0;
                this.totalGoodAnswers++;
                break;
            case "bad":
                this.updateStats({ selfEsteem: -10, independence: -5, happiness: -5 });
                this.showEmotion("😔");
                this.updateCharacter("sad", "shake");
                this.consecutiveBadAnswers++;
                this.consecutiveGoodAnswers = 0;
                this.totalBadAnswers++;
                break;
            case "neutral":
                this.updateStats({ selfEsteem: -5, independence: 0, happiness: 0 });
                this.showEmotion("😐");
                this.updateCharacter("neutral", "shake");
                this.consecutiveGoodAnswers = 0;
                this.consecutiveBadAnswers = 0;
                this.totalNeutralAnswers++;
                break;
        }

        this.checkGameEnd();
    }

    checkGameEnd() {
        if (this.gameEnded) return;

        if (this.consecutiveGoodAnswers >= 5) {
            this.showEndGame("success");
        } else if (this.consecutiveBadAnswers >= 3) {
            this.showEndGame("needsImprovement");
        }
    }

    showEndGame(result) {
        this.gameEnded = true;
        const modal = document.createElement('div');
        modal.className = 'end-game-modal';
        
        const content = document.createElement('div');
        content.className = 'modal-content';

        const message = document.createElement('h2');
        const description = document.createElement('p');
        const stats = document.createElement('div');
        stats.className = 'final-stats';
        
        const totalScore = this.totalGoodAnswers * 10 - this.totalBadAnswers * 5;
        const percentage = Math.round((this.totalGoodAnswers / this.totalQuestions) * 100);

        let resultText = "";
        if (percentage >= 80) {
            resultText = "Превосходно! У вас отличное понимание личных границ.";
            content.classList.add('success');
        } else if (percentage >= 60) {
            resultText = "Хороший результат! Вы на правильном пути.";
            content.classList.add('success');
        } else {
            resultText = "Есть над чем поработать. Это нормально - мы все учимся!";
            content.classList.add('needs-improvement');
        }

        message.textContent = `Ваш результат: ${percentage}%`;
        description.textContent = resultText;

        stats.innerHTML = `
            <p>Правильных ответов: ${this.totalGoodAnswers} из ${this.totalQuestions}</p>
            <p>Набрано баллов: ${totalScore}</p>
            <p>Итоговые показатели:</p>
            <ul>
                <li>Самооценка: ${this.stats.selfEsteem}%</li>
                <li>Независимость: ${this.stats.independence}%</li>
                <li>Счастье: ${this.stats.happiness}%</li>
            </ul>
            <div class="result-explanation">
                <p><strong>Что это означает:</strong></p>
                <p>80-100%: Отличное понимание личных границ и умение их отстаивать</p>
                <p>60-79%: Хорошее понимание границ с возможностью улучшения</p>
                <p>0-59%: Рекомендуется больше внимания уделить изучению темы личных границ</p>
            </div>
        `;

        const button = document.createElement('button');
        button.className = 'choice';
        button.textContent = 'Начать заново';
        button.onclick = () => this.restartGame();

        content.appendChild(message);
        content.appendChild(description);
        content.appendChild(stats);
        content.appendChild(button);
        modal.appendChild(content);
        document.body.appendChild(modal);
    }

    restartGame() {
        this.stats = {
            selfEsteem: 50,
            independence: 50,
            happiness: 50
        };
        this.currentScene = 0;
        this.consecutiveGoodAnswers = 0;
        this.consecutiveBadAnswers = 0;
        this.gameEnded = false;
        this.totalGoodAnswers = 0;
        this.totalBadAnswers = 0;
        this.totalNeutralAnswers = 0;
        
        const modal = document.querySelector('.end-game-modal');
        if (modal) {
            modal.remove();
        }

        this.updateStatsDisplay();
        this.showScene();
        this.updateCharacter("neutral");
    }
}

// Запуск игры
window.onload = () => {
    new Game();
}; 