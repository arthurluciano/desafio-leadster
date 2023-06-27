import { Video } from '@/lib/entities/video'
import media from '@/mock/media.json'
import { usePagination } from '@mantine/hooks'
import { useEffect, useState } from 'react'

import { Separator } from '../Separator'
import { MediaVideoDialog } from './MediaVideoDialog'
import { MediaVideosFilter } from './MediaVideosFilter'
import {
  MediaTabsContainer,
  MediaTabsContent,
  MediaTabsContentNotFound,
  MediaTabsContentNotFoundMessage,
  MediaTabsList,
  MediaTabsListAlign,
  MediaTabsPage,
  MediaTabsPageText,
  MediaTabsPagesContainer,
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

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const [filter, setFilter] = useState<FilterActions>('latest')

  const filteredVideos = actions[filter]
    ? actions[filter](media.videos.filter(video => video.category === selectedCategory))
    : media.videos.filter(video => video.category === selectedCategory)

  const maxPages = Math.ceil(filteredVideos.length / 9)

  const pagination = usePagination({ total: maxPages, initialPage: 1 })

  function handleSelectCategory(category: string) {
    setSelectedCategory(category)
  }

  function handleCloseDialog() {
    setSelectedVideo(null)
  }

  useEffect(() => {
    pagination.setPage(1)
  }, [selectedCategory])

  return (
    <MediaTabsContainer>
      <MediaVideoDialog video={selectedVideo} handleCloseDialog={handleCloseDialog} />

      <MediaTabsRoot defaultValue={selectedCategory}>
        <MediaTabsList aria-label="Selecione um tipo de vídeo">
          <MediaTabsListAlign>
            {media.categories.map((category, index) => (
              <MediaTabsTrigger
                key={`${category.value}-${index}`}
                value={category.value}
                onClick={() => handleSelectCategory(category.value)}
                data-testid={`${category.value}-trigger`}
              >
                {category.label}
              </MediaTabsTrigger>
            ))}
          </MediaTabsListAlign>

          <MediaVideosFilter onSelect={option => setFilter(option.value as FilterActions)} />
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
              {filteredVideos
                .slice((pagination.active - 1) * 9, pagination.active * 9)
                .map((video, index) => (
                  <MediaVideo
                    key={`${video.title.toLowerCase().split(' ').join('-')}-${index}`}
                    tabIndex={index}
                    onClick={() => setSelectedVideo(video)}
                    data-testid={`${category.value}-video`}
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

        {filteredVideos.length !== 0 && (
          <MediaTabsPagesContainer>
            <MediaTabsPageText>Página</MediaTabsPageText>

            {pagination.range.map((page, index) => {
              if (page === 'dots') return '...'

              return (
                <MediaTabsPage
                  type="button"
                  key={`page-${index}`}
                  selected={pagination.active === page}
                  onClick={() => pagination.setPage(page)}
                >
                  {page}
                </MediaTabsPage>
              )
            })}
          </MediaTabsPagesContainer>
        )}
      </MediaTabsRoot>
    </MediaTabsContainer>
  )
}
