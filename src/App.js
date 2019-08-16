import React, { Fragment } from 'react'

import emoji from './emoji'
import EmojiTitle from './components/emoji-title'
import EmojiList from './components/emoji-list'

export default () => {
  const app = []

  Object.keys(emoji).map(title =>
    app.push(
      <Fragment key={title}>
        <EmojiTitle title={title} />
        <EmojiList emojiList={emoji[title]} />
      </Fragment>
    )
  )

  return app
}
