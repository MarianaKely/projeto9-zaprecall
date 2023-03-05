
// page containing the Harry Potter themed questions - outset


const cards = [

	{ question: "Antes de Dumbledore, quem era o Diretor de Hogwarts?", answer: "Armando Dippet" },
	{ question: "Qual é o nome do vilarejo próximo a Hogwarts", answer: "Hogsmeade" },
	{ question: "Qual feitiço fornece proteção contra Dementadores?", answer: "Expecto Patronum" },
	{ question: "De qual dos fantasmas de Hogwarts Pirraça tem medo?", answer: "O Barão Sangrento" },
	{ question: "Qual é o encantamento para o Feitiço da Memória?", answer: "Obliviate" },
	{ question: "O que é um animago?", answer: "Uma pessoa com forma animal" },
	{ question: "Qual é o termo para um objeto feito com um fragmento da alma de um mago?", answer: "Horcrux" },
	{ question: "Qual alquimista esteve na ativa durante a era medieval?", answer: "Nicholas Flamel" },
	{ question: "Qual livro de feitiços contém a Maldição das Pernas Presas?", answer: "Maldições e Contra-maldições" },
	{ question: "Qual é o maior jornal mágico da Grã-Bretanha?", answer: "Profeta Diário" },
	{ question: "Onde fica Hogwarts?", answer: "Escócia" },
	{ question: "Quem é o zelador de Hogwarts?", answer: "Filch" },
	{ question: "Você precisa pensar no que para conjurar o Feitiço do Patrono?", answer: "Em uma lembrança forte e feliz" },
	{ question: "Qual é a marca registrada de Godric Gryffindor?", answer: "Espada" },
	{ question: "Qual é o termo americano para Trouxas?", answer: " Não-Mágicos" },
	{ question: "De qual cor as chamas ficam com a presença de um fantasma?", answer: "Azul" },
	{ question: "É considerado um bom presságio um pássaro voar em qual direção?", answer: "Leste" },
	{ question: "O que é o Sinistro?", answer: "Um cão espectral" },
	{ question: "O que substituiu o Conselho de Bruxos?", answer: " O Ministério da Magia" },
	{ question: "Dobby é um...", answer: "Elfo livre" },
	{ question: "Quem é o professor de História da Magia?", answer: "Professor Binns" },
	{ question: "O que o professor Vector ensina?", answer: "Aritmancia" },
	{ question: "Quem dá aula de Transfiguração?", answer: "Professora Minerva McGonagall" },
	{ question: "Que encantamento encolhe um objeto?", answer: "Reducio" },
	{ question: "Quem é o maestro do Coro dos Sapos?", answer: "Professor Flitwick" },
	{ question: "Que feitiço transforma um objeto em uma chave de portal?", answer: "Portus" },
	{ question: "Qual madeira de varinha é considerada azarada?", answer: "Horcrux" },
	{ question: "Quando foi fundado Olivaras??", answer: "382 a.C." },
	{ question: "Qual aula eletiva é ocasionalmente oferecida em Hogwarts?", answer: "Alquimia" },
	{ question: "Qual é o efeito colateral do Petrificus Totalus?", answer: "Membros enrijecidos" },
	{ question: "Quem é o diretor da Corvinal?", answer: "Professor Flitwick" },
	{ question: "Qual item no escritório do diretor permite que você revise memórias engarrafadas?", answer: "Penseira" },
	{ question: "Qual é o nome do gato de Filch?", answer: "Madame Nor-r-ra" },
	{ question: "Qual é o encantamento para o Feitiço Escudo?", answer: "Protego" },
	{ question: "Quem é a professora de Adivinhação?", answer: "Professora Trelawney" },
	{ question: "Qual encantamento cancela todos os efeitos de um feitiço?", answer: "Finite Incantatem" },
	{ question: "Quais criaturas guardam as árvores fabricantes de varinhas?", answer: "Tronquilhos" },
	{ question: "Qual é o movimento da varinha para Wingardium Leviosa?", answer: "Girar e sacudir" },
	{ question: "Qual a língua nativa para os feitiços?", answer: "Latin" },
	{ question: "Quem é o professor de Poções?", answer: "Professor Severus Snape" },
	{ question: "Quem é o instrutor de voo?", answer: "Madame Hooch" },
	{ question: "Qual é o segundo trabalho da Madame Hooch?", answer: "Árbitra de Quadribol" },
	{ question: "O que você diz para invocar uma vassoura para a sua mão?", answer: "Suba" },
	{ question: "Quem é a professora de Herbologia?", answer: " Professora Sprout" },
	{ question: "De que cor é o guarda-chuva do Hagrid?", answer: "Rosa" },
	{ question: "Qual é o maior evento de Quadribol?", answer: "Copa do Mundo" },
	{ question: "Quando a temporada de Quadribol começa?", answer: "Setembro" },
	{ question: "Quais jogadores de Quadribol evitam os balaços?", answer: "Os batedores" },
	{ question: "Qual é a maior bola do Quadribol?", answer: "Goles" },
	{ question: "Que tipo de bola tenta atingir os jogadores?", answer: "Balaço" },
	{ question: "Quantos pontos vale o Pomo de Ouro?", answer: "150" },
	{ question: "Qual jogador de Quadribol marca pontos?", answer: "Artilheiro" },
	{ question: "Uma Firebolt é um tipo de quê?", answer: "Vassoura" },
	{ question: "Pegar qual objeto termina com uma partida de Quadribol?", answer: "Pomo de Ouro" },
	{ question: "Qual livro detalha a história do Quadribol?", answer: "Quadribol Através dos Séculos" },
	{ question: "Você sabe que tipo de criatura é um Bicho-Papão?", answer: "Não-ser" },
	{ question: "Quem já ocupou o posto de Snape como Mestre de Poções?", answer: "Horace Slughorn" },
	{ question: "Qual é o soro da verdade mais poderoso?", answer: "Veritaserum" },
	{ question: "O que não é um nome alternativo para Acônito?", answer: "Belladona" },
	{ question: "Quando foi fundada Hogwarts?", answer: "Século X" },
	{ question: "Professor Snape é o diretor de qual casa de Hogwarts?", answer: "Sonserina" },
	{ question: "Quem inventou a poção capilar do Sleakeazy?", answer: "Fleamont Potter" },
	{ question: "Quais ingredientes “selam” uma mordida de lobisomem?", answer: "Prata e dítamo" },
	{ question: " O que é aritmancia?", answer: "Numerologia" },
	{ question: "O que torna a transfiguração mais fácil?", answer: "Aparência semelhante" },
	{ question: "Os alunos de Transfiguração praticam transformar qual inseto em botões?", answer: "Besouros" },
	{ question: "Que feitiço faz os objetos desaparecerem?", answer: "Evanesco" },
	{ question: "Qual é o ramo da magia que lida com a alteração da forma ou aparência de um objeto?", answer: "Transfiguração" },
	{ question: "Quantos alunos dormem em cada dormitório?", answer: "5" },
	{ question: " O que “Serpensortia” conjura?", answer: "Uma serpente" },
	{ question: "Quem é o Guardião das Chaves de Hogwarts?", answer: "Rubeus Hagrid" },
	{ question: "A Professora Sprout é diretora de qual casa de Hogwarts?", answer: "Lufa-Lufa" },
	{ question: "O que pode fazer com que o Patrono de alguém mude de forma?", answer: "Grandes acontecimentos" },
	{ question: "Qual feitiço você deve usar para conter o Visgo do Diabo?", answer: "Incendio" },
	{ question: "Qual parte da Mandrágora pode ser fatal?", answer: "O seu grito" },
	{ question: "Você deve cobrir os seus ouvidos quando essa planta madura começar a gritar. Qual é a planta?", answer: "Mandrágora" },
	{ question: "O que um Auror faz?", answer: "Captura bruxos das trevas" },
	{ question: "Como você cumprimenta um Hipogrifo?", answer: "Com uma reverência" },
	{ question: "Qual feitiço tem o efeito oposto ao Lumus?", answer: "Nox" },
	{ question: "Qual feitiço te protege das aranhas?", answer: " Arania Exumai" },
	{ question: "Como é o sistema de classificação do Ministério da Magia?", answer: "Com base no nível de periculosidade de uma criatura" },
	{ question: "Como você descreveria a voz de um Diabrete?", answer: "Estridente" },
	{ question: "O que o Feitiço Impedimenta faz?", answer: "Paralisa temporariamente um alvo" },
	{ question: " Os Feitiços das Trevas precisam do que para serem bem sucedidos?", answer: "Más intenções" },
	{ question: "Os professores de Defesa Contra as Artes das Trevas costumam durar quanto tempo?", answer: "Um ano" },
	{ question: " Por quanto tempo “Você sabe quem” esteve no poder?", answer: "11 anos" },
	{ question: "Quando “Aquele que não deve ser nomeado” foi derrotado?", answer: "Halloween" },
	{ question: "Quem é o fantasma da Sonserina?", answer: "O Barão Sangrento" },
	{ question: "Qual é o traço que Godric Gryffindor mais valoriza em um aluno?", answer: "Coragem" },
	{ question: " Nick-Quase-Sem-Cabeça é o fantasma de qual casa?", answer: "Grifinória" },
	{ question: "Quem era o dono original do Chapéu Seletor?", answer: "Godric Gryffindor" },
	{ question: "Qual é a marca registrada de Salazar Sonserina?", answer: "Medalhão" },
	{ question: "Qual livro foi escrito por Beedle, o Bardo?", answer: "Os Contos de Beedle, o Bardo" },
	{ question: "Quem é o fantasma da Corvinal?", answer: "A Dama Cinzenta" },
	{ question: " Qual fantasma assombra o banheiro das garotas do segundo andar em Hogwarts?", answer: " A Murta Que Geme" },
	{ question: "Quando foi inaugurado Gringotes, o Banco dos Bruxos?", answer: "1474" },
	{ question: "Quem fundou o vilarejo Hogsmeade?", answer: "Hengisto de Woodcroft" },
	{ question: "Quantas Pedras Filosofais existem?", answer: "Uma" },
	{ question: "Qual é o termo para uma bruxa ou bruxo que pode ver o futuro?", answer: "Vidente" },
	{ question: "Qual o nome de nascimento de LOrde Voldemort", answer: "Tom Marvolo Riddle" }
	
]

export default cards

// page containing the Harry Potter themed questions - end
