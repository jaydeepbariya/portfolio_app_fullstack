import React from 'react'

const Skill = ({skill}) => {
    // className={`w-[${skill.proficiency}] uppercase bg-slate-400 text-slate-800 py-1 px-1`}
    console.log(skill);

  return (
    <div className='w-full bg-slate-900 flex justify-between items-center'>
        <div  style={{width:skill.proficiency, color: "black", backgroundColor:'rgb(203 213 225)', padding:"4px 2px"}}>{skill.name}</div>
        <span>{skill.proficiency}</span>
    </div>
  )
}

export default Skill