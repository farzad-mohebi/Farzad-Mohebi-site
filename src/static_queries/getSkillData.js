import { graphql, useStaticQuery } from "gatsby"

function GetSkillData() {
  const data = useStaticQuery(graphql`
    {
      allSkillDataJson {
        edges {
          node {
            item {
              name
              rate
              tag
            }
            id
            set
          }
        }
      }
    }
  `)

  return data.allSkillDataJson.edges
}

export default GetSkillData
