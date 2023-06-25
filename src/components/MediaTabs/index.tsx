import media from '@/mock/media.json'
import { useState } from 'react'

import { Separator } from '../Separator'
import { MediaVideosFilter } from './MediaVideosFilter'
import {
  MediaTabsContainer,
  MediaTabsContent,
  MediaTabsContentNotFound,
  MediaTabsContentNotFoundMessage,
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

type MediaVideos = typeof media.videos

const actions = {
  latest: (data: MediaVideos) =>
    data.sort(
      (videoA, videoB) =>
        Number(new Date(videoB.publishedAt).getTime()) - Number(new Date(videoA.publishedAt).getTime())
    ),
  older: (data: MediaVideos) =>
    data.sort(
      (videoA, videoB) =>
        Number(new Date(videoA.publishedAt).getTime()) - Number(new Date(videoB.publishedAt).getTime())
    )
}

type FilterActions = keyof typeof actions

export function MediaTabs() {
  const [selectedCategory, setSelectedCategory] = useState<string>(media.categories[0].value)

  const [filter, setFilter] = useState<FilterActions>('latest')

  const filteredVideos = actions[filter]
    ? actions[filter](media.videos.filter(video => video.category === selectedCategory))
    : media.videos.filter(video => video.category === selectedCategory)

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

          <MediaVideosFilter onSelect={option => setFilter(option.value as keyof typeof actions)} />
        </MediaTabsList>

        <Separator height="0.126rem" />

        {filteredVideos.length === 0 && (
          <MediaTabsContentNotFound>
            <MediaTabsContentNotFoundMessage>
              Ops! Parece que não existe nenhum vídeo publicado nessa categoria.
            </MediaTabsContentNotFoundMessage>
          </MediaTabsContentNotFound>
        )}

        {filteredVideos.length !== 0 &&
          media.categories.map((category, index) => (
            <MediaTabsContent key={`content-${category.value}-${index}`} value={category.value}>
              {filteredVideos.map((video, index) => (
                <MediaVideo
                  key={`${video.title.toLowerCase().split(' ').join('-')}-${index}`}
                  tabIndex={index}
                >
                  <MediaVideoThumbnail thumbnail={video.thumbnail}>
                    <MediaVideoThumbnailOverlay>
                      <MediaVideoPlay weight="fill" size={72} />
                    </MediaVideoThumbnailOverlay>
                  </MediaVideoThumbnail>
                  <MediaVideoTitle>
                    {video.title} ({video.publishedAt})
                  </MediaVideoTitle>
                </MediaVideo>
              ))}
            </MediaTabsContent>
          ))}

        <Separator height="0.126rem" />
      </MediaTabsRoot>
    </MediaTabsContainer>
  )
}
