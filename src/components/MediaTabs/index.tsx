import media from '@/mock/media.json'
import { useState } from 'react'

import { Separator } from '../Separator'
import { MediaVideosFilter } from './MediaVideosFilter'
import {
  MediaTabsContainer,
  MediaTabsContent,
  MediaTabsList,
  MediaTabsListAlign,
  MediaTabsRoot,
  MediaTabsTrigger,
  MediaVideo,
  MediaVideoPlay,
  MediaVideoThumbnail,
  MediaVideoThumbnailOverlay,
  MediaVideoTitle
} from './styles'

export function MediaTabs() {
  const [selectedCategory, setSelectedCategory] = useState<string>(media.categories[0].value)

  const filteredVideos = media.videos.filter(video => video.category === selectedCategory)

  function handleSelectCategory(category: string) {
    setSelectedCategory(category)
  }

  return (
    <MediaTabsContainer>
      <MediaTabsRoot defaultValue={selectedCategory}>
        <MediaTabsList aria-label="Selecione um tipo de vídeo">
          <MediaTabsListAlign>
            {media.categories.map((category, index) => (
              <MediaTabsTrigger
                key={`${category.value}-${index}`}
                value={category.value}
                onClick={() => handleSelectCategory(category.value)}
              >
                {category.label}
              </MediaTabsTrigger>
            ))}
          </MediaTabsListAlign>

          <MediaVideosFilter />
        </MediaTabsList>

        <Separator height="0.126rem" />

        {media.categories.map((category, index) => (
          <MediaTabsContent key={`content-${category.value}-${index}`} value={category.value}>
            {filteredVideos.map((video, index) => (
              <MediaVideo key={`${video.title.toLowerCase().split(' ').join('-')}-${index}`} tabIndex={index}>
                <MediaVideoThumbnail thumbnail={video.thumbnail}>
                  <MediaVideoThumbnailOverlay>
                    <MediaVideoPlay weight="fill" size={72} />
                  </MediaVideoThumbnailOverlay>
                </MediaVideoThumbnail>
                <MediaVideoTitle>{video.title}</MediaVideoTitle>
              </MediaVideo>
            ))}
          </MediaTabsContent>
        ))}

        <Separator height="0.126rem" />
      </MediaTabsRoot>
    </MediaTabsContainer>
  )
}
