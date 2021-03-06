import styled from "styled-components"
import { get } from "theme"

const Dropdown: any = styled.ul`
  position: absolute;
  width: 100%;
  height: auto;
  max-height: 100px;
  top: ${({ fieldHeight }: any) => fieldHeight - 15 || 50}px;
  left: 0px;
  background: ${get("colors.white")};
  border: 1px solid #e6e6e6;
  z-index: 9;
  padding: 0;
  list-style: none;
  font-family: ${get("fonts.body")};
  font-size: ${get("fontSize.sm")};
  display: none;
  overflow-y: scroll;

  &.has-focus {
    display: block;
    ${get("components.dropdown.focus")}
  }

  li {
    padding: 8px 10px;
    color: ${get("colors.black")};
    ${get("components.dropdown.li")}

    &:hover {
      cursor: pointer;
      background: ${get("colors.primary")};
      color: ${get("colors.white")};
      ${get("components.dropdown.li.hover")}
    }
  }

  ${get("components.dropdown")};
`

export default Dropdown
