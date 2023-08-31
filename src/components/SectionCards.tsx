import React from 'react'
import { Cards } from './Cards'

export const SectionCards: React.FC = () => {
  return (
    <div>
      <div className='container mx-auto grid grid-cols-3 gap-14 w-10/12'>
        <Cards
          title='Remember your payments'
          featuredMsg='Remind Pay'
          msg='will keep you updated on your subscriptions and send you an alert before they expire.'
          icon='icon-card.svg'
        />
        <Cards
          title='Keep track of your subscriptions'
          msg='Get full control of all your subscriptions.'
          icon='icon-list.svg'
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
