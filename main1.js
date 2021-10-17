const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    name: 'Liukang',
    hp: 100,
    player: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['kuku', 'bgbg', 'sdsd'],
    attack: function () {
        console.log(this.name + ' fight...');
    },
};

const player2 = {
    name: 'Kitana',
    hp: 100,
    player: 2,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['kuku2', 'bgbg2', 'sdsd2'],
    attack: function () {
        console.log(this.name + ' fight...');
    },
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj['player']);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj['hp'] + '%';
    $name.innerText = playerObj['name'];
    $img.src = playerObj['img'];

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector(
        '.player' + player.player + ' .life'
    );
    // player.hp -= 20;
    player.hp -= Math.ceil(Math.random() * 20);

    $playerLife.style.width = player.hp + '%';
    if (player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = player.hp + '%';
        
    }
    return player.hp;
}

function announceWinner(player) {
    const winnerText;
    if (player.hp === 0) {
        if (player1.hp === player2.hp) {
            winnerText = 'is Tie!!!';
        } else
        if (player1.hp < player2.hp) {
             winnerText = player2.name + ' is Tie!!!';
        }
        else {
            winnerText = player1.name + ' is Tie!!!';
        }
        return winnerText;
    }

    $randomButton.disabled = true;
    $arenas.appendChild(playerWin(player.name));
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';
    return $loseTitle;
}

function playerWin(player) {
    const $winnerTitle = createElement('div', 'loseTitle');

    announceWinner(player);
    $winnerTitle.innerText = winnerText;
    return $winnerTitle;
}

$randomButton.addEventListener('click', function () {
    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
