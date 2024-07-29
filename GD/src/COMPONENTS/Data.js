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
        value: "", // Placeholder for the selected value
        type: "radio",
        options: ["एक", "विचित्र"],
        selectedOption: ""
      },

    {
      label: "जनरल डायरी प्रकार",
      value: "", // Placeholder for the selected value
      type: "dropdown",
      options: [] // Add the dropdown options here
    },
    {
      label: "जनरल डायरी उप-प्रकार",
      value: "", // Placeholder for the selected value
      type: "dropdown",
      options: [] // Add the dropdown options here
    },
    {
      label: "प्रविष्टि (अधिकारी के लिए)",
      value: "", // Placeholder for the selected value
      type: "dropdown",
      options: [] // Add the dropdown options here
    },
    {
      label: "विषय",
      value: "", // Placeholder for the text input
      type: "text",
      maxLength: 100
    },  
  ];
  export const formFields2 = [     
    {
      label: "संक्षिप्त जनरत विवरण(FIR का संक्षिप्त ज्ञापन रिपोर्ट आदि के लिए)",
      value: "", // Placeholder for the textarea input
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
    // {id: 3 ,name: "Unknown",  value: 'Unknwon'},
  ]
  
  export const gdTypes = [
    { name: "प्रस्थान", value: "Prasthaan" },
    { name: "प्रशासनिक", value: "Prashasanik" },
    { name: "जांच / पंजीकरण", value: "Jaach / Panjikaran" },
    { name: "निवारक कार्रवाई", value: "Nivarak Karyawaahi" },
    { name: "अन्य", value: "Anya" }
  ]
  
  export const EntryOfficer = [
    { name: "io grp mavli", value: "iogrp" },
    { name: "Anil Kumar Sepat", value: "274/201810733750" },
    { name: "sho mavli grp", value: "sho" },
    { name: "Shiv Kumar Sharma", value: "shivkumar" },
    { name: "khushvant", value: "200814046254" },
    { name: "sanjay sharma", value: "201830851996" },
    { name: "RAMESH KUMAR JAT", value: "414/200810022909" },
    { name: "Maneet J", value: "493/201801083779" },
    { name: "Sonu Kumar Sharma", value: "700/201538010540" },
    { name: "SATISH KUMAR GURJAR", value: "1262/201810048782" },
    { name: "Mahendra I", value: "200810003738" },
    { name: "HARDEV RAM", value: "200810038041" },
    { name: "subhash I", value: "201810447781" },
    { name: "ramdev mahala", value: "2018030037501" },
    { name: "RATAN LAL", value: "283/199801006642" },
    { name: "RAMU SINGH", value: "295/200714002516" },
    { name: "manoj kumar kumawat", value: "297/201822054495" },
    { name: "Ravi shankar sharma", value: "392/201804049333" },
    { name: "RAJESH KUMAR TAKHAR", value: "408/200101003213" }
  ]