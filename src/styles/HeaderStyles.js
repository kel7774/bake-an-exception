import styled from 'styled-components'

const HeaderStyles = styled.nav`
height: 3rem;
background-color: white;
.full-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
a {
  text-decoration: none;
}
ul {
  background-color: white;
  list-style: none;
  margin: 0;
  padding-left: 0;
}
li {
  color: black;
  background-color: white;
  text-transform: uppercase;
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}
li a {
  color: black;
}
li:hover,
li:focus-within {
  background: grey;
  cursor: pointer;
}
li:focus-within a {
  outline: none;
}
ul li ul {
  background-color: white;
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}
ul li:hover > ul,
ul li:focus-within > ul,
ul li ul:hover,
ul li ul:focus {
  visibility: visible;
  opacity: 1;
  display: block
}
ul li ul li {
  clear: both;
  width: 100%;
}
`

export default HeaderStyles
