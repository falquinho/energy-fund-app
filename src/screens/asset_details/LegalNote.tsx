import React from 'react'
import { FlatCard } from '../../components/FlatCard'
import { TextLabel } from '../../components/TextLabel'


export const LegalNote: React.FC = () => {
  return (
    <FlatCard>
      <TextLabel>
        Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order. 
      </TextLabel>
      <TextLabel></TextLabel>
      <TextLabel>
        The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.
      </TextLabel>
    </FlatCard>
  )
}