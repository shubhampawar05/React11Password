import React, { useRef, useState } from "react";

export default function Home() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [specialchar, setSpecialchar] = useState(true);
  const [number, setNumber] = useState(true);

  // useRef hook
  const refrence = useRef(null)

  const copytoclipbord =()=>{
    refrence.current?.select()
    window.navigator.clipboard.writeText(password);
    // alert('Password copied');
  }
  function genratepassword() {
    let pass = "";
    let str = "";
    if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) str += "abcdefghijklmnopqrstuvwxyz";
    if (specialchar) str += '/*-+!@#$%^&*()_+:"?><,./[]{}';
    if (number) str += "123456789";
    if(uppercase===false && lowercase===false && specialchar===false && number ===false ){
        alert('please select atleast on checkbox')
    }else{
        for (let i = 1; i <= length; i++) {
          let idx = Math.floor(Math.random() * str.length + 1);
          pass += str.charAt(idx);
        }
    }
    console.log(pass);
    setPassword(pass);
  }

  return (
    <div>
      <section className="max-w-screen-xl mx-auto ">
        <div className="text-center py-8 ">
          <h2 className="text-3xl font-semibold ">Password Generator</h2>
          <div className="py-2">
            <input
              type="text"
              className="border-2 rounded-sm px-2 py-1"
              value={password}
              readOnly
              ref={refrence}
            />
            <button onClick={copytoclipbord} className="px-4 py-2 bg-blue-400 text-white rounded-lg active:bg-blue-600 active:text-black">
              Copy
            </button>
          </div>
          <div>
            <input
              type="number"
              onChange={(e) => setLength(e.target.value)}
              className="border border-black px-2 py-0 mx-2 rounded"
              min={8}
              max={50}
              value={length}
            />
            <h2 className="inline">
              Select Password length(**8-50 characters**)
            </h2>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />{" "}
            <label> upper case</label>
            <br />
            <input
              type="checkbox"
              defaultChecked={lowercase}
              onChange={() => setLowercase(!lowercase)}
            />{" "}
            <label> lower case</label>
            <br />
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => setNumber(!number)}
            />{" "}
            <label> numbers</label>
            <br />
            <input
              type="checkbox"
              defaultChecked={specialchar}
              onChange={() => setSpecialchar(!specialchar)}
            />{" "}
            <label> symbols</label>
          </div>
          <button
            className="px-4 py-1 border bg-slate-500 rounded-md active:text-white active:bg-black"
            onClick={genratepassword}
          >
            Generate Password
          </button>
        </div>
      </section>
    </div>
  );
}
