import styled from 'styled-components'

export const WorkspaceContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0,1fr);
  grid-template-rows: 0fr 0fr 1fr 0fr;
  overflow: hidden;
`