const player1 = {
    name: 'Liukang',
    hp: 30,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['kuku', 'bgbg', 'sdsd'],
    attack: function () {
        console.log(this.name + ' fight...');
    },
};

const player2 = {
    name: 'Kitana',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['kuku2', 'bgbg2', 'sdsd2'],
    attack: function () {
        console.log(this.name + ' fight...');
    },
};

function createPlayer(playerClass, player) {
    const $player = document.createElement('div');
    /* $player1.classList.add('player1'); */
    $player.classList.add(playerClass);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);

    // const $root = document.querySelector('.root');
    // $root.appendChild($player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $character = document.createElement('div');
    $character.classList.add('character');

    $player.appendChild($progressbar);
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${player['hp']}%`;
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player['name'];

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = player['img'];
    $character.appendChild($img);
}

createPlayer('player1', player1);
createPlayer('player1', player2);
// createPlayer('player2', player2['name'], player2['hp']);
