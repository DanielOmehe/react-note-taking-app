import React from 'react'
import { MoreItemsWrapper, MoreItemsContainer, MoreItem } from './style'
import { NoteIcons } from '../../utils/style'
import { items } from '../../../data'

const MoreItems = () => {
  return (
    <MoreItemsWrapper>
        <h3>More</h3>
        <MoreItemsContainer>
        {
            items.map(({ name, icon }) => (
                <MoreItem>
                    <NoteIcons src={icon} alt={name} />
                    <p>{name}</p>
                </MoreItem>
            ))
        }
        </MoreItemsContainer>
    </MoreItemsWrapper>
  )
}

export default MoreItems
