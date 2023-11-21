import React from 'react'
import { Cards } from './Cards'

export const SectionCards: React.FC = () => {
  return (
    <div className='h-[650px] md:h-[500px] pt-20 pb-28 w-full flex justify-center'>
      <div className='max-w-[900px] flex  flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-16 w-full px-2'>
        <Cards
          title='Remember your payments'
          featuredMsg='Remind Pay'
          msg='will keep you updated on your subscriptions and send you an alert before they expire.'
          icon='icon-card.svg'
          size={23}
        />
        <Cards
          title='Keep track of your subscriptions'
          msg='Get full control of all your subscriptions.'
          icon='icon-list.svg'
          size={26}
        />
        <Cards
          title='Alerts you to subscription offers'
          msg='Receive a notification when the subscription you want is at a low cost'
          icon='icon-bell.svg'
        />
      </div>
    </div>
  )
}
