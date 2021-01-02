import React, { Component } from "react";
import { InputLight } from "./Input";
import { BtnInput } from "./Button";
import { Box, Flex } from "rebass/styled-components";

const url =
  "https://gmail.us7.list-manage.com/subscribe/post?u=b371c51eaf9d6296d5d3e9b47&amp;id=3166fba74d";

class SignupForm extends Component {
  render() {
    return (
      <div id="mc_embed_signup">
        <form
          action={url}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <Flex id="mc_embed_signup_scroll" mx="auto">
            <Box flexGrow={1} mr={2} className="mc-field-group">
              <InputLight
                type="email"
                placeholder="Email Address"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
              />
              <span id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </span>

              <div
                style={{ position: "absolute", left: -5000 }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_b371c51eaf9d6296d5d3e9b47_3166fba74d"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>
            </Box>

            <BtnInput
              as="input"
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </Flex>
        </form>
      </div>
    );
  }
}

export default SignupForm;
