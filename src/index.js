import emojis from './emojis'
import styles from './index'
import { copy } from './utils'

const app = document.getElementById('app')

// 遍历插入
emojis.forEach(emojiList => {
  // 类名
  const title = document.createElement('span')

  title.className = styles.emojiTitle
  title.innerHTML = emojiList.title
  app.appendChild(title)
  // 各类容器
  const list = document.createElement('ul')

  list.className = styles.emojiList
  // 各类内容
  emojiList.emojis.forEach(emojiItem => {
    const item = document.createElement('li')

    item.className = styles.emojiItem
    // 设置 emoji 背景图片
    item.style.backgroundImage = `url(${emojiItem.url})`
    // 复制到剪切板
    item.addEventListener('click', () => {
      copy(emojiItem.code)
      window.close()
    })
    list.appendChild(item)
  })
  app.appendChild(list)
})
