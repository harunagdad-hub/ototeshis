import { EngineFamily } from "@/types/engineFamily";

export const engineFamilies: EngineFamily[] = [

{
id:"ea111",

name:"EA111",

manufacturer:"Volkswagen Group",

fuel:"Benzin",

years:"2005-2015",

description:"TSI motor ailesi.",

commonFaults:[
"timing-chain",
"coil",
"water-pump"
]

},

{
id:"ea211",

name:"EA211",

manufacturer:"Volkswagen Group",

fuel:"Benzin",

years:"2012-",

description:"Yeni nesil TSI motor ailesi.",

commonFaults:[
"wastegate",
"water-pump",
"thermostat"
]

},

{
id:"ea288",

name:"EA288",

manufacturer:"Volkswagen Group",

fuel:"Dizel",

years:"2012-",

description:"Common Rail dizel motor ailesi.",

commonFaults:[
"egr",
"dpf",
"turbo",
"adblue",
"maf"
]

},

{
id:"ea888-gen3",

name:"EA888 Gen3",

manufacturer:"Volkswagen Group",

fuel:"Benzin",

years:"2013-",

description:"GTI ve R modellerinde kullanılan motor.",

commonFaults:[
"oil-consumption",
"water-pump",
"pcv",
"carbon-build-up"
]

},

{
id:"n47",

name:"N47",

manufacturer:"BMW",

fuel:"Dizel",

years:"2007-2015",

description:"BMW'nin yaygın kullanılan dört silindirli common rail dizel motor ailesi.",

commonFaults:[
"timing-chain",
"swirl-flap"
]

},

{
id:"b47",

name:"B47",

manufacturer:"BMW",

fuel:"Dizel",

years:"2014-",

description:"N47'nin yerini alan yeni nesil modüler dizel motor ailesi.",

commonFaults:[
"swirl-flap",
"egr",
"dpf"
]

},

{
id:"n20",

name:"N20",

manufacturer:"BMW",

fuel:"Benzin",

years:"2011-2017",

description:"Turbo benzinli dört silindirli motor ailesi.",

commonFaults:[
"vanos",
"timing-chain"
]

},

{
id:"k9k",

name:"K9K",

manufacturer:"Renault-Nissan Alliance",

fuel:"Dizel",

years:"2001-",

description:"Renault, Nissan ve Dacia modellerinde yaygın kullanılan 1.5 litrelik common rail dizel motor ailesi.",

commonFaults:[
"injector",
"egr",
"dpf",
"turbo"
]

},

{
id:"ecoboost",

name:"EcoBoost",

manufacturer:"Ford",

fuel:"Benzin",

years:"2012-",

description:"Ford'un küçük hacimli, turbo şarjlı benzinli motor ailesi. Özellikle 2012-2019 arası üretilen 1.0-1.6 litrelik versiyonları soğutma sistemi kaynaklı silindir kapağı çatlaması ile tanınır.",

commonFaults:[
"coolant-leak"
]

},

{
id:"ecoblue",

name:"EcoBlue",

manufacturer:"Ford",

fuel:"Dizel",

years:"2016-",

description:"Ford'un 2016 sonrası dizel motor ailesi. Yağ banyosunda çalışan (wet belt) triger kayışı tasarımıyla bilinir.",

commonFaults:[
"wet-belt",
"egr",
"dpf"
]

},

{
id:"m270-m274",

name:"M270 / M274",

manufacturer:"Mercedes-Benz",

fuel:"Benzin",

years:"2011-",

description:"Mercedes'in dört silindirli turbo benzinli motor ailesi. Zincir gerdiricisi ve kam mili ayarlayıcılarında bilinen aşınma sorunlarıyla tanınır.",

commonFaults:[
"timing-chain-mb"
]

},

{
id:"om651",

name:"OM651",

manufacturer:"Mercedes-Benz",

fuel:"Dizel",

years:"2008-",

description:"Mercedes'in yaygın kullanılan 2.1-2.2 litrelik dört silindirli common rail dizel motor ailesi.",

commonFaults:[
"egr",
"dpf",
"injector"
]

},

{
id:"toyota-petrol",

name:"1ZR / 2ZR",

manufacturer:"Toyota",

fuel:"Benzin",

years:"2007-",

description:"Toyota'nın 1.6-1.8 litrelik Valvematic/VVT-i benzinli motor ailesi. Piston segmanı tasarımı kaynaklı yağ tüketimi ile bilinir.",

commonFaults:[
"oil-consumption"
]

},

{
id:"toyota-diesel",

name:"D-4D",

manufacturer:"Toyota",

fuel:"Dizel",

years:"2005-",

description:"Toyota'nın 1.4-2.0 litrelik common rail dizel motor ailesi.",

commonFaults:[
"egr",
"dpf"
]

},

{
id:"ep6-thp",

name:"EP6 / THP (Prince)",

manufacturer:"PSA-BMW",

fuel:"Benzin",

years:"2006-",

description:"PSA (Peugeot-Citroën) ve BMW'nin birlikte geliştirdiği 1.6 litrelik turbo benzinli 'Prince' motor ailesi. Zincir gerdiricisi arızasıyla tanınır.",

commonFaults:[
"timing-chain-thp"
]

},

{
id:"dv6-bluehdi",

name:"DV6 / BlueHDi",

manufacturer:"PSA",

fuel:"Dizel",

years:"2004-",

description:"PSA grubunun 1.6 litrelik common rail dizel motor ailesi (Ford ile de paylaşılan erken nesil TDCi dahil).",

commonFaults:[
"egr",
"dpf",
"swirl-flap"
]

},

{
id:"cdti",

name:"CDTI",

manufacturer:"Opel",

fuel:"Dizel",

years:"2004-",

description:"Opel'in 1.3-2.0 litrelik common rail dizel motor ailesi.",

commonFaults:[
"egr",
"dpf",
"turbo"
]

},

{
id:"crdi",

name:"CRDi",

manufacturer:"Hyundai-Kia",

fuel:"Dizel",

years:"2004-",

description:"Hyundai-Kia grubunun 1.4-2.0 litrelik common rail dizel motor ailesi.",

commonFaults:[
"egr",
"dpf"
]

},

{
id:"multijet",

name:"MultiJet",

manufacturer:"Fiat",

fuel:"Dizel",

years:"2003-",

description:"Fiat'ın 1.3-2.0 litrelik common rail dizel motor ailesi. Birçok markayla (Opel, Suzuki, Ford) paylaşılmıştır.",

commonFaults:[
"egr",
"dpf",
"turbo"
]

}

];
