import React from "react"

import Container from "../components/Container"

const User = props =>
  <div
    css={{ display: `flex`, alignItems: `center`, margin: `0 auto 12px auto` }}
  >

    <img
      src={props.avatar}
      css={{ flex: `0 0 96px`, width: 96, height: 96, margin: 0 }}
    />

    <div css={{ flex: 1, marginLeft: 18, padding: 12 }}>
      <h2 css={{ margin: `0 0 12px 0`, padding: 0 }}>
        {props.username}
      </h2>
      <p css={{ margin: 0 }}>
        {props.excerpt}
      </p>
    </div>
  </div>

export default () =>
  <Container>
    <h1>About Glamor</h1>
    <p>Glamor is cool</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />

    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Container>
