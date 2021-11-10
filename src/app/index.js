import { onLoadPersonalInfo } from './scripts/personalInfo';
import { onLoadExperience, toggleExperience } from './scripts/experience';

// Styles SCSS (don't remove)
import './styles/styles.scss';

var addListeners = function() {
    document.getElementById("btn_hide_experience").addEventListener("click", toggleExperience);
}

window.onload = function() {
    onLoadPersonalInfo();
    onLoadExperience();

    addListeners();
};