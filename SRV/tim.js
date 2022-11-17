const server = require('http').createServer()
const io = require('socket.io')(server, { cors: { origin: '*' } });

const port = 3003;

server.listen(port, (err) => {
    if (err) throw err
    console.log(`Listening on port ${port}`);
});

var players = []; //Массив всех игроков
var rooms = []; //Массив всех игровых комнат


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
console.log(`Проверка игрока [${player.user_id}] на валидность`);
		
	var isfoundst = false;

	  for (i = 0; i < players.length; i++)
	  {
		  if (players[i].user_id == player.user_id && players[i].room_id == player.room_id)
		  {
		  isfoundst = true;
		  break;
		  }
	  }
	  if (isfoundst)
			{
			console.log(`Игрок ${player.user_id} найден на сервере СУЩЕСТВУЕТ!++`);
			// Делеес
			//SQL
			// Дел
			
			//API
			//api
			//API
			
			//удаляем игрока из списка	
			console.log(`Игрок ${players[i].user_id} Кикнут общим таймингом`);
			//client.broadcast.emit('destroy_player', players[i].toString());
			players.splice(players.indexOf(players[i]), 1);
			}
}

function re_find_rm( room_id, user_id ) {
	console.log(`Таймер 0 - повторный поиск комнаты запущен`);
	var find_rm = false;
	for (i = 0; i < rooms.length; i++)
			{
				if (rooms[i].rm_id == room_id)
				{
					find_rm = true;
					console.log(`** НАШЛИ комнату - ДОБАВЛЯЕМ 2го игрока в комнату: ${room_id} ?`);
					if (rooms[i].user2 == null)
					{
						
						player = new Player({
							socket: client,
							online: 1,
							user_id: user_id,
							room_id: room_id
						});
						players.push(player);
						client.emit('create_player', player.toString());
						client.broadcast.emit('create_player_other', player.toString());
						
						// Создание всех остальных для себя, НЕ включая себя, потому что мы уже создали себя
							for (let i in players) {
								if (players[i].user_id !== data.user_id && players[i].room == data.room) {
									client.emit('create_player_other', players[i].toString());
								}
							}
							
						rooms[i].user2 = 
							{
								pl_id: player.user_id,
								pl_hp: 3,
								pl_score: 0,
							};
						

				
						console.log(`+ИГРОК СОЗДАН и ДОБАВЛЕН в КОМНАТУ!`);
					}else{
						console.log(`*!* КОМНАТА [${room_id}] ЗАНЯТА! (как ты сюда попал дружище?) `);// Дисконнектед!
					}
					console.log(rooms);
					break;
				}
				if (i == rooms.length-1 && find_rm == false)
				{
					console.log(`*НЕ НАШЛИ комнату - *N*овАя [${room_id}] КОМНАТА СОЗДАНА!`);
					//создаем комнату + пушаем игрока
					//var roomid=0;
					
					player = new Player({
						socket: client,
						online: 1,
						user_id: user_id,
						room_id: room_id
					});
					players.push(player);
					client.emit('create_player', player.toString());
					
					rooms.push( 
						{
							rm_id: player.room_id,
							user1: {"pl_id":player.user_id,"pl_hp":3,"pl_score":0},
							user2: null,
						},
					);
					
					console.log(`+ИГРОК СОЗДАН и ДОБАВЛЕН в КОМНАТУ!`);
				
					console.log(rooms);
					
					break;
				}
			}

}

    client.on('create_player', (data) => {
        data = JSON.parse(data);
	if (data.user_id != null && data.room_id != null)
	{	
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
				
					console.log(`--Игрок ${data.user_id} НЕ найден`);
					var find_rm = false;
					for (i = 0; i < rooms.length; i++)
					{
						//console.log(`${rooms[i].rm_id} =?= ${data.room_id}`);
						if (rooms[i].rm_id == data.room_id)
						{
							find_rm = true;
							console.log(`** НАШЛИ комнату - ДОБАВЛЯЕМ 2го игрока: ${data.user_id} в комнату: ${data.room_id} ?`);
							if (rooms[i].user2 == null)
							{
								rooms[i].user2 = 
									{
										pl_id: data.user_id,
										pl_hp: 3,
										pl_score: 0,
									};
									
							player = new Player({
							socket: client,
							online: 1,
							user_id: data.user_id,
							room_id: data.room_id
						});
						players.push(player);
						client.emit('create_player', player.toString());
						client.broadcast.emit('create_player_other', player.toString());
						// Создание всех остальных для себя, НЕ включая себя, потому что мы уже создали себя
							for (let i in players) {
								if (players[i].user_id !== data.user_id && players[i].room == data.room) {
									client.emit('create_player_other', players[i].toString());
								}
							}
							
						console.log(`++Игрок ${data.user_id} +СОЗДАН и ДОБАВЛЕН+`);
							}else{
								console.log(`*!* КОМНАТА [${data.room_id}] ЗАНЯТА! (как ты сюда попал дружище?) `);
								// Дисконнектед!
							}
							console.log(rooms);
							break;
						}
						if (i == rooms.length-1 && find_rm == false)
							{
								console.log(`Комната ${data.room_id} не найдена - запускапем таймер (через 3 сек) на повторный поиск`);
								setTimeout(re_find_rm, 3000, data.room_id, data.user_id);
								break;
								
							}
					}
					}else{
						console.log(`++Игрок ${data.user_id} найден возвращаю.`);
						players[i].online=1
						//client.emit('create_player', player.toString()); // TODO
						/*
						for (let i in players) {
						if (players[i].user_id !== data.user_id) {
								client.emit('create_player_other', players[i].toString());
								
								
							}
						}
						*/
					
				}
		}else{
			//Игроков 0: Комнат 0: Cоздаю первого/первую
			player = new Player({
					socket: client,
					online: 1,
					user_id: data.user_id,
					room_id: data.room_id
			});
			
			client.emit('create_player', player.toString());
			players.push(player);
			
			console.log(`--Комнат 0: *N*0вая [${data.room_id}] КОМНАТА СОЗДАНА!`);
				//создаем комнату + пушаем игрока
				//var roomid=0;
				rooms.push( 
					{
						rm_id: data.room_id,
						user1: {"pl_id":data.user_id,"pl_hp":3,"pl_score":0},
						user2: null,
					},
				);
				console.log(`++Игрок ${data.user_id} +СОЗДАН и ДОБАВЛЕН в КОМНАТУ+`);
				console.log(rooms);
		}
		

	}
    });

	

    client.on('disconnect', () => {
		if (player != null)
		{
			player.online=0;
		}
    });
});