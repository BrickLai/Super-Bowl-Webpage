import React from 'react'
import Button from "./Button";

function Banner(props) {
  return (
    <section className="banner"> 
        <div className="bannerCharacters">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </div>

        <div className="twoBtns">
          <Button class="btnOne" name="Primary"/>
          <Button class="btnTwo" name="Secondary"/>
        </div>
    </section>
  )
}

export default Banner;