
export const formObj = {
  "दिनांक / समय": "",
  "चयन": "",
  "जनरल डायरी प्रकार": "",
  "जनरल डायरी उप-प्रकार": "",
  "प्रविष्टि (अधिकारी के लिए)": "",
  "विषय": ""
}

export const formFields1 = [   
    {
      label: "दिनांक / समय",
      value: "", // Placeholder for the selected value
      type: "date",
    //   options: ["एक", "विचित्र"],
      selectedOption: ""
    },
    {
        label: "चयन",
        type: "radio",
        selectedOption: ""
      },

    {
      label: "जनरल डायरी प्रकार",
      type: "dropdown",    
    },
    {
      label: "जनरल डायरी उप-प्रकार",
      type: "dropdown",
    },
    {
      label: "प्रविष्टि (अधिकारी के लिए)",
      type: "dropdown",  
    },
    {
      label: "विषय", 
      type: "text",
      maxLength: 100
    },  
    {
      label: "विषय",
      type: "text",
      maxLength: 100
    },  

  ];
  export const formFields2 = [     
    {
      label: "संक्षिप्त जनरत विवरण(FIR का संक्षिप्त ज्ञापन रिपोर्ट आदि के लिए)",
      type: "textarea",
      maxLength: 20000
    }
  ];

  

  
  export const optionsList = (fields) => {
    if (fields.label === 'जनरल डायरी प्रकार') {
      return gdTypes;
    } else if (fields.label === "प्रविष्टि (अधिकारी के लिए)") {
      return EntryOfficer;
    } else if (fields.label === "जनरल डायरी उप-प्रकार") {
      return subGdType;
    } else {
      return [];
    }
  };
  export const subGdType = [
    {id: 1, name: "Male",  value: 'Male'},
    {id: 2, name: "Female",  value: 'Female'},
    {id: 3 ,name: "Transgender",  value: 'Trnasgender'},   
  ]
  
  export const gdTypes = [
    { name: "प्रस्थान", value: "Prasthaan" },
    { name: "प्रशासनिक", value: "Prashasanik" },
    { name: "जांच / पंजीकरण", value: "Jaach / Panjikaran" },
    { name: "निवारक कार्रवाई", value: "Nivarak Karyawaahi" },
    { name: "अन्य", value: "Anya" }
  ]
  
  export const EntryOfficer = [
    { name: "io grp mavli", value: "io grp mavli" },
    { name: "Anil Kumar Sepat", value: "Anil Kumar Sepat" },
    { name: "sho mavli grp", value: "sho mavli grp" },
    { name: "Shiv Kumar Sharma", value: "Shiv Kumar Sharma" },
    { name: "khushvant", value: "khushvant" },
    { name: "sanjay sharma", value: "sanjay sharma" },
    { name: "RAMESH KUMAR JAT", value: "RAMESH KUMAR JAT" },
    { name: "Maneet J", value: "Maneet J" },
    { name: "Sonu Kumar Sharma", value: "Sonu Kumar Sharma" },
    { name: "SATISH KUMAR GURJAR", value: "SATISH KUMAR GURJAR" },
    { name: "Mahendra I", value: "Mahendra I" },
    { name: "HARDEV RAM", value: "HARDEV RAM" },
    { name: "subhash I", value: "subhash I" },
    { name: "ramdev mahala", value: "ramdev mahala" },
    { name: "RATAN LAL", value: "RATAN LAL" },
    { name: "RAMU SINGH", value: "RAMU SINGH" },
    { name: "manoj kumar kumawat", value: "manoj kumar kumawat" },
    { name: "Ravi shankar sharma", value: "Ravi shankar sharma" },
    { name: "RAJESH KUMAR TAKHAR", value: "RAJESH KUMAR TAKHAR" }
];
