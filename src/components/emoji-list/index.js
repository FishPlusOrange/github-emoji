import React from 'react'

import { copy } from '../../utils'
import styles from './style'

export default ({ emojiList }) => (
  <ul className={styles.list}>
    {emojiList.map(emojiItem => (
      <li
        key={emojiItem}
        className={styles.item}
        style={{ backgroundImage: `url(./emojis/${emojiItem}.png)` }}
        onClick={() => {
          copy(`:${emojiItem}:`)
          window.close()
        }}
      />
    ))}
  </ul>
)
