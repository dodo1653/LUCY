export default function Footer({ config }) {
  return (
    <footer>
      <div className="ft-wrap">
        <div className="ft-mega">{config.ticker}.</div>
        <div className="ft-meta">
          <div>{config.ticker} is a meme coin · not financial advice.</div>
          <div>© {new Date().getFullYear()}</div>
          <div>website by <a href="https://x.com/dazzoxx" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'none' }}>@dazzoxx</a></div>
        </div>
      </div>
    </footer>
  )
}