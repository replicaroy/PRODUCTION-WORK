export const personDeatails = {
  'यूआईडी': "",
  "प्रथम नाम": "",
  "मध्य नाम": "",
  "अंतिम नाम": "",
  'लिंग': "",
  "संबंध प्रकार": "",
  "संबंधी का नाम": "",
  "वर्ण प्रकार": "",
  "पहचान के मार्क": "",
  "आवेदक का फोटो": "",
  "जन्म तिथि": "",
  "आयु (वर्ष/महीना)": "",
  "जन्म का वर्ष": "",
  "आयु सीमा (से - तक)": "",
  "ईमेल आईडी": "",
  "ऊंचाई कम सीमा": "",
  "ऊंचाई ऊपरी सीमा": "",
  "संपर्क विवरण": "",
  "मोबाइल नंबर": "",
  "लैंडलाइन नंबर": "",
};

export const optionsList = (field) => {
  if (field.name === 'लिंग') {
    return sex;
  } else if (field.name === "वर्ण प्रकार") {
    return colourTypes;
  } else if (field.name === "संबंध प्रकार") {
    return relationType;
  } else {
    return [];
  }
};
export const genderField = [
  {id: 1, name: "Male",  value: 'Male'},
  {id: 2, name: "Female",  value: 'Female'},
  {id: 3 ,name: "Transgender",  value: 'Trnasgender'},
  // {id: 3 ,name: "Unknown",  value: 'Unknwon'},
]

export const sex = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
  { name: "Unknown", value: "unknown" },
  { name: "Transgender", value: "transgender" },
];

export const relationType = [
  { name: "अभिभावक", value: "अभिभावक" },
  { name: "पति", value: "पति" },
  { name: "पत्नी", value: "पत्नी" },
  { name: "पिता", value: "पिता" },
  { name: "मां", value: "मां" },
];

export const colourTypes = [
  { name: "गहरा भूरा", value: "गहरा भूरा" },
  { name: "साफ/गोरा", value: "साफ/गोरा" },
  { name: "गहरा काला", value: "गहरा काला" },
  { name: "हलका पीला", value: "हलका पीला" },
  { name: "काला - विदेशी प्रकार", value: "काला - विदेशी प्रकार" },
  { name: "गेहुँआ - विदेशी प्रकार", value: "गेहुँआ - विदेशी प्रकार" },
  { name: "साफ/गोरा - विदेशी प्रकार", value: "साफ/गोरा - विदेशी प्रकार" },
];

export const formfieldsarray = [
  { name: "यूआईडी", type: 'text', title: 'यूआईडी', required: true },
  { name: 'प्रथम नाम', type: 'text', title: 'प्रथम नाम', required: true },
  { name: 'मध्य नाम', type: 'text', title: 'मध्य नाम', required: false },
  { name: "अंतिम नाम", type: 'text', title: 'अंतिम नाम', required: true },
  // { name: "लिंग", type: 'dropdown', title: 'लिंग', required: true },
 
  { name: "संबंध प्रकार", type: 'dropdown', title: 'संबंध प्रकार', required: true },
  { name: "संबंधी का नाम", type: 'text', title: 'संबंधी का नाम', required: true },
  { name: "वर्ण प्रकार", type: 'dropdown', title: 'वर्ण प्रकार', required: false },
  { name: "पहचान के मार्क", type: 'text', title: 'पहचान के मार्क', required: true },
  { name: "आवेदक का फोटो", type: 'file', title: 'आवेदक का फोटो', required: true },
];

export const formfieldsarray2 = [
  { name: "जन्म तिथि", type: 'date', title: 'जन्म तिथि', required: true },
  { name: "आयु (वर्ष/महीना)", type: 'text', title: 'आयु (वर्ष/महीना)', required: false },
  { name: "जन्म का वर्ष", type: 'text', title: 'जन्म का वर्ष', required: false },
  { name: "आयु सीमा (से - तक)", type: 'text', title: 'आयु सीमा (से - तक)', required: false },
  { name: "ईमेल आईडी", type: 'text', title: 'ईमेल आईडी', required: true },
  { name: "ऊंचाई कम सीमा", type: 'text', title: 'ऊंचाई कम सीमा', required: true },
  { name: "ऊंचाई ऊपरी सीमा", type: 'text', title: 'ऊंचाई ऊपरी सीमा', required: true },
  { name: "मोबाइल नंबर", type: 'number', title: 'मोबाइल नंबर', required: false },
  { name: "लैंडलाइन नंबर", type: 'number', title: 'लैंडलाइन नंबर', required: false },
  { name: "लिंग", type: 'radio', title: 'लिंग', required: true },
];


// export const PersonDeatails = [
//   { 'यूआईडी': "" },
//   { "प्रथम नाम": "" },
//   { "मध्य नाम": "" },
//   { "अंतिम नाम": "" },
//   { 'लिंग': "" },
//   { "संबंध प्रकार": "" },
//   { "संबंधी का नाम": "" },
//   { "वर्ण प्रकार": "" },
//   { "पहचान के मार्क": "" },
//   { "आवेदक का फोटो": "" },
//   { "जन्म तिथि": "" },
//   { "आयु (वर्ष/महीना)": "" },
//   { "जन्म का वर्ष": "" },
//   { "आयु सीमा(से - तक)": "" },
//   { "ईमेल आईडी": "" },
//   { "ऊंचाई कम सीमा": "" },
//   { "ऊंचाई ऊपरी सीमा": "" },
//   { "संपर्क विवरण": "" },
//   { "मोबाइल नंबर": "" },
//   { "लैंडलाइन नंबर": "" },

// ];

