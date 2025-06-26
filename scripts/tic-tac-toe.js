import { updateArrayItemByPropertyName } from './functions.js';

const userNameInput = document.querySelector('#userName');
const continueButton = document.querySelector('#continue-button');
const symbolInput = document.querySelector('#symbol');
const formTitle = document.querySelector('.form-title');
const form = document.querySelector('#form');
let registryStep = 1;
let players = [
    {
        id: 1,
        name: 'Player 1',
        symbol: 'circle',
        hasBeenSet: false,
    },
    {
        id: 2,
        name: 'Player 2',
        symbol: 'cross',
        hasBeenSet: false,
    },
];

// User name input validation
userNameInput.addEventListener('input', () => {
    checkUserNameInputForErrors();
});

// Symbol input validation
symbolInput.addEventListener('change', () => {
    checkSymbolInputForDuplicateSelection();
});

// Checks form for changes and sets current player hasBeenSet property
form.addEventListener('change', () => {
    let currentPlayer = players.find((item) => item.id === registryStep);

    currentPlayer = {
        ...currentPlayer,
        hasBeenSet: true
    }

    players = updateArrayItemByPropertyName(players, currentPlayer);
})

// Set player data on continue click
continueButton.addEventListener('click', (e) => {
    e.preventDefault();
    let player = players.find((item) => item.id === registryStep);

    player = {
        ...player,
        name: userNameInput.value,
        symbol: symbolInput.value,
    };
    players = updateArrayItemByPropertyName(players, player);
    registryStep++;
    prepareFormForNextPlayer();
    checkSymbolInputForDuplicateSelection();
});


/**
 * Sets form default values for next player
 */
function prepareFormForNextPlayer() {
    const nextPlayer = players.find((item) => item.id === registryStep);

    userNameInput.value = '';
    userNameInput.classList.remove('input--success');
    symbolInput.classList.remove('input--success');
    formTitle.innerHTML = nextPlayer.name;
    symbolInput.value = nextPlayer.symbol;
}

/**
 * Checks symbol input for duplicate values
 */
function checkSymbolInputForDuplicateSelection() {
    const currentPlayer = players.find((item) => item.id === registryStep);

    if (currentPlayer.hasBeenSet) {
        const symbolValue = symbolInput.value;
        const symbolInputParent = symbolInput.parentElement.parentElement;
        const isSymbolAlreadySelected = players
            .filter((item) => item.hasBeenSet)
            .some(
                (item) =>
                    item.id !== currentPlayer.id && item.symbol === symbolValue
            );

        if (isSymbolAlreadySelected) {
            const inputErrorElement = document.createElement('p');

            inputErrorElement.classList.add('input-error-message', 'show');
            symbolInput.classList.add('input--invalid');
            symbolInput.classList.remove('input--success');
            continueButton.setAttribute('disabled', true);
            inputErrorElement.innerHTML = 'This value is already selected';
            symbolInputParent.appendChild(inputErrorElement);
        } else {
            const inputErrorMessage = symbolInputParent.querySelector(
                '.input-error-message'
            );

            symbolInput.classList.remove('input--invalid');
            symbolInput.classList.add('input--success');
            continueButton.removeAttribute('disabled');
            if (inputErrorMessage) {
                inputErrorMessage.remove();
            }
        }
        checkUserNameInputForErrors();
    }
}

function checkUserNameInputForErrors() {
    const inputErrorMessage = userNameInput.parentElement.querySelector(
        '.input-error-message'
    );
    const inputValue = userNameInput.value.trim(); // Remove trailing or leading spaces
    const currentPlayer = players.find((item) => item.id === registryStep);
    const isNameDuplicated = players
        .filter((item) => item.hasBeenSet)
        .some(
            (item) => item.id !== currentPlayer.id && item.name === inputValue
        );
    const inputError =
        inputValue.length === 0
            ? { error: 'required' }
            : inputValue.length < 4
            ? { error: 'minlength' }
            : isNameDuplicated
            ? { error: 'duplicated' }
            : null;

    formTitle.innerHTML = inputValue;
    if (inputError) {
        userNameInput.classList.add('input--invalid');
        userNameInput.classList.remove('input--success');
        continueButton.setAttribute('disabled', true);
        if (inputError.error === 'required') {
            inputErrorMessage.innerHTML = 'User name is required';
        }
        if (inputError.error === 'minlength') {
            inputErrorMessage.innerHTML =
                'User name should be at least 4 character long';
        }
        if (inputError.error === 'duplicated') {
            inputErrorMessage.innerHTML = 'This user name already exists';
        }
        inputErrorMessage.classList.add('show');
    } else {
        userNameInput.classList.remove('input--invalid');
        userNameInput.classList.add('input--success');
        continueButton.removeAttribute('disabled');
        inputErrorMessage.classList.remove('show');
        inputErrorMessage.innerHTML = '';
    }
}
