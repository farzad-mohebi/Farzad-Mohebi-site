import React from "react"

import IndexLayout from "../components/layout/IndexLayout"

import SkillList from "../components/SkillList"
import getSkillData from "../static_queries/getSkillData"

function Skills() {
  const data = getSkillData()
  return (
    <IndexLayout ident="skills" idx="04" name="Skills">
      <SkillList listData={data} />
    </IndexLayout>
  )
}

export default Skills
