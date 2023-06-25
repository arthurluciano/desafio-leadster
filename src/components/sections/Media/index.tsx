import { MediaTabs } from '@/components/MediaTabs'

import { MediaContainer, MediaContent } from './styles'

export function Media() {
  return (
    <MediaContainer>
      <MediaContent>
        <MediaTabs />
      </MediaContent>
    </MediaContainer>
  )
}
