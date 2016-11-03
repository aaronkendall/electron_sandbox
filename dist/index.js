(function () {
'use strict';

var typeLookup = { "bulbasaur": { "type": "poison" }, "ivysaur": { "type": "poison" }, "venusaur": { "type": "poison" }, "charmander": { "type": "fire" }, "charmeleon": { "type": "fire" }, "charizard": { "type": "flying" }, "squirtle": { "type": "water" }, "wartortle": { "type": "water" }, "blastoise": { "type": "water" }, "caterpie": { "type": "bug" }, "metapod": { "type": "bug" }, "butterfree": { "type": "flying" }, "weedle": { "type": "poison" }, "kakuna": { "type": "poison" }, "beedrill": { "type": "poison" }, "pidgey": { "type": "flying" }, "pidgeotto": { "type": "flying" }, "pidgeot": { "type": "flying" }, "rattata": { "type": "normal" }, "raticate": { "type": "normal" }, "spearow": { "type": "flying" }, "fearow": { "type": "flying" }, "ekans": { "type": "poison" }, "arbok": { "type": "poison" }, "pikachu": { "type": "electric" }, "raichu": { "type": "electric" }, "sandshrew": { "type": "ground" }, "sandslash": { "type": "ground" }, "nidoran-f": { "type": "poison" }, "nidorina": { "type": "poison" }, "nidoqueen": { "type": "ground" }, "nidoran-m": { "type": "poison" }, "nidorino": { "type": "poison" }, "nidoking": { "type": "ground" }, "clefairy": { "type": "fairy" }, "clefable": { "type": "fairy" }, "vulpix": { "type": "fire" }, "ninetales": { "type": "fire" }, "jigglypuff": { "type": "fairy" }, "wigglytuff": { "type": "fairy" }, "zubat": { "type": "flying" }, "golbat": { "type": "flying" }, "oddish": { "type": "poison" }, "gloom": { "type": "poison" }, "vileplume": { "type": "poison" }, "paras": { "type": "grass" }, "parasect": { "type": "grass" }, "venonat": { "type": "poison" }, "venomoth": { "type": "poison" }, "diglett": { "type": "ground" }, "dugtrio": { "type": "ground" }, "meowth": { "type": "normal" }, "persian": { "type": "normal" }, "psyduck": { "type": "water" }, "golduck": { "type": "water" }, "mankey": { "type": "fighting" }, "primeape": { "type": "fighting" }, "growlithe": { "type": "fire" }, "arcanine": { "type": "fire" }, "poliwag": { "type": "water" }, "poliwhirl": { "type": "water" }, "poliwrath": { "type": "fighting" }, "abra": { "type": "psychic" }, "kadabra": { "type": "psychic" }, "alakazam": { "type": "psychic" }, "machop": { "type": "fighting" }, "machoke": { "type": "fighting" }, "machamp": { "type": "fighting" }, "bellsprout": { "type": "poison" }, "weepinbell": { "type": "poison" }, "victreebel": { "type": "poison" }, "tentacool": { "type": "poison" }, "tentacruel": { "type": "poison" }, "geodude": { "type": "ground" }, "graveler": { "type": "ground" }, "golem": { "type": "ground" }, "ponyta": { "type": "fire" }, "rapidash": { "type": "fire" }, "slowpoke": { "type": "psychic" }, "slowbro": { "type": "psychic" }, "magnemite": { "type": "steel" }, "magneton": { "type": "steel" }, "farfetchd": { "type": "flying" }, "doduo": { "type": "flying" }, "dodrio": { "type": "flying" }, "seel": { "type": "water" }, "dewgong": { "type": "ice" }, "grimer": { "type": "poison" }, "muk": { "type": "poison" }, "shellder": { "type": "water" }, "cloyster": { "type": "ice" }, "gastly": { "type": "poison" }, "haunter": { "type": "poison" }, "gengar": { "type": "poison" }, "onix": { "type": "ground" }, "drowzee": { "type": "psychic" }, "hypno": { "type": "psychic" }, "krabby": { "type": "water" }, "kingler": { "type": "water" }, "voltorb": { "type": "electric" }, "electrode": { "type": "electric" }, "exeggcute": { "type": "psychic" }, "exeggutor": { "type": "psychic" }, "cubone": { "type": "ground" }, "marowak": { "type": "ground" }, "hitmonlee": { "type": "fighting" }, "hitmonchan": { "type": "fighting" }, "lickitung": { "type": "normal" }, "koffing": { "type": "poison" }, "weezing": { "type": "poison" }, "rhyhorn": { "type": "rock" }, "rhydon": { "type": "rock" }, "chansey": { "type": "normal" }, "tangela": { "type": "grass" }, "kangaskhan": { "type": "normal" }, "horsea": { "type": "water" }, "seadra": { "type": "water" }, "goldeen": { "type": "water" }, "seaking": { "type": "water" }, "staryu": { "type": "water" }, "starmie": { "type": "psychic" }, "mr-mime": { "type": "fairy" }, "scyther": { "type": "flying" }, "jynx": { "type": "psychic" }, "electabuzz": { "type": "electric" }, "magmar": { "type": "fire" }, "pinsir": { "type": "bug" }, "tauros": { "type": "normal" }, "magikarp": { "type": "water" }, "gyarados": { "type": "flying" }, "lapras": { "type": "ice" }, "ditto": { "type": "normal" }, "eevee": { "type": "normal" }, "vaporeon": { "type": "water" }, "jolteon": { "type": "electric" }, "flareon": { "type": "fire" }, "porygon": { "type": "normal" }, "omanyte": { "type": "water" }, "omastar": { "type": "water" }, "kabuto": { "type": "water" }, "kabutops": { "type": "water" }, "aerodactyl": { "type": "flying" }, "snorlax": { "type": "normal" }, "articuno": { "type": "flying" }, "zapdos": { "type": "flying" }, "moltres": { "type": "flying" }, "dratini": { "type": "dragon" }, "dragonair": { "type": "dragon" }, "dragonite": { "type": "flying" }, "mewtwo": { "type": "psychic" }, "mew": { "type": "psychic" }, "chikorita": { "type": "grass" }, "bayleef": { "type": "grass" }, "meganium": { "type": "grass" }, "cyndaquil": { "type": "fire" }, "quilava": { "type": "fire" }, "typhlosion": { "type": "fire" }, "totodile": { "type": "water" }, "croconaw": { "type": "water" }, "feraligatr": { "type": "water" }, "sentret": { "type": "normal" }, "furret": { "type": "normal" }, "hoothoot": { "type": "flying" }, "noctowl": { "type": "flying" }, "ledyba": { "type": "flying" }, "ledian": { "type": "flying" }, "spinarak": { "type": "poison" }, "ariados": { "type": "poison" }, "crobat": { "type": "flying" }, "chinchou": { "type": "electric" }, "lanturn": { "type": "electric" }, "pichu": { "type": "electric" }, "cleffa": { "type": "fairy" }, "igglybuff": { "type": "fairy" }, "togepi": { "type": "fairy" }, "togetic": { "type": "flying" }, "natu": { "type": "flying" }, "xatu": { "type": "flying" }, "mareep": { "type": "electric" }, "flaaffy": { "type": "electric" }, "ampharos": { "type": "electric" }, "bellossom": { "type": "grass" }, "marill": { "type": "fairy" }, "azumarill": { "type": "fairy" }, "sudowoodo": { "type": "rock" }, "politoed": { "type": "water" }, "hoppip": { "type": "flying" }, "skiploom": { "type": "flying" }, "jumpluff": { "type": "flying" }, "aipom": { "type": "normal" }, "sunkern": { "type": "grass" }, "sunflora": { "type": "grass" }, "yanma": { "type": "flying" }, "wooper": { "type": "ground" }, "quagsire": { "type": "ground" }, "espeon": { "type": "psychic" }, "umbreon": { "type": "dark" }, "murkrow": { "type": "flying" }, "slowking": { "type": "psychic" }, "misdreavus": { "type": "ghost" }, "unown": { "type": "psychic" }, "wobbuffet": { "type": "psychic" }, "girafarig": { "type": "psychic" }, "pineco": { "type": "bug" }, "forretress": { "type": "steel" }, "dunsparce": { "type": "normal" }, "gligar": { "type": "flying" }, "steelix": { "type": "ground" }, "snubbull": { "type": "fairy" }, "granbull": { "type": "fairy" }, "qwilfish": { "type": "poison" }, "scizor": { "type": "steel" }, "shuckle": { "type": "rock" }, "heracross": { "type": "fighting" }, "sneasel": { "type": "ice" }, "teddiursa": { "type": "normal" }, "ursaring": { "type": "normal" }, "slugma": { "type": "fire" }, "magcargo": { "type": "rock" }, "swinub": { "type": "ground" }, "piloswine": { "type": "ground" }, "corsola": { "type": "rock" }, "remoraid": { "type": "water" }, "octillery": { "type": "water" }, "delibird": { "type": "flying" }, "mantine": { "type": "flying" }, "skarmory": { "type": "flying" }, "houndour": { "type": "fire" }, "houndoom": { "type": "fire" }, "kingdra": { "type": "dragon" }, "phanpy": { "type": "ground" }, "donphan": { "type": "ground" }, "porygon2": { "type": "normal" }, "stantler": { "type": "normal" }, "smeargle": { "type": "normal" }, "tyrogue": { "type": "fighting" }, "hitmontop": { "type": "fighting" }, "smoochum": { "type": "psychic" }, "elekid": { "type": "electric" }, "magby": { "type": "fire" }, "miltank": { "type": "normal" }, "blissey": { "type": "normal" }, "raikou": { "type": "electric" }, "entei": { "type": "fire" }, "suicune": { "type": "water" }, "larvitar": { "type": "ground" }, "pupitar": { "type": "ground" }, "tyranitar": { "type": "dark" }, "lugia": { "type": "flying" }, "ho-oh": { "type": "flying" }, "celebi": { "type": "grass" }, "treecko": { "type": "grass" }, "grovyle": { "type": "grass" }, "sceptile": { "type": "grass" }, "torchic": { "type": "fire" }, "combusken": { "type": "fighting" }, "blaziken": { "type": "fighting" }, "mudkip": { "type": "water" }, "marshtomp": { "type": "ground" }, "swampert": { "type": "ground" }, "poochyena": { "type": "dark" }, "mightyena": { "type": "dark" }, "zigzagoon": { "type": "normal" }, "linoone": { "type": "normal" }, "wurmple": { "type": "bug" }, "silcoon": { "type": "bug" }, "beautifly": { "type": "flying" }, "cascoon": { "type": "bug" }, "dustox": { "type": "poison" }, "lotad": { "type": "grass" }, "lombre": { "type": "grass" }, "ludicolo": { "type": "grass" }, "seedot": { "type": "grass" }, "nuzleaf": { "type": "dark" }, "shiftry": { "type": "dark" }, "taillow": { "type": "flying" }, "swellow": { "type": "flying" }, "wingull": { "type": "flying" }, "pelipper": { "type": "flying" }, "ralts": { "type": "fairy" }, "kirlia": { "type": "fairy" }, "gardevoir": { "type": "fairy" }, "surskit": { "type": "water" }, "masquerain": { "type": "flying" }, "shroomish": { "type": "grass" }, "breloom": { "type": "fighting" }, "slakoth": { "type": "normal" }, "vigoroth": { "type": "normal" }, "slaking": { "type": "normal" }, "nincada": { "type": "ground" }, "ninjask": { "type": "flying" }, "shedinja": { "type": "ghost" }, "whismur": { "type": "normal" }, "loudred": { "type": "normal" }, "exploud": { "type": "normal" }, "makuhita": { "type": "fighting" }, "hariyama": { "type": "fighting" }, "azurill": { "type": "fairy" }, "nosepass": { "type": "rock" }, "skitty": { "type": "normal" }, "delcatty": { "type": "normal" }, "sableye": { "type": "ghost" }, "mawile": { "type": "fairy" }, "aron": { "type": "rock" }, "lairon": { "type": "rock" }, "aggron": { "type": "rock" }, "meditite": { "type": "psychic" }, "medicham": { "type": "psychic" }, "electrike": { "type": "electric" }, "manectric": { "type": "electric" }, "plusle": { "type": "electric" }, "minun": { "type": "electric" }, "volbeat": { "type": "bug" }, "illumise": { "type": "bug" }, "roselia": { "type": "poison" }, "gulpin": { "type": "poison" }, "swalot": { "type": "poison" }, "carvanha": { "type": "dark" }, "sharpedo": { "type": "dark" }, "wailmer": { "type": "water" }, "wailord": { "type": "water" }, "numel": { "type": "ground" }, "camerupt": { "type": "ground" }, "torkoal": { "type": "fire" }, "spoink": { "type": "psychic" }, "grumpig": { "type": "psychic" }, "spinda": { "type": "normal" }, "trapinch": { "type": "ground" }, "vibrava": { "type": "dragon" }, "flygon": { "type": "dragon" }, "cacnea": { "type": "grass" }, "cacturne": { "type": "dark" }, "swablu": { "type": "flying" }, "altaria": { "type": "flying" }, "zangoose": { "type": "normal" }, "seviper": { "type": "poison" }, "lunatone": { "type": "psychic" }, "solrock": { "type": "psychic" }, "barboach": { "type": "ground" }, "whiscash": { "type": "ground" }, "corphish": { "type": "water" }, "crawdaunt": { "type": "dark" }, "baltoy": { "type": "psychic" }, "claydol": { "type": "psychic" }, "lileep": { "type": "grass" }, "cradily": { "type": "grass" }, "anorith": { "type": "bug" }, "armaldo": { "type": "bug" }, "feebas": { "type": "water" }, "milotic": { "type": "water" }, "castform": { "type": "normal" }, "kecleon": { "type": "normal" }, "shuppet": { "type": "ghost" }, "banette": { "type": "ghost" }, "duskull": { "type": "ghost" }, "dusclops": { "type": "ghost" }, "tropius": { "type": "flying" }, "chimecho": { "type": "psychic" }, "absol": { "type": "dark" }, "wynaut": { "type": "psychic" }, "snorunt": { "type": "ice" }, "glalie": { "type": "ice" }, "spheal": { "type": "water" }, "sealeo": { "type": "water" }, "walrein": { "type": "water" }, "clamperl": { "type": "water" }, "huntail": { "type": "water" }, "gorebyss": { "type": "water" }, "relicanth": { "type": "rock" }, "luvdisc": { "type": "water" }, "bagon": { "type": "dragon" }, "shelgon": { "type": "dragon" }, "salamence": { "type": "flying" }, "beldum": { "type": "psychic" }, "metang": { "type": "psychic" }, "metagross": { "type": "psychic" }, "regirock": { "type": "rock" }, "regice": { "type": "ice" }, "registeel": { "type": "steel" }, "latias": { "type": "psychic" }, "latios": { "type": "psychic" }, "kyogre": { "type": "water" }, "groudon": { "type": "ground" }, "rayquaza": { "type": "flying" }, "jirachi": { "type": "psychic" }, "deoxys-normal": { "type": "psychic" }, "turtwig": { "type": "grass" }, "grotle": { "type": "grass" }, "torterra": { "type": "ground" }, "chimchar": { "type": "fire" }, "monferno": { "type": "fighting" }, "infernape": { "type": "fighting" }, "piplup": { "type": "water" }, "prinplup": { "type": "water" }, "empoleon": { "type": "steel" }, "starly": { "type": "flying" }, "staravia": { "type": "flying" }, "staraptor": { "type": "flying" }, "bidoof": { "type": "normal" }, "bibarel": { "type": "water" }, "kricketot": { "type": "bug" }, "kricketune": { "type": "bug" }, "shinx": { "type": "electric" }, "luxio": { "type": "electric" }, "luxray": { "type": "electric" }, "budew": { "type": "poison" }, "roserade": { "type": "poison" }, "cranidos": { "type": "rock" }, "rampardos": { "type": "rock" }, "shieldon": { "type": "steel" }, "bastiodon": { "type": "steel" }, "burmy": { "type": "bug" }, "wormadam-plant": { "type": "grass" }, "mothim": { "type": "flying" }, "combee": { "type": "flying" }, "vespiquen": { "type": "flying" }, "pachirisu": { "type": "electric" }, "buizel": { "type": "water" }, "floatzel": { "type": "water" }, "cherubi": { "type": "grass" }, "cherrim": { "type": "grass" }, "shellos": { "type": "water" }, "gastrodon": { "type": "ground" }, "ambipom": { "type": "normal" }, "drifloon": { "type": "flying" }, "drifblim": { "type": "flying" }, "buneary": { "type": "normal" }, "lopunny": { "type": "normal" }, "mismagius": { "type": "ghost" }, "honchkrow": { "type": "flying" }, "glameow": { "type": "normal" }, "purugly": { "type": "normal" }, "chingling": { "type": "psychic" }, "stunky": { "type": "dark" }, "skuntank": { "type": "dark" }, "bronzor": { "type": "psychic" }, "bronzong": { "type": "psychic" }, "bonsly": { "type": "rock" }, "mime-jr": { "type": "fairy" }, "happiny": { "type": "normal" }, "chatot": { "type": "flying" }, "spiritomb": { "type": "dark" }, "gible": { "type": "ground" }, "gabite": { "type": "ground" }, "garchomp": { "type": "ground" }, "munchlax": { "type": "normal" }, "riolu": { "type": "fighting" }, "lucario": { "type": "steel" }, "hippopotas": { "type": "ground" }, "hippowdon": { "type": "ground" }, "skorupi": { "type": "bug" }, "drapion": { "type": "dark" }, "croagunk": { "type": "fighting" }, "toxicroak": { "type": "fighting" }, "carnivine": { "type": "grass" }, "finneon": { "type": "water" }, "lumineon": { "type": "water" }, "mantyke": { "type": "flying" }, "snover": { "type": "ice" }, "abomasnow": { "type": "ice" }, "weavile": { "type": "ice" }, "magnezone": { "type": "steel" }, "lickilicky": { "type": "normal" }, "rhyperior": { "type": "rock" }, "tangrowth": { "type": "grass" }, "electivire": { "type": "electric" }, "magmortar": { "type": "fire" }, "togekiss": { "type": "flying" }, "yanmega": { "type": "flying" }, "leafeon": { "type": "grass" }, "glaceon": { "type": "ice" }, "gliscor": { "type": "flying" }, "mamoswine": { "type": "ground" }, "porygon-z": { "type": "normal" }, "gallade": { "type": "fighting" }, "probopass": { "type": "steel" }, "dusknoir": { "type": "ghost" }, "froslass": { "type": "ghost" }, "rotom": { "type": "ghost" }, "uxie": { "type": "psychic" }, "mesprit": { "type": "psychic" }, "azelf": { "type": "psychic" }, "dialga": { "type": "dragon" }, "palkia": { "type": "dragon" }, "heatran": { "type": "steel" }, "regigigas": { "type": "normal" }, "giratina-altered": { "type": "dragon" }, "cresselia": { "type": "psychic" }, "phione": { "type": "water" }, "manaphy": { "type": "water" }, "darkrai": { "type": "dark" }, "shaymin-land": { "type": "grass" }, "arceus": { "type": "normal" }, "victini": { "type": "fire" }, "snivy": { "type": "grass" }, "servine": { "type": "grass" }, "serperior": { "type": "grass" }, "tepig": { "type": "fire" }, "pignite": { "type": "fighting" }, "emboar": { "type": "fighting" }, "oshawott": { "type": "water" }, "dewott": { "type": "water" }, "samurott": { "type": "water" }, "patrat": { "type": "normal" }, "watchog": { "type": "normal" }, "lillipup": { "type": "normal" }, "herdier": { "type": "normal" }, "stoutland": { "type": "normal" }, "purrloin": { "type": "dark" }, "liepard": { "type": "dark" }, "pansage": { "type": "grass" }, "simisage": { "type": "grass" }, "pansear": { "type": "fire" }, "simisear": { "type": "fire" }, "panpour": { "type": "water" }, "simipour": { "type": "water" }, "munna": { "type": "psychic" }, "musharna": { "type": "psychic" }, "pidove": { "type": "flying" }, "tranquill": { "type": "flying" }, "unfezant": { "type": "flying" }, "blitzle": { "type": "electric" }, "zebstrika": { "type": "electric" }, "roggenrola": { "type": "rock" }, "boldore": { "type": "rock" }, "gigalith": { "type": "rock" }, "woobat": { "type": "flying" }, "swoobat": { "type": "flying" }, "drilbur": { "type": "ground" }, "excadrill": { "type": "steel" }, "audino": { "type": "normal" }, "timburr": { "type": "fighting" }, "gurdurr": { "type": "fighting" }, "conkeldurr": { "type": "fighting" }, "tympole": { "type": "water" }, "palpitoad": { "type": "ground" }, "seismitoad": { "type": "ground" }, "throh": { "type": "fighting" }, "sawk": { "type": "fighting" }, "sewaddle": { "type": "grass" }, "swadloon": { "type": "grass" }, "leavanny": { "type": "grass" }, "venipede": { "type": "poison" }, "whirlipede": { "type": "poison" }, "scolipede": { "type": "poison" }, "cottonee": { "type": "fairy" }, "whimsicott": { "type": "fairy" }, "petilil": { "type": "grass" }, "lilligant": { "type": "grass" }, "basculin-red-striped": { "type": "water" }, "sandile": { "type": "dark" }, "krokorok": { "type": "dark" }, "krookodile": { "type": "dark" }, "darumaka": { "type": "fire" }, "darmanitan-standard": { "type": "fire" }, "maractus": { "type": "grass" }, "dwebble": { "type": "rock" }, "crustle": { "type": "rock" }, "scraggy": { "type": "fighting" }, "scrafty": { "type": "fighting" }, "sigilyph": { "type": "flying" }, "yamask": { "type": "ghost" }, "cofagrigus": { "type": "ghost" }, "tirtouga": { "type": "rock" }, "carracosta": { "type": "rock" }, "archen": { "type": "flying" }, "archeops": { "type": "flying" }, "trubbish": { "type": "poison" }, "garbodor": { "type": "poison" }, "zorua": { "type": "dark" }, "zoroark": { "type": "dark" }, "minccino": { "type": "normal" }, "cinccino": { "type": "normal" }, "gothita": { "type": "psychic" }, "gothorita": { "type": "psychic" }, "gothitelle": { "type": "psychic" }, "solosis": { "type": "psychic" }, "duosion": { "type": "psychic" }, "reuniclus": { "type": "psychic" }, "ducklett": { "type": "flying" }, "swanna": { "type": "flying" }, "vanillite": { "type": "ice" }, "vanillish": { "type": "ice" }, "vanilluxe": { "type": "ice" }, "deerling": { "type": "grass" }, "sawsbuck": { "type": "grass" }, "emolga": { "type": "flying" }, "karrablast": { "type": "bug" }, "escavalier": { "type": "steel" }, "foongus": { "type": "poison" }, "amoonguss": { "type": "poison" }, "frillish": { "type": "ghost" }, "jellicent": { "type": "ghost" }, "alomomola": { "type": "water" }, "joltik": { "type": "electric" }, "galvantula": { "type": "electric" }, "ferroseed": { "type": "steel" }, "ferrothorn": { "type": "steel" }, "klink": { "type": "steel" }, "klang": { "type": "steel" }, "klinklang": { "type": "steel" }, "tynamo": { "type": "electric" }, "eelektrik": { "type": "electric" }, "eelektross": { "type": "electric" }, "elgyem": { "type": "psychic" }, "beheeyem": { "type": "psychic" }, "litwick": { "type": "fire" }, "lampent": { "type": "fire" }, "chandelure": { "type": "fire" }, "axew": { "type": "dragon" }, "fraxure": { "type": "dragon" }, "haxorus": { "type": "dragon" }, "cubchoo": { "type": "ice" }, "beartic": { "type": "ice" }, "cryogonal": { "type": "ice" }, "shelmet": { "type": "bug" }, "accelgor": { "type": "bug" }, "stunfisk": { "type": "electric" }, "mienfoo": { "type": "fighting" }, "mienshao": { "type": "fighting" }, "druddigon": { "type": "dragon" }, "golett": { "type": "ghost" }, "golurk": { "type": "ghost" }, "pawniard": { "type": "steel" }, "bisharp": { "type": "steel" }, "bouffalant": { "type": "normal" }, "rufflet": { "type": "flying" }, "braviary": { "type": "flying" }, "vullaby": { "type": "flying" }, "mandibuzz": { "type": "flying" }, "heatmor": { "type": "fire" }, "durant": { "type": "steel" }, "deino": { "type": "dragon" }, "zweilous": { "type": "dragon" }, "hydreigon": { "type": "dragon" }, "larvesta": { "type": "fire" }, "volcarona": { "type": "fire" }, "cobalion": { "type": "fighting" }, "terrakion": { "type": "fighting" }, "virizion": { "type": "fighting" }, "tornadus-incarnate": { "type": "flying" }, "thundurus-incarnate": { "type": "flying" }, "reshiram": { "type": "fire" }, "zekrom": { "type": "electric" }, "landorus-incarnate": { "type": "flying" }, "kyurem": { "type": "ice" }, "keldeo-ordinary": { "type": "fighting" }, "meloetta-aria": { "type": "psychic" }, "genesect": { "type": "steel" }, "chespin": { "type": "grass" }, "quilladin": { "type": "grass" }, "chesnaught": { "type": "fighting" }, "fennekin": { "type": "fire" }, "braixen": { "type": "fire" }, "delphox": { "type": "psychic" }, "froakie": { "type": "water" }, "frogadier": { "type": "water" }, "greninja": { "type": "dark" }, "bunnelby": { "type": "normal" }, "diggersby": { "type": "ground" }, "fletchling": { "type": "flying" }, "fletchinder": { "type": "flying" }, "talonflame": { "type": "flying" }, "scatterbug": { "type": "bug" }, "spewpa": { "type": "bug" }, "vivillon": { "type": "flying" }, "litleo": { "type": "normal" }, "pyroar": { "type": "normal" }, "flabebe": { "type": "fairy" }, "floette": { "type": "fairy" }, "florges": { "type": "fairy" }, "skiddo": { "type": "grass" }, "gogoat": { "type": "grass" }, "pancham": { "type": "fighting" }, "pangoro": { "type": "dark" }, "furfrou": { "type": "normal" }, "espurr": { "type": "psychic" }, "meowstic-male": { "type": "psychic" }, "honedge": { "type": "ghost" }, "doublade": { "type": "ghost" }, "aegislash-shield": { "type": "ghost" }, "spritzee": { "type": "fairy" }, "aromatisse": { "type": "fairy" }, "swirlix": { "type": "fairy" }, "slurpuff": { "type": "fairy" }, "inkay": { "type": "psychic" }, "malamar": { "type": "psychic" }, "binacle": { "type": "water" }, "barbaracle": { "type": "water" }, "skrelp": { "type": "water" }, "dragalge": { "type": "dragon" }, "clauncher": { "type": "water" }, "clawitzer": { "type": "water" }, "helioptile": { "type": "normal" }, "heliolisk": { "type": "normal" }, "tyrunt": { "type": "dragon" }, "tyrantrum": { "type": "dragon" }, "amaura": { "type": "ice" }, "aurorus": { "type": "ice" }, "sylveon": { "type": "fairy" }, "hawlucha": { "type": "flying" }, "dedenne": { "type": "fairy" }, "carbink": { "type": "fairy" }, "goomy": { "type": "dragon" }, "sliggoo": { "type": "dragon" }, "goodra": { "type": "dragon" }, "klefki": { "type": "fairy" }, "phantump": { "type": "grass" }, "trevenant": { "type": "grass" }, "pumpkaboo-average": { "type": "grass" }, "gourgeist-average": { "type": "grass" }, "bergmite": { "type": "ice" }, "avalugg": { "type": "ice" }, "noibat": { "type": "dragon" }, "noivern": { "type": "dragon" }, "xerneas": { "type": "fairy" }, "yveltal": { "type": "flying" }, "zygarde": { "type": "ground" }, "diancie": { "type": "fairy" }, "hoopa": { "type": "ghost" }, "volcanion": { "type": "water" } };

var htmlHelpers = {
    capitalise: function capitalise(string) {
        return string.charAt(0).toUpperCase() + string.slice(1, string.length);
    },

    renderPokemonCard: function renderPokemonCard(pokemon) {
        var type = typeLookup[pokemon.name].type;
        return '<div class="card-item ' + type + '">\n                <img src="./assets/pokemon/' + pokemon.name + '.png" class="card-item-image" />\n                <span class="card-item-title">' + this.capitalise(pokemon.name) + '</span>\n                <p class="card-item-subtitle">' + type + '</p>\n            </div>';
    },

    renderSelectedPokemon: function renderSelectedPokemon(pokemon) {},

    setContentTitle: function setContentTitle(title) {
        document.getElementById('content-title').innerText = title;
    }
};

var request = {
    get: function get(url) {
        var request = new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();

            req.open("GET", url);
            req.send();

            req.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(this.response);
                } else {
                    reject(this.statusText);
                }
            };

            req.onerror = function () {
                reject(this.statusText);
            };
        });

        return request;
    }
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var Pokemon = function () {
    function Pokemon(app) {
        classCallCheck(this, Pokemon);

        this.pageCount = 1;

        this.requestPokemon();
        htmlHelpers.setContentTitle(app.config.title);
    }

    createClass(Pokemon, [{
        key: 'insertPokemonToHtml',
        value: function insertPokemonToHtml(data) {
            var html = '';
            data.results.forEach(function (pokemon) {
                html += htmlHelpers.renderPokemonCard(pokemon);
            });
            document.querySelector('#results').innerHTML = html;
        }
    }, {
        key: 'increasePageCount',
        value: function increasePageCount() {
            this.pageCount++;
        }
    }, {
        key: 'requestPokemon',


        // async requestPokemon() {
        //     try {
        //         let url = app.config.baseUrl + 'pokemon';
        //         let response = await request.get(url);
        //         insertPokemonToHtml(JSON.parse(response));
        //     }
        //     catch (rejection) {
        //         console.log("request failed lol" + rejection);
        //     }
        // };

        value: function requestPokemon() {
            var _this = this;

            var url = app.config.baseUrl + 'pokemon';
            request.get(url).then(function (response) {
                _this.insertPokemonToHtml(JSON.parse(response));
                _this.increasePageCount();
            }).catch(function (error) {
                console.log("request failed", error);
            });
        }
    }]);
    return Pokemon;
}();

var Menu = function Menu(app) {
    classCallCheck(this, Menu);
};

var Pokedex = function Pokedex(app) {
    classCallCheck(this, Pokedex);

    new Pokemon(app);
    new Menu(app);
};

function init(app) {
    new Pokedex(app);
}

var ctrls = [init];

var app$1 = window.app = {};
app$1.controllers = {};

app$1.config = {
    "name": "PokeDex",
    "baseUrl": "http://pokeapi.co/api/v2/",
    "title": "Pokemon"
};

ctrls.forEach(function (ctrl) {
    app$1.controllers[ctrl.name] = ctrl;
    app$1.controllers[ctrl.name](app$1);
});

}());
