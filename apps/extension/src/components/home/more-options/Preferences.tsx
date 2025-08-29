import SectionCard, { SectionDivider, SectionItem } from './Section'
import React from 'react'
import { capitalize } from '@/lib/utils'
import { Currency, Moon, Network } from 'lucide-react'
import { useApp, useSettings } from '@metafox/wallet-store'

export const Preferences = () => {
  const { selected_network } = useApp()
  const { baseCurrency, openAsSidePanel } = useSettings()
  const Preferences = [
    {
      title: 'Currency',
      titleIcon: Currency,
      subTitle: capitalize(baseCurrency),
      onClick: () => {
        return
      },
    },
    {
      title: 'Network',
      titleIcon: Network,
      subTitle: capitalize('mainnet'),
      onClick: () => {
        return
      },
    },
    {
      title: 'Theme',
      titleIcon: Moon,
      subTitle: capitalize('theme'),
      onClick: () => {
        return
      },
    },
    {
      title: 'Side Panel',
      titleIcon: Moon,
      onClick: () => {
        return
      },
    },
  ]

  return (
    <SectionCard title='Pre'>
      {Preferences.map((item, index) => {
        return (
          <React.Fragment key={item.title}>
            {index !== 0 && <SectionDivider />}
            <SectionItem
              property={item.title}
              imgSrc={item.titleIcon}
              value={item.subTitle}
              onClick={item.onClick}
            />
          </React.Fragment>
        )
      })}
    </SectionCard>
  )
}
