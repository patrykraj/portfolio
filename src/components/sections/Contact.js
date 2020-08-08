import React, { useEffect, useRef } from "react";

import SectionContainer from "../styled/SectionContainer";
import SectionTitle from "../styled/SectionTitle";

import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Contact = ({ onSetContactRef }) => {
  const contactRef = useRef();

  useEffect(() => {
    onSetContactRef(contactRef);
  });

  return (
    <SectionContainer ref={contactRef}>
      <SectionTitle>Contact</SectionTitle>
      <div>
        <h3>Contact me and check out my work:</h3>
        <ContactLinksContainer>
          <li>
            <a
              href="https://github.com/patrykraj"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <AiFillGithub />
              </span>
              patrykraj
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <AiFillLinkedin />
              </span>
              Patryk Krajewski
            </a>
          </li>
          <li>
            <a
              href="https://gmail.com"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <AiOutlineMail />
              </span>
              patryk081108@gmail.com
            </a>
          </li>
        </ContactLinksContainer>
      </div>
    </SectionContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetContactRef: (ref) => dispatch(actions.setContactRef(ref)),
  };
};
export default connect(null, mapDispatchToProps)(Contact);

const ContactLinksContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-flow: column;
  max-width: 247px;
  margin: 2rem auto;
  padding: 0;

  .contact-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    margin: 0.7rem 0;

    span {
      display: flex;
      align-items: center;
      font-size: 2rem;
      margin-right: 1rem;
    }
  }
`;
