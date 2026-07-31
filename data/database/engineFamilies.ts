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

}

];
