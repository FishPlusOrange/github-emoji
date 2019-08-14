// 复制到剪切板
export const copy = content => {
  if (document.execCommand) {
    const input = document.createElement('input')

    document.body.appendChild(input)
    input.setAttribute('value', content)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    alert(`${content} 已复制到剪切板`)
  } else {
    alert('复制到剪切板失败')
  }
}
