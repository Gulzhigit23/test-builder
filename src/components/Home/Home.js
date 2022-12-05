import React from "react";

import styled from "styled-components";
import AllTest from "../Tests/AllTest";
import SingleTest from "../Tests/SingleTest";

function Home() {
  
  return (
    <HomePage>
      <QUIZMAKER>
        <img
          alt="Quiz Maker Logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAAaCAYAAABikagwAAAAB3RJTUUH4wEHBR0bj3G1ngAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAASrSURBVHja7VgtVCNBDO57FYiKCsQKRAWiAoGoOIGoQFQgEBUViBUIBAKBQCAQCAQCUYFAVCAQCASiAoFAIBCIEwhEBQKBqEAgKubmu81ALs1Mf64/0Lffe3nQTSYzky8zyW4mkyJFihRBGGNyVmIr0bTXMoK9VGgvXH78voYNRsEkKE97LSPYy63pxo/f17DBmLfSsFKc9lpGsJcDKw8psTOKlNgZxbcn1i5qzkrJyrqVBfYcTcIy/e+aH8iK4mPRpw81GfCvNCJSlgO2EekiWm8Z+xFz5Glv0OV6xAK2v6xskH2+X2JFjLhUPePRd6yRFBR9FIhF0cqW+605h8ErLQ5/3608ktN71BM2yW8rHdRKxQ+C+kx+GkIHf20ts6lefVhpKeLWtcdsJUDYqXgGf6tWslbOhe4FSaysH0lzpfiHrxMtIRRiC0ZHSyHsRrG75wSTT4mGlTP2u+uQuexE8O6Ewy169uqIZbqGRmwvvfF0xUTWrcdXnYjIB4h9NTratBYNSMAsm2fB9MZVH8SCsJYytilIfQnMg4MVsZidmq8D4/QcC1rgEKg3o2fjIQ2cCrEmuZ7+sTfJCcTJehKbw5ybVi6UQOHEIlHr4vm6sjZH+q6VbSvXYsxaiFgl+ZBci2IMP21vNNeO2NOJEiOOK9pT7COhLZ2IIE7ixIKoiniWp6yue+a4ZZs8FmvmGX0jxrWYbp89j8gnpCr88TFHIWJNUps77FlN2EdCHzPdKk+IALEoh9mMDzSJMZ7CzgIxVmI9Pi4pg+c8ek6sXF+T6WSt5zXUlzRZWusKkfUY8MdxJE7dmeK7wvSo3bhlYpJN4S9i4zixatnikyyTYSlgM3FikWiU1b8CNiFiGwEiQroC6fmJkggRK1FT1r1t+gcvQQMRWybDQsBmosSapIlpyznHTaxJbi/ehLXN19XcDvgLAaUkJ+z3J0HsYh+B1ohFl3Y5JmLRrODq89eQ8RB7IgiZ88wVIrZmumusbIJqTIerOA7I0Fdxjgx3BiQWkzyMmliTdHnY7JJ4/rfmjZlYXpfrYsxDwF/XCbN/j9kzkFxi9stiTPc7qB6b/ollAbr36PDh4l0JXI0IiJQx+IL1OiixpMNcu75xYyaWP0cyo0MtCZL6JdZ9G3BAYvB35numw+sOvnDh9lwySXOFVzb5ijQwsWVPcDDJExEodSAPdedcLBh1Cl3n4yDEmuRE3hFZWWXciiPWfH0d+mAb/UwkIuhNBO7Yo2tTEAsU3H6AE4j3+23T/SEC/tAZzys6vKJUWWw7Jgy3n3mKy4fQI8bh026SK7BDAULQ8IKO07NmlKuYxmzQZM8UnGsKGsac0Hhcb0WWcZe0qCYFx31Ncm3+DQVfSpMRG/sioZwgh1ZAB7iTdq3okHDyw4ZblwaQUPDoDlj8UIufPHbgYVscBg1xphdMcu244O8xQlRiWeYd0phdNiY2Xx2l+2B9q0ik2HuFbCs99JruIqD7XCPZIDFPiTisC7dJUdjvkWi+kNSRRxeL+OHmq9IYHKgj+s0btyiw7kpmWISITfGDkRI7o0iJnTGYpKFCU+QaJNSdwv97TjFVUEH3Nhkpvif+AIMrWy4QjZxrAAAAAElFTkSuQmCC"
        ></img>
        
      </QUIZMAKER>
      <div>
        <h1>Create an awsome quiz in a minutes</h1>
      </div>
      <AllTest />
      <SingleTest />
    </HomePage>
  );
}

export default Home;

const HomePage = styled.div`
  /* background-color: #0555e6;
  height: 100%;
  color: white; */
  & h1 {
    color: #fff;
    font-size: 3.2em;
    margin: 0;
    margin-top: 3rem;
  }
`;

const QUIZMAKER = styled.div`
  text-align: left;
  margin-top: 1rem;
`;
