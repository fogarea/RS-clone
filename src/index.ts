import counterView from "view/counter.view";

const root = document.querySelector('#root');

if (root instanceof HTMLElement) counterView.init(root);
