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
        this.hp = data.hp;
        this.score = data.score;
        this.tree = data.tree;
		
		/*
        this.battle = data.battle; // MP id - у каждого игрока он всегда разный
        this.username = data.username;
        this.amount = data.amount;
        this.start_timestamp = data.start_timestamp;
		
		this.skin = data.skin;
        this.rmskin = data.rmskin;
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

class Trigger {
	constructor(data) {
        this.room_id = data.room_id;
		this.iright = data.iright;
    }
	toString() {
        return JSON.stringify(this);
    }
}

class Rtimer {
	constructor(data) {
        this.room_id = data.room_id;
    }
	toString() {
        return JSON.stringify(this);
    }
}

class Rtime {
	constructor(data) {
        this.time = data.time;
        this.room_id = data.room_id;
    }
	toString() {
        return JSON.stringify(this);
    }
}

class Datax {
	constructor(data) {
		this.score = data.score;
		this.room_id = data.room_id;
		this.hp = data.hp;
    }
	toString() {
        return JSON.stringify(this);
    }
}
class Dataarrtree {
	constructor(data) {
		this.treearr0 = data.treearr0;
		this.treearr1 = data.treearr1;
		this.treearr2 = data.treearr2;
		this.treearr3 = data.treearr3;
		this.treearr4 = data.treearr4;
		this.treearr5 = data.treearr5;
		this.treearr6 = data.treearr6;
		this.treearr7 = data.treearr7;
		this.treearr8 = data.treearr8;
		this.treearr9 = data.treearr9;
		this.room_id = data.room_id;
    }
	toString() {
        return JSON.stringify(this);
    }
}

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
			console.log(`AFTER?players = ${players}`);
			}
}

function start_time( room_id , user_id) {
	for (i = 0; i < rooms.length; i++)
		{
			if (rooms[i].rm_id == room_id)
			{
				if (rooms[i].rm_time !== 0)
				{
					rooms[i].rm_time -=1000;
					setTimeout(start_time, 1000, room_id, user_id);
					console.log(`rm_time = ${rooms[i].rm_time/1000}`);
				}else{

				  ////////////////////////
				var cenok = 2;
				
				for (i = 0; i < players.length; i++)
				  {
					  if (players[i].room_id == room_id)
					  {
						  /// cenok
						  cenok--;
						  setTimeout(kickPl,10,players[i])
						  //players.splice(players.indexOf(players[i]), 1);
						  //console.log(`AFTER?players = ${players}`);
					  }
				  }
				  	if (cenok == 0)
						  {
							for (i = 0; i < rooms.length; i++)
								{
									if (rooms[i].rm_id == room_id)
									{
										rooms.splice(rooms.indexOf(rooms[i]), 1);
									}
								}
						  }	
				  ////////////////////////
				}
			}
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
							room_id: room_id,
							hp: 3,
							score: 0,
							tree: [0, 0, 0, 0, 1, 0, 0, 1, 1, 1]
						});
						xdatarrtree = new Dataarrtree({
						room_id: room_id,
						treearr0: 0,
						treearr1: 0,
						treearr2: 0,
						treearr3: 0,
						treearr4: 1,
						treearr5: 0,
						treearr6: 0,
						treearr7: 1,
						treearr8: 1,
						treearr9: 1
						});
						client.emit('go_room', xdatarrtree.toString());
						players.push(player);
						console.log(`++Игрокov тепреь ${players}`);
						client.emit('create_player', player.toString());
						client.broadcast.emit('create_player_other', player.toString());
						
						// Создание всех остальных для себя, НЕ включая себя, потому что мы уже создали себя
							for (let i in players) {
								if (players[i].user_id !== data.user_id && players[i].room_id == data.room_id) {
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
						room_id: room_id,
						hp: 3,
						score: 0,
						tree: [0, 0, 0, 0, 1, 0, 0, 1, 1, 1]
					});
					xdatarrtree = new Dataarrtree({
					room_id: room_id,
					treearr0: 0,
					treearr1: 0,
					treearr2: 0,
					treearr3: 0,
					treearr4: 1,
					treearr5: 0,
					treearr6: 0,
					treearr7: 1,
					treearr8: 1,
					treearr9: 1
					});
					client.emit('go_room', xdatarrtree.toString());
					players.push(player);
					console.log(`++Игрокov тепреь ${players}`);
					client.emit('create_player', player.toString());
					
					rooms.push( 
						{
							rm_id: player.room_id,
							rm_time: 380000, //180000
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

    client.on('hp_send', (data) => {
        data = JSON.parse(data);
		for (let i in players)
		{
			if (players[i].user_id == player.user_id)
				{
					if (players[i].hp !== 1)
					{
					players[i].hp = data.hp;
					}else{
					players[i].hp = 0;
					
					for (let i in rooms)
						{
							if (rooms[i].rm_id == player.room_id)
							{
								rooms[i].rm_time = 0;
							}
						}
						
					}
					
				}
		}
    });
	
	client.on('score_send', (data) => {
        data = JSON.parse(data);
		for (let i in players)
		{
			if (players[i].user_id == player.user_id)
				{
					players[i].score = data.score;
				}
		}
    });
	
    client.on('create_player', (data) => {
        data = JSON.parse(data);
	if (data.user_id != null && data.room_id != null)
	{	
		if (players.length > 0)
		{
			console.log(`* * * * *Игроков всего ${players}`);
			
			var isfound = false;
			for (i = 0; i < players.length; i++)
			{
			  if (players[i].user_id == data.user_id)
			  {
				  
				console.log(`:: :: :: :: players[i].tree ${players[i].tree}`); //0,0,0,0,1,0,0,1,1,1 after [0, 1, 0, 1, 0, 2, 0, 1, 0, 2]
				global.myhpp  = players[i].hp;
				global.myscore = players[i].score;
				
				//global.tree = "[0, 0, 2, 0, 1, 0, 0, 1, 1, 1]"
				global.tree = "["+players[i].tree[1]+", "+players[i].tree[4]+", "+players[i].tree[7]+", "+players[i].tree[10]+", "+players[i].tree[13]+", "+players[i].tree[16]+", "+players[i].tree[19]+", "+players[i].tree[22]+", "+players[i].tree[25]+", "+players[i].tree[28]+"]";
				
				players[i].tree =  "["+players[i].tree[1]+", "+players[i].tree[4]+", "+players[i].tree[7]+", "+players[i].tree[10]+", "+players[i].tree[13]+", "+players[i].tree[16]+", "+players[i].tree[19]+", "+players[i].tree[22]+", "+players[i].tree[25]+", "+players[i].tree[28]+"]";
				
						
				console.log(`* * * * * players.tree ${players[i].tree}`);
				console.log(`* * * * * global.tree ${global.tree}`);
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
							room_id: data.room_id,
							hp: 3,
							score: 0,
							tree: [0, 0, 0, 0, 1, 0, 0, 1, 1, 1]
						});
						
						xdatarrtree = new Dataarrtree({
						room_id: data.room_id,
						treearr0: 0,
						treearr1: 0,
						treearr2: 0,
						treearr3: 0,
						treearr4: 1,
						treearr5: 0,
						treearr6: 0,
						treearr7: 1,
						treearr8: 1,
						treearr9: 1
						});
						client.emit('go_room', xdatarrtree.toString());
						players.push(player);
						console.log(`++Игрокov тепреь ${players}`);
						client.emit('create_player', player.toString());
						client.broadcast.emit('create_player_other', player.toString());
						
						console.log(`++Игрок ${data.user_id} +СОЗДАН и ДОБАВЛЕН+`);
						
						setTimeout(start_time, 1, data.room_id ,data.user_id);
						// Создание всех остальных для себя, НЕ включая себя, потому что мы уже создали себя
								for (let i in players) {
									if (players[i].user_id !== data.user_id && players[i].room_id == data.room_id) {
										client.emit('create_player_other', players[i].toString());
									}
								}
							}else{
								console.log(`*!* КОМНАТА [${data.room_id}] ЗАНЯТА! (как ты сюда попал дружище?) `);
								// Дисконнектед!
							}
							console.log(rooms);
							break;
						}
						if (i == rooms.length-1 && find_rm == false)
							{
								console.log(`Комната ${data.room_id} не найдена - запускапем таймер (через 2 сек) на повторный поиск`);
								setTimeout(re_find_rm, 2000, data.room_id, data.user_id);
								break;
								
							}
					}
					}else{
						console.log(`++Игрок ${data.user_id} найден возвращаю.`);
						
						for (let i in players)
						{
							if (players[i].user_id == data.user_id && players[i].room_id == data.room_id)
							{
								client.broadcast.emit('disconnect_player', players[i].toString());
							}
						}
						//players.splice(players.indexOf(player), 1);
						console.log(`* * * * [PLPL_3_treearr]: ${global.tree}`);
						player = new Player({
								socket: client,
								online: 1,
								user_id: data.user_id,
								room_id: data.room_id,
								hp: global.myhpp,
								score: global.myscore,
								tree: global.tree
						});
						xdatarrtree = new Dataarrtree({
						room_id: data.room_id,
						
						treearr0: global.tree[1],
						treearr1: global.tree[4],
						treearr2: global.tree[7],
						treearr3: global.tree[10],
						treearr4: global.tree[13],
						treearr5: global.tree[16],
						treearr6: global.tree[19],
						treearr7: global.tree[22],
						treearr8: global.tree[25],
						treearr9: global.tree[28]
						
						/*
						treearr0: 0,
						treearr1: 0,
						treearr2: 0,
						treearr3: 2,
						treearr4: 2,
						treearr5: 0,
						treearr6: 0,
						treearr7: 0,
						treearr8: 2,
						treearr9: 2
						*/
						});
						client.emit('go_room', xdatarrtree.toString());
						client.emit('create_player', player.toString());
						//players.push(player);

								// Создание всех остальных для себя, НЕ включая себя, потому что мы уже создали себя
								for (let i in players) {
									if (players[i].user_id !== data.user_id && players[i].room_id == data.room_id) {
										client.emit('create_player_other', players[i].toString());
									}
								}
						client.emit('start', "start".toString());
						
				}
		}else{
			//Игроков 0: Комнат 0: Cоздаю первого/первую
			player = new Player({
					socket: client,
					online: 1,
					user_id: data.user_id,
					room_id: data.room_id,
					hp: 3000,
					score: 0,
					tree: "[0, 0, 0, 0, 1, 0, 0, 1, 1, 1]" // TODO получаю реконектом - назанчить сохранение массива при изменении
			});
			
			xdatarrtree = new Dataarrtree({
			room_id: data.room_id,
			treearr0: 0,
			treearr1: 0,
			treearr2: 0,
			treearr3: 1,
			treearr4: 1,
			treearr5: 0,
			treearr6: 0,
			treearr7: 1,
			treearr8: 1,
			treearr9: 1
			});
			client.emit('go_room', xdatarrtree.toString());
			client.emit('create_player', player.toString());
			players.push(player);
			console.log(`++Игрокov тепреь ${players}`);
			
			console.log(`--Комнат 0: *N*0вая [${data.room_id}] КОМНАТА СОЗДАНА!`);
				//создаем комнату + пушаем игрока
				//var roomid=0;
				rooms.push( 
					{
						rm_id: data.room_id,
						rm_time: 380000, //180000
						user1: {"pl_id":data.user_id,"pl_hp":3,"pl_score":0},
						user2: null,
					},
				);
				console.log(`++Игрок ${data.user_id} +СОЗДАН и ДОБАВЛЕН в КОМНАТУ+`);
				console.log(rooms);
		}
		

	}
    });

 client.on('timer_get', (data) => {
        data = JSON.parse(data);
		
		for (let i in rooms)
		{
			if (rooms[i].rm_id == player.room_id)
				{
					time = new Rtime({
						time: (rooms[i].rm_time/1000),
						room_id: player.room_id
					});
					client.emit('timer_set', time.toString());	
				}
		}	
		
 }); 
 
 client.on('tree_send', (data) => {
        data = JSON.parse(data);
		//ПОЛУЧАЕМ массив дерева 2-го игрока
			console.log(`* * * * *2 Игроков всего ${players}`);
			console.log(`// // // //: tree_send ${data.treearr}`);
		player.tree = data.treearr; // Назначаем массив дерева в массив игрока чтобы после реконекта у него были правильные данные для продолжения игры после реконекта.
			xdatarrtree = new Dataarrtree({
			room_id: player.room_id,
			treearr0: data.treearr[1],
			treearr1: data.treearr[4],
			treearr2: data.treearr[7],
			treearr3: data.treearr[10],
			treearr4: data.treearr[13],
			treearr5: data.treearr[16],
			treearr6: data.treearr[19],
			treearr7: data.treearr[22],
			treearr8: data.treearr[25],
			treearr9: data.treearr[28]
			});
			//player.tree = data.treearr; // TODO Bug - не сохраняеться 
			for (let i in players)
			{
				if (players[i].user_id == player.user_id && players[i].room_id == player.room_id)
				{
					//players[i].tree = data.treearr;
					players[i].tree = "["+data.treearr[1]+", "+data.treearr[4]+", "+data.treearr[7]+", "+data.treearr[10]+", "+data.treearr[13]+", "+data.treearr[16]+", "+data.treearr[19]+", "+data.treearr[22]+", "+data.treearr[25]+", "+data.treearr[28]+"]";
					console.log(`* * * * [tree_send_2_PL tree]: ${player.tree}`);	
				}
			}
			console.log(`* * * * [tree_send_2_PL tree]: ${player.tree}`);	
			client.broadcast.emit('tree_set', xdatarrtree.toString()); //Отправляем массив дерева 2-го игрока
 });
 
     client.on('datax_get', (data) => {
        data = JSON.parse(data);

		for (let i in players)
		{
			if (players[i].room_id == player.room_id && players[i].user_id == player.user_id)
			{		
						
				if (players[i].score == 499)
				{
					for (let i in rooms)
					{
						if (rooms[i].rm_id == players[i].room_id)
						{
							rooms[i].rm_time = 0;
						}
					}
				}
			
				xdatax = new Datax({
					room_id: players[i].room_id,
					score: players[i].score,
					hp: players[i].hp
				});
				client.broadcast.emit('datax_set', xdatax.toString());	

				break;
			}
		}
	});
	//// Вещаем позицию игрока всем игрокам
    client.on('position_update', (data) => {
        data = JSON.parse(data);
		trigeri = new Trigger({
			room_id: player.room_id,
			iright: data.rightTrigger
		});
		
		client.broadcast.emit('position_update', trigeri.toString());				
    });

    client.on('disconnect', () => {
		if (player != null)
		{
			console.log(`++Игрок ${player.user_id} +DISCONNECTED+`);
			player.online=0;
			//players.splice(players.indexOf(player), 1);
		}
    });
});