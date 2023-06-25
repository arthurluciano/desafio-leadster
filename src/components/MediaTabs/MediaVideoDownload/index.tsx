import { Download } from '@/lib/entities/video'
import { theme } from '@/styles/theme'
import { CloudArrowDown } from '@phosphor-icons/react'

import {
  MediaVideoDownloadButton,
  MediaVideoDownloadButtonLabelContainer,
  MediaVideoDownloadIconContainer
} from './styles'

const DOWNLOAD_VARIANTS = {
  xls: {
    background: theme.colors.green300,
    color: theme.colors.green600,
    iconBackground: theme.colors.green400
  },
  ppt: {
    background: theme.colors.yellow300,
    color: theme.colors.yellow600,
    iconBackground: theme.colors.yellow400
  },
  doc: {
    background: theme.colors.brand200,
    color: theme.colors.brand500,
    iconBackground: theme.colors.brand300
  }
}

function returnVariantColors(download: Download) {
  const variant = DOWNLOAD_VARIANTS[download.extension as keyof typeof DOWNLOAD_VARIANTS]

  if (!variant)
    return {
      background: theme.colors.gray300,
      color: theme.colors.gray500,
      iconBackground: theme.colors.gray400
    }

  return variant
}

interface MediaVideoDownloadProps {
  download: Download
}

export function MediaVideoDownload({ download }: MediaVideoDownloadProps) {
  const fullFilename = `${download.filename}.${download.extension}`

  const variant = returnVariantColors(download)

  return (
    <MediaVideoDownloadButton type="button" variant={variant}>
      <MediaVideoDownloadIconContainer>
        <CloudArrowDown weight="bold" size={14} />
      </MediaVideoDownloadIconContainer>
      <MediaVideoDownloadButtonLabelContainer>{fullFilename}</MediaVideoDownloadButtonLabelContainer>
    </MediaVideoDownloadButton>
  )
}
