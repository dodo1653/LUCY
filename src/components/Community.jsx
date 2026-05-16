export default function Community({ config }) {
  return (
    <section id="community">
      <p className="section-tag">— No. 03</p>
      <h2 className="com-h">stand with <em>lucy</em>.</h2>
      <p className="com-sub">Follow the story</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
        {config.instagramHandle && (
          <a 
            href={`https://instagram.com/${config.instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="com-link-btn"
          >
            📷 @{config.instagramHandle}
          </a>
        )}
        {config.twitterHandle && (
          <a 
            href={`https://x.com/${config.twitterHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="com-link-btn"
          >
            𝕏 @{config.twitterHandle}
          </a>
        )}
      </div>

      {config.instagramPostId && (
        <div className="com-embed">
          <div className="com-embed-card">
            <div className="com-embed-header">
              <div className="com-embed-avatar" style={{ background: 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)' }} />
              <div>
                <div className="com-embed-name">sana_aljamal82</div>
                <div className="com-embed-handle">@sana_aljamal82 · Instagram</div>
              </div>
            </div>
            <p className="com-embed-text">
              UPDATE ON "LUCY" 🐕❤️ Despite the fear and the obstacle of military checkpoints, the dog "Lucy" was successfully rescued and transferred to the hospital for urgent medical care, following a brutal attack by an armed settler north of Ramallah, Palestine.
            </p>
            <p className="com-embed-date">
              {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}