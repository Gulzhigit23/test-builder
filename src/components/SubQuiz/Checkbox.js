import { CheckBox,  } from "@mui/icons-material";
import styled from "styled-components";




function Checked({ toggleHandle, id, checked }) {
  return (
    <Check>
      <CheckBox
      className="checked"
        style={checked ? { color: "red" } : {}}
        onClick={() => toggleHandle({ id })}
      />
      
    </Check>
  );
}

export default Checked;
const Check = styled.div`
& .checked {
    position: relative;
    left: 120px;
}
`