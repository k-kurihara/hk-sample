// グローバルスタイル
import './styles/global.scss'

// ヘッダー
import headerHtml from './components/header.html'
import './components/header.scss'

// フッター
import footerHtml from './components/footer.html'
import './components/footer.scss'

// DOMに挿入
document.body.insertAdjacentHTML('afterbegin', headerHtml)
document.body.insertAdjacentHTML('beforeend', footerHtml)
