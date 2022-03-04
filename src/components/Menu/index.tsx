import { FC } from 'react'
import Headview3d from 'react-headview3d'
import * as headview3d from 'headview3d'

import { Container } from './styles'

const Menu: FC = () => {
  return (
    <Container>
      <Headview3d
        skinUrl="https://mc-heads.net/download/FL0RASTEY"
        height={64}
        width={64}
        onReady={(skinViewer: headview3d.SkinViewer) => {
          const control = headview3d.createOrbitControls(skinViewer)
          control.enableRotate = true
          control.enableZoom = true
          control.enablePan = false
        }}
      />
    </Container>
  )
}

export default Menu
