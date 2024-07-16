import React from "react";
import { useState } from "react";
import Input from "./Input";

const formfield = [
  {
    name: "gender",
    type: "radio",
    title: "Gender",
    gender: [
      { label: "male", value: "male" },
      { label: "female", value: "female" },
      { label: "other", value: "other" },
    ],
  },

  {
    name: "check",
    type: "checkbox",
    title: "Education",
    educataion: [
      { key: "b", value: "b.tech" },
      { key: "m", value: "m.tech" },
      { key: "c", value: "bca" },
    ],
  },
];

const intialvalue = {
  gender: "",
  check: "",
};

const Form = () => {
  const [data, setData] = useState(intialvalue);
  const [check, setCheck] = useState([]);

  const handleChange = (fild, e) => {
    const { name, value } = e.target;
    if (fild.type === "checkbox") {
      let selectItem = data?.[name] ?? [];
      let isExist = selectItem?.some((ele) => ele === value);
      if (isExist) {
        selectItem = selectItem.filter((el) => el !== value);
      } else {
        selectItem.push(value);
      }
      setData((ele) => ({ ...ele, [name]: selectItem }));
    } else {
      setData((ele) => ({ ...ele, [name]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCheck((prev) => [...prev, data]);
    setData(intialvalue);
  };
  return (
    <div>
      {formfield.map((form) => (
        <Input
          field={form}
          onchange={(e) => handleChange(form, e)}
          value={data}
        />
      ))}

      {formfield.map((show) => (
        <div>
          {check.map((chk) => (
            <div>
              <div>{chk.title}</div>
              <div>{show?.[chk.name]}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Form;
