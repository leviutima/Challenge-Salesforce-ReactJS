import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const CardElement = styled.div`
  text-align: center;
  padding: 30px;
  max-width: 40%;
  border-radius: 40px;
  width: 800px;
  background: ${colors.primary};

  & img {
    width: 120vw;
    object-fit: cover;
    border-radius: 28px;
  }

  & h2 {
    margin-bottom: 8px;
    font-size: clamp(16px, 2.2vw, 4vw);
    font-weight: 400;
    color: ${colors.text.title};
  }

  @media screen and (max-width: 767px) {
    & img {
        width: 100%;
        object-fit: cover;
        border-radius: 15px;
      }
  }
`;

export const CardContent = styled.div`
  margin: 8px 16px 16px 16px;

  color: ${colors.text.main};
  & h2 {
    margin-bottom: 8px;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.text.title};
  }

  & p {
    min-height: 168px;
    font-size: 1rem;
  }

  & button {
    width: 100%;
    margin-top: 16px;
  }
`;
