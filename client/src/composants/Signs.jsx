
import { useEffect, useState } from "react"
import { FaRepeat } from "react-icons/fa6";


import a from "./../../public/signs/a.jpg"
import b from "./../../public/signs/b.jpg"
import c from "./../../public/signs/c.jpg"
import d from "./../../public/signs/d.jpg"
import e from "./../../public/signs/e.jpg"
import f from "./../../public/signs/f.jpg"
import g from "./../../public/signs/g.jpg"
import h from "./../../public/signs/h.jpg"
import i from "./../../public/signs/i.jpg"
import j from "./../../public/signs/j.jpg"
import k from "./../../public/signs/k.jpg"
import l from "./../../public/signs/l.jpg"
import m from "./../../public/signs/m.jpg"
import n from "./../../public/signs/n.jpg"
import o from "./../../public/signs/o.jpg"
import p from "./../../public/signs/p.jpg"
import r from "./../../public/signs/r.jpg"
import s from "./../../public/signs/s.jpg"
import t from "./../../public/signs/t.jpg"
import u from "./../../public/signs/u.jpg"
import v from "./../../public/signs/v.jpg"
import w from "./../../public/signs/w.jpg"
import x from "./../../public/signs/x.jpg"
import y from "./../../public/signs/y.jpg"
import z from "./../../public/signs/z.jpg"
const signs_dict = {
    a:<img src={a} alt="a" />,
    b:<img src={b} alt="b" />,
    c:<img src={c} alt="c" />,
    d:<img src={d} alt="d" />,
    e:<img src={e} alt="e" />,
    f:<img src={f} alt="f" />,
    g:<img src={g} alt="g" />,
    h:<img src={h} alt="h" />,
    i:<img src={i} alt="i" />,
    j:<img src={j} alt="j" />,
    k:<img src={k} alt="k" />,
    l:<img src={l} alt="l" />,
    m:<img src={m} alt="m" />,
    n:<img src={n} alt="n" />,
    o:<img src={o} alt="o" />,
    p:<img src={p} alt="p" />,

    r:<img src={r} alt="r" />,
    s:<img src={s} alt="s" />,
    t:<img src={t} alt="t" />,
    u:<img src={u} alt="u" />,
    v:<img src={v} alt="v" />,
    w:<img src={w} alt="w" />,
    x:<img src={x} alt="x" />,
    y:<img src={y} alt="y" />,
    z:<img src={z} alt="z" />,

}
function getSign(character){
    character=character.toLowerCase();
    if(character in signs_dict){
        return <img 
        src={signs_dict[character].props.src} 
        alt={character} 
        style={{ 
            width: "180px", 
            height: "300px", 
            minWidth: "500px", 
            maxWidth: "1200px" 
        }} 
    />;
    }else{
        return character;
    }
}
function Signs({story}) {
    const characters = story.split("");
    const[currentCharacter, setCurrentCharacter] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(currentCharacter === characters.length-1){
                clearInterval(interval);
            }
            setCurrentCharacter((currentCharacter)=>currentCharacter+1);
        }, 1000);
        return ()=>clearInterval(interval);
    })
  return (
    <div>
        <div>{getSign(characters[currentCharacter])}</div>
        <button onClick={()=>setCurrentCharacter(0)}><FaRepeat className="text-green-200 text-3xl" /></button>
      
      
    </div>
  )
}

export default Signs
