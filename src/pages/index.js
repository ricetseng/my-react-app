import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import staticdata from '../../staticdata.json';
import Cell from '../components/Cell.js';
import styled from 'styled-components';

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Redesigning the New Grab <br />Passenger App</h1>
        <p>This project is focused on redesigning our UX, visual and structure hierarchy to make it a better and more familiar experience for our users, as well as create better transport experience and fulfilling different region and business needs.</p>
        <div className="HeroButton"><Link to="/page-2/">See Story</Link></div>
      </div>
      {/* <svg width="1440" height="146" viewBox="0 0 1440 146" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M721.5 81.9784C212.5 94.2378 94.4262 119.438 0 136.465V146H1440V0.5C1343.16 44.6946 1128 72.1877 721.5 81.9784Z" fill="#5A69DC"/>
      </svg> */}
      {/* <svg width="1440" height="368" viewBox="0 0 1440 368" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#5A69DC">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="
          M721.5 166.5C212.5 193.5 94.4262 249 0 286.5V367.5H1440V0C1343.16 97.3333 1128 144.937 721.5 166.5Z;
          M411.5 139C175 146.64 55 208 0.000488281 257.5V367.5H1440V0C1343.17 97.3333 767.5 127.5 411.5 139Z;
          M721.5 166.5C212.5 193.5 94.4262 249 0 286.5V367.5H1440V0C1343.16 97.3333 1128 144.937 721.5 166.5Z
          " />
        </path>
      </svg> */}
    </div>
    <div className="Cards">
      <h2>All projects</h2>
      <div className="CardGroup">
        <Card 
          title="New home page for Grab Platform"
          text="Designing the new Grab Passenger App"
          image="http://www.ricetseng.com/images/shot2_newface1600.jpg" />
        <Card 
          title="GrabFood - Merchant app"
          text="Build product start from scratch for GrabFood merchant experience"
          image="http://www.ricetseng.com/images/shot_grabfood_max_800.jpg" />
        <Card 
          title="Dictionary"
          text="A translate app designed for foreigner"
          image="http://www.ricetseng.com/images/shot3.png" />
        <Card 
          title="Yahoo! Movie"
          text="Provide end to end experience for movie feature"
          image="https://cdn.dribbble.com/users/249044/screenshots/2646694/work_shot_1600_1200_copy.jpg" />
        <Card 
          title="Pemory App"
          text="A concept app designed to solve pet-related problems"
          image="http://www.ricetseng.com/images/shot1_1.jpg" />
        <Card 
          title="Yahoo! Shopping"
          text="Deliver UX/UI design for shopping app iOS and Android in Yahoo"
          image="http://www.ricetseng.com/images/shot_shopping2.jpg" />
        <Card 
          title="Web design collection"
          text="Some web design and F2E coding during past 3 years"
          image="https://cdn.dribbble.com/users/249044/screenshots/1590318/support.jpg" />
        <Card 
          title="Prototyping"
          text="Prototyping is the process of making user experience possible"
          image="https://cdn.dribbble.com/users/249044/screenshots/3832214/data_question_dribbble.gif" />
      </div>
    </div>
    <Section
    image="images/work_redesign_s.png"
    logo="images/logo.png"
    title="Rice Tseng - Senior Product Designer"
    text="Cat lover 😻, Coffeeholic ☕️, Product Designer 👩🏻‍💻 Have 6 years of product design experience and highly skilled in mobile UX, interaction design, and prototyping. I love sharing sth on Medium and Dribbble. ⊂(◉‿◉)つ "
    // button="About Rice"
    />
    
    <SectionCaption>4 design proficiency - 15+ projects</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