// export const optionsList = (field) => {
//  if (field.name === 'लिंग') {
//     return sex;
//   } else if (field.name === "वर्ण प्रकार") {
//     return colourTypes;
//   } else if (field.name === "संबंध प्रकार") {
//     return relationType;
//   } else {
//     return [];
//   }
// };


// export const sex = [
//   { name: "Male", value: "male" },
//   { name: "Female", value: "female" },
//   { name: "Unknown", value: "unknown" },
//   { name: "Transgender", value: "transgender" },
// ];

// export const relationType = [
//   // { name: "-----चयन-----", value: "-----चयन-----" },
//   { name: "अभिभावक", value: "अभिभावक" },
//   { name: "पति", value: "पति" },
//   { name: "पत्नी", value: "पत्नी" },
//   { name: "पिता", value: "पिता" },
//   { name: "मां", value: "मां" },
// ];

// export const colourTypes = [
//   // { name: "-----चयन-----", vlaue:  },
//   { name: "गहरा भूरा ", value: "गहरा भूरा " },
//   { name: " साफ/गोरा", value: "साफ/गोरा " },
//   { name: "गहरा काला ", value: "गहरा काला " },
//   { name: "हलका पीला ", value: "हलका पीला " },
//   { name: "काला - विदेशी प्रकार", value: "काला - विदेशी प्रकार" },
//   { name: " गेहुँआ - विदेशी प्रकार", value: "गेहुँआ - विदेशी प्रकार " },
//   { name: "साफ/गोरा - विदेशी प्रकार ", value: "साफ/गोरा - विदेशी प्रकार " },
// ];

// // आयु पैनल
// // export const ageDetails = [
// //   { "जन्म तिथि": "" },
// //   { "आयु (वर्ष/महीना)": "" },
// //   { "मध्य नाम": "" },
// //   { "जन्म का वर्ष": "" },
// //   { "आयु सीमा(से - तक)": "" },

// // ];

// // export const BodyMeasures = [
// //   { "ईमेल आईडी": "" },
// //   { "ऊंचाई कम सीमा": "" },
// //   { "ऊंचाई ऊपरी सीमा": "" },
// // ];

// // // संचार विवरण
// // export const contactDetails = [
// //   { "संपर्क विवरण": "" },
// //   { "मोबाइल नंबर": "" },
// //   { "लैंडलाइन नंबर": "" },
// // ];

// export const formfieldsarray = [
//     {name: "यूआईडी", type: 'text', title: 'यूआईडी', optionlabel: 'name' , required: true },
//     {name:'प्रथम नाम', type: 'text', title: 'प्रथम नाम', optionlabel: 'name' , required: true },
//     {name:  'मध्य नाम' , type: 'text', title: 'मध्य नाम', optionlabel: 'name' , required: false  },
//     {name:  "अंतिम नाम" , type: 'text', title: 'अंतिम नाम', optionlabel: 'name' , required: true },
//     {name:  "लिंग", type: 'dropdown', title: 'लिंग', optionlabel: 'name'  , required: true, placeholder: '-----चयन-----'},
//     {name: "संबंध प्रकार" , type: 'dropdown', title: 'संबंध प्रकार', optionlabel: 'name' , required: true, placeholder: '-----चयन-----' },  
//     {name: "संबंधी का नाम" , type: 'text', title: 'संबंधी का नाम', optionlabel: 'name' , required: true }, 
//     {name: "वर्ण प्रकार", type: 'dropdown', title: 'वर्ण प्रकार', optionlabel: 'name' , required: false, placeholder: '-----चयन-----'  },
//     // {name: "जन्म - स्थान", type: 'text', title: 'जन्म - स्थान', optionlabel: 'name' , required: true },
//     {name: "पहचान के मार्क" , type: 'text', title: 'पहचान के मार्क', optionlabel: 'name' , required: true },  
//     {name: "आवेदक का फोटो" , type: 'file', title: 'आवेदक का फोटो', optionlabel: 'name' , required: true },  
//     // {name: "Known works" , type: 'check', title: 'Known works', optionlabel: 'Known works' , required: true },  
//     // {name: 'work prefrence' , type: 'radio', title: 'work prefrence', optionlabel: 'work prefrence' , required: true },  
// ]

// export const formfieldsarray2 = [
    
//     {name: "जन्म तिथि" , type: 'date', title: 'जन्म तिथि', optionlabel: 'name' , required: true },  
//     {name: "आयु (वर्ष/महीना)", type: 'text', title: 'आयु (वर्ष/महीना)', optionlabel: 'name', required: false },
//     {name: "जन्म का वर्ष", type: 'text', title: 'जन्म का वर्ष', optionlabel: 'name', required: false  },
//     {name: "आयु सीमा (से - तक)", type: 'text', title: 'आयु सीमा (से - तक)', optionlabel: 'name', required: false },
//     {name: "ईमेल आईडी", type: 'text', title: 'ईमेल आईडी', optionlabel: 'name' },
//     // {name: "लंबाई (सेमी)", type: 'text', title: "लंबाई (सेमी.)", optionlabel: 'name', required: true },
//     {name: "ऊंचाई कम सीमा", type: 'text', title: "ऊंचाई कम सीमा", optionlabel: 'name', required: true },
//     {name: "ऊंचाई ऊपरी सीमा", type: 'text', title: "ऊंचाई ऊपरी सीमा", optionlabel: 'name', required: true },
//     // {name: "संपर्क विवरण", type: 'dropdown', title: 'गठन', optionlabel: 'name', required: false },
//     {name: "मोबाइल नंबर", type: 'number', title: 'मोबाइल नंबर', optionlabel: 'name', required: false },
//     {name: "लैंडलाइन नंबर", type: 'number', title: 'लैंडलाइन नंबर', optionlabel: 'name', required: false },
//   ]