
export const formVal = {  
"यूआईडी":     '',
'प्रथम नाम':    '',
'मध्य नाम':     '',
"अंतिम नाम":    '',
"लिंग":         '',
"वर्ण":          '',
"जन्म-स्थान":  '',
"जन्म तिथि":     '',
'Known works': '',
"आयु (वर्ष/महीना)": '',
"जन्म का वर्ष": '',
"आयु सीमा (से-तक)": '',
"लंबाई (सेमी)": '',
"गठन": '',
"बालों का प्रकार": '',
"आँखों के प्रकार": '',
"पहचान चिन्ह": '',
"ज्ञात भाषाएँ": '',
}



export const formfieldsarray = [
  {name: "यूआईडी", type: 'text', title: 'यूआईडी', optionlabel: 'name' , required: true },
  {name:'प्रथम नाम', type: 'text', title: 'प्रथम नाम', optionlabel: 'name' , required: true },
  {name:  'मध्य नाम' , type: 'text', title: 'मध्य नाम', optionlabel: 'name' , required: false  },
  {name:  "अंतिम नाम" , type: 'text', title: 'अंतिम नाम', optionlabel: 'name' , required: true },
  {name:  "लिंग", type: 'dropdown', title: 'लिंग', optionlabel: 'name'  , required: true},
  {name: "वर्ण", type: 'dropdown', title: 'वर्ण', optionlabel: 'name' , required: false },
  {name: "जन्म - स्थान", type: 'text', title: 'जन्म - स्थान', optionlabel: 'name' , required: true },
  {name: "जन्म तिथि" , type: 'date', title: 'जन्म तिथि', optionlabel: 'name' , required: true },  
  {name: "Known works" , type: 'check', title: 'Known works', optionlabel: 'Known works' , required: true },  
]

export const formfieldsarray2 = [

  {name: "आयु (वर्ष/महीना)", type: 'text', title: 'आयु (वर्ष/महीना)', optionlabel: 'name', required: false },
  {name: "जन्म का वर्ष", type: 'text', title: 'जन्म का वर्ष', optionlabel: 'name', required: false  },
  {name: "आयु सीमा (से - तक)", type: 'text', title: 'आयु सीमा (से - तक)', optionlabel: 'name', required: false },
  {name: "लंबाई (सेमी)", type: 'text', title: "लंबाई (सेमी.)", optionlabel: 'name', required: true },
  {name: "गठन", type: 'dropdown', title: 'गठन', optionlabel: 'name', required: false },
  {name: "बालों का प्रकार", type: 'dropdown', title: 'बालों का प्रकार', optionlabel: 'name', required: false },
  {name: "आँखों के प्रकार", type: 'dropdown', title: 'आँखों के प्रकार', optionlabel: 'name' },
  {name: "पहचान चिन्ह", type: 'dropdown', title: 'पहचान चिन्ह', optionlabel: 'name', required: true },
  {name: "ज्ञात भाषाएँ", type: 'dropdown', title: 'ज्ञात भाषाएँ', optionlabel: 'name' , required: false},
]

export const sex = [
{name: 'Male', value: 'male'},
{name: 'Female', value: 'female'},
{name: 'Transgender', value: 'transgender'},
{name: 'Unknown', value: 'unknown'},
] 

export const colourTypes = [
  {name: 'काला - विदेशी प्रकार', value: 'काला - विदेशी प्रकार'},
  {name: 'गहरा काला ', value: 'गहरा काला '},
  {name: 'गहरा भूरा ', value: 'गहरा भूरा '},
  {name: ' गेहुँआ - विदेशी प्रकार', value: 'गेहुँआ - विदेशी प्रकार '},
  {name: ' साफ/गोरा', value: 'साफ/गोरा '},
  {name: 'साफ/गोरा - विदेशी प्रकार ', value: 'साफ/गोरा - विदेशी प्रकार '},
  {name: 'हलका पीला ', value: 'हलका पीला '}
]

export   const optionsList = (field) => {
  switch (field.name) {
    case 'पहचान चिन्ह': return recogniseMarks;
    case 'लिंग': return sex;
    case 'वर्ण': return colourTypes;
    case 'गठन': return bodyTypes;
    case 'बालों का प्रकार': return hairTypes;
    case 'आँखों के प्रकार': return eyeTypes;
    case 'ज्ञात भाषाएँ': return languages;
    default: return [];
  }
};

export const bodyTypes = [

  {name: 'पतला/पतली ', value: 'पतला/पतली '},
  {name: ' ', value: ' '},
  {name: 'बहुत मोटा/मोटी ', value: 'बहुत मोटा/मोटी '},
  {name: 'बहुत लंबा / पतला  (कंकाल) ', value: 'बहुत लंबा / पतला  (कंकाल) '},
  {name: ' मोटा/मोटी', value: ' '},
  {name: ' मोटा/मोटी ', value: 'मोटा/मोटी '},
  {name: 'मज़बूत ', value: ' मज़बूत'},
  {name: 'सामान्य/मध्यम ', value: 'सामान्य/मध्यम '},
  {name: 'हृष्ट-पुष्ट ', value: 'हृष्ट-पुष्ट '},
]

export const hairTypes = [
  {name: 'गलमुच्छा ', value: 'गलमुच्छा '},
  {name: ' घुंघराले - काले', value: 'घुंघराले - काले '},
  {name: 'घुंघराले - काले और स्लेटी/ग्रे ', value: 'घुंघराले - काले और स्लेटी/ग्रे '},
  {name: 'घुंघराले - स्लेटी/ग्रे ', value: 'घुंघराले - स्लेटी/ग्रे '},
  {name: 'पूरा गंजा ', value: 'पूरा गंजा '},
  {name: 'मध्य से गंजा ', value: 'मध्य से गंजा '},
  {name: 'सामने से गंजा ', value: 'सामने से गंजा '},
  {name: 'सामान्य ', value: 'सामान्य '},
  {name: 'सामान्य स्लेटी/ग्रे ', value: 'सामान्य स्लेटी/ग्रे '},
]
export const eyeTypes = [
  {name: 'आँख मे फुली ', value: 'आँख मे फुली '},
  {name: 'आंखों में झाइयां ', value: 'आंखों में झाइयां '},
  {name: 'उभरी हुई आँख ', value: 'उभरी हुई आँख '},
  {name: 'काना ', value: 'काना '},
  {name: 'धंसी हुई आँख ', value: 'धंसी हुई आँख '},
  {name: ' बिल्ली आँख', value: 'बिल्ली आँख '},
  {name: 'सँकरी ', value: 'सँकरी '},
  {name: 'सामान्य ', value: 'सामान्य '},
  {name: ' सुस्पष्ट रूप से छोटी आँख', value: 'सुस्पष्ट रूप से छोटी आँख '},
  {name: ' सुस्पष्ट रूप से बड़ी आँख', value: 'सुस्पष्ट रूप से बड़ी आँख '},
  {name: 'स्पष्ट रूप से / व्यापक रूप से दूर ', value: 'स्पष्ट रूप से / व्यापक रूप से दूर '},
  {name: 'स्पष्ट रूप से निकट ', value: 'स्पष्ट रूप से निकट '},
]

export const recogniseMarks = [
  {name: 'जलने का निशान', value: 'जलने का निशान '},
  {name: 'श्‍वेत दाग की बीमारी/ फुलवैरी(सफेद चक्कते) ', value: 'श्‍वेत दाग की बीमारी/ फुलवैरी(सफेद चक्कते) '},
  {name: 'ति‍ल (छोटा) ', value: 'ति‍ल (छोटा) '},
  {name: 'काले निशान (बड़े) ', value: 'काले निशान (बड़े) '},
  {name: 'गोदना ', value: 'गोदना '},
  {name: 'दाग / क्षत चिह्न ', value: 'दाग / क्षत चिह्न '},
  {name: 'गोदना का निशान ', value: 'गोदना का निशान '},
  {name: 'कोई अन्य ', value: 'कोई अन्य '},
  {name: ' ', value: ' '},
]

export const languages = [
    {name: 'अंग्रेजी', value: '14'},
    {name: 'अंग्रेजी', value: '14'},
    {name: 'अंग्रेजी', value: '14'},
    {name: 'अंग्रेजी', value: '14'},
    {name: 'अका', value: '55'},
    {name: 'अदि', value: '54'},
    {name: 'अन्‍य क्षेत्रिय भाषा', value: '115'},
    {name: 'अपातनी', value: '56'},
    {name: 'अवधी', value: '2'},
    {name: 'असमियां', value: '1'},
]






