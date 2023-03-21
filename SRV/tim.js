// Import builtin NodeJS modules to instantiate the service
const openssl = require('openssl-nodejs')
const fs = require("fs");

// Import the express modulej
const express = require("express");

// Instantiate an Express application
const app = express();

//////////
const server = require('https').createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("./key.pem"),
      cert: fs.readFileSync("./cert.pem"),
    },
    app
)
  .listen(3004, () => {
    console.log("serever is runing at port 3004");
  });
const io = require('socket.io')(server, { cors: { origin: '*' } });
//////////
const game_id = 622014;
var timestamp = Number(Math.round(Date.now()/(1000))); //Number(new Date());
var secret = "GpFKF7rWnfagdnMs5CEzaP6Y0pJkE6";

var players = []; //Массив всех игроков
var rooms = []; //Массив всех игровых комнат
var datax = []; // здесь будут храниться все убитые противники...

class Player {
    constructor(data) {
        this.socket = data.socket;
		this.online = data.online; // На связи ли игрок
		this.user_id = data.user_id; // MP id - у каждого игрока он свой (БД MP)
        this.room_id = data.room_id; // MP id - у каждого игрока (1 и 2) решивший посетить иговую комнату он одинакоый
		
		this.battle_id = data.battle_id; // MP id - у каждого игрока он всегда разный
		
        this.hp = data.hp;
        this.score = data.score;
        this.tree = data.tree;
		
		this.amount = data.amount;
        this.start_timestamp = data.start_timestamp;
		this.username = data.username;
		/*
 
		
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
console.log(`kickPl игрока [${player.username}] `);
	for (i = 0; i < players.length; i++)
	{
		if (players[i].user_id !== player.user_id && players[i].room_id == player.room_id)
		{
			global.splayer = players[i]; // массив врага 
			console.log(`(:: :: ::) массив игрока: ${player.username} [${player.hp}] / массив врага: ${splayer.username} [${splayer.hp}] `);	
			  


			/*
			datax[player.user_id] = []; // очищаем
			datax[players.user_id] = []; // очищаем
			//удаляем игрока из списка	
			console.log(`(-) Игрок ${player.username} Кикнут общим таймингом`);
			players.splice(players.indexOf(player), 1);
			console.log(`AFTER?players = ${players}`);
			rooms.splice(rooms.indexOf(players[i].room_id), 1);
			*/
			break;
		}
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
					  }
				  }
				  	if (cenok == 0)
						{
						for (i = 0; i < rooms.length; i++)
								{
									if (rooms[i].rm_id == room_id)
									{
										//////////////////////// сравнение очков , у кого больше , тот выйграл.
										for (let i in players)
										{
											if (players[i].room_id == room_id)
											{
												var fir_pl = players[0];
												var sec_pl = players[1];
											}
										}
										if (players[0].score == players[1].score) // ничья// ничья// ничья// ничья// ничья// ничья// ничья// ничья// ничья// ничья// ничья// ничья 
												{
													console.log(`ничья`);
														var ramp = Number(Number(fir_pl.amount));
													datax[fir_pl.user_id].push(
														{
															operation_type: 3,
															amount: 0,
															opponent_id: Number(fir_pl.user_id),
															comment: "draw_o_exit",
														},
													);	
													/*
													1 - plus operation
													2 - minus
													3 - draw operation
													*/
													var ramm = Number(Number(sec_pl.amount));
													datax[sec_pl.user_id].push(
														{
															operation_type: 3,
															amount: 0,
															opponent_id: Number(sec_pl.user_id),
															comment: "draw_o_exit",
														},
													);	
													//API
													//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
							////////////////////// *** POST *** //////////////////////
													var crypto = require('crypto');
													//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
													var domd5 = game_id+":"+fir_pl.user_id+":"+fir_pl.room_id+":"+fir_pl.battle_id+":"+timestamp+":"+secret;
													var hash3 = crypto.createHash('md5').update(domd5).digest('hex'); 
														
													const https = require('https')
													const data = JSON.stringify({
													  game_id: game_id,
													  room_id: fir_pl.room_id,
													  battle_id: fir_pl.battle_id,
													  timestamp: timestamp,
													  timestamp: timestamp,
													  start_timestamp:  fir_pl.start_timestamp,
													  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
													  hash: hash3,
													  user_id: fir_pl.user_id,
													  data: datax[sec_pl.user_id],
													  result_amount: ramp,
													})

													const options = {
													  hostname: 'mindplays.com',
													  port: 443,
													  path: '/api/v1/result_game',
													  method: 'POST',
													  headers: {
														'Content-Type': 'application/json',
														'Content-Length': data.length
													  }
													}

													const req = https.request(options, res => {
													  console.log(`statusCode: ${res.statusCode}`)

													  res.on('data', d => {
														process.stdout.write(d)
													  })
													})

													req.on('error', error => {
													  console.error(error)
													})

													req.write(data)
													req.end()
							////////////////////// *** POST *** //////////////////////
										//API
										
										
										//API
													//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
							////////////////////// *** POST *** //////////////////////
													var crypto = require('crypto');
													//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
													var domd6 = game_id+":"+sec_pl.user_id+":"+sec_pl.room_id+":"+sec_pl.battle_id+":"+timestamp+":"+secret;
													var hash4 = crypto.createHash('md5').update(domd6).digest('hex'); 
														
													const https2 = require('https')
													var data2 = JSON.stringify({
													  game_id: game_id,
													  room_id: sec_pl.room_id,
													  battle_id: sec_pl.battle_id,
													  timestamp: timestamp,
													  timestamp: timestamp,
													  start_timestamp:  sec_pl.start_timestamp,
													  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
													  hash: hash4,
													  user_id: sec_pl.user_id,
													  data: datax[fir_pl.user_id],
													  result_amount: ramm,
													})

													const options2 = {
													  hostname: 'mindplays.com',
													  port: 443,
													  path: '/api/v1/result_game',
													  method: 'POST',
													  headers: {
														'Content-Type': 'application/json',
														'Content-Length': data2.length
													  }
													}

													const req2 = https2.request(options2, res2 => {
													  console.log(`statusCode: ${res2.statusCode}`)

													  res2.on('data2', d => {
														process.stdout.write(d)
													  })
													})

													req2.on('error', error => {
													  console.error(error)
													})

													req2.write(data2)
													req2.end()
							////////////////////// *** POST *** //////////////////////
										//API		
										
													console.log(`выйграл игрок 0 (первый) ${fir_pl.username}}`);
													
													datax[fir_pl.user_id] = []; // очищаем
													datax[sec_pl.user_id] = []; // очищаем
													//удаляем игрока из списка	
													console.log(`(-) Игрок ${fir_pl.username} Кикнут общим таймингом`);
													console.log(`(-) Игрок ${sec_pl.username} Кикнут общим таймингом`);
													players.splice(players.indexOf(fir_pl), 1);
													players.splice(players.indexOf(sec_pl), 1);
													
													rooms.splice(rooms.indexOf(rooms[i]), 1);
												}
												
												if (fir_pl.score > sec_pl.score) //выйграл игрок 0 (первый)//выйграл игрок 0 (первый)//выйграл игрок 0 (первый)//выйграл игрок 0 (первый)//выйграл игрок 0 (первый)//выйграл игрок 0 (первый)
												{
													var ramp = Number(Number(fir_pl.amount)+Number(fir_pl.amount));
													datax[fir_pl.user_id].push(
														{
															operation_type: 2,
															amount: Number(fir_pl.amount),
															opponent_id: Number(fir_pl.user_id),
															comment: "winner_exit",
														},
													);	
													/*
													1 - plus operation
													2 - minus
													3 - draw operation
													*/
													var ramm = Number(Number(fir_pl.amount)-Number(fir_pl.amount));
													datax[sec_pl.user_id].push(
														{
															operation_type: 1,
															amount: Number(sec_pl.amount),
															opponent_id: Number(sec_pl.user_id),
															comment: "loser_exit",
														},
													);	
													//API
													//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
							////////////////////// *** POST *** //////////////////////
													var crypto = require('crypto');
													//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
													var domd5 = game_id+":"+fir_pl.user_id+":"+fir_pl.room_id+":"+fir_pl.battle_id+":"+timestamp+":"+secret;
													var hash3 = crypto.createHash('md5').update(domd5).digest('hex'); 
														
													const https = require('https')
													const data = JSON.stringify({
													  game_id: game_id,
													  room_id: fir_pl.room_id,
													  battle_id: fir_pl.battle_id,
													  timestamp: timestamp,
													  timestamp: timestamp,
													  start_timestamp:  fir_pl.start_timestamp,
													  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
													  hash: hash3,
													  user_id: fir_pl.user_id,
													  data: datax[sec_pl.user_id],
													  result_amount: ramp,
													})

													const options = {
													  hostname: 'mindplays.com',
													  port: 443,
													  path: '/api/v1/result_game',
													  method: 'POST',
													  headers: {
														'Content-Type': 'application/json',
														'Content-Length': data.length
													  }
													}

													const req = https.request(options, res => {
													  console.log(`statusCode: ${res.statusCode}`)

													  res.on('data', d => {
														process.stdout.write(d)
													  })
													})

													req.on('error', error => {
													  console.error(error)
													})

													req.write(data)
													req.end()
							////////////////////// *** POST *** //////////////////////
										//API
										
										
										//API
													//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
							////////////////////// *** POST *** //////////////////////
													var crypto = require('crypto');
													//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
													var domd6 = game_id+":"+sec_pl.user_id+":"+sec_pl.room_id+":"+sec_pl.battle_id+":"+timestamp+":"+secret;
													var hash4 = crypto.createHash('md5').update(domd6).digest('hex'); 
														
													const https2 = require('https')
													var data2 = JSON.stringify({
													  game_id: game_id,
													  room_id: sec_pl.room_id,
													  battle_id: sec_pl.battle_id,
													  timestamp: timestamp,
													  timestamp: timestamp,
													  start_timestamp:  sec_pl.start_timestamp,
													  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
													  hash: hash4,
													  user_id: sec_pl.user_id,
													  data: datax[fir_pl.user_id],
													  result_amount: ramm,
													})

													const options2 = {
													  hostname: 'mindplays.com',
													  port: 443,
													  path: '/api/v1/result_game',
													  method: 'POST',
													  headers: {
														'Content-Type': 'application/json',
														'Content-Length': data2.length
													  }
													}

													const req2 = https2.request(options2, res2 => {
													  console.log(`statusCode: ${res2.statusCode}`)

													  res2.on('data2', d => {
														process.stdout.write(d)
													  })
													})

													req2.on('error', error => {
													  console.error(error)
													})

													req2.write(data2)
													req2.end()
							////////////////////// *** POST *** //////////////////////
										//API		
										
													console.log(`выйграл игрок 0 (первый) ${fir_pl.username}}`);
													
													datax[fir_pl.user_id] = []; // очищаем
													datax[sec_pl.user_id] = []; // очищаем
													//удаляем игрока из списка	
													console.log(`(-) Игрок ${fir_pl.username} Кикнут общим таймингом`);
													console.log(`(-) Игрок ${sec_pl.username} Кикнут общим таймингом`);
													players.splice(players.indexOf(fir_pl), 1);
													players.splice(players.indexOf(sec_pl), 1);
													
													rooms.splice(rooms.indexOf(rooms[i]), 1);
												}
												
												if (fir_pl.score < sec_pl.score) //выйграл игрок 1 (второй)//выйграл игрок 1 (второй)//выйграл игрок 1 (второй)//выйграл игрок 1 (второй)//выйграл игрок 1 (второй)//выйграл игрок 1 (второй)
													{
														var ramp = Number(Number(fir_pl.amount)-Number(fir_pl.amount));
													datax[fir_pl.user_id].push(
														{
															operation_type: 1,
															amount: Number(fir_pl.amount),
															opponent_id: Number(fir_pl.user_id),
															comment: "winner_exit",
														},
													);	
													/*
													1 - plus operation
													2 - minus
													3 - draw operation
													*/
													var ramm = Number(Number(fir_pl.amount)+Number(fir_pl.amount));
													datax[sec_pl.user_id].push(
														{
															operation_type: 2,
															amount: Number(sec_pl.amount),
															opponent_id: Number(sec_pl.user_id),
															comment: "loser_exit",
														},
													);	
													//API
													//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
							////////////////////// *** POST *** //////////////////////
													var crypto = require('crypto');
													//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
													var domd5 = game_id+":"+fir_pl.user_id+":"+fir_pl.room_id+":"+fir_pl.battle_id+":"+timestamp+":"+secret;
													var hash3 = crypto.createHash('md5').update(domd5).digest('hex'); 
														
													const https = require('https')
													const data = JSON.stringify({
													  game_id: game_id,
													  room_id: fir_pl.room_id,
													  battle_id: fir_pl.battle_id,
													  timestamp: timestamp,
													  timestamp: timestamp,
													  start_timestamp:  fir_pl.start_timestamp,
													  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
													  hash: hash3,
													  user_id: fir_pl.user_id,
													  data: datax[sec_pl.user_id],
													  result_amount: ramp,
													})

													const options = {
													  hostname: 'mindplays.com',
													  port: 443,
													  path: '/api/v1/result_game',
													  method: 'POST',
													  headers: {
														'Content-Type': 'application/json',
														'Content-Length': data.length
													  }
													}

													const req = https.request(options, res => {
													  console.log(`statusCode: ${res.statusCode}`)

													  res.on('data', d => {
														process.stdout.write(d)
													  })
													})

													req.on('error', error => {
													  console.error(error)
													})

													req.write(data)
													req.end()
							////////////////////// *** POST *** //////////////////////
										//API
										
										
										//API
													//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
							////////////////////// *** POST *** //////////////////////
													var crypto = require('crypto');
													//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
													var domd6 = game_id+":"+sec_pl.user_id+":"+sec_pl.room_id+":"+sec_pl.battle_id+":"+timestamp+":"+secret;
													var hash4 = crypto.createHash('md5').update(domd6).digest('hex'); 
														
													const https2 = require('https')
													var data2 = JSON.stringify({
													  game_id: game_id,
													  room_id: sec_pl.room_id,
													  battle_id: sec_pl.battle_id,
													  timestamp: timestamp,
													  timestamp: timestamp,
													  start_timestamp:  sec_pl.start_timestamp,
													  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
													  hash: hash4,
													  user_id: sec_pl.user_id,
													  data: datax[fir_pl.user_id],
													  result_amount: ramm,
													})

													const options2 = {
													  hostname: 'mindplays.com',
													  port: 443,
													  path: '/api/v1/result_game',
													  method: 'POST',
													  headers: {
														'Content-Type': 'application/json',
														'Content-Length': data2.length
													  }
													}

													const req2 = https2.request(options2, res2 => {
													  console.log(`statusCode: ${res2.statusCode}`)

													  res2.on('data2', d => {
														process.stdout.write(d)
													  })
													})

													req2.on('error', error => {
													  console.error(error)
													})

													req2.write(data2)
													req2.end()
							////////////////////// *** POST *** //////////////////////
										//API
													console.log(`выйграл игрок 1 (второй) ${sec_pl.username}}`);
													datax[fir_pl.user_id] = []; // очищаем
													datax[sec_pl.user_id] = []; // очищаем
													//удаляем игрока из списка	
													console.log(`(-) Игрок ${fir_pl.username} Кикнут общим таймингом`);
													console.log(`(-) Игрок ${sec_pl.username} Кикнут общим таймингом`);
													players.splice(players.indexOf(fir_pl), 1);
													players.splice(players.indexOf(sec_pl), 1);

													rooms.splice(rooms.indexOf(rooms[i]), 1);
												}
									}
								}
						}	
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
							tree: "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]",
							username: String(username)
						});
						xdatarrtree = new Dataarrtree({
						room_id: room_id,
						treearr0: 0,
						treearr1: 0,
						treearr2: 0,
						treearr3: 0,
						treearr4: 0,
						treearr5: 0,
						treearr6: 0,
						treearr7: 0,
						treearr8: 0,
						treearr9: 0
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
					
					player = new Player({
						socket: client,
						online: 1,
						user_id: user_id,
						room_id: room_id,
						hp: 3,
						score: 0,
						tree: "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]",
						username: String(username)
					});
					xdatarrtree = new Dataarrtree({
					room_id: room_id,
					treearr0: 0,
					treearr1: 0,
					treearr2: 0,
					treearr3: 0,
					treearr4: 0,
					treearr5: 0,
					treearr6: 0,
					treearr7: 0,
					treearr8: 0,
					treearr9: 0
					});
					client.emit('go_room', xdatarrtree.toString());
					players.push(player);
					console.log(`++Игрокov тепреь ${players}`);
					client.emit('create_player', player.toString());
					
					rooms.push( 
						{
							rm_id: player.room_id,
							rm_time: 180000, //180000
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

		player.hp = data.hp;
		if (data.hp == 0)
		{
			for (let i in players)
			{
				if (players[i].user_id !== player.user_id && players[i].room_id == player.room_id)
				{
					global.splayer = players[i]; // получаем массив врага 2
					if (splayer.hp !== 0) // если у врага 2 не 0 hp (одновременно с игроком 1 - в текущей логике)
					{
						console.log(`splayer.hp !== 0 Победил игрок 1 splayer.username`); // Победил игрок 1
						
						var ramp = Number(Number(player.amount)-Number(player.amount));
								datax[player.user_id].push(
									{
										operation_type: 1,
										amount: Number(player.amount),
										opponent_id: Number(player.user_id),
										comment: "winner_exit",
									},
								);	
								/*
								1 - plus operation
								2 - minus
								3 - draw operation
								*/
								var ramm = Number(Number(player.amount)+Number(player.amount));
								datax[splayer.user_id].push(
									{
										operation_type: 2,
										amount: Number(splayer.amount),
										opponent_id: Number(splayer.user_id),
										comment: "loser_exit",
									},
								);
								
								//API
						//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
////////////////////// *** POST *** //////////////////////
						var crypto = require('crypto');
						//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
						var domd5 = game_id+":"+player.user_id+":"+player.room_id+":"+player.battle_id+":"+timestamp+":"+secret;
						var hash3 = crypto.createHash('md5').update(domd5).digest('hex'); 
							
						const https = require('https')
						const data = JSON.stringify({
						  game_id: game_id,
						  room_id: player.room_id,
						  battle_id: player.battle_id,
						  timestamp: timestamp,
						  timestamp: timestamp,
						  start_timestamp:  player.start_timestamp,
						  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
						  hash: hash3,
						  user_id: player.user_id,
						  data: datax[splayer.user_id],
						  result_amount: ramp,
						})

						const options = {
						  hostname: 'mindplays.com',
						  port: 443,
						  path: '/api/v1/result_game',
						  method: 'POST',
						  headers: {
							'Content-Type': 'application/json',
							'Content-Length': data.length
						  }
						}

						const req = https.request(options, res => {
						  console.log(`statusCode: ${res.statusCode}`)

						  res.on('data', d => {
							process.stdout.write(d)
						  })
						})

						req.on('error', error => {
						  console.error(error)
						})

						req.write(data)
						req.end()
////////////////////// *** POST *** //////////////////////
			//API
			
			
			//API
						//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
////////////////////// *** POST *** //////////////////////
						var crypto = require('crypto');
						//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
						var domd6 = game_id+":"+splayer.user_id+":"+splayer.room_id+":"+splayer.battle_id+":"+timestamp+":"+secret;
						var hash4 = crypto.createHash('md5').update(domd6).digest('hex'); 
							
						const https2 = require('https')
						var data2 = JSON.stringify({
						  game_id: game_id,
						  room_id: splayer.room_id,
						  battle_id: splayer.battle_id,
						  timestamp: timestamp,
						  timestamp: timestamp,
						  start_timestamp:  splayer.start_timestamp,
						  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
						  hash: hash4,
						  user_id: splayer.user_id,
						  data: datax[player.user_id],
						  result_amount: ramm,
						})

						const options2 = {
						  hostname: 'mindplays.com',
						  port: 443,
						  path: '/api/v1/result_game',
						  method: 'POST',
						  headers: {
							'Content-Type': 'application/json',
							'Content-Length': data2.length
						  }
						}

						const req2 = https2.request(options2, res2 => {
						  console.log(`statusCode: ${res2.statusCode}`)

						  res2.on('data2', d => {
							process.stdout.write(d)
						  })
						})

						req2.on('error', error => {
						  console.error(error)
						})

						req2.write(data2)
						req2.end()
////////////////////// *** POST *** //////////////////////
			//API
						datax[player.user_id] = []; // очищаем
						datax[splayer.user_id] = []; // очищаем
						//удаляем игрока из списка	
						console.log(`(-) Игрок ${player.username} Кикнут общим таймингом`);
						console.log(`(-) Игрок ${splayer.username} Кикнут общим таймингом`);
						players.splice(players.indexOf(player), 1);
						players.splice(players.indexOf(splayer), 1);
						rooms.splice(rooms.indexOf(player.room_id), 1);
					}else{
						console.log(`splayer.hp == 0 НИЧЬЯ`); // НИЧЬЯ TODO ???
					}
				}
			}
		}
    });
	
	client.on('score_send', (data) => {
        data = JSON.parse(data);
		player.score = data.score;
		
						
				//console.log(`(:: :: ::) player.score: [${player.score}]`);
				//console.log(`(:: :: ::) data.score: [${data.score}]`);	
				if (player.score > 498)
				{

/////////////////////////////////////////////////*
					for (i = 0; i < players.length; i++)
					{
						if (players[i].user_id !== player.user_id && players[i].room_id == player.room_id)
						{
							global.splayer = players[i]; // массив врага 
							//console.log(`(:: :: ::) массив игрока: ${player.username} [${player.hp}] / массив врага: ${splayer.username} [${splayer.hp}] `);	
							  
											if (player.hp==0)
											{
												console.log(`:!: :!: :!: :!: :!: :!: [CRITICAL ERROR] :!: :!: :!: :!: :!: :!:`);	
											}else{
												console.log(`(** *+) Игрок ${player.username} Winner_exit ==> ${splayer.username}`);	
												
												var ramp = Number(Number(player.amount)+Number(player.amount));
												datax[player.user_id].push(
													{
														operation_type: 2,
														amount: Number(player.amount),
														opponent_id: Number(player.user_id),
														comment: "winner_exit",
													},
												);	
												/*
												1 - plus operation
												2 - minus
												3 - draw operation
												*/
												var ramm = Number(Number(player.amount)-Number(player.amount));
												datax[splayer.user_id].push(
													{
														operation_type: 1,
														amount: Number(splayer.amount),
														opponent_id: Number(splayer.user_id),
														comment: "loser_exit",
													},
												);	

				
							//API
										//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
				////////////////////// *** POST *** //////////////////////
										var crypto = require('crypto');
										//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
										var domd5 = game_id+":"+player.user_id+":"+player.room_id+":"+player.battle_id+":"+timestamp+":"+secret;
										var hash3 = crypto.createHash('md5').update(domd5).digest('hex'); 
											
										const https = require('https')
										const data = JSON.stringify({
										  game_id: game_id,
										  room_id: player.room_id,
										  battle_id: player.battle_id,
										  timestamp: timestamp,
										  timestamp: timestamp,
										  start_timestamp:  player.start_timestamp,
										  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
										  hash: hash3,
										  user_id: player.user_id,
										  data: datax[splayer.user_id],
										  result_amount: ramp,
										})

										const options = {
										  hostname: 'mindplays.com',
										  port: 443,
										  path: '/api/v1/result_game',
										  method: 'POST',
										  headers: {
											'Content-Type': 'application/json',
											'Content-Length': data.length
										  }
										}

										const req = https.request(options, res => {
										  console.log(`statusCode: ${res.statusCode}`)

										  res.on('data', d => {
											process.stdout.write(d)
										  })
										})

										req.on('error', error => {
										  console.error(error)
										})

										req.write(data)
										req.end()
				////////////////////// *** POST *** //////////////////////
							//API
							
							
							//API
										//var ram = Number(Number(players[i].amount)-Number(players[i].amount));
				////////////////////// *** POST *** //////////////////////
										var crypto = require('crypto');
										//var domd5 = game_id+":"+players[i].user_id+":"+players[i].room_id+":"+players[i].battle_id+":"+timestamp+":"+secret;
										var domd6 = game_id+":"+splayer.user_id+":"+splayer.room_id+":"+splayer.battle_id+":"+timestamp+":"+secret;
										var hash4 = crypto.createHash('md5').update(domd6).digest('hex'); 
											
										const https2 = require('https')
										var data2 = JSON.stringify({
										  game_id: game_id,
										  room_id: splayer.room_id,
										  battle_id: splayer.battle_id,
										  timestamp: timestamp,
										  timestamp: timestamp,
										  start_timestamp:  splayer.start_timestamp,
										  finish_timestamp: Number(Math.round(Date.now()/(1000))), 
										  hash: hash4,
										  user_id: splayer.user_id,
										  data: datax[player.user_id],
										  result_amount: ramm,
										})

										const options2 = {
										  hostname: 'mindplays.com',
										  port: 443,
										  path: '/api/v1/result_game',
										  method: 'POST',
										  headers: {
											'Content-Type': 'application/json',
											'Content-Length': data2.length
										  }
										}

										const req2 = https2.request(options2, res2 => {
										  console.log(`statusCode: ${res2.statusCode}`)

										  res2.on('data2', d => {
											process.stdout.write(d)
										  })
										})

										req2.on('error', error => {
										  console.error(error)
										})

										req2.write(data2)
										req2.end()
				////////////////////// *** POST *** //////////////////////
							//API
											
											
											

							for (let i in rooms)
								{
									if (rooms[i].rm_id == player.room_id)
									{
										rooms.splice(rooms.indexOf(rooms[i]), 1);
									}
								}
							datax[player.user_id] = []; // очищаем
							datax[players.user_id] = []; // очищаем
							players.splice(players.indexOf(player), 1);
							players.splice(players.indexOf(splayer), 1);
							break;
						}
					}	
				////////////////////////////////////////////////*
					}
				}
    });
	
    client.on('create_player', (data) => {
        data = JSON.parse(data);
	if (data.user_id != null && data.room_id != null && data.battle_id != null)
	{
		
		//console.log(`data.battle_id == ${data.battle_id} `);
		//player.user_id = data.user_id;
		//player.room_id = data.room_id;
		//player.battle_id = data.battle_id;
		datax[data.user_id] = [];
		start_timestamp = Number(Math.round(Date.now()/(1000)));
////////////////////// *** POST *** ////////////////////// 
					var crypto = require('crypto');
					var domd5 = game_id+":"+data.user_id+":"+data.room_id+":"+data.battle_id+":"+timestamp+":"+secret;
					var hash3 = crypto.createHash('md5').update(domd5).digest('hex'); 

					const https = require('https')

					const dataxjq = JSON.stringify({
						  game_id: game_id,
						  user_id: data.user_id,
						  room_id: data.room_id,
						  battle_id: data.battle_id,
						  hash: hash3,
						  timestamp: timestamp,
					})
					
					const options = {
					  hostname: 'mindplays.com',
					  port: 443,
					  path: '/api/v1/info_game',
					  method: 'POST',
					  headers: {
						'Content-Type': 'application/json',
						'Content-Length': dataxjq.length
					  }
					}

					const req = https.request(options, res => {
					  //console.log(`statusCode: ${res.statusCode}`)

					  res.on('data', d => {
					//process.stdout.write(d)
					var dataxjqx = JSON.parse(d);
					
					var aa = dataxjqx["data"];
					//console.log(`data: ${aa}`)
					
					var bb = aa["user"];
					
					var cc = bb["name"];
					//console.log(`userN: ${bb}`)
					
					var dd = Number(aa["amount"]);
					//console.log(`amount: ${dd}`)
					//player.amount = dd; // ERROR ???? TODO !?
					var plamount = dd; // ERROR ???? TODO !? // PLDATA: AMOUNT 1
					
					console.log(`name: ${cc}`)
					var plusername = String(cc);  // PLDATA: player.username  22
					
					var plusern = String(cc);  // PLDATA: plusern 3
		 
					var plstart_timestamp = Number(Math.round(Date.now()/(1000)));  // PLDATA: plusern 4
					
					
					setTimeout(PlayerDataSet,20,plamount,plusername,plusern,plstart_timestamp)
					/*
					console.log(dataxjqx);
					var clientxqqw = new Clientxqqw({
					pro: cc
					});
					client.emit('info_user', clientxqqw.toString());
					*/
					  })
					})

					req.on('error', error => {
					  console.error(error)
					})

					req.write(dataxjq)
					req.end()
////////////////////// *** POST *** //////////////////////

function PlayerDataSet(plamount,plusername,plusern,plstart_timestamp){
		if (players.length > 0)
		{
			//console.log(`* * * * *Игроков всего ${players}`);
			
			var isfound = false;
			for (i = 0; i < players.length; i++)
			{
			  if (players[i].user_id == data.user_id)
			  {
				global.myhpp  = players[i].hp;
				global.myscore = players[i].score;
				global.username = players[i].username;
				
				//global.tree = "[0, 0, 2, 0, 1, 0, 0, 1, 1, 1]"
				global.tree = "["+players[i].tree[1]+", "+players[i].tree[4]+", "+players[i].tree[7]+", "+players[i].tree[10]+", "+players[i].tree[13]+", "+players[i].tree[16]+", "+players[i].tree[19]+", "+players[i].tree[22]+", "+players[i].tree[25]+", "+players[i].tree[28]+"]";
				
				players[i].tree =  "["+players[i].tree[1]+", "+players[i].tree[4]+", "+players[i].tree[7]+", "+players[i].tree[10]+", "+players[i].tree[13]+", "+players[i].tree[16]+", "+players[i].tree[19]+", "+players[i].tree[22]+", "+players[i].tree[25]+", "+players[i].tree[28]+"]";
				
				players[i].battle_id = data.battle_id;	// GOOD
				//console.log(`* * * * * players.tree ${players[i].tree}`);
				isfound = true;
				break;
			  }
			}
			if (!isfound)
				{
				
					//console.log(`--Игрок ${data.user_id} НЕ найден`);
					var find_rm = false;
					for (i = 0; i < rooms.length; i++)
					{
						if (rooms[i].rm_id == data.room_id)
						{
							find_rm = true;
							//console.log(`** НАШЛИ комнату - ДОБАВЛЯЕМ 2го игрока: ${data.user_id} в комнату: ${data.room_id} ?`);
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
							battle_id: data.battle_id,	// GOOD
							start_timestamp: Number(Math.round(Date.now()/(1000))),
							hp: 3,
							score: 0,
							tree: "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]",
							username: String(plusername)
						});
						
						xdatarrtree = new Dataarrtree({
						room_id: data.room_id,
						treearr0: 0,
						treearr1: 0,
						treearr2: 0,
						treearr3: 0,
						treearr4: 0,
						treearr5: 0,
						treearr6: 0,
						treearr7: 0,
						treearr8: 0,
						treearr9: 0
						});
						client.emit('go_room', xdatarrtree.toString());
						players.push(player);
						//console.log(`++Игрокov тепреь ${players}`);
						client.emit('create_player', player.toString());
						client.broadcast.emit('create_player_other', player.toString());
						
						//console.log(`++Игрок ${data.user_id} +СОЗДАН и ДОБАВЛЕН+`);
						
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
								//console.log(`Комната ${data.room_id} не найдена - запускапем таймер (через 2 сек) на повторный поиск`);
								setTimeout(re_find_rm, 2000, data.room_id, data.user_id);
								break;
								
							}
					}
					}else{
						//console.log(`++Игрок ${data.user_id} найден возвращаю.`);
						
						for (let i in players)
						{
							if (players[i].user_id == data.user_id && players[i].room_id == data.room_id)
							{
								client.broadcast.emit('disconnect_player', players[i].toString());
							}
						}
						//console.log(`* * * * [PLPL_3_treearr]: ${global.tree}`);
						player = new Player({
								socket: client,
								online: 1,
								user_id: data.user_id,
								room_id: data.room_id,
								battle_id: data.battle_id,
								start_timestamp: Number(Math.round(Date.now()/(1000))),
								hp: global.myhpp,
								score: global.myscore,
								tree: global.tree,
								username: String(global.username)
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
						
						});
						client.emit('go_room', xdatarrtree.toString());
						client.emit('create_player', player.toString());

								// Создание всех остальных для себя, НЕ включая себя, потому что мы уже создали себя
								for (let i in players) {
									if (players[i].user_id !== data.user_id && players[i].room_id == data.room_id) {
										client.emit('create_player_other', players[i].toString());
									}
								}
						//client.emit('start', "start".toString()); // TODO START ?
						
				}
		}else{
			//MyUserN();
			//Игроков 0: Комнат 0: Cоздаю первого/первую
			console.log(`*!* MY FISRT username [${plusername}] ) `);
			player = new Player({
					socket: client,
					online: 1,
					user_id: data.user_id,
					room_id: data.room_id,
					battle_id: data.battle_id,	// GOOD
					start_timestamp: Number(Math.round(Date.now()/(1000))),
					hp: 3,
					score: 0,
					tree: "[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]",
					username: plusername // PL FIRST
			});
			
			xdatarrtree = new Dataarrtree({
			room_id: data.room_id,
			treearr0: 0,
			treearr1: 0,
			treearr2: 0,
			treearr3: 0,
			treearr4: 0,
			treearr5: 0,
			treearr6: 0,
			treearr7: 0,
			treearr8: 0,
			treearr9: 0
			});
			client.emit('go_room', xdatarrtree.toString());
			client.emit('create_player', player.toString());
			players.push(player);
			//console.log(`++Игрокov тепреь ${players}`);
			
			//console.log(`--Комнат 0: *N*0вая [${data.room_id}] КОМНАТА СОЗДАНА!`);
				//создаем комнату + пушаем игрока
				//var roomid=0;
				rooms.push( 
					{
						rm_id: data.room_id,
						rm_time: 180000, //180000
						user1: {"pl_id":data.user_id,"pl_hp":3,"pl_score":0},
						user2: null,
					},
				);
				//console.log(`++Игрок ${data.user_id} +СОЗДАН и ДОБАВЛЕН в КОМНАТУ+`); 
				//console.log(rooms);
		}
	}
		

	}else{
		console.log(`DATA IS EMPTY!!!`);
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
		//console.log(`+ + + + [ts_1_PL tree]: ${data.treearr}`);	
		//ПОЛУЧАЕМ массив дерева 2-го игрока
		player.tree = data.treearr; // Назначаем массив дерева в массив игрока чтобы после реконекта у него были правильные данные для продолжения игры.
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
			for (let i in players)
			{
				if (players[i].user_id == player.user_id && players[i].room_id == player.room_id)
				{
					players[i].tree = "["+data.treearr[1]+", "+data.treearr[4]+", "+data.treearr[7]+", "+data.treearr[10]+", "+data.treearr[13]+", "+data.treearr[16]+", "+data.treearr[19]+", "+data.treearr[22]+", "+data.treearr[25]+", "+data.treearr[28]+"]";
					//console.log(`* * * * [ts_2_PL tree]: ${player.tree}`);	
				}
			}
			//console.log(`* * * * [ts_3_PL tree]: ${player.tree}`);	
			client.broadcast.emit('tree_set', xdatarrtree.toString()); //Отправляем массив дерева 2-го игрока
	});
 
     client.on('datax_get', (data) => {
        data = JSON.parse(data);
		
				xdatax = new Datax({
					room_id: player.room_id,
					score: player.score,
					hp: player.hp
				});
				client.broadcast.emit('datax_set', xdatax.toString());	
				

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
			//console.log(`++Игрок ${player.user_id} +DISCONNECTED+`);
			player.online=0;
		}
    });
});