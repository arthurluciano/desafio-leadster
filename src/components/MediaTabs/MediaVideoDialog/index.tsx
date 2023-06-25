import { Separator } from '@/components/Separator'
import { Video } from '@/lib/entities/video'
import { X } from '@phosphor-icons/react'
import * as RadixDialog from '@radix-ui/react-dialog'

import { MediaVideoDownload } from '../MediaVideoDownload'
import {
  MediaVideoDialogClose,
  MediaVideoDialogContent,
  MediaVideoDialogContentFooter,
  MediaVideoDialogContentHeader,
  MediaVideoDialogContentHeaderTitle,
  MediaVideoDialogContentHeaderTitlePrefix,
  MediaVideoDialogContentLine,
  MediaVideoDialogContentModuleContainer,
  MediaVideoDialogContentYoutube,
  MediaVideoDialogModuleContent,
  MediaVideoDialogModuleContentText,
  MediaVideoDialogModuleTitle,
  MediaVideoDialogOverlay
} from './styles'

interface MediaVideoDialogProps {
  video: Video | null
  handleCloseDialog: () => void
}

export function MediaVideoDialog({ video, handleCloseDialog }: MediaVideoDialogProps) {
  return (
    <RadixDialog.Root open={!!video} onOpenChange={() => handleCloseDialog()}>
      <RadixDialog.Portal>
        <MediaVideoDialogOverlay />
        <MediaVideoDialogContent>
          <MediaVideoDialogContentLine />
          <MediaVideoDialogContentHeader>
            <MediaVideoDialogClose>
              <X size={18} weight="bold" />
            </MediaVideoDialogClose>

            <MediaVideoDialogContentHeaderTitle>
              <MediaVideoDialogContentHeaderTitlePrefix>Webinar: </MediaVideoDialogContentHeaderTitlePrefix>
              {video?.title}
            </MediaVideoDialogContentHeaderTitle>
          </MediaVideoDialogContentHeader>
          <MediaVideoDialogContentYoutube src={video?.url} />
          <MediaVideoDialogContentFooter>
            <MediaVideoDialogContentModuleContainer>
              <MediaVideoDialogModuleTitle>Descrição</MediaVideoDialogModuleTitle>

              <Separator />

              <MediaVideoDialogModuleContent>
                <MediaVideoDialogModuleContentText>{video?.description}</MediaVideoDialogModuleContentText>
              </MediaVideoDialogModuleContent>
            </MediaVideoDialogContentModuleContainer>

            <MediaVideoDialogContentModuleContainer>
              <MediaVideoDialogModuleTitle>Downloads</MediaVideoDialogModuleTitle>

              <Separator />

              <MediaVideoDialogModuleContent>
                {video?.downloads.map((download, index) => (
                  <MediaVideoDownload
                    key={`${download.filename}-${download.extension}-${index}`}
                    download={download}
                  />
                ))}
              </MediaVideoDialogModuleContent>
            </MediaVideoDialogContentModuleContainer>
          </MediaVideoDialogContentFooter>
        </MediaVideoDialogContent>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
