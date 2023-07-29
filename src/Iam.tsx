import React, { useState } from "react";
import "./Iam.css"

const Iam = () =>{
  const [lanJp,setLanJp] = useState(1)
  const [name,setName] = useState('大●　●生')
  const [old,setOld] = useState(32)
  const labelArrayStr:(string)[][]=[
    ['name','old','hobby','日本語へ','The background image is a picture of a frozen runny nose.'],
    ['名前','年齢','趣味','English','背景は、鼻水が凍った時の写真です。'],
  ]
  const [labelText,setLabelText]=useState(labelArrayStr[lanJp]);
  const hobbyArrayStr:(string)[][]=[
    ['anime','games','sleep','be lazy'],
    ['アニメ','ゲーム','寝る','怠惰する'],
  ]
  const [hobbyNo,setHobbyNo]=useState(1)
  const [hobby,setHobby]=useState(hobbyArrayStr[lanJp][hobbyNo]);

  const lanChage = () => {
    let lanNo =0;
    if(lanJp == 0){
      setLanJp(1);
      lanNo = 1
      setName('大● ●生')
    }else{
      setLanJp(0);
      lanNo =0
      setName('S●o Oh●')
    }
    setLabelText(labelArrayStr[lanNo])
    setHobby(hobbyArrayStr[lanNo][hobbyNo])
  }

  const hobbyChage = () => {
    let hNo = hobbyNo +1
    hNo >=hobbyArrayStr[lanJp].length?hNo=0:''
    setHobbyNo(hNo)
    setHobby(hobbyArrayStr[lanJp][hNo])
  }

  return (

    <div className="IAM">
    <button className="IAM-Button" onClick={lanChage}>{labelText[3]}</button>
      <h3>The自己紹介</h3>
      <p>{labelText[0]} : {name}</p>
      <button className="IAM-Button" onClick={()=>setOld(old+1)}>+</button><button className="IAM-Button" onClick={()=>setOld(old-1)}>-</button>
      <p>{labelText[1]} : {old}</p>
      <button className="IAM-Button" onClick={hobbyChage}>▶</button>
      <p>{labelText[2]} : {hobby}</p>
      <p>{labelText[4]} </p>
    </div>

  );
  // return(

  //     <p>test</p>

  // );
}

export default Iam;