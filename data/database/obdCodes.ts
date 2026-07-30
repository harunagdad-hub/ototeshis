import { OBDCode } from "@/types/obdCode";

export const obdCodes: OBDCode[] = [

{
code:"P0401",

title:"EGR Flow Insufficient",

description:"Egzoz gazı devridaim akışı yetersiz.",

severity:"Yüksek",

system:"Emisyon",

symptoms:[

"Motor arıza lambası",

"Çekiş kaybı",

"Siyah duman",

"Yakıt tüketimi artışı"

],

causes:[

"EGR kurumlanması",

"Vakum kaçağı",

"EGR valfi arızası"

],

diagnostics:[

"OBD taraması",

"Canlı veri kontrolü",

"EGR adaptasyonu"

],

solutions:[

"EGR temizliği",

"Conta değişimi",

"EGR değişimi"

],

relatedFaults:[

"egr"

],

engineFamilies:[

"ea288",

"ea189"

]

},

{
code:"P0299",

title:"Turbo Underboost",

description:"Turbo basıncı düşük.",

severity:"Yüksek",

system:"Turbo",

symptoms:[

"Çekiş kaybı",

"Turbo sesi",

"Siyah duman"

],

causes:[

"Turbo aşınması",

"Vakum kaçağı",

"Intercooler hortumu"

],

diagnostics:[

"Boost testi",

"Vakum testi"

],

solutions:[

"Hortum kontrolü",

"Turbo revizyonu"

],

relatedFaults:[

"turbo"

],

engineFamilies:[

"ea288",

"ea888-gen3"

]

}

];