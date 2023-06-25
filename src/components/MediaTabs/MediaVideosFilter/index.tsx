import { theme } from '@/styles/theme'
import { CaretDown } from '@phosphor-icons/react'
import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import { useEffect, useRef, useState } from 'react'

import {
  MediaVideosFilterContent,
  MediaVideosFilterItem,
  MediaVideosFilterLabel,
  MediaVideosFilterPanel,
  MediaVideosFilterTriggerContainer
} from './styles'

export interface MediaVideosFilterOption {
  label: string
  value: string
}

const OPTIONS: MediaVideosFilterOption[] = [
  {
    value: 'latest',
    label: 'Data de publicação'
  },
  {
    value: 'older',
    label: 'Mais antigos'
  }
]

interface MediaVideosFilterProps {
  onSelect?: (option: MediaVideosFilterOption) => void
}

export function MediaVideosFilter({ onSelect }: MediaVideosFilterProps) {
  const [filterWidth, setFilterWidth] = useState(0)

  const [selected, setSelected] = useState<MediaVideosFilterOption>(OPTIONS[0])

  const selectRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setFilterWidth(selectRef.current!.offsetWidth)

    // The timeout is used to set select width in input before it is rendered.
    const resize = () => setTimeout(() => setFilterWidth(selectRef.current!.offsetWidth), 2)

    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [])

  function handleSelectOption(option: MediaVideosFilterOption) {
    setSelected(option)

    onSelect?.(option)
  }

  return (
    <RadixDropdown.Root>
      <MediaVideosFilterTriggerContainer>
        <MediaVideosFilterLabel>Ordenar por</MediaVideosFilterLabel>
        <RadixDropdown.Trigger asChild>
          <MediaVideosFilterPanel ref={selectRef}>
            {selected.label} <CaretDown size={14} weight="fill" color={theme.colors.zinc500} />
          </MediaVideosFilterPanel>
        </RadixDropdown.Trigger>
      </MediaVideosFilterTriggerContainer>
      <RadixDropdown.Portal>
        <MediaVideosFilterContent width={filterWidth} sideOffset={4}>
          {OPTIONS.map(option => (
            <MediaVideosFilterItem
              key={option.value}
              selected={option.value === selected.value}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </MediaVideosFilterItem>
          ))}
        </MediaVideosFilterContent>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  )
}
