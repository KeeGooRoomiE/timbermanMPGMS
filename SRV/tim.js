const server = require('http').createServer()
const io = require('socket.io')(server, { cors: { origin: '*' } });

const port = 3003;

server.listen(port, (err) => {
    if (err) throw err
    console.log(`Listening on port ${port}`);
});

var players = []; //Массив всех игроков

class Player {
    constructor(data) {
        this.socket = data.socket;
		this.online = data.online; // На связи ли игрок
		this.user_id = data.user_id; // MP id - у каждого игрока он свой (БД MP)
        this.room_id = data.room_id; // MP id - у каждого игрока (1 и 2) решивший посетить иговую комнату он одинакоый
		
		/*
        this.battle = data.battle; // MP id - у каждого игрока он всегда разный
        this.username = data.username;
        this.amount = data.amount;
        this.start_timestamp = data.start_timestamp;
		
		this.skin = data.skin;
        this.rmskin = data.rmskin;
        this.pos = data.pos;
        this.hp = data.hp;
		*/
    }

    toString() {
        return JSON.stringify(this, this.replacer);
    }

    replacer(key, value) {
        if (key == "socket") return undefined;
        else return value;
    }
}
/*
class score {
	constructor(pl,score) {
        this.plsc = plsc;
        this.score = score;
    }
	toString() {
        return JSON.stringify(this);
    }
}

class plives {
	constructor(pl,score) {
        this.plh = plh;
        this.score = score;
    }
	toString() {
        return JSON.stringify(this);
    }
}
*/

io.on('connection', (client) => {
    var player;

	function kickPl(player) {
	console.log(`**Проверка игрока [${player.user_id}] на активность`);
	var isfoundst = false;
	for (i = 0; i < players.length; i++)
	{
		if (players[i].user_id == player.user_id)
		{
			if (players[i].online == 0)
			{
				isfoundst = true;
				console.log(`*--*Игрок ${player.user_id} офлайн!`);
				break;
			}
		}
	}
		if (isfoundst)
			{
				console.log(`*++*Игрок ${player.user_id} найден на сервере УДАЛЯЮ ЖИВОЙ!`);
				//client.broadcast.emit('destroy_player', players[i].toString());	
				players.splice(players.indexOf(players[i]), 1);
			}
	
	}
	
    client.on('create_player', (data) => {
        data = JSON.parse(data);

	if (players.length > 0)
	{
		var isfound = false;
		for (i = 0; i < players.length; i++)
		{
		  if (players[i].user_id == data.user_id)
		  {
			isfound = true;
			break;
		  }
		}
		if (!isfound)
			{
			console.log(`--Игрок ${data.user_id} НЕ найден создаю нового`);
				player = new Player({
				socket: client,
				online: 1,
				user_id: data.user_id,
				room_id: data.room_id
			});
 
        players.push(player);
		
		/*
        client.emit('create_player', player.toString());
        client.broadcast.emit('create_player_other', player.toString());
        for (let i in players) {
            if (players[i].user_id !== data.user_id) {
					client.emit('create_player_other', players[i].toString());
				}
			}
		*/
			}else{
				console.log(`++Игрок ${data.user_id} найден возвращаю.`);
				///////
				player = new Player({
					socket: client,
					online: 1,
					user_id: players[i].user_id,
					room_id: players[i].room_id
				});
				players[i].online=1
				
				/*
				client.emit('create_player', player.toString());
				for (let i in players) {
				if (players[i].user_id !== data.user_id) {
						client.emit('create_player_other', players[i].toString());
						
						
					}
				}
				*/
			
			}
    }else{
			console.log(`--Игроков 0 создаю ${data.user_id}`);
		    player = new Player({
				socket: client,
				online: 1,
				user_id: data.user_id,
				room_id: data.room_id
        });
		
        players.push(player);
		/*
        client.emit('create_player', player.toString());
        client.broadcast.emit('create_player_other', player.toString());
        for (let i in players) {
            if (players[i].user_id !== data.user_id) {
					client.emit('create_player_other', players[i].toString());
				}
			}
		*/
	}
    });

    client.on('disconnect', () => {
	player.online=0;
	setTimeout(kickPl, 15000,player);
    });
});
