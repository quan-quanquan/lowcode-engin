import React from "react"
export function Page(props) {
  return (
    <>
      <FDPage ref="fdpage-bb43fbb0">
        <FDSection>
          <FDBlock mode="transparent">
            <FDCell align="left" verAlign="top">
              <FDP>
                <NextText type="h1" children="Home" />
              </FDP>
            </FDCell>
          </FDBlock>
          <FDBlock mode="transparent">
            <FDRow>
              <FDCell align="left" verAlign="top">
                <FDP>
                  <NextText
                    type="h5"
                    children="\u591A\u8BED\u8A00\u5C55\u793A"
                  />
                </FDP>
                <FDP>
                  <NextText type="inherit" />
                  <NextText type="inherit" />
                </FDP>
              </FDCell>
              <FDCell align="left" verAlign="top">
                <FDP>
                  <NextText type="h5" children="\u4EA4\u4E92\u5C55\u793A" />
                </FDP>
                <FDP>
                  <Button
                    prefix="next-"
                    type="primary"
                    size="medium"
                    htmlType="button"
                    component="button"
                    children="constants"
                    iconSize="xxs"
                    ref="button-4951c2d3"
                  />
                  <Button
                    prefix="next-"
                    type="primary"
                    size="medium"
                    htmlType="button"
                    component="button"
                    children="utils"
                    iconSize="xxs"
                  />
                </FDP>
              </FDCell>
            </FDRow>
          </FDBlock>
          <FDBlock mode="transparent">
            <FDCell align="left" verAlign="top">
              <FDP>
                <NextText type="inherit" children="Powered By Lowcode Engine" />
              </FDP>
            </FDCell>
          </FDBlock>
        </FDSection>
      </FDPage>
    </>
  )
}
