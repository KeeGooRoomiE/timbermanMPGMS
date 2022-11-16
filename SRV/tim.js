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


    client.on('create_player', (data) => {
        data = JSON.parse(data);
	if (data.user_id != null)
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
				console.log(`--Игрок ${data.user_id} НЕ найден создаю нового`);
					player = new Player({
					socket: client,
					online: 1,
					user_id: data.user_id,
					room_id: data.room_id
				});
	 
			
			/*
			if (isfdoor1)
			{
				rooms.push(player);
			}else if (isfdoor2)
			{
				rooms.push(player);
			}
			*/
			
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

		if (rooms.length==0)
		{
				console.log(`2*N*овая [${data.room_id}] КОМНАТА СОЗДАНА!`);
				//создаем комнату + пушаем игрока
				var roomid=0;
				rooms.push( 
					{
						rm_id: data.room_id,
						user1: {"pl_id":data.user_id,"pl_hp":3,"pl_score":0},
						user2: null,
					},
				);
				console.log(rooms);
		}else{
			console.log(rooms);
			for (i = 0; i < rooms.length; i++)
			{
				console.log(rooms[i].rm_id, data.room_id);
				if (rooms[i].rm_id == data.room_id)
				{
					console.log(`ДОБАВЛЯЕМ 2!`);
					rooms[i].user2 = 
						{
							pl_id: data.user_id,
							pl_hp: 3,
							pl_score: 0,
						};
					
					break;
				}
			}console.log(rooms);
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

/*
if (rooms.length>0)
			{
				console.log(`rooms.length>0`);
				/*
				var rms = rooms[data.room_id]; // console.log(rms); // GOODok
				var rmsdat = rms.rm_id
				console.log(rmsdat);
				/*
				
					var rm = rooms[1];
					//var rmid = rooms[[i].rm_id]
					
					console.log(rm);
				
				
				
				  console.log('111')
					console.log(rooms.length)
					
					console.log(rooms)
			  for (i = 0; i < rooms.length; i++)
			  {
				  console.log('aaaaaa')
					console.log(rooms[i])
					if (rooms[i] == undefined)
					{
						continue
					}
				  if (rooms[i].rm_id == data.room_id)
				  {
					  //var isfdoor1 = false;
					  //var isfdoor2 = false;
					  if (rooms[i].user1 == null)
					  {
						  //isfdoor1 = true;
						
						rooms[i].user1.push( // дополняем игроку-победителю выйгрышный тип данных в массив (A)
							{
								pl_id: data.user_id,
								pl_hp: 3,
								pl_score: 0,
							},
						);
						
						  console.log(`+1++ Вы игрокомID [${data.user_id}] заняли комнату [${data.room_id}]`);
						  break;
					  }else if (rooms[i].user2 == null)
					  {
						  //isfdoor2 = true;
						  //rooms[i].user1.push(player);
						  rooms[i].user2.push( // дополняем игроку-победителю выйгрышный тип данных в массив (A)
							{
								pl_id: data.user_id,
								pl_hp: 3,
								pl_score: 0,
							},
						);
						  console.log(`+2++ Вы игрокомID [${data.user_id}] заняли комнату [${data.room_id}]`);
						  break;
					  }else
					  {
						  console.log(`*!* КОМНАТА [${data.room_id}] ЗАНЯТА! (как ты сюда попал дружище?) `);
						  break;
					  }
				  }else{
						console.log(`1*N*овая [${data.room_id}] КОМНАТА СОЗДАНА!`);
						//создаем комнату + пушаем игрока
						roomid++;
						rooms[roomid] = [];
						rooms[roomid].push( 
							{
								rm_id: data.room_id,
								user1: {"pl_id":data.user_id,"pl_hp":3,"pl_score":0},
								user2: null,
							},
						);
					console.log(rooms[roomid]);
					break;
					}
			  }
			  
			}else{
				console.log(`2*N*овая [${data.room_id}] КОМНАТА СОЗДАНА!`);
				//создаем комнату + пушаем игрока
				roomid++;
				rooms[roomid] = [];
				rooms[roomid].push( 
					{
						rm_id: data.room_id,
						user1: {"pl_id":data.user_id,"pl_hp":3,"pl_score":0},
						user2: null,
					},
				);
						console.log(rooms[roomid]);
			}
			*/