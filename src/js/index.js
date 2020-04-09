import '../css/styles.scss';
import logo from '../assets/logo.jpg';

const textComponent = () => {
    const elH1 = document.createElement('h1');
    elH1.innerHTML = "Olá Mundo";
    elH1.classList.add('title');
    return elH1;
}

const ImgComponent = () => {
    const elImg = new Image(300, 150);
    elImg.src = logo;
    return elImg;
}

document.body.appendChild(textComponent());
document.body.appendChild(ImgComponent());
