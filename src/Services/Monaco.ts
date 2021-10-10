import * as monaco from 'monaco-editor';


import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter } from 'react-router-dom';

const defaultModelValue = `import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter } from 'react-router-dom';

/* Уровень Middle */

/*
    После того, как вы верно решите задачи, вы получите QR-код,
    который необходимо показать на стойке Raiffeisen DGTL для получения доступа
    к следующему уровню сложности.
*/

/* Для получения QR-кода необходимо записать в константу userName ваш никнейм */

const userName = '';

/* Задача № 1 */

/* 
    В кассе закончились деньги, а до инкассации еще долго.
    Стоит очередь людей, желающих купить раритетные монеты по 25 долларов за штуку.
    У всех банкноты по 100, 50 или 25 долларов.
    Кассир хочет продать монеты каждому человеку в этой очереди.

    Может ли он продать билет каждому и отдать сдачу, если у него изначально нет денег
    и он продает монеты строго в порядке очереди?

    Верните YES, если кассир может продать монету каждому человеку и отдать сдачу с имеющимися у него
    в данный момент счетами.
    
    В противном случае верните NO.
*/

const tickets = peopleInLine => {
    // ваш код...
}

/* Задача № 2 */

/*
    В базе данных банке много телефонных номеров.
    Когда вы начинаете вводить телефонный номер – вам предлагаются дополнительные.

    Цель - сохранить телефонные номера, сохраняя вместе одни и те же цифры, тем самым уменьшая общий размер.
    Ваша функция примет в качестве аргументов массив телефонных номеров. (По крайней мере, из одного элемента);
    Номер телефона состоит как минимум из одной цифры и может содержать до 20 цифр.
    Вы должны вернуть количество элементов, содержащихся в вашем графике.

    Вы не должны изменять входной массив.

    Пример:

    У вас есть номера: 0123456789 0123987654 0123987456 2365498756 2365498765

    Граф будет выглядеть так

    4 - 5 - 6 - 7 - 8 - 9           
    0 - 1 - 2 - 3 <
                    \            4 - 5 - 6
                      9 - 8 - 7 < 
                                 6 - 5 - 4
      
                                   6 - 5
    2 - 3 - 6 - 5 - 4 - 9 - 8 - 7 <
                                   5 - 6


    Итого - 31 символ.
*/

const phoneNumber = phoneNumbers => {
   // ваш код...
}

/* Задача № 3 */

/*
    Придумайте кодовое слово для вашей карты, и если оно совпадает с предыдущим, а вы хотите такое же,
    то просто добавьте единицу в конце. Напишите функцию, которая увеличивает строку, создавая новую.

    Если строка уже оканчивается числом, число следует увеличить на 1.
    Если строка не оканчивается цифрой, то цифру 1 нужно добавить к новой строке.

    Примеры:
        foo -> foo1
        foo0042 -> foo0043
        foo099 -> foo100
*/

const incrementString = incomeString => {
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
    task1: tickets,
    task2: phoneNumber,
    task3: incrementString,
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