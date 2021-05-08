import './Footer.css'

const imgPath = './assets'
const email = `${imgPath}/email_logo_448.png`
const github = `${imgPath}/github_logo_512.png`
const linkedin = `${imgPath}/linkedin_logo_512.png`
const height = "40px"

export default function Footer() {

  return (
    <div className="footer">
      <a className="logo" href="mailto:dylan.havelock@gmail.com"><img src={email} height={height} alt="Email"></img></a>
      <a className="logo" href="https://github.com/dhavelock"><img src={github} height={height} alt="GitHub"></img></a>
      <a className="logo" href="https://www.linkedin.com/in/dylan-havelock/"><img src={linkedin} height={height} alt="LinkedIn"></img></a>
    </div>
  )
}