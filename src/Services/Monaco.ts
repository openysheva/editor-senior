import * as monaco from 'monaco-editor';


import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter } from 'react-router-dom';

const defaultModelValue = `import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter } from 'react-router-dom';

/* Уровень Senior */

/*
    После того, как вы верно решите задачи, вы получите QR-код,
    который необходимо показать на стойке Raiffeisen DGTL для получения подарка.
*/

/* Для получения QR-кода необходимо записать в константу userName ваш никнейм */

const userName = '';

/* Задача № 1 */

/* 
    Напишите метод, который принимает в качестве аргумента площадку для строительства
    банковского кластера 10 * 10 и возвращает true,
    если у него допустимое расположение банков, и false в противном случае.

    Аргумент гарантированно будет двумерным массивом 10 * 10. 
    Элементами в массиве являются числа: 0, если клетка свободна, и 1, если она занята банком.

    Правила размещения как в игре «Морской бой». 
    Должен быть один центральный банк (размер 4 ячейки),
    2 международных банка (размер 3),
    3 федеральных (размер 2)
    и 4 микрокредитные организации (размер 1).

    Никакие дополнительные банки в кластер не допускаются, недостающих тоже не должно быть.
    Банки на поле должны занимать прямую линию, не может быть расположения по диагонали и с изгибом. 
    Банк не может перекрывать или контактировать с любым другим банком ни за край, ни за угол.
*/

const validateBattlefield = field => {
    // ваш код...
}

/* Задача № 2 */

/*
    Правила подъема лифта в офисе РайффайзенБанка

    Лифт только поднимается или опускается!
    На каждом этаже есть кнопки вызова лифта ВВЕРХ и ВНИЗ (кроме верхнего и первого этажей,
    на которых есть только ВНИЗ и ВВЕРХ соответственно).
    Лифт никогда не меняет направление до тех пор, пока больше не останется людей, желающих войти / выйти
    в том направлении, в котором он уже движется.

    Пустой лифт пытается быть умным.

    Например,
    Если он шел вверх, он может продолжить движение вверх, чтобы собрать человека
    на верхнем этаже, желающего спуститься.
    Если он шел вниз, он может продолжить вниз, чтобы собрать человека с нижнего этажа,
    желающего подняться.
    Лифт рассчитан на максимальную вместимость людей.
    При вызове лифт остановится на этаже, даже если он заполнен, хотя, если кто-то не сойдет,
    никто другой не сможет войти!
    Если лифт пустой и никто не ждет, он вернется на первый этаж.

    Правила людей

    Люди находятся в «очередях», которые соответствуют их порядку прибытия, чтобы дождаться лифта.
    Все люди могут нажимать кнопки вызова лифта ВВЕРХ / ВНИЗ
    Входить в него могут только люди, идущие в том же направлении, что и лифт.
    Вход осуществляется в порядке «очереди», но те, кто не может войти,
    не блокируют тех, кто позади них может
    Если человек не может войти в полный лифт,
    он снова нажмет кнопку вызова лифта ВВЕРХ / ВНИЗ после того, как он уйдет без них.

    Задача: 

    Доставьте всех людей на те этажи, на которые они хотят попасть, соблюдая правила лифта и правила людей.
    Верните список всех этажей, на которых остановился лифт (в порядке посещения!)

    ПРИМЕЧАНИЕ: 

    Лифт всегда начинается на первом этаже (и люди, ожидающие на первом этаже, могут войти сразу)
    Первым аргументом подаются массивы, состоящие из желающих войти в зависимости от этажа
    Второй аргумент - вместимость лифта

    Пример
    queues = [
    [2], // 0 этаж
    [], // 1 этаж
    [], // 2 этаж
    [], // 3 этаж
    [], // 4 этаж
    ];

    raiffLift(queues, 5) // вернет [0, 2, 0]
*/

const raiffLift = (queues, limit) => {
   // ваш код...
}

/* Задача № 3 */

/*
    Для массива numberArray из положительных целых чисел его элементы должны быть преобразованы,
    выполняя над ними следующую операцию столько раз, сколько потребуется:
    если numberArray[i] > numberArray[j], то numberArray[i] = numberArray[i] - numberArray[j].
    При этом последовательность не важна.

    Когда преобразование больше невозможно, верните сумму элементов (наименьшую из возможных).

    Пример: solution([6, 9, 21]) #-> 9
*/

const solution = numberArray => {
    // ваш код...
}

/* Не изменяйте эту часть кода для корректной работы */

export const GlobalStyle = createGlobalStyle\`
    html, body, #app {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
\`;

const Button = styled.button\`
    width: 120px;
    height: 40px;
    cursor: pointer;
    color: #2B2D33;
    background-color: #FEE600;
    border: 0;
    border-radius: 8px;
\`;

const Container = styled.div\`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
\`;

const Logo = styled.img\`
    width: 200px;
    height: 100px;
\`;

const App = () => {
    return (
        <HashRouter>
            <GlobalStyle />
            <Container>
                <Logo src="https://www.raiffeisen.ru/common/new/images/logo-raif.svg" />
            </Container >
        </HashRouter>
    );
}

window['exercise'] = {
    task1: validateBattlefield,
    task2: raiffLift,
    task3: solution,
    userName
};

ReactDOM.render(<App />, document.getElementById('app'));`

export const Monaco = new class {

    editor?: monaco.editor.IStandaloneCodeEditor;
    model?: monaco.editor.ITextModel;

    constructor() {
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: false
        });

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            jsx: monaco.languages.typescript.JsxEmit.React,
            allowNonTsExtensions: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            esModuleInterop: true,
        });

        ['react', 'react-dom', 'styled-components', 'history', 'react-router', 'react-router-dom'].forEach(this.loaStaticdDTS);
    }

    loaStaticdDTS = async (libName: string) => {
        const response = await fetch(`/${libName}.d.ts`)
        const dts = await response.text();
        monaco.editor.createModel(dts, 'typescript', monaco.Uri.parse(`file:///node_modules/@types/${libName}/index.d.ts`));
        monaco.languages.typescript.typescriptDefaults.addExtraLib(dts, `file:///node_modules/@types/${libName}/index.d.ts`);
    }

    createEditor = (ref: HTMLDivElement): monaco.editor.IStandaloneCodeEditor | null => {
        if (ref) {
            this.createModel();
            this.editor = monaco.editor.create(ref, {
                theme: "vs-dark",
                automaticLayout: true,
                model: this.model
            }) as monaco.editor.IStandaloneCodeEditor;
            return this.editor;
        }
        return null;
    }

    createModel = () => {
        this.model = this.model ?? monaco.editor.createModel(defaultModelValue, 'typescript', monaco.Uri.parse(`file:///index.tsx`));
        monaco.editor.setModelLanguage(this.model, 'typescript');
    }

    updateModel = (data: string) => {
        this.model?.setValue(data ?? '');
    }

}