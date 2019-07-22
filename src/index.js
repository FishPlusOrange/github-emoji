import emojis from './emojis'
import styles from './index'

let app = document.getElementById('app')

// 遍历插入
emojis.forEach(emojiList => {
  // 类名
  let title = document.createElement('span')
  title.className = styles.emojiTitle
  title.innerHTML = emojiList.title
  app.appendChild(title)

  // 各类容器
  let list = document.createElement('ul')
  list.className = styles.emojiList

  // 各类内容
  emojiList.emojis.forEach(emojiItem => {
    let item = document.createElement('li')
    item.className = styles.emojiItem

    // 设置 emoji 背景图片
    item.style.backgroundImage = `url(${emojiItem.url})`

    // 复制到剪切板
    item.addEventListener('click', () => {
      if (document.execCommand) {
        let input = document.createElement('input')
        document.body.appendChild(input)
        input.setAttribute('value', emojiItem.code)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
        alert(`${emojiItem.code} 已复制到剪切板`)
      } else {
        alert('无法复制到剪切板 error: document.execCommand')
      }
      window.close()
    })
    list.appendChild(item)
  })
  app.appendChild(list)
})
