
import { useEffect, useState } from "react"
import { FaRepeat } from "react-icons/fa6";


import a from "./../assets/signs/a.jpg"
import b from "./../assets/signs/b.jpg"
import c from "./../assets/signs/c.jpg"
import d from "./../assets/signs/d.jpg"
import e from "./../assets/signs/e.jpg"
import f from "./../assets/signs/f.jpg"
import g from "./../assets/signs/g.jpg"
import h from "./../assets/signs/h.jpg"
import i from "./../assets/signs/i.jpg"
import j from "./../assets/signs/j.jpg"
import k from "./../assets/signs/k.jpg"
import l from "./../assets/signs/l.jpg"
import m from "./../assets/signs/m.jpg"
import n from "./../assets/signs/n.jpg"
import o from "./../assets/signs/o.jpg"
import p from "./../assets/signs/p.jpg"
import r from "./../assets/signs/r.jpg"
import s from "./../assets/signs/s.jpg"
import t from "./../assets/signs/t.jpg"
import u from "./../assets/signs/u.jpg"
import v from "./../assets/signs/v.jpg"
import w from "./../assets/signs/w.jpg"
import x from "./../assets/signs/x.jpg"
import y from "./../assets/signs/y.jpg"
import z from "./../assets/signs/z.jpg"
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
